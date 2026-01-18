import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ComparisonTable, { CompetitorData } from '../../components/comparison/ComparisonTable';

const comparisonCards = [
    {
        title: 'Reverse Recruiting',
        description: 'See how our full-service application management stacks up against automated bots and limited agencies.',
        icon: 'fas fa-rocket',
        link: '/competitors-comparison/reverse-recruiting',
        color: 'text-blue-400'
    },
    {
        title: 'Resume Writing',
        description: 'Compare our executive-grade, ATS-optimized resumes with generic templates found elsewhere.',
        icon: 'fas fa-file-alt',
        link: '/competitors-comparison/resume-writing',
        color: 'text-green-400'
    },
    {
        title: 'LinkedIn Optimization',
        description: 'Discover why our personal branding strategy outperforms standard profile updates.',
        icon: 'fab fa-linkedin',
        link: '/competitors-comparison/linkedin-optimization',
        color: 'text-blue-600'
    },
    {
        title: 'Job Search Strategy',
        description: 'Evaluate our holistic approach to uncovering the hidden job market vs. basic job boards.',
        icon: 'fas fa-search-dollar',
        link: '/competitors-comparison/job-search',
        color: 'text-purple-400'
    }
];

// General High-Level Comparison Data
const highLevelFeatures = [
    { name: 'Model', key: 'model', description: 'The core operational model of the service.' },
    { name: 'Application Volume', key: 'volume', description: 'Number of applications submitted per month.' },
    { name: 'Personalization', key: 'personalization', description: 'Is the outreach customized for each role?' },
    { name: 'Direct Contact', key: 'contact', description: 'Access to the person doing the work.' },
    { name: 'Cost Value', key: 'cost_value', description: 'Relative value for money.' },
];

const highLevelCompetitors: CompetitorData[] = [
    {
        name: 'The Dream Job Consultant',
        isUs: true,
        features: {
            model: 'End-to-End Executive Partnership',
            volume: 'Unlimited (until hired)',
            personalization: '100% Hand-Crafted',
            contact: 'Direct WhatsApp/Zoom with Ayman',
            cost_value: 'High (All-inclusive Retainer)'
        }
    },
    {
        name: 'FindMyProfession',
        isUs: false,
        features: {
            model: 'Agency Model (Many Writers)',
            volume: 'Managed (Plan Limits)',
            personalization: 'High',
            contact: 'Dedicated Writer',
            cost_value: 'Premium ($3k-5k/mo)'
        }
    },
    {
        name: 'Reverse Recruiting Agency',
        isUs: false,
        features: {
            model: 'Boutique Agency',
            volume: 'Up to 100/week (Capped)',
            personalization: 'High',
            contact: 'Team Based',
            cost_value: 'Commission Based (+10% Salary)'
        }
    },
    {
        name: 'Standard Resume Mills',
        isUs: false,
        features: {
            model: 'Volume Factory',
            volume: 'N/A (Writing Only)',
            personalization: 'Template Based',
            contact: 'Support Ticket',
            cost_value: 'Low ($100-$300 One-off)'
        }
    }
];


const CompetitorsComparisonPage = () => {
    return (
        <>
            <Helmet>
                <title>Competitors Comparison | The Dream Job Consultant</title>
                <meta name="description" content="Compare The Dream Job Consultant against top competitors like FindMyProfession and more. See why we offer the best value for executives." />
            </Helmet>

            <div className="bg-navy-900 min-h-screen pt-28 pb-20">
                {/* Header */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-extrabold text-white mb-6"
                    >
                        Why Choose <span className="text-gold-400">The Dream Job Consultant</span>?
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        We don't just write resumes or apply to jobs. We partner with you until you are hired.
                        Compare our comprehensive, personalized approach against the industry standards.
                    </p>
                </div>

                {/* Navigation Cards */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {comparisonCards.map((card, idx) => (
                            <Link to={card.link} key={idx} className="block group">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-navy-800 border border-slate-700 rounded-xl p-8 h-full hover:border-gold-500/50 transition-colors shadow-lg"
                                >
                                    <div className={`${card.color} text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        <i className={card.icon}></i>
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">{card.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{card.description}</p>
                                    <div className="mt-6 flex items-center text-gold-400 text-xs font-bold uppercase tracking-widest">
                                        Compare Now <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* High Level Comparison Table */}
                <ComparisonTable
                    title="At A Glance Comparison"
                    subtitle="A quick look at how our business model differs from the rest."
                    features={highLevelFeatures}
                    competitors={highLevelCompetitors}
                />

                {/* CTA Section */}
                <div className="max-w-4xl mx-auto px-4 mt-16 text-center">
                    <div className="bg-gradient-to-r from-navy-800 to-navy-700 rounded-2xl p-10 border border-slate-600 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                        <h2 className="text-3xl font-bold text-white mb-4 relative z-10">Stop Settling for "Good Enough"</h2>
                        <p className="text-slate-300 mb-8 relative z-10">
                            Your career deserves more than a bot or a template. It deserves a partner who is invested in your success.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
                            <Link to="/booking" className="bg-gold-500 text-navy-900 font-bold py-4 px-8 rounded-full hover:bg-gold-400 transition-all shadow-lg hover:shadow-gold-500/20">
                                Book Your Free Consultation
                            </Link>
                            <Link to="/case-studies" className="bg-transparent border border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white/10 transition-all">
                                See Client Results
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default CompetitorsComparisonPage;
