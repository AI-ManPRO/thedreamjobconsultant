import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from './Navigation';
import Footer from './Footer';
import Home from './Home';
import Services from './Services';
import CaseStudies from './CaseStudies';
import CaseStudyDetail from './CaseStudyDetail';
import CaseStudyEvidence from './CaseStudyEvidence';
import Pricing from './Pricing';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import Process from './Process';

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
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/services" element={<PageWrapper><Services /></PageWrapper>} />
        <Route path="/process" element={<PageWrapper><Process /></PageWrapper>} />
        <Route path="/case-studies" element={<PageWrapper><CaseStudies /></PageWrapper>} />
        <Route path="/case-studies/:id" element={<PageWrapper><CaseStudyDetail /></PageWrapper>} />
        <Route path="/case-studies/:id/evidence/:evidenceId" element={<PageWrapper><CaseStudyEvidence /></PageWrapper>} />
        <Route path="/pricing" element={<PageWrapper><Pricing /></PageWrapper>} />
        <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutUs /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
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

      <button className="fixed bottom-6 right-24 z-40 bg-navy-700 text-white px-4 py-3 rounded-full shadow-lg border border-slate-600 flex items-center gap-2 hover:bg-navy-600 transition">
        <i className="fas fa-robot text-gold-400"></i>
        <span className="text-sm font-medium">Ask AI Assistant</span>
      </button>
    </Router>
  );
};

export default App;