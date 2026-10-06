import { useTitle } from '../lib/useTitle'
import { ShoppingBag } from 'lucide-react'

/** Unlisted page (not in nav, sitemap or robots) showing logo concepts to Dr. Tourk. */

const options = [
  { id: 1, slug: '01-olive-branch', name: 'Olive branch', note: 'A single stem with leaves, echoing the vine on the rack card. One fresh green leaf at the tip.' },
  { id: 2, slug: '02-gps-monogram', name: 'GPS monogram', note: 'Classical serif initials in a seal, with a small leaf. The most traditional of the five.' },
  { id: 3, slug: '03-leaf-compass', name: 'Leaf compass', note: 'A compass needle drawn as a leaf, a quiet nod to the GPS name.' },
  { id: 4, slug: '04-upright-laurel', name: 'Upright laurel', note: 'A growing sprig, upright and simple. Reads well small.' },
  { id: 5, slug: '05-serif-g-leaf', name: 'Serif G with leaf', note: 'A single large G with a leaf tucked into it. Strong as a favicon.' },
]

export default function LogoOptions() {
  useTitle('Logo options')
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <p className="eyebrow">For Dr. Tourk</p>
      <h1 className="mt-3 text-5xl text-forest-900">Logo options</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/75">
        Five directions. Each one is shown as the full logo and as it would sit in the website header. Pick a favorite, or tell us
        what you like from more than one, and we will finalize it and produce the files for web and print.
      </p>

      <div className="mt-14 space-y-14">
        {options.map((o) => (
          <article key={o.id} className="rounded-[2rem] border border-forest-900/10 bg-white p-6 sm:p-10">
            <p className="eyebrow">Option {o.id}</p>
            <h2 className="mt-1 text-3xl text-forest-900">{o.name}</h2>
            <p className="mt-2 max-w-2xl text-ink/70">{o.note}</p>

            <div className="mt-8 grid gap-8 lg:grid-cols-5">
              <div className="rounded-[1.5rem] bg-cream p-6 lg:col-span-2">
                <img src={`/brand/transparent/${o.slug}.png`} alt={`${o.name} logo`} className="mx-auto w-full max-w-sm" loading="lazy" />
              </div>
              <div className="space-y-4 lg:col-span-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone">In the website header</p>
                <div className="overflow-hidden rounded-[1.5rem] border border-forest-900/10 bg-cream">
                  <div className="flex items-center justify-between gap-4 px-5 py-3">
                    <img src={`/brand/transparent/${o.slug}-navbar.png`} alt="" className="h-9 w-auto max-w-[55%] object-contain object-left sm:h-10" loading="lazy" />
                    <div className="flex shrink-0 items-center gap-2">
                      <span className="btn-store !px-4 !py-2 !text-xs"><ShoppingBag className="h-3.5 w-3.5" aria-hidden="true" /> Our Store</span>
                      <span className="btn-primary !px-4 !py-2 !text-xs">Pay a Bill</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone">On dark green (footer, print)</p>
                <div className="rounded-[1.5rem] bg-forest-900 px-5 py-4">
                  <img src={`/brand/transparent/${o.slug}-navbar.png`} alt="" className="h-9 w-auto brightness-0 invert sm:h-11" loading="lazy" />
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone">Phone header</p>
                <div className="max-w-xs overflow-hidden rounded-[1.5rem] border border-forest-900/10 bg-cream">
                  <div className="flex items-center justify-between px-4 py-3">
                    <img src={`/brand/transparent/${o.slug}-navbar.png`} alt="" className="h-7 w-auto" loading="lazy" />
                    <span className="flex flex-col gap-1" aria-hidden="true"><i className="block h-0.5 w-5 bg-forest-900" /><i className="block h-0.5 w-5 bg-forest-900" /><i className="block h-0.5 w-5 bg-forest-900" /></span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
