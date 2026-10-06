import { Link } from 'react-router-dom'
import { ArrowRight, Phone, ShieldCheck, Building2, Brain, BedDouble, HeartPulse, CalendarCheck, Stethoscope, Pill, ExternalLink } from 'lucide-react'
import { Section, SectionHeading } from '../components/Section'
import Vine from '../components/Vine'
import { Portrait } from '../components/ProviderCard'
import { site, providers } from '../lib/site'
import { useTitle } from '../lib/useTitle'

const careSettings = [
  { icon: Building2, title: 'Assisted living', text: 'Regular rounds in your community, coordinated with your nursing staff.' },
  { icon: Brain, title: 'Memory care', text: 'Specialized, consistent care for residents living with dementia and cognitive decline.' },
  { icon: BedDouble, title: 'Skilled nursing & long-term care', text: 'Attending physician and nurse practitioner coverage in nursing facilities.' },
]

const pillars = [
  {
    icon: Stethoscope,
    title: 'Primary & geriatric care',
    text: 'Comprehensive internal medicine for adults, with a focus on the needs of older patients and complex conditions.',
  },
  {
    icon: HeartPulse,
    title: 'Chronic Care Management',
    text: 'A Medicare program that gives you a dedicated care team between visits: monthly check-ins, a personal care plan and help coordinating specialists.',
    to: '/chronic-care-management',
  },
  {
    icon: CalendarCheck,
    title: 'Continuity you can count on',
    text: 'The same physician and nurse practitioner, visit after visit, working alongside your nurses, family and other providers.',
  },
]

