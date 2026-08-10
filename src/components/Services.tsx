import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Sparkles, ShoppingBag, Zap, CheckCircle2, Calculator, ArrowRight, Clock, Star } from 'lucide-react';
import { SERVICES_DATA, PRICING_CATEGORIES } from '../data/portfolioData';

interface ServicesProps {
  onSelectScopeForBooking: (selectedServices: string[], estimatedPrice: number) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectScopeForBooking }) => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('landing-page');
  const [selectedServices, setSelectedServices] = useState<string[]>(['landing-pages']);
  const [timelineUrgency, setTimelineUrgency] = useState<'standard' | 'expedited'>('standard');
  const [pageCount, setPageCount] = useState<number>(3);

  const activeCategory = PRICING_CATEGORIES.find((c) => c.id === activeCategoryId) || PRICING_CATEGORIES[0];

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'ShoppingBag': return <ShoppingBag className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Calculate estimated investment in calculator
  const baseCost = selectedServices.reduce((acc, serviceId) => {
    const s = SERVICES_DATA.find((item) => item.id === serviceId);
    return acc + (s ? s.startingPrice : 0);
  }, 0);

  const pageMultiplier = 1 + (pageCount - 1) * 0.08;
  const urgencyMultiplier = timelineUrgency === 'expedited' ? 1.25 : 1.0;
  const estimatedPrice = Math.round(baseCost * pageMultiplier * urgencyMultiplier);
  const estimatedWeeks = Math.max(1, Math.round(selectedServices.length * 1 + (pageCount > 5 ? 1 : 0)));

  return (
    <section id="services" className="py-16 md:py-24 bg-[#FAF8F5] relative border-t border-[#E9E9E9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-10 md:space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111]/[0.04] border border-[#E9E9E9] text-xs font-mono font-medium text-[#111111]">
              <Sparkles className="w-3.5 h-3.5 text-[#0A66FF]" />
              <span>TRANSPARENT PRICING &amp; PACKAGES</span>
            </div>

            <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight">
              Services &amp; Pricing Packages
            </h2>

            <p className="text-base md:text-lg text-[#666666] leading-relaxed">
              High-impact web design &amp; development tailored for small businesses, startups, and growing brands. Transparent rates with no hidden fees.
            </p>
          </div>

          {/* Category Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#111111]/[0.04] rounded-2xl border border-[#E9E9E9] self-start md:self-auto">
            {PRICING_CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategoryId;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategoryId(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-heading font-bold transition-all duration-300 ${
                    isActive
                      ? 'bg-[#111111] text-white shadow-md'
                      : 'text-[#666666] hover:text-[#111111] hover:bg-white/60'
                  }`}
                >
                  <span className={isActive ? 'text-[#0A66FF]' : 'text-[#666666]'}>
                    {getCategoryIcon(cat.iconName)}
                  </span>
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch"
          >
            {activeCategory.packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`group relative p-8 rounded-3xl bg-white border flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  pkg.popular
                    ? 'border-[#0A66FF] shadow-md ring-1 ring-[#0A66FF]/20'
                    : 'border-[#E9E9E9] hover:border-[#0A66FF]/40'
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3.5 py-1 rounded-full bg-[#0A66FF] text-white text-[11px] font-mono font-bold tracking-wider uppercase shadow-md">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Package Header */}
                  <div className="space-y-3 pb-6 border-b border-[#E9E9E9]">
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-extrabold text-xl text-[#111111]">
                        {pkg.name}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#111111]/[0.04] text-[11px] font-mono text-[#666666]">
                        {pkg.typicalDuration}
                      </span>
                    </div>

                    <div className="flex items-baseline gap-1">
                      <span className="font-heading font-extrabold text-4xl text-[#111111]">
                        ${pkg.price}
                      </span>
                      <span className="text-xs font-mono text-[#666666]">USD</span>
                    </div>

                    <p className="text-xs text-[#666666] leading-relaxed min-h-[36px]">
                      {pkg.shortDescription}
                    </p>
                  </div>

                  {/* Included Deliverables */}
                  <div className="space-y-3">
                    <div className="text-[11px] font-mono text-[#111111] uppercase tracking-wider font-semibold">
                      What's Included:
                    </div>
                    <ul className="space-y-2.5">
                      {pkg.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2.5 text-xs text-[#111111]">
                          <CheckCircle2 className="w-4 h-4 text-[#0F9D58] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Select Button */}
                <div className="pt-8 mt-6 border-t border-[#E9E9E9]">
                  <button
                    onClick={() => onSelectScopeForBooking([`${activeCategory.title} — ${pkg.name}`], pkg.price)}
                    className={`w-full py-3.5 px-6 rounded-xl font-heading font-bold text-xs md:text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${
                      pkg.popular
                        ? 'bg-[#0A66FF] text-white hover:bg-[#0052D6] shadow-md'
                        : 'bg-[#111111] text-white hover:bg-[#0A66FF]'
                    }`}
                  >
                    <span>Select {pkg.name} Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Interactive Scope & Investment Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-3xl bg-[#111111] text-[#FAF8F5] shadow-2xl border border-gray-800 space-y-8"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-800 pb-8">
            <div className="space-y-2 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-mono text-gray-300">
                <Calculator className="w-3.5 h-3.5 text-[#0A66FF]" />
                <span>INTERACTIVE OUTCOME CALCULATOR</span>
              </div>
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-white">
                Configure Your Growth Scope &amp; Investment
              </h3>
              <p className="text-sm text-gray-400">
                Select your desired project type and page count for a custom tailored estimate.
              </p>
            </div>

            {/* Total Estimate Card */}
            <div className="p-6 rounded-2xl bg-gray-900 border border-gray-800 min-w-[280px] space-y-2">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                Estimated Investment Range
              </div>
              <div className="text-3xl md:text-4xl font-heading font-extrabold text-[#0A66FF]">
                ${estimatedPrice.toLocaleString()} <span className="text-xs text-gray-400 font-sans font-normal">USD</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-gray-300 pt-1">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#0F9D58]" />
                  ~{estimatedWeeks} {estimatedWeeks === 1 ? 'Week' : 'Weeks'} Estimated Sprint
                </span>
              </div>
            </div>
          </div>

          {/* Calculator Controls Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Step 1: Select Service Types */}
            <div className="lg:col-span-7 space-y-4">
              <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                1. Select Service Type (Toggle to combine)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SERVICES_DATA.map((srv) => {
                  const isSelected = selectedServices.includes(srv.id);
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => toggleService(srv.id)}
                      className={`p-4 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#0A66FF]/20 border-[#0A66FF] text-white'
                          : 'bg-gray-900/60 border-gray-800 text-gray-400 hover:border-gray-700'
                      }`}
                    >
                      <div>
                        <div className="font-medium text-sm text-white">{srv.title}</div>
                        <div className="text-xs text-gray-400 font-mono">From ${srv.startingPrice.toLocaleString()}</div>
                      </div>
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center border text-xs ${
                        isSelected ? 'bg-[#0A66FF] border-[#0A66FF] text-white' : 'border-gray-700'
                      }`}>
                        {isSelected && '✓'}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Page Count & Urgency */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-gray-400 uppercase">2. Estimated Page Scope:</span>
                  <span className="text-white font-bold">{pageCount} Pages</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={pageCount}
                  onChange={(e) => setPageCount(parseInt(e.target.value))}
                  className="w-full accent-[#0A66FF] bg-gray-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-gray-500">
                  <span>1 Page</span>
                  <span>5 Pages</span>
                  <span>15 Pages</span>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-mono text-gray-400 uppercase tracking-wider block">
                  3. Project Pace:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setTimelineUrgency('standard')}
                    className={`py-3 px-4 rounded-xl text-xs font-medium border transition-all ${
                      timelineUrgency === 'standard'
                        ? 'bg-white text-[#111111] border-white'
                        : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-700'
                    }`}
                  >
                    Standard Pace
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimelineUrgency('expedited')}
                    className={`py-3 px-4 rounded-xl text-xs font-medium border transition-all ${
                      timelineUrgency === 'expedited'
                        ? 'bg-[#0A66FF] text-white border-[#0A66FF]'
                        : 'bg-gray-900 border-gray-800 text-gray-400 hover:border-gray-700'
                    }`}
                  >
                    Priority Sprint (+25%)
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  const serviceTitles = selectedServices.map((id) => {
                    const found = SERVICES_DATA.find((s) => s.id === id);
                    return found ? found.title : id;
                  });
                  onSelectScopeForBooking(serviceTitles, estimatedPrice);
                }}
                className="w-full py-4 rounded-xl bg-[#0A66FF] text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#0052D6] transition-all shadow-lg active:scale-98"
              >
                <span>Reserve This Growth Scope</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

