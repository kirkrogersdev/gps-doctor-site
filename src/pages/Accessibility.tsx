import LegalPage from '../components/LegalPage'
import { site } from '../lib/site'
import { useTitle } from '../lib/useTitle'

export default function Accessibility() {
  useTitle('Accessibility Statement')
  return (
    <LegalPage eyebrow="Accessibility" title="Accessibility Statement" lede="We want every patient and family member to be able to use this website.">
      <p>
        {site.legalName} is committed to ensuring digital accessibility for people with disabilities. We are continually improving the
        user experience for everyone and applying the relevant accessibility standards.
      </p>
      <h2>Conformance status</h2>
      <p>
        We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. The site uses semantic HTML, supports
        keyboard navigation, provides a visible focus indicator and a skip-to-content link, maintains color contrast of at least 4.5:1 for
        text, and includes text alternatives for meaningful images. It respects your system's reduced-motion preference.
      </p>
      <h2>Known limitations</h2>
      <p>
        Some content is provided by third parties, including the Stripe payment pages, the Fullscript supplement store and the embedded
        Google map. We cannot fully control the accessibility of those services. If any part of this site is difficult for you to use,
        we will provide the information in an alternative format at no cost.
      </p>
      <h2>Language assistance and auxiliary aids</h2>
      <p>
        Free language assistance services and auxiliary aids, such as qualified interpreters and information in other formats, are
        available to patients. Call {site.phone}.
      </p>
      <h2>Feedback</h2>
      <p>
        Please tell us if you encounter accessibility barriers on {site.domain}: {site.phone} or <a href={`mailto:${site.email}`}>{site.email}</a>.
        We try to respond within five business days.
      </p>
    </LegalPage>
  )
}
