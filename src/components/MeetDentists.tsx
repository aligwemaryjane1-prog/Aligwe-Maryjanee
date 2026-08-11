import React from 'react';
import { Award, GraduationCap, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { DENTISTS_DATA } from '../data/dentalData';

interface MeetDentistsProps {
  onOpenBooking: () => void;
}

export const MeetDentists: React.FC<MeetDentistsProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>EXPERT CLINICAL LEADERSHIP</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold tracking-tight">
            Meet Our Experienced Dental Team
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Our clinicians combine rigorous Ivy League and UCSF academic training with a warm, empathetic clinical demeanor to give you the highest quality oral healthcare.
          </p>
        </div>

        {/* Dentists Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {DENTISTS_DATA.map((dentist) => (
            <div
              key={dentist.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden clinical-shadow flex flex-col md:flex-row"
            >
              {/* Portrait Image */}
              <div className="md:w-5/12 relative h-72 md:h-auto bg-slate-100 shrink-0">
                <img
                  src={dentist.imageUrl}
                  alt={dentist.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 text-white text-[10px] font-mono">
                  {dentist.experienceYears}+ Years Clinical Practice
                </div>
              </div>

              {/* Dentist Details */}
              <div className="p-6 sm:p-8 md:w-7/12 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-slate-900">{dentist.name}</h3>
                    <p className="text-xs font-semibold text-sky-700 mt-0.5">{dentist.title}</p>
                    <p className="text-[11px] text-slate-500 font-mono mt-1">{dentist.credentials}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic border-l-2 border-sky-500 pl-3">
                    "{dentist.quote}"
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {dentist.bio}
                  </p>

                  {/* Specialization Tags */}
                  <div className="space-y-1 pt-2">
                    <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">Key Focus Areas:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {dentist.specializations.map((spec, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Education & Memberships */}
                <div className="pt-4 border-t border-slate-100 space-y-2 text-[11px] text-slate-600">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-sky-600" />
                    <span>Education &amp; Fellowships:</span>
                  </div>
                  <ul className="space-y-1 pl-5 list-disc text-[11px] text-slate-600">
                    {dentist.education.map((edu, idx) => (
                      <li key={idx}>{edu}</li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5 text-sky-400" />
                  <span>Request Consultation with {dentist.name.split(',')[0]}</span>
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
