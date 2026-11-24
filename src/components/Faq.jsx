import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 md:py-28 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left info column */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Inquiries</span>
            </div>
            <h2 className="mt-4 text-3xl font-extrabold text-white tracking-tight">
              Answers before you start.
            </h2>
            <p className="mt-4 text-sm text-slate-300 leading-relaxed">
              Still have specific questions about timelines, municipal permits, materials, or commercial contracts? Contact Eng. Rafiqul directly for expert engineering advice.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all border border-slate-700"
            >
              <span>Ask Our Engineer a Question</span>
            </a>
          </div>

          {/* Right accordion column */}
          <div className="lg:col-span-8 space-y-4">
            {siteData.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-900/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-900">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
