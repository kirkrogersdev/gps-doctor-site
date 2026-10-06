import { Link } from 'react-router-dom'

/**
 * Practice logo (option 1, olive branch). Dr. Tourk is still choosing between the
 * concepts on /logo-options; swap the two image paths here once he decides.
 */
const LOGO = '/brand/transparent/01-olive-branch-navbar.png'
const LOGO_CREAM = '/brand/transparent/01-olive-branch-navbar-cream.png'

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex shrink-0 items-center" aria-label="Geriatric Professional Services, home">
      <img
        src={light ? LOGO_CREAM : LOGO}
        alt="Geriatric Professional Services"
        className="h-8 w-auto sm:h-9 xl:h-10"
        width={1648}
        height={196}
        decoding="async"
      />
    </Link>
  )
}
