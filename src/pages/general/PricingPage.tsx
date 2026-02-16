import React from 'react';
import { Link } from 'react-router-dom';
import { pricingData, showDiscountedPricing } from '../../data/pricing';

const Pricing = () => {
  return (
    <section className="py-32 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white">Investment Models</h2>
          <p className="text-slate-400 mt-4">Choose the model that fits your risk profile.</p>
          {showDiscountedPricing && (
            <div className="mt-4 inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider animate-pulse">
              Limited Time Offers Available
            </div>
          )}
        </div>

        <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-8 max-w-7xl mx-auto">

          {/* Plan 1: Flat Fee */}
          <div className="glass p-8 rounded-xl border border-slate-700 flex flex-col relative">
            {showDiscountedPricing && (
              <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg transform rotate-3">
                SAVE ${pricingData.flatFee.originalPrice - pricingData.flatFee.discountedPrice}
              </div>
            )}
            <h3 className="text-xl font-bold text-white">{pricingData.flatFee.title}</h3>

            <div className="mt-4">
              {showDiscountedPricing ? (
                <>
                  <div className="text-slate-500 text-lg line-through decoration-red-500 mb-1">${pricingData.flatFee.originalPrice.toLocaleString()}</div>
                  <div className="text-3xl font-serif font-bold text-white text-gold-400">
                    ${pricingData.flatFee.discountedPrice.toLocaleString()} <span className="text-sm text-slate-500 font-sans font-normal">{pricingData.flatFee.priceSuffix}</span>
                  </div>
                </>
              ) : (
                <div className="text-3xl font-serif font-bold text-white">
                  ${pricingData.flatFee.originalPrice.toLocaleString()} <span className="text-sm text-slate-500 font-sans font-normal">{pricingData.flatFee.priceSuffix}</span>
                </div>
              )}
            </div>

            <p className="text-sm text-slate-400 mt-4">{pricingData.flatFee.description}</p>
            <ul className="space-y-4 mt-8 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Career Coaching</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Jobseeker Skills/Career Roadmap & Industry/Sector Job Market Research</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Resume & Cover Letter Optimization</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> LinkedIn Profile Optimization</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Job Boards Accounts Creation & Profiles Optimization</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Job Searching & Applying (Full Management)</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Professional Networking</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Hidden Job Market</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Land Interviews & Preparation</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Salary Negotiation Guidance</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Others...</li>
              <li className="border-b border-slate-700 opacity-50"></li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> No Long Term Exclusivity</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Gmail Control Not Required</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> LinkedIn Control Not Required</li>
            </ul>
            <a
              href={pricingData.flatFee.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 border border-slate-600 rounded-lg text-center text-white font-bold hover:bg-slate-800"
            >
              Purchase Now
            </a>
          </div>

          {/* Plan 2: Retainer Model (NEW) */}
          <div className="glass p-8 rounded-xl border-2 border-slate-500 relative transform md:-translate-y-2 shadow-2xl shadow-slate-500/10 flex flex-col bg-navy-900">
            {showDiscountedPricing && (
              <div className="absolute top-12 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 shadow-lg transform translate-x-2 rotate-3 z-10">
                SAVE ${pricingData.retainer.originalPrice - pricingData.retainer.discountedPrice}
              </div>
            )}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-500 text-white px-4 py-1 text-xs font-bold uppercase rounded shadow-lg">Flexible Payment</div>
            <h3 className="text-xl font-bold text-white">{pricingData.retainer.title}</h3>

            <div className="mt-4">
              {showDiscountedPricing ? (
                <>
                  <div className="text-slate-500 text-lg line-through decoration-red-500 mb-1">${pricingData.retainer.originalPrice.toLocaleString()}</div>
                  <div className="text-3xl font-serif font-bold text-white text-gold-400">
                    ${pricingData.retainer.discountedPrice.toLocaleString()} <span className="text-sm text-slate-500 font-sans font-normal">{pricingData.retainer.priceSuffix}</span>
                  </div>
                </>
              ) : (
                <div className="text-3xl font-serif font-bold text-white">
                  ${pricingData.retainer.originalPrice.toLocaleString()} <span className="text-sm text-slate-500 font-sans font-normal">{pricingData.retainer.priceSuffix}</span>
                </div>
              )}
            </div>

            <p className="text-sm text-slate-400 mt-4">then ${pricingData.retainer.monthlyPrice} per month.</p>
            <ul className="space-y-4 mt-8 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Career Coaching</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Jobseeker Skills/Career Roadmap & Industry/Sector Job Market Research</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Resume & Cover Letter Optimization</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> LinkedIn Profile Optimization</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Job Boards Accounts Creation & Profiles Optimization</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Job Searching & Applying (Full Management)</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Professional Networking</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Hidden Job Market</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Land Interviews & Preparation</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Salary Negotiation Guidance</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Others...</li>
              <li className="border-b border-slate-700 opacity-50"></li>
              <li className="flex items-center gap-3 text-sm text-white font-medium"><i className="fas fa-check text-gold-400"></i> <strong>Exclusivity (3 Months)</strong></li>
              <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> Gmail Control</li>
              <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> LinkedIn Control</li>
            </ul>
            <a
              href={pricingData.retainer.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 border border-slate-600 rounded-lg text-center text-white font-bold hover:bg-slate-800"
            >
              Subscribe Now
            </a>
          </div>

          {/* Plan 3: The PARTNERSHIP */}
          <div className="glass p-8 rounded-xl border-2 border-gold-400 relative transform md:-translate-y-4 shadow-2xl shadow-gold-400/10 flex flex-col bg-navy-800">
            {showDiscountedPricing && (
              <div className="absolute top-12 right-0 bg-red-600 text-white text-xs font-bold px-3 py-1 shadow-lg transform translate-x-2 rotate-3 z-10">
                SAVE ${pricingData.partnership.originalPrice - pricingData.partnership.discountedPrice}
              </div>
            )}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gold-400 text-navy-900 px-4 py-1 text-xs font-bold uppercase rounded shadow-lg">Most Popular</div>
            <h3 className="text-xl font-bold text-white">{pricingData.partnership.title}</h3>

            <div className="mt-4">
              {showDiscountedPricing ? (
                <>
                  <div className="text-slate-500 text-lg line-through decoration-red-500 mb-1">${pricingData.partnership.originalPrice.toLocaleString()}</div>
                  <div className="text-3xl font-serif font-bold text-white text-gold-400">
                    ${pricingData.partnership.discountedPrice.toLocaleString()} <span className="text-sm text-slate-500 font-sans font-normal">{pricingData.partnership.priceSuffix}</span>
                  </div>
                </>
              ) : (
                <div className="text-3xl font-serif font-bold text-white">
                  ${pricingData.partnership.originalPrice.toLocaleString()} <span className="text-sm text-slate-500 font-sans font-normal">{pricingData.partnership.priceSuffix}</span>
                </div>
              )}
            </div>

            <p className="text-sm text-slate-400 mt-4">We share the risk. We only win when you win. We take 1 Month of Your Job Offer Annual Salary (To Be Paid In 4-Part Payments).</p>
            <ul className="space-y-4 mt-8 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> Career Coaching</li>
              <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> Jobseeker Skills/Career Roadmap & Industry/Sector Job Market Research</li>
              <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> Resume & Cover Letter Optimization</li>
              <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> LinkedIn Profile Optimization</li>
              <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> Job Boards Accounts Creation & Profiles Optimization</li>
              <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> Job Searching & Applying (Full Management)</li>
              <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> Professional Networking</li>
              <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> Hidden Job Market</li>
              <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> Land Interviews & Preparation</li>
              <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> Salary Negotiation Guidance</li>
              <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> Others..</li>
              <li className="border-b border-slate-500 opacity-50"></li>
              <li className="flex items-center gap-3 text-sm text-white font-medium"><i className="fas fa-check text-gold-400"></i> <strong>Full Exclusivity (6 Months)</strong></li>
              <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> Gmail Control</li>
              <li className="flex items-center gap-3 text-sm text-white"><i className="fas fa-check text-gold-400"></i> LinkedIn Control</li>
            </ul>
            <a
              href={pricingData.partnership.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 gold-btn rounded-lg text-center text-navy-900 font-bold">Apply for Partnership</a>
          </div>

          {/* Plan 4: Tiered Services */}
          <div className="glass p-8 rounded-xl border border-slate-700 flex flex-col relative">
            {showDiscountedPricing && (
              <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-lg transform rotate-3">
                SAVE ${pricingData.tiered.originalPrice - pricingData.tiered.discountedPrice}
              </div>
            )}
            <h3 className="text-xl font-bold text-white">{pricingData.tiered.title}</h3>

            <div className="mt-4">
              {showDiscountedPricing ? (
                <>
                  <div className="text-slate-500 text-lg line-through decoration-red-500 mb-1">${pricingData.tiered.originalPrice.toLocaleString()}</div>
                  <div className="text-3xl font-serif font-bold text-white text-gold-400">
                    ${pricingData.tiered.discountedPrice.toLocaleString()} <span className="text-sm text-slate-500 font-sans font-normal">{pricingData.tiered.priceSuffix}</span>
                  </div>
                </>
              ) : (
                <div className="text-3xl font-serif font-bold text-white">
                  ${pricingData.tiered.originalPrice.toLocaleString()} <span className="text-sm text-slate-500 font-sans font-normal">{pricingData.tiered.priceSuffix}</span>
                </div>
              )}
            </div>

            <p className="text-sm text-slate-400 mt-4">A la carte services for specific needs.</p>
            <ul className="space-y-4 mt-8 mb-8 flex-1">
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Career Coaching</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Jobseeker Skills/Career Roadmap & Industry/Sector Job Market Research</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Resume & Cover Letter Optimization</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> LinkedIn Profile Optimization</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Job Boards Accounts Creation & Profiles Optimization</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Job Searching & Applying (Full Management)</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Build a Professional Network on LinkedIn</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Interviews Preparation</li>
              <li className="border-b border-slate-700 opacity-50"></li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> No Exclusivity</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Gmail Control Not Required</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> LinkedIn Control Not Required</li>
              <li className="flex items-center gap-3 text-sm text-slate-300"><i className="fas fa-check text-gold-400"></i> Service Support For Up To One Month</li>
            </ul>
            <Link to={pricingData.tiered.paymentLink} className="block w-full py-3 border border-slate-600 rounded-lg text-center text-white font-bold hover:bg-slate-800">Select</Link>
          </div>

        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-navy-800 rounded-2xl p-8 md:p-12 border border-slate-700 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">Unsure which model fits your career goals?</h3>
          <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
            Don't leave your career to chance. Let's discuss your specific situation and find the perfect strategy for you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a
              href="https://wa.me/201023642127?text=Hello%20Ayman,%20I%20am%20interested%20in%20Reverse%20Recruiting%20Services"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] text-white rounded-lg font-bold hover:bg-[#128C7E] transition-all duration-300 h-16 w-full sm:w-[320px] hover:scale-105 shadow-lg group accent-button"
              aria-label="Chat on WhatsApp"
            >
              <i className="fab fa-whatsapp text-3xl group-hover:rotate-12 transition-transform"></i>
              <span className="text-lg">DM Us on WhatsApp</span>
            </a>
            <span className="text-slate-500 font-bold uppercase tracking-widest text-sm">Or</span>
            <a
              href="https://calendly.com/thedreamjobconsultant/60min/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gold-btn text-navy-900 rounded-lg font-bold h-16 w-full sm:w-[320px] transition-all duration-300 hover:scale-105 shadow-lg shadow-gold-400/20"
            >
              <span className="text-lg">Book a Free Strategy Call</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;