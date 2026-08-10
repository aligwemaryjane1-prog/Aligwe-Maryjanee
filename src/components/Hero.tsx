import React from 'react';
import { motion } from 'motion/react';
import { ArrowDownRight, Calendar, Sparkles, CheckCircle2, Star, Zap, Code2, Award, ChevronDown } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] pt-24 pb-12 md:pt-32 md:pb-16 flex flex-col justify-between overflow-hidden bg-[#FAFAF8]">
      {/* Abstract Background Elements & Soft Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#0F62FE]/[0.06] to-transparent blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[500px] h-[500px] rounded-full bg-[#111111]/[0.02] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#11111105_1px,transparent_1px),linear-gradient(to_bottom,#11111105_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* Left Column (40%): Refined Editorial Portrait Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-start relative"
          >
            {/* Reduced size wrapper so portrait occupies 40-45% max and sits in whitespace */}
            <div className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[350px] relative">
              
              {/* Soft Blue Glow & Shadow Aura behind Image */}
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-tr from-[#0F62FE]/20 via-[#0A66FF]/10 to-transparent blur-3xl -z-10 pointer-events-none" />

              {/* Main Portrait Frame with Floating Motion & 30px Radius */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-[30px] overflow-hidden bg-gradient-to-b from-[#F4F4F6] via-[#E5E7EB] to-[#D1D5DB] border border-[#EAEAEA] shadow-2xl shadow-[#0A66FF]/15 group"
              >
                <img
                  src="https://res.cloudinary.com/kwlyxhc8/image/upload/v1785896038/ChatGPT_Image_Jun_30__2026__06_49_06_PM-removebg-preview_vxrmre.png"
                  alt="Aligwe Maryjane - Premium Website Developer"
                  referrerPolicy="no-referrer"
                  className="w-full aspect-[4/5] object-cover object-top filter contrast-[1.03] brightness-[1.02] transition-transform duration-700 group-hover:scale-105"
                />

                {/* Gradient Overlay for Text Contrast at Base */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90" />

                {/* Name & Title Overlay */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-mono font-medium tracking-wide border border-white/30">
                    <Sparkles className="w-3 h-3 text-amber-300" />
                    <span>ALIGWE MARYJANE</span>
                  </div>
                  <h3 className="font-heading font-extrabold text-lg text-white tracking-tight">
                    Lead Website Developer &amp; Strategist
                  </h3>
                  <p className="text-[11px] text-gray-300 font-sans">
                    WordPress • Shopify • Elementor • Custom Platforms
                  </p>
                </div>

                {/* Top Right Availability Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/40 shadow-md flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#111111]">
                  <span className="w-2 h-2 rounded-full bg-[#0F9D58] animate-pulse" />
                  <span>Available Q3/Q4</span>
                </div>
              </motion.div>

              {/* Floating Experience Badge */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-5 -right-3 bg-white p-3.5 rounded-2xl border border-[#EAEAEA] shadow-xl flex items-center gap-3 max-w-[210px] z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-[#0F62FE]/10 text-[#0F62FE] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-xs">
                  <div className="font-heading font-extrabold text-[#111111] text-xs sm:text-sm">85+ Projects</div>
                  <div className="text-[#666666] font-mono text-[10px]">Delivered Worldwide</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Column (60%): Prominent Headline & Introduction */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-8">
            {/* Status Eyebrow Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#EAEAEA] text-xs font-mono font-medium text-[#111111] shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#0F62FE]" />
              <span>PREMIUM FREELANCE WEBSITE DEVELOPER</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.05] tracking-tight text-[#111111]"
            >
              Building websites that turn visitors into <span className="text-[#0F62FE] underline decoration-[#0F62FE]/25 underline-offset-8">paying customers</span>.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-sans text-lg md:text-xl text-[#666666] leading-relaxed max-w-2xl font-normal"
            >
              Premium Shopify stores, WordPress websites, and landing pages crafted with strategy, speed, and conversion in mind—helping brands stand out and grow with confidence.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              {/* Button 1: View My Work */}
              <button
                onClick={scrollToWork}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#111111] text-[#FAFAF8] font-medium text-base transition-all duration-300 hover:bg-[#0F62FE] hover:shadow-xl active:scale-98 cursor-pointer"
              >
                <span>View My Work</span>
                <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              </button>

              {/* Button 2: Book a Discovery Call */}
              <button
                onClick={onOpenBooking}
                className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white border border-[#EAEAEA] text-[#111111] font-medium text-base transition-all duration-300 hover:border-[#111111] hover:bg-[#111111]/[0.03] shadow-2xs cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-[#0F62FE]" />
                <span>Book a Discovery Call</span>
              </button>
            </motion.div>

            {/* Trust Metrics Grid Below Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-[#EAEAEA] grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              <div className="space-y-1">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-heading font-extrabold text-[#111111] text-base">85+</span>
                </div>
                <div className="text-xs font-mono text-[#666666]">Projects Completed</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-heading font-extrabold text-[#111111] text-base">99.8%</span>
                </div>
                <div className="text-xs font-mono text-[#666666]">Client Satisfaction</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 text-[#0F9D58]">
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span className="font-heading font-extrabold text-[#111111] text-base">Sub-1s</span>
                </div>
                <div className="text-xs font-mono text-[#666666]">Fast Delivery &amp; Speed</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-center gap-1 text-[#0F62FE]">
                  <Code2 className="w-3.5 h-3.5" />
                  <span className="font-heading font-extrabold text-[#111111] text-base">Modern</span>
                </div>
                <div className="text-xs font-mono text-[#666666]">WP, Shopify, React</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator at Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="pt-8 flex flex-col items-center justify-center gap-2 text-xs font-mono text-[#666666] select-none"
      >
        <span>SCROLL TO EXPLORE WORK</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-[#111111]" />
        </motion.div>
      </motion.div>
    </section>
  );
};
