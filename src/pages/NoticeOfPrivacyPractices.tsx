import LegalPage from '../components/LegalPage'
import { site } from '../lib/site'
import { useTitle } from '../lib/useTitle'

export default function NoticeOfPrivacyPractices() {
  useTitle('Notice of Privacy Practices')
  return (
    <LegalPage eyebrow="HIPAA" title="Notice of Privacy Practices" lede="This notice describes how medical information about you may be used and disclosed and how you can get access to this information. Please review it carefully.">
      <h2>Our commitment</h2>
      <p>
        {site.legalName} is required by law to maintain the privacy of your protected health information (PHI), to give you this notice
        of our legal duties and privacy practices, and to follow the terms of the notice currently in effect.
      </p>
      <h2>How we may use and disclose your health information</h2>
      <ul>
        <li><strong>Treatment.</strong> To provide, coordinate and manage your care, including sharing information with your nurses, specialists, pharmacies, hospitals and our Chronic Care Management team.</li>
        <li><strong>Payment.</strong> To bill and collect payment from you, Medicare, Medicaid or your insurance plan.</li>
        <li><strong>Health care operations.</strong> To run our practice, such as quality review, training and compliance.</li>
        <li><strong>Business associates.</strong> With companies that perform services for us, such as billing, care management and payment processing, who are bound by contract to protect your information.</li>
        <li><strong>As required by law,</strong> for public health activities, to report abuse or neglect, for health oversight, in legal proceedings, to law enforcement under limited circumstances, to coroners and funeral directors, for organ donation, for research under approved protocols, to avert a serious threat to health or safety, and for workers' compensation.</li>
        <li><strong>Family and caregivers.</strong> We may share information relevant to your care with family members or others involved in your care or payment for your care, unless you object.</li>
        <li><strong>Appointment reminders and health-related services.</strong> We may contact you about appointments, treatment alternatives and other health-related benefits.</li>
      </ul>
      <p>
        Other uses and disclosures, including most uses of psychotherapy notes, marketing, and the sale of your information, require your
        written authorization, which you may revoke at any time in writing.
      </p>
      <h2>Your rights</h2>
      <ul>
        <li><strong>Inspect and copy</strong> your medical and billing records, including an electronic copy, usually within 30 days of your request. We may charge a reasonable, cost-based fee.</li>
        <li><strong>Request an amendment</strong> if you believe information is incorrect or incomplete.</li>
        <li><strong>Receive an accounting of disclosures</strong> made for purposes other than treatment, payment and operations.</li>
        <li><strong>Request restrictions</strong> on certain uses and disclosures. We must agree to a request not to share information with your health plan about a service you have paid for in full out of pocket.</li>
        <li><strong>Request confidential communications</strong> by a specific method or at a specific location.</li>
        <li><strong>Be notified</strong> of a breach of your unsecured PHI.</li>
        <li><strong>Receive a paper copy</strong> of this notice at any time, even if you agreed to receive it electronically.</li>
      </ul>
      <h2>Changes to this notice</h2>
      <p>
        We reserve the right to change this notice and make the revised notice effective for information we already have as well as
        information we receive in the future. The current notice is posted on this website and in our office.
      </p>
      <h2>Complaints</h2>
      <p>
        If you believe your privacy rights have been violated, you may file a complaint with our Privacy Officer at {site.phone} or{' '}
        {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}, or with the Secretary of the U.S. Department of
        Health and Human Services, Office for Civil Rights, 200 Independence Avenue S.W., Washington, D.C. 20201, 1-877-696-6775,{' '}
        <a href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/" target="_blank" rel="noopener noreferrer">www.hhs.gov/ocr/privacy/hipaa/complaints</a>.
        We will not retaliate against you for filing a complaint.
      </p>
      <h2>Contact</h2>
      <p>Privacy Officer, {site.legalName} · {site.phone}</p>
    </LegalPage>
  )
}
