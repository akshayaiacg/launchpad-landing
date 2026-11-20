import React from 'react';
import SectionHeader from './SectionHeader';
import { pathwaysData } from '../data/landingData';
import { GraduationCap, Award, Compass, CheckCircle, ArrowRight } from 'lucide-react';

export default function JapanPathwayOverview({ onScrollToRegister }) {
  return (
    <section 
      id="pathways" 
      className="py-20 md:py-28 bg-[#faf7f2] text-slate-900 relative overflow-hidden"
      aria-label="Japan Pathway Progression Options"
    >
      <div className="absolute inset-0 bg-dot-pattern-light opacity-50 pointer-events-none" />

      {/* Kanji Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 left-10 font-serif text-8xl lg:text-[12rem] font-black text-slate-900/[0.03] pointer-events-none select-none"
      >
        進路
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Academic Progression"
          kanji="進学段階"
          title={pathwaysData.sectionTitle}
          subtitle={pathwaysData.subheading}
          light={true}
        />

        {/* 3 Visually Distinct Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pathwaysData.cards.map((card, idx) => {
            const isFeatured = card.featured;

            return (
              <div
                key={card.id}
                className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#0f172a] via-[#141e36] to-[#0a101f] text-white shadow-2xl ring-2 ring-red-500 scale-100 md:-translate-y-2'
                    : 'bg-white text-slate-900 border border-slate-200/90 shadow-lg hover:shadow-xl'
                }`}
              >
                {/* Featured Ribbon */}
                {isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                    Most Popular Degree Pathway
                  </div>
                )}

                <div>
                  {/* Badge & Kanji */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border ${
                      isFeatured 
                        ? 'bg-red-500/20 text-red-300 border-red-500/30' 
                        : 'bg-slate-100 text-slate-700 border-slate-200'
                    }`}>
                      {card.badge}
                    </span>
                    <span 
                      aria-hidden="true" 
                      className={`font-serif text-lg font-bold ${
                        isFeatured ? 'text-red-400/50' : 'text-slate-400'
                      }`}
                    >
                      {card.kanji}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-black mb-2 leading-tight ${
                    isFeatured ? 'text-white' : 'text-slate-900'
                  }`}>
                    {card.title}
                  </h3>

                  {/* Target Audience */}
                  <p className={`text-xs font-semibold mb-4 ${
                    isFeatured ? 'text-amber-300' : 'text-red-700'
                  }`}>
                    {card.targetAudience}
                  </p>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-6 ${
                    isFeatured ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {card.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    <span className={`text-[11px] font-mono uppercase tracking-wider font-bold block ${
                      isFeatured ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      Key Program Pillars:
                    </span>
                    {card.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${
                          isFeatured ? 'text-red-400' : 'text-emerald-600'
                        }`} />
                        <span className={isFeatured ? 'text-slate-200' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome & CTA */}
                <div className={`pt-6 border-t ${
                  isFeatured ? 'border-white/10' : 'border-slate-100'
                }`}>
                  <div className={`p-3 rounded-xl text-xs mb-5 ${
                    isFeatured ? 'bg-white/5 text-slate-300' : 'bg-slate-50 text-slate-700 border border-slate-200/60'
                  }`}>
                    <strong className="block text-red-500 font-semibold mb-0.5">Career & Transfer Outcome:</strong>
                    {card.outcome}
                  </div>

                  <button
                    type="button"
                    onClick={onScrollToRegister}
                    className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isFeatured
                        ? 'bg-gradient-to-r from-red-600 to-rose-600 text-white hover:brightness-110 shadow-lg shadow-red-600/30'
                        : 'bg-slate-900 hover:bg-slate-800 text-white'
                    }`}
                  >
                    <span>Enquire About {card.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
