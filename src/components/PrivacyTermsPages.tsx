import React from 'react';
import { ShieldCheck, FileText } from 'lucide-react';

interface PrivacyTermsProps {
  type: 'privacy' | 'terms';
}

export const PrivacyTermsPages: React.FC<PrivacyTermsProps> = ({ type }) => {
  return (
    <div className="py-16 pt-28 bg-[#FAF9F6] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 clinical-shadow">
        
        {type === 'privacy' ? (
          <div className="space-y-6 text-slate-800">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>LEGAL COMPLIANCE</span>
              </div>
              <h1 className="font-serif-title text-3xl sm:text-4xl font-semibold">Privacy Policy &amp; HIPAA Compliance</h1>
              <p className="text-xs text-slate-500 font-mono">Last Updated: August 2026 &bull; Aura Dental Studio, LLC</p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-600">
              <h2 className="font-bold text-slate-900 text-base">1. Information Collection and HIPAA Commitment</h2>
              <p>
                Aura Dental Studio is committed to preserving patient privacy in strict compliance with the Health Insurance Portability and Accountability Act (HIPAA) and applicable California healthcare privacy laws. Protected Health Information (PHI) transmitted through appointment request forms is encrypted and accessed solely by authorized clinical care coordinators.
              </p>

              <h2 className="font-bold text-slate-900 text-base">2. How We Use Patient Data</h2>
              <p>
                Information collected on this website is utilized exclusively to schedule consultations, verify insurance coverage, communicate clinical reminders, and fulfill medical treatment obligations. We do not sell, rent, or share personal data with third-party marketers under any circumstances.
              </p>

              <h2 className="font-bold text-slate-900 text-base">3. Digital Security Protocols</h2>
              <p>
                We employ SSL/TLS transport layer encryption, firewalls, and restricted database access controls to safeguard all transmitted electronic records.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6 text-slate-800">
            <div className="space-y-2 border-b border-slate-200 pb-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono">
                <FileText className="w-3.5 h-3.5" />
                <span>TERMS OF USE</span>
              </div>
              <h1 className="font-serif-title text-3xl sm:text-4xl font-semibold">Terms of Service &amp; Medical Disclaimer</h1>
              <p className="text-xs text-slate-500 font-mono">Last Updated: August 2026 &bull; Aura Dental Studio, LLC</p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-600">
              <h2 className="font-bold text-slate-900 text-base">1. Educational Disclaimer</h2>
              <p>
                All text, graphics, photography, and information presented on this website are provided strictly for educational purposes and do not constitute formal medical diagnosis or treatment advice. Content should never replace a professional clinical evaluation by a licensed dentist.
              </p>

              <h2 className="font-bold text-slate-900 text-base">2. Emergency Medical Disclaimer</h2>
              <p>
                If you are experiencing a life-threatening medical emergency or severe uncontrolled facial bleeding/swallowing difficulty, please dial 911 or visit the nearest hospital emergency room immediately.
              </p>

              <h2 className="font-bold text-slate-900 text-base">3. Appointment Requests</h2>
              <p>
                Submitting an appointment request form on this website does not guarantee a reserved appointment time until verified directly by an Aura Dental Studio receptionist.
              </p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
