import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CookiesPolicy = () => {
    const sections = [
        {
            title: "1. What Are Cookies?",
            content: (
                <>
                    <p className="mb-4">
                        Cookies are small text files that are stored on your device (computer or mobile phone) when you load our website. They help us make the website function properly, improve security, provide better user experiences, and understand how the website performs.
                    </p>
                </>
            )
        },
        {
            title: "2. How We Use Cookies",
            content: (
                <>
                    <p className="mb-4">We use different types of cookies for various purposes:</p>

                    <div className="space-y-6 mt-6">
                        <div className="bg-navy-900/50 p-6 rounded-lg border border-slate-700">
                            <h3 className="text-lg font-bold text-white mb-2">Essential Cookies</h3>
                            <p className="text-slate-300 text-sm">
                                These are necessary for the website to function (e.g., secure login, shopping cart). You cannot opt-out of these cookies as the site will not work without them.
                            </p>
                        </div>

                        <div className="bg-navy-900/50 p-6 rounded-lg border border-slate-700">
                            <h3 className="text-lg font-bold text-white mb-2">Analytics Cookies</h3>
                            <p className="text-slate-300 text-sm">
                                We use these to understand how visitors interact with our website (e.g., Google Analytics). This data is aggregated and does not directly identify you. It helps us find broken links and improve content.
                            </p>
                        </div>

                        <div className="bg-navy-900/50 p-6 rounded-lg border border-slate-700">
                            <h3 className="text-lg font-bold text-white mb-2">Marketing Cookies</h3>
                            <p className="text-slate-300 text-sm">
                                These cookies track your browsing habits to enable us to show advertising that is relevant to you. They are also used to limit the number of times you see an ad.
                            </p>
                        </div>
                    </div>
                </>
            )
        },
        {
            title: "3. Managing Cookies",
            content: (
                <>
                    <p className="mb-4">
                        You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed.
                    </p>
                    <p className="mb-4">
                        If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                    </p>
                    <p className="mt-4">
                        To learn more about how to manage cookies, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline">allaboutcookies.org</a>.
                    </p>
                </>
            )
        },
        {
            title: "4. Updates to This Policy",
            content: (
                <>
                    <p>
                        We may update our Cookie Policy from time to time to reflect changes in technology or legislation. Please check back periodically.
                    </p>
                    <p className="mt-4 text-sm text-slate-400">
                        Last Updated: January 1, 2026
                    </p>
                </>
            )
        }
    ];

    return (
        <div className="bg-navy-900 min-h-screen pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        Cookies <span className="text-gold-400">Policy</span>
                    </motion.h1>
                </div>

                {/* Content */}
                <div className="bg-navy-800 rounded-2xl p-8 md:p-12 border border-slate-700 shadow-xl">
                    <div className="prose prose-invert max-w-none">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="mb-12 last:mb-0"
                            >
                                <h2 className="text-2xl font-bold text-white mb-6 border-b border-slate-700 pb-2">
                                    {section.title}
                                </h2>
                                <div className="text-slate-300 leading-relaxed text-base">
                                    {section.content}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CookiesPolicy;
