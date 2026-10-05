import LegalPage from '../components/LegalPage'
import { site } from '../lib/site'
import { useTitle } from '../lib/useTitle'

// Section 1557 Notice of Availability: English plus the 15 languages most commonly
// spoken by individuals with limited English proficiency in Illinois.
const languages: [string, string][] = [
  ['Español (Spanish)', 'ATENCIÓN: Si habla español, tiene a su disposición servicios gratuitos de asistencia lingüística. Llame al'],
  ['Polski (Polish)', 'UWAGA: Jeżeli mówisz po polsku, możesz skorzystać z bezpłatnej pomocy językowej. Zadzwoń pod numer'],
  ['中文 (Chinese)', '注意：如果您使用繁體中文，您可以免費獲得語言援助服務。請致電'],
  ['한국어 (Korean)', '주의: 한국어를 사용하시는 경우, 언어 지원 서비스를 무료로 이용하실 수 있습니다.'],
  ['Tagalog', 'PAUNAWA: Kung nagsasalita ka ng Tagalog, maaari kang gumamit ng mga serbisyo ng tulong sa wika nang walang bayad. Tumawag sa'],
  ['العربية (Arabic)', 'ملحوظة: إذا كنت تتحدث العربية، فإن خدمات المساعدة اللغوية تتوافر لك بالمجان. اتصل برقم'],
  ['Русский (Russian)', 'ВНИМАНИЕ: Если вы говорите на русском языке, то вам доступны бесплатные услуги перевода. Звоните'],
  ['ગુજરાતી (Gujarati)', 'સુચના: જો તમે ગુજરાતી બોલતા હો, તો નિ:શુલ્ક ભાષા સહાય સેવાઓ તમારા માટે ઉપલબ્ધ છે. ફોન કરો'],
  ['اردو (Urdu)', 'خبردار: اگر آپ اردو بولتے ہیں، تو آپ کو زبان کی مدد کی خدمات مفت میں دستیاب ہیں۔ کال کریں'],
  ['Tiếng Việt (Vietnamese)', 'CHÚ Ý: Nếu bạn nói Tiếng Việt, có các dịch vụ hỗ trợ ngôn ngữ miễn phí dành cho bạn. Gọi số'],
  ['Italiano (Italian)', 'ATTENZIONE: In caso la lingua parlata sia l\'italiano, sono disponibili servizi di assistenza linguistica gratuiti. Chiamare il numero'],
  ['हिंदी (Hindi)', 'ध्यान दें: यदि आप हिंदी बोलते हैं तो आपके लिए मुफ्त में भाषा सहायता सेवाएं उपलब्ध हैं। कॉल करें'],
  ['Français (French)', 'ATTENTION : Si vous parlez français, des services d\'aide linguistique vous sont proposés gratuitement. Appelez le'],
  ['Ελληνικά (Greek)', 'ΠΡΟΣΟΧΗ: Αν μιλάτε ελληνικά, στη διάθεσή σας βρίσκονται υπηρεσίες γλωσσικής υποστήριξης, οι οποίες παρέχονται δωρεάν. Καλέστε'],
  ['Deutsch (German)', 'ACHTUNG: Wenn Sie Deutsch sprechen, stehen Ihnen kostenlos sprachliche Hilfsdienstleistungen zur Verfügung. Rufnummer:'],
]

export default function Nondiscrimination() {
  useTitle('Nondiscrimination Notice')
  return (
    <LegalPage eyebrow="Section 1557" title="Notice of Nondiscrimination" lede="Geriatric Professional Services complies with applicable federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability or sex.">
      <p>
        {site.legalName} does not exclude people or treat them less favorably because of race, color, national origin, age, disability or
        sex (including pregnancy, sexual orientation, gender identity and sex characteristics).
      </p>
      <h2>We provide, free of charge</h2>
      <ul>
        <li>Reasonable modifications and appropriate auxiliary aids and services to people with disabilities, such as qualified sign language interpreters and written information in other formats (large print, audio, accessible electronic formats).</li>
        <li>Language assistance services to people whose primary language is not English, such as qualified interpreters and information written in other languages.</li>
      </ul>
      <p>If you need these services, call {site.phone}.</p>
      <h2>Filing a grievance</h2>
      <p>
        If you believe we have failed to provide these services or discriminated in another way, you can file a grievance with our Section
        1557 Coordinator at {site.phone}, <a href={`mailto:${site.email}`}>{site.email}</a>, or {site.address.street}, {site.address.city},{' '}
        {site.address.state} {site.address.zip}. You can file in person, by mail, phone or email, and we can help you.
      </p>
      <p>
        You can also file a civil rights complaint with the U.S. Department of Health and Human Services, Office for Civil Rights, online at{' '}
        <a href="https://ocrportal.hhs.gov/ocr/portal/lobby.jsf" target="_blank" rel="noopener noreferrer">ocrportal.hhs.gov</a>, by mail at
        200 Independence Avenue SW, Room 509F, HHH Building, Washington, D.C. 20201, or by phone at 1-800-368-1019 (TDD 1-800-537-7697).
        Complaint forms are available at <a href="https://www.hhs.gov/ocr/complaints" target="_blank" rel="noopener noreferrer">hhs.gov/ocr/complaints</a>.
      </p>
      <h2>Notice of availability of language assistance</h2>
      <p>
        <strong>ATTENTION:</strong> If you speak a language other than English, language assistance services, free of charge, are available
        to you. Appropriate auxiliary aids and services to provide information in accessible formats are also available free of charge.
        Call {site.phone}.
      </p>
      <ul className="!list-none !pl-0">
        {languages.map(([lang, text]) => (
          <li key={lang} className="mb-3">
            <strong>{lang}:</strong> {text} {site.phone}.
          </li>
        ))}
      </ul>
    </LegalPage>
  )
}
