# Go-live checklist for gps.doctor

## Needed from Dr. Tourk / Katelyn
- [ ] **Headshots** for Dr. Tourk and Amanda Jenkins (the rack card photos work). Save as `public/team/karim-tourk.jpg` and `public/team/amanda-jenkins.jpg` (4:5 portrait, ≥1200px wide). The site shows a quiet "photo coming soon" placeholder until then.
- [ ] Confirm the public **email** for the practice (`Tourk@gps.doctor` is used today).
- [ ] Confirm **office address** (109 N 129th Infantry Dr, Joliet, IL 60435 from the state business record) and **hours**.
- [ ] Confirm **Amanda's title** as she wants it displayed ("APN" per rack card).
- [ ] **DNS**: point `gps.doctor` at Vercel (A `76.76.21.21` for apex, CNAME `cname.vercel-dns.com` for `www`) and remove the Squarespace parking page.
- [ ] **CCM form delivery**: Katelyn to provide the SparroWell consent-console intake endpoint + token (`SPARROWELL_INTAKE_URL`, `SPARROWELL_INTAKE_TOKEN`), and/or a team inbox for `CCM_TEAM_EMAIL` (with a Resend API key for `RESEND_API_KEY`).
- [ ] **Stripe**: once approved, create a Payment Link (or portal URL) and set `VITE_STRIPE_PAYMENT_URL`. Statement descriptor used on the site: `GPS DOCTOR` / `GERIATRIC PROFESSIONAL`; set it to match in Stripe.
- [ ] **Fullscript**: store link (`us.fullscript.com/welcome/ktourk`) is live in `src/lib/site.ts`; confirm the store is open.
- [ ] Review legal copy with counsel: Refund & Cancellation Policy, Terms, Website Privacy Policy, HIPAA Notice of Privacy Practices, §1557 Notice of Nondiscrimination (Illinois top-15 LEP languages included).

## What Stripe looks for (all present)
- Business name & address (footer, /pay, /refund-policy) · description of services (/services, /pay) · currency stated (USD) · phone + email contact beyond a form · refund/cancellation policy · privacy policy · terms · PCI/security statement (/pay) · site publicly reachable, not "under construction".

## Illinois-specific
- No patient testimonials (225 ILCS 60/26). None on the site; keep it that way.
- Board certification claim names the board (ABIM) and links to the verifiable badge.

## Deploy
```bash
vercel link        # once
vercel env add ... # per key in .env.example
vercel --prod
```
