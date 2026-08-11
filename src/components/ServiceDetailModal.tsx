import React from 'react';
import { X, Clock, CheckCircle2, AlertCircle, Calendar, HelpCircle, ChevronRight, Sparkles, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../types/dental';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onBookService }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-full max-w-3xl overflow-hidden relative my-8">
        
        {/* Header Image & Title Banner */}
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 transition-colors cursor-pointer"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-mono uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{service.category.toUpperCase()} DENTISTRY</span>
            </div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight">{service.title}</h2>
            {service.duration && (
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>Estimated Duration: {service.duration}</span>
              </div>
            )}
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
          
          {/* Overview */}
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-lg text-slate-900">Treatment Overview</h3>
            <p className="text-sm text-slate-600 leading-relaxed">{service.fullDescription}</p>
          </div>

          {/* Key Benefits */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-base text-slate-900">Key Patient Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Candidate For */}
          <div className="space-y-2">
            <h3 className="font-heading font-bold text-base text-slate-900">Who This Treatment Is For</h3>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-600">
              {service.candidateFor.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Step-by-Step Process */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-base text-slate-900">Treatment Step-by-Step Process</h3>
            <div className="space-y-3">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl border border-slate-200 bg-white">
                  <div className="w-6 h-6 rounded-full bg-sky-100 text-sky-700 font-bold text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900">{step.title}</div>
                    <div className="text-xs text-slate-600">{step.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQs */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="font-heading font-bold text-base text-slate-900">Frequently Asked Questions</h3>
              <div className="space-y-2">
                {service.faqs.map((faq, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1">
                    <div className="font-bold text-slate-900 flex items-center gap-1.5">
                      <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
                      <span>{faq.question}</span>
                    </div>
                    <div className="text-slate-600 pl-5">{faq.answer}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Medical Disclaimer */}
          <div className="p-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-[11px] text-amber-900 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>Clinical Notice: Individual treatment plans are customized following a comprehensive clinical examination and diagnostic imaging. Results vary based on individual oral anatomy.</span>
          </div>

        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500">
            Have questions? Our care team is available at <span className="font-medium text-slate-900">(555) 234-8900</span>
          </div>
          <button
            onClick={() => {
              onClose();
              onBookService(service.id);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm transition-all shadow-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Request {service.title} Appointment</span>
          </button>
        </div>

      </div>
    </div>
  );
};
