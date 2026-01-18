import React from 'react';
import { Helmet } from 'react-helmet-async';
import ComparisonTable, { CompetitorData } from '../../components/comparison/ComparisonTable';
import { Link } from 'react-router-dom';

const features = [
    { name: 'Headline Strategy', key: 'headline', description: 'Is the headline keyword optimized for search?' },
    { name: 'Content Writing', key: 'content', description: 'Do they write the About and Experience sections?' },
    { name: 'Banner Design', key: 'banner', description: 'Custom background banner design?' },
    { name: 'SEO Optimization', key: 'seo', description: 'Ranking higher in recruiter searches.' },
    { name: 'Engagement Guide', key: 'guide', description: 'Instructions on how to use the profile?' },
];

const competitors: CompetitorData[] = [
    {
        name: 'The Dream Job Consultant',
        isUs: true,
        features: {
            headline: 'Keyword Rich & Branding Focused',
            content: 'Full Rewriting (Storytelling)',
            banner: 'Custom Branded Design',
            seo: 'Advanced Algorithm Strategy',
            guide: 'Networking Scripts & Playbook'
        }
    },
    {
        name: 'FindMyProfession',
        isUs: false,
        features: {
            headline: 'Optimized',
            content: 'Professional Rewriting',
            banner: false,
            seo: true,
            guide: false
        }
    },
    {
        name: 'LinkedIn "Gurus"',
        isUs: false,
        features: {
            headline: 'Clickbaity',
            content: 'Template Based',
            banner: 'Stock Photo',
            seo: 'Basic',
            guide: 'Upsell Content Course'
        }
    },
    {
        name: 'General Writers',
        isUs: false,
        features: {
            headline: 'Basic (Title only)',
            content: 'Copy-Paste from Resume',
            banner: false,
            seo: false,
            guide: false
        }
    }
];

const LinkedInOptimizationComparison = () => {
    return (
        <>
            <Helmet>
                <title>LinkedIn Optimization Comparison | The Dream Job Consultant</title>
                <meta name="description" content="Compare our LinkedIn profile optimization services against competitors." />
            </Helmet>

            <div className="bg-navy-900 min-h-screen pt-28 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                    <Link to="/competitors-comparison" className="text-gold-400 hover:text-white mb-6 inline-block transition-colors">
                        <i className="fas fa-arrow-left mr-2"></i> Back to All Comparisons
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">LinkedIn: Being Found vs. Being Ignored</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        94% of recruiters use LinkedIn. We make sure you appear in their searches. Our optimization goes beyond just copying your resume—we turn your profile into a landing page for your personal brand.
                    </p>
                </div>

                <ComparisonTable
                    title="LinkedIn Optimization Comparison"
                    features={features}
                    competitors={competitors}
                />

                <div className="max-w-3xl mx-auto px-4 mt-16 text-center">
                    <Link to="/services/linkedin-profile" className="inline-block bg-gold-500 text-navy-900 font-bold py-3 px-8 rounded-full hover:bg-gold-400 transition-colors shadow-lg hover:shadow-gold-500/20 mb-8">
                        Optimize My Profile
                    </Link>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-sm md:text-base">
                        <a
                            href="https://wa.me/201023642127?text=Hello%20Ayman,%20I%20am%20interested%20in%20LinkedIn%20Optimization"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors"
                        >
                            <i className="fab fa-whatsapp text-xl"></i> DM me on WhatsApp
                        </a>
                        <span className="text-slate-600 hidden md:block">|</span>
                        <Link
                            to="/booking"
                            className="flex items-center gap-2 text-slate-300 hover:text-white font-semibold transition-colors"
                        >
                            <i className="fas fa-calendar-check text-gold-400 text-lg"></i> Book a Free Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LinkedInOptimizationComparison;
