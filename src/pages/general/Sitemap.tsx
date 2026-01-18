import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Sitemap = () => {
    const sections = [
        {
            title: "Main Pages",
            links: [
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Process", path: "/process" },
                { name: "Case Studies", path: "/case-studies" },
                { name: "Pricing", path: "/pricing" },
                { name: "Pricing (Retainer)", path: "/pricing-retainer" },
                { name: "FAQ", path: "/faq" },
                { name: "Contact", path: "/contact" },
                { name: "Booking", path: "/booking" },
            ]
        },
        {
            title: "Services",
            links: [
                { name: "Career Coaching", path: "/services/career-coaching" },
                { name: "Resume Writing", path: "/services/resume-writing" },
                { name: "Cover Letter Writing", path: "/services/cover-letter" },
                { name: "LinkedIn Profile Optimization", path: "/services/linkedin-profile" },
                { name: "Professional Networking", path: "/services/networking" },
                { name: "Interview Preparation", path: "/services/interview-prep" },
                { name: "Salary Negotiation", path: "/services/salary-negotiation" },
                { name: "Hidden Job Market", path: "/services/hidden-job-market" },
                { name: "Market Research", path: "/services/market-research" },
                { name: "Application Management", path: "/services/application-management" },
                { name: "Digital Presence", path: "/services/digital-presence" },
                { name: "Outplacement Services", path: "/outplacement" },
            ]
        },
        {
            title: "Legal",
            links: [
                { name: "Terms & Conditions", path: "/terms-and-conditions" },
                { name: "Privacy Policy", path: "/privacy-policy" },
                { name: "Refund Policy", path: "/refund-policy" },
                { name: "Cookies Policy", path: "/cookies-policy" },
            ]
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold text-navy-900 mb-4">Sitemap</h1>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Overview of all pages on The Dream Job Consultant website.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg p-8 border border-slate-100 hover:shadow-xl transition-shadow duration-300"
                            >
                                <h2 className="text-2xl font-bold text-navy-900 mb-6 pb-2 border-b border-slate-100">
                                    {section.title}
                                </h2>
                                <ul className="space-y-3">
                                    {section.links.map((link, linkIndex) => (
                                        <li key={linkIndex}>
                                            <Link
                                                to={link.path}
                                                className="text-slate-600 hover:text-gold-500 hover:translate-x-1 transition-all duration-200 block flex items-center gap-2"
                                            >
                                                <span className="w-1.5 h-1.5 bg-gold-400 rounded-full"></span>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Sitemap;
