import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'calendar' | 'details' | 'success'>('calendar');
  const [selectedSlot, setSelectedSlot] = useState<string>('2:00 PM');
  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    website: '',
    notes: '',
  });

  if (!isOpen) return null;

  const availableSlots = ['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM', '5:00 PM'];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('success');
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#0A66FF', '#111111', '#0F9D58', '#ffffff'],
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#111111]/75 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-white text-[#111111] rounded-3xl border border-[#E9E9E9] shadow-2xl overflow-hidden z-10 p-6 md:p-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#111111]/[0.05] hover:bg-[#111111] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {step === 'calendar' && (
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0A66FF]/10 text-[#0A66FF] text-xs font-mono font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>30-MIN WEBSITE STRATEGY CONSULTATION</span>
                </div>
                <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#111111]">
                  Book a Project Consultation
                </h3>
                <p className="text-xs md:text-sm text-[#666666]">
                  Select an available time slot to discuss your project scope, brand conversion goals, and target launch timeline directly with Aligwe Maryjane.
                </p>
              </div>

              {/* Time Slots Selection */}
              <div className="space-y-3">
                <label className="text-xs font-mono text-[#666666] uppercase tracking-wider block">
                  Select Time Slot (Tomorrow)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {availableSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      className={`py-3 px-3 rounded-xl text-xs font-mono font-medium border transition-all flex items-center justify-center gap-2 ${
                        selectedSlot === slot
                          ? 'bg-[#111111] text-white border-[#111111]'
                          : 'bg-[#FAF8F5] text-[#111111] border-[#E9E9E9] hover:border-[#111111]/40'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>{slot}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep('details')}
                className="w-full py-3.5 rounded-xl bg-[#0A66FF] text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#0052D6] transition-colors shadow-sm"
              >
                <span>Continue with {selectedSlot} Slot</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 'details' && (
            <form onSubmit={handleBookingSubmit} className="space-y-5">
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#0A66FF]">SELECTED: TOMORROW @ {selectedSlot}</div>
                <h3 className="font-heading font-bold text-2xl text-[#111111]">
                  Your Contact Information
                </h3>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-mono text-[#666666] block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rachel Adams"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E9E9E9] text-sm text-[#111111] focus:outline-none focus:border-[#0A66FF]"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-[#666666] block mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="rachel@brand.com"
                    value={bookingForm.email}
                    onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E9E9E9] text-sm text-[#111111] focus:outline-none focus:border-[#0A66FF]"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-[#666666] block mb-1">Current Website / URL (Optional)</label>
                  <input
                    type="text"
                    placeholder="https://yourbrand.com"
                    value={bookingForm.website}
                    onChange={(e) => setBookingForm({ ...bookingForm, website: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E9E9E9] text-sm text-[#111111] focus:outline-none focus:border-[#0A66FF]"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono text-[#666666] block mb-1">Brief Notes for Call</label>
                  <textarea
                    rows={2}
                    placeholder="Looking to build a WordPress / Shopify store..."
                    value={bookingForm.notes}
                    onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E9E9E9] text-sm text-[#111111] focus:outline-none focus:border-[#0A66FF] resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('calendar')}
                  className="px-4 py-3 rounded-xl bg-[#111111]/[0.05] text-[#111111] text-xs font-medium"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-xl bg-[#111111] text-white text-xs font-medium hover:bg-[#0A66FF] transition-colors"
                >
                  Confirm Strategy Consultation
                </button>
              </div>
            </form>
          )}

          {step === 'success' && (
            <div className="py-8 text-center space-y-5">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h3 className="font-heading font-extrabold text-2xl text-[#111111]">
                  Consultation Confirmed!
                </h3>
                <p className="text-xs md:text-sm text-[#666666] max-w-sm mx-auto">
                  A calendar invitation has been dispatched to <span className="font-bold text-[#111111]">{bookingForm.email}</span> for tomorrow at {selectedSlot}.
                </p>
              </div>

              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-medium hover:bg-[#0A66FF] transition-colors"
              >
                Done
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
