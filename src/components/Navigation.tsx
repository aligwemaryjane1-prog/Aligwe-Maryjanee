import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Calendar, Moon, Sun } from 'lucide-react';

interface NavigationProps {
  onOpenBooking: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkPreview, setIsDarkPreview] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkPreview((prev) => !prev);
    const root = document.documentElement;
    root.classList.toggle('dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Detect active section
      const sections = ['home', 'work', 'industries', 'services', 'process', 'about', 'testimonials', 'insights', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Projects', href: '#work' },
    { name: 'Case Studies', href: '#industries' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'About', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'py-3 bg-[#FAF8F5]/90 dark:bg-[#111111]/90 backdrop-blur-md border-b border-[#E9E9E9]/90 dark:border-gray-800/90 shadow-2xs'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center shrink-0 transition-transform duration-300 hover:scale-[1.02]"
          aria-label="MJ - Maryjane Web Designer & Developer"
        >
          <img
            src="/logo-dark.png"
            alt="MJ - Maryjane Web Designer & Developer"
            referrerPolicy="no-referrer"
            className="h-8 sm:h-9 md:h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden xl:flex items-center gap-1 bg-[#111111]/[0.03] dark:bg-gray-900 p-1.5 rounded-full border border-[#E9E9E9] dark:border-gray-800">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-[#111111] dark:bg-[#0A66FF] text-[#FAF8F5] shadow-xs'
                    : 'text-[#666666] dark:text-gray-300 hover:text-[#111111] dark:hover:text-white hover:bg-[#111111]/[0.05] dark:hover:bg-gray-800'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Dark Mode Toggle */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-[#111111]/[0.04] dark:bg-gray-800 text-[#111111] dark:text-white border border-[#E9E9E9] dark:border-gray-700 hover:bg-[#111111]/[0.08] transition-colors"
            title="Toggle Theme"
          >
            {isDarkPreview ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[#111111]" />}
          </button>

          <button
            onClick={onOpenBooking}
            className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#111111] dark:bg-[#0A66FF] text-[#FAF8F5] text-xs font-medium tracking-wide transition-all duration-300 hover:bg-[#0A66FF] dark:hover:bg-[#0052D6] hover:shadow-md active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book a Discovery Call</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="xl:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-[#111111]/[0.04] dark:bg-gray-800 text-[#111111] dark:text-white border border-[#E9E9E9] dark:border-gray-700"
          >
            {isDarkPreview ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-full bg-[#111111]/[0.04] dark:bg-gray-800 text-[#111111] dark:text-white border border-[#E9E9E9] dark:border-gray-700 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-[#FAF8F5]/98 dark:bg-[#111111]/98 backdrop-blur-xl border-b border-[#E9E9E9] dark:border-gray-800 p-6 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-2.5 rounded-xl text-base font-heading font-medium text-[#111111] dark:text-white hover:bg-[#111111]/[0.05] dark:hover:bg-gray-800 flex items-center justify-between transition-colors"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#666666] dark:text-gray-400" />
              </a>
            ))}

            <div className="pt-4 border-t border-[#E9E9E9] dark:border-gray-800 flex flex-col gap-3 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3.5 rounded-xl bg-[#0A66FF] text-white font-medium text-sm flex items-center justify-center gap-2 hover:bg-[#0052D6] transition-colors shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book a Discovery Call</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
