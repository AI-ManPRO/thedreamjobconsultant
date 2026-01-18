import React from 'react';
import { Link } from 'react-router-dom';

const DigitalPresence = () => {
    return (
        <div className="bg-navy-900 min-h-screen pt-28 pb-20 px-4">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-20">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent z-10"></div>
                    <img
                        src="/images/services/digital-presence.jpg"
                        alt="Digital Presence"
                        className="w-full h-[500px] object-cover opacity-60"
                    />
                    <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16">
                        <div className="max-w-2xl">
                            <span className="text-gold-400 font-bold tracking-wider uppercase mb-4 block">Holistic Online Branding</span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                Everywhere They Look, <br />
                                <span className="text-gold-400">There You Are.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                LinkedIn is just the start. We engage the entire digital ecosystem to ensure that when a recruiter searches for top talent, your name dominates the results.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://calendly.com/thedreamjobconsultant/60min/" target="_blank" className="gold-btn text-navy-900 px-8 py-4 rounded-full font-bold text-lg text-center shadow-lg hover:shadow-gold-400/20 transition-all">
                                    Audit My Footprint
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

                {/* The Concept */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">The "Google Test"</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Before a company makes an offer, they Google you. What will they find? A ghost town? A few random social media posts? Or a cohesive, professional narrative that screams "Industry Leader"?
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            We clean up your digital exhaust and build positive assets. We optimize your presence on niche job boards, executive portals, and industry forums to create an echo chamber of your competence.
                        </p>
                    </div>
                    <div className="glass p-8 rounded-2xl border border-slate-700 flex flex-col items-center justify-center">
                        <div className="relative w-full max-w-sm bg-white rounded-lg shadow-xl p-4">
                            <div className="flex items-center gap-2 mb-4 border-b pb-2">
                                <i className="fab fa-google text-lg"></i>
                                <div className="bg-gray-100 h-8 w-full rounded-full flex items-center px-4 text-sm text-gray-500">Your Name Executive Leadership</div>
                            </div>
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <div className="h-4 bg-blue-100 w-3/4 rounded"></div>
                                    <div className="h-3 bg-gray-100 w-full rounded"></div>
                                    <div className="h-3 bg-gray-100 w-5/6 rounded"></div>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-4 bg-blue-100 w-2/3 rounded"></div>
                                    <div className="h-3 bg-gray-100 w-full rounded"></div>
                                </div>
                                <div className="space-y-1">
                                    <div className="h-4 bg-blue-100 w-3/4 rounded"></div>
                                    <div className="h-3 bg-gray-100 w-full rounded"></div>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-green-500/10 flex items-center justify-center rounded-lg backdrop-blur-[1px]">
                                <div className="bg-green-500 text-white px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                                    <i className="fas fa-check-circle"></i> Optimized
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Platform Matrix */}
                <div className="glass p-10 rounded-2xl border border-gold-400/20 text-center">
                    <h2 className="text-3xl font-serif font-bold text-white mb-10 text-center">The Ecosystem We Activate</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Indeed', 'Glassdoor', 'ZipRecruiter', 'Monster', 'Dice', 'Ladders', 'ExecThread', 'The Muse', 'AngelList'].map((platform, idx) => (
                            <div key={idx} className="bg-navy-800 px-6 py-3 rounded-full border border-slate-700 text-slate-300 font-medium hover:border-gold-400 hover:text-white transition cursor-default">
                                {platform}
                            </div>
                        ))}
                        <div className="bg-navy-800 px-6 py-3 rounded-full border border-gold-400 text-gold-400 font-bold">
                            + Industry Specific Boards
                        </div>
                    </div>
                </div>

            </section>

            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Be Everywhere at Once</h2>
                <p className="text-slate-400 mb-8 text-lg">
                    Cast a wide net, catch bigger fish. Let's amplify your signal.
                </p>
                <a
                    href="https://calendly.com/thedreamjobconsultant/60min/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn text-navy-900 px-10 py-4 rounded-full font-bold text-lg inline-block shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all"
                >
                    Build Digital Strategy
                </a>
            </div>
        </div>
    );
};

export default DigitalPresence;
