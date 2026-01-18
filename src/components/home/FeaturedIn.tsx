import React from 'react';
import { motion } from 'framer-motion';

const FeaturedIn = () => {
    return (
        <section className="py-12 bg-navy-900 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <p className="text-sm text-slate-500 uppercase tracking-widest mb-6 font-medium">Strategies proven in</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
                        {[
                            // Tech Giants (Existing)
                            { type: 'icon', icon: "fab fa-google", color: "hover:text-[#4285F4]", label: "Google" },
                            { type: 'icon', icon: "fab fa-microsoft", color: "hover:text-[#F25022]", label: "Microsoft" },
                            { type: 'icon', icon: "fab fa-amazon", color: "hover:text-[#FF9900]", label: "Amazon" },

                            // Australian Leaders
                            { type: 'image', src: "https://cdn.brandfetch.io/bhp.com", label: "BHP" },
                            { type: 'image', src: "https://cdn.brandfetch.io/riotinto.com", label: "Rio Tinto" },
                            { type: 'image', src: "https://cdn.brandfetch.io/woodside.com", label: "Woodside" },
                            { type: 'image', src: "https://cdn.brandfetch.io/agl.com.au", label: "AGL Energy" },
                            { type: 'image', src: "https://cdn.brandfetch.io/lendlease.com", label: "Lendlease" },
                            { type: 'image', src: "https://cdn.brandfetch.io/bluescope.com", label: "BlueScope" },

                            // Specific Companies (Images)
                            { type: 'image', src: "https://cdn.brandfetch.io/hillintl.com", label: "Hill International" },
                            { type: 'image', src: "https://cdn.brandfetch.io/assystem.com", label: "Assystem" },
                            { type: 'image', src: "https://cdn.brandfetch.io/ghd.com", label: "GHD" },
                            { type: 'image', src: "https://cdn.brandfetch.io/cscec.com", label: "CSCEC" },

                            // Specific Companies (Images)
                            { type: 'image', src: "https://cdn.brandfetch.io/albawani.net", label: "Al-Bawani" },
                            { type: 'image', src: "https://cdn.brandfetch.io/boss-be.com", label: "BOSS Built Env" },
                            { type: 'image', src: "https://cdn.brandfetch.io/uccholding.com", label: "UCC Holding" },
                            { type: 'image', src: "https://cdn.brandfetch.io/compass-pc.com", label: "Compass PC" },

                            // Gulf Suggestions
                            { type: 'image', src: "https://cdn.brandfetch.io/bechtel.com", label: "Bechtel" },
                            { type: 'image', src: "https://cdn.brandfetch.io/parsons.com", label: "Parsons" },
                            { type: 'image', src: "https://cdn.brandfetch.io/aecom.com", label: "AECOM" },
                            { type: 'image', src: "https://cdn.brandfetch.io/atkinsrealis.com", label: "AtkinsRealís" },

                        ].map((brand, index) => (
                            <div key={index} className="group flex flex-col items-center justify-center gap-2 cursor-pointer">
                                {brand.type === 'icon' && (
                                    <div className={`text-3xl md:text-4xl transition-all duration-300 opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 ${brand.color} transform group-hover:scale-110`}>
                                        <i className={brand.icon} title={brand.label}></i>
                                    </div>
                                )}
                                {brand.type === 'image' && (
                                    <div className="h-8 md:h-10 w-auto opacity-40 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 transform group-hover:scale-110">
                                        <img src={brand.src} alt={brand.label} className="h-full w-auto object-contain" />
                                    </div>
                                )}
                                {brand.type === 'text' && (
                                    <div className={`text-xl md:text-2xl font-serif font-bold tracking-tight opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0 ${brand.color} transform group-hover:scale-110`}>
                                        {brand.label}
                                    </div>
                                )}
                                {/* Tooltip/Label */}
                                <span className="text-[10px] uppercase tracking-wider text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity absolute -mt-12 bg-navy-900/90 px-2 py-1 rounded border border-slate-700 whitespace-nowrap pointer-events-none z-10">
                                    {brand.label}
                                </span>
                            </div>
                        ))}
                        <div className="text-2xl font-serif font-bold tracking-tighter opacity-40 transition-all duration-300 hover:opacity-100 hover:text-white cursor-pointer transform hover:scale-110">Forbes</div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedIn;
