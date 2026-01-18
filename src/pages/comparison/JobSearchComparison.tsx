import React from 'react';
import { Helmet } from 'react-helmet-async';
import ComparisonTable, { CompetitorData } from '../../components/comparison/ComparisonTable';
import { Link } from 'react-router-dom';

const features = [
    { name: 'Strategy', key: 'strategy', description: 'Is there a proactive plan?' },
    { name: 'Platform Access', key: 'platforms', description: 'Where do they look for jobs?' },
    { name: 'Salary Negotiation', key: 'negotiation', description: 'Do they help you get paid more?' },
    { name: 'Ongoing Support', key: 'support', description: 'Are they with you during the interview phase?' },
];

const competitors: CompetitorData[] = [
    {
        name: 'The Dream Job Consultant',
        isUs: true,
        features: {
            strategy: 'Custom Executive Roadmap',
            platforms: 'LinkedIn, Glassdoor, Hidden Market',
            negotiation: 'Full Scripting & Coaching',
            support: 'Unlimited via WhatsApp/Zoom'
        }
    },
    {
        name: 'Career Agents',
        isUs: false,
        features: {
            strategy: 'Standard Process',
            platforms: 'Major Job Boards',
            negotiation: 'Advice Only',
            support: 'Scheduled Calls'
        }
    },
    {
        name: 'Recruitment Agencies',
        isUs: false,
        features: {
            strategy: 'Client Focused (Not You)',
            platforms: 'Their Own Database',
            negotiation: 'Works for the Employer',
            support: 'Transactional'
        }
    },
    {
        name: 'Job Boards (DIY)',
        isUs: false,
        features: {
            strategy: 'None (Spray & Pray)',
            platforms: 'Public Listings',
            negotiation: 'None',
            support: 'None'
        }
    }
];

const JobSearchComparison = () => {
    return (
        <>
            <Helmet>
                <title>Job Search Strategy Comparison | The Dream Job Consultant</title>
                <meta name="description" content="Compare our Job Search Strategy and Coaching against competitors." />
            </Helmet>

            <div className="bg-navy-900 min-h-screen pt-28 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                    <Link to="/competitors-comparison" className="text-gold-400 hover:text-white mb-6 inline-block transition-colors">
                        <i className="fas fa-arrow-left mr-2"></i> Back to All Comparisons
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Job Search: Strategic vs. Reactive</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Finding a job is a full-time job. Most people do it reactively. We bring a proactive, strategic approach to uncover the 70% of jobs that are never posted.
                    </p>
                </div>

                <ComparisonTable
                    title="Search Strategy Comparison"
                    features={features}
                    competitors={competitors}
                />

                <div className="max-w-3xl mx-auto px-4 mt-16 text-center">
                    <Link to="/services/application-management" className="inline-block bg-gold-500 text-navy-900 font-bold py-3 px-8 rounded-full hover:bg-gold-400 transition-colors shadow-lg hover:shadow-gold-500/20 mb-8">
                        Save Your Time
                    </Link>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-sm md:text-base">
                        <a
                            href="https://wa.me/201023642127?text=Hello%20Ayman,%20I%20am%20interested%20in%20Job%20Search%20Strategy"
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

export default JobSearchComparison;
