import React from 'react';
import { Play, ArrowRight, CheckCircle2, Sparkles, Building2, Globe, Award, ShieldCheck } from 'lucide-react';
import { heroData } from '../data/landingData';

export default function Hero({ onOpenModal, onScrollToRegister }) {
  return (
    <section 
      id="hero" 
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#060a14] via-[#091020] to-[#0d1428] text-white"
      aria-label="Program Hero Section"
    >
      {/* Background Anime Aesthetic Accents & Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      
      {/* Red Radiant Orb Accents */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[450px] h-[450px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      {/* Japanese Background Kanji Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-20 right-4 lg:right-16 select-none pointer-events-none text-white/[0.03] font-serif text-8xl lg:text-[14rem] font-black leading-none"
      >
        作画
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Feature Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/80 border border-red-500/30 text-red-300 text-xs sm:text-sm font-semibold shadow-inner">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>{heroData.badge}</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs">
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span>Kyoto Seika University Alliance</span>
          </div>
        </div>

        {/* Hero Headings */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <p className="text-xs sm:text-sm font-mono tracking-widest text-red-400 uppercase mb-3 font-semibold">
            {heroData.japaneseSubheading}
          </p>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Turn Your Raw Drawing Passion Into a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-300">
              Studio-Ready Anime Career
            </span>{' '}
            in Japan
          </h1>

          <div className="inline-block px-4 py-1.5 mb-6 rounded-lg bg-white/5 border border-white/15 text-slate-200 text-xs sm:text-sm font-mono font-bold tracking-wider">
            {heroData.programName}
          </div>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
            {heroData.summary}
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={onScrollToRegister}
              className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider bg-gradient-to-r from-[#e63946] via-[#ff2a4b] to-rose-600 text-white shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer"
            >
              <span>{heroData.ctaPrimary}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenModal}
              className="w-full sm:w-auto px-7 py-4 rounded-xl text-sm sm:text-base font-bold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/20 backdrop-blur-sm hover:text-white transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <div className="w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
              </div>
              <span>Watch Studio Showreel</span>
            </button>
          </div>

          <p className="text-xs text-slate-400 mt-3">
            * Limited to 35 seats per cohort • Merit scholarships up to 30% available on qualifying portfolio
          </p>
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-5xl mx-auto mb-12">
          {heroData.trustPills.map((pill, idx) => (
            <div 
              key={idx}
              className="bg-white/5 border border-white/10 hover:border-white/20 rounded-xl p-3.5 flex flex-col transition-all"
            >
              <div className="flex items-center gap-2 mb-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-bold text-white tracking-tight">{pill.label}</span>
              </div>
              <span className="text-[11px] text-slate-400 leading-snug">{pill.detail}</span>
            </div>
          ))}
        </div>

        {/* Large Anime Art / Studio Video Showcase Area */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-black/80 bg-slate-950 group">
          
          {/* Visual Showcase Graphic Container */}
          <div className="relative aspect-video w-full bg-gradient-to-br from-[#0e172a] via-[#1a1226] to-[#260e1d] flex flex-col items-center justify-center p-6 text-center overflow-hidden">
            
            {/* Background SVG Japanese Sakuga Line Art Illustration */}
            <svg 
              className="absolute inset-0 w-full h-full opacity-25 object-cover pointer-events-none" 
              viewBox="0 0 1200 675" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="600" cy="337" r="280" stroke="#e63946" strokeWidth="2" strokeDasharray="6 6" />
              <circle cx="600" cy="337" r="190" stroke="#f59e0b" strokeWidth="1.5" />
              <path d="M0 675 L400 300 L600 450 L900 200 L1200 675" stroke="#ff2a4b" strokeWidth="2" opacity="0.4" />
              <path d="M150 100 Q 600 250 1050 100" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="600" y1="0" x2="600" y2="675" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.2" />
            </svg>

            {/* Subtle Japanese Brush Text */}
            <div className="absolute top-6 left-6 flex items-center gap-2 text-xs font-mono text-red-300/80 bg-black/40 px-3 py-1 rounded-md backdrop-blur-sm border border-white/10">
              <span>GENGA PIPELINE REEL • 2D SAKUGA DYNAMICS</span>
            </div>

            <div className="absolute top-6 right-6 text-right">
              <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2.5 py-1 rounded">
                [Cinematic Showreel Preview Area]
              </span>
            </div>

            {/* Play Button Trigger */}
            <button
              type="button"
              onClick={onOpenModal}
              className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-red-600 to-rose-700 text-white flex items-center justify-center shadow-2xl shadow-red-600/60 group-hover:scale-110 active:scale-95 transition-all cursor-pointer border-2 border-white/40"
              aria-label="Play Studio Showreel Video"
            >
              <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white ml-1 text-white" />
              <span className="absolute -inset-2 rounded-full border-2 border-red-500/50 animate-ping pointer-events-none" />
            </button>

            <div className="relative z-10 mt-6 max-w-md">
              <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Watch 2-Minute Student Sakuga & Campus Walkthrough
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Experience real classroom clips, genga exposure sheets, and Japanese mentor review sessions.
              </p>
            </div>

            {/* Bottom Status Ticker inside Preview */}
            <div className="absolute bottom-4 inset-x-6 flex flex-wrap items-center justify-between text-[11px] font-mono text-slate-400 bg-black/60 backdrop-blur-md px-4 py-2 rounded-lg border border-white/10">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Tokyo Studio Pipeline Training
              </span>
              <span className="hidden sm:inline text-slate-400">Clip Studio EX • Toon Boom Harmony • JLPT N2 Immersion</span>
              <span className="text-red-300 font-bold">IACG Madhapur Campus</span>
            </div>
          </div>

          {/* Quick Metrics Strip below video */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-[#0a101f] border-t border-white/10">
            {heroData.quickStats.map((st, i) => (
              <div key={i} className="p-4 sm:p-5 text-center">
                <div className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                  {st.value}
                </div>
                <div className="text-xs font-semibold text-red-400 tracking-wider uppercase mt-1">
                  {st.label}
                </div>
                <div className="text-[11px] text-slate-400">
                  {st.sub}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
