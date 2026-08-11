import React from 'react';
import { CreditCard, ShieldCheck, CheckCircle2, Phone, Calendar } from 'lucide-react';
import { INSURANCE_PROVIDERS, CLINIC_INFO } from '../data/dentalData';

interface InsurancePaymentSectionProps {
  onOpenBooking: () => void;
}

export const InsurancePaymentSection: React.FC<InsurancePaymentSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5 text-sky-400" />
            <span>TRANSPARENT FINANCIAL OPTIONS</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold tracking-tight">
            Insurance &amp; Flexible Payment Plans
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We believe financial clarity is an essential component of quality care. We maximize your insurance benefits and offer flexible 0% interest payment plans.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Card 1: PPO Insurance */}
          <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-slate-200/90 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900">In-Network PPO Insurance</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We accept and bill most major dental PPO insurance plans. Our team files claims directly on your behalf to maximize your annual coverage limits.
              </p>

              <div className="pt-2 space-y-1.5">
                <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Major Plans Accepted:</div>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                  {INSURANCE_PROVIDERS.map((ins, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span className="truncate">{ins}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500">
              Have questions about your coverage? Call our insurance specialist at <span className="font-semibold text-slate-900">{CLINIC_INFO.phone}</span>
            </div>
          </div>

          {/* Card 2: CareCredit & Financing */}
          <div className="bg-[#FAF9F6] rounded-3xl p-8 border border-slate-200/90 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-xl text-slate-900">0% Interest Patient Financing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Break major cosmetic makeovers or dental implant care into manageable monthly installments with CareCredit® and Sunbit® 0% interest promo plans.
              </p>

              <div className="space-y-2 pt-2">
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                  <div className="font-bold text-slate-900">CareCredit® Healthcare Financing</div>
                  <div className="text-[11px] text-slate-600">6, 12, or 24-month interest-free options for qualified patients.</div>
                </div>
                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs space-y-1">
                  <div className="font-bold text-slate-900">Sunbit® Soft Credit Check</div>
                  <div className="text-[11px] text-slate-600">90%+ approval rate with instant response and no hard credit inquiry.</div>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Ask About Financing Options
            </button>
          </div>

          {/* Card 3: In-House Membership Plan */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 space-y-6 flex flex-col justify-between shadow-xl">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-mono uppercase">
                <span>NO INSURANCE REQUIRED</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-white">Aura Dental Membership Plan</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                No insurance? No problem. Our annual in-house dental wellness plan covers all routine preventive care and gives you exclusive discounts on treatment.
              </p>

              <div className="space-y-2 pt-2 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>2 Comprehensive Exams &amp; Cleanings included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>All annual digital X-rays included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>1 Emergency Exam per year included</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>15% OFF all restorative &amp; cosmetic care</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors cursor-pointer shadow-sm"
            >
              Enroll in Membership Plan
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
