import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage'
import { site } from '../lib/site'
import { useTitle } from '../lib/useTitle'

export default function Terms() {
  useTitle('Terms of Use')
  return (
    <LegalPage eyebrow="Policies" title="Terms of Use" lede={`The rules for using ${site.domain}.`}>
      <p>
        This website is operated by {site.legalName} ("GPS", "we", "us"), {site.address.street}, {site.address.city}, {site.address.state}{' '}
        {site.address.zip}. By using {site.domain} you agree to these terms. If you do not agree, please do not use the site.
      </p>
      <h2>Not medical advice; no physician-patient relationship</h2>
      <p>
        Content on this site is for general information only and is not a substitute for professional medical advice, diagnosis or
        treatment. Viewing this site, or contacting the practice through it, does not create a physician-patient relationship. Never
        disregard professional medical advice because of something you read here.
      </p>
      <p>
        <strong>If you are experiencing a medical emergency, call 911 or go to the nearest emergency room.</strong> Do not use this
        website, its forms or email for urgent medical needs.
      </p>
      <h2>Forms and communications</h2>
      <p>
        The forms on this site are intended for contact requests only and are not a secure medical record. Please do not submit
        symptoms, diagnoses, medications or other detailed health information through them. By submitting a form you consent to being
        contacted by our practice or our care management partner using the contact method you selected.
      </p>
      <h2>Online payments</h2>
      <p>
        Payments are processed by Stripe, Inc. and are subject to our <Link to="/refund-policy">Refund &amp; Cancellation Policy</Link>.
        You represent that you are authorized to use any payment method you provide. All amounts are in U.S. dollars.
      </p>
      <h2>Third-party sites</h2>
      <p>
        Links to third-party websites, including Stripe, Fullscript and the American Board of Internal Medicine, are provided for
        convenience. We do not control those sites and are not responsible for their content or privacy practices. Our supplement store
        is hosted by Fullscript; if you purchase through our link, the practice may receive a portion of the sale. You are under no
        obligation to buy supplements from us, and your care will not be affected by your decision.
      </p>
      <h2>Intellectual property</h2>
      <p>
        The content, design and logos on this site belong to GPS or its licensors and may not be reproduced without permission, except
        for your personal, non-commercial use.
      </p>
      <h2>Disclaimer and limitation of liability</h2>
      <p>
        The site is provided "as is" without warranties of any kind. To the fullest extent permitted by law, GPS is not liable for any
        damages arising from your use of, or inability to use, the site.
      </p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of Illinois. Services are provided to patients located in Illinois.</p>
      <h2>Changes</h2>
      <p>We may update these terms from time to time. The effective date above reflects the latest revision.</p>
      <h2>Contact</h2>
      <p>
        {site.legalName} · {site.phone} · <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
    </LegalPage>
  )
}
