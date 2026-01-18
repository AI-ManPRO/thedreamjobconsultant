import React from 'react';
import { Link } from 'react-router-dom';

const LinkedInProfile = () => {
    return (
        <div className="bg-navy-900 min-h-screen pt-28 pb-20 px-4">
            {/* Hero Section */}
            <section className="max-w-7xl mx-auto mb-20">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-transparent z-10"></div>
                    <img
                        src="/images/services/linkedin-profile.jpg"
                        alt="LinkedIn Profile Optimization"
                        className="w-full h-[500px] object-cover opacity-60"
                    />
                    <div className="absolute inset-0 z-20 flex items-center px-8 md:px-16">
                        <div className="max-w-2xl">
                            <span className="text-gold-400 font-bold tracking-wider uppercase mb-4 block">Digital Brand Authority</span>
                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
                                Be Found. Be Seen. <br />
                                <span className="text-gold-400">Be Sought After.</span>
                            </h1>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Your LinkedIn profile is your 24/7 digital lobbyist. We turn it into a magnet for executive recruiters and industry leaders.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="https://calendly.com/thedreamjobconsultant/60min/" target="_blank" className="gold-btn text-navy-900 px-8 py-4 rounded-full font-bold text-lg text-center shadow-lg hover:shadow-gold-400/20 transition-all">
                                    Optimize My Profile
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

                {/* The Why - SEO Graph */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-navy-800 p-8 rounded-2xl border border-slate-700 relative overflow-hidden">
                        {/* Decorative chart background */}
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gold-400/10 to-transparent"></div>
                        <div className="flex items-end justify-between h-48 gap-4 relative z-10 px-4">
                            <div className="w-full bg-slate-700 rounded-t-lg h-[20%] relative group">
                                <span className="absolute -top-8 w-full text-center text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition">Before</span>
                            </div>
                            <div className="w-full bg-slate-600 rounded-t-lg h-[35%] relative group">
                                <span className="absolute -top-8 w-full text-center text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition">Basic</span>
                            </div>
                            <div className="w-full bg-gold-400/50 rounded-t-lg h-[60%] relative group">
                                <span className="absolute -top-8 w-full text-center text-xs text-gold-400 opacity-0 group-hover:opacity-100 transition">Pro</span>
                            </div>
                            <div className="w-full bg-gold-400 rounded-t-lg h-[90%] shadow-[0_0_20px_rgba(250,189,0,0.4)] relative group animate-pulse">
                                <span className="absolute -top-8 w-full text-center text-xs text-gold-400 font-bold">Dream Job</span>
                            </div>
                        </div>
                        <div className="text-center mt-4 font-bold text-white">Profile Views & Recruiter Outreach</div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">The Hidden Search Engine</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            LinkedIn isn't social media; it's a search engine. Recruiters use expensive licenses (LinkedIn Recruiter) to filter millions of candidates by keywords, skills, titles, and activity.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            If your profile isn't optimized for these algorithms, <strong>you are invisible</strong>. We reverse-engineer the recruiter's search experience to ensure you appear on Page 1, not Page 10.
                        </p>
                    </div>
                </div>

                {/* Feature List */}
                <div className="glass p-10 rounded-2xl border border-slate-700">
                    <h2 className="text-3xl font-serif font-bold text-white mb-10 text-center">Comprehensive Optimization</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: "fas fa-id-card", title: "Headline", desc: "Not just your job title. A compelling value statement that follows you everywhere." },
                            { icon: "fas fa-paragraph", title: "About Section", desc: "A first-person narrative that builds connection and authority instantly." },
                            { icon: "fas fa-briefcase", title: "Experience", desc: "Keyword-rich descriptions that validate your resume claims." },
                            { icon: "fas fa-camera", title: "Visual Assets", desc: "Guidance on banner consistency, headshot selection, and featured media." },
                            { icon: "fas fa-cogs", title: "Skills Matrix", desc: "Strategic endorsement management to trigger algorithm relevance." },
                            { icon: "fas fa-link", title: "Custom URL", desc: "Professionalizing your digital link for business cards and signatures." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-navy-900/50 p-6 rounded-xl border border-slate-800 hover:border-gold-400/30 transition duration-300 group">
                                <div className="w-12 h-12 rounded-full bg-navy-800 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                                    <i className={`${item.icon} text-gold-400 text-xl`}></i>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-400">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social Proof/Results */}
                <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-8 items-center text-navy-900">
                    <div className="flex-shrink-0">
                        <i className="fab fa-linkedin text-8xl text-[#0077b5]"></i>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">The "All-Star" Difference</h3>
                        <p className="text-slate-600 mb-6 leading-relaxed">
                            Users with complete, optimized profiles receive <strong className="text-[#0077b5]">40x more opportunities</strong> than those without. It is the highest ROI activity you can do for your passive job search.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <span className="bg-blue-50 text-[#0077b5] px-4 py-2 rounded-full font-bold text-sm">Top 1% Industry SSI</span>
                            <span className="bg-blue-50 text-[#0077b5] px-4 py-2 rounded-full font-bold text-sm">500+ Connections</span>
                            <span className="bg-blue-50 text-[#0077b5] px-4 py-2 rounded-full font-bold text-sm">Open to Work (Hidden)</span>
                        </div>
                    </div>
                </div>

            </section>

            {/* CTA */}
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Build Your Digital Fortress</h2>
                <p className="text-slate-400 mb-8 text-lg">
                    Take control of your first impression. Let's build a profile that works for you while you sleep.
                </p>
                <a
                    href="https://calendly.com/thedreamjobconsultant/60min/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn text-navy-900 px-10 py-4 rounded-full font-bold text-lg inline-block shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-all"
                >
                    Audit My Profile
                </a>
            </div>
        </div>
    );
};

export default LinkedInProfile;
