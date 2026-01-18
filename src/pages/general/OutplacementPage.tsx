import React from 'react';

const Outplacement = () => {
    const benefits = [
        {
            title: "Protect Your Employer Brand",
            icon: "fa-shield-alt",
            desc: "Demonstrate compassion and professionalism during difficult transitions. Fostering a positive image helps attract top talent in the future and maintains goodwill."
        },
        {
            title: "Mitigate Legal Risks",
            icon: "fa-balance-scale",
            desc: "Supportive transitions reduce frustration and negative sentiment, significantly lowering the likelihood of wrongful termination disputes or workplace retaliation."
        },
        {
            title: "Boost Morale & Retention",
            icon: "fa-users",
            desc: "When remaining employees see their colleagues treated with respect, it builds trust and loyalty, maintaining productivity and engagement during times of change."
        },
        {
            title: "Reduce Unemployment Costs",
            icon: "fa-chart-line",
            desc: "By helping laid-off employees secure new roles faster, you can significantly decrease the duration of unemployment claims and associated costs."
        }
    ];

    const services = [
        {
            title: "Personalized Career Coaching",
            icon: "fa-user-tie",
            desc: "One-on-one guidance to help individuals assess their skills, define career goals, and navigate the job market with confidence."
        },
        {
            title: "Resume & LinkedIn Optimization",
            icon: "fa-file-alt",
            desc: "Crafting compelling, ATS-friendly resumes and optimizing LinkedIn profiles to stand out to recruiters and hiring managers."
        },
        {
            title: "Job Search Strategy",
            icon: "fa-search-location",
            desc: "Strategic planning of job searching, applying, and networking to access the hidden job market, target the right companies, and maximize the efficiency of the job search."
        },
        {
            title: "Interview Preparation",
            icon: "fa-comments",
            desc: "Mock interviews and feedback sessions to refine communication skills and help candidates articulate their value proposition effectively."
        }
    ];

    return (
        <section className="bg-navy-900 min-h-screen pt-32 pb-20 px-4">
            {/* Hero Header */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                    Strategic <span className="text-gold-400">Outplacement</span> Services
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                    The Dream Job Consultant partners with forward-thinking employers to provide compassionate, effective career transition support.
                    Protect your brand and empower your departing employees to succeed.
                </p>
            </div>

            {/* Why Choose Us / Benefits Section */}
            <div className="max-w-7xl mx-auto mb-24">
                <h2 className="text-3xl font-serif font-bold text-white mb-10 text-center">
                    Why Invest in Outplacement?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="glass p-6 rounded-xl border border-transparent hover:border-gold-400/30 transition duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 bg-navy-800 rounded-full flex items-center justify-center text-gold-400 text-2xl mb-6 shadow-lg mx-auto">
                                <i className={`fas ${benefit.icon}`}></i>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 text-center">{benefit.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed text-center">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Services Section */}
            <div className="max-w-7xl mx-auto mb-20">
                <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-slate-800 pb-4 mb-10">
                    <h2 className="text-3xl font-serif font-bold text-white">
                        Our Comprehensive Support
                    </h2>
                    <p className="text-slate-500 md:max-w-md text-right mt-4 md:mt-0">
                        Tailored solutions to ensure a smooth transition for your workforce.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="flex gap-6 p-6 rounded-xl bg-navy-800/50 hover:bg-navy-800 transition border border-slate-800 hover:border-gold-400/20">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-gold-400/10 rounded-lg flex items-center justify-center text-gold-400 text-xl">
                                    <i className={`fas ${service.icon}`}></i>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Rich details for Employers */}
            <div className="max-w-7xl mx-auto mb-24 glass p-8 md:p-12 rounded-2xl border-l-4 border-gold-400">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif font-bold text-white mb-6">
                            A Partner You Can Trust
                        </h2>
                        <div className="space-y-4 text-slate-300">
                            <p>
                                Layoffs are never easy, but how you handle them defines your organization's character.
                                We understand the complexities of workforce reduction and provide a partnership that goes beyond simple placement.
                            </p>
                            <p>
                                Our approach is high-touch and personalized. Unlike generic automated platforms, we provide human-centric coaching that addresses the emotional and practical needs of your employees.
                            </p>
                            <p>
                                Whether you are restructuring a single department or downsizing a larger division, our scalable solutions ensure that every departing employee feels valued and supported as they move to their next chapter.
                            </p>
                        </div>
                    </div>
                    <div className="bg-navy-950 p-8 rounded-xl border border-slate-800 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-bl-full -mr-8 -mt-8"></div>
                        <h3 className="text-xl font-bold text-gold-400 mb-4">Start the Conversation</h3>
                        <p className="text-slate-400 mb-6 text-sm">
                            Contact us today to discuss your specific needs. We can customize a package that aligns with your budget and organizational goals.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center text-slate-300">
                                <i className="fas fa-envelope w-8 text-gold-400"></i>
                                <span>ayman@thedreamjobconsultant.com</span>
                            </div>
                            <div className="flex items-center text-slate-300">
                                <i className="fab fa-whatsapp w-8 text-gold-400"></i>
                                <span>+20 102 364 2127</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-white mb-6">Promote Your Corporate Responsibility</h2>
                <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                    Ensure your employees land soft. Let's work together to turn a challenging transition into a new beginning.
                </p>
                <a
                    href="https://calendly.com/thedreamjobconsultant/60min/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gold-btn text-navy-900 px-10 py-4 rounded-full font-bold text-lg inline-flex items-center gap-2 shadow-lg hover:shadow-gold-400/20 hover:scale-105 transition-transform"
                >
                    <span>Schedule Corporate Consultation</span>
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </section>
    );
};

export default Outplacement;
