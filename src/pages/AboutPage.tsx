import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Award, HeartHandshake, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { MeetDentists } from '../components/MeetDentists';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { CLINIC_INFO } from '../data/dentalData';

interface AboutPageProps {
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 pb-16 space-y-16">
      {/* Page Header Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-900/40 via-slate-900 to-slate-950 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-900/60 border border-sky-700/50 text-sky-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Our Practice &amp; Philosophy</span>
          </div>
          <h1 className="font-serif-title text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Elevating Dental Care in <span className="italic font-normal text-sky-300">San Francisco</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed">
            Founded with a vision to eliminate dental anxiety through transparent diagnostics, gentle artistry, and cutting-edge 3D technology.
          </p>
        </div>
      </section>

      {/* Practice Heritage & Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif-title text-3xl sm:text-4xl text-slate-900 font-semibold leading-snug">
              A Studio Built Around <span className="text-sky-700 italic">Patient Comfort</span> and Precision.
            </h2>
            <p className="text-slate-600 leading-relaxed font-sans">
              At Aura Dental Studio, we believe a visit to the dentist should feel calming, empowering, and completely transparent. Over {CLINIC_INFO.yearsInPractice} years of practice in San Francisco, Dr. Elena Vance and Dr. Marcus Chen have created a tranquil sanctuary where patient education comes first.
            </p>
            <p className="text-slate-600 leading-relaxed font-sans">
              We reject high-pressure treatment selling. Instead, we use intraoral cameras and 3D CBCT scans to show you exactly what we see, co-designing treatment plans that honor your health goals and budget.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Sterilization Excellence</h4>
                  <p className="text-xs text-slate-500 mt-1">Strict hospital-grade autoclave protocols &amp; air filtration.</p>
                </div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <Award className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 text-sm">Master Clinical Craft</h4>
                  <p className="text-xs text-slate-500 mt-1">Continuing education with AACD, ICOI, and Spear Dental.</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm transition-all shadow-sm"
              >
                <span>Schedule Your Visit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80"
                alt="Aura Dental Studio Interior"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-100 shadow-md">
                <div className="flex items-center gap-4 text-left">
                  <HeartHandshake className="w-8 h-8 text-sky-600 shrink-0" />
                  <div>
                    <div className="font-heading font-bold text-slate-900 text-base">Anxious Patient Guarantee</div>
                    <div className="text-xs text-slate-600 mt-0.5">Noise-canceling headphones, warm towels, and gentle local numbing gels on every visit.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Dentists Section */}
      <MeetDentists onOpenBooking={onOpenBooking} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <TestimonialsSection />
    </div>
  );
};
