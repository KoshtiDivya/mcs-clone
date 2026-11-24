import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Navbar({ onOpenQuoteModal, onSelectService }) {
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
    <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-xl transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand on the Left */}
          <a href="#top" className="flex items-center gap-2.5 sm:gap-3.5 group min-w-0">
            {/* MCS Icon Badge matching theme */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/15 group-hover:scale-105 transition-transform duration-200 shrink-0">
              <span className="font-black text-slate-950 text-lg sm:text-xl tracking-tight font-sans">
                MCS
              </span>
            </div>

            {/* Brand Title and Tagline */}
            <div className="flex flex-col min-w-0">
              <span className="text-sm sm:text-base lg:text-lg font-bold text-white group-hover:text-amber-400 transition-colors tracking-tight leading-tight truncate">
                Muscat Commercial Services
              </span>
              <span className="text-[9px] sm:text-[10px] md:text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5 truncate">
                CONSTRUCTION · MAINTENANCE · FIT-OUT
              </span>
            </div>
          </a>

          {/* Minimal Centered / Aligned Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
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
                    className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors py-2"
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:rotate-180 group-hover:text-amber-400 transition-all duration-200" />
                  </a>

                  {/* Dropdown Menu */}
                  <div
                    className={`absolute left-0 top-full pt-2 w-64 transition-all duration-200 ${
                      servicesDropdownOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-2 backdrop-blur-xl">
                      <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-400/90 border-b border-slate-800/80 mb-1">
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
                          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-colors"
                        >
                          <span>{svc.title}</span>
                          <span className="text-[10px] font-medium text-slate-500">
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
                  className="text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-amber-400 transition-colors py-2"
                >
                  {link.name}
                </a>
              )
            )}
          </nav>

          {/* Right Action: Pill Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : window.location.assign('#contact')}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              REQUEST A QUOTE
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-t border-slate-800 px-5 pt-3 pb-6 animate-in slide-in-from-top-2 duration-150 backdrop-blur-xl shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-200 hover:bg-slate-900 hover:text-amber-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
                else window.location.assign('#contact');
              }}
              className="w-full py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider text-center shadow-lg shadow-amber-500/20 cursor-pointer"
            >
              REQUEST A QUOTE
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
