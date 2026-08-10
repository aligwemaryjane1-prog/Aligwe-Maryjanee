import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, Monitor, Smartphone, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenBooking }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeDeviceView, setActiveDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  if (!project) return null;

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPosition(percent);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-[#111111]/70 backdrop-blur-md">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="relative w-full max-w-5xl my-auto bg-[#FAF8F5] text-[#111111] rounded-3xl border border-[#E9E9E9] shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="sticky top-0 z-20 px-6 py-4 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E9E9E9] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[#111111] text-[#FAF8F5] text-xs font-mono font-medium">
                {project.year}
              </span>
              <span className="text-xs font-mono text-[#666666] uppercase tracking-wider">
                {project.industry}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#111111]/[0.05] hover:bg-[#111111] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 md:p-10 overflow-y-auto space-y-10 flex-1">
            
            {/* Title & Short Summary */}
            <div className="space-y-4">
              <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-[#111111] tracking-tight">
                {project.title}
              </h2>
              <p className="text-lg text-[#666666] max-w-3xl leading-relaxed">
                {project.fullDescription}
              </p>

              {/* Technologies List */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-[#111111]/[0.04] border border-[#E9E9E9] text-xs font-medium text-[#111111]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 rounded-2xl bg-[#111111] text-[#FAF8F5]">
              {project.metrics.map((metric, i) => (
                <div key={i} className="space-y-1 p-2">
                  <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    {metric.label}
                  </div>
                  <div className="text-3xl font-heading font-extrabold text-[#0A66FF]">
                    {metric.value}
                  </div>
                  <div className="text-xs text-gray-300 font-medium flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-[#0F9D58]" />
                    <span>{metric.trend}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Device Frame Preview */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-bold text-lg text-[#111111] flex items-center gap-2">
                  <Monitor className="w-5 h-5 text-[#0A66FF]" />
                  <span>Device Frame Preview</span>
                </h3>

                <div className="flex items-center p-1 rounded-xl bg-[#111111]/[0.05] border border-[#E9E9E9]">
                  <button
                    onClick={() => setActiveDeviceView('desktop')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                      activeDeviceView === 'desktop'
                        ? 'bg-[#111111] text-white shadow-xs'
                        : 'text-[#666666] hover:text-[#111111]'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop</span>
                  </button>
                  <button
                    onClick={() => setActiveDeviceView('mobile')}
                    className={`px-3 py-1 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-all ${
                      activeDeviceView === 'mobile'
                        ? 'bg-[#111111] text-white shadow-xs'
                        : 'text-[#666666] hover:text-[#111111]'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile</span>
                  </button>
                </div>
              </div>

              {/* Realistic Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 p-3 sm:p-6 device-shadow">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-800 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                  </div>
                  <div className="px-4 py-1 rounded-md bg-gray-800 text-gray-300 font-mono text-[11px] truncate max-w-xs">
                    {project.liveUrl}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#0F9D58] font-mono">
                    <Zap className="w-3.5 h-3.5" />
                    <span>0.3s Load</span>
                  </div>
                </div>

                {/* Screen Image */}
                <div className="relative rounded-lg overflow-hidden bg-black aspect-[16/9] flex items-center justify-center">
                  <img
                    src={activeDeviceView === 'desktop' ? project.desktopMockup : project.mobileMockup}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Interactive Before vs After Comparison */}
            {project.beforeImage && project.afterImage && (
              <div className="space-y-4 pt-4 border-t border-[#E9E9E9]">
                <h3 className="font-heading font-bold text-lg text-[#111111] flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#0A66FF]" />
                  <span>Interactive Redesign Before &amp; After</span>
                </h3>
                <p className="text-sm text-[#666666]">
                  Drag the slider handle to compare the legacy website layout with the custom redesigned version.
                </p>

                <div
                  onMouseMove={handleSliderMove}
                  onTouchMove={handleSliderMove}
                  className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden cursor-ew-resize select-none border border-[#E9E9E9] shadow-md"
                >
                  {/* After Image */}
                  <img
                    src={project.afterImage}
                    alt="After Redesign"
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0A66FF] text-white text-xs font-mono font-bold">
                    AFTER REDESIGN
                  </span>

                  {/* Before Image Overlay */}
                  <div
                    className="absolute inset-y-0 left-0 overflow-hidden"
                    style={{ width: `${sliderPosition}%` }}
                  >
                    <img
                      src={project.beforeImage}
                      alt="Before Redesign"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover max-w-none"
                      style={{ width: '100%' }}
                    />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gray-900/80 text-white text-xs font-mono">
                      BEFORE
                    </span>
                  </div>

                  {/* Slider Handle */}
                  <div
                    className="absolute inset-y-0 w-1 bg-white shadow-lg pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-[#111111] shadow-xl border border-gray-300 flex items-center justify-center font-bold text-xs">
                      ↔
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Challenge vs Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-[#E9E9E9]">
              <div className="p-6 rounded-2xl bg-red-50/50 border border-red-100 space-y-2">
                <h4 className="font-heading font-bold text-red-900 text-sm uppercase tracking-wider">
                  The Business Challenge
                </h4>
                <p className="text-sm text-red-950 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-2">
                <h4 className="font-heading font-bold text-emerald-900 text-sm uppercase tracking-wider">
                  The Design &amp; Dev Solution
                </h4>
                <p className="text-sm text-emerald-950 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Deliverables List */}
            <div className="space-y-3">
              <h4 className="font-heading font-bold text-sm text-[#111111] uppercase tracking-wider">
                Key Deliverables Delivered
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm text-[#666666]">
                    <CheckCircle2 className="w-4 h-4 text-[#0F9D58] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Client Testimonial */}
            {project.testimonial && (
              <div className="p-6 md:p-8 rounded-2xl bg-[#111111]/[0.03] border border-[#E9E9E9] space-y-4">
                <p className="font-heading italic text-base md:text-lg text-[#111111] leading-relaxed">
                  "{project.testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={project.testimonial.avatar}
                    alt={project.testimonial.author}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-[#E9E9E9]"
                  />
                  <div>
                    <div className="font-heading font-bold text-xs text-[#111111]">
                      {project.testimonial.author}
                    </div>
                    <div className="text-[11px] text-[#666666]">
                      {project.testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Action Bar */}
          <div className="px-6 py-4 bg-[#FAF8F5] border-t border-[#E9E9E9] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#666666]">
              Looking for similar conversion results for your business?
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="flex-1 sm:flex-initial px-6 py-3 rounded-full bg-[#0A66FF] text-white font-medium text-xs flex items-center justify-center gap-2 hover:bg-[#0052D6] transition-colors shadow-sm"
              >
                <span>Start a Similar Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
