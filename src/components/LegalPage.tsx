import type { ReactNode } from 'react'
import { PageHero } from './Section'
import { site } from '../lib/site'

export default function LegalPage({ eyebrow, title, lede, children }: { eyebrow: string; title: string; lede?: string; children: ReactNode }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} lede={lede} />
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm text-stone">Effective {site.effectiveDate}</p>
        <div className="prose-gps mt-6">{children}</div>
      </article>
    </>
  )
}
