# gps.doctor — Geriatric Professional Services

Marketing and patient-services website for **Dr. Karim Tourk, MD** and **Amanda Jenkins, APN** (Geriatric Professional Services, S.C., Joliet, IL).

Built with Vite + React 19 + TypeScript + Tailwind v4, deployed on Vercel. One serverless function handles the Chronic Care Management (CCM) contact form.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home: hero, care settings, pillars, team teaser, CCM promo, quick links |
| `/about` | Provider bios, ABIM badge with verification link |
| `/services` | Assisted living rounds, house calls, telehealth, CCM, med management, care planning |
| `/chronic-care-management` | Eligibility, what's included, cost/consent FAQ, **CCM contact form** |
| `/patients` | Pay bill, billing support, CCM, privacy, **Fullscript store** |
| `/pay` | Stripe payment entry point (env-driven), pay-by-phone fallback, billing support |
| `/contact` | Phone/email/address/hours, billing section (`#billing`), map, facilities blurb |
| `/privacy`, `/notice-of-privacy-practices`, `/terms`, `/refund-policy`, `/accessibility`, `/nondiscrimination` | Legal set required for Stripe review, HIPAA and ACA §1557 |

All practice details (phone, address, email, hours, provider bios, Fullscript link, ABIM badge) live in `src/lib/site.ts`.

## Develop

```bash
npm install
npm run dev
```

## Environment

Copy `.env.example` to `.env` (local) and set the same keys in the Vercel project.

- `VITE_STRIPE_PAYMENT_URL` — Stripe Payment Link / portal URL. Empty = "online payments being activated" state on `/pay`.
- `VITE_BILLING_SUPPORT_URL` — optional external billing portal; defaults to `/contact#billing`.
- `SPARROWELL_INTAKE_URL`, `SPARROWELL_INTAKE_TOKEN` — forward CCM form posts into the SparroWell consent console.
- `RESEND_API_KEY`, `CCM_TEAM_EMAIL`, `CCM_FROM_EMAIL` — email the CCM team (and/or fallback).

At least one of the two delivery paths must be configured or the form returns 503 (it never silently drops a lead).

## Go-live checklist

See `docs/launch-checklist.md`.
