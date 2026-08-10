import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, Layers, CheckCircle2 } from 'lucide-react';
import { TECH_STACK_DATA } from '../data/portfolioData';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'CMS', 'E-Commerce', 'Design & UX', 'Performance & SEO'];

  const filteredTech = activeCategory === 'All'
    ? TECH_STACK_DATA
    : TECH_STACK_DATA.filter((t) => t.category === activeCategory);

  return (
    <section id="tech-stack" className="py-14 md:py-20 bg-[#FAF8F5] relative border-t border-[#E9E9E9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-8 md:space-y-10">
        
        {/* Section Header & Category Selector */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111]/[0.04] border border-[#E9E9E9] text-xs font-mono font-medium text-[#111111]">
              <Terminal className="w-3.5 h-3.5 text-[#0A66FF]" />
              <span>TECHNOLOGY &amp; DESIGN ECOSYSTEM</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#111111] tracking-tight">
              Tech Stack &amp; Specialization Capsules
            </h2>

            <p className="text-sm md:text-base text-[#666666]">
              Mastering industry-standard CMS platforms, custom code, and optimization tools to build fast, scalable web experiences.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#111111]/[0.03] border border-[#E9E9E9]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-xl text-xs font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#111111] text-[#FAF8F5] shadow-xs'
                    : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* High-End Capsule Grid */}
        <div className="flex flex-wrap gap-3">
          {filteredTech.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className="group px-5 py-3 rounded-2xl bg-white border border-[#E9E9E9] hover:border-[#0A66FF] hover:shadow-md transition-all duration-300 flex items-center gap-3 cursor-default"
            >
              <div className="w-8 h-8 rounded-xl bg-[#111111]/[0.04] text-[#111111] flex items-center justify-center font-mono text-xs font-bold group-hover:bg-[#0A66FF] group-hover:text-white transition-colors shrink-0">
                {item.name.slice(0, 2).toUpperCase()}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-sm text-[#111111] group-hover:text-[#0A66FF] transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#111111]/[0.04] text-[#666666]">
                    {item.category}
                  </span>
                </div>
                <div className="text-[11px] text-[#666666] font-sans">
                  {item.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
