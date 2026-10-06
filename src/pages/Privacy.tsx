import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage'
import { site } from '../lib/site'
import { useTitle } from '../lib/useTitle'

export default function Privacy() {
  useTitle('Privacy Policy')
  return (
    <LegalPage eyebrow="Policies" title="Website Privacy Policy" lede="How this website collects and uses information. For how we protect your medical information, see our Notice of Privacy Practices.">
      <p>
        This policy covers information collected through {site.domain}. Your protected health information as a patient is governed by
        our <Link to="/notice-of-privacy-practices">HIPAA Notice of Privacy Practices</Link>.
      </p>
      <h2>Information we collect</h2>
      <ul>
        <li>
          <strong>Information you give us.</strong> When you use the Chronic Care Management contact form you provide your name, your
          preferred contact method (phone number or email address), the best time to reach you and a brief message.
        </li>
        <li>
          <strong>Technical information.</strong> Our hosting provider records standard server logs (IP address, browser type, pages
          requested, timestamps) to operate and secure the site. We do not use advertising cookies or sell data.
        </li>
      </ul>
      <h2>How we use it</h2>
      <p>
        We use contact form submissions solely to respond to your request. Submissions are delivered to our practice and, for Chronic
        Care Management requests, to our care management partner, SparroWell, which works on our behalf under a business associate
        agreement. We do not sell or rent personal information.
      </p>
      <h2>Payments</h2>
      <p>
        Online payments are processed by Stripe, Inc. on Stripe's own secure pages. We never receive or store your full card or bank
        account number. Stripe's handling of your data is described in <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">Stripe's privacy policy</a>.
      </p>
      <h2>Third-party links</h2>
      <p>
        This site links to Fullscript, Stripe, Google Maps and the American Board of Internal Medicine. Those sites have their own
        privacy policies, which we encourage you to read.
      </p>
      <h2>Security</h2>
      <p>
        The site is served over HTTPS. Form submissions are encrypted in transit. Because web forms are not a secure medical channel, we
        ask that you not include detailed health information in them.
      </p>
      <h2>Children</h2>
      <p>This site is intended for adults and we do not knowingly collect information from children under 13.</p>
      <h2>Your choices</h2>
      <p>
        To ask what information we hold about you from this website, or to have it deleted, call {site.phone}.
      </p>
      <h2>Changes</h2>
      <p>We may update this policy from time to time; the effective date above reflects the most recent version.</p>
    </LegalPage>
  )
}
