import React from 'react';
import { Link } from 'react-router-dom';

const ProfessionalNetwork = () => {
    return (
        <div className="bg-navy-900 min-h-screen pt-28 pb-20 px-4">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-20">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent z-10"></div>
                    <img
                        src="/images/services/professional-network.jpg"
                        alt="Professional Networking"
                        className="w-full h-[500px] object-cover opacity-60"
                    />
                    <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16">
                        <div className="max-w-2xl">
                            <span className="text-gold-400 font-bold tracking-wider uppercase mb-4 block">Strategic Relationship Building</span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                Your Net Worth is <br />
                                <span className="text-gold-400">Your Network.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Connect with the leaders who control the opportunities. We help you build, nurture, and leverage a world-class professional ecosystem.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://calendly.com/thedreamjobconsultant/60min/" target="_blank" className="gold-btn text-navy-900 px-8 py-4 rounded-full font-bold text-lg text-center shadow-lg hover:shadow-gold-400/20 transition-all">
                                    Expand Your Reach
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

                {/* Network Theory - Visual Block */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="glass p-8 rounded-2xl border border-gold-400/20 text-center relative overflow-hidden">
                        {/* Abstract Connection Visual */}
                        <div className="absolute inset-0 opacity-10">
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <circle cx="20" cy="20" r="1.5" fill="#fbd38d" />
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                                <path d="M50,50 L200,150 L350,50" stroke="#fbd38d" strokeWidth="1" fill="none" />
                                <path d="M100,300 L200,150 L300,300" stroke="#fbd38d" strokeWidth="1" fill="none" />
                            </svg>
                        </div>

                        <div className="relative z-10">
                            <div className="w-24 h-24 mx-auto bg-navy-800 rounded-full border-4 border-gold-400 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(250,189,0,0.3)]">
                                <i className="fas fa-users text-4xl text-white"></i>
                            </div>
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-left">
                                    <div className="text-3xl font-bold text-white">1st</div>
                                    <div className="text-xs text-slate-400">Degree</div>
                                </div>
                                <div className="h-0.5 w-12 bg-slate-600"></div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-gold-400">2nd</div>
                                    <div className="text-xs text-slate-400">Degree</div>
                                </div>
                                <div className="h-0.5 w-12 bg-slate-600"></div>
                                <div className="text-right">
                                    <div className="text-3xl font-bold text-white">3rd</div>
                                    <div className="text-xs text-slate-400">Degree</div>
                                </div>
                            </div>
                            <p className="text-sm text-slate-300 italic">"The Strength of Weak Ties" — Mark Granovetter</p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">The Power of "Who You Know"</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            It's a cliché because it's true: <strong>85% of jobs are filled via networking</strong>. But sending random connection requests isn't networking; it's spamming.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            We teach you how to activate the "Strength of Weak Ties." Your close friends know what you know. But your <em>acquaintances</em> (weak ties) are your bridges to new worlds, new industries, and hidden opportunities.
                        </p>
                    </div>
                </div>

                {/* Funnel Visual */}
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif font-bold text-white mb-10 text-center">The Networking Funnel</h2>
                    <div className="flex flex-col gap-4">
                        {/* Stage 1 */}
                        <div className="bg-navy-800 p-6 rounded-xl border border-slate-700 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group hover:border-gold-400/50 transition">
                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-slate-600 group-hover:bg-gold-400 transition-colors"></div>
                            <div className="w-16 h-16 rounded-full bg-navy-900 border border-slate-600 flex items-center justify-center text-2xl font-bold text-slate-400 group-hover:text-white shrink-0">
                                <i className="fas fa-search-location"></i>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-xl font-bold text-white mb-2">Identification</h3>
                                <p className="text-slate-400 text-sm">Mapping the 50 key decision-makers in your target market. Not HR—the people with the P&L responsibility.</p>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="mx-auto text-slate-600"><i className="fas fa-chevron-down"></i></div>

                        {/* Stage 2 */}
                        <div className="bg-navy-800 p-6 rounded-xl border border-slate-700 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group hover:border-gold-400/50 transition">
                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-slate-500 group-hover:bg-gold-400 transition-colors"></div>
                            <div className="w-16 h-16 rounded-full bg-navy-900 border border-slate-600 flex items-center justify-center text-2xl font-bold text-slate-400 group-hover:text-white shrink-0">
                                <i className="fas fa-paper-plane"></i>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-xl font-bold text-white mb-2">Outreach & Engagement</h3>
                                <p className="text-slate-400 text-sm">Crafting high-value messages that get read. No asking for favors; offering insights.</p>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="mx-auto text-slate-600"><i className="fas fa-chevron-down"></i></div>

                        {/* Stage 3 */}
                        <div className="bg-navy-800 p-6 rounded-xl border border-slate-700 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden group hover:border-gold-400/50 transition">
                            <div className="absolute left-0 top-0 bottom-0 w-2 bg-gold-400"></div>
                            <div className="w-16 h-16 rounded-full bg-navy-900 border border-slate-600 flex items-center justify-center text-2xl font-bold text-gold-400 shrink-0 shadow-lg shadow-gold-400/20">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-xl font-bold text-white mb-2">Relationship & Referral</h3>
                                <p className="text-slate-400 text-sm">Converting "contacts" into "advocates" who will walk your resume into the boardroom.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Stop Applying. Start Connecting.</h2>
                <p className="text-slate-400 mb-8 text-lg">
                    The best jobs aren't posted—they're created for people known and trusted. Let's make you one of them.
                </p>
                <a
                    href="https://calendly.com/thedreamjobconsultant/60min/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn text-navy-900 px-10 py-4 rounded-full font-bold text-lg inline-block shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all"
                >
                    Start Networking Strategy
                </a>
            </div>
        </div>
    );
};

export default ProfessionalNetwork;
