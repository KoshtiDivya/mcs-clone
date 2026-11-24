import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Testimonials() {
  return (
    <section className="py-12 md:py-15 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trusted by facility managers and property owners.
          </h2>
          <p className="mt-4 text-base text-slate-300 leading-relaxed">
            Our clients return for consistent reasons: dependable site teams, honest itemized pricing, direct engineer contact, and finishes that remain pristine years after handover.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteData.testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-3xl p-8 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="mt-6 text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  “{item.quote}”
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-white">{item.author}</h3>
                  <p className="text-[11px] font-medium text-amber-400 uppercase tracking-wider mt-0.5">
                    {item.title}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                  <MessageSquareQuote className="w-4 h-4 text-amber-400" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
