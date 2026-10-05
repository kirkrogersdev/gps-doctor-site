import { Link } from 'react-router-dom'
import { useTitle } from '../lib/useTitle'
import { site } from '../lib/site'

export default function NotFound() {
  useTitle('Page not found')
  return (
    <section className="mx-auto max-w-3xl px-4 py-32 text-center sm:px-6">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 text-5xl text-forest-900">We could not find that page.</h1>
      <p className="mt-5 text-lg text-ink/75">The link may be out of date. Head back home, or call us at {site.phone} and we will point you in the right direction.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn-primary">Back to home</Link>
        <Link to="/contact" className="btn-secondary">Contact us</Link>
      </div>
    </section>
  )
}
