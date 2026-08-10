import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Project } from '../types/portfolio';
import { PROJECTS_DATA } from '../data/portfolioData';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'WordPress', 'Shopify', 'Landing Page', 'Full Site'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => {
        if (selectedCategory === 'WordPress') return p.technologies.includes('WordPress');
        if (selectedCategory === 'Shopify') return p.technologies.includes('Shopify');
        if (selectedCategory === 'Landing Page') return p.category === 'Landing Page';
        if (selectedCategory === 'Full Site') return p.category === 'Full Site' || p.category === 'E-Commerce';
        return true;
      });

  return (
    <section id="work" className="py-16 md:py-24 relative bg-[#FAF8F5] border-t border-[#E9E9E9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10 md:space-y-12">
        
        {/* Section Header & Category Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111]/[0.04] border border-[#E9E9E9] text-xs font-mono font-medium text-[#111111]">
              <Sparkles className="w-3.5 h-3.5 text-[#0A66FF]" />
              <span>PROVEN CLIENT CASE STUDIES</span>
            </div>

            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight">
              Selected Transformations
            </h2>

            <p className="text-base md:text-lg text-[#666666] leading-relaxed">
              Every project is a custom strategic build engineered to elevate brand trust, solve operational bottlenecks, and double visitor revenue conversion.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#111111]/[0.03] border border-[#E9E9E9]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-[#111111] text-[#FAF8F5] shadow-xs'
                    : 'text-[#666666] hover:text-[#111111] hover:bg-[#111111]/[0.04]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col justify-between p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-[#E9E9E9] shadow-sm hover:shadow-2xl hover:border-[#0A66FF]/30 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="space-y-6">
                {/* Completely Clean Project Image */}
                <div className="relative aspect-[16/10] w-full rounded-xl md:rounded-2xl overflow-hidden bg-gray-100 border border-[#E9E9E9]">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Project Title & Short Description */}
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#111111] group-hover:text-[#0A66FF] transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="w-5 h-5 text-[#111111] group-hover:text-[#0A66FF] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0 mt-1" />
                  </div>

                  <p className="text-sm md:text-base text-[#666666] leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Client / Category / Industry / Year Metadata */}
              <div className="pt-6 mt-6 border-t border-[#E9E9E9] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#666666]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-[#111111]">{project.client}</span>
                  <span className="text-[#888888]">•</span>
                  <span className="px-2.5 py-0.5 rounded-md bg-[#111111]/[0.04] text-[#111111] font-medium">{project.category}</span>
                  <span className="text-[#888888]">•</span>
                  <span>{project.industry}</span>
                </div>
                <span className="font-medium text-[#111111]">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
