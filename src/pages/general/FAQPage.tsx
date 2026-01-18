
import React, { useState } from 'react';
import { faqCategories } from '../../data/faqs';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="glass rounded-xl mb-4 overflow-hidden transition-all duration-300 border border-slate-700 hover:border-gold-400/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
      >
        <span className="font-bold text-lg text-white">{question}</span>
        <i className={`fas fa-chevron-down text-gold-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}></i>
      </button>
      <div
        className={`px-6 text-slate-400 leading-relaxed overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        {answer}
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="bg-navy-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 text-center">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -mt-20 w-96 h-96 rounded-full bg-gold-400/10 blur-3xl filter"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Frequently Asked <span className="text-gold-400">Questions</span>
          </h1>
          <p className="text-xl text-slate-400">
            Everything you need to know about how we work and what to expect.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="pb-24 px-4">
        <div className="max-w-3xl mx-auto">
          {faqCategories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-2xl font-serif font-bold text-white mb-6 pl-2 border-l-4 border-gold-400">
                {category.title}
              </h2>
              {category.items.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          ))}

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-navy-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
            <p className="text-slate-400 mb-6">We'd love to chat about your specific situation.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://wa.me/201023642127?text=Hello%20Ayman,%20I%20am%20interested%20in%20Reverse%20Recruiting%20Services"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-lg font-bold hover:bg-[#128C7E] transition-all duration-300 h-14 w-full sm:w-[300px] hover:scale-105"
                aria-label="Chat on WhatsApp"
              >
                <i className="fab fa-whatsapp text-2xl"></i>
                <span>DM Us on WhatsApp</span>
              </a>
              <span className="text-slate-400 font-bold">Or</span>
              <a
                href="https://calendly.com/thedreamjobconsultant/60min/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gold-btn text-navy-900 rounded-lg font-bold h-14 w-full sm:w-[300px] transition-transform hover:scale-105"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
