import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react'
import Logo from './Logo'
import { site, nav } from '../lib/site'

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo light />
            <p className="mt-5 max-w-md text-cream/75">
              {site.tagline} Concierge geriatric and internal medicine care for older adults in {site.serviceArea}.
            </p>
            <a
              href={site.abim.badgeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-cream/15 bg-cream/5 px-4 py-3 text-sm transition hover:bg-cream/10"
            >
              <ShieldCheck className="h-6 w-6 text-leaf" aria-hidden="true" />
              <span>
                <span className="block font-semibold">ABIM Board Certified</span>
                <span className="block text-xs text-cream/60">Verify Dr. Tourk's certification</span>
              </span>
            </a>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="text-cream/85 hover:text-leaf">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/pay" className="text-cream/85 hover:text-leaf">
                  Pay a Bill
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h3 className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">Contact</h3>
            <ul className="mt-4 space-y-3 text-cream/85">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden="true" />
                <a href={site.phoneHref} className="hover:text-leaf">{site.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden="true" />
                <a href={`mailto:${site.email}`} className="hover:text-leaf">{site.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden="true" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.state} {site.address.zip}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-leaf" aria-hidden="true" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-cream/15 bg-cream/5 px-5 py-4 text-sm text-cream/75">
          <strong className="text-cream">If this is a medical emergency, call 911.</strong> This website does not provide
          medical advice and is not monitored around the clock. Please do not use the forms on this site for urgent
          medical needs or to share detailed health information.
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-cream/15 pt-8 text-xs text-cream/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName} All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            <li><Link to="/privacy" className="hover:text-cream">Privacy Policy</Link></li>
            <li><Link to="/notice-of-privacy-practices" className="hover:text-cream">Notice of Privacy Practices</Link></li>
            <li><Link to="/terms" className="hover:text-cream">Terms of Use</Link></li>
            <li><Link to="/refund-policy" className="hover:text-cream">Refund &amp; Cancellation Policy</Link></li>
            <li><Link to="/accessibility" className="hover:text-cream">Accessibility</Link></li>
            <li><Link to="/nondiscrimination" className="hover:text-cream">Nondiscrimination &amp; Language Assistance</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
