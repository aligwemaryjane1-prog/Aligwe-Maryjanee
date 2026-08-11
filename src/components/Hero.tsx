import React from 'react';
import { Calendar, ArrowRight, Star, ShieldCheck, Sparkles, Award, Clock, Users } from 'lucide-react';
import { PageRoute } from '../types/dental';
import { CLINIC_INFO } from '../data/dentalData';

interface HeroProps {
  onNavigate: (route: PageRoute) => void;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF9F6] via-white to-[#FAF9F6]">
      {/* Soft Background Accents */}
      <div className="absolute top-12 right-1/4 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-xs font-mono tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>San Francisco's Premier Dental Studio</span>
            </div>

            {/* Editorial Main Headline */}
            <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl text-slate-900 font-semibold tracking-tight leading-[1.1]">
              Confident Smiles Start With <span className="italic font-normal text-sky-700">Exceptional Care</span>.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-sans">
              Experience dental care reimagined. At Aura Dental Studio, we combine precision 3D technology, gentle clinical expertise, and a tranquil sanctuary environment to protect and elevate your smile.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm sm:text-base transition-all shadow-md hover:shadow-lg cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </button>

              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm sm:text-base transition-all cursor-pointer"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-slate-900">{CLINIC_INFO.yearsInPractice}+ Years</div>
                <div className="text-xs text-slate-500 font-sans">Clinical Excellence</div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-slate-900">{CLINIC_INFO.patientsServed}</div>
                <div className="text-xs text-slate-500 font-sans">Patients Treated</div>
              </div>
              <div>
                <div className="font-heading font-bold text-xl sm:text-2xl text-slate-900 flex items-center gap-1">
                  <span>{CLINIC_INFO.googleRating}</span>
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <div className="text-xs text-slate-500 font-sans">{CLINIC_INFO.totalReviews}+ Reviews</div>
              </div>
            </div>

          </div>

          {/* Right Hero Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="Aura Dental Studio Patient Experience"
                className="w-full h-[450px] sm:h-[520px] object-cover transition-transform duration-700 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

              {/* Floating Review Badge Overlay */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-slate-100 flex items-center gap-3 max-w-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-sm shrink-0">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">4.9/5.0 Google Rating</div>
                  <div className="text-[11px] text-slate-500">Based on 380+ patient reviews</div>
                </div>
              </div>

              {/* Floating Emergency Slot Overlay */}
              <div className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur-md text-white rounded-2xl p-4 shadow-lg border border-slate-800 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <div>
                  <div className="text-xs font-bold">Same-Day Emergency Slots</div>
                  <div className="text-[11px] text-slate-400">Reserved daily for urgent care</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
