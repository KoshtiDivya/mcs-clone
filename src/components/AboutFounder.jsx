import React from 'react';
import { UserCheck, Award, CheckCircle, Quote, Building, Calendar, Phone } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function AboutFounder() {
  const { founder } = siteData;

  return (
    <section id="about" className="py-12 md:py-15 bg-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Detailed Information */}
          <div className="lg:col-span-7 space-y-6">
            <div className="about-badge inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Who We Are & Leadership</span>
            </div>

            <h2 className="about-title text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Sixteen years of on-site engineering experience behind every contract.
            </h2>

            <p className="about-body text-slate-300 leading-relaxed text-base">
              {founder.bio}
            </p>

            <p className="about-body text-slate-300 leading-relaxed text-base">
              The portfolio he has personally managed as project manager and site engineer includes luxury private villas, multi-storey residential and commercial complexes, and retail fit-outs across Muscat — from Wadi Kabir and Al Amrath to Darsait, Mawaleh, Ruwi, Matrah, and Ghala.
            </p>

            {/* Value Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="about-pillar bg-slate-950/60 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/40 transition-colors">
                <span className="text-2xl font-black text-amber-500 font-mono">01</span>
                <h4 className="mt-2 text-sm font-bold text-white">Direct Personal Supervision</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Every contract is personally managed by the engineer who signs it off — no junior handovers, no layers between departments.
                </p>
              </div>

              <div className="about-pillar bg-slate-950/60 border border-slate-800 rounded-2xl p-5 hover:border-amber-500/40 transition-colors">
                <span className="text-2xl font-black text-amber-500 font-mono">02</span>
                <h4 className="mt-2 text-sm font-bold text-white">Accountable Communication</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Direct contact with the engineer responsible for your building, from the initial site inspection and quotation to ongoing maintenance.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Founder Profile Card */}
          <div className="lg:col-span-5">
            <div className="founder-card bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Monogram Badge */}
              <div className="flex items-center justify-between">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 text-slate-950 font-black text-2xl flex items-center justify-center shadow-lg shadow-amber-500/20">
                  RI
                </div>
                <div className="text-right">
                  <span className="founder-site-badge inline-block text-[10px] font-bold uppercase tracking-wider text-emerald-400 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800">
                    Active on Site
                  </span>
                  <div className="founder-city-label text-xs text-slate-400 mt-1">Muscat, Oman</div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="founder-name text-2xl font-bold text-white">{founder.name}</h3>
                <p className="founder-role text-xs uppercase font-bold tracking-widest text-amber-500 mt-1">
                  {founder.role}
                </p>
              </div>

              <p className="founder-bio mt-4 text-xs text-slate-300 leading-relaxed">
                16 years of hands-on building and facilities engineering in Oman — planning, supervising, and personally signing off every project the company delivers, from groundbreaking to final handover.
              </p>

              {/* Quote Block */}
              <div className="founder-quote-box mt-6 pt-6 border-t border-slate-800 relative">
                <Quote className="w-8 h-8 text-amber-500/20 absolute -top-3 right-0" />
                <p className="founder-quote-text text-sm italic font-medium text-amber-200/90 leading-relaxed">
                  “{founder.quote}”
                </p>
              </div>

              {/* Stat badges */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="founder-stat-box bg-slate-900/80 rounded-xl p-3 border border-slate-800 text-center">
                  <div className="founder-stat-value text-xl font-black text-amber-500">16+</div>
                  <div className="founder-stat-label text-[10px] text-slate-400 uppercase font-semibold">Years Experience</div>
                </div>
                <div className="founder-stat-box bg-slate-900/80 rounded-xl p-3 border border-slate-800 text-center">
                  <div className="founder-stat-value text-xl font-black text-amber-500">2025</div>
                  <div className="founder-stat-label text-[10px] text-slate-400 uppercase font-semibold">Registered in Muscat</div>
                </div>
              </div>

              {/* Direct call button */}
              <a
                href={`tel:${siteData.company.phoneClean}`}
                className="founder-call-btn mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Call Eng. Rafiqul: +968 7107 6780</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
