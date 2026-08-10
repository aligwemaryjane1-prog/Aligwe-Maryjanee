import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Utensils, HeartPulse, Building2, Crown, Sparkles, Cpu, GraduationCap, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';

export const IndustryStorySection: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState('restaurant');

  const industries = [
    {
      id: 'restaurant',
      name: 'Restaurant',
      tagline: 'Culinary Experiences & Table Reservations',
      icon: Utensils,
      color: 'from-amber-500/10 to-orange-500/5',
      accentColor: '#D97706',
      heroImage: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785948270/Experiencia_del_cliente_jrpaw1.jpg',
      websiteTitle: 'AURA — Michelin-Star Dining Experience',
      features: ['Table Booking Integration', 'Interactive Tasting Menu', 'Ambiance Gallery', 'Private Event Enquiries'],
      conversionLift: '+142% Online Reservations',
      challenge: 'High phone enquiry volume creating operational bottlenecks during service hours.',
      solution: 'Designed a mobile-first digital menu and instant reservation portal powered by custom WordPress.'
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      tagline: 'Medical Trust & Patient Scheduling',
      icon: HeartPulse,
      color: 'from-emerald-500/10 to-teal-500/5',
      accentColor: '#0F9D58',
      heroImage: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785946716/imageye___-_imgi_117_d5d813242670151.698f76a61c6f5_1_ftytsq.png',
      websiteTitle: 'Apex Health — Specialist Medical Practice',
      features: ['HIPAA Compliant Booking', 'Physician Directory', 'Patient Trust Badges', 'Telehealth Portal'],
      conversionLift: '+184% Patient Booking Rate',
      challenge: 'Patient confusion over services and low mobile booking retention.',
      solution: 'Rebuilt with clear service taxonomy, verified patient reviews, and 1-click appointment booking.'
    },
    {
      id: 'realestate',
      name: 'Real Estate',
      tagline: 'Luxury Property & Commercial Listings',
      icon: Building2,
      color: 'from-blue-500/10 to-indigo-500/5',
      accentColor: '#0A66FF',
      heroImage: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785946849/imageye___-_imgi_106_446039241737031.698f76a75506d_tthsb4.png',
      websiteTitle: 'Vance & Co — Premier Real Estate Estate',
      features: ['4K Video Tour Embeds', 'Interactive Floorplan Viewer', 'Agent Portfolio Authority', 'VIP Buyer Capture'],
      conversionLift: '+210% High-Net-Worth Inquiries',
      challenge: 'Static property listing photos failing to justify $5M+ estate asking prices.',
      solution: 'Editorial property showcases with full-width video reels and instant private walkthrough scheduling.'
    },
    {
      id: 'luxury',
      name: 'Luxury Brand',
      tagline: 'High-End Horology & Fashion Retail',
      icon: Crown,
      color: 'from-purple-500/10 to-pink-500/5',
      accentColor: '#9333EA',
      heroImage: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785946778/ChatGPT_Image_Jul_16_2026_03_04_12_PM_jux5sz.png',
      websiteTitle: 'Maison Horlogère — Bespoke Timepieces',
      features: ['Custom 3D Product Configurator', 'Storytelling Editorial Layout', 'Private Concierge Chat', 'Sub-1s Image Loading'],
      conversionLift: '+42% Average Order Value',
      challenge: 'E-commerce store lacked the prestige of their physical Geneva flagship boutique.',
      solution: 'Bespoke Shopify store with luxury editorial typography, high-res zoom, and concierge checkout.'
    },
    {
      id: 'beauty',
      name: 'Beauty',
      tagline: 'Skincare & Organic Cosmetics',
      icon: Sparkles,
      color: 'from-rose-500/10 to-pink-500/5',
      accentColor: '#E11D48',
      heroImage: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785980699/18_Skin_Care_Organization_Ideas_That_Will_Make_Your_Vanity_Look_Expensive_h0zfod.jpg',
      websiteTitle: 'Botanica Skin — Pure Organic Skincare',
      features: ['Subcription Auto-Reorder', 'Shade Match Quiz', 'Social Proof Reviews', 'Shopify One-Page Checkout'],
      conversionLift: '+165% Subscription Retention',
      challenge: 'Low recurring buyer retention and high checkout drop-off rates on mobile.',
      solution: 'Shopify storefront built with subscription re-ordering and interactive skin routine finder.'
    },
    {
      id: 'technology',
      name: 'Technology',
      tagline: 'SaaS Platforms & AI Startups',
      icon: Cpu,
      color: 'from-cyan-500/10 to-blue-500/5',
      accentColor: '#0284C7',
      heroImage: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785947634/tmaXOHUMIGlg2uCVFHkBDqMdUs_c4jivf.png',
      websiteTitle: 'Synthetix — Developer AI Platform',
      features: ['Interactive Code Snippets', 'Live Product Tour', 'Customer ROI Calculator', 'High-Converting Trial Form'],
      conversionLift: '-58% Cost Per Acquisition',
      challenge: 'Technical product copy was confusing non-developer decision makers.',
      solution: 'Conversion-optimized landing page with visual feature breakdowns and sub-300ms page speeds.'
    },
    {
      id: 'education',
      name: 'Education',
      tagline: 'Online Academies & Executive Cohorts',
      icon: GraduationCap,
      color: 'from-amber-500/10 to-yellow-500/5',
      accentColor: '#CA8A04',
      heroImage: 'https://res.cloudinary.com/kwlyxhc8/image/upload/v1785979533/Form_One_English_Language_For_Secondary_Schools_Students_Book_With_Grammar_Exercises_And_Answers1_gybier.jpg',
      websiteTitle: 'Mastery Academy — Executive Leadership',
      features: ['Curriculum Video Syllabus', 'Student Outcome Metrics', 'Cohort Application Funnel', 'Alumni Wall of Trust'],
      conversionLift: '+190% Cohort Enrollments',
      challenge: 'Low application conversion for premium $3,500 executive masterclasses.',
      solution: 'High-authority landing page highlighting student outcomes, alumni video testimonials, and application funnels.'
    }
  ];

  const current = industries.find((i) => i.id === activeIndustry) || industries[0];

  return (
    <section id="industries" className="py-16 md:py-22 bg-[#FAF8F5] border-t border-[#E9E9E9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="max-w-3xl mb-10 md:mb-12 space-y-4">
          <div className="text-xs font-mono uppercase tracking-widest text-[#0A66FF] font-semibold">
            VERSATILITY ACROSS SECTORS
          </div>
          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight">
            Every Business Has A Story.
          </h2>
          <p className="font-sans text-lg md:text-xl text-[#666666] leading-relaxed">
            Whether you run a luxury horology brand, healthcare clinic, SaaS platform, or fine dining restaurant, thoughtful website design adapts to your unique customer journey.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2.5 mb-8 md:mb-10 border-b border-[#E9E9E9] pb-6">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isActive = ind.id === activeIndustry;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveIndustry(ind.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-heading font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#111111] text-[#FAF8F5] shadow-md scale-102'
                    : 'bg-white text-[#666666] border border-[#E9E9E9] hover:border-[#111111] hover:text-[#111111]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#0A66FF]' : 'text-gray-400'}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Industry Story Preview Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl border border-[#E9E9E9] p-8 md:p-12 device-shadow">
          
          {/* Left Column: Story Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111]/[0.04] border border-[#E9E9E9] text-xs font-mono text-[#111111]">
              <current.icon className="w-3.5 h-3.5 text-[#0A66FF]" />
              <span>{current.tagline}</span>
            </div>

            <h3 className="font-heading font-bold text-3xl md:text-4xl text-[#111111]">
              {current.websiteTitle}
            </h3>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E9E9E9] space-y-2">
              <div className="text-xs font-mono uppercase text-[#666666]">THE BUSINESS CHALLENGE</div>
              <p className="text-sm font-sans text-[#111111]">{current.challenge}</p>
            </div>

            <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E9E9E9] space-y-2">
              <div className="text-xs font-mono uppercase text-[#0A66FF]">THE DESIGN &amp; DEV SOLUTION</div>
              <p className="text-sm font-sans text-[#111111]">{current.solution}</p>
            </div>

            {/* Strategic Features Grid */}
            <div className="space-y-3 pt-2">
              <div className="text-xs font-mono uppercase text-[#666666]">STRATEGIC EXPERIENCE FEATURES</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-sans text-[#111111]">
                    <CheckCircle2 className="w-4 h-4 text-[#0F9D58] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlight Metric */}
            <div className="pt-4 border-t border-[#E9E9E9] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-[#666666] block">MEASURABLE OUTCOME</span>
                <span className="font-heading font-extrabold text-2xl text-[#0F9D58]">
                  {current.conversionLift}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Project Preview Image */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-[#E9E9E9] overflow-hidden device-shadow bg-gray-900">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.id}
                    src={current.heroImage}
                    alt={current.name}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
