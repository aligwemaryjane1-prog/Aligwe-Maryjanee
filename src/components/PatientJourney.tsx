import React from 'react';
import { Calendar, Search, FileText, HeartHandshake, ArrowRight } from 'lucide-react';

interface PatientJourneyProps {
  onOpenBooking: () => void;
}

export const PatientJourney: React.FC<PatientJourneyProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      number: '01',
      title: 'Book Your Visit',
      description: 'Request your preferred appointment time online in 60 seconds, or connect with our receptionist directly by phone.',
      icon: Calendar
    },
    {
      number: '02',
      title: 'Comprehensive Consultation',
      description: 'Receive a thorough digital exam including 3D imaging, oral cancer screening, and enamel evaluation in a serene environment.',
      icon: Search
    },
    {
      number: '03',
      title: 'Personalized Plan',
      description: 'Review 3D smile simulations and clear, transparent fee breakdowns with your dentist before making any decisions.',
      icon: FileText
    },
    {
      number: '04',
      title: 'Ongoing Dental Wellness',
      description: 'Enjoy a healthy, confident smile maintained through gentle biannual hygiene visits and personalized home care guidance.',
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-20 bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono uppercase tracking-wider">
            <span>THE PATIENT EXPERIENCE</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl text-slate-900 font-semibold tracking-tight">
            Your Seamless 4-Step Patient Journey
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From your very first contact to long-term preventive care, we ensure your dental experience is predictable, transparent, and completely comfortable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 clinical-shadow flex flex-col justify-between space-y-4 relative group hover:border-sky-300 transition-all duration-300"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-serif-title font-bold text-3xl text-sky-600">{step.number}</span>
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-sky-600" />
                    </div>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {idx === 0 && (
                  <button
                    onClick={onOpenBooking}
                    className="pt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-700 cursor-pointer"
                  >
                    <span>Request Visit Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