export default function Home() {
  useTitle()
  const [tourk, jenkins] = providers

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Vine flip className="pointer-events-none absolute -left-10 -top-6 hidden h-[120%] w-48 text-forest-900/[0.08] lg:block" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:grid-cols-12 lg:px-8 lg:pb-28">
          <div className="lg:col-span-7">
            <p className="eyebrow rise">{site.tagline}</p>
            <h1 className="rise rise-1 mt-4 text-5xl leading-[1.02] text-forest-900 sm:text-6xl lg:text-7xl">
              Concierge geriatric care that <em className="font-medium italic text-forest-500">comes to you.</em>
            </h1>
            <p className="rise rise-2 mt-7 max-w-xl text-xl leading-relaxed text-ink/75">
              Concierge Geriatric Medical Care delivered by three-time Board Certified Internal Medicine physician Dr. Karim Tourk
              and Board Certified Nurse Practitioner Amanda Jenkins. With 40 years of combined practice experience, GPS is the premier
              practice in delivering quality care in Assisted Living and Memory Care communities as well as Skilled Nursing and Long
              Term Care facilities.
            </p>
            <div className="rise rise-3 mt-9 flex flex-wrap items-center gap-3">
              <a href={site.phoneHref} className="btn-primary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call {site.phone}
              </a>
              <Link to="/chronic-care-management" className="btn-secondary">
                Explore Chronic Care Management <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <a
              href={site.abim.badgeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rise rise-3 mt-10 inline-flex items-center gap-3 rounded-2xl border border-forest-900/10 bg-white/70 px-4 py-3 text-sm shadow-sm transition hover:border-forest-900/30 hover:bg-white"
            >
              <ShieldCheck className="h-7 w-7 text-forest-500" aria-hidden="true" />
              <span>
                <span className="block font-semibold text-forest-900">Board Certified, American Board of Internal Medicine</span>
                <span className="block text-xs text-stone">Click to verify Dr. Tourk's certification with ABIM</span>
              </span>
            </a>
          </div>

          <div className="relative lg:col-span-5">
            <div className="rise rise-2 relative mx-auto max-w-md">
              <Portrait provider={tourk} className="aspect-[4/5] shadow-2xl shadow-forest-900/20" />
              <div className="absolute -bottom-6 -left-6 hidden w-44 sm:block">
                <Portrait provider={jenkins} className="aspect-square border-4 border-cream shadow-xl shadow-forest-900/20" />
              </div>
              <div className="absolute -right-4 top-6 rounded-2xl bg-forest-900 px-4 py-3 text-cream shadow-lg">
                <p className="font-display text-3xl font-semibold leading-none">40+</p>
                <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-cream/70">years combined experience</p>
              </div>
            </div>
            <p className="mt-10 text-center text-sm text-stone sm:mt-12">
              {tourk.name} &amp; {jenkins.name}
            </p>
          </div>
        </div>
      </section>

      {/* Care settings */}
      <Section tone="forest" className="!py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {careSettings.map(({ icon: Icon, title, text }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cream/10">
                <Icon className="h-6 w-6 text-leaf" aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-sans text-lg font-semibold text-cream">{title}</h3>
                <p className="mt-1 text-cream/70">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Pillars */}
      <Section>
        <SectionHeading
          eyebrow="How we care for you"
          title="An exceptional private practice built around the needs of older adults"
          lede="Over 40 years of combined practice experience caring for patients in assisted living, memory care and long-term care. We know the questions families ask, and we make it easy to reach us."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, text, to }) => (
            <div key={title} className="group relative rounded-[1.75rem] border border-forest-900/10 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-forest-900/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-600">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-2xl text-forest-900">{title}</h3>
              <p className="mt-3 leading-relaxed text-ink/75">{text}</p>
              {to && (
                <Link to={to} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-forest-600 hover:text-forest-900">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* Meet the team */}
      <Section tone="sand">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Meet your care team"
              title={<>Two clinicians. <span className="text-forest-500">Decades of experience.</span></>}
              lede={
                <>
                  For thirty years, Dr. Tourk has managed the care of complex geriatric patients. Amanda Jenkins, a board-certified
                  nurse practitioner and lifelong area resident, brings more than fifteen years in long-term care. Together they bring
                  compassionate concierge healthcare directly to you.
                </>
              }
            />
            <Link to="/about" className="btn-primary mt-8">
              Meet Dr. Tourk &amp; Amanda <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {tourk.credentials.map((c) => (
              <li key={c} className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 text-sm text-ink/85">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-forest-500" aria-hidden="true" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* CCM promo */}
      <Section>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-forest-900 px-8 py-14 text-cream sm:px-14">
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <p className="eyebrow !text-leaf">Medicare Chronic Care Management</p>
              <h2 className="mt-3 text-4xl leading-tight text-cream sm:text-5xl">
                Living with two or more chronic conditions? You may qualify for a dedicated care team between visits.
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-cream/75">
                Chronic Care Management is a Medicare benefit that adds monthly check-ins, a personalized care plan, medication
                review and 24/7 access to a care team, all coordinated by Dr. Tourk's office.
              </p>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4">
              <Link to="/chronic-care-management" className="btn-light">
                See if you qualify <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link to="/chronic-care-management#contact" className="btn-ghost-light">
                Ask the CCM team to call me
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Supplement store */}
      <Section tone="sand" className="!py-16">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="eyebrow">Supplement store</p>
            <h2 className="mt-3 text-4xl leading-tight text-forest-900">Professional-grade supplements, recommended by your doctor</h2>
            <p className="mt-4 max-w-2xl text-lg text-ink/75">
              Dr. Tourk's online dispensary is hosted by Fullscript. Order the exact products and doses he recommends, shipped directly to you.
            </p>
            <a href={site.fullscript.url} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6">
              <Pill className="h-4 w-4" aria-hidden="true" /> Visit the Fullscript store <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <p className="mt-4 max-w-xl text-xs text-stone">
              Fullscript is an independent online dispensary. The practice may receive a portion of sales made through this link. You are under no
              obligation to buy, and your care will not be affected by your decision. Please talk with Dr. Tourk before starting any new supplement.
            </p>
          </div>
          <a href={site.fullscript.url} target="_blank" rel="noopener noreferrer" className="mx-auto block w-full max-w-[220px] rounded-[1.75rem] bg-white p-5 shadow-sm transition hover:shadow-xl hover:shadow-forest-900/10 lg:col-span-4">
            <img src={site.fullscript.buttonImg} alt="Order supplements through my Fullscript store." className="w-full" loading="lazy" />
          </a>
        </div>
      </Section>

      {/* Quick links */}
      <Section className="!pt-0">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: '/pay', title: 'Pay a bill', text: 'Secure online payment by card or bank account.' },
            { to: '/contact#billing', title: 'Billing questions', text: 'Statements, insurance and payment plans.' },
            { to: '/patients#supplements', title: 'Supplement store', text: 'Professional-grade supplements via Fullscript.' },
            { to: '/contact', title: 'Contact the office', text: `Call ${site.phone} to reach the care team.` },
          ].map((l) => (
            <Link key={l.to} to={l.to} className="group rounded-2xl border border-forest-900/10 p-6 transition hover:border-forest-900 hover:bg-forest-50">
              <h3 className="flex items-center justify-between text-xl text-forest-900">
                {l.title}
                <ArrowRight className="h-4 w-4 text-forest-500 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </h3>
              <p className="mt-2 text-sm text-ink/70">{l.text}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
