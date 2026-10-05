import type { VercelRequest, VercelResponse } from '@vercel/node'

/**
 * CCM contact intake.
 *
 * Receives the "Contact the CCM team" form and routes it to the care team:
 *   1. If SPARROWELL_INTAKE_URL is set, POSTs the submission to the SparroWell consent
 *      console so it lands in the team's queue (Katelyn's request).
 *   2. If RESEND_API_KEY + CCM_TEAM_EMAIL are set, emails the team as well (or as a fallback).
 * If neither is configured the request fails loudly so the site never silently drops a lead.
 *
 * Kept deliberately light on medical detail; the message field is capped at 1,000 chars and
 * the UI asks patients not to include health information.
 */

type Payload = {
  name?: string
  relationship?: string
  preferredContact?: 'phone' | 'email'
  phone?: string
  email?: string
  bestTime?: string
  message?: string
  consent?: boolean
  website?: string // honeypot
}

const MAX = { name: 120, message: 1000, phone: 32, email: 254, relationship: 32, bestTime: 32 }

const clean = (v: unknown, max: number) => (typeof v === 'string' ? v.trim().slice(0, max) : '')
const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c] as string)

// Very small in-memory limiter per warm instance: 5 submissions / 10 min / IP.
const hits = new Map<string, number[]>()
function rateLimited(ip: string) {
  const now = Date.now()
  const recent = (hits.get(ip) || []).filter((t) => now - t < 10 * 60_000)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > 5
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const ip = (req.headers['x-forwarded-for'] as string | undefined)?.split(',')[0]?.trim() || req.socket.remoteAddress || 'unknown'
  if (rateLimited(ip)) return res.status(429).json({ error: 'Too many requests. Please call the office instead.' })

  const body = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {}) as Payload

  // Honeypot filled → pretend success, drop silently.
  if (body.website) return res.status(200).json({ ok: true })

  const name = clean(body.name, MAX.name)
  const message = clean(body.message, MAX.message)
  const relationship = clean(body.relationship, MAX.relationship) || 'patient'
  const bestTime = clean(body.bestTime, MAX.bestTime) || 'any'
  const preferredContact = body.preferredContact === 'email' ? 'email' : 'phone'
  const phone = clean(body.phone, MAX.phone)
  const email = clean(body.email, MAX.email).toLowerCase()

  if (!name || !message) return res.status(400).json({ error: 'Please fill in your name and a short message.' })
  if (!body.consent) return res.status(400).json({ error: 'Please confirm you agree to be contacted.' })
  if (preferredContact === 'phone' && phone.replace(/\D/g, '').length < 10) return res.status(400).json({ error: 'Please enter a valid phone number.' })
  if (preferredContact === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Please enter a valid email address.' })

  const submission = {
    source: 'gps.doctor/chronic-care-management',
    submittedAt: new Date().toISOString(),
    name,
    relationship,
    preferredContact,
    phone: preferredContact === 'phone' ? phone : null,
    email: preferredContact === 'email' ? email : null,
    bestTime,
    message,
    consent: true,
    ip,
    userAgent: clean(req.headers['user-agent'], 255),
  }

  const results: Record<string, string> = {}

  // 1. SparroWell consent console
  const intakeUrl = process.env.SPARROWELL_INTAKE_URL
  if (intakeUrl) {
    try {
      const r = await fetch(intakeUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(process.env.SPARROWELL_INTAKE_TOKEN ? { Authorization: `Bearer ${process.env.SPARROWELL_INTAKE_TOKEN}` } : {}),
        },
        body: JSON.stringify(submission),
      })
      results.sparrowell = r.ok ? 'ok' : `http ${r.status}`
    } catch (err) {
      results.sparrowell = `error: ${(err as Error).message}`
    }
  }

  // 2. Email the CCM team
  const resendKey = process.env.RESEND_API_KEY
  const teamEmail = process.env.CCM_TEAM_EMAIL
  if (resendKey && teamEmail) {
    const from = process.env.CCM_FROM_EMAIL || 'GPS Website <no-reply@gps.doctor>'
    const contactLine = preferredContact === 'phone' ? `Call: ${phone}` : `Email: ${email}`
    const html = `
      <h2 style="font-family:Georgia,serif;color:#1f3d2b">New CCM contact request</h2>
      <table style="font-family:system-ui,sans-serif;font-size:15px;border-collapse:collapse">
        <tr><td style="padding:4px 12px 4px 0;color:#6b6a63">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6b6a63">Relationship</td><td>${escapeHtml(relationship)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6b6a63">Preferred contact</td><td><strong>${escapeHtml(contactLine)}</strong></td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6b6a63">Best time</td><td>${escapeHtml(bestTime)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6b6a63;vertical-align:top">Message</td><td style="white-space:pre-wrap">${escapeHtml(message)}</td></tr>
        <tr><td style="padding:4px 12px 4px 0;color:#6b6a63">Submitted</td><td>${submission.submittedAt}</td></tr>
      </table>
      <p style="font-family:system-ui,sans-serif;font-size:12px;color:#6b6a63">Sent from the Chronic Care Management form on gps.doctor${results.sparrowell ? ` · SparroWell intake: ${escapeHtml(results.sparrowell)}` : ''}</p>`
    try {
      const r = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from,
          to: teamEmail.split(',').map((s) => s.trim()),
          subject: `CCM contact request: ${name} (${preferredContact === 'phone' ? 'call back' : 'email back'})`,
          html,
          ...(preferredContact === 'email' ? { reply_to: email } : {}),
        }),
      })
      results.email = r.ok ? 'ok' : `http ${r.status}`
    } catch (err) {
      results.email = `error: ${(err as Error).message}`
    }
  }

  const delivered = Object.values(results).some((v) => v === 'ok')
  if (!delivered) {
    console.error('CCM contact not delivered', { results, configured: { intakeUrl: !!intakeUrl, resend: !!(resendKey && teamEmail) } })
    return res.status(503).json({ error: 'We could not send your request right now. Please call the office.' })
  }

  return res.status(200).json({ ok: true })
}
