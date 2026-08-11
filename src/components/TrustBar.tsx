import React from 'react';
import { Shield, Award, CheckCircle, HeartHandshake } from 'lucide-react';
import { INSURANCE_PROVIDERS } from '../data/dentalData';

export const TrustBar: React.FC = () => {
  return (
    <section className="bg-slate-900 text-slate-300 py-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800/80 pb-6">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-sky-400" />
            <span className="text-xs font-mono tracking-wider uppercase text-slate-300">
              Accredited Clinical Excellence &amp; PPO Partners
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> ADA Accredited</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> AACD Cosmetic Fellow</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> ICOI Implant Fellow</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> 0% Financing Available</span>
          </div>
        </div>

        {/* Insurance logos / badges list */}
        <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4 text-xs font-semibold text-slate-400">
          <span className="text-slate-400 font-mono text-[11px] uppercase">In-Network PPO Plans:</span>
          {INSURANCE_PROVIDERS.slice(0, 6).map((provider) => (
            <div key={provider} className="px-3.5 py-1.5 rounded-lg bg-slate-800/60 border border-slate-700/60 text-slate-300">
              {provider}
            </div>
          ))}
          <span className="text-sky-400 hover:text-sky-300 cursor-pointer text-xs">+ More</span>
        </div>

      </div>
    </section>
  );
};
