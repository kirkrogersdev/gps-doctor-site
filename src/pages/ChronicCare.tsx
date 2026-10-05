import { CheckCircle2, PhoneCall, ClipboardList, Pill, Users, Clock, ShieldCheck } from 'lucide-react'
import { PageHero, Section, SectionHeading } from '../components/Section'
import CcmContactForm from '../components/CcmContactForm'
import { site } from '../lib/site'
import { useTitle } from '../lib/useTitle'

const included = [
  { icon: PhoneCall, title: 'Monthly check-ins', text: 'A dedicated care coordinator calls to see how you are doing, review symptoms and catch problems before they become emergencies.' },
  { icon: ClipboardList, title: 'A personal care plan', text: 'A written plan covering your conditions, medications, goals and the people on your team, updated as your needs change and shared with you.' },
  { icon: Pill, title: 'Medication management', text: 'Regular review of every medication you take, help with refills and prior authorizations, and a watch for interactions.' },
  { icon: Users, title: 'Coordination with specialists', text: 'We help schedule appointments, share records and make sure your specialists, pharmacy and community nurses are working from the same plan.' },
  { icon: Clock, title: '24/7 access to a care team', text: 'A number to call any time for urgent questions, with your care plan available to whoever answers.' },
  { icon: ShieldCheck, title: 'Transitions of care', text: 'Extra support after a hospital stay or emergency room visit, when the risk of complications is highest.' },
]

const faqs = [
  {
    q: 'Who is eligible?',
    a: 'Medicare Part B beneficiaries who have two or more chronic conditions expected to last at least 12 months (or until the end of life) and that place the patient at significant risk of death, acute exacerbation or functional decline. Common qualifying conditions include diabetes, high blood pressure, heart failure, COPD, chronic kidney disease, arthritis, depression, dementia and osteoporosis.',
  },
  {
    q: 'What does it cost?',
    a: 'Chronic Care Management is covered by Medicare Part B. After the Part B deductible, Medicare pays 80 percent and the patient is responsible for a 20 percent coinsurance, typically a small monthly amount. Medicare Supplement (Medigap) plans and Medicaid usually cover that coinsurance in full, so many patients pay nothing out of pocket. We will go over the exact cost for your coverage before you enroll.',
  },
  {
    q: 'Do I have to sign up?',
    a: 'Yes. Medicare requires your consent before CCM services begin. Consent can be given verbally or in writing, and it is documented in your record. You may stop participating at any time by telling us, and only one provider can bill for your CCM in a given month.',
  },
  {
    q: 'Will I still see Dr. Tourk and Amanda?',
    a: 'Absolutely. CCM adds to your regular visits rather than replacing them. The care coordination team works under Dr. Tourk\'s direction and keeps him informed, so your visits are better prepared and less rushed.',
  },
  {
    q: 'Who is on the CCM team?',
    a: 'Dr. Tourk\'s practice partners with SparroWell, a care management team of nurses and care coordinators who specialize in Chronic Care Management. They work under Dr. Tourk\'s supervision and with his full access to your care plan.',
  },
  {
    q: 'How do I get started?',
    a: `Use the form below to ask the CCM team to contact you, or call ${site.phone}. A coordinator will confirm your eligibility, explain the program and your expected cost, and complete enrollment with you over the phone.`,
  },
]

export default function ChronicCare() {
  useTitle('Chronic Care Management', 'Medicare Chronic Care Management (CCM) with Dr. Karim Tourk: eligibility, what is included, cost and how to enroll. Ask the CCM team to contact you.')
  return (
    <>
      <PageHero
        eyebrow="Chronic Care Management (CCM)"
        title="A dedicated care team between visits"
        lede="Chronic Care Management is a Medicare benefit for people living with two or more ongoing health conditions. It adds monthly outreach, a personal care plan and round-the-clock access to a care team, all coordinated by Dr. Tourk's office."
      >
        <div className="flex flex-wrap gap-3">
          <a href="#contact" className="btn-primary">Ask the CCM team to contact me</a>
          <a href="#eligibility" className="btn-secondary">Check eligibility</a>
        </div>
      </PageHero>

      <Section id="eligibility">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Eligibility"
              title="You may qualify if…"
              lede="Most of our patients qualify. If you are not sure, ask us. Confirming eligibility takes a few minutes."
            />
          </div>
          <ul className="space-y-4 lg:col-span-7">
            {[
              'You have Medicare Part B (including most Medicare Advantage plans).',
              'You live with two or more chronic conditions, such as diabetes, high blood pressure, heart disease, COPD, kidney disease, arthritis, dementia or depression.',
              'Those conditions are expected to last at least 12 months and put you at risk of a hospital stay, a flare-up or a decline in day-to-day function.',
              'You would benefit from help coordinating medications, specialists and follow-up between visits.',
            ].map((t) => (
              <li key={t} className="flex items-start gap-4 rounded-2xl border border-forest-900/10 bg-white p-5">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-forest-500" aria-hidden="true" />
                <span className="text-ink/85">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="What's included"
          title="More support, fewer surprises"
          lede="CCM covers at least 20 minutes of care coordination each month, and often much more. Here is what that looks like in practice."
          align="center"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {included.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[1.75rem] bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-50 text-forest-600">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-2xl text-forest-900">{title}</h3>
              <p className="mt-2 text-ink/75">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Questions" title="Cost, consent and how it works" />
          </div>
          <div className="divide-y divide-forest-900/10 lg:col-span-8">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-xl text-forest-900 marker:content-none">
                  {f.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-forest-900/20 text-forest-900 transition group-open:rotate-45 group-open:bg-forest-900 group-open:text-cream" aria-hidden="true">+</span>
                </summary>
                <p className="mt-3 pr-12 leading-relaxed text-ink/75">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sand" id="contact">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contact the CCM team"
              title="Ask us to call or email you"
              lede="Tell us how you would like to be reached and a care coordinator will follow up, usually within one to two business days. Current CCM patients can use this form to send a note to the team as well."
            />
            <div className="mt-8 rounded-2xl border border-forest-900/10 bg-white/70 p-5 text-sm text-ink/75">
              <p className="font-semibold text-forest-900">Prefer to talk now?</p>
              <p className="mt-1">Call <a href={site.phoneHref} className="font-semibold text-forest-600 underline underline-offset-4">{site.phone}</a> and ask for the Chronic Care Management team.</p>
              <p className="mt-3 text-xs text-stone">
                This form is not monitored around the clock and is not for emergencies. Please do not include detailed medical
                information; the team will collect what they need by phone.
              </p>
            </div>
          </div>
          <div className="lg:col-span-7">
            <CcmContactForm />
          </div>
        </div>
      </Section>
    </>
  )
}
