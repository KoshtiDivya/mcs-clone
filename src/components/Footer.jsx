import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand & Credentials */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center font-black text-slate-950 text-lg shadow-md">
                MCS
              </div>
              <div>
                <span className="font-extrabold text-white text-base">
                  Muscat Commercial Services
                </span>
                <span className="text-[10px] uppercase font-bold text-amber-400 ml-1.5">
                  LLC
                </span>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs">
              Construction, building maintenance, interior fit-out, and HVAC & MEP works across the Sultanate of Oman — delivered on schedule, safely, and to an engineering standard you can rely on.
            </p>

            <div className="space-y-1 pt-2 font-mono text-[11px] text-amber-400/90">
              <div>{siteData.company.crNumber}</div>
              <div>{siteData.company.occiNumber}</div>
              <div>{siteData.company.taxCard} · {siteData.company.tin}</div>
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Engineering Services
            </h4>
            <ul className="space-y-2">
              {siteData.services.slice(0, 6).map((svc) => (
                <li key={svc.id}>
                  <a href="#services" className="hover:text-amber-400 transition-colors">
                    {svc.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#packages" className="text-amber-400 font-semibold hover:underline">
                  Annual Maintenance Plans (AMC)
                </a>
              </li>
            </ul>
          </div>

          {/* Company Quick Nav */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li><a href="#top" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Eng. Rafiqul</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Selected Projects</a></li>
              <li><a href="#track-record" className="hover:text-amber-400 transition-colors">Track Record</a></li>
              <li><a href="#credentials" className="hover:text-amber-400 transition-colors">Compliance & Licensing</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Request a Quote</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{siteData.company.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${siteData.company.phoneClean}`} className="hover:text-amber-400 font-semibold text-white">
                  {siteData.company.phone}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <a href={`mailto:${siteData.company.email}`} className="hover:text-amber-400 break-all">
                  {siteData.company.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{siteData.company.workingHours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} Muscat Commercial Services LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              Officially Registered & Licensed in Oman
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
