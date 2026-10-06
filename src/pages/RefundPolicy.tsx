import { Link } from 'react-router-dom'
import LegalPage from '../components/LegalPage'
import { site } from '../lib/site'
import { useTitle } from '../lib/useTitle'

export default function RefundPolicy() {
  useTitle('Refund & Cancellation Policy')
  return (
    <LegalPage eyebrow="Policies" title="Refund & Cancellation Policy" lede="How payments, refunds, appointment cancellations and Chronic Care Management enrollment work at Geriatric Professional Services.">
      <h2>Payments</h2>
      <p>
        Payments made through this website are for medical services provided by {site.legalName} ("GPS", "we"), including copays,
        deductibles, coinsurance, patient balances after insurance and self-pay visit fees. All amounts are in U.S. dollars (USD).
        Payments are processed by Stripe, Inc.; we do not see or store your full card or bank account number. Fees vary by service and
        insurance plan and are itemized on your statement. Call {site.phone} for a cost estimate before a self-pay visit.
      </p>
      <h2>Refunds</h2>
      <p>
        If you overpay, pay the same balance twice, or your insurer later pays an amount you have already paid, we will refund the
        difference to your original payment method within 30 days of identifying the credit. Fees for services already rendered are
        otherwise non-refundable. If you believe a charge is in error, call our billing department at {site.billingPhone} within 60 days of the
        statement date and we will review it with you.
      </p>
      <h2>Appointment cancellations</h2>
      <p>
        Please give at least 24 hours' notice to cancel or reschedule a scheduled visit by calling {site.phone} or
        telling your community nurse. We do not currently charge a late-cancellation or no-show fee.
      </p>
      <h2>Chronic Care Management</h2>
      <p>
        Chronic Care Management (CCM) is billed to Medicare monthly, in months when services are provided and only with your consent.
        You may stop participating at any time by calling us; your withdrawal takes effect at the end of the current calendar month.
        Medicare coinsurance already billed for a month in which services were provided is not refundable. Only one practitioner may bill
        Medicare for your CCM in a given month, so please tell us if another office already provides this service.
      </p>
      <h2>Supplement purchases</h2>
      <p>
        Supplements are sold and shipped by Fullscript, an independent company, under Fullscript's own return and refund policy. Please
        contact Fullscript directly about any supplement order.
      </p>
      <h2>Questions and disputes</h2>
      <p>
        Please contact us first. Most billing questions are resolved in a single call to the billing department at {site.billingPhone}. See also our{' '}
        <Link to="/terms">Terms of Use</Link> and <Link to="/privacy">Privacy Policy</Link>.
      </p>
    </LegalPage>
  )
}
