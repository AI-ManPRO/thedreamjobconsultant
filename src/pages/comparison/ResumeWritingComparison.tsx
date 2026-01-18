import React from 'react';
import { Helmet } from 'react-helmet-async';
import ComparisonTable, { CompetitorData } from '../../components/comparison/ComparisonTable';
import { Link } from 'react-router-dom';

const features = [
    { name: 'Writer Expertise', key: 'expertise', description: 'Who is actually writing your resume?' },
    { name: 'ATS Compliance', key: 'ats', description: 'Will it pass the Applicant Tracking Systems?' },
    { name: 'Design Quality', key: 'design', description: 'Is it visually appealing for humans?' },
    { name: 'Turnaround Time', key: 'turnaround', description: 'How fast will you get the first draft?' },
    { name: 'Revisions', key: 'revisions', description: 'Are changes included?' },
    { name: 'Consultation', key: 'consultation', description: 'Do you talk to the writer?' },
];

const competitors: CompetitorData[] = [
    {
        name: 'The Dream Job Consultant',
        isUs: true,
        features: {
            expertise: 'Executive Career Strategist',
            ats: '100% Optimized Strategy',
            design: 'Modern & Professional',
            turnaround: '3-5 Business Days',
            revisions: 'Unlimited until Satisfaction',
            consultation: '1-on-1 Deep Dive Call'
        }
    },
    {
        name: 'FindMyProfession',
        isUs: false,
        features: {
            expertise: 'Certified Writers',
            ats: true,
            design: 'Professional',
            turnaround: '3-5 Days',
            revisions: 'Unlimited (Period)',
            consultation: 'Phone Call'
        }
    },
    {
        name: 'TopStack Resume',
        isUs: false,
        features: {
            expertise: 'Freelance Network',
            ats: true,
            design: 'Standard',
            turnaround: 'Varies',
            revisions: '2 Rounds',
            consultation: 'Email/Brief Call'
        }
    },
    {
        name: 'Resume Pill / Mills',
        isUs: false,
        features: {
            expertise: 'Entry Level / AI',
            ats: 'Hit or Miss',
            design: 'Dated Templates',
            turnaround: '24-48 Hours',
            revisions: 'None or Limited',
            consultation: 'None (Form only)'
        }
    }
];

const ResumeWritingComparison = () => {
    return (
        <>
            <Helmet>
                <title>Resume Writing Comparison | The Dream Job Consultant</title>
                <meta name="description" content="Why our resume writing service beats the competition. Executive branding vs generic templates." />
            </Helmet>

            <div className="bg-navy-900 min-h-screen pt-28 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                    <Link to="/competitors-comparison" className="text-gold-400 hover:text-white mb-6 inline-block transition-colors">
                        <i className="fas fa-arrow-left mr-2"></i> Back to All Comparisons
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Resume Writing: Quality vs. Churn</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Most resume services operate on volume—hiring low-paid freelancers to churn out templates. We operate on <strong>strategy</strong>. Your resume isn't just a document; it's your marketing brochure.
                    </p>
                </div>

                <ComparisonTable
                    title="Resume Service Comparison"
                    features={features}
                    competitors={competitors}
                />

                <div className="max-w-3xl mx-auto px-4 mt-16 text-center">
                    <Link to="/services/resume-writing" className="inline-block bg-gold-500 text-navy-900 font-bold py-3 px-8 rounded-full hover:bg-gold-400 transition-colors shadow-lg hover:shadow-gold-500/20 mb-8">
                        Get Your Executive Resume
                    </Link>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-sm md:text-base">
                        <a
                            href="https://wa.me/201023642127?text=Hello%20Ayman,%20I%20am%20interested%20in%20Resume%20Writing"
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

export default ResumeWritingComparison;
