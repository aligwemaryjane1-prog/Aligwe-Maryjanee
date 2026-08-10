import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2, Copy, Sparkles, Mail, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactProps {
  prefilledScope?: string[];
  prefilledBudget?: number;
}

export const Contact: React.FC<ContactProps> = ({ prefilledScope, prefilledBudget }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'WordPress & Custom Website',
    budget: '$249 - $499',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (prefilledScope && prefilledScope.length > 0) {
      setFormData((prev) => ({
        ...prev,
        projectType: prefilledScope.join(' + '),
        budget: prefilledBudget ? `$${prefilledBudget.toLocaleString()}` : prev.budget,
        message: `Hello Aligwe, I would like to inquire about building a website with scope: ${prefilledScope.join(', ')}.`,
      }));
    }
  }, [prefilledScope, prefilledBudget]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@aligwemaryjane.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger celebration confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#0A66FF', '#111111', '#0F9D58', '#ffffff'],
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAF8F5] relative border-t border-[#E9E9E9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10 md:space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Large Heading & Studio Direct Links */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111]/[0.04] border border-[#E9E9E9] text-xs font-mono font-medium text-[#111111]">
                <Sparkles className="w-3.5 h-3.5 text-[#0A66FF]" />
                <span>START A CONVERSATION</span>
              </div>

              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#111111] tracking-tight leading-[1.05]">
                Let's Build Something High Impact
              </h2>

              <p className="text-base text-[#666666] leading-relaxed">
                Have a new project, an inquiry, or looking to redesign an existing website for higher conversion? Send a message and Aligwe will reply within 24 hours.
              </p>
            </div>

            {/* Direct Contact Options */}
            <div className="space-y-4 pt-4 border-t border-[#E9E9E9]">
              {/* Direct Email Copy Box */}
              <div className="p-5 rounded-2xl bg-white border border-[#E9E9E9] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0A66FF]/10 text-[#0A66FF] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-[#666666] uppercase">Direct Studio Email</div>
                    <div className="font-heading font-bold text-sm text-[#111111]">
                      hello@aligwemaryjane.com
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-[#111111]/[0.05] hover:bg-[#111111] hover:text-white transition-colors text-xs font-mono font-medium flex items-center gap-1.5"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Status & Availability */}
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 flex items-center gap-3 text-xs text-emerald-950 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-[#0F9D58] animate-pulse shrink-0" />
                <span>Currently accepting 2 new client projects for Q3/Q4 delivery.</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="p-8 md:p-12 rounded-3xl bg-white border border-[#E9E9E9] shadow-xl">
              {isSubmitted ? (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-2xl text-[#111111]">
                      Inquiry Received!
                    </h3>
                    <p className="text-sm text-[#666666] max-w-md mx-auto">
                      Thank you for reaching out, <span className="font-bold text-[#111111]">{formData.name}</span>. Aligwe Maryjane has received your project details and will reply within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-2.5 rounded-full bg-[#111111] text-white text-xs font-medium hover:bg-[#0A66FF] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-medium text-[#111111] uppercase tracking-wider block">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Sarah Jenkins"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#E9E9E9] text-sm text-[#111111] focus:outline-none focus:border-[#0A66FF] transition-colors"
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs font-mono font-medium text-[#111111] uppercase tracking-wider block">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="sarah@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#E9E9E9] text-sm text-[#111111] focus:outline-none focus:border-[#0A66FF] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Project Service Needed */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-medium text-[#111111] uppercase tracking-wider block">
                      Desired Business Goal / Service
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#E9E9E9] text-sm text-[#111111] focus:outline-none focus:border-[#0A66FF] transition-colors"
                    >
                      <option value="WordPress & Custom Website">WordPress Development &amp; Custom Site</option>
                      <option value="Shopify E-Commerce Store">Shopify Storefront Build</option>
                      <option value="High-Converting Landing Page">High-Converting Landing Page</option>
                      <option value="Increase Trust & Redesign">Complete Website Redesign</option>
                      <option value="Lead Generation Architecture">Lead Generation Architecture</option>
                    </select>
                  </div>

                  {/* Budget Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-medium text-[#111111] uppercase tracking-wider block">
                      Estimated Investment Range
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {['$249 - $499', '$500 - $999', '$1,000 - $1,499', '$1,500 - $2,500'].map((range) => (
                        <button
                          type="button"
                          key={range}
                          onClick={() => setFormData({ ...formData, budget: range })}
                          className={`py-2.5 px-3 rounded-xl text-xs font-mono font-medium border transition-all ${
                            formData.budget === range
                              ? 'bg-[#111111] text-white border-[#111111]'
                              : 'bg-[#FAF8F5] text-[#666666] border-[#E9E9E9] hover:border-[#111111]/40'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-medium text-[#111111] uppercase tracking-wider block">
                      Project Goals &amp; Overview *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell Aligwe about your business, current website challenges, target audience, and desired timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-[#FAF8F5] border border-[#E9E9E9] text-sm text-[#111111] focus:outline-none focus:border-[#0A66FF] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-[#111111] text-[#FAF8F5] font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#0A66FF] transition-all duration-300 shadow-lg active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        <span>Sending Brief to Aligwe Maryjane...</span>
                      </span>
                    ) : (
                      <>
                        <span>Start Project Inquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
