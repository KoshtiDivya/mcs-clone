import React from 'react';
import { ArrowRight, CheckCircle2, Shield, Calendar, Clock, HardHat, Award, Phone } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Hero({ onOpenQuoteModal }) {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-850 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide shadow-inner">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              {siteData.hero.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Keeping Every Space{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                Functional
              </span>{' '}
              and Beautifully Finished.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {siteData.hero.description}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : window.location.assign('#contact')}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm tracking-wide shadow-xl shadow-amber-500/25 hover:shadow-amber-500/35 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#services"
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700/80 hover:border-slate-600 font-semibold text-sm transition-all flex items-center gap-2"
              >
                <span>Explore Services</span>
              </a>

              <a
                href={`tel:${siteData.company.phoneClean}`}
                className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-amber-400 px-3 py-2 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call +968 7107 6780</span>
              </a>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 border-t border-slate-800/80">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Direct Engineer Sign-Off</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Registered & Licensed (CR 1597271)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Civil Defence Approved</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Commercial Interior Fit-Out */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-slate-700/60 shadow-2xl bg-slate-900 group">
                <img
                  src={siteData.hero.images.primary}
                  alt="Completed commercial interior fit-out delivered by Muscat Commercial Services"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-amber-500/90 text-slate-950 font-bold uppercase tracking-wider text-[10px]">
                    Featured Execution
                  </span>
                  <p className="mt-1 text-white font-medium drop-shadow text-right">
                    Luxury Interior Fit-Out & Turnkey Handover
                  </p>
                </div>
              </div>

              {/* Floating Secondary Image: Modern Building Construction in Muscat */}
              <div className="absolute -bottom-8 -left-6 sm:-left-8 w-48 sm:w-56 rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-2xl bg-slate-900 hidden sm:block">
                <img
                  src={siteData.hero.images.secondary}
                  alt="Modern residential building constructed in Muscat, Oman"
                  className="w-full h-32 sm:h-36 object-cover"
                />
                <div className="p-2 bg-slate-950/90 text-[10px] text-slate-300 flex items-center justify-between">
                  <span className="font-semibold text-amber-400">Building Construction</span>
                  <span>Muscat, Oman</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 sm:top-4 sm:-right-6 bg-slate-900/95 backdrop-blur-md border border-amber-500/40 rounded-2xl p-4 shadow-2xl">
                <div className="text-3xl font-black text-amber-400 font-mono tracking-tight">
                  16+
                </div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-300">
                  Years Engineering
                </div>
                <div className="text-[9px] text-slate-400">Across the Sultanate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Key Stats Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {siteData.stats.map((stat, i) => (
            <div key={i} className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-4 backdrop-blur-sm hover:border-amber-500/30 transition-all">
              <div className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-baseline gap-1">
                <span className="text-amber-400">{stat.value}</span>
              </div>
              <div className="text-xs font-bold text-slate-200 mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
