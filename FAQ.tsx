
import React, { useState } from 'react';

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
  const faqs = [
    {
      question: "What exactly is Reverse Recruiting?",
      answer: "Traditional recruiting works for companies to find talent. Reverse Recruiting works for YOU to find companies. We act as your personal career agent. Instead of you spending hours scrolling job boards and applying into 'black holes', we identify target roles, network with decision-makers on your behalf, and pitch your value proposition directly to them."
    },
    {
      question: "Do you guarantee a job offer?",
      answer: "While no ethical firm can guarantee a specific job offer due to external market variables, our Partnership Model aligns our success with yours. In this model, we significantly lower the upfront cost and only receive our full fee when you sign an offer letter. This ensures we are as motivated as you are to close the deal."
    },
    {
      question: "How long does the process typically take?",
      answer: "On average, our executive clients begin seeing interview requests within 2-3 weeks of us launching their campaign. The average time to signed offer is typically 2-3 months, which is significantly faster than the 6-9 month average for executive searches conducted manually."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We have deep expertise in Technology (Software, Data, Product), Construction & Engineering (Project Directors, C-Level), Finance, and General Corporate Leadership. If you are a senior professional or executive in these fields, our network is ready for you."
    },
    {
      question: "Do I have to give you my LinkedIn password?",
      answer: "For our full Partnership Model, yes. We manage your inbox, connection requests, and networking messages to save you time. However, for the Standard Flat Fee model, LinkedIn management is optional. We use enterprise-grade security protocols to ensure your account remains safe."
    },
    {
      question: "What happens if I don't get hired?",
      answer: "In our Partnership Model, if you do not land a role, you do not pay the success fee. We share the risk. However, our 90%+ success rate suggests that with the right strategy, branding, and volume of outreach, landing a role is a matter of 'when', not 'if'."
    }
  ];

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
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}

          {/* Contact CTA */}
          <div className="mt-12 text-center bg-navy-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
            <p className="text-slate-400 mb-6">We'd love to chat about your specific situation.</p>
            <a 
              href="https://calendly.com/thedreamjobconsultant/60min/" 
              target="_blank" 
              className="inline-block gold-btn text-navy-900 px-8 py-3 rounded-lg font-bold"
            >
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
