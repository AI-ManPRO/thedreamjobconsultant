import React from 'react';
import { Link } from 'react-router-dom';

const ServicesPreview = () => {
    const sections = [
        {
            title: "Our Executive Services",
            description: "Comprehensive reverse recruiting, resume writing, and coaching packages tailored for the C-Suite.",
            link: "/services",
            linkText: "Explore Capabilities",
            image: "/images/services/career-coaching.jpg",
            colSpan: "md:col-span-2"
        },
        {
            title: "How It Works",
            description: "Our 4-step methodology to take you from application to offer letter.",
            link: "/process",
            linkText: "See the Process",
            image: "/images/home/preview-2.jpg",
            colSpan: "md:col-span-1"
        },
        {
            title: "Client Success Stories",
            description: "Real feedback from executives who landed their dream roles.",
            link: "/case-studies",
            linkText: "Read Reviews",
            image: "/images/home/preview-3.jpg",
            colSpan: "md:col-span-1"
        },
        {
            title: "Investment & Pricing",
            description: "Transparent engagement models designed for high ROI.",
            link: "/pricing",
            linkText: "View Plans",
            image: "/images/services/salary-negotiation.jpg",
            colSpan: "md:col-span-2"
        }
    ];

    return (
        <section className="py-24 bg-navy-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white text-center mb-16">
                    Everything You Need to <span className="gold-gradient-text">Get The Job Offer</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {sections.map((section, index) => (
                        <Link
                            key={index}
                            to={section.link}
                            className={`group relative overflow-hidden rounded-2xl h-80 ${section.colSpan}`}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${section.image}')` }}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/60 to-transparent opacity-90 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-400 transition-colors">{section.title}</h3>
                                <p className="text-slate-300 mb-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">{section.description}</p>

                                <span className="inline-flex items-center text-sm font-bold text-gold-400 uppercase tracking-wider">
                                    {section.linkText} <i className="fas fa-arrow-right ml-2 group-hover:translate-x-2 transition-transform"></i>
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesPreview;
