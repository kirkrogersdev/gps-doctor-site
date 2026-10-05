import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Receipt, HeartPulse, Languages } from 'lucide-react'
import { PageHero, Section, SectionHeading } from '../components/Section'
import { site } from '../lib/site'
import { useTitle } from '../lib/useTitle'

export default function Contact() {
  useTitle('Contact', `Contact Geriatric Professional Services in Joliet, IL. Call ${site.phone} for appointments, billing questions and Chronic Care Management.`)
  const mapsQuery = encodeURIComponent(`${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`)
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="We answer the phone."
        lede="To schedule a visit, contact your community nurse or call the front desk. For everything else, the details below will get you to the right person."
      >
        <a href={site.phoneHref} className="btn-primary"><Phone className="h-4 w-4" aria-hidden="true" /> Call {site.phone}</a>
      </PageHero>

      <Section>
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-7">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                { icon: Phone, label: 'Phone', value: site.phone, href: site.phoneHref },
                { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
                { icon: MapPin, label: 'Office', value: `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`, href: `https://www.google.com/maps/search/?api=1&query=${mapsQuery}` },
                { icon: Clock, label: 'Hours', value: site.hours },
              ].map(({ icon: Icon, label, value, href }) => (
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
                Questions about a statement, an insurance denial, a payment you made or setting up a payment plan? Call the office at{' '}
                <a href={site.phoneHref} className="font-semibold text-forest-600 underline underline-offset-4">{site.phone}</a> and ask for billing,
                or email <a href={`mailto:${site.email}?subject=Billing%20question`} className="font-semibold text-forest-600 underline underline-offset-4">{site.email}</a> with
                "Billing question" in the subject line. Please do not email card numbers.
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
            <div className="overflow-hidden rounded-[1.75rem] border border-forest-900/10 bg-white">
              <iframe
                title="Map to Geriatric Professional Services"
                src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
                className="h-72 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-6 text-sm text-ink/75">
                Most visits happen where you live: at home or in your assisted living or long-term care community. The office address is for
                correspondence and billing.
              </div>
            </div>
            <div className="rounded-[1.75rem] bg-forest-900 p-8 text-cream">
              <p className="font-semibold">Medical emergency?</p>
              <p className="mt-1 text-cream/75">Call 911 or go to the nearest emergency room. This website and email are not monitored for urgent needs.</p>
            </div>
            <div className="flex items-start gap-3 rounded-[1.75rem] border border-forest-900/10 bg-white p-6 text-sm text-ink/75">
              <Languages className="mt-0.5 h-5 w-5 shrink-0 text-forest-500" aria-hidden="true" />
              <p>
                Free language assistance and accessibility aids are available. Call {site.phone}. <Link to="/nondiscrimination" className="underline underline-offset-4">Read our nondiscrimination notice.</Link>
              </p>
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
