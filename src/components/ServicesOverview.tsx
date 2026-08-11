import React, { useState } from 'react';
import { Sparkles, ArrowRight, Calendar, Check, Info } from 'lucide-react';
import { SERVICES_DATA } from '../data/dentalData';
import { ServiceItem } from '../types/dental';
import { ServiceDetailModal } from './ServiceDetailModal';

interface ServicesOverviewProps {
  onOpenBookingForService: (serviceId: string) => void;
}

export const ServicesOverview: React.FC<ServicesOverviewProps> = ({ onOpenBookingForService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'preventive', label: 'Preventive' },
    { id: 'general', label: 'General' },
    { id: 'cosmetic', label: 'Cosmetic' },
    { id: 'restorative', label: 'Restorative' },
    { id: 'orthodontics', label: 'Orthodontics' },
    { id: 'emergency', label: 'Emergency' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-[#FAF9F6] border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-800 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>COMPREHENSIVE CLINICAL CARE</span>
          </div>
          <h2 className="font-serif-title text-3xl sm:text-4xl lg:text-5xl text-slate-900 font-semibold tracking-tight">
            Complete Dental Care, Designed Around You
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            From routine preventive checkups to complex cosmetic makeovers and dental implants, we provide meticulous, gentle treatment using modern digital diagnostics.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden clinical-shadow hover:clinical-shadow-hover transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-mono uppercase tracking-wider">
                  {service.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-heading font-bold text-lg text-slate-900 group-hover:text-sky-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* Key Benefits Preview */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {service.benefits.slice(0, 2).map((b, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-700">
                      <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                      <span className="truncate">{b}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action CTAs */}
                <div className="pt-3 flex items-center justify-between gap-2 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-sky-600 transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Learn Details</span>
                  </button>

                  <button
                    onClick={() => onOpenBookingForService(service.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book Service</span>
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Drawer/Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceId) => {
          setSelectedService(null);
          onOpenBookingForService(serviceId);
        }}
      />
    </section>
  );
};
