import React from 'react';
import {
  Check, Sparkles, Fan, Droplets, Zap, ShieldAlert, Truck, ArrowRight, ShieldCheck
} from 'lucide-react';
import { siteData } from '../data/siteData';

const moduleIcons = {
  Fan,
  Droplets,
  Zap,
  ShieldAlert,
  Truck
};

export default function AmcPlans({ onSelectPlan }) {
  return (
    <section id="packages" className="py-12 md:py-15 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Annual Maintenance Contracts (AMC)</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive annual care for residential & commercial properties.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Choose the level of cover that suits your property. Every 12-month contract combines scheduled preventative visits — quarterly AC chemical servicing, plumbing, and electrical audits, pest control — with guaranteed emergency call-out response.
          </p>
        </div>

        {/* AMC Core Modules Bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {siteData.amcModules.map((mod, idx) => {
            const IconComp = moduleIcons[mod.icon] || Fan;
            return (
              <div
                key={idx}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4 flex flex-col justify-between hover:border-amber-500/30 transition-colors"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <h3 className="mt-3 text-xs font-bold text-white">{mod.title}</h3>
                  <p className="mt-1 text-[11px] text-slate-400 leading-snug">{mod.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {siteData.amcPlans.map((plan, idx) => (
            <div
              key={idx}
              className={`relative bg-slate-900 rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${plan.isPopular
                ? 'border-2 border-amber-500 shadow-2xl shadow-amber-500/10 -translate-y-2'
                : 'border border-slate-800 hover:border-slate-700'
                }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-md">
                  Most Popular in Muscat
                </div>
              )}

              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <span className="text-xs text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-500/10">
                    12 Months
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-400 leading-relaxed min-h-[36px]">
                  {plan.subtitle}
                </p>

                {/* Price Display */}
                <div className="mt-6 flex items-baseline gap-2 pb-6 border-b border-slate-800">
                  <span className="text-sm font-semibold text-amber-400">﷼</span>
                  <span className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">
                    {plan.price}
                  </span>
                  <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {plan.currency} / year
                  </span>
                </div>

                {/* Features list */}
                <div className="mt-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Included Coverage
                  </span>
                  <ul className="mt-3 space-y-3">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <button
                  onClick={() => onSelectPlan ? onSelectPlan(plan.name) : window.location.assign('#contact')}
                  className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${plan.isPopular
                    ? 'bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95'
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Plan Note */}
        <p className="mt-12 text-center text-xs text-slate-400">
          Managing a multi-unit commercial compound, hospital, or school?{' '}
          <a
            href="#contact"
            className="text-amber-400 font-semibold hover:underline decoration-amber-500 underline-offset-4"
          >
            Request a tailored multi-building AMC proposal
          </a>
        </p>
      </div>
    </section>
  );
}
