import React from 'react';
import { Cpu, CheckCircle2, ShieldAlert, Sparkles, ArrowRight } from 'lucide-react';
import { TECH_DATA } from '../data/dentalData';
import { PageRoute } from '../types/dental';

interface TechSectionProps {
  onNavigate: (route: PageRoute) => void;
}

export const TechSection: React.FC<TechSectionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-mono uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-sky-600" />
              <span>PRECISION DENTAL TECHNOLOGY</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl text-slate-900 font-semibold tracking-tight">
              State-of-the-Art Technology for Painless, Accurate Care
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We invest in leading-edge 3D diagnostics and digital manufacturing to increase procedure safety, eliminate uncomfortable physical molds, and accelerate recovery times.
            </p>
          </div>

          <button
            onClick={() => onNavigate('technology')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-xs sm:text-sm transition-all cursor-pointer shrink-0"
          >
            <span>Explore Technology Guide</span>
            <ArrowRight className="w-4 h-4 text-sky-600" />
          </button>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_DATA.map((tech) => (
            <div
              key={tech.id}
              className="bg-[#FAF9F6] rounded-3xl border border-slate-200/90 overflow-hidden clinical-shadow p-6 sm:p-8 flex flex-col justify-between space-y-6 group hover:border-sky-300 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-[11px] font-mono uppercase font-bold">
                    {tech.tagline}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-sky-600 flex items-center justify-center font-bold">
                    <Cpu className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-sky-700 transition-colors">
                  {tech.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {tech.description}
                </p>

                {/* Patient Benefits */}
                <div className="space-y-2 pt-2 border-t border-slate-200/80">
                  <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">How It Benefits You:</div>
                  <div className="space-y-1.5">
                    {tech.patientBenefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs font-semibold text-sky-600 flex items-center gap-1">
                <span>Integrated in every examination &amp; treatment plan</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
