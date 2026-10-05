import { User } from 'lucide-react'
import type { providers } from '../lib/site'

type Provider = (typeof providers)[number]

export function Portrait({ provider, className = '' }: { provider: Provider; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] bg-forest-100 ${className}`}>
      <img
        src={provider.photo}
        alt={`Portrait of ${provider.name}`}
        className="h-full w-full object-cover"
        onError={(e) => {
          // Headshot not uploaded yet: show a quiet placeholder instead of a broken image.
          const img = e.currentTarget
          img.style.display = 'none'
          img.parentElement?.querySelector('[data-fallback]')?.classList.remove('hidden')
        }}
      />
      <div data-fallback className="absolute inset-0 hidden flex-col items-center justify-center gap-3 bg-gradient-to-br from-forest-100 to-sand text-forest-900/50">
        <User className="h-16 w-16" strokeWidth={1.2} aria-hidden="true" />
        <span className="text-xs font-medium uppercase tracking-[0.18em]">Photo coming soon</span>
      </div>
    </div>
  )
}

export default function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <article className="grid gap-8 rounded-[2rem] border border-forest-900/10 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-5 lg:items-start">
      <Portrait provider={provider} className="aspect-[4/5] lg:col-span-2" />
      <div className="lg:col-span-3">
        <p className="eyebrow">{provider.role}</p>
        <h3 className="mt-2 text-4xl text-forest-900">{provider.name}</h3>
        {'pronunciation' in provider && (
          <p className="mt-1 text-sm italic text-stone">{provider.pronunciation}</p>
        )}
        <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-ink/80">
          {provider.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <ul className="mt-6 flex flex-wrap gap-2">
          {provider.credentials.map((c) => (
            <li key={c} className="rounded-full border border-forest-900/15 bg-forest-50 px-3 py-1.5 text-sm text-forest-900">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
