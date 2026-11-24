import React from 'react';
import { 
  Building, MapPin, CheckCircle2, ShieldCheck, Snowflake, Check, Layers, Briefcase 
} from 'lucide-react';
import { siteData } from '../data/siteData';

export default function TrackRecord() {
  return (
    <section id="track-record" className="py-20 md:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Proven Engineering Track Record</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Projects personally managed by Eng. Rafiqul Islam.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Sixteen years of villas, multi-storey buildings, and retail fit-outs across Muscat — each one delivered with direct engineering oversight from groundbreaking through to handover.
          </p>
        </div>

        {/* Construction Track Record Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.projectsManaged.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-6 transition-all hover:bg-slate-900"
            >
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-semibold text-amber-400">
                  <MapPin className="w-4 h-4" />
                  {item.location}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {item.type}
                </span>
              </div>

              <h3 className="mt-4 text-base font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* 3 Years Maintenance Management Experience Section */}
        <div className="mt-20 pt-16 border-t border-slate-800/80">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Facility Management</span>
            </div>
            <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Three years managing building maintenance directly.
            </h3>
            <p className="mt-3 text-sm text-slate-300 leading-relaxed">
              Before founding MCS, Eng. Rafiqul Islam worked as a senior building maintenance service engineer across commercial and residential portfolios in Oman — and he still personally handles every maintenance job the company delivers today.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {siteData.maintenanceTrackRecord.map((record, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all shadow-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">
                      {record.client}
                    </h4>
                    <p className="mt-1 text-xs uppercase tracking-wider font-bold text-amber-400">
                      {record.scope}
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {record.description}
                </p>

                <ul className="mt-6 space-y-3 pt-6 border-t border-slate-800">
                  {record.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* AC Maintenance Contracts Section */}
        <div className="mt-20 pt-16 border-t border-slate-800/80">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                <Snowflake className="w-3.5 h-3.5" />
                <span>Active Cooling Agreements</span>
              </div>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Six buildings on annual AC maintenance contracts.
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Our AC AMC portfolio covers staff accommodation, worker camps, and commercial trading buildings — scheduled chemical servicing, filter cleaning, emergency fault attendance, and written engineering reports after every visit.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl px-6 py-4 text-center shrink-0">
              <div className="text-4xl font-black text-amber-400 font-mono">6</div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 mt-0.5">
                Buildings Under AC AMC
              </div>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.acPortfolio.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="w-9 h-9 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center">
                      <Snowflake className="w-4 h-4" />
                    </span>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {item.buildings}
                    </span>
                  </div>

                  <h4 className="mt-4 text-sm font-bold text-white">
                    {item.name}
                  </h4>
                  <p className="text-[11px] font-medium text-slate-400">
                    {item.location}
                  </p>

                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Handled Non-AC Maintenance Banner */}
          <div className="mt-10 bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8">
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-amber-400" />
              <span>Directly Handled Maintenance — Beyond Cooling</span>
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              Alongside specialized AC contracts, our in-house team directly handles all other maintenance disciplines for these buildings — plumbing, electrical distribution, civil repairs, painting, and structural finishing.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {siteData.directlyHandledWorks.map((work, idx) => (
                <div key={idx} className="bg-slate-950/70 border border-slate-800 rounded-2xl p-5">
                  <div className="text-sm font-bold text-white">{work.client}</div>
                  <div className="text-xs text-amber-400 font-semibold">{work.property}</div>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">{work.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
