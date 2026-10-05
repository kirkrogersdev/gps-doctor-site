import { Link } from 'react-router-dom'
import { ShieldCheck, ExternalLink } from 'lucide-react'
import { PageHero, Section, SectionHeading } from '../components/Section'
import ProviderCard from '../components/ProviderCard'
import { providers, site } from '../lib/site'
import { useTitle } from '../lib/useTitle'

export default function About() {
  useTitle('Our Team', 'Meet Dr. Karim Tourk, MD, board-certified internist and geriatrician, and Amanda Jenkins, APN, board-certified nurse practitioner, at Geriatric Professional Services in Joliet, IL.')
  return (
    <>
      <PageHero
        eyebrow="Our team"
        title="University trained. Nationally certified. Community focused."
        lede="Geriatric Professional Services is a physician-led practice in Joliet, Illinois dedicated to the care of older adults. You will always see the same two clinicians, and they will always know your story."
      />

      <Section>
        <div className="space-y-10">
          {providers.map((p) => (
            <ProviderCard key={p.slug} provider={p} />
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Board certification"
            title="Verified by the American Board of Internal Medicine"
            lede="Board certification is a voluntary, rigorous process that goes beyond state licensure. ABIM Board Certified physicians have demonstrated the knowledge, skills and attitudes essential for excellent patient care, and maintain that certification over time."
          />
          <a
            href={site.abim.badgeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-[1.75rem] border border-forest-900/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-forest-900/10"
          >
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-forest-900">
              <ShieldCheck className="h-10 w-10 text-leaf" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <p className="eyebrow">Digital credential</p>
              <p className="mt-1 text-2xl text-forest-900">Karim Tourk, MD, Board Certified</p>
              <p className="mt-1 text-sm text-stone">Issued {site.abim.issued} · Does not expire · Verified issuer</p>
            </div>
            <ExternalLink className="h-5 w-5 text-forest-500 transition group-hover:text-forest-900" aria-hidden="true" />
          </a>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our approach"
          title="Thoughtful oversight. Attention to detail. A humanistic touch."
          lede="Caring for older adults means caring for the whole picture: medications that interact, specialists who need to talk to each other, families who want straight answers. We take the time to get it right."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ['We come to you', 'Visits at home, in assisted living and long-term care communities, and by telehealth when appropriate.'],
            ['We coordinate', 'We work alongside your community nurses, pharmacists, specialists and family so that everyone is reading from the same plan.'],
            ['We stay in touch', 'Between visits, our Chronic Care Management team keeps an eye on your care plan and is a phone call away.'],
          ].map(([t, d]) => (
            <div key={t} className="rounded-[1.75rem] border border-forest-900/10 bg-white p-8">
              <h3 className="text-2xl text-forest-900">{t}</h3>
              <p className="mt-3 text-ink/75">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link to="/services" className="btn-primary">Our services</Link>
          <Link to="/contact" className="btn-secondary">Contact the office</Link>
        </div>
      </Section>
    </>
  )
}
