import React from 'react';
import {
  Building, ShieldCheck, Receipt, Hash, Award, Flame, FileCheck, HardHat, Check, Copy, ExternalLink
} from 'lucide-react';
import { siteData } from '../data/siteData';

const iconMap = {
  Building,
  ShieldCheck,
  Receipt,
  Hash,
  Award,
  Flame,
  FileCheck,
  HardHat
};

export default function Credentials() {
  const [copiedCode, setCopiedCode] = React.useState(null);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <section id="credentials" className="py-12 md:py-15 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Credentials, Compliance & Licensing</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Registered, licensed, and fully documented in Oman.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Our registrations, trade licences, safety certifications, and supplier approvals are kept strictly current and available for official verification at any stage of your project.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.credentials.map((cred, idx) => {
            const IconComp = iconMap[cred.icon] || ShieldCheck;
            return (
              <div
                key={idx}
                className="bg-slate-950/70 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-6 flex flex-col justify-between transition-all hover:shadow-xl hover:-translate-y-1 group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-slate-900 group-hover:bg-amber-500/10 border border-slate-800 text-amber-400 flex items-center justify-center transition-colors">
                      <IconComp className="w-5 h-5" />
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {cred.category}
                    </span>
                  </div>

                  <h3 className="mt-4 text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                    {cred.title}
                  </h3>

                  <p className="mt-1 text-[11px] font-medium text-amber-400/80">
                    {cred.authority}
                  </p>

                  <p className="mt-3 text-xs text-slate-400 leading-relaxed">
                    {cred.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-amber-300 truncate max-w-[170px]">
                    {cred.code}
                  </span>
                  <button
                    onClick={() => handleCopy(cred.code)}
                    title="Copy certificate / registration number"
                    className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    {copiedCode === cred.code ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Verification Callout */}
        <div className="credentials-callout mt-12 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-7 flex flex-col sm:flex-row items-center justify-between gap-5 transition-all">
          <div className="text-center sm:text-left">
            <h4 className="callout-title text-sm sm:text-base font-bold text-white tracking-tight">
              Need formal documentation for corporate compliance?
            </h4>
            <p className="callout-desc text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed max-w-2xl">
              We can provide certified copies of our CR, OCCI membership, Civil Defence approvals, and Tax Card with any formal commercial tender.
            </p>
          </div>
          <a
            href="#contact"
            className="callout-btn px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold uppercase tracking-wider shrink-0 transition-all shadow-md hover:scale-105 active:scale-95 text-center"
          >
            Request Document Copies
          </a>
        </div>
      </div>
    </section>
  );
}
