import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Calendar, Clock, MapPin, Menu, X, ShieldAlert, ChevronDown, ChevronRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/dentalData';

interface NavbarProps {
  onOpenBookingModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown and mobile menu on route change
  useEffect(() => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [location]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const primaryNavLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Patient Resources', path: '/patient-information' },
    { label: 'Contact', path: '/contact' },
  ];

  const moreLinks = [
    { label: 'Technology', path: '/technology' },
    { label: 'Smile Gallery', path: '/smile-gallery' },
    { label: 'Patient Reviews', path: '/testimonials' },
    { label: 'Dental Blog', path: '/blog' },
    { label: 'Emergency Care', path: '/emergency-dentistry', isEmergency: true },
  ];

  const isMoreActive = moreLinks.some((link) => location.pathname === link.path);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Utility Bar */}
      <div className="bg-[#0F172A] text-slate-300 text-xs py-1.5 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs text-slate-300">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="truncate">{CLINIC_INFO.address.split(',')[0]}, San Francisco</span>
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Mon–Fri 8:30am–6:30pm</span>
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs">
            <Link
              to="/emergency-dentistry"
              className="inline-flex items-center gap-1 text-rose-300 hover:text-rose-200 font-medium transition-colors"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
              <span className="hidden sm:inline">Emergency Care</span>
              <span className="sm:hidden">Emergency</span>
            </Link>
            <span className="text-slate-700 font-light">|</span>
            <a
              href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
              className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5'
            : 'bg-white border-b border-slate-200/60 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-left group cursor-pointer shrink-0"
            aria-label="Aura Dental Studio Home"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-serif-title font-bold text-xl shadow-xs border border-slate-800 transition-transform duration-200 group-hover:scale-105">
              A
            </div>
            <div>
              <div className="font-heading font-bold text-base sm:text-lg text-slate-900 tracking-tight leading-none flex items-center gap-1">
                AURA <span className="font-light text-sky-600">DENTAL</span>
              </div>
              <div className="text-[9px] font-mono tracking-widest text-slate-500 uppercase mt-0.5">
                STUDIO &bull; SAN FRANCISCO
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {primaryNavLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-sky-700 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {/* "More" Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors inline-flex items-center gap-1 cursor-pointer ${
                  isMoreActive || dropdownOpen
                    ? 'bg-sky-50 text-sky-700 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
                aria-expanded={dropdownOpen}
              >
                <span>More</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-sky-600' : 'text-slate-400'}`} />
              </button>

              {dropdownOpen && (
                <div className="absolute top-full right-0 sm:left-0 mt-1 w-48 bg-white rounded-2xl shadow-xl border border-slate-200/90 py-2 z-50">
                  {moreLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 text-xs sm:text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-sky-50 text-sky-700 font-semibold'
                            : link.isEmergency
                            ? 'text-rose-600 hover:bg-rose-50 font-semibold'
                            : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <button
              onClick={() => {
                if (onOpenBookingModal) {
                  onOpenBookingModal();
                } else {
                  navigate('/book-appointment');
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-700 text-white text-sm font-semibold transition-all shadow-xs hover:shadow-md cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2 shrink-0">
            <button
              onClick={() => {
                if (onOpenBookingModal) {
                  onOpenBookingModal();
                } else {
                  navigate('/book-appointment');
                }
              }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-600 text-white text-xs font-semibold cursor-pointer shadow-xs"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-3 pb-1">
              Main Menu
            </div>
            {primaryNavLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-50 text-sky-700 font-semibold'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`
                }
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </NavLink>
            ))}

            <div className="pt-3 border-t border-slate-100 space-y-1">
              <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 px-3 pb-1">
                Explore More
              </div>
              {moreLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-sky-50 text-sky-700 font-semibold'
                        : link.isEmergency
                        ? 'text-rose-600 hover:bg-rose-50 font-semibold'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenBookingModal) {
                    onOpenBookingModal();
                  } else {
                    navigate('/book-appointment');
                  }
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-sky-600 text-white font-semibold text-sm shadow-xs cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border border-slate-200 text-slate-800 font-medium text-xs sm:text-sm hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Practice: {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
