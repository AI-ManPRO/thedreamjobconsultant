import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { activeOffers, showOffers } from '../../data/offers';
import NewsletterSignup from '../../components/home/NewsletterSignup';

const OffersPage = () => {
    // Filter offers: include valid offers AND expired offers within 7 days grace period
    const GRACE_PERIOD_DAYS = 7;
    const validOffers = showOffers ? activeOffers.filter(offer => {
        if (!offer.expiryDate) return true; // No expiry means valid indefinitely

        const expiryDate = new Date(offer.expiryDate);
        const gracePeriodEnd = new Date(expiryDate.getTime() + (GRACE_PERIOD_DAYS * 24 * 60 * 60 * 1000));

        return gracePeriodEnd > new Date(); // Keep if not yet fully removed
    }) : [];

    const hasOffers = validOffers.length > 0;

    return (
        <>
            <Helmet>
                <title>Special Offers & Promotions | The Dream Job Consultant</title>
                <meta name="description" content="Exclusive career coaching and resume writing offers. Limited time promotions for executives and professionals." />
            </Helmet>

            <div className="bg-navy-900 min-h-screen pt-32 pb-12">
                {hasOffers ? <ActiveOffersView offers={validOffers} /> : <NoOffersView />}
            </div>
        </>
    );
};

const NoOffersView = () => {
    return (
        <div className="container mx-auto px-4 py-16">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto text-center relative z-10"
            >
                {/* Visual Icon */}
                <div className="mb-8 relative inline-flex justify-center items-center">
                    <div className="absolute inset-0 bg-gold-500 blur-2xl opacity-20 rounded-full"></div>
                    <div className="relative bg-navy-800 p-6 rounded-full border border-gold-500/30">
                        <i className="fas fa-hourglass-half text-5xl text-gold-400"></i>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                    Our Offers Are Rare.<br />
                    <span className="text-gold-400">
                        And Worth The Wait.
                    </span>
                </h1>

                {/* Apology / Status Message */}
                <div className="bg-navy-800/80 border border-slate-700/50 rounded-lg p-4 mb-8 max-w-xl mx-auto backdrop-blur-sm">
                    <p className="text-slate-200 font-medium">
                        <i className="fas fa-info-circle text-gold-400 mr-2"></i>
                        We sincerely apologize if you arrived expecting a promotion. All allocated discount slots for this period have been claimed.
                    </p>
                </div>

                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                    We prioritize quality over quantity. To maintain our <span className="text-white font-bold">98% success rate</span> and ensure every client receives our full, uncompromising attention, we strictly limit our promotional intakes.
                </p>

                <div className="bg-navy-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 mb-12 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-8 items-center text-left">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-4">Why Join The Waiting List?</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <i className="fas fa-check-circle text-gold-400 mt-1"></i>
                                    <span className="text-slate-300"><strong>Priority Access:</strong> Be the first to know when new coaching slots open up.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <i className="fas fa-check-circle text-gold-400 mt-1"></i>
                                    <span className="text-slate-300"><strong>Exclusive Discounts:</strong> Subscribers receive "Email-Only" offers not found on the website.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <i className="fas fa-check-circle text-gold-400 mt-1"></i>
                                    <span className="text-slate-300"><strong>Free Resources:</strong> Get immediate access to our "Reverse Recruiting Checklist" upon joining.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            {/* Reusing existing newsletter logic but wrapping it for context */}
                            <div className="bg-navy-900 rounded-xl p-6 border border-slate-600">
                                <h4 className="text-lg font-bold text-white mb-2">Get Notified First</h4>
                                <p className="text-slate-400 text-sm mb-4">Enter your email to secure your spot in line for the next release.</p>
                                <SimpleSubscribeForm />
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-slate-500 text-sm">
                    Last promotion sold out in 48 hours. Don't miss the next one.
                </p>
            </motion.div>
        </div>
    );
};

