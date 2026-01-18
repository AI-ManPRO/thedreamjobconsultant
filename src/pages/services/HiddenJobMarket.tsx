import React from 'react';
import { Link } from 'react-router-dom';

const HiddenJobMarket = () => {
    return (
        <div className="bg-navy-900 min-h-screen pt-28 pb-20 px-4">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-20">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent z-10"></div>
                    <img
                        src="/images/services/hidden-job-market.jpg"
                        alt="Hidden Job Market"
                        className="w-full h-[500px] object-cover opacity-60"
                    />
                    <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16">
                        <div className="max-w-2xl">
                            <span className="text-gold-400 font-bold tracking-wider uppercase mb-4 block">Exclusive Opportunity Access</span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                Go Where the <br />
                                <span className="text-gold-400">Competition Isn't.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                The best jobs are never posted on LinkedIn. They are filled quietly, through handshakes and introductions. We have the keys to those doors.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://calendly.com/thedreamjobconsultant/60min/" target="_blank" className="gold-btn text-navy-900 px-8 py-4 rounded-full font-bold text-lg text-center shadow-lg hover:shadow-gold-400/20 transition-all">
                                    Access Hidden Roles
                                </a>
                                <Link to="/services" className="px-8 py-4 rounded-full font-bold text-lg text-white border border-slate-500 hover:bg-slate-800 transition-all text-center">
                                    View All Services
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="max-w-5xl mx-auto mb-20 space-y-16">

                {/* Iceberg Visual */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">The 80/20 Rule of Hiring</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Job boards are the tip of the iceberg—representing only about 20% of open roles. These public listings attract 99% of candidates, creating a frenzy of competition.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            the other 80%—the "Hidden Job Market"—lies beneath the surface. These are confidential replacements, newly created strategic roles, and pre-IPO leadership positions. We help you bypass the pile and go straight to the decision-maker.
                        </p>
                    </div>
                    <div className="glass p-8 rounded-2xl border border-slate-700 h-96 relative overflow-hidden">
                        {/* Ocean Water */}
                        <div className="absolute top-1/3 left-0 right-0 h-full bg-blue-900/40 border-t border-blue-500/30 backdrop-blur-sm z-10"></div>

                        {/* Iceberg Tip */}
                        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-40 h-32 bg-white/90 clip-path-triangle z-0 rounded-t-xl opacity-80">
                            <div className="absolute top-10 left-0 right-0 text-center">
                                <div className="font-bold text-navy-900 text-xs">Public Jobs (20%)</div>
                                <div className="text-[10px] text-slate-500">High Competition</div>
                            </div>
                        </div>

                        {/* Iceberg Base */}
                        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-80 h-64 bg-slate-300/20 backdrop-blur-md z-20 rounded-b-full border border-white/10">
                            <div className="absolute top-16 left-0 right-0 text-center">
                                <div className="font-bold text-white text-lg">Hidden Market (80%)</div>
                                <div className="text-xs text-gold-400 mt-2">Zero Competition</div>
                                <div className="mt-6 flex flex-col gap-2 max-w-[200px] mx-auto text-xs text-slate-300">
                                    <div className="bg-navy-900/50 p-1 rounded border border-slate-600">Confidential Searches</div>
                                    <div className="bg-navy-900/50 p-1 rounded border border-slate-600">Created Roles</div>
                                    <div className="bg-navy-900/50 p-1 rounded border border-slate-600">Internal Referrals</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Strategies */}
                <div className="glass p-10 rounded-2xl border border-gold-400/20">
                    <h2 className="text-3xl font-serif font-bold text-white mb-10 text-center">How We Penetrate the Market</h2>
                    {/* Add your strategies here, similar to other pages */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 bg-navy-800 rounded-xl border border-slate-700">
                            <i className="fas fa-search-dollar text-3xl text-gold-400 mb-4"></i>
                            <h3 className="font-bold text-white mb-2">Target Company Lists</h3>
                            <p className="text-slate-400 text-sm">Identifying companies with funding, growth signs, or restructuring needs before they hire.</p>
                        </div>
                        <div className="p-6 bg-navy-800 rounded-xl border border-slate-700">
                            <i className="fas fa-envelope-open text-3xl text-gold-400 mb-4"></i>
                            <h3 className="font-bold text-white mb-2">Direct Mail Campaigns</h3>
                            <p className="text-slate-400 text-sm">Bypassing HR with physical letters or direct emails to CEOs and Founders.</p>
                        </div>
                        <div className="p-6 bg-navy-800 rounded-xl border border-slate-700">
                            <i className="fas fa-bullhorn text-3xl text-gold-400 mb-4"></i>
                            <h3 className="font-bold text-white mb-2">Value-Add Pitching</h3>
                            <p className="text-slate-400 text-sm">Proposing a solution to a problem they haven't publicly announced yet.</p>
                        </div>
                    </div>
                </div>

            </section>

            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Stop Waiting for Permission.</h2>
                <p className="text-slate-400 mb-8 text-lg">
                    The public job market is a lottery. The hidden job market is a business transaction. Let's get down to business.
                </p>
                <a
                    href="https://calendly.com/thedreamjobconsultant/60min/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn text-navy-900 px-10 py-4 rounded-full font-bold text-lg inline-block shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all"
                >
                    Unlock Hidden Jobs
                </a>
            </div>
        </div>
    );
};

export default HiddenJobMarket;
