import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, AlertCircle, Shield, FileText, ChevronRight } from 'lucide-react';
import { AppointmentRequest } from '../types/dental';
import { CLINIC_INFO, SERVICES_DATA, DENTISTS_DATA, INSURANCE_PROVIDERS } from '../data/dentalData';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose, initialServiceId }) => {
  const [formData, setFormData] = useState<AppointmentRequest>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: 'Morning (8am - 12pm)',
    patientStatus: 'new',
    serviceReason: initialServiceId ? SERVICES_DATA.find(s => s.id === initialServiceId)?.title || 'Comprehensive Exam & Cleaning' : 'Comprehensive Exam & Cleaning',
    preferredDentist: 'Any Available Specialist',
    insuranceProvider: 'Self-Pay / Private Pay',
    notes: ''
  });

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.serviceReason) errs.serviceReason = 'Please select a service or reason for visit.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.preferredDate) errs.preferredDate = 'Please select a preferred date.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!formData.firstName.trim()) errs.firstName = 'First name is required.';
    if (!formData.lastName.trim()) errs.lastName = 'Last name is required.';
    if (!formData.email.trim() || !formData.email.includes('@')) errs.email = 'Valid email is required.';
    if (!formData.phone.trim() || formData.phone.length < 7) errs.phone = 'Valid phone number is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep3()) return;

    setIsSubmitting(true);
    // Simulate API network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setStep(1);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: 'Morning (8am - 12pm)',
      patientStatus: 'new',
      serviceReason: 'Comprehensive Exam & Cleaning',
      preferredDentist: 'Any Available Specialist',
      insuranceProvider: 'Self-Pay / Private Pay',
      notes: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl overflow-hidden relative transition-all my-8">
        
        {/* Modal Header */}
        <div className="bg-[#0F172A] text-white p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-600/20 border border-sky-500/30 text-sky-400 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading font-bold text-lg sm:text-xl leading-tight">Request an Appointment</h2>
              <p className="text-xs text-slate-400">Aura Dental Studio &bull; San Francisco, CA</p>
            </div>
          </div>
          <button
            onClick={resetAndClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-6">
              <div className="w-16 h-16 bg-teal-50 border border-teal-200 rounded-full text-teal-600 flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2 max-w-md mx-auto">
                <h3 className="font-heading font-bold text-2xl text-slate-900">Appointment Request Received!</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thank you, <span className="font-semibold text-slate-900">{formData.firstName}</span>. Our patient coordinator will contact you within 2 business hours at <span className="font-medium text-slate-900">{formData.phone}</span> to confirm your requested slot.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left text-xs text-slate-700 space-y-2 max-w-md mx-auto">
                <div className="font-bold text-slate-900 text-sm border-b border-slate-200 pb-2 flex justify-between">
                  <span>Summary of Request</span>
                  <span className="text-sky-600 font-mono">Pending Confirmation</span>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <div><span className="text-slate-400">Service:</span> {formData.serviceReason}</div>
                  <div><span className="text-slate-400">Date:</span> {formData.preferredDate}</div>
                  <div><span className="text-slate-400">Time:</span> {formData.preferredTime}</div>
                  <div><span className="text-slate-400">Dentist:</span> {formData.preferredDentist}</div>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Return to Website
                </button>
                <a
                  href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-slate-300 text-slate-800 font-medium text-sm hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>Call Us Directly</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Progress Indicator */}
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${step === 1 ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'}`}>1</span>
                  <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Service</span>
                </div>
                <div className="w-8 h-px bg-slate-200"></div>
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${step === 2 ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'}`}>2</span>
                  <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Schedule</span>
                </div>
                <div className="w-8 h-px bg-slate-200"></div>
                <div className="flex items-center gap-2">
                  <span className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center ${step === 3 ? 'bg-sky-600 text-white' : 'bg-slate-100 text-slate-600'}`}>3</span>
                  <span className="text-xs font-semibold text-slate-700 hidden sm:inline">Contact</span>
                </div>
              </div>

              {/* Step 1: Service & Dentist */}
              {step === 1 && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Patient Status
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, patientStatus: 'new' })}
                        className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                          formData.patientStatus === 'new'
                            ? 'bg-sky-50 border-sky-600 text-sky-800 shadow-xs'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        ✨ New Patient
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, patientStatus: 'existing' })}
                        className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer ${
                          formData.patientStatus === 'existing'
                            ? 'bg-sky-50 border-sky-600 text-sky-800 shadow-xs'
                            : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        🏥 Returning Patient
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Service / Reason for Visit *
                    </label>
                    <select
                      value={formData.serviceReason}
                      onChange={(e) => setFormData({ ...formData, serviceReason: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    >
                      {SERVICES_DATA.map((srv) => (
                        <option key={srv.id} value={srv.title}>
                          {srv.title} ({srv.category.toUpperCase()})
                        </option>
                      ))}
                      <option value="General Consultation & Checkup">General Consultation & Checkup</option>
                      <option value="Urgent Dental Emergency">Urgent Dental Emergency / Pain</option>
                    </select>
                    {errors.serviceReason && <p className="text-xs text-rose-600">{errors.serviceReason}</p>}
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Preferred Dentist
                    </label>
                    <select
                      value={formData.preferredDentist}
                      onChange={(e) => setFormData({ ...formData, preferredDentist: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    >
                      <option value="Any Available Specialist">Any Available Specialist (First Available)</option>
                      {DENTISTS_DATA.map((doc) => (
                        <option key={doc.id} value={doc.name}>
                          {doc.name} ({doc.specializations[0]})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              {/* Step 2: Schedule & Insurance */}
              {step === 2 && (
                <div className="space-y-5 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Preferred Date *
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                      {errors.preferredDate && <p className="text-xs text-rose-600">{errors.preferredDate}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                        Preferred Time Slot
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      >
                        <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                        <option value="Early Afternoon (12:00 PM - 3:00 PM)">Early Afternoon (12:00 PM - 3:00 PM)</option>
                        <option value="Late Afternoon (3:00 PM - 6:00 PM)">Late Afternoon (3:00 PM - 6:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Insurance Provider / Payment Option
                    </label>
                    <select
                      value={formData.insuranceProvider}
                      onChange={(e) => setFormData({ ...formData, insuranceProvider: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    >
                      <option value="Self-Pay / Private Pay">Self-Pay / Private Pay</option>
                      <option value="Aura Dental Membership Plan">Aura Dental Membership Plan</option>
                      {INSURANCE_PROVIDERS.map((ins) => (
                        <option key={ins} value={ins}>{ins}</option>
                      ))}
                      <option value="Other PPO Plan">Other PPO Plan</option>
                    </select>
                  </div>

                  <div className="bg-sky-50 border border-sky-200 rounded-xl p-3 text-xs text-sky-900 flex items-start gap-2">
                    <Shield className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>No insurance? Ask about our 0% CareCredit financing or in-office savings membership during your visit.</span>
                  </div>
                </div>
              )}

              {/* Step 3: Contact Info */}
              {step === 3 && (
                <div className="space-y-4 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">First Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Sarah"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                      {errors.firstName && <p className="text-xs text-rose-600">{errors.firstName}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Last Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Jenkins"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                      {errors.lastName && <p className="text-xs text-rose-600">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Email Address *</label>
                      <input
                        type="email"
                        placeholder="sarah@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                      {errors.email && <p className="text-xs text-rose-600">{errors.email}</p>}
                    </div>

                    <div className="space-y-1">
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                      />
                      {errors.phone && <p className="text-xs text-rose-600">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Additional Notes or Symptoms (Optional)</label>
                    <textarea
                      rows={2}
                      placeholder="Let us know if you have tooth sensitivity, dental anxiety, or specific goals..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={() => setStep((step - 1) as 1 | 2)}
                    className="px-4 py-2 rounded-xl border border-slate-300 text-slate-700 text-xs font-medium hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm transition-all shadow-sm cursor-pointer"
                  >
                    <span>Continue</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Request...</span>
                    ) : (
                      <>
                        <span>Submit Appointment Request</span>
                        <CheckCircle2 className="w-4 h-4 text-teal-400" />
                      </>
                    )}
                  </button>
                )}
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
