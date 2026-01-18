import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';

const ExitIntentPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasShown, setHasShown] = useState(false);

    useEffect(() => {
        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasShown) {
                setIsVisible(true);
                setHasShown(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [hasShown]);

    if (!isVisible) return null;

    return createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={() => setIsVisible(false)}
            ></div>

            <div className="bg-navy-800 border border-gold-500/30 p-8 rounded-2xl shadow-2xl max-w-lg w-full relative z-10 animate-float">
                <button
                    onClick={() => setIsVisible(false)}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition"
                >
                    <i className="fas fa-times text-xl"></i>
                </button>

                <div className="text-center">
                    <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i className="fas fa-gem text-3xl text-gold-400"></i>
                    </div>

                    <h3 className="text-2xl font-serif font-bold text-white mb-2">Wait! Don't Leave Empty Handed.</h3>
                    <p className="text-slate-300 mb-8">
                        Get our exclusive <strong>"C-Suite Resume Checklist"</strong> before you go. It's the exact framework we use to land our clients 500k+ roles.
                    </p>

                    <Link
                        to="/booking"
                        className="block w-full py-4 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold rounded-lg mb-4 transition"
                        onClick={() => setIsVisible(false)}
                    >
                        Claim Your Free Strategy Session
                    </Link>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-slate-500 hover:text-slate-300 text-sm font-medium"
                    >
                        No thanks, I prefer applying blindly.
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default ExitIntentPopup;
