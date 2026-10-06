import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import Logo from './Logo'
import { nav, site } from '../lib/site'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/90 shadow-[0_1px_0_0_rgba(31,61,43,0.08)] backdrop-blur-md' : 'bg-cream'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive ? 'bg-forest-900 text-cream' : 'text-ink/80 hover:bg-forest-100 hover:text-forest-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={site.phoneHref} className="hidden items-center gap-2 whitespace-nowrap text-sm font-semibold text-forest-900 hover:text-forest-600 xl:flex">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {site.phone}
          </a>
          <Link to="/pay" className="btn-primary whitespace-nowrap !py-2.5">
            Pay a Bill
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-full p-2 text-forest-900 hover:bg-forest-100 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-forest-900/10 bg-cream lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Mobile">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-base font-medium ${
                    isActive ? 'bg-forest-900 text-cream' : 'text-ink hover:bg-forest-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-forest-900/10 pt-4">
              <a href={site.phoneHref} className="btn-secondary">
                <Phone className="h-4 w-4" aria-hidden="true" /> Call {site.phone}
              </a>
              <Link to="/pay" onClick={() => setOpen(false)} className="btn-primary">
                Pay a Bill
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
