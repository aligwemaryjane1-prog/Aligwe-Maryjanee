import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data/dentalData';
import { Sparkles, Calendar, ArrowRight, ShieldCheck, CheckCircle2, Search, Filter } from 'lucide-react';
import { InsurancePaymentSection } from '../components/InsurancePaymentSection';
import { FaqSection } from '../components/FaqSection';

interface ServicesPageProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();

  const categories = [
    { id: 'all', label: 'All Dental Services' },
    { id: 'preventive', label: 'Preventive Care' },
    { id: 'cosmetic', label: 'Cosmetic Dentistry' },
    { id: 'restorative', label: 'Restorative Care' },
    { id: 'orthodontics', label: 'Invisalign & Ortho' },
    { id: 'emergency', label: 'Emergency Dentistry' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-24 pb-16 space-y-16">
      {/* Services Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-900/60 border border-sky-700/50 text-sky-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>Comprehensive Dental Directory</span>
          </div>
          <h1 className="font-serif-title text-4xl sm:text-5xl font-semibold tracking-tight">
            Advanced Clinical <span className="italic font-normal text-sky-300">Services</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg font-sans leading-relaxed">
            Explore our specialized dental treatments, ranging from conservative routine prevention to full porcelain cosmetic transformations and 3D implantology.
          </p>
        </div>
      </section>

      {/* Filter and Search controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100/80 text-slate-700 hover:bg-slate-200/70'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative shrink-0 w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
            />
          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 space-y-4">
            <p className="text-slate-500 font-medium">No dental services matched your filter or search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-sky-600 text-white text-xs font-semibold rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-100">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-mono tracking-wider uppercase">
                      {service.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-heading font-bold text-xl text-slate-900 group-hover:text-sky-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                      {service.shortDescription}
                    </p>

                    <div className="pt-2 space-y-1.5">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                          <span className="truncate">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100/80 mt-4 flex items-center justify-between gap-2">
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sky-700 font-semibold text-xs sm:text-sm hover:text-sky-800 transition-colors"
                  >
                    <span>View Service Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="p-2 rounded-xl bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white transition-all text-xs font-medium cursor-pointer"
                    title="Book this service"
                  >
                    <Calendar className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Insurance & Payment Section */}
      <InsurancePaymentSection onOpenBooking={onOpenBooking} />

      {/* FAQ */}
      <FaqSection />
    </div>
  );
};
