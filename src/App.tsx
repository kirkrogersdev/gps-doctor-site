import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Vine from './components/Vine'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ChronicCare from './pages/ChronicCare'
import Patients from './pages/Patients'
import Pay from './pages/Pay'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import NoticeOfPrivacyPractices from './pages/NoticeOfPrivacyPractices'
import Terms from './pages/Terms'
import RefundPolicy from './pages/RefundPolicy'
import Accessibility from './pages/Accessibility'
import Nondiscrimination from './pages/Nondiscrimination'
import NotFound from './pages/NotFound'
import BrandOptions from './pages/BrandOptions'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <div className="pointer-events-none fixed inset-y-0 right-0 -z-10 hidden w-52 xl:block" aria-hidden="true">
        <Vine className="h-full w-full text-forest-900/[0.07]" />
      </div>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-forest-900 focus:px-4 focus:py-2 focus:text-cream"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/chronic-care-management" element={<ChronicCare />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/pay" element={<Pay />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/notice-of-privacy-practices" element={<NoticeOfPrivacyPractices />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/accessibility" element={<Accessibility />} />
          <Route path="/nondiscrimination" element={<Nondiscrimination />} />
          <Route path="/brand-options" element={<BrandOptions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
