import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Helmet } from 'react-helmet-async';

const SuccessPage = () => {
    useEffect(() => {
        // Premium Confetti Explosion
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => {
            return Math.random() * (max - min) + min;
        };

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // Since particles fall down, start a bit higher than random
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#D4AF37', '#FFD700', '#FFFFFF', '#C0C0C0'] // Gold and Silver theme
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#D4AF37', '#FFD700', '#FFFFFF', '#C0C0C0']
            });
        }, 250);

        // Initial Burst
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#D4AF37', '#FFD700', '#ffffff'] // Gold and White
        });

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Helmet>
                <title>Payment Successful | The Dream Job Consultant</title>
                <meta name="description" content="Thank you for your purchase. Your journey to your dream job starts now." />
            </Helmet>

            <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900 px-4 pt-28">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-navy-900/90 pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative z-10 max-w-4xl w-full"
                >
                    <div className="glass border border-gold-400/30 p-8 md:p-12 rounded-2xl text-center shadow-2xl shadow-gold-400/10 backdrop-blur-xl">

                        {/* Success Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                            className="w-24 h-24 mx-auto mb-8 bg-gold-400/20 rounded-full flex items-center justify-center border-2 border-gold-400"
                        >
                            <i className="fas fa-check text-4xl text-gold-400"></i>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-3xl md:text-5xl font-serif font-bold text-white mb-4"
                        >
                            Payment Successful!
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-lg text-slate-300 mb-8 font-light"
                        >
                            Thank you for your trust. We are excited to embark on this journey with you.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="bg-navy-800/50 p-6 rounded-lg border border-slate-700 mb-8"
                        >
                            <h3 className="text-gold-400 font-bold mb-2 uppercase tracking-widest text-sm">Next Steps</h3>
                            <p className="text-slate-400">
                                You will receive an email shortly with all the details and next steps to get started. Please check your inbox (and spam folder) for a message from <strong>The Dream Job Consultant</strong>.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <Link
                                to="/"
                                className="inline-block px-8 py-4 bg-gold-400 text-navy-900 font-bold rounded-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg shadow-gold-400/20"
                            >
                                Return to Home
                            </Link>
                        </motion.div>

                    </div>
                </motion.div>
            </section>
        </>
    );
};

export default SuccessPage;
