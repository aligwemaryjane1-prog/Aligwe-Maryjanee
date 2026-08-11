import React, { useState } from 'react';
import { Sparkles, Calendar, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { SMILE_CASES } from '../data/dentalData';
import { SmileCase } from '../types/dental';

interface SmileGalleryProps {
  onOpenBooking: () => void;
}

export const SmileGallery: React.FC<SmileGalleryProps> = ({ onOpenBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50); // percentage

  const categories = [
    { id: 'all', label: 'All Cases' },
    { id: 'veneers', label: 'Porcelain Veneers' },
    { id: 'orthodontics', label: 'Invisalign Aligners' },
    { id: 'implants', label: 'Dental Implants' },
    { id: 'whitening', label: 'Teeth Whitening' }
  ];

  const filteredCases = activeCategory === 'all'
    ? SMILE_CASES
    : SMILE_CASES.filter(c => c.category === activeCategory);

  const currentCase = filteredCases[activeCaseIndex] || filteredCases[0];

  return (
    <section id="gallery" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>REAL CLINICAL OUTCOMES</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold tracking-tight">
            Smile Transformation Gallery
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explore authentic before &amp; after smile transformations completed at Aura Dental Studio. Use the interactive comparison slider below to view treatment results.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveCaseIndex(0);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Before & After Slider Box */}
        {currentCase && (
          <div className="bg-[#FAF9F6] rounded-3xl border border-slate-200 p-6 sm:p-10 clinical-shadow max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Interactive Slider (Col 7) */}
            <div className="lg:col-span-7 space-y-3">
              <div
                className="relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden select-none border border-slate-300 shadow-md group cursor-ew-resize"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                  setSliderPosition((x / rect.width) * 100);
                }}
                onTouchMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const touch = e.touches[0];
                  if (touch) {
                    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
                    setSliderPosition((x / rect.width) * 100);
                  }
                }}
              >
                {/* Before Image (Base) */}
                <img
                  src={currentCase.beforeImageUrl}
                  alt="Before treatment"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-xs text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full z-10">
                  BEFORE
                </span>

                {/* After Image (Clipped overlay) */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentCase.afterImageUrl}
                    alt="After treatment"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', height: '100%' }}
                  />
                  <span className="absolute top-4 left-4 bg-teal-600/90 backdrop-blur-xs text-white text-[11px] font-mono font-bold px-3 py-1 rounded-full z-10">
                    AFTER
                  </span>
                </div>

                {/* Slider Handle Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-slate-900 shadow-lg border border-slate-300 flex items-center justify-center font-bold text-xs">
                    ↔
                  </div>
                </div>
              </div>

              <div className="text-center text-[11px] text-slate-500 font-mono">
                Drag slider across image to compare Before &amp; After
              </div>
            </div>

            {/* Case Details Sidebar (Col 5) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div className="space-y-2">
                <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-[11px] font-mono uppercase font-bold">
                  {currentCase.category.toUpperCase()}
                </span>
                <h3 className="font-heading font-bold text-2xl text-slate-900">{currentCase.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentCase.description}
                </p>
              </div>

              <div className="space-y-2 pt-2 border-t border-slate-200 text-xs text-slate-700">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Treatment Duration:</span>
                  <span className="font-semibold text-slate-900">{currentCase.treatmentTime}</span>
                </div>
                {currentCase.patientAgeGroup && (
                  <div className="flex justify-between py-1 border-b border-slate-100">
                    <span className="text-slate-500">Patient Demographic:</span>
                    <span className="font-semibold text-slate-900">{currentCase.patientAgeGroup}</span>
                  </div>
                )}
              </div>

              {/* Case Navigation Buttons */}
              <div className="flex items-center justify-between gap-3 pt-2">
                <div className="flex items-center gap-2">
                  <button
                    disabled={activeCaseIndex === 0}
                    onClick={() => {
                      setActiveCaseIndex(prev => prev - 1);
                      setSliderPosition(50);
                    }}
                    className="p-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-30 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <span className="text-xs text-slate-500 font-mono">
                    {activeCaseIndex + 1} / {filteredCases.length}
                  </span>
                  <button
                    disabled={activeCaseIndex === filteredCases.length - 1}
                    onClick={() => {
                      setActiveCaseIndex(prev => prev + 1);
                      setSliderPosition(50);
                    }}
                    className="p-2 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 disabled:opacity-30 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-all shadow-sm cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Start Your Transformation</span>
                </button>
              </div>

            </div>

          </div>
        )}

        {/* Disclaimer Notice */}
        <div className="max-w-3xl mx-auto p-4 rounded-xl bg-slate-100 border border-slate-200 text-center text-xs text-slate-600 flex items-center justify-center gap-2">
          <AlertCircle className="w-4 h-4 text-slate-500 shrink-0" />
          <span>Clinical Disclaimer: Photography represents actual clinical outcomes achieved at our studio. Individual dental anatomy varies and treatment plans are customized per patient.</span>
        </div>

      </div>
    </section>
  );
};
