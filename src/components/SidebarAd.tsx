import React, { useState } from 'react';
import { SidebarAdData } from '../data/blog-posts';

interface SidebarAdProps {
    ad: SidebarAdData;
    label?: string; // e.g. "Advertisement 1"
}

const SidebarAd: React.FC<SidebarAdProps> = ({ ad, label = "Advertisement" }) => {
    const [imageError, setImageError] = useState(false);

    if (ad.type === 'placeholder') {
        return (
            <div className="bg-slate-50 rounded-xl shadow-sm border-2 border-dashed border-slate-300 p-8 flex flex-col items-center justify-center text-center h-[300px]">
                <span className="bg-slate-200 text-slate-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">{label}</span>
                <div className="text-slate-400 font-medium">
                    <p>{ad.title || "Affiliate Ad Space"}</p>
                    <p className="text-sm mt-2">{ad.description || "Reserved for future partnerships"}</p>
                </div>
            </div>
        );
    }

    // Default to custom/amazon style
    return (
        <div className="bg-white rounded-xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            {/* Label Badge */}
            <div className="bg-slate-50 border-b border-slate-100 px-4 py-2 flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    {label}
                </span>
                <span className="text-[10px] text-slate-400">Sponsored</span>
            </div>

            <div className="p-5">
                {/* Image */}
                {ad.image && (
                    <div className="mb-4 flex justify-center bg-slate-50 rounded-lg p-2 border border-slate-100">
                        <img
                            src={imageError ? 'https://placehold.co/150x220/e2e8f0/475569?text=Product' : ad.image}
                            alt={ad.title || 'Product'}
                            className="h-40 w-auto object-contain shadow-sm rounded-sm"
                            onError={() => setImageError(true)}
                        />
                    </div>
                )}

                {/* Content */}
                <div className="text-center">
                    {ad.type === 'amazon' && (
                        <div className="text-xs font-bold text-gold-500 uppercase tracking-wider mb-1">
                            Recommended Read
                        </div>
                    )}

                    <h4 className="text-lg font-bold text-navy-900 leading-tight mb-1">
                        {ad.title}
                    </h4>

                    {ad.author && <p className="text-slate-500 text-xs mb-3">by {ad.author}</p>}

                    {/* Simple Rating for Amazon/Book type */}
                    {(ad.rating || ad.type === 'amazon') && (
                        <div className="flex justify-center items-center mb-3">
                            <div className="flex text-yellow-400 text-xs">
                                {[...Array(5)].map((_, i) => (
                                    <i key={i} className={`fas fa-star ${i < (ad.rating || 5) ? '' : 'text-slate-200'}`}></i>
                                ))}
                            </div>
                            {ad.reviews && <span className="text-xs text-slate-400 ml-1">({ad.reviews})</span>}
                        </div>
                    )}

                    <p className="text-slate-600 text-sm mb-5 line-clamp-3">
                        {ad.description}
                    </p>

                    <a
                        href={ad.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-2 w-full font-bold py-2.5 px-4 rounded-lg transition-colors shadow-sm text-sm ${ad.type === 'amazon'
                                ? 'bg-[#FF9900] text-white hover:bg-[#ffad33]'
                                : 'bg-navy-900 text-white hover:bg-navy-700'
                            }`}
                        style={ad.bgColor && ad.type !== 'amazon' ? { backgroundColor: ad.bgColor } : {}}
                    >
                        {ad.type === 'amazon' && <i className="fab fa-amazon"></i>}
                        {ad.ctaText || (ad.type === 'amazon' ? "Buy on Amazon" : "Learn More")}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SidebarAd;
