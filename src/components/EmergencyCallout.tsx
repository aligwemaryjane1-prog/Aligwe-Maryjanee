import React from 'react';
import { ShieldAlert, Phone, Clock, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';
import { PageRoute } from '../types/dental';

interface EmergencyCalloutProps {
  onNavigate: (route: PageRoute) => void;
}

export const EmergencyCallout: React.FC<EmergencyCalloutProps> = ({ onNavigate }) => {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-4 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-mono uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-rose-400 animate-pulse" />
              <span>URGENT DENTAL CARE AVAILABLE</span>
            </div>
            
            <h2 className="font-serif-title text-3xl sm:text-4xl text-white font-semibold">
              Need Emergency Dental Attention Today?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Dental pain and trauma should never wait. We reserve priority same-day emergency appointment slots daily for acute toothaches, chipped teeth, and infections.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <a
              href={`tel:${CLINIC_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-sm transition-all shadow-lg cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency: {CLINIC_INFO.emergencyPhone}</span>
            </a>

            <button
              onClick={() => onNavigate('emergency')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 font-medium text-sm transition-all cursor-pointer"
            >
              <span>View Emergency Triage Guide</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
