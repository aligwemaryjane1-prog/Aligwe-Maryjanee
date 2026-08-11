import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, MapPin, Phone, Mail, Instagram, Facebook, Linkedin, Twitter, Calendar } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface FooterProps {
  onOpenBookingModal?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#0F172A] text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* 4-COLUMN MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          
          {/* COLUMN 1 — BRAND */}
          <div className="space-y-4">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-sky-600/20 border border-sky-500/30 text-sky-400 flex items-center justify-center font-bold group-hover:bg-sky-600/30 transition-colors">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <div className="font-serif-title font-bold text-white text-xl tracking-tight">
                  Aura Dental Studio
                </div>
                <div className="text-[10px] text-sky-400 font-mono tracking-wider uppercase">
                  San Francisco &bull; Dental Excellence
                </div>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed">
              Aura Dental Studio provides state-of-the-art 3D digital dentistry, comprehensive oral health care, and custom cosmetic smile restorations in a calm, patient-centered San Francisco studio.
            </p>
            <div className="pt-1">
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs transition-colors shadow-xs"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book Appointment</span>
              </Link>
            </div>
          </div>

          {/* COLUMN 2 — QUICK LINKS / SERVICES */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/patient-information" className="hover:text-white transition-colors">
                  Patient Resources
                </Link>
              </li>
              <li>
                <Link to="/patient-information" className="hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3 — OPERATING HOURS */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
              Operating Hours
            </h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex justify-between items-center border-b border-slate-800/80 pb-1.5">
                <span className="font-medium text-slate-400">Monday</span>
                <span className="font-mono text-slate-200">8:30 AM &ndash; 6:30 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800/80 pb-1.5">
                <span className="font-medium text-slate-400">Tuesday</span>
                <span className="font-mono text-slate-200">8:30 AM &ndash; 6:30 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800/80 pb-1.5">
                <span className="font-medium text-slate-400">Wednesday</span>
                <span className="font-mono text-slate-200">8:30 AM &ndash; 6:30 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800/80 pb-1.5">
                <span className="font-medium text-slate-400">Thursday</span>
                <span className="font-mono text-slate-200">8:30 AM &ndash; 6:30 PM</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-800/80 pb-1.5">
                <span className="font-medium text-slate-400">Friday</span>
                <span className="font-mono text-slate-200">8:30 AM &ndash; 6:30 PM</span>
              </div>
              <div className="flex justify-between items-center pt-0.5 text-xs">
                <span className="font-medium text-slate-400">Sat &ndash; Sun</span>
                <span className="text-rose-400 font-semibold">Emergency Only</span>
              </div>
            </div>
          </div>

          {/* COLUMN 4 — CONTACT & LOCATION */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-sky-400">
              Contact &amp; Location
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-white transition-colors">
                  {CLINIC_INFO.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* SUBTLE HORIZONTAL DIVIDER */}
        <div className="border-t border-slate-800" />

        {/* BOTTOM FOOTER ROW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Aura Dental Studio. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-4 text-slate-400">
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-slate-700">&bull;</span>
              <Link to="/terms-of-service" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>

            <div className="flex items-center gap-2.5 pl-2 border-l border-slate-800">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-sky-600 text-slate-300 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-sky-600 text-slate-300 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-sky-600 text-slate-300 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-sky-600 text-slate-300 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
