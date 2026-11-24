import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageSquare } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function FloatingActions() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${siteData.company.phoneClean}?text=Hello%20Muscat%20Commercial%20Services%2C%20I%20would%20like%20to%20request%20a%20quote.`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp with Muscat Commercial Services"
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group relative"
        aria-label="WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
        <span className="absolute right-14 whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity border border-slate-700 pointer-events-none">
          Chat with Eng. Rafiqul on WhatsApp
        </span>
      </a>

      {/* Back to top button */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="w-10 h-10 rounded-full bg-slate-800/90 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-slate-700/80 flex items-center justify-center shadow-xl transition-all hover:scale-110 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
