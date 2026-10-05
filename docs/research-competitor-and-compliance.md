# Research: design patterns, CCM content, Stripe and compliance

Summary of research conducted 2026-10-05 while building gps.doctor. Full source list at bottom.

## Build-affecting findings
1. **Illinois bans patient testimonials in physician advertising** (225 ILCS 60/26). Site uses credentials and specifics instead.
2. **ACA §1557** requires a Notice of Nondiscrimination and a Notice of Availability of free language assistance (English + 15 most common Illinois LEP languages) on provider websites. Implemented at `/nondiscrimination`.
3. **Stripe website review** needs: business name, clear service description, USD pricing context, contact beyond a form (phone + email), refund/cancellation policy, privacy policy, address, PCI/security line, card brands, and a site that is not "under construction".
4. **CCM copy** should lead with between-visit support, state cost honestly (~20% coinsurance ≈ $13/mo at 2026 national rates, usually $0 with Medigap/Medicaid), and include the CMS consent facts (cost sharing, one practitioner per month, stop any time effective end of month).
5. **Fullscript** disclosure: AMA 9.6.4 + FTC "clear and conspicuous" → disclose the practice may receive a portion of sales, no obligation to buy, products available elsewhere, talk to the doctor first.

## Patterns borrowed from strong practice sites
- Hero = human promise + concrete specifics + one primary CTA (Huntington DPC, Halcyon Health, Clear Health).
- Proof strip right under the hero; doctor as a first-class nav item; doctor card with "verify certification" link.
- Footer carries full legal set: Privacy, HIPAA NPP, Terms, Accessibility, Nondiscrimination, address, phone, hours, current © year.
- Avoid: vague headlines, sliders, stock photos, stale copyright, hiding payment/insurance info.

## Key CCM facts (CMS / Medicare.gov)
- Eligibility: Medicare Part B, 2+ chronic conditions expected to last ≥12 months, significant risk of death/decompensation/decline.
- Included: comprehensive care plan, 24/7 access for urgent needs, transitions support, medication review, designated care team member, ≥20 min/month clinical staff time.
- Cost: Part B deductible then 20% coinsurance; Medigap wraps; most dual-eligibles pay nothing.
- Consent: verbal or written, documented, before billing; disclose cost sharing, one-practitioner rule, right to stop.

## Sources
Stripe: https://docs.stripe.com/get-started/checklist/website · https://support.stripe.com/questions/business-website-for-account-activation-faq
CCM: https://www.medicare.gov/coverage/chronic-care-management-services · https://www.cms.gov/About-CMS/Agency-Information/OMH/Downloads/connected-hcptoolkit.pdf · https://www.hhs.gov/guidance/sites/default/files/hhs-guidance-documents/CMS/mln909188_chroniccaremanagement_jun2025.pdf · https://www.healthrecoverysolutions.com/blog/2026-rpm-and-ccm-reimbursement-codes-and-payment-updates
Legal: https://www.law.cornell.edu/cfr/text/45/164.520 · https://www.stevenslee.com/health-law-observer-blog/u-s-department-of-health-and-human-services-issues-final-rule-expanding-nondiscrimination-protections/ · https://www.etnainteractive.com/blog/illinois-medical-marketing-laws/ · https://code-medical-ethics.ama-assn.org/ethics-opinions/sale-health-related-products · https://www.abim.org/certification/exam-information/professional-integrity-exam-ethics/representation-of-credentials
Design: https://huntingtondpc.com/ · https://www.halcyonhealthdpc.com/ · https://www.clearhealthdpc.com/ · https://www.parsleyhealth.com/ · https://www.markbrinker.com/?p=11429
