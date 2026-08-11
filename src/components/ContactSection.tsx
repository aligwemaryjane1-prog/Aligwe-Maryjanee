import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, Car, Navigation, ShieldAlert } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email || !contactData.message) {
      setError('Please fill in your name, email, and message.');
      return;
    }

    setError('');
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-mono uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-sky-400" />
            <span>VISIT OUR STUDIO</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold tracking-tight">
            Contact Aura Dental Studio
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            We are conveniently located in downtown San Francisco with validated garage parking and accessible public transit options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Studio Info & Interactive Map Card (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-[#FAF9F6] rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
              <h3 className="font-heading font-bold text-xl text-slate-900">Studio Location &amp; Hours</h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Address</div>
                    <div className="text-slate-600">{CLINIC_INFO.address}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Reception Phone</div>
                    <a href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`} className="text-sky-700 hover:underline">
                      {CLINIC_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Email Inquiries</div>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="text-sky-700 hover:underline">
                      {CLINIC_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-slate-200">
                  <div className="w-9 h-9 rounded-xl bg-slate-200 text-slate-800 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <div className="font-bold text-slate-900">Practice Hours</div>
                    {CLINIC_INFO.hours.map((h, idx) => (
                      <div key={idx} className="flex justify-between gap-4 text-xs text-slate-600">
                        <span>{h.days}:</span>
                        <span className="font-medium text-slate-900">{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Transit & Parking Details */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2 text-xs text-slate-600">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <Car className="w-4 h-4 text-sky-600" />
                  <span>Parking &amp; Access</span>
                </div>
                <p>Validated 2-hour parking available at Healthcare Blvd Garage (Entrance on 4th Street). Wheelchair accessible studio with elevator access.</p>
              </div>

            </div>

            {/* Interactive Map Visual Card */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-300 shadow-md h-64 bg-slate-900 text-white p-6 flex flex-col justify-between">
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-[11px] font-mono">
                  MAP VIEW &bull; DOWNTOWN SF
                </span>
                <Navigation className="w-5 h-5 text-sky-400" />
              </div>
              
              <div className="relative z-10 space-y-1">
                <div className="font-bold text-lg text-white">450 Healthcare Blvd, Suite 300</div>
                <div className="text-xs text-slate-300">San Francisco, CA 94108</div>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(CLINIC_INFO.address)}`}
                target="_blank"
                rel="noreferrer"
                className="relative z-10 inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
              >
                <span>Open Directions in Google Maps</span>
              </a>
            </div>

          </div>

          {/* Right: Contact Form (Col 7) */}
          <div className="lg:col-span-7 bg-[#FAF9F6] rounded-3xl p-6 sm:p-10 border border-slate-200 clinical-shadow space-y-6">
            <div>
              <h3 className="font-heading font-bold text-2xl text-slate-900">Send Us a Message</h3>
              <p className="text-xs text-slate-600">Have a non-urgent question? Fill out the form below and our team will respond within 24 hours.</p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-teal-600 mx-auto" />
                <h4 className="font-heading font-bold text-xl text-slate-900">Message Sent Successfully!</h4>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you for reaching out to Aura Dental Studio. A care team member will respond to your inquiry shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setContactData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-5 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs">
                    {error}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Your Full Name *</label>
                    <input
                      type="text"
                      placeholder="Jane Doe"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Subject</label>
                    <select
                      value={contactData.subject}
                      onChange={(e) => setContactData({ ...contactData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Insurance Question">Insurance Question</option>
                      <option value="Cosmetic Consultation">Cosmetic Consultation</option>
                      <option value="Feedback / Review">Feedback / Review</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider">Your Message *</label>
                  <textarea
                    rows={4}
                    placeholder="How can we assist you today?"
                    value={contactData.message}
                    onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-white"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-all shadow-md cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4 text-sky-400" />
                  <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
