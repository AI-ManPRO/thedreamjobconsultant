import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AffiliateProgramPage = () => {
    return (
        <div className="pt-24 min-h-screen bg-navy-900 text-slate-300 selection:bg-gold-400 selection:text-navy-900 pb-20">
            {/* HERO SECTION */}
            <section className="relative py-24 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
                    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gold-400 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8">
                            Partner with the <span className="text-gold-400">Industry Leader</span> in <br className="hidden md:block" /> Executive Reverse Recruiting
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-10">
                            Join <span className="text-white font-semibold">The Dream Job Consultant's</span> exclusive Affiliate Program. Monetize your audience by recommending the premier career acceleration service for senior executives and high-level professionals.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:thedreamjobconsultant@gmail.com?subject=Affiliate%20Program%20Application"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-navy-900 bg-gold-400 rounded-xl hover:bg-gold-300 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)] transform hover:-translate-y-1"
                            >
                                Apply Now <i className="fas fa-arrow-right ml-2"></i>
                            </a>
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white border border-slate-600 rounded-xl hover:bg-white/5 hover:border-white transition-all"
                            >
                                Contact Partner Team
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STATISTICS / TRUST BAR */}
            <section className="border-y border-slate-800 bg-navy-800/30">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="text-5xl font-bold text-white mb-2">5%</div>
                            <div className="text-slate-400 text-lg">Commission on Total Sale</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="text-5xl font-bold text-white mb-2">$3.5k+</div>
                            <div className="text-slate-400 text-lg">Average Order Value</div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="text-5xl font-bold text-white mb-2">High</div>
                            <div className="text-slate-400 text-lg">Conversion Rate</div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* WHY PARTNER WITH US */}
            <section className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Partner With Us?</h2>
                        <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                            We don't just sell a service; we sell life-changing career transformations. Our high-ticket, high-value services mean substantive commissions for you and immense value for your audience.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "fa-hand-holding-dollar",
                                title: "Lucrative Commissions",
                                desc: "Earn a generous 5% commission on every successful referral. With our premium pricing packages, a single conversion can earn you significant revenue."
                            },
                            {
                                icon: "fa-award",
                                title: "Premium Brand Authority",
                                desc: "Align your brand with the industry leader in Reverse Recruiting. We execute 85% of the job search for our clients, creating a unique value proposition that is easy to promote."
                            },
                            {
                                icon: "fa-users",
                                title: "High-Intent Audience",
                                desc: "Our services are designed for executives, directors, and senior professionals who are ready to invest in their careers. This demographic converts at a higher value."
                            },
                            {
                                icon: "fa-check-circle",
                                title: "Proven Track Record",
                                desc: "We have helped countless professionals land roles at top-tier companies. Our verified success stories and testimonials provide the social proof you need to drive sales."
                            },
                            {
                                icon: "fa-bullhorn",
                                title: "Marketing Support",
                                desc: "Gain access to high-converting marketing assets, banners, and email swipes designed to maximize your click-through and conversion rates."
                            },
                            {
                                icon: "fa-clock",
                                title: "Reliable Payouts",
                                desc: "We value our partners. Commissions are paid out promptly after the service is fully delivered and verified, ensuring a transparent and trustworthy partnership."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-navy-800/50 border border-slate-700 p-8 rounded-2xl hover:border-gold-400/50 transition-colors group"
                            >
                                <div className="w-14 h-14 bg-navy-900 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-700">
                                    <i className={`fas ${item.icon} text-2xl text-gold-400`}></i>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold-400 transition-colors">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section className="py-24 bg-navy-800/30 border-y border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">How It Works</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            Starting your partnership journey is simple, transparent, and rewarding.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-gold-400/50 to-transparent z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                            {[
                                {
                                    step: "01",
                                    title: "Join the Program",
                                    desc: "Submit your application to become an affiliate partner. We review all applicants to ensure a strong brand alignment."
                                },
                                {
                                    step: "02",
                                    title: "Promote & Refer",
                                    desc: "Share your unique referral link or use our marketing assets to refer your audience to our high-converting landing pages."
                                },
                                {
                                    step: "03",
                                    title: "Earn Commissions",
                                    desc: "Earn 5% on every qualified sale. Commissions are processed and paid out directly to you after the service is successfully delivered."
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="text-center bg-navy-900/80 backdrop-blur p-8 rounded-2xl border border-slate-800"
                                >
                                    <div className="w-24 h-24 bg-navy-800 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-navy-900 shadow-[0_0_0_4px_#fbbf24] relative">
                                        <span className="text-3xl font-bold text-gold-400">{item.step}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-slate-400 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO IS THIS FOR */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Who Should Join?</h2>
                            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                                Our affiliate program is tailored for individuals and businesses that command an audience of professionals, executives, and career-driven individuals.
                            </p>

                            <ul className="space-y-6">
                                {[
                                    "Career Coaches & Resume Writers",
                                    "HR Professionals & Recruiters",
                                    "LinkedIn Influencers & Thought Leaders",
                                    "Business & Leadership Bloggers",
                                    "Executive Networking Groups"
                                ].map((item, idx) => (
                                    <motion.li
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center text-xl text-slate-300"
                                    >
                                        <i className="fas fa-check-circle text-gold-400 mr-4 text-2xl"></i>
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-4 bg-gold-400/20 rounded-2xl blur-xl"></div>
                            <div className="relative bg-navy-800 border border-slate-700 rounded-2xl p-8 md:p-12">
                                <h3 className="text-2xl font-bold text-white mb-6">Partner Requirements</h3>
                                <ul className="space-y-4 text-slate-400">
                                    <li className="flex items-start">
                                        <i className="fas fa-circle text-[8px] text-gold-400 mt-2.5 mr-3"></i>
                                        Access to a relevant audience of professionals or executives.
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-circle text-[8px] text-gold-400 mt-2.5 mr-3"></i>
                                        Commitment to ethical marketing practices.
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-circle text-[8px] text-gold-400 mt-2.5 mr-3"></i>
                                        Active website, social media presence, or community.
                                    </li>
                                </ul>
                                <div className="mt-8 pt-8 border-t border-slate-700">
                                    <p className="text-white italic">
                                        "Partnering with The Dream Job Consultant allows me to offer my clients a trusted solution for the heavy lifting of job searching, while generating a substantial new revenue stream."
                                    </p>
                                    <div className="mt-4 flex items-center">
                                        <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center font-bold text-white">S</div>
                                        <div className="ml-4">
                                            <div className="text-white font-semibold">Sarah M.</div>
                                            <div className="text-sm text-gold-400">Executive Career Coach</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-gradient-to-r from-gold-600 to-gold-400 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 mb-6">Ready to Start Earning?</h2>
                    <p className="text-xl text-navy-900/80 mb-10 font-medium">
                        Join the top-tier affiliate program for reverse recruiting. Apply today and start referring your network to the services they essentially need.
                    </p>
                    <a
                        href="mailto:thedreamjobconsultant@gmail.com?subject=Affiliate%20Program%20Application"
                        className="inline-block px-10 py-5 bg-navy-900 text-white font-bold text-xl rounded-xl hover:bg-navy-800 transition-colors shadow-2xl hover:scale-105 transform duration-300"
                    >
                        Apply via Email Now
                    </a>
                    <p className="mt-4 text-navy-900/70 text-sm font-medium">
                        Current Contact Email: thedreamjobconsultant@gmail.com
                    </p>
                </div>
            </section>
        </div>
    );
};

export default AffiliateProgramPage;
