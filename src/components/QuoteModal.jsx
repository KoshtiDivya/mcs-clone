import React from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { siteData } from '../data/siteData';

export default function QuoteModal({ isOpen, onClose, selectedService }) {
  const [formData, setFormData] = React.useState({
    fullName: '',
    phone: '',
    email: '',
    service: selectedService || 'Building Construction',
    notes: ''
  });
  const [sent, setSent] = React.useState(false);

  React.useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const getWhatsAppLink = () => {
    const text = `Hello Muscat Commercial Services,\n\nI want to request a quote for ${formData.service}.\nName: ${formData.fullName}\nPhone: ${formData.phone}\nNotes: ${formData.notes || 'Please contact me.'}`;
    return `https://wa.me/${siteData.company.phoneClean}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700 rounded-2xl sm:rounded-3xl max-w-md w-full p-5 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto box-border min-w-0">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white bg-slate-800 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {sent ? (
          <div className="text-center py-6 sm:py-8 space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto text-xl font-bold">
              ✓
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Request Received!</h3>
            <p className="text-xs text-slate-300">
              Our engineering team will call you back shortly.
            </p>
            <div className="pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold w-full"
              >
                Send via WhatsApp
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4 w-full min-w-0">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                Direct Engineer Quote
              </span>
              <h3 className="mt-1.5 text-lg sm:text-xl font-bold text-white">Request Free Quotation</h3>
            </div>

            <div className="w-full min-w-0">
              <label className="block text-xs font-medium text-slate-300 mb-1">Your Name *</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Salim Al Balushi"
                className="w-full min-w-0 max-w-full box-border px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:border-amber-500 outline-none"
              />
            </div>

            <div className="w-full min-w-0">
              <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number *</label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+968 9XXXXXXX"
                className="w-full min-w-0 max-w-full box-border px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:border-amber-500 outline-none"
              />
            </div>

            <div className="w-full min-w-0">
              <label className="block text-xs font-medium text-slate-300 mb-1">Service</label>
              <select
                value={formData.service}
                onChange={e => setFormData({ ...formData, service: e.target.value })}
                className="w-full min-w-0 max-w-full box-border px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:border-amber-500 outline-none"
              >
                {siteData.services.map(s => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
                <option value="Annual Maintenance Plan">Annual Maintenance Plan (AMC)</option>
              </select>
            </div>

            <div className="w-full min-w-0">
              <label className="block text-xs font-medium text-slate-300 mb-1">Brief Description</label>
              <textarea
                rows={2}
                value={formData.notes}
                onChange={e => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Location and scope..."
                className="w-full min-w-0 max-w-full box-border px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-white focus:border-amber-500 outline-none resize-y"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer active:scale-95"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