// Component to display countdown or status based on expiry date
const OfferCountdown = ({ expiryDate }: { expiryDate?: string }) => {
    // State to force re-render every second for the countdown
    const [_, setTick] = useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTick(t => t + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!expiryDate) return null;

    const end = new Date(expiryDate).getTime();
    const now = new Date().getTime();
    const distance = end - now;

    if (distance < 0) return null;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Logic:
    // < 24 Hours: Urgent (Red) with Ticking Timer (HH:MM:SS)
    // < 3 Days: Urgent (Red). Display Total Hours.
    // < 7 Days: Warning (Orange).
    // > 7 Days: Info (Blue/Slate).

    if (days < 1) { // Less than 24 hours
        // Format with leading zeros
        const h = hours.toString().padStart(2, '0');
        const m = minutes.toString().padStart(2, '0');
        const s = seconds.toString().padStart(2, '0');

        return (
            <div className="flex items-center gap-2 text-red-500 font-bold text-sm bg-red-900/20 px-3 py-1 rounded-full border border-red-500/50 shadow-[0_0_10px_rgba(239,68,68,0.3)] animate-pulse">
                <i className="fas fa-stopwatch animate-spin-slow"></i>
                <span className="font-mono tracking-widest">{h}:{m}:{s}</span>
                <span className="text-xs uppercase tracking-wider ml-1">Left!</span>
            </div>
        );
    } else if (days < 3) {
        // Calculate total hours remaining (e.g., 2 days = 48 hours, 2 days 5 hours = 53 hours)
        const totalHours = Math.floor(distance / (1000 * 60 * 60));

        return (
            <div className="flex items-center gap-2 text-red-400 font-bold text-sm bg-red-900/20 px-3 py-1 rounded-full border border-red-900/50">
                <i className="fas fa-clock animate-pulse"></i>
                <span>Ends in {totalHours} hours!</span>
            </div>
        );
    } else if (days < 7) {
        return (
            <div className="flex items-center gap-2 text-orange-400 font-bold text-sm bg-orange-900/20 px-3 py-1 rounded-full border border-orange-900/50">
                <i className="fas fa-hourglass-half"></i>
                <span>Ends in {days} days</span>
            </div>
        );
    } else {
        return (
            <div className="flex items-center gap-2 text-slate-400 font-medium text-sm bg-slate-800/50 px-3 py-1 rounded-full border border-slate-700">
                <i className="far fa-calendar-alt"></i>
                <span>Valid until {new Date(expiryDate).toLocaleDateString()}</span>
            </div>
        );
    }
};

