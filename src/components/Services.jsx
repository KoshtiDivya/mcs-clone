import React, { useState } from 'react';
import { 
  Building2, Wrench, Paintbrush, Zap, Palette, Droplets, Fan, ShieldAlert, 
  ArrowRight, Check, Sparkles, ChevronRight
} from 'lucide-react';
import { siteData } from '../data/siteData';

const iconMap = {
  Building2,
  Wrench,
  Paintbrush,
  Zap,
  Palette,
  Droplets,
  Fan,
  ShieldAlert
};

export default function Services({ onSelectServiceForQuote }) {
  const [activeServiceModal, setActiveServiceModal] = useState(null);

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Contracting & Maintenance</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            One team for construction, maintenance, and fit-out works.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            From new building construction to everyday residential and commercial maintenance, complete interior fit-outs, HVAC, and MEP works, we manage every stage with qualified technicians, clear reporting, and minimal disruption to your operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.services.map((svc) => {
            const IconComponent = iconMap[svc.icon] || Wrench;
            return (
              <div
                key={svc.id}
                className="group relative bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-amber-500/5 hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 group-hover:bg-amber-500/10 border border-slate-700/60 group-hover:border-amber-500/30 flex items-center justify-center text-amber-400 transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 group-hover:text-amber-300 border border-slate-700">
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {svc.title}
                  </h3>

                  <p className="mt-2.5 text-xs text-slate-400 leading-relaxed">
                    {svc.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-4 space-y-2 pt-4 border-t border-slate-800/80">
                    {svc.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setActiveServiceModal(svc)}
                    className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>View details</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(svc.title)}
                    className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 group-hover:translate-x-1 transition-all cursor-pointer"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                  {activeServiceModal.tag}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  {activeServiceModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveServiceModal(null)}
                className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800"
              >
                ✕
              </button>
            </div>

            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              {activeServiceModal.description}
            </p>

            <div className="mt-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Technical Capabilities
              </h4>
              <ul className="mt-3 space-y-2.5">
                {activeServiceModal.features.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <Check className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveServiceModal(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onSelectServiceForQuote(activeServiceModal.title);
                  setActiveServiceModal(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition-all"
              >
                Request Quotation for {activeServiceModal.title}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
