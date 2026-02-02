import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/general/Home';

// Updated Imports to avoid route collision
import Services from './pages/services/ServicesPage';
import Outplacement from './pages/general/OutplacementPage';
import FAQ from './pages/general/FAQPage';
import Process from './pages/general/ProcessPage';
import Booking from './pages/general/BookingPage';
import BookingFull from './pages/general/BookingFullPage';
import Contact from './pages/general/ContactPage';
import Pricing from './pages/general/PricingPage';
import Blog from './pages/blog/BlogPage';

import CaseStudies from './pages/case-studies/CaseStudies';
import CaseStudyDetail from './pages/case-studies/CaseStudyDetail';
import CaseStudyEvidence from './pages/case-studies/CaseStudyEvidence';
import ThreePricingModels from './pages/general/ThreePricingModels';
import AboutUs from './pages/general/AboutUs';
import TermsAndConditions from './pages/legal/TermsAndConditions';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import RefundPolicy from './pages/legal/RefundPolicy';
import CookiesPolicy from './pages/legal/CookiesPolicy';
import Sitemap from './pages/general/Sitemap';
import BlogPost from './pages/blog/BlogPost';

// New Service Pages
import CareerCoaching from './pages/services/CareerCoaching';
import ResumeWriting from './pages/services/ResumeWriting';
import CoverLetterWriting from './pages/services/CoverLetterWriting';
import LinkedInProfile from './pages/services/LinkedInProfile';
import ProfessionalNetwork from './pages/services/ProfessionalNetwork';
import InterviewPreparation from './pages/services/InterviewPreparation';
import SalaryNegotiation from './pages/services/SalaryNegotiation';
import HiddenJobMarket from './pages/services/HiddenJobMarket';
import MarketResearch from './pages/services/MarketResearch';
import ApplicationManagement from './pages/services/ApplicationManagement';
import DigitalPresence from './pages/services/DigitalPresence';

// Competitor Comparison Pages
import CompetitorsComparisonPage from './pages/comparison/CompetitorsComparisonPage';
import ReverseRecruitingComparison from './pages/comparison/ReverseRecruitingComparison';
import ResumeWritingComparison from './pages/comparison/ResumeWritingComparison';
import LinkedInOptimizationComparison from './pages/comparison/LinkedInOptimizationComparison';
import JobSearchComparison from './pages/comparison/JobSearchComparison';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

// Wrapper for page animations
const PageWrapper = ({ children }: { children?: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    exit={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="w-full"
  >
    {children}
  </motion.div>
);

// Separated Routes component to use useLocation hook
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* Route changes trigger animations */}
      {/* @ts-ignore */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />

        {/* Service Sub-Pages */}
        <Route path="/services/career-coaching" element={<PageWrapper><CareerCoaching /></PageWrapper>} />
        <Route path="/services/resume-writing" element={<PageWrapper><ResumeWriting /></PageWrapper>} />
        <Route path="/services/cover-letter" element={<PageWrapper><CoverLetterWriting /></PageWrapper>} />
        <Route path="/services/linkedin-profile" element={<PageWrapper><LinkedInProfile /></PageWrapper>} />
        <Route path="/services/networking" element={<PageWrapper><ProfessionalNetwork /></PageWrapper>} />
        <Route path="/services/interview-prep" element={<PageWrapper><InterviewPreparation /></PageWrapper>} />
        <Route path="/services/salary-negotiation" element={<PageWrapper><SalaryNegotiation /></PageWrapper>} />
        <Route path="/services/hidden-job-market" element={<PageWrapper><HiddenJobMarket /></PageWrapper>} />
        <Route path="/services/market-research" element={<PageWrapper><MarketResearch /></PageWrapper>} />
        <Route path="/services/application-management" element={<PageWrapper><ApplicationManagement /></PageWrapper>} />
        <Route path="/services/digital-presence" element={<PageWrapper><DigitalPresence /></PageWrapper>} />

        <Route path="/process" element={<PageWrapper><Process /></PageWrapper>} />
        <Route path="/case-studies" element={<PageWrapper><CaseStudies /></PageWrapper>} />
        <Route path="/case-studies/:id" element={<PageWrapper><CaseStudyDetail /></PageWrapper>} />
        <Route path="/case-studies/:id/evidence/:evidenceId" element={<PageWrapper><CaseStudyEvidence /></PageWrapper>} />
        <Route path="/outplacement" element={<PageWrapper><Outplacement /></PageWrapper>} />
        <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
        <Route path="/three-models" element={<PageWrapper><ThreePricingModels /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
        <Route path="/booking" element={<PageWrapper><Booking /></PageWrapper>} />
        <Route path="/booking-full" element={<PageWrapper><BookingFull /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
        <Route path="/terms-and-conditions" element={<PageWrapper><TermsAndConditions /></PageWrapper>} />
        <Route path="/privacy-policy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/refund-policy" element={<PageWrapper><RefundPolicy /></PageWrapper>} />
        <Route path="/cookies-policy" element={<PageWrapper><CookiesPolicy /></PageWrapper>} />
        <Route path="/sitemap" element={<PageWrapper><Sitemap /></PageWrapper>} />
        <Route path="/blog" element={<PageWrapper><Blog /></PageWrapper>} />
        <Route path="/blog/:slug" element={<PageWrapper><BlogPost /></PageWrapper>} />

        {/* Competitor Comparison Routes */}
        <Route path="/competitors-comparison" element={<PageWrapper><CompetitorsComparisonPage /></PageWrapper>} />
        <Route path="/competitors-comparison/reverse-recruiting" element={<PageWrapper><ReverseRecruitingComparison /></PageWrapper>} />
        <Route path="/competitors-comparison/resume-writing" element={<PageWrapper><ResumeWritingComparison /></PageWrapper>} />
        <Route path="/competitors-comparison/linkedin-optimization" element={<PageWrapper><LinkedInOptimizationComparison /></PageWrapper>} />
        <Route path="/competitors-comparison/job-search" element={<PageWrapper><JobSearchComparison /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

import VoiceAssistant from './components/VoiceAssistant';

// ... (existing imports)

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Navigation />

        <main className="min-h-screen">
          <AnimatedRoutes />
        </main>

        <Footer />

        {/* FIXED WIDGETS */}
        <a href="https://wa.me/201023642127?text=Hello%20Ayman,%20I%20am%20interested%20in%20Reverse%20Recruiting%20Services" target="_blank" className="fixed bottom-6 right-6 z-50 bg-green-500 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition hover:scale-110 animate-bounce">
          <i className="fab fa-whatsapp text-3xl"></i>
        </a>

        {import.meta.env.VITE_ENABLE_VOICE_ASSISTANT === 'true' && <VoiceAssistant />}
      </Router>
    </HelmetProvider>
  );
};

export default App;