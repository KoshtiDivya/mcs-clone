import React, { useState } from 'react';
import { ChevronDown, Menu, X, Sun, Moon } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Navbar({ onOpenQuoteModal, onSelectService, theme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#top' },
    { name: 'SERVICES', href: '#services', hasDropdown: true },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'AMC PLANS', href: '#packages' },
    { name: 'ABOUT', href: '#about' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f1f5f9]/95 dark:bg-slate-950/95 backdrop-blur-md border-b-2 border-[#0d233a] dark:border-slate-800 shadow-md transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand on the Left - Exact match to reference image & favicon */}
          <a href="#top" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
            {/* MCS Icon Badge: Deep navy rounded square with amber MCS text */}
            <div className="mcs-badge-icon w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#0d233a] border border-[#1e3a5f] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200 shrink-0">
              <span className="mcs-badge-text font-black text-[#f59e0b] text-base sm:text-lg tracking-tight font-sans">
                MCS
              </span>
            </div>

            {/* Brand Title and Tagline */}
            <div className="flex flex-col min-w-0">
              <span className="brand-title text-sm sm:text-base lg:text-lg font-extrabold text-[#0d233a] dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors tracking-tight leading-tight truncate">
                Muscat Commercial Services
              </span>
              <span className="brand-tagline text-[9px] sm:text-[10px] md:text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5 truncate">
                CONSTRUCTION · MAINTENANCE · FIT-OUT
              </span>
            </div>
          </a>

          {/* Minimal Centered / Aligned Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0d233a] hover:text-amber-600 dark:text-slate-200 dark:hover:text-amber-400 transition-colors py-2"
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-500 dark:text-slate-400 group-hover:rotate-180 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-all duration-200" />
                  </a>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 top-full pt-2 w-64 transition-all duration-200 ${
                      servicesDropdownOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="services-dropdown-card bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl p-2 backdrop-blur-xl">
                      <div className="services-dropdown-header px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400/90 border-b border-slate-200 dark:border-slate-800 mb-1">
                        All Services
                      </div>
                      {siteData.services.map((svc) => (
                        <a
                          key={svc.id}
                          href="#services"
                          onClick={() => {
                            if (onSelectService) onSelectService(svc.title);
                            setServicesDropdownOpen(false);
                          }}
                          className="services-dropdown-item flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-amber-600 dark:hover:text-white transition-colors"
                        >
                          <span className="services-dropdown-item-title font-bold text-slate-900 dark:text-slate-200">{svc.title}</span>
                          <span className="services-dropdown-item-tag text-[10px] font-medium text-slate-500 dark:text-slate-400">
                            {svc.tag}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold uppercase tracking-wider text-[#0d233a] hover:text-amber-600 dark:text-slate-200 dark:hover:text-amber-400 transition-colors py-2"
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          {/* Right Corner: Small Theme Toggle + Pill CTA Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Small Theme Toggle Option (Shows Only Symbol) */}
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="w-9 h-9 rounded-full flex items-center justify-center border transition-all cursor-pointer active:scale-90 bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-800 text-amber-500 hover:border-amber-500 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700 transition-transform duration-300 hover:-rotate-12" />
              )}
            </button>

            {/* Pill Request a Quote Button - Dark Navy Pill with Crisp White Text (Matches Reference Image) */}
            <button
              onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : window.location.assign('#contact')}
              className="quote-pill-btn hidden sm:inline-flex px-5 sm:px-6 py-2.5 rounded-full bg-[#0d233a] hover:bg-[#163352] text-white dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400 text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
            >
              REQUEST A QUOTE
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-[#0d233a] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900 border border-slate-300 dark:border-slate-800 transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer lg:hidden bg-white dark:bg-slate-950/95 border-t border-slate-200 dark:border-slate-800 px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-150 backdrop-blur-xl shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-amber-600 dark:hover:text-amber-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
                else window.location.assign('#contact');
              }}
              className="quote-pill-btn flex-1 py-3 rounded-full bg-[#0d233a] hover:bg-[#163352] text-white dark:bg-amber-500 dark:text-slate-950 dark:hover:bg-amber-400 text-xs font-bold uppercase tracking-wider text-center shadow-md cursor-pointer"
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
