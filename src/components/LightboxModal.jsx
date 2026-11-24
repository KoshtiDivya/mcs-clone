import React from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export default function LightboxModal({ image, isOpen, onClose, onNext, onPrev }) {
  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-3 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors z-50 cursor-pointer"
        aria-label="Close photo"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Buttons if provided */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors z-50 cursor-pointer"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 transition-colors z-50 cursor-pointer"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Content Container */}
      <div
        className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl">
          <img
            src={image.url}
            alt={image.caption || 'Project visual'}
            className="max-h-[72vh] w-auto max-w-full object-contain mx-auto"
          />
        </div>

        {image.caption && (
          <div className="mt-4 text-center max-w-2xl px-4 py-2 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-200 text-xs sm:text-sm font-medium">
            {image.caption}
          </div>
        )}
      </div>
    </div>
  );
}
