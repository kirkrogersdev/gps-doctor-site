import { Link } from 'react-router-dom'
import { CreditCard, Receipt, Pill, HeartPulse, FileText, Phone, ExternalLink } from 'lucide-react'
import { PageHero, Section, SectionHeading } from '../components/Section'
import { site } from '../lib/site'
import { useTitle } from '../lib/useTitle'

export default function Patients() {
  useTitle('For Patients', 'Patient resources for Geriatric Professional Services: pay your bill online, billing support, the Fullscript supplement store and Chronic Care Management enrollment.')
  const tiles = [
    { icon: CreditCard, title: 'Pay a bill', text: 'Secure online payment by credit card or bank account (eCheck).', to: '/pay', cta: 'Go to payments' },
    { icon: Receipt, title: 'Billing support', text: 'Questions about a statement, insurance or a payment plan? Our billing team can help.', to: site.billingSupportUrl, cta: 'Get billing help' },
    { icon: HeartPulse, title: 'Chronic Care Management', text: 'Learn about the program, check eligibility and ask the CCM team to call you.', to: '/chronic-care-management', cta: 'About CCM' },
    { icon: FileText, title: 'Privacy & your rights', text: 'How we protect your health information, and your rights under HIPAA.', to: '/notice-of-privacy-practices', cta: 'Read the notice' },
  ]
  return (
    <>
      <PageHero
        eyebrow="For patients & families"
        title="Everything you need, in one place"
        lede="Payments, billing help, supplements and program information. If you cannot find what you are looking for, call us and a real person will help."
      >
        <a href={site.phoneHref} className="btn-primary"><Phone className="h-4 w-4" aria-hidden="true" /> {site.phone}</a>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {tiles.map(({ icon: Icon, title, text, to, cta }) => {
            const external = to.startsWith('http')
            const inner = (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-600">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-2xl text-forest-900">{title}</h2>
                <p className="mt-2 text-ink/75">{text}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-600 group-hover:text-forest-900">
                  {cta} {external && <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />}
                </span>
              </>
            )
            const cls = 'group rounded-[1.75rem] border border-forest-900/10 bg-white p-8 transition hover:border-forest-900/30 hover:shadow-lg hover:shadow-forest-900/5'
            return external ? (
              <a key={title} href={to} target="_blank" rel="noopener noreferrer" className={cls}>{inner}</a>
            ) : (
              <Link key={title} to={to} className={cls}>{inner}</Link>
            )
          })}
        </div>
      </Section>

      <Section tone="sand" id="supplements">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Supplement store"
              title="Professional-grade supplements, recommended by your doctor"
              lede="Dr. Tourk's online dispensary is hosted by Fullscript. Order the exact products and doses he recommends, shipped directly to you, with the quality control of a professional supplier."
            />
            <a href={site.fullscript.url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
              <Pill className="h-4 w-4" aria-hidden="true" /> Visit the Fullscript store <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <p className="mt-4 max-w-md text-xs text-stone">
              Fullscript is an independent company. Purchases are made on Fullscript's website under its terms and privacy policy.
              Please talk with Dr. Tourk before starting any new supplement.
            </p>
          </div>
          <a href={site.fullscript.url} target="_blank" rel="noopener noreferrer" className="mx-auto block w-full max-w-xs rounded-[1.75rem] bg-white p-6 shadow-sm transition hover:shadow-xl hover:shadow-forest-900/10">
            <img src={site.fullscript.buttonImg} alt="Order supplements through my Fullscript store." className="w-full" loading="lazy" />
          </a>
        </div>
      </Section>
    </>
  )
}
