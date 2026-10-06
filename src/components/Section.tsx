import type { ReactNode } from 'react'
import Vine from './Vine'

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
      <Vine className="pointer-events-none absolute -top-10 right-[4%] hidden h-[140%] w-56 text-forest-900/[0.09] md:block" />
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
