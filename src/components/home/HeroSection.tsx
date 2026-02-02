import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy-900 pt-20 pb-24">
            {/* Background with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
                style={{
                    backgroundImage: "url('/images/home/hero-background.jpg')" // High-rise building/corporate feel
                }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-navy-900/80 via-navy-900/50 to-navy-900"></div>

            {/* Animated Blobs */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl filter animate-float"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-gold-400/10 blur-3xl filter animate-spin-slow"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <motion.div
                    className="mt-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-800/80 backdrop-blur-sm border border-slate-700 mb-18 hover:border-gold-500/50 transition-colors cursor-default">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">Accepting 3 Executive Clients for Feb</span>
                    </div>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-6xl lg:text-7xl pt-8 font-serif font-extrabold text-white leading-tight mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Stop Searching and Applying. <br />
                    <span className="gold-gradient-text">Start Interviewing.</span>
                </motion.h1>

                <motion.p
                    className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-slate-300 leading-relaxed font-light"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Stop applying to black holes. We are the <strong>premier executive reverse recruiting firm</strong> that navigates the <span className="text-gold-400 font-medium">Hidden Job Market</span> for you. We search, apply, network, and pitch on your behalf.
                </motion.p>

                <motion.div
                    className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link
                        to="/booking"
                        className="gold-btn px-10 py-5 rounded-lg text-navy-900 font-bold text-lg shadow-lg hover:shadow-gold-400/20 w-full sm:w-auto min-w-[200px]"
                    >
                        Start Your Transformation
                    </Link>
                    <Link
                        to="/process"
                        className="group px-10 py-5 rounded-lg glass text-white font-medium hover:bg-white/10 transition w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2"
                    >
                        Why We Are Different
                        <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform text-gold-400"></i>
                    </Link>
                </motion.div>

                {/* Featured In / Authority Markers */}


            </div>
        </section>
    );
};

export default HeroSection;
