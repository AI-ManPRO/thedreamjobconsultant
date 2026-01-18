import React, { useEffect } from 'react';

const Booking = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section className="bg-navy-900 min-h-screen pt-32 pb-20 px-4">
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                    Book Your <span className="text-gold-400">Consultation</span>
                </h1>
                <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                    Schedule your free strategy session with us.
                </p>
            </div>

            <div className="max-w-7xl mx-auto">
                <div
                    className="calendly-inline-widget"
                    data-url="https://calendly.com/thedreamjobconsultant/60min?hide_event_type_details=1&hide_gdpr_banner=1"
                    style={{ minWidth: '320px', height: '700px' }}
                ></div>
            </div>
        </section>
    );
};

export default Booking;
