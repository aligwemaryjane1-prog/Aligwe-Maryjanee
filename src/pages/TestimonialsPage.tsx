import React from 'react';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { Star, ShieldCheck, Heart, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface TestimonialsPageProps {
  onOpenBooking: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({ onOpenBooking }) => {
  return (
    <div className="pt-24 pb-16 space-y-12">
      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-900/60 border border-amber-700/50 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Google Reviews &bull; {CLINIC_INFO.googleRating} Rating</span>
          </div>
          <h1 className="font-serif-title text-4xl sm:text-5xl font-semibold tracking-tight">
            Patient Stories &amp; <span className="italic font-normal text-amber-300">Reviews</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed">
            Read transparent feedback from patients who have experienced our gentle 3D digital dental care in San Francisco.
          </p>
        </div>
      </section>

      {/* Main Reviews Component */}
      <TestimonialsSection />

      {/* Bottom CTA */}
      <section className="max-w-5xl mx-auto px-4">
        <div className="bg-sky-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 shadow-lg">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-semibold">Ready to Experience Aura Dental Studio?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Join thousands of satisfied patients in San Francisco. Book your appointment online today.
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-all cursor-pointer"
          >
            <Calendar className="w-4 h-4 text-sky-600" />
            <span>Book Your Consultation</span>
          </button>
        </div>
      </section>
    </div>
  );
};
