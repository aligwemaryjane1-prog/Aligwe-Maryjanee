import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const platformIcons = [
    {
      name: 'Email',
      url: 'mailto:aligwemaryjane1@gmail.com',
      icon: <Mail className="w-4 h-4" />
    },
    {
      name: 'Upwork',
      url: 'https://upwork.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.396-2.172 1.358-3.111 2.838-3.111 1.026 0 1.85.824 1.85 1.85 0 1.956-1.85 3.606-1.85 3.606zm0-7.234c-2.482 0-4.171 1.602-4.834 3.737-.88-1.571-1.464-3.535-1.748-5.661H9.684v7.712c0 1.343-.889 2.434-2.233 2.434-1.343 0-2.233-1.091-2.233-2.434V4H2.924v7.712c0 2.607 1.996 4.603 4.527 4.603 2.531 0 4.527-1.996 4.527-4.603v-.539c.39 1.637 1.09 3.09 2.057 4.225l-1.826 6.802h2.385l1.32-4.919c.9.52 1.884.812 2.923.812 2.68 0 4.757-1.996 4.757-5.456 0-3.385-2.008-6.425-5.035-6.425z" />
        </svg>
      )
    },
    {
      name: 'Behance',
      url: 'https://behance.net',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-4.726 3-3.101 0-5-2.416-5-5.5 0-3.328 2.028-5.5 4.869-5.5 3.123 0 4.631 2.222 4.498 5.234h-6.842c.058 1.401.998 2.266 2.475 2.266 1.127 0 1.936-.452 2.302-1.233h2.424zm-4.753-4.321c-.08-.949-.781-1.679-1.85-1.679-1.018 0-1.828.694-1.986 1.679h3.836zm-8.973 4.321h-4v-3h4c1.103 0 2 .897 2 2s-.897 1-2 1zm-4-5h3.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5h-3.5v3zm6.079.167c.725-.623 1.221-1.534 1.221-2.667 0-2.009-1.591-3.5-3.8-3.5h-7.5v14h7.5c2.327 0 4.3-1.593 4.3-3.833 0-1.706-.983-3.109-2.221-3.999z" />
        </svg>
      )
    },
    {
      name: 'Contra',
      url: 'https://contra.com',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M13 2L3 14h8l-2 8 12-12h-8l2-8z" />
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#111111] text-[#FAF8F5] py-6 md:py-8 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Main Content Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 pb-6 border-b border-gray-800/60">
          
          {/* Left: Brand & Compact Logo */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group inline-flex shrink-0 transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
              aria-label="MJ - Maryjane Web Designer & Developer"
            >
              <img
                src="/logo-light.png"
                alt="MJ - Maryjane Web Designer & Developer"
                referrerPolicy="no-referrer"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </a>
            <div>
              <div className="font-heading font-bold text-sm tracking-wide text-white">
                ALIGWE MARYJANE
              </div>
              <p className="text-xs text-gray-400 font-sans">
                Website Designer &amp; Developer — Specialized in WordPress &amp; Shopify
              </p>
            </div>
          </div>

          {/* Right: Social/Contact Icons & Back to Top */}
          <div className="flex items-center gap-2.5 flex-wrap">
            {platformIcons.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target={item.url.startsWith('mailto:') ? undefined : '_blank'}
                rel={item.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                aria-label={item.name}
                title={item.name}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gray-900/90 border border-gray-800 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-gray-800 flex items-center justify-center transition-all duration-200 cursor-pointer shrink-0"
              >
                {item.icon}
              </a>
            ))}

            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl bg-gray-900/90 border border-gray-800 hover:border-gray-600 text-xs font-mono text-gray-400 hover:text-white transition-all duration-200 cursor-pointer ml-1"
              aria-label="Back to Top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>

        </div>

        {/* Bottom Bar: Copyright */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-gray-500 gap-2">
          <div>
            &copy; {new Date().getFullYear()} Aligwe Maryjane. All Rights Reserved.
          </div>
          <div className="flex items-center gap-2 text-[11px] text-gray-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F9D58] animate-pulse" />
            <span>AVAILABLE FOR FREELANCE &amp; CONTRACT</span>
          </div>
        </div>

      </div>
    </footer>
  );
};


