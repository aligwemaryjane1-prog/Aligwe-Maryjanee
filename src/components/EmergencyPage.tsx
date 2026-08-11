import React from 'react';
import { ShieldAlert, Phone, Clock, MapPin, CheckCircle2, AlertTriangle, ArrowRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface EmergencyPageProps {
  onOpenBooking: () => void;
}

export const EmergencyPage: React.FC<EmergencyPageProps> = ({ onOpenBooking }) => {
  const emergencyScenarios = [
    {
      title: 'Knocked-Out (Avulsed) Permanent Tooth',
      urgency: 'CRITICAL (Seek Care Within 60 Mins)',
      steps: [
        'Handle tooth ONLY by the crown (top part), do NOT touch root.',
        'If dirty, gently rinse with cold milk or saline (do not scrub).',
        'Try to reinsert into socket gently if possible, or place tooth in a cup of milk or saliva.',
        'Arrive at our studio immediately for re-implantation.'
      ]
    },
    {
      title: 'Severe Throbbing Toothache or Abscess',
      urgency: 'URGENT (Same-Day Visit)',
      steps: [
        'Rinse mouth thoroughly with warm salt water.',
        'Use dental floss to gently dislodge trapped food particles.',
        'Apply cold compress to cheek to reduce swelling.',
        'Avoid placing aspirin directly on gums or tooth.'
      ]
    },
    {
      title: 'Chipped, Cracked, or Broken Tooth',
      urgency: 'SAME-DAY EVALUATION',
      steps: [
        'Save any broken tooth fragments in a clean container.',
        'Rinse mouth with warm water.',
        'Cover sharp edges with temporary dental wax or sugarless gum if irritating tongue.',
        'Contact our emergency line for urgent restoration.'
      ]
    },
    {
      title: 'Lost Crown, Veneer, or Filling',
      urgency: 'PROMPT CARE (1-2 Days)',
      steps: [
        'Keep crown/veneer safe in a small container.',
        'Do not force restoration back onto tooth with hardware glue.',
        'Over-the-counter temporary dental cement can protect tooth temporarily.',
        'Call us to re-cement or replace restoration safely.'
      ]
    }
  ];

  return (
    <div className="py-16 pt-28 bg-[#FAF9F6] space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-rose-900 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-mono uppercase">
            <ShieldAlert className="w-4 h-4 text-rose-400 animate-pulse" />
            <span>24/7 DENTAL EMERGENCY RESPONSE PROTOCOL</span>
          </div>

          <h1 className="font-serif-title text-4xl sm:text-5xl font-semibold">
            Urgent Dental Emergency Care in San Francisco
          </h1>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
            We reserve dedicated daily emergency appointments to manage acute pain, dental trauma, broken crowns, and infections without delay.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <a
              href={`tel:${CLINIC_INFO.emergencyPhone.replace(/[^0-9]/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-base transition-all shadow-lg cursor-pointer"
            >
              <Phone className="w-5 h-5" />
              <span>Call Emergency Line: {CLINIC_INFO.emergencyPhone}</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-all cursor-pointer"
            >
              <span>Request Priority Same-Day Slot</span>
            </button>
          </div>
        </div>

        {/* Triage Matrix */}
        <div className="space-y-6">
          <h2 className="font-heading font-bold text-2xl text-slate-900 text-center sm:text-left">
            Emergency Triage Guide: What To Do Before Arriving
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {emergencyScenarios.map((sc, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 clinical-shadow space-y-4">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <h3 className="font-heading font-bold text-lg text-slate-900">{sc.title}</h3>
                  <span className="px-2.5 py-1 rounded-full bg-rose-100 text-rose-800 font-mono text-[10px] font-bold shrink-0">
                    {sc.urgency}
                  </span>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Immediate First-Aid Steps:</div>
                  <ol className="space-y-2 list-decimal list-inside text-xs text-slate-600 leading-relaxed">
                    {sc.steps.map((st, i) => (
                      <li key={i}>{st}</li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Directions */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 clinical-shadow flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading font-bold text-xl text-slate-900">Studio Location &amp; Emergency Directions</h3>
            <p className="text-xs text-slate-600">{CLINIC_INFO.address}</p>
          </div>
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC_INFO.address)}`}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors shrink-0"
          >
            Open Navigation in Google Maps
          </a>
        </div>

      </div>
    </div>
  );
};
