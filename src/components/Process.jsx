import React from 'react';
import { Compass, FileText, Wrench, ShieldCheck } from 'lucide-react';
import { siteData } from '../data/siteData';

const stepIcons = [Compass, FileText, Wrench, ShieldCheck];

export default function Process() {
  return (
    <section className="py-20 md:py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <span>Structured Methodology</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A clear process from initial assessment to final sign-off.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Every project follows a transparent engineering path so you always know milestones, deliverables, and who is directly accountable on site.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.processSteps.map((step, idx) => {
            const IconComp = stepIcons[idx] || Compass;
            return (
              <div
                key={idx}
                className="bg-slate-950/70 border border-slate-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-amber-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 group-hover:bg-amber-500/10 text-amber-400 flex items-center justify-center border border-slate-800">
                      <IconComp className="w-5 h-5" />
                    </span>
                    <span className="text-3xl font-black text-slate-800 group-hover:text-amber-500/30 font-mono transition-colors">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 text-[10px] uppercase font-bold tracking-wider text-amber-400/80">
                  Phase {step.step} Complete Quality Gate
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
