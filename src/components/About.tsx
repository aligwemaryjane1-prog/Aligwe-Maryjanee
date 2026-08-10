import React from 'react';
import { motion } from 'motion/react';
import { Award, Check, Sparkles, Target, Zap, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const coreValues = [
    {
      title: 'Trust-First User Experience',
      desc: 'Before a visitor converts into a high-paying client, they must trust your brand. Every typography pairing, spacing rhythm, and security signal is placed with intent.'
    },
    {
      title: 'High-Converting Architecture',
      desc: 'A beautiful website that does not convert is a missed business opportunity. I structure clear visual hierarchies and calls-to-action that guide visitors toward enquiry.'
    },
    {
      title: 'WordPress & Shopify Expertise',
      desc: 'Whether building tailored WooCommerce/Shopify storefronts or flexible WordPress CMS solutions, code is engineered for speed, security, and effortless content updates.'
    },
    {
      title: 'Direct Client Collaboration',
      desc: 'You work directly with me throughout every phase—from initial discovery and wireframes to final launch and post-launch optimization.'
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-[#FAF8F5] relative border-t border-[#E9E9E9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12 md:space-y-14">
        
        {/* Section Header */}
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111111]/[0.04] border border-[#E9E9E9] text-xs font-mono font-medium text-[#111111]">
            <Sparkles className="w-3.5 h-3.5 text-[#0A66FF]" />
            <span>BACKGROUND &amp; PHILOSOPHY</span>
          </div>

          <h2 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight">
            Crafting Digital Platforms That Build Trust
          </h2>
        </div>

        {/* Storytelling Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Studio Editorial Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative space-y-6"
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#E9E9E9] bg-gradient-to-b from-[#F4F4F6] via-[#E5E7EB] to-[#D1D5DB] shadow-xl group">
              <img
                src="https://res.cloudinary.com/kwlyxhc8/image/upload/v1785896038/ChatGPT_Image_Jun_30__2026__06_49_06_PM-removebg-preview_vxrmre.png"
                alt="Aligwe Maryjane — Website Designer & Developer"
                referrerPolicy="no-referrer"
                className="w-full aspect-[4/5] object-cover object-top filter contrast-[1.03] brightness-[1.02] transition-transform duration-700 group-hover:scale-103"
              />

              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E9E9E9] shadow-lg flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-base text-[#111111]">ALIGWE MARYJANE</div>
                  <div className="text-xs text-[#666666] font-mono">Website Designer &amp; Developer</div>
                </div>
                <div className="h-9 w-auto flex items-center justify-center shrink-0">
                  <img
                    src="/logo-dark.png"
                    alt="MJ Logo"
                    referrerPolicy="no-referrer"
                    className="h-8 w-auto object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Metric Credentials */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-[#E9E9E9] space-y-1">
                <div className="text-2xl font-heading font-extrabold text-[#111111]">99.8%</div>
                <div className="text-xs text-[#666666] font-medium">On-Time Project Delivery</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-[#E9E9E9] space-y-1">
                <div className="text-2xl font-heading font-extrabold text-[#0A66FF]">100%</div>
                <div className="text-xs text-[#666666] font-medium">Custom Responsive Code</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio & Core Operating Principles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-10"
          >
            {/* Biography */}
            <div className="space-y-4">
              <h3 className="font-heading font-bold text-2xl md:text-3xl text-[#111111]">
                About Aligwe Maryjane
              </h3>
              <p className="text-base md:text-lg text-[#666666] leading-relaxed">
                I am a Website Designer &amp; Developer specializing in creating premium WordPress, Shopify, and landing page experiences that help businesses build trust, increase enquiries, and convert more visitors into loyal customers.
              </p>
              <p className="text-base text-[#666666] leading-relaxed">
                Rather than treating web development as a commodity task, I view every project as a strategic revenue engine. By combining strategic UX copy, custom visual design, and clean high-speed development, I ensure your website represents your business at the highest standard.
              </p>
            </div>

            {/* Design Philosophy Quote Box */}
            <div className="p-6 md:p-8 rounded-3xl bg-[#111111] text-[#FAF8F5] space-y-3 shadow-xl">
              <div className="text-xs font-mono text-[#0A66FF] uppercase tracking-wider font-bold">
                MY DESIGN PHILOSOPHY
              </div>
              <blockquote className="font-heading font-bold text-xl md:text-2xl text-white leading-snug">
                "A truly great website is not measured by fancy animations alone—it is measured by the trust it establishes and the business revenue it generates."
              </blockquote>
            </div>

            {/* Core Principles Grid */}
            <div className="space-y-6">
              <h4 className="font-heading font-bold text-xl text-[#111111]">
                Core Operating Principles
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {coreValues.map((val, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-[#E9E9E9] space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-full bg-[#0A66FF]/10 text-[#0A66FF] flex items-center justify-center font-mono text-xs font-bold">
                        0{idx + 1}
                      </span>
                      <h5 className="font-heading font-bold text-base text-[#111111]">
                        {val.title}
                      </h5>
                    </div>
                    <p className="text-xs text-[#666666] leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
