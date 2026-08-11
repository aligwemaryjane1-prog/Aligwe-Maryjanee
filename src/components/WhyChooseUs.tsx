import React from 'react';
import { ShieldCheck, Heart, Sparkles, Cpu, Clock, Smile } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: '30+ Combined Years of Clinical Excellence',
      description: 'Led by UCSF and Harvard trained specialists with fellowship certifications in cosmetic and implant dentistry.'
    },
    {
      icon: Cpu,
      title: 'Precision 3D Digital Diagnostics',
      description: 'Ultra-low radiation CBCT 3D scanning and optical intraoral wands eliminate uncomfortable physical putty impressions.'
    },
    {
      icon: Heart,
      title: 'Sanctuary Dental Atmosphere',
      description: 'Noise-canceling headphones, warm scented towels, and gentle local numbing gels turn routine visits into peaceful care.'
    },
    {
      icon: Smile,
      title: 'Personalized Digital Smile Design',
      description: 'Preview exact 3D computer simulations of your transformed smile before starting any cosmetic treatment.'
    },
    {
      icon: Clock,
      title: 'Convenient Scheduling & Same-Day Emergency',
      description: 'Early morning 7:30 AM starts, evening slots, and daily reserved emergency care blocks for rapid pain relief.'
    },
    {
      icon: Sparkles,
      title: 'Transparent Pricing & PPO Maximization',
      description: 'Complete fee clarity upfront with direct insurance billing and 0% interest flexible CareCredit payment options.'
    }
  ];

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono uppercase tracking-wider">
              <span>THE AURA DENTAL DIFFERENCE</span>
            </div>
            <h2 className="font-serif-title text-3xl sm:text-4xl text-slate-900 font-semibold leading-tight">
              A Patient-First Philosophy Rooted in Comfort and Precision.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We believe a visit to the dentist should feel serene, reassuring, and completely transparent. Every aspect of our studio—from ergonomic chairs to quiet dental handpieces—is crafted to eliminate anxiety and deliver remarkable clinical longevity.
            </p>

            <div className="p-6 rounded-2xl bg-slate-900 text-white space-y-3 shadow-lg">
              <div className="font-heading font-bold text-lg text-sky-400">Our Clinical Guarantee</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We take time to explain every diagnostic image and treatment option, answering all questions so you feel 100% informed and empowered.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-slate-200/80 bg-[#FAF9F6] space-y-3 transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
