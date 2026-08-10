import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { STATS_DATA } from '../data/portfolioData';

export const Statistics: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [counts, setCounts] = useState<{ [key: string]: number }>({
    conversion: 0,
    speed: 0,
    satisfaction: 0,
    delivery: 0,
  });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - (1 - progress) * (1 - progress);

      setCounts({
        projects: Math.round(easedProgress * 140),
        clients: Math.round(easedProgress * 95),
        years: Math.round(easedProgress * 5),
        satisfaction: parseFloat((easedProgress * 99.6).toFixed(1)),
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView]);

  return (
    <section ref={ref} className="py-14 md:py-20 bg-[#111111] text-[#FAF8F5] relative border-t border-b border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 divide-y sm:divide-y-0 sm:divide-x divide-gray-800">
          {STATS_DATA.map((stat, idx) => {
            const currentVal = counts[stat.id] !== undefined ? counts[stat.id] : stat.value;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`pt-6 sm:pt-0 ${idx > 0 ? 'sm:pl-8' : ''} space-y-2`}
              >
                <div className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight flex items-baseline gap-1">
                  <span className="text-[#0A66FF]">
                    {stat.prefix}{currentVal}
                  </span>
                  <span className="text-xl sm:text-2xl text-gray-400">{stat.suffix}</span>
                </div>

                <div className="font-heading font-bold text-base md:text-lg text-white">
                  {stat.label}
                </div>

                <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
