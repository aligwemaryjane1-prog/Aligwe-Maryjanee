import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Clock, FileText, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/portfolioData';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-16 md:py-24 bg-[#FAF8F5] relative border-t border-[#E9E9E9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10 md:space-y-12">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111]/[0.04] border border-[#E9E9E9] text-xs font-mono font-medium text-[#111111]">
            <Sparkles className="w-3.5 h-3.5 text-[#0A66FF]" />
            <span>TRANSPARENT EXECUTION ROADMAP</span>
          </div>

          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight">
            The 7-Stage Process
          </h2>

          <p className="text-base md:text-lg text-[#666666] leading-relaxed">
            A meticulous, milestone-based methodology engineered to deliver exceptional visual quality, pixel precision, and on-time launches.
          </p>
        </div>

        {/* 7-Stage Timeline Controls */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#111111] text-white border-[#111111] shadow-xl scale-102'
                    : 'bg-white text-[#111111] border-[#E9E9E9] hover:border-[#111111]/40'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs font-bold ${
                      isActive ? 'text-[#0A66FF]' : 'text-[#666666]'
                    }`}>
                      {step.number}
                    </span>
                    <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-white/10 text-gray-300' : 'bg-[#111111]/[0.05] text-[#666666]'
                    }`}>
                      {step.duration}
                    </span>
                  </div>

                  <h3 className={`font-heading font-bold text-xs line-clamp-2 ${
                    isActive ? 'text-white' : 'text-[#111111]'
                  }`}>
                    {step.title}
                  </h3>
                </div>

                <div className="pt-3 mt-3 border-t border-current/10 flex items-center justify-between text-[10px] font-medium">
                  <span className={isActive ? 'text-[#0A66FF]' : 'text-[#666666]'}>
                    {isActive ? 'Active' : 'Phase'}
                  </span>
                  <ArrowRight className={`w-3 h-3 ${
                    isActive ? 'text-[#0A66FF]' : 'text-[#666666]'
                  }`} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Active Deep Dive Details */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-8 md:p-12 rounded-3xl bg-white border border-[#E9E9E9] shadow-md space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#E9E9E9] pb-6">
            <div className="flex items-center gap-4">
              <span className="w-14 h-14 rounded-2xl bg-[#0A66FF] text-white font-mono font-bold text-xl flex items-center justify-center shrink-0">
                {PROCESS_STEPS[activeStep].number}
              </span>
              <div>
                <h3 className="font-heading font-extrabold text-2xl md:text-3xl text-[#111111]">
                  Stage {PROCESS_STEPS[activeStep].number}: {PROCESS_STEPS[activeStep].title}
                </h3>
                <div className="flex items-center gap-2 text-xs font-mono text-[#666666] mt-1">
                  <Clock className="w-3.5 h-3.5 text-[#0A66FF]" />
                  <span>Estimated Duration: {PROCESS_STEPS[activeStep].duration}</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-base md:text-lg text-[#666666] leading-relaxed max-w-4xl">
            {PROCESS_STEPS[activeStep].detailedDesc}
          </p>

          <div className="space-y-3 pt-2">
            <h4 className="font-heading font-bold text-xs text-[#111111] uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#0A66FF]" />
              <span>Phase Deliverables &amp; Outcomes</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {PROCESS_STEPS[activeStep].deliverables.map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E9E9E9] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#0F9D58] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#111111] leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
