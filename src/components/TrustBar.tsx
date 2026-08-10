import React from 'react';
import { Layout, ShoppingBag, Zap, TrendingUp, Smartphone, Sparkles } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustStatements = [
    { title: 'Premium WordPress Development', icon: Layout },
    { title: 'Shopify Experiences', icon: ShoppingBag },
    { title: 'Landing Pages', icon: Zap },
    { title: 'Conversion Focused', icon: TrendingUp },
    { title: 'Responsive Design', icon: Smartphone },
    { title: 'Fast Performance', icon: Sparkles },
  ];

  return (
    <section className="py-5 md:py-6 bg-[#111111] text-[#FAF8F5] border-y border-[#E9E9E9]/20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-3 flex items-center justify-between">
        <span className="text-[10px] font-mono tracking-widest uppercase text-gray-400">
          CORE CAPABILITIES &amp; SPECIALIZATIONS
        </span>
        <span className="text-[10px] font-mono text-[#0A66FF] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0F9D58] animate-ping" />
          ENTERPRISE GRADE STANDARDS
        </span>
      </div>

      {/* Marquee Track */}
      <div className="flex overflow-hidden relative select-none">
        <div className="animate-marquee flex items-center gap-12 md:gap-16 whitespace-nowrap py-2">
          {trustStatements.concat(trustStatements).map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3.5 group cursor-default transition-all duration-300 opacity-85 hover:opacity-100"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#0A66FF] border border-white/10 group-hover:border-[#0A66FF] group-hover:bg-[#0A66FF] group-hover:text-white transition-all">
                  <Icon className="w-4 h-4" />
                </div>
                <span className="font-heading font-medium text-sm md:text-base tracking-tight text-white group-hover:text-[#0A66FF] transition-colors">
                  {item.title}
                </span>
                <span className="text-gray-600 font-mono text-xs ml-4">•</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
