import React from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function LightboxModal({ image, isOpen, onClose, onNext, onPrev }) {
  if (!isOpen || !image) return null;

  return (
    <div
      className="lightbox-modal lightbox-overlay fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="lightbox-btn absolute top-6 right-6 p-3 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors z-50 cursor-pointer shadow-lg"
        aria-label="Close photo"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Navigation Buttons if provided */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="lightbox-btn absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors z-50 cursor-pointer shadow-lg"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}

      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="lightbox-btn absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors z-50 cursor-pointer shadow-lg"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Content Container */}
      <div
        className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="lightbox-frame relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
          <img
            src={image.url}
            alt={image.caption || 'Project visual'}
            className="max-h-[72vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>

        {image.caption && (
          <div
            className="lightbox-caption mt-4 text-center max-w-2xl px-5 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white text-xs sm:text-sm font-semibold shadow-2xl"
            style={{ color: '#ffffff', backgroundColor: 'rgba(15, 23, 42, 0.95)' }}
          >
            {image.caption}
          </div>
        )}
      </div>
    </div>
  );
}
