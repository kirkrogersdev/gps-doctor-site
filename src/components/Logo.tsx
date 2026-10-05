import { Link } from 'react-router-dom'

export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" className="fill-forest-900" />
      <path d="M32 14c-6 9-14 13-14 22a14 14 0 0 0 28 0c0-9-8-13-14-22z" className="fill-leaf" />
      <path d="M32 22v24M26 34h12" className="stroke-cream" strokeWidth="3.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="group flex items-center gap-3" aria-label="Geriatric Professional Services, home">
      <LogoMark className="h-10 w-10 transition-transform duration-300 group-hover:-rotate-6" />
      <span className="leading-tight">
        <span className={`font-display block text-[1.35rem] font-semibold tracking-wide ${light ? 'text-cream' : 'text-forest-900'}`}>
          Geriatric Professional Services
        </span>
        <span className={`block text-[0.68rem] font-medium uppercase tracking-[0.2em] ${light ? 'text-cream/70' : 'text-stone'}`}>
          Dr. Karim Tourk, MD · gps.doctor
        </span>
      </span>
    </Link>
  )
}
