import { useTitle } from '../lib/useTitle'
import { site } from '../lib/site'

/**
 * Unlisted page (not in nav or sitemap) used to show Dr. Tourk logo mark options.
 * Each option is drawn in SVG so whichever he picks can go straight into Logo.tsx.
 */

function MarkLeaf({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" className="fill-forest-900" />
      <path d="M32 14c-6 9-14 13-14 22a14 14 0 0 0 28 0c0-9-8-13-14-22z" className="fill-leaf" />
      <path d="M32 22v24M26 34h12" className="stroke-cream" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

function MarkMonogram({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="31" className="fill-forest-900" />
      <circle cx="32" cy="32" r="26" fill="none" className="stroke-leaf/60" strokeWidth="1.2" />
      <text x="32" y="39" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="23" fontWeight="600" letterSpacing="1" className="fill-cream">GPS</text>
      <path d="M32 9c-2 3-5 4.5-5 7.5a5 5 0 0 0 10 0c0-3-3-4.5-5-7.5z" className="fill-leaf" />
    </svg>
  )
}

function MarkCompass({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="32" className="fill-forest-900" />
      <circle cx="32" cy="32" r="22" fill="none" className="stroke-cream/35" strokeWidth="1.5" />
      <path d="M32 11v5M32 48v5M11 32h5M48 32h5" className="stroke-cream/60" strokeWidth="2" strokeLinecap="round" />
      {/* compass needle drawn as a leaf pointing north-east */}
      <path d="M44 20 C 34 22, 26 30, 22 42 C 34 40, 42 32, 44 20 z" className="fill-leaf" />
      <path d="M44 20 L 26 38" className="stroke-forest-900" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="32" cy="32" r="2.4" className="fill-cream" />
    </svg>
  )
}

function MarkWreath({ className = 'h-16 w-16' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" className="fill-cream" />
      <rect x="1" y="1" width="62" height="62" rx="13" fill="none" className="stroke-forest-900/15" />
      <text x="32" y="38" textAnchor="middle" fontFamily="Cormorant Garamond, Georgia, serif" fontSize="22" fontWeight="600" letterSpacing="1" className="fill-forest-900">GPS</text>
      {/* two olive branches curving up either side */}
      <path d="M14 44 C 12 34, 16 24, 24 18" fill="none" className="stroke-forest-600" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M50 44 C 52 34, 48 24, 40 18" fill="none" className="stroke-forest-600" strokeWidth="1.6" strokeLinecap="round" />
      {[[14,38,-30],[15,31,-20],[18,25,-10],[21,20,0]].map(([x,y,r],i)=>(
        <ellipse key={'l'+i} cx={x} cy={y} rx="3.4" ry="1.6" transform={`rotate(${r} ${x} ${y})`} className="fill-forest-500" />
      ))}
      {[[50,38,30],[49,31,20],[46,25,10],[43,20,0]].map(([x,y,r],i)=>(
        <ellipse key={'r'+i} cx={x} cy={y} rx="3.4" ry="1.6" transform={`rotate(${r} ${x} ${y})`} className="fill-forest-500" />
      ))}
    </svg>
  )
}

const options = [
  { id: 'A', name: 'Leaf tile', note: 'The current placeholder. Simple, reads at any size, matches the favicon.', Mark: MarkLeaf },
  { id: 'B', name: 'GPS monogram', note: 'Classic serif initials in a seal, with a small leaf. Closest to the feel of the rack card.', Mark: MarkMonogram },
  { id: 'C', name: 'Compass leaf', note: 'A nod to the GPS name: a compass whose needle is a leaf. More distinctive, more modern.', Mark: MarkCompass },
  { id: 'D', name: 'Olive wreath', note: 'Initials framed by two olive branches, echoing the vine on the rack card. Light version for print.', Mark: MarkWreath },
]

export default function BrandOptions() {
  useTitle('Logo options')
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
      <p className="eyebrow">For Dr. Tourk</p>
      <h1 className="mt-3 text-5xl text-forest-900">Logo mark options</h1>
      <p className="mt-4 max-w-2xl text-lg text-ink/75">
        Four directions for a mark to sit beside the {site.name} wordmark. Pick one and we will refine it, produce the final files
        (SVG, PNG, favicon, print) and swap it into the site. Happy to mix ideas or try something else entirely.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {options.map(({ id, name, note, Mark }) => (
          <div key={id} className="rounded-[2rem] border border-forest-900/10 bg-white p-8">
            <div className="flex items-center gap-5">
              <Mark className="h-20 w-20 shrink-0" />
              <div>
                <p className="eyebrow">Option {id}</p>
                <h2 className="mt-1 text-3xl text-forest-900">{name}</h2>
              </div>
            </div>
            <p className="mt-5 text-ink/75">{note}</p>
            <div className="mt-6 flex items-center gap-3 rounded-2xl bg-cream px-4 py-3">
              <Mark className="h-10 w-10 shrink-0" />
              <span className="leading-tight">
                <span className="font-display block text-lg font-semibold tracking-wide text-forest-900">Geriatric Professional Services</span>
                <span className="block text-[0.68rem] font-medium uppercase tracking-[0.2em] text-stone">Dr. Karim Tourk, MD · gps.doctor</span>
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3 rounded-2xl bg-forest-900 px-4 py-3">
              <Mark className="h-10 w-10 shrink-0" />
              <span className="font-display text-lg font-semibold tracking-wide text-cream">Geriatric Professional Services</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
