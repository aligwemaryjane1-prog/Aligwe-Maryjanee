import React, { useState } from 'react';
import { SERVICES_DATA, DENTISTS_DATA, CLINIC_INFO, INSURANCE_PROVIDERS } from '../data/dentalData';
import { Calendar, Clock, CheckCircle2, Sparkles, User, ShieldCheck, FileText, Phone, AlertCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export const BookAppointmentPage: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    serviceId: SERVICES_DATA[0].id,
    dentistId: 'any',
    preferredDate: '',
    preferredTime: 'Morning (8:00 AM - 12:00 PM)',
    patientStatus: 'new' as 'new' | 'existing',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    insuranceProvider: 'Delta Dental PPO',
    notes: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [confirmationCode, setConfirmationCode] = useState<string>('');

  const selectedService = SERVICES_DATA.find((s) => s.id === formData.serviceId) || SERVICES_DATA[0];

  const handleCompleteBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const code = 'AUR-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmationCode(code);
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-16 space-y-12">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-900/60 border border-sky-700/50 text-sky-300 text-xs font-mono uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5 text-sky-400" />
            <span>24/7 ONLINE APPOINTMENT PORTAL</span>
          </div>
          <h1 className="font-serif-title text-4xl sm:text-5xl font-semibold tracking-tight">
            Schedule Your Visit to <span className="italic font-normal text-sky-300">Aura Dental</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed">
            Choose your desired dental service, select a date, and let our San Francisco care coordination team reserve your slot.
          </p>
        </div>
      </section>

      {/* Main Booking Portal Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {submitted ? (
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                REQUEST REFERENCE CODE: <span className="font-bold text-slate-900">{confirmationCode}</span>
              </div>
              <h2 className="font-serif-title text-3xl font-bold text-slate-900">
                Appointment Request Received!
              </h2>
              <p className="text-slate-600 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{formData.firstName}</span>. Your booking request for <span className="font-bold text-slate-900">{selectedService.title}</span> has been transmitted to our front desk team.
              </p>
            </div>

            {/* Disclosure Notice */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-left max-w-lg mx-auto text-xs text-amber-900 space-y-1">
              <div className="font-bold flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Next Step Confirmation Protocol</span>
              </div>
              <p className="text-amber-800 leading-relaxed">
                This transmits an appointment request. Our reception team will call or SMS you at <span className="font-bold">{formData.phone}</span> within 2 business hours to verify insurance coverage and confirm your exact appointment start time.
              </p>
            </div>

            {/* Summary Details Box */}
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 max-w-lg mx-auto text-left text-xs space-y-2">
              <div className="font-bold text-slate-900 text-sm border-b border-slate-200 pb-2">Request Summary</div>
              <div className="flex justify-between">
                <span className="text-slate-500">Selected Service:</span>
                <span className="font-semibold text-slate-900">{selectedService.title}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Patient Type:</span>
                <span className="font-semibold text-slate-900">{formData.patientStatus === 'new' ? 'New Patient' : 'Existing Patient'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Preferred Date/Time:</span>
                <span className="font-semibold text-slate-900">{formData.preferredDate || 'Earliest Available'} &bull; {formData.preferredTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Insurance Provider:</span>
                <span className="font-semibold text-slate-900">{formData.insuranceProvider}</span>
              </div>
            </div>

            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
              }}
              className="px-6 py-3 rounded-xl bg-slate-900 text-white font-semibold text-xs transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8">
            {/* Step Indicators */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-6 text-xs sm:text-sm font-medium">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-sky-700 font-bold' : 'text-slate-400'}`}>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  1
                </span>
                <span className="hidden sm:inline">Select Treatment</span>
              </div>

              <div className="w-12 h-0.5 bg-slate-200" />

              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-sky-700 font-bold' : 'text-slate-400'}`}>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  2
                </span>
                <span className="hidden sm:inline">Date &amp; Doctor</span>
              </div>

              <div className="w-12 h-0.5 bg-slate-200" />

              <div className={`flex items-center gap-2 ${step >= 3 ? 'text-sky-700 font-bold' : 'text-slate-400'}`}>
                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${step >= 3 ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
                  3
                </span>
                <span className="hidden sm:inline">Patient Details</span>
              </div>
            </div>

            <form onSubmit={handleCompleteBooking} className="space-y-6">
              {/* STEP 1: SELECT SERVICE */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif-title text-2xl font-bold text-slate-900">1. What dental service do you require?</h3>
                    <p className="text-xs text-slate-500">Select the primary reason for your studio visit.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {SERVICES_DATA.map((srv) => {
                      const isSelected = formData.serviceId === srv.id;
                      return (
                        <div
                          key={srv.id}
                          onClick={() => setFormData({ ...formData, serviceId: srv.id })}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                            isSelected
                              ? 'border-sky-600 bg-sky-50/80 shadow-xs'
                              : 'border-slate-200/80 hover:bg-slate-50'
                          }`}
                        >
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected ? 'border-sky-600 bg-sky-600 text-white' : 'border-slate-300'
                          }`}>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 text-sm">{srv.title}</div>
                            <div className="text-xs text-slate-500 line-clamp-2 mt-0.5">{srv.shortDescription}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
                    >
                      <span>Continue to Date &amp; Doctor</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: DATE, TIME & DOCTOR */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif-title text-2xl font-bold text-slate-900">2. Preferred Date, Time &amp; Doctor</h3>
                    <p className="text-xs text-slate-500">Select your ideal appointment timing.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Preferred Date</label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Time Slot Window</label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      >
                        <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                        <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                        <option value="Late Afternoon (4:00 PM - 6:00 PM)">Late Afternoon (4:00 PM - 6:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Preferred Dentist</label>
                    <select
                      value={formData.dentistId}
                      onChange={(e) => setFormData({ ...formData, dentistId: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    >
                      <option value="any">First Available Specialist</option>
                      {DENTISTS_DATA.map((d) => (
                        <option key={d.id} value={d.id}>{d.name} ({d.title})</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 cursor-pointer"
                    >
                      <span>Continue to Patient Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: PATIENT INFORMATION */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="font-serif-title text-2xl font-bold text-slate-900">3. Patient &amp; Insurance Details</h3>
                    <p className="text-xs text-slate-500">Provide your contact info so we can confirm your slot.</p>
                  </div>

                  <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-100 text-xs font-medium">
                    <span className="text-slate-600">Patient Status:</span>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, patientStatus: 'new' })}
                      className={`px-3 py-1 rounded-lg ${formData.patientStatus === 'new' ? 'bg-sky-600 text-white' : 'bg-white text-slate-700'}`}
                    >
                      New Patient
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, patientStatus: 'existing' })}
                      className={`px-3 py-1 rounded-lg ${formData.patientStatus === 'existing' ? 'bg-sky-600 text-white' : 'bg-white text-slate-700'}`}
                    >
                      Existing Patient
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">First Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Last Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="Smith"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Mobile Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Dental Insurance Plan</label>
                    <select
                      value={formData.insuranceProvider}
                      onChange={(e) => setFormData({ ...formData, insuranceProvider: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    >
                      {INSURANCE_PROVIDERS.map((ins, idx) => (
                        <option key={idx} value={ins}>{ins}</option>
                      ))}
                      <option value="No Insurance / Self-Pay">No Insurance / Self-Pay (Membership Plan)</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Additional Notes / Symptoms</label>
                    <textarea
                      rows={3}
                      placeholder="Mention any specific dental concerns, anxiety, or scheduling preferences..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex justify-between pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Back</span>
                    </button>

                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold text-xs sm:text-sm flex items-center gap-2 cursor-pointer shadow-md"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Transmit Booking Request</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
