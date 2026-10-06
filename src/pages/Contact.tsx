import { Link } from 'react-router-dom'
import { Phone, MapPin, Receipt, HeartPulse } from 'lucide-react'
import { PageHero, Section, SectionHeading } from '../components/Section'
import { site } from '../lib/site'
import { useTitle } from '../lib/useTitle'

export default function Contact() {
  useTitle('Contact', `Contact Geriatric Professional Services. Call ${site.phone} for the care team, ${site.billingPhone} for billing, or reach the Chronic Care Management team online.`)
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch"
        lede="To schedule a visit, contact your community nurse or call our Chronic Care Management team."
      >
        <a href={site.phoneHref} className="btn-primary"><Phone className="h-4 w-4" aria-hidden="true" /> Call {site.phone}</a>
      </PageHero>

      <Section>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { icon: Phone, label: 'Phone', value: site.phone, href: site.phoneHref },
                { icon: Receipt, label: 'Billing department', value: site.billingPhone, href: site.billingPhoneHref },
                { icon: MapPin, label: 'Office', value: `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}` },
              ].map(({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href?: string }) => (
                <div key={label} className="rounded-[1.75rem] border border-forest-900/10 bg-white p-6">
                  <Icon className="h-5 w-5 text-forest-500" aria-hidden="true" />
                  <p className="eyebrow mt-4">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="mt-1 block text-lg font-medium text-forest-900 hover:text-forest-600">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-lg font-medium text-forest-900">{value}</p>
                  )}
                </div>
              ))}
            </div>

            <div id="billing" className="scroll-mt-28 rounded-[1.75rem] border border-forest-900/10 bg-white p-8">
              <div className="flex items-center gap-3">
                <Receipt className="h-6 w-6 text-forest-500" aria-hidden="true" />
                <h2 className="text-3xl text-forest-900">Billing support</h2>
              </div>
              <p className="mt-3 text-ink/75">
                Questions about a statement, an insurance denial, a payment you made or setting up a payment plan? Call the billing department at{' '}
                <a href={site.billingPhoneHref} className="font-semibold text-forest-600 underline underline-offset-4">{site.billingPhone}</a>.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link to="/pay" className="btn-primary">Pay a bill</Link>
                <Link to="/refund-policy" className="btn-secondary">Refund &amp; cancellation policy</Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-forest-900/10 bg-white p-8">
              <div className="flex items-center gap-3">
                <HeartPulse className="h-6 w-6 text-forest-500" aria-hidden="true" />
                <h2 className="text-3xl text-forest-900">Chronic Care Management team</h2>
              </div>
              <p className="mt-3 text-ink/75">
                Want to learn about the program, check eligibility or send a note to your care coordinator? Use the CCM contact form and tell us how
                you would like to be reached.
              </p>
              <Link to="/chronic-care-management#contact" className="btn-secondary mt-5">Contact the CCM team</Link>
            </div>
          </div>

          <aside className="space-y-6 lg:col-span-5">
            <div className="rounded-[1.75rem] border border-forest-900/10 bg-white p-6 text-sm text-ink/75">
              Visits happen where you live: in your assisted living, memory care or long-term care community. The office address is for
              correspondence and billing.
            </div>
            <div className="rounded-[1.75rem] bg-forest-900 p-8 text-cream">
              <p className="font-semibold">Medical emergency?</p>
              <p className="mt-1 text-cream/75">Call 911 or go to the nearest emergency room. This website and email are not monitored for urgent needs.</p>
            </div>
          </aside>
        </div>
      </Section>

      <Section tone="sand" className="!py-16">
        <SectionHeading
          eyebrow="Facilities & referring providers"
          title="Working with assisted living and long-term care communities"
          lede={`If you are a nurse, administrator or case manager who would like Dr. Tourk and Amanda to see residents in your community, call ${site.phone}. We coordinate rounding schedules, orders and communication to fit the way your building works.`}
        />
      </Section>
    </>
  )
}
