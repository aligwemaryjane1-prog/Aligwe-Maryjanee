import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data/dentalData';
import { Sparkles, Calendar, ArrowLeft, CheckCircle2, ShieldCheck, Clock, HelpCircle, ArrowRight, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface ServiceDetailPageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ onOpenBooking }) => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = SERVICES_DATA.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-32 pb-24 max-w-3xl mx-auto px-4 text-center space-y-6">
        <h1 className="font-serif-title text-3xl font-bold text-slate-900">Service Not Found</h1>
        <p className="text-slate-600">The requested dental service page does not exist or may have been relocated.</p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-600 text-white font-semibold text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Browse All Services</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 space-y-16">
      {/* Service Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sky-300 hover:text-white text-xs font-semibold uppercase tracking-wider transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Dental Services</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-900/80 border border-sky-700/60 text-sky-300 text-[11px] font-mono uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>{service.category} Dentistry</span>
              </div>
              <h1 className="font-serif-title text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
                {service.title}
              </h1>
              <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-sans leading-relaxed">
                {service.shortDescription}
              </p>

              {service.duration && (
                <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700">
                  <Clock className="w-3.5 h-3.5 text-sky-400" />
                  <span>Typical Treatment Duration: {service.duration}</span>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
              <button
                onClick={() => onOpenBooking(service.id)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-base transition-all shadow-lg hover:shadow-xl cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book This Treatment</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="text-xs text-slate-300 hover:text-white flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400" />
                <span>Questions? Call {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Overview & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif-title text-2xl sm:text-3xl text-slate-900 font-semibold">
              Clinical Procedure Overview
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans whitespace-pre-line">
              {service.fullDescription}
            </p>

            {/* Candidate Suitability */}
            <div className="pt-4 space-y-3">
              <h3 className="font-heading font-bold text-slate-900 text-lg">Who Is This Treatment Ideal For?</h3>
              <div className="space-y-2">
                {service.candidateFor.map((candidate, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                    <span>{candidate}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="p-6 bg-slate-900 text-white space-y-3">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <ShieldCheck className="w-5 h-5" />
                  <span>Aura Quality Guarantee</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Performed using advanced digital diagnostic imaging, low-dose radiation, and premium biocompatible materials in our sterile studio environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Benefits Grid */}
        <div className="bg-sky-50/60 rounded-3xl p-8 sm:p-12 border border-sky-100/80 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif-title text-2xl sm:text-3xl text-slate-900 font-semibold">
              Key Patient Benefits
            </h2>
            <p className="text-slate-600 text-sm">
              Why our patients choose this specialized treatment at Aura Dental Studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-sky-100 shadow-xs flex items-start gap-4">
                <div className="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center font-bold shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 text-base">{benefit}</h4>
                  <p className="text-xs text-slate-500 mt-1">Delivered with gentle precision and maximum tooth structure preservation.</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step by Step Protocol */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-serif-title text-2xl sm:text-3xl text-slate-900 font-semibold">
              Step-By-Step Treatment Protocol
            </h2>
            <p className="text-slate-600 text-sm">
              What to expect during your appointment from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs relative space-y-3">
                <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-mono font-bold text-sm flex items-center justify-center">
                  0{idx + 1}
                </div>
                <h4 className="font-bold text-slate-900 text-base">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specific Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 className="font-serif-title text-2xl font-semibold text-slate-900">
                Frequently Asked Questions About {service.title}
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-sky-600 shrink-0" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 pl-6 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA Banner */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto space-y-6 shadow-xl relative overflow-hidden">
          <div className="space-y-3 max-w-2xl mx-auto">
            <h3 className="font-serif-title text-2xl sm:text-4xl font-semibold">Ready to Schedule Your Treatment?</h3>
            <p className="text-slate-300 text-sm">
              Our clinical care coordinators are standing by to confirm your preferred date and time slot.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking(service.id)}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Online</span>
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-medium text-sm transition-all"
            >
              <span>Contact Dental Practice</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
