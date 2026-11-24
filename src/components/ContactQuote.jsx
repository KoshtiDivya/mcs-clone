import React, { useState, useEffect, useRef } from 'react';
import {
  Phone, MessageSquare, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, FileUp, Sparkles, ChevronDown, Check
} from 'lucide-react';
import { siteData } from '../data/siteData';

export default function ContactQuote({ preselectedService, preselectedPlan }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceRequired: '',
    projectDetails: '',
    photoLink: '',
    propertyType: 'Commercial'
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const serviceDropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (serviceDropdownRef.current && !serviceDropdownRef.current.contains(event.target)) {
        setServiceDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, serviceRequired: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (preselectedPlan) {
      setFormData(prev => ({
        ...prev,
        serviceRequired: 'Building Maintenance',
        projectDetails: `Selected Annual Maintenance Plan: ${preselectedPlan}\n` + prev.projectDetails
      }));
    }
  }, [preselectedPlan]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.serviceRequired) {
      setErrorMsg('Please enter your full name, phone number, and service required.');
      return;
    }
    setErrorMsg('');
    setSubmitted(true);
  };

  const generateWhatsAppUrl = () => {
    const text = `Hello Muscat Commercial Services,\n\nI would like to request a quote.\n- Name: ${formData.fullName || 'Not specified'}\n- Phone: ${formData.phone || 'Not specified'}\n- Email: ${formData.email || 'Not specified'}\n- Service: ${formData.serviceRequired || 'General Inquiry'}\n- Property Type: ${formData.propertyType}\n- Details: ${formData.projectDetails || 'Please contact me for site assessment.'}`;
    return `https://wa.me/${siteData.company.phoneClean}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-12 sm:py-12 md:py-15 bg-slate-950 relative overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start w-full">

          {/* Left Column: Direct Contact & Office Details */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8 min-w-0 w-full">
            <div>
              <div className="contact-badge inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get in Touch</span>
              </div>
              <h2 className="contact-title mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight break-words">
                Tell us about your property.
              </h2>
              <p className="contact-desc mt-3 text-sm text-slate-300 leading-relaxed">
                Share a few details about your property and the work you need. Our engineering team will arrange a free site assessment and provide a transparent, itemized written proposal.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3.5 w-full">
              <a
                href={`tel:${siteData.company.phoneClean}`}
                className="contact-channel-card flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-colors group min-w-0"
              >
                <div className="channel-icon w-10 h-10 rounded-xl bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="channel-label text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate">
                    Direct Engineering Hotline
                  </div>
                  <div className="channel-value text-sm font-bold text-white group-hover:text-amber-500 transition-colors truncate">
                    {siteData.company.phone}
                  </div>
                  <div className="channel-sub text-[11px] text-slate-400 truncate">Available Saturday to Thursday</div>
                </div>
              </a>

              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-info-card flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-emerald-950/40 border border-emerald-800/60 hover:border-emerald-600 transition-colors group min-w-0"
              >
                <div className="channel-icon w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-colors">
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="card-title text-[10px] font-bold uppercase tracking-wider text-emerald-400 truncate">
                    Instant WhatsApp Dispatch
                  </div>
                  <div className="card-value text-sm font-bold text-white group-hover:text-emerald-300 transition-colors truncate">
                    +968 7107 6780
                  </div>
                  <div className="card-desc text-[11px] text-slate-400 truncate">Share site photos directly</div>
                </div>
              </a>

              <a
                href={`mailto:${siteData.company.email}`}
                className="contact-channel-card flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors group min-w-0"
              >
                <div className="channel-icon w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 group-hover:text-amber-500 transition-colors">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="channel-label text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate">
                    Email Inquiries
                  </div>
                  <div className="channel-value text-xs sm:text-sm font-medium text-white break-all group-hover:text-amber-500 transition-colors">
                    {siteData.company.email}
                  </div>
                  <div className="channel-sub text-[11px] text-slate-400 truncate">Tenders & RFQs welcome</div>
                </div>
              </a>

              <div className="contact-channel-card flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800 min-w-0">
                <div className="channel-icon w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="channel-label text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate">
                    Registered Headquarters
                  </div>
                  <div className="channel-value text-xs sm:text-sm font-medium text-white break-words">
                    {siteData.company.address}
                  </div>
                  <div className="channel-sub text-[11px] text-slate-400 truncate">Sultanate of Oman</div>
                </div>
              </div>

              <div className="contact-channel-card flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-slate-900 border border-slate-800 min-w-0">
                <div className="channel-icon w-10 h-10 rounded-xl bg-slate-800 text-slate-300 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="channel-label text-[10px] font-bold uppercase tracking-wider text-slate-400 truncate">
                    Operating Schedule
                  </div>
                  <div className="channel-value text-xs sm:text-sm font-medium text-white break-words">
                    {siteData.company.workingHours}
                  </div>
                  <div className="channel-sub text-[11px] text-emerald-400 font-semibold truncate">24/7 Support for AMC Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 min-w-0 w-full">
            <div className="contact-form-card bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-2xl w-full max-w-full overflow-hidden">
              {submitted ? (
                <div className="text-center py-8 sm:py-12 space-y-4 w-full">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="form-thanks-title text-xl sm:text-2xl font-bold text-white break-words">Thank You, {formData.fullName}!</h3>
                  <p className="form-thanks-desc text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed break-words">
                    Your request for <span className="text-amber-500 font-semibold">{formData.serviceRequired}</span> has been received. Eng. Rafiqul Islam or our senior engineering team will contact you shortly on {formData.phone}.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-submit-btn inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="form-reset-btn px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 w-full min-w-0">
                  <div className="border-b border-slate-800 pb-3 mb-2">
                    <h3 className="form-head-title text-base sm:text-lg font-bold text-white">Request Quotation & Site Assessment</h3>
                    <p className="form-head-sub text-xs text-slate-400">Complimentary initial evaluation anywhere in Muscat</p>
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span className="break-words">{errorMsg}</span>
                    </div>
                  )}

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
                    <div className="min-w-0 w-full">
                      <label className="form-field-label block text-xs font-semibold text-slate-300 mb-1">
                        Full Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Salim Al Harthy"
                        className="w-full min-w-0 max-w-full box-border px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
                      />
                    </div>

                    <div className="min-w-0 w-full">
                      <label className="form-field-label block text-xs font-semibold text-slate-300 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.om"
                        className="w-full min-w-0 max-w-full box-border px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 w-full">
                    <div className="min-w-0 w-full">
                      <label className="form-field-label block text-xs font-semibold text-slate-300 mb-1">
                        Phone / WhatsApp <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+968 9XXXXXXX"
                        className="w-full min-w-0 max-w-full box-border px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all"
                      />
                    </div>

                    {/* Service Required Custom Dropdown */}
                    <div className="min-w-0 w-full relative" ref={serviceDropdownRef}>
                      <label className="form-field-label block text-xs font-semibold text-slate-300 mb-1">
                        Service Required <span className="text-amber-500">*</span>
                      </label>

                      {/* Custom Dropdown Trigger Button */}
                      <button
                        type="button"
                        onClick={() => setServiceDropdownOpen(prev => !prev)}
                        className={`service-select-trigger w-full min-w-0 max-w-full box-border px-3.5 py-2.5 rounded-xl border flex items-center justify-between text-left text-xs sm:text-sm transition-all cursor-pointer ${serviceDropdownOpen
                          ? 'border-amber-500 ring-2 ring-amber-500/20 bg-slate-900'
                          : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                          }`}
                        aria-haspopup="listbox"
                        aria-expanded={serviceDropdownOpen}
                      >
                        <span className={`truncate font-medium ${formData.serviceRequired ? 'text-white font-semibold' : 'text-slate-500'}`}>
                          {formData.serviceRequired || 'Select a service category…'}
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-amber-500 shrink-0 transition-transform duration-200 ml-2 ${serviceDropdownOpen ? 'rotate-180' : ''
                            }`}
                        />
                      </button>

                      {/* Hidden input to preserve standard form submission & validation */}
                      <input
                        type="hidden"
                        name="serviceRequired"
                        value={formData.serviceRequired}
                        required
                      />

                      {/* Custom Dropdown Floating Panel */}
                      {serviceDropdownOpen && (
                        <div className="service-dropdown-panel absolute z-30 left-0 right-0 mt-1.5 max-h-64 overflow-y-auto rounded-2xl bg-slate-900 border border-slate-700 shadow-2xl p-1.5 animate-in fade-in slide-in-from-top-1 duration-150">
                          <div className="px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-400/90 border-b border-slate-800 mb-1">
                            Core Engineering Services
                          </div>
                          {siteData.services.map((s) => {
                            const isSelected = formData.serviceRequired === s.title;
                            return (
                              <button
                                key={s.id}
                                type="button"
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, serviceRequired: s.title }));
                                  setServiceDropdownOpen(false);
                                }}
                                className={`service-option-item w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer text-left ${isSelected
                                  ? 'active bg-amber-500/15 text-amber-400 font-bold'
                                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                  }`}
                              >
                                <div className="flex items-center gap-2 truncate">
                                  {isSelected && <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                                  <span className="truncate">{s.title}</span>
                                </div>
                                <span className="service-option-tag text-[9px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-400 shrink-0 ml-2">
                                  {s.tag}
                                </span>
                              </button>
                            );
                          })}

                          <div className="px-3 py-1.5 mt-1.5 text-[10px] font-bold uppercase tracking-wider text-amber-400/90 border-b border-slate-800 border-t pt-2 mb-1">
                            Maintenance Agreements & Special Works
                          </div>
                          {[
                            { title: 'Annual Maintenance Plan (AMC)', tag: 'Yearly Plan' },
                            { title: 'AC Maintenance Contract', tag: 'Cooling AMC' },
                            { title: 'Other Specialist Work', tag: 'Custom Scope' }
                          ].map((item) => {
                            const isSelected = formData.serviceRequired === item.title;
                            return (
                              <button
                                key={item.title}
                                type="button"
                                onClick={() => {
                                  setFormData(prev => ({ ...prev, serviceRequired: item.title }));
                                  setServiceDropdownOpen(false);
                                }}
                                className={`service-option-item w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer text-left ${isSelected
                                  ? 'active bg-amber-500/15 text-amber-400 font-bold'
                                  : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                                  }`}
                              >
                                <div className="flex items-center gap-2 truncate">
                                  {isSelected && <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />}
                                  <span className="truncate">{item.title}</span>
                                </div>
                                <span className="service-option-tag text-[9px] font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-400 shrink-0 ml-2">
                                  {item.tag}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Property Category Buttons - Fully Responsive */}
                  <div className="w-full min-w-0">
                    <label className="form-field-label block text-xs font-semibold text-slate-300 mb-1.5">
                      Property Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
                      {['Commercial', 'Residential Villa', 'Apartment/Industrial'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, propertyType: type }))}
                          className={`property-type-btn py-2 px-3 text-xs font-semibold rounded-xl border transition-all cursor-pointer text-center truncate ${formData.propertyType === type
                            ? 'active bg-amber-500/10 border-amber-500 text-amber-500 shadow-sm'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                            }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="w-full min-w-0">
                    <label className="form-field-label block text-xs font-semibold text-slate-300 mb-1">
                      Project Details & Location
                    </label>
                    <textarea
                      name="projectDetails"
                      rows={3}
                      value={formData.projectDetails}
                      onChange={handleChange}
                      placeholder="Location, property type, and the work you need…"
                      className="w-full min-w-0 max-w-full box-border px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-xs sm:text-sm text-white placeholder-slate-500 outline-none transition-all resize-y"
                    ></textarea>
                  </div>

                  {/* Photos / Drawings Link */}
                  <div className="w-full min-w-0">
                    <label className="form-field-label block text-xs font-semibold text-slate-300 mb-1">
                      Photos or Drawings Link (Optional)
                    </label>
                    <div className="relative w-full min-w-0">
                      <input
                        type="url"
                        name="photoLink"
                        value={formData.photoLink}
                        onChange={handleChange}
                        placeholder="Paste link to Google Drive, Dropbox, or OneDrive"
                        className="w-full min-w-0 max-w-full box-border pl-10 pr-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 text-xs text-white placeholder-slate-500 outline-none"
                      />
                      <FileUp className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                    <p className="mt-1 text-[11px] text-slate-500">
                      Share up to 5 photos of the property, drawings, or documents.
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 space-y-2.5 w-full">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                    >
                      <Send className="w-4 h-4 shrink-0" />
                      <span className="truncate">Send Request Directly</span>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-slate-500 uppercase tracking-widest text-[10px] my-1">
                      <span>or</span>
                    </div>

                    <a
                      href={generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="whatsapp-submit-btn w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 active:scale-95 text-center shadow-md shadow-emerald-600/20"
                    >
                      <MessageSquare className="w-4 h-4 shrink-0 text-white" />
                      <span className="truncate text-white">Send Request on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
