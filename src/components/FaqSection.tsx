import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { FAQS_DATA, CLINIC_INFO } from '../data/dentalData';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaqs = FAQS_DATA.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-mono uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>PATIENT QUESTIONS</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl text-slate-900 font-semibold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Find quick, clear answers regarding appointments, insurance coverage, first visits, and emergency protocols.
          </p>

          {/* Search Box */}
          <div className="relative max-w-md mx-auto pt-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-5" />
            <input
              type="text"
              placeholder="Search questions (e.g. insurance, cost, pain)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:ring-2 focus:ring-sky-500 focus:outline-none bg-[#FAF9F6]"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 overflow-hidden transition-all bg-[#FAF9F6]"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-bold text-sm sm:text-base text-slate-900">
                      {faq.question}
                    </span>
                    <div className={`p-1.5 rounded-full bg-slate-200 text-slate-700 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 bg-sky-100 text-sky-700' : ''}`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-slate-500 text-xs">
              No questions found matching "{searchQuery}". Call us directly at {CLINIC_INFO.phone}!
            </div>
          )}
        </div>

        {/* Help CTA */}
        <div className="p-6 rounded-2xl bg-sky-50 border border-sky-200 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-heading font-bold text-sm text-slate-900">Have a specific clinical or billing question?</h4>
            <p className="text-xs text-slate-600">Our knowledgeable patient coordinators are here to assist you.</p>
          </div>
          <a
            href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs transition-colors shrink-0"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call {CLINIC_INFO.phone}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