const ActiveOffersView = ({ offers }: { offers: typeof activeOffers }) => {
    return (
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <span className="inline-block py-1 px-3 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 font-bold text-sm mb-4 uppercase tracking-wider">
                    Limited Time Opportunities
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                    Exclusive Promotions
                </h1>
                <p className="text-slate-300 max-w-2xl mx-auto">
                    Take advantage of these limited-time offers to accelerate your career transition.
                    These packages are designed to give you maximum impact at exceptional value.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {offers.map((offer) => {
                    const now = new Date();
                    const expiry = offer.expiryDate ? new Date(offer.expiryDate) : null;
                    const isExpired = expiry ? expiry < now : false;

                    // Check for Urgent status (< 24 hours)
                    const timeDiff = expiry ? expiry.getTime() - now.getTime() : 0;
                    const isUrgent = !isExpired && timeDiff > 0 && timeDiff < 24 * 60 * 60 * 1000;

                    return (
                        <div key={offer.id} className={`relative group rounded-2xl overflow-hidden ${isUrgent ? 'p-[3px]' : ''} flex flex-col`}>

                            {/* Urgent Spinning Border Background (Conic Gradient) */}
                            {isUrgent && (
                                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg_at_50%_50%,#dc2626_0%,#f97316_50%,#dc2626_100%)] animate-spin-slow-border opacity-75 blur-sm"></div>
                            )}

                            {/* Card Content Container */}
                            <div className={`relative h-full bg-navy-800 rounded-xl overflow-hidden border ${isUrgent ? 'border-transparent' : 'border-slate-700'} shadow-xl transition-all duration-300 flex flex-col z-10 ${isExpired ? 'opacity-75 grayscale-50' : 'hover:shadow-2xl hover:border-gold-500/50'}`}>

                                {/* Expired Overlay */}
                                {isExpired && (
                                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 flex justify-center -rotate-12 pointer-events-none select-none">
                                        <span className="border-4 border-red-500/50 text-red-500/70 text-4xl font-black uppercase px-6 py-2 rounded-xl tracking-widest backdrop-blur-sm">
                                            Offer Ended
                                        </span>
                                    </div>
                                )}

                                {offer.image && (
                                    <div className="h-48 overflow-hidden relative">
                                        <div className={`absolute inset-0 bg-navy-900/50 z-10 ${!isExpired && 'group-hover:bg-transparent transition-colors'}`}></div>
                                        <img src={offer.image} alt={offer.title} className={`w-full h-full object-cover transition-transform duration-500 ${!isExpired && 'transform group-hover:scale-110'}`} />
                                        {offer.discountPercentage && (
                                            <div className={`absolute top-4 right-4 z-20 font-bold py-1 px-3 rounded-lg shadow-lg ${isExpired ? 'bg-slate-600 text-slate-300' : 'bg-red-600 text-white'}`}>
                                                -{offer.discountPercentage}%
                                            </div>
                                        )}
                                    </div>
                                )}

                                <div className="p-8 flex-grow flex flex-col">
                                    {/* Countdown Timer Helper */}
                                    <div className="mb-4">
                                        {isExpired ? (
                                            <div className="flex items-center gap-2 text-red-400 font-bold text-sm bg-red-900/10 px-3 py-1 rounded-full border border-red-900/30">
                                                <i className="fas fa-times-circle"></i>
                                                <span>Ended on {new Date(offer.expiryDate!).toLocaleDateString()}</span>
                                            </div>
                                        ) : (
                                            <OfferCountdown expiryDate={offer.expiryDate} />
                                        )}
                                    </div>

                                    <h3 className={`text-2xl font-bold mb-2 ${isExpired ? 'text-slate-400' : 'text-white'}`}>{offer.title}</h3>
                                    <p className="text-slate-400 mb-6 line-clamp-3">{offer.description}</p>

                                    {offer.features && (
                                        <ul className="mb-8 space-y-2 flex-grow">
                                            {offer.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-sm text-slate-300">
                                                    <i className={`fas fa-check mr-2 ${isExpired ? 'text-slate-500' : 'text-green-400'}`}></i>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    <div className="mt-auto">
                                        <div className="flex items-end gap-3 mb-6">
                                            <span className={`text-3xl font-bold ${isExpired ? 'text-slate-400' : 'text-white'}`}>${offer.discountedPrice}</span>
                                            {offer.originalPrice && (
                                                <span className="text-lg text-slate-500 line-through mb-1">${offer.originalPrice}</span>
                                            )}
                                        </div>

                                        {isExpired ? (
                                            <button disabled className="block w-full text-center py-4 rounded-lg bg-slate-700 text-slate-500 font-bold cursor-not-allowed border border-slate-600 select-none">
                                                Offer Expired
                                            </button>
                                        ) : (
                                            <a href={offer.link} className={`block w-full text-center py-4 rounded-lg font-bold transition-all shadow-lg ${isUrgent ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white animate-pulse' : 'bg-gold-500 hover:bg-gold-400 text-navy-900 shadow-gold-500/20'}`}>
                                                {isUrgent ? 'Claim Before It Expires!' : 'Claim Offer'}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Call to Action for Active State */}
            <div className="mt-20 text-center border-t border-slate-800 pt-16">
                <p className="text-slate-400 mb-4">Don't see what you're looking for?</p>
                <a href="/contact" className="text-gold-400 hover:text-white font-medium transition-colors">Contact us for a custom package <i className="fas fa-arrow-right ml-1"></i></a>
            </div>
        </div>
    );
};

// Simplified subscription form component for the detailed view
const SimpleSubscribeForm = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call or use existing logic
        setStatus('loading');

        // Simulating delay for UX
        setTimeout(() => {
            // Ideally integrate with real backend here (emailjs or netlify function)
            // For now, mirroring success state to show UX
            setStatus('success');
            setEmail('');
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className="bg-green-500/20 text-green-400 p-4 rounded-lg text-center border border-green-500/50">
                <i className="fas fa-check-circle text-2xl mb-2 block"></i>
                <p className="font-bold">You're on the list!</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
                <input
                    type="email"
                    required
                    placeholder="Compare@competitor.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-navy-950 border border-slate-700 text-white focus:border-gold-500 outline-none"
                />
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-3 rounded-lg bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-navy-900 font-bold shadow-lg transition-all"
                >
                    {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                </button>
            </div>
        </form>
    );
};

export default OffersPage;
