import { Link } from 'react-router-dom'
import { CreditCard, Landmark, Lock, Phone, Receipt } from 'lucide-react'
import { PageHero, Section } from '../components/Section'
import { site } from '../lib/site'
import { useTitle } from '../lib/useTitle'

export default function Pay() {
  useTitle('Pay a Bill', 'Pay your Geriatric Professional Services bill securely online by credit card or eCheck, or by phone.')
  const live = Boolean(site.stripePaymentUrl)
  return (
    <>
      <PageHero
        eyebrow="Payments"
        title="Pay your bill"
        lede="Payments for medical services provided by Geriatric Professional Services, S.C. Pay securely online by credit or debit card or by bank account (eCheck), or call the office to pay by phone."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-[2rem] border border-forest-900/10 bg-white p-8 sm:p-10">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-forest-500" aria-hidden="true" />
                <p className="text-sm font-semibold text-forest-900">Secure payment processing by Stripe</p>
              </div>
              <h2 className="mt-4 text-3xl text-forest-900">Make a payment online</h2>
              <p className="mt-3 text-ink/75">
                Have your statement handy. You will be asked for the patient's name, the account or statement number and the amount
                you wish to pay. Card details are entered on Stripe's secure, encrypted checkout and are never stored on our servers.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-3 rounded-2xl bg-forest-50 p-4 text-sm text-forest-900">
                  <CreditCard className="h-5 w-5 text-forest-600" aria-hidden="true" /> Visa, Mastercard, Amex, Discover
                </li>
                <li className="flex items-center gap-3 rounded-2xl bg-forest-50 p-4 text-sm text-forest-900">
                  <Landmark className="h-5 w-5 text-forest-600" aria-hidden="true" /> Bank account (ACH / eCheck)
                </li>
              </ul>
              <div className="mt-8">
                {live ? (
                  <a href={site.stripePaymentUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full sm:w-auto">
                    <Lock className="h-4 w-4" aria-hidden="true" /> Continue to secure payment
                  </a>
                ) : (
                  <div className="rounded-2xl border border-dashed border-forest-900/25 bg-sand/50 p-5">
                    <p className="font-semibold text-forest-900">Online payments are being activated.</p>
                    <p className="mt-1 text-sm text-ink/75">
                      Until then, call <a href={site.phoneHref} className="font-semibold text-forest-600 underline underline-offset-4">{site.phone}</a> to pay by card over the phone.
                      We will confirm your payment and can email a receipt on request.
                    </p>
                  </div>
                )}
              </div>
              <p className="mt-6 text-xs text-stone">
                By making a payment you agree to our <Link to="/terms" className="underline underline-offset-4">Terms of Use</Link> and{' '}
                <Link to="/refund-policy" className="underline underline-offset-4">Refund &amp; Cancellation Policy</Link>.
                Payments are processed by Stripe, Inc. on behalf of {site.legalName} The charge will appear on your statement as{' '}
                <span className="font-semibold">GPS DOCTOR</span> or <span className="font-semibold">GERIATRIC PROFESSIONAL</span>.
              </p>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-[2rem] bg-forest-900 p-8 text-cream">
              <Phone className="h-6 w-6 text-leaf" aria-hidden="true" />
              <h3 className="mt-4 text-2xl text-cream">Prefer to pay by phone?</h3>
              <p className="mt-2 text-cream/75">Call the office during business hours and we will take your payment securely.</p>
              <a href={site.phoneHref} className="btn-light mt-6">{site.phone}</a>
              <p className="mt-4 text-xs text-cream/60">{site.hours}</p>
            </div>
            <div id="billing" className="rounded-[2rem] border border-forest-900/10 bg-white p-8">
              <Receipt className="h-6 w-6 text-forest-500" aria-hidden="true" />
              <h3 className="mt-4 text-2xl text-forest-900">Questions about your statement?</h3>
              <p className="mt-2 text-ink/75">
                Our billing team can explain charges, help with insurance questions and set up a payment plan if you need one.
              </p>
              <Link to={site.billingSupportUrl} className="btn-secondary mt-6">Contact billing support</Link>
            </div>
            <div className="rounded-[2rem] border border-forest-900/10 bg-white p-8 text-sm text-ink/75">
              <h3 className="text-xl text-forest-900">What you are paying for</h3>
              <p className="mt-2">
                Patient balances for medical services rendered by {site.legalName}: physician and nurse practitioner visits,
                telehealth visits, Chronic Care Management coinsurance and other services billed to you after insurance.
                Fees vary by service and by insurance plan; your statement lists each charge.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}
