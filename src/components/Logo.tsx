import { Link } from 'react-router-dom'

/**
 * Practice logo (option 5, serif G with leaf, chosen by Dr. Tourk on Oct 7 2026). Final files live in public/brand/transparent. The
 * favicon tiles in public/ are generated from the same mark by scripts/derive-logo.py.
 */
const LOGO = '/brand/transparent/05-serif-g-leaf-navbar.png'
const LOGO_CREAM = '/brand/transparent/05-serif-g-leaf-navbar-cream.png'

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-center" aria-label="Geriatric Professional Services, home">
      <img
        src={light ? LOGO_CREAM : LOGO}
        alt="Geriatric Professional Services"
        className="h-8 w-auto sm:h-9 xl:h-10"
        width={1790}
        height={222}
        decoding="async"
      />
    </Link>
  )
}
