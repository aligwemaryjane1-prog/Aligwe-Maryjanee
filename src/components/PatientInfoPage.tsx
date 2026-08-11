import React from 'react';
import { FileText, Download, CheckCircle2, ShieldCheck, Heart, Clock, Calendar, HelpCircle, Sparkles, ArrowRight, Phone } from 'lucide-react';
import { PageRoute } from '../types/dental';
import { InsurancePaymentSection } from './InsurancePaymentSection';
import { FaqSection } from './FaqSection';
import { CLINIC_INFO } from '../data/dentalData';

interface PatientInfoPageProps {
  onOpenBooking: () => void;
  onNavigate?: (route: PageRoute) => void;
}

export const PatientInfoPage: React.FC<PatientInfoPageProps> = ({ onOpenBooking, onNavigate }) => {
  const downloadableForms = [
    { title: 'New Patient Registration Form', size: 'PDF &bull; 1.2 MB', description: 'Basic patient intake, emergency contacts, and medical history overview.' },
    { title: 'Medical History & Allergies Questionnaire', size: 'PDF &bull; 850 KB', description: 'Comprehensive health disclosures, current medications, and allergy alerts.' },
    { title: 'HIPAA Privacy Acknowledgment', size: 'PDF &bull; 400 KB', description: 'Standard privacy policy acknowledgment and records release authorization.' },
    { title: 'Dental Insurance Authorization Form', size: 'PDF &bull; 620 KB', description: 'PPO insurance billing consent and direct claims assignment form.' }
  ];

  const aftercareGuides = [
    {
      title: 'Teeth Whitening Aftercare',
      description: 'Avoid dark pigments (coffee, red wine, soy sauce, tobacco) for 48 hours following in-office whitening while enamel pores reseal. Use desensitizing paste if mild tingling occurs.'
    },
    {
      title: 'Dental Implant & Surgical Care',
      description: 'Apply cold ice compresses externally for 20-minute intervals during the first 24 hours. Stick to soft lukewarm foods and avoid sucking through straws to protect surgical sites.'
    },
    {
      title: 'Crowns, Veneers & Restorations',
      description: 'Avoid hard or sticky foods for 24 hours after permanent cementation. Brush gently with non-abrasive fluoride toothpaste and floss daily to preserve crown margins.'
    },
    {
      title: 'Invisalign & Orthodontic Care',
      description: 'Wear clear aligners for 20–22 hours daily. Clean aligners using lukewarm water and soft bristles, and store in protective cases whenever removed for meals.'
    }
  ];

  return (
    <div className="pt-24 pb-16 space-y-16 bg-[#FAF9F6]">
      {/* 1. Header Hero Banner */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-900/40 via-slate-900 to-slate-950 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4 relative z-10">
          
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-900/80 border border-sky-700/60 text-sky-300 text-xs font-mono uppercase tracking-widest font-semibold shadow-sm">
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>PATIENT RESOURCES &amp; GUIDES</span>
          </div>

          {/* Page Title */}
          <h1 className="font-serif-title text-4xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight leading-tight">
            Patient Information <span className="italic font-normal text-sky-300">Hub</span>
          </h1>

          {/* Supporting Paragraph */}
          <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed max-w-2xl mx-auto">
            Access useful resources, downloadable intake forms, preparation guides, transparent payment &amp; insurance information, and post-treatment care instructions before and after your visit.
          </p>

        </div>
      </section>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* 2. New Patient & First Visit Section */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 clinical-shadow space-y-8">
          <div className="max-w-3xl space-y-2">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700">NEW PATIENT EXPERIENCE</div>
            <h2 className="font-serif-title text-3xl sm:text-4xl text-slate-900 font-semibold tracking-tight">
              What to Expect on Your First Visit
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We guide you through every step of your appointment so you feel informed, comfortable, and completely at ease from the moment you walk through our doors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 font-bold text-sm flex items-center justify-center">
                1
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">Digital Check-In &amp; Welcome</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enjoy a complimentary beverage in our tranquil studio lobby while our front desk coordinators verify your digital intake paperwork and insurance details.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 font-bold text-sm flex items-center justify-center">
                2
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">3D Diagnostics &amp; Examination</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Experience low-radiation digital 3D CBCT scans and intraoral optical scanning performed with zero physical putty or uncomfortable gagging.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-800 font-bold text-sm flex items-center justify-center">
                3
              </div>
              <h3 className="font-heading font-bold text-lg text-slate-900">Co-Diagnostic Consultation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your dentist reviews high-definition 3D images on-screen with you, answering all questions and co-designing a treatment plan that fits your budget.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Downloadable Patient Forms */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 clinical-shadow space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700">PRE-VISIT PREPARATION</div>
              <h2 className="font-serif-title text-3xl sm:text-4xl text-slate-900 font-semibold tracking-tight">
                Downloadable Patient Forms
              </h2>
              <p className="text-slate-600 text-sm">Save 15 minutes at check-in by completing your intake paperwork in advance.</p>
            </div>
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-mono font-bold border border-emerald-200">
              PDF FORMAT AVAILABLE
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {downloadableForms.map((form, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-slate-200/90 bg-slate-50 hover:bg-slate-100/70 transition-colors flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="font-heading font-bold text-sm sm:text-base text-slate-900">{form.title}</div>
                  <div className="text-xs text-slate-600 leading-normal">{form.description}</div>
                  <div className="text-[11px] text-slate-500 font-mono pt-1" dangerouslySetInnerHTML={{ __html: form.size }} />
                </div>
                <button
                  onClick={() => alert(`Downloading form: ${form.title}`)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-sky-600 text-white font-semibold text-xs transition-colors shrink-0 cursor-pointer shadow-xs"
                  title="Download PDF"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden md:inline">Download</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Post-Treatment Care Guides (Resource Cards) */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 clinical-shadow space-y-8">
          <div className="space-y-1">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-sky-700">CLINICAL AFTERCARE</div>
            <h2 className="font-serif-title text-3xl sm:text-4xl text-slate-900 font-semibold tracking-tight">
              Post-Treatment Care &amp; Recovery Guides
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Follow these evidence-based care instructions to ensure optimal recovery and long-term oral health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aftercareGuides.map((guide, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200/90 bg-slate-50 space-y-3">
                <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0" />
                  <span>{guide.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {guide.description}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* 5. Insurance & Payment Section */}
      <InsurancePaymentSection onOpenBooking={onOpenBooking} />

      {/* 6. FAQ Section */}
      <FaqSection />

      {/* 7. Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="space-y-2 max-w-xl mx-auto">
            <h2 className="font-serif-title text-3xl sm:text-4xl font-semibold text-white">Ready for Your First Visit?</h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Book your appointment online in under 60 seconds, or connect directly with our San Francisco care team.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-all cursor-pointer shadow-md"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Appointment Online</span>
          </button>
        </div>
      </div>
    </div>
  );
};
