import { Link } from 'react-router-dom'
import { Home, Building2, Video, HeartPulse, Pill, ClipboardList, Users, ArrowRight } from 'lucide-react'
import { PageHero, Section, SectionHeading } from '../components/Section'
import { site } from '../lib/site'
import { useTitle } from '../lib/useTitle'

const services = [
  {
    icon: Building2,
    title: 'Assisted living & long-term care rounds',
    text: 'Dr. Tourk and Amanda see patients where they live. We round regularly in assisted living and skilled nursing communities and coordinate directly with your nursing staff so changes are caught early.',
  },
  {
    icon: Home,
    title: 'House calls',
    text: 'For patients who find it difficult to travel, we bring primary care to the home: exams, medication review, lab orders and follow-up, all without the waiting room.',
  },
  {
    icon: Video,
    title: 'Telehealth visits',
    text: 'Secure video visits for follow-ups, medication questions and check-ins. Family members are welcome to join from wherever they are.',
  },
  {
    icon: HeartPulse,
    title: 'Chronic Care Management (CCM)',
    text: 'A Medicare benefit that adds a dedicated care team between visits: monthly outreach, a personalized care plan, medication reconciliation and help coordinating specialists.',
    to: '/chronic-care-management',
  },
  {
    icon: Pill,
    title: 'Medication management',
    text: 'Older adults often take many medications prescribed by many people. We review the whole list, simplify where we can and watch for interactions.',
  },
  {
    icon: ClipboardList,
    title: 'Care planning & advance directives',
    text: 'We help patients and families think through goals of care, document their wishes and make sure every provider involved knows them.',
  },
  {
    icon: Users,
    title: 'Family & caregiver communication',
    text: 'Clear, timely updates for the people who help you most. We return calls, explain what is happening and answer the hard questions honestly.',
  },
]

export default function Services() {
  useTitle('Services', 'Concierge geriatric and internal medicine services in Joliet, IL: assisted living rounds, house calls, telehealth, Chronic Care Management, medication management and care planning.')
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Specialized, quality concierge care for older adults"
        lede="Internal medicine and geriatrics delivered the way it should be: unhurried, coordinated and brought to wherever you call home."
      >
        <div className="flex flex-wrap gap-3">
          <a href={site.phoneHref} className="btn-primary">Call {site.phone}</a>
          <Link to="/chronic-care-management" className="btn-secondary">About Chronic Care Management</Link>
        </div>
      </PageHero>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {services.map(({ icon: Icon, title, text, to }) => (
            <div key={title} className="group rounded-[1.75rem] border border-forest-900/10 bg-white p-8 transition hover:border-forest-900/30 hover:shadow-lg hover:shadow-forest-900/5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-600">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-2xl text-forest-900">{title}</h2>
              <p className="mt-3 leading-relaxed text-ink/75">{text}</p>
              {to && (
                <Link to={to} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-forest-600 hover:text-forest-900">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Insurance & payment"
          title="Most insurances accepted. Are you covered?"
          lede="We accept Medicare and most major insurance plans. Call the office and we will confirm your coverage before your first visit. For patients and families, we also offer secure online bill payment."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={site.phoneHref} className="btn-primary">Check my coverage: {site.phone}</a>
          <Link to="/pay" className="btn-secondary">Pay a bill online</Link>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="rounded-[2rem] border border-forest-900/10 bg-white p-8 sm:p-10">
          <p className="eyebrow">Coming soon</p>
          <h2 className="mt-2 text-3xl text-forest-900">Online scheduling and telemedicine consultations</h2>
          <p className="mt-3 max-w-2xl text-ink/75">
            We are expanding how patients can reach us. In the meantime, to schedule a visit, contact your community nurse or
            call the front desk at <a href={site.phoneHref} className="font-semibold text-forest-600 underline underline-offset-4">{site.phone}</a>.
          </p>
        </div>
      </Section>
    </>
  )
}
