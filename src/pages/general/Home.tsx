import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../../components/home/HeroSection';
import TrustedBy from '../../components/home/TrustedBy';
import ValueProposition from '../../components/home/ValueProposition';
import ServicesPreview from '../../components/home/ServicesPreview';
import IndustriesSection from '../../components/home/IndustriesSection';
import FAQTeaser from '../../components/home/FAQTeaser';
import NewsletterSignup from '../../components/home/NewsletterSignup';
import ExitIntentPopup from '../../components/ExitIntentPopup';
import ROICalculator from '../../components/ROICalculator';
import FeaturedIn from '../../components/home/FeaturedIn';
import BlogTeaser from '../../components/home/BlogTeaser';

const Home = () => (
  <>
    <Helmet>
      <title>The Dream Job Consultant | Executive Reverse Recruiting & Career Strategy</title>
      <meta name="description" content="Secure your seat at the C-Suite table. We are the premier executive reverse recruiting firm navigating the hidden job market for senior leaders. Stop applying, start interviewing." />
      <meta name="keywords" content="reverse recruiting, executive job search, hidden job market, c-suite career coaching, executive resume writing, salary negotiation, career strategy" />
    </Helmet>

    <main className="bg-navy-900 min-h-screen text-slate-200 selection:bg-gold-500 selection:text-navy-900">
      <HeroSection />



      <ValueProposition />

      <ServicesPreview />

      <IndustriesSection />

      <FeaturedIn />

      {/* ROI Calculator Section Wrapper */}
      <section className="py-20 bg-navy-900 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Calculate Your ROI</h2>
            <p className="text-slate-400">See exactly how much a faster, better-negotiated offer is worth.</p>
          </div>
          <ROICalculator />
        </div>
      </section>

      <BlogTeaser />

      <FAQTeaser />

      <TrustedBy />

      <NewsletterSignup />

      <ExitIntentPopup />
    </main>
  </>
);

export default Home;