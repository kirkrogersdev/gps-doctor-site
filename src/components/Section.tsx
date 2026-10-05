import type { ReactNode } from 'react'

export function Section({
  children,
  className = '',
  tone = 'default',
  id,
}: {
  children: ReactNode
  className?: string
  tone?: 'default' | 'sand' | 'forest' | 'white'
  id?: string
}) {
  const tones = {
    default: '',
    sand: 'bg-sand/60',
    white: 'bg-white',
    forest: 'bg-forest-900 text-cream',
  }
  return (
    <section id={id} className={`py-20 sm:py-24 ${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = 'left',
  light = false,
}: {
  eyebrow?: string
  title: ReactNode
  lede?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
}) {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && <p className={`eyebrow ${light ? '!text-leaf' : ''}`}>{eyebrow}</p>}
      <h2 className={`mt-3 text-4xl leading-[1.08] sm:text-5xl ${light ? 'text-cream' : 'text-forest-900'}`}>{title}</h2>
      {lede && <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-cream/75' : 'text-ink/75'}`}>{lede}</p>}
    </div>
  )
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow?: string
  title: ReactNode
  lede?: ReactNode
  children?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-forest-900/10 bg-sand/50">
      <Botanical className="pointer-events-none absolute -right-20 -top-24 h-[28rem] w-[28rem] text-forest-900/[0.06]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="max-w-3xl">
          {eyebrow && <p className="eyebrow rise">{eyebrow}</p>}
          <h1 className="rise rise-1 mt-3 text-5xl leading-[1.05] text-forest-900 sm:text-6xl">{title}</h1>
          {lede && <p className="rise rise-2 mt-6 text-xl leading-relaxed text-ink/75">{lede}</p>}
          {children && <div className="rise rise-3 mt-8">{children}</div>}
        </div>
      </div>
    </section>
  )
}

/** Decorative vine flourish echoing the practice's printed materials. */
export function Botanical({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M100 190 C 100 130, 70 120, 60 70 C 55 45, 75 25, 95 35 C 115 45, 105 75, 85 70" />
      <path d="M100 190 C 100 140, 135 130, 145 85 C 150 60, 135 40, 118 48 C 100 56, 108 82, 128 78" />
      <path d="M100 150 C 80 140, 60 150, 45 135" />
      <path d="M100 150 C 120 140, 140 150, 158 132" />
      <path d="M60 70 C 50 60, 40 65, 32 55" />
      <path d="M145 85 C 158 78, 168 85, 176 72" />
      <ellipse cx="38" cy="130" rx="9" ry="4.5" transform="rotate(-30 38 130)" fill="currentColor" stroke="none" />
      <ellipse cx="163" cy="128" rx="9" ry="4.5" transform="rotate(30 163 128)" fill="currentColor" stroke="none" />
      <ellipse cx="29" cy="52" rx="8" ry="4" transform="rotate(-40 29 52)" fill="currentColor" stroke="none" />
      <ellipse cx="178" cy="69" rx="8" ry="4" transform="rotate(40 178 69)" fill="currentColor" stroke="none" />
      <ellipse cx="88" cy="68" rx="7" ry="3.5" transform="rotate(-20 88 68)" fill="currentColor" stroke="none" />
      <ellipse cx="126" cy="76" rx="7" ry="3.5" transform="rotate(20 126 76)" fill="currentColor" stroke="none" />
    </svg>
  )
}
