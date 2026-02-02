import React, { useState } from 'react';

const NewsletterSignup = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        setMessage('');

        try {
            const response = await fetch('/.netlify/functions/newsletter-signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to subscribe');
            }

            setStatus('success');
            setMessage('You have successfully subscribed!');
            setEmail('');
        } catch (error: any) {
            console.error('Subscription error:', error);
            setStatus('error');
            setMessage(error.message || 'Something went wrong. Please try again.');
        }
    };

    return (
        <section className="py-20 relative overflow-hidden bg-navy-900 text-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-35"
                style={{ backgroundImage: "url('/images/home/newsletter-background.jpg')" }}
            ></div>

            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-navy-900/95 via-navy-900/80 to-indigo-900/80"></div>

            {/* Background decoration (kept subtle) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none z-0">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-500 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-3xl mx-auto px-4 relative z-10">
                <i className="fas fa-paper-plane text-4xl text-gold-400 mb-6 block"></i>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                    Join 10,000+ Executives
                </h2>
                <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                    Get weekly insights on the hidden job market, salary negotiation tactics, and executive branding tips delivered to your inbox.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                    <input
                        type="email"
                        placeholder="Your email address"
                        className="flex-1 px-6 py-4 rounded-lg bg-navy-800 border border-slate-600 text-white focus:outline-none focus:border-gold-400 transition disabled:opacity-50"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        disabled={status === 'loading'}
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading'}
                        className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold rounded-lg shadow-lg hover:shadow-gold-500/20 transition duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {status === 'loading' ? 'Subscribing...' : 'Subscribe Free'}
                    </button>
                </form>
                {message && (
                    <p className={`mt-4 text-sm ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {message}
                    </p>
                )}
                <p className="text-xs text-slate-500 mt-4">No spam. Unsubscribe anytime.</p>
            </div>
        </section>
    );
};

export default NewsletterSignup;
