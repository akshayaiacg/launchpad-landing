import React from 'react';
import { X, Play, Film, Sparkles, Volume2 } from 'lucide-react';

export default function ShowreelModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="Showreel Video Player"
    >
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-white/20 rounded-2xl overflow-hidden shadow-2xl shadow-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-950 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <h3 className="text-sm sm:text-base font-bold text-white">
              J-Anime Residential Program • Studio Showreel & Campus Walkthrough
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close Showreel Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Simulation Player Area */}
        <div className="relative aspect-video bg-gradient-to-tr from-slate-950 via-slate-900 to-red-950/40 flex flex-col items-center justify-center p-8 text-center">
          
          <div className="w-20 h-20 rounded-full bg-red-600/20 border-2 border-red-500/50 flex items-center justify-center text-red-400 mb-4 animate-pulse">
            <Film className="w-9 h-9" />
          </div>

          <span className="text-xs font-mono uppercase tracking-widest text-red-400 bg-red-950/80 px-3 py-1 rounded-full border border-red-500/30 mb-3">
            [Sample Video Player Placeholder]
          </span>

          <h4 className="text-xl sm:text-2xl font-bold text-white max-w-lg">
            "From Sketchpad to Shinjuku: Inside the Two-Year Residential Anime Journey"
          </h4>

          <p className="text-xs sm:text-sm text-slate-300 max-w-md mt-2">
            In production, replace this embed container with an authenticated YouTube/Vimeo embed or hosted MP4 video showcase of student sakuga and campus life.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
              <Volume2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Audio: Japanese Sensei Commentary + English Subtitles</span>
            </div>
            <div className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300">
              Duration: 02:45 min • 4K Sakuga Breakdown
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-950 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <span>Filmed on campus at IACG Multimedia College, Hyderabad</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-500 transition-colors"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
