import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export interface ComparisonFeature {
    name: string;
    key: string;
    description?: string;
}

export interface CompetitorData {
    name: string;
    isUs: boolean;
    logo?: string;
    features: Record<string, string | boolean | React.ReactNode>;
    highlightColor?: string;
    link?: string;
}

interface ComparisonTableProps {
    title: string;
    subtitle?: string;
    features: ComparisonFeature[];
    competitors: CompetitorData[];
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({ title, subtitle, features, competitors }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            setIsScrolled(scrollContainerRef.current.scrollLeft > 20);
        }
    };

    const us = competitors.find(c => c.isUs);
    const others = competitors.filter(c => !c.isUs);

    const renderCellContent = (content: string | boolean | React.ReactNode) => {
        if (typeof content === 'boolean') {
            return content ? (
                <i className="fas fa-check-circle text-green-400 text-xl" />
            ) : (
                <i className="fas fa-times-circle text-slate-600 text-xl" />
            );
        }
        return <span className="text-sm font-medium">{content}</span>;
    };

    return (
        <div className="py-12 bg-navy-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
                    {subtitle && <p className="text-slate-400 max-w-2xl mx-auto">{subtitle}</p>}
                </div>

                <div className="relative rounded-xl overflow-hidden bg-navy-800/50 border border-slate-700 shadow-2xl">
                    {/* Scroll Hint Overlay for Mobile */}
                    <div className={`absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-navy-900 to-transparent pointer-events-none transition-opacity duration-300 z-20 md:hidden ${isScrolled ? 'opacity-0' : 'opacity-100'}`} />

                    <div
                        className="overflow-x-auto custom-scrollbar"
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                    >
                        <table className="w-full min-w-[1000px] border-collapse">
                            <thead>
                                <tr>
                                    {/* Feature Name Column (Sticky) */}
                                    <th className="sticky left-0 z-20 bg-navy-900/95 backdrop-blur-sm p-4 text-left min-w-[200px] border-b border-r border-slate-700 text-slate-300 font-semibold shadow-[4px_0_12px_-4px_rgba(0,0,0,0.5)]">
                                        Features
                                    </th>

                                    {/* Our Column (Sticky after label) */}
                                    <th className={`sticky left-[200px] z-20 bg-navy-800/95 backdrop-blur-sm p-0 min-w-[220px] border-b border-r border-gold-500/30 shadow-[4px_0_12px_-4px_rgba(0,0,0,0.5)] relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/10 to-transparent pointer-events-none" />
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gold-400" />
                                        <div className="p-6">
                                            <div className="text-gold-400 font-bold text-lg mb-1 tracking-wider uppercase text-xs">Recommended</div>
                                            <div className="text-white font-bold text-xl">{us?.name}</div>
                                        </div>
                                    </th>

                                    {/* Competitors Columns */}
                                    {others.map((comp, idx) => (
                                        <th key={idx} className="p-6 min-w-[180px] bg-navy-900/50 border-b border-r border-slate-800 text-slate-300 font-semibold text-lg text-center last:border-r-0">
                                            {comp.name}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {features.map((feature, idx) => (
                                    <tr key={feature.key} className="hover:bg-white/5 transition-colors">
                                        {/* Feature Label Cell */}
                                        <td className="sticky left-0 z-10 bg-navy-900/95 backdrop-blur-sm p-4 border-b border-r border-slate-700 text-slate-400 font-medium text-sm shadow-[4px_0_12px_-4px_rgba(0,0,0,0.5)] group">
                                            {feature.name}
                                            {feature.description && (
                                                <i className="fas fa-info-circle ml-2 text-slate-600 hover:text-slate-400 cursor-help" title={feature.description} />
                                            )}
                                        </td>

                                        {/* Our Data Cell */}
                                        <td className="sticky left-[200px] z-10 bg-navy-800/90 backdrop-blur-sm p-4 border-b border-r border-gold-500/20 text-center shadow-[4px_0_12px_-4px_rgba(0,0,0,0.5)]">
                                            <div className="text-white font-semibold">
                                                {renderCellContent(us?.features[feature.key] ?? '-')}
                                            </div>
                                        </td>

                                        {/* Competitor Data Cells */}
                                        {others.map((comp, cIdx) => (
                                            <td key={cIdx} className="p-4 border-b border-r border-slate-800 text-center text-slate-400 last:border-r-0">
                                                {renderCellContent(comp.features[feature.key] ?? '-')}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile Legend/Hint */}
                <div className="mt-4 text-center md:hidden text-slate-500 text-sm">
                    <i className="fas fa-arrows-alt-h mr-2"></i> Scroll horizontally to compare
                </div>
            </div>
        </div>
    );
};

export default ComparisonTable;
