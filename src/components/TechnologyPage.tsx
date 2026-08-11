import React from 'react';
import { Cpu, CheckCircle2, ShieldAlert, Sparkles, ArrowRight, Clock, ShieldCheck, Heart } from 'lucide-react';
import { TECH_DATA, CLINIC_INFO } from '../data/dentalData';
import { PageRoute } from '../types/dental';

interface TechnologyPageProps {
  onOpenBooking: () => void;
  onNavigate: (route: PageRoute) => void;
}

export const TechnologyPage: React.FC<TechnologyPageProps> = ({ onOpenBooking, onNavigate }) => {
  return (
    <div className="py-16 pt-28 bg-[#FAF9F6] space-y-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span>MODERN DIGITAL DENTISTRY</span>
          </div>
          <h1 className="font-serif-title text-4xl sm:text-5xl text-slate-900 font-semibold tracking-tight">
            Advanced Clinical Technology
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover how our 3D CBCT imaging, optical intraoral scanning, and laser dentistry eliminate procedure discomfort, increase precision, and accelerate healing times.
          </p>
        </div>

        {/* Deep Dive Cards */}
        <div className="space-y-10">
          {TECH_DATA.map((tech, idx) => (
            <div
              key={tech.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 clinical-shadow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-5 space-y-4">
                <span className="px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-mono font-bold">
                  {tech.tagline}
                </span>
                <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900">{tech.name}</h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{tech.description}</p>
              </div>

              <div className="lg:col-span-7 bg-[#FAF9F6] rounded-2xl p-6 border border-slate-200 space-y-4">
                <h3 className="font-heading font-bold text-sm text-slate-900 uppercase tracking-wider">Key Advantages for Patients:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {tech.patientBenefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technology CTA */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white text-center space-y-4">
          <h2 className="font-serif-title text-2xl sm:text-3xl font-semibold">Experience Gentle Digital Dentistry</h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Book a comprehensive examination and 3D digital scan with our San Francisco dental specialists today.
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer"
          >
            <span>Schedule Your 3D Scan Visit</span>
          </button>
        </div>

      </div>
    </div>
  );
};
