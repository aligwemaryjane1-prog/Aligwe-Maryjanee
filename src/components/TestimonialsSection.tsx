import React from 'react';
import { Star, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { REVIEWS_DATA, CLINIC_INFO } from '../data/dentalData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-mono uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
            <span>VERIFIED PATIENT REVIEWS</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold tracking-tight">
            What Our Patients Say About Aura Dental Studio
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Over {CLINIC_INFO.totalReviews} patients have rated our care <span className="font-bold text-slate-900">{CLINIC_INFO.googleRating} out of 5 stars</span> on Google. Here is what they have to say about their experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 clinical-shadow space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-sky-50 text-sky-800 text-[11px] font-mono font-medium">
                    {rev.serviceCategory}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                  "{rev.reviewText}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center text-xs">
                    {rev.patientName.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 flex items-center gap-1">
                      <span>{rev.patientName}</span>
                      {rev.verified && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 inline" title="Verified Patient" />
                      )}
                    </div>
                    <div className="text-[10px] text-slate-400">Verified Patient &bull; {rev.date}</div>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-slate-400">
                  Google Review
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
