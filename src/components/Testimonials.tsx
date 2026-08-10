import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/portfolioData';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#FAF8F5] relative border-t border-[#E9E9E9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10 md:space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111]/[0.04] border border-[#E9E9E9] text-xs font-mono font-medium text-[#111111]">
            <Sparkles className="w-3.5 h-3.5 text-[#0A66FF]" />
            <span>CLIENT EXPERIENCE &amp; RESULTS</span>
          </div>

          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-base text-[#666666]">
            Hear directly from founders, marketing directors, and business owners who transformed their web presence.
          </p>
        </div>

        {/* Luxury Slider Container */}
        <div className="relative p-8 md:p-16 rounded-3xl bg-white border border-[#E9E9E9] shadow-xl">
          {/* Background Quotation Icon */}
          <div className="absolute top-6 right-8 text-[#111111]/[0.04] pointer-events-none select-none">
            <Quote className="w-36 h-36 md:w-52 md:h-52 stroke-1" />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="space-y-8 relative z-10"
            >
              {/* Star Rating & Project Badge */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A66FF]/10 text-[#0A66FF] text-xs font-mono font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Project: {current.projectType}</span>
                </div>
              </div>

              {/* Quote Text */}
              <blockquote className="font-heading font-medium text-2xl md:text-3xl lg:text-4xl text-[#111111] leading-snug tracking-tight">
                "{current.quote}"
              </blockquote>

              {/* Client Info Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#E9E9E9]">
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.clientName}
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#111111]"
                  />
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#111111]">
                      {current.clientName}
                    </h3>
                    <p className="text-xs text-[#666666] font-mono">
                      {current.clientRole} — <span className="text-[#111111] font-medium">{current.company}</span>
                    </p>
                  </div>
                </div>

                {/* Slider Navigation Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-[#111111]/[0.04] border border-[#E9E9E9] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <span className="text-xs font-mono text-[#666666] px-2">
                    0{currentIndex + 1} / 0{TESTIMONIALS_DATA.length}
                  </span>

                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-[#111111]/[0.04] border border-[#E9E9E9] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
