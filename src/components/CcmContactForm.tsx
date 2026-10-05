import { useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle2, Loader2, Phone, Mail, AlertCircle } from 'lucide-react'
import { site } from '../lib/site'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function CcmContactForm() {
  const [preferred, setPreferred] = useState<'phone' | 'email'>('phone')
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string>('')
  const [mismatch, setMismatch] = useState<string>('')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setMismatch('')
    setError('')
    const form = e.currentTarget
    const data = new FormData(form)

    const phone = String(data.get('phone') || '').trim()
    const phoneConfirm = String(data.get('phoneConfirm') || '').trim()
    const email = String(data.get('email') || '').trim()
    const emailConfirm = String(data.get('emailConfirm') || '').trim()

    if (preferred === 'phone' && phone.replace(/\D/g, '') !== phoneConfirm.replace(/\D/g, '')) {
      setMismatch('The phone numbers do not match. Please check and try again.')
      return
    }
    if (preferred === 'email' && email.toLowerCase() !== emailConfirm.toLowerCase()) {
      setMismatch('The email addresses do not match. Please check and try again.')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('/api/ccm-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          relationship: data.get('relationship'),
          preferredContact: preferred,
          phone: preferred === 'phone' ? phone : undefined,
          email: preferred === 'email' ? email : undefined,
          bestTime: data.get('bestTime'),
          message: data.get('message'),
          consent: data.get('consent') === 'on',
          website: data.get('website'), // honeypot
        }),
      })
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.error || 'Something went wrong.')
      }
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-[2rem] border border-forest-900/10 bg-white p-8 text-center sm:p-12" role="status">
        <CheckCircle2 className="mx-auto h-12 w-12 text-forest-500" aria-hidden="true" />
        <h3 className="mt-4 text-3xl text-forest-900">Thank you. The CCM team has your request.</h3>
        <p className="mx-auto mt-3 max-w-md text-ink/75">
          A care coordinator will reach out using the contact method you chose, usually within one to two business days.
          If you need to reach us sooner, call <a href={site.phoneHref} className="font-semibold text-forest-600 underline underline-offset-4">{site.phone}</a>.
        </p>
        <button type="button" onClick={() => setStatus('idle')} className="btn-secondary mt-8">
          Send another request
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[2rem] border border-forest-900/10 bg-white p-6 sm:p-10" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="label">Your name <span className="text-forest-500">*</span></label>
          <input id="name" name="name" required autoComplete="name" className="field" placeholder="First and last name" />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="relationship" className="label">I am</label>
          <select id="relationship" name="relationship" className="field" defaultValue="patient">
            <option value="patient">The patient</option>
            <option value="family">A family member or caregiver</option>
            <option value="facility">Facility or community staff</option>
            <option value="other">Other</option>
          </select>
        </div>

        <fieldset className="sm:col-span-2">
          <legend className="label">How should the CCM team reach you? <span className="text-forest-500">*</span></legend>
          <div className="mt-1 grid gap-3 sm:grid-cols-2">
            {([
              ['phone', 'Call me', Phone],
              ['email', 'Email me', Mail],
            ] as const).map(([val, label, Icon]) => (
              <label
                key={val}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${
                  preferred === val ? 'border-forest-900 bg-forest-50' : 'border-sand-dark hover:border-forest-900/40'
                }`}
              >
                <input
                  type="radio"
                  name="preferredContact"
                  value={val}
                  checked={preferred === val}
                  onChange={() => setPreferred(val)}
                  className="h-4 w-4 accent-forest-900"
                />
                <Icon className="h-4 w-4 text-forest-600" aria-hidden="true" />
                <span className="font-medium text-ink">{label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        {preferred === 'phone' ? (
          <>
            <div>
              <label htmlFor="phone" className="label">Phone number <span className="text-forest-500">*</span></label>
              <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" className="field" placeholder="(815) 555-0123" />
            </div>
            <div>
              <label htmlFor="phoneConfirm" className="label">Confirm phone number <span className="text-forest-500">*</span></label>
              <input id="phoneConfirm" name="phoneConfirm" type="tel" required inputMode="tel" className="field" placeholder="(815) 555-0123" onPaste={(e) => e.preventDefault()} />
            </div>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="email" className="label">Email address <span className="text-forest-500">*</span></label>
              <input id="email" name="email" type="email" required autoComplete="email" className="field" placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="emailConfirm" className="label">Confirm email address <span className="text-forest-500">*</span></label>
              <input id="emailConfirm" name="emailConfirm" type="email" required className="field" placeholder="you@example.com" onPaste={(e) => e.preventDefault()} />
            </div>
          </>
        )}

        <div className="sm:col-span-2">
          <label htmlFor="bestTime" className="label">Best time to reach you</label>
          <select id="bestTime" name="bestTime" className="field" defaultValue="any">
            <option value="any">Any time during business hours</option>
            <option value="morning">Mornings</option>
            <option value="afternoon">Afternoons</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="label">How can the CCM team help? <span className="text-forest-500">*</span></label>
          <textarea id="message" name="message" required rows={4} maxLength={1000} className="field" placeholder="For example: I'd like to know whether my mother qualifies for Chronic Care Management." />
          <p className="mt-1.5 text-xs text-stone">
            Please keep it brief and leave out detailed medical information. The care team will go over specifics with you by phone.
          </p>
        </div>

        {/* Honeypot: hidden from people, filled by bots. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="sm:col-span-2">
          <label className="flex items-start gap-3 text-sm text-ink/80">
            <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 accent-forest-900" />
            <span>
              I agree to be contacted by the Geriatric Professional Services care team about Chronic Care Management using the method
              I selected above. See our <Link to="/privacy" className="underline underline-offset-4">Privacy Policy</Link>.
            </span>
          </label>
        </div>
      </div>

      {(mismatch || status === 'error') && (
        <div role="alert" className="mt-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{mismatch || error} If the problem continues, call us at {site.phone}.</span>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === 'sending'} className="btn-primary disabled:opacity-60">
          {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : null}
          {status === 'sending' ? 'Sending…' : 'Ask the CCM team to contact me'}
        </button>
        <p className="text-xs text-stone">Not for emergencies. If this is an emergency, call 911.</p>
      </div>
    </form>
  )
}
