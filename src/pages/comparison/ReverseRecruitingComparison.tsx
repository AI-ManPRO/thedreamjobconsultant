import React from 'react';
import { Helmet } from 'react-helmet-async';
import ComparisonTable, { CompetitorData } from '../../components/comparison/ComparisonTable';
import { Link } from 'react-router-dom';

const features = [
    { name: 'Application Volume', key: 'volume', description: 'How many jobs are applied to per month.' },
    { name: 'Hidden Job Market', key: 'hidden_jobs', description: 'Access to unlisted opportunities through networking.' },
    { name: 'Networking Outreach', key: 'networking', description: 'Direct messaging to hiring managers.' },
    { name: 'Human vs Bot', key: 'human', description: 'Is the work done by a real person or a script?' },
    { name: 'Interview Guarantee', key: 'guarantee', description: 'Is there a guarantee of results?' },
    { name: 'Pricing Structure', key: 'pricing', description: 'Is it flat fee or commission based?' },
];

const competitors: CompetitorData[] = [
    {
        name: 'The Dream Job Consultant',
        isUs: true,
        features: {
            volume: 'Unlimited (Quality)',
            hidden_jobs: true,
            networking: 'Comprehensive (Decision Makers)',
            human: '100% Human (Dedicated Expert)',
            guarantee: 'Explore Case Studies',
            pricing: '$1000 + One Month Of Job Offer Annual Salary (4pay)',
        }
    },
    {
        name: 'FindMyProfession',
        isUs: false,
        features: {
            volume: 'Capped (Plan Dependent)',
            hidden_jobs: 'Pro/Elite Plans Only',
            networking: 'Pro/Elite Plans Only',
            human: 'Human (Team)',
            guarantee: '6-Month Guarantee',
            pricing: '$3,000 - $4,500/mo',
        }
    },
    {
        name: 'Career Agents',
        isUs: false,
        features: {
            volume: '~150-240 (8/day)',
            hidden_jobs: true,
            networking: 'Warm Intros',
            human: 'Human Managed',
            guarantee: 'Job Offer (Signature Tier)',
            pricing: '$1,895 - $5,995/mo',
        }
    },
    {
        name: 'iCareerSolutions',
        isUs: false,
        features: {
            volume: 'Targeted (Unspecified)',
            hidden_jobs: true,
            networking: 'Precision Outreach',
            human: 'Senior Coaches',
            guarantee: '60-Day Interview G.',
            pricing: '$1,495 - $5,495',
        }
    },
    {
        name: 'Browning Associates',
        isUs: false,
        features: {
            volume: 'Client Applies (0/mo)',
            hidden_jobs: 'Networking Coaching',
            networking: 'Coached Strategy',
            human: 'Coaching Only',
            guarantee: 'No Job Guarantee',
            pricing: '~$15k Upfront',
        }
    },
    {
        name: 'Reverse Recruiting Agency',
        isUs: false,
        features: {
            volume: '~400/mo (Capped)',
            hidden_jobs: true,
            networking: 'Yes',
            human: 'Human (Boutique)',
            guarantee: '1st Month Refund Only',
            pricing: '$2,500/mo + 10% Salary',
        }
    },
    {
        name: 'WeAreCareer',
        isUs: false,
        features: {
            volume: '300-450+ (High Vol)',
            hidden_jobs: 'Sourcing Only',
            networking: 'Recruiter Emails',
            human: 'Agent Sourcing',
            guarantee: 'Verify on Call',
            pricing: 'Consultation Required',
        }
    },
    {
        name: 'Relentless',
        isUs: false,
        features: {
            volume: 'Full Management',
            hidden_jobs: true,
            networking: 'Messaging Included',
            human: 'Human + Software',
            guarantee: 'Success Fee Model',
            pricing: 'Fee + ~10% Salary',
        }
    },
    {
        name: 'Apply4U',
        isUs: false,
        features: {
            volume: 'Hours Based',
            hidden_jobs: false,
            networking: 'Limited',
            human: 'Human Experts',
            guarantee: false,
            pricing: '$15/hr or Comm. ($2k+10%)',
        }
    },
    {
        name: 'TopProspectCareers',
        isUs: false,
        features: {
            volume: 'Robust / Targeted',
            hidden_jobs: true,
            networking: 'Principal Led',
            human: 'Human (Dan/Brad)',
            guarantee: 'Contract Specific',
            pricing: 'Consultation Required',
        }
    }
];

const ReverseRecruitingComparison = () => {
    return (
        <>
            <Helmet>
                <title>Reverse Recruiting Comparison | The Dream Job Consultant</title>
                <meta name="description" content="Compare our Reverse Recruiting services against FindMyProfession, Reverse Recruiting Agency, and others." />
            </Helmet>

            <div className="bg-navy-900 min-h-screen pt-28 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
                    <Link to="/competitors-comparison" className="text-gold-400 hover:text-white mb-6 inline-block transition-colors">
                        <i className="fas fa-arrow-left mr-2"></i> Back to All Comparisons
                    </Link>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Reverse Recruiting Wars</h1>
                    <p className="text-slate-300 max-w-2xl mx-auto">
                        Not all "Reverse Recruiting" is created equal. Some blast your resume to random emails (Spam), others charge a high percentage of your future salary. We do it differently.
                    </p>
                </div>

                <ComparisonTable
                    title="Service Breakdown"
                    features={features}
                    competitors={competitors}
                />

                <div className="max-w-3xl mx-auto px-4 mt-16 text-slate-300 space-y-6">
                    <h3 className="text-2xl font-bold text-white mb-4">The "Hidden" Cost of Competitors</h3>
                    <p>
                        Many agencies charge a higher monthly fee and take a <strong>10-15% commission</strong> of your first year's salary. For an executive role paying $200k, that's an extra <strong>$20,000 - $30,000</strong> you pay <em>after</em> you do the work of interviewing.
                    </p>
                    <p>
                        <strong>The Dream Job Consultant</strong> charges a predictable flat fee "based on your subscribed plan". You keep 100% of your salary. We are incentivized to get you the <em>best</em> offer, not just <em>any</em> offer to claim a commission. We have different plans for different needs. Of course you will find one plan that suits you or is better for you than another, but we are transparent about it.
                    </p>

                    <div className="pt-8 text-center">
                        <Link to="/pricing" className="inline-block bg-gold-500 text-navy-900 font-bold py-3 px-8 rounded-full hover:bg-gold-400 transition-colors shadow-lg hover:shadow-gold-500/20 mb-8">
                            View Our Plans
                        </Link>

                        <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-sm md:text-base">
                            <a
                                href="https://wa.me/201023642127?text=Hello%20Ayman,%20I%20am%20interested%20in%20Reverse%20Recruiting"
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
            </div>
        </>
    );
};

export default ReverseRecruitingComparison;
