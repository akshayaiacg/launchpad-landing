import React from 'react';
import SectionHeader from './SectionHeader';
import { highlightsData } from '../data/landingData';
import { Globe2, Languages, FolderCheck, Film, Briefcase, Home, Check, ArrowRight } from 'lucide-react';

export default function ProgramHighlights({ onScrollToRegister }) {
  const iconMap = {
    Globe2: Globe2,
    Languages: Languages,
    FolderCheck: FolderCheck,
    Film: Film,
    Briefcase: Briefcase,
    Home: Home
  };

  return (
    <section 
      id="highlights" 
      className="py-20 md:py-28 bg-[#faf7f2] text-slate-900 relative overflow-hidden"
      aria-label="Core Program Highlights"
    >
      {/* Subtle Japanese Paper Dot Pattern */}
      <div className="absolute inset-0 bg-dot-pattern-light opacity-60 pointer-events-none" />

      {/* Decorative Traditional Japanese Torii / Circle Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-12 right-6 lg:right-20 font-serif text-8xl lg:text-[12rem] font-black text-red-600/[0.04] pointer-events-none select-none"
      >
        日本
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Signature Strengths"
          kanji="特長"
          title="Engineered from Ground Up for the Japanese Anime Industry"
          subtitle="A holistic immersion combining Japanese masterclass instruction, language fluency, and production floor discipline under one residential roof."
          light={true}
        />

        {/* 6 Highlights Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {highlightsData.map((item) => {
            const Icon = iconMap[item.icon] || Globe2;
            return (
              <div
                key={item.id}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-red-400/60 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Kanji Badge on top-right */}
                <span 
                  aria-hidden="true" 
                  className="absolute top-6 right-6 font-serif text-2xl font-bold text-slate-300 group-hover:text-red-500/30 transition-colors select-none"
                >
                  {item.kanji}
                </span>

                <div>
                  {/* Icon & Tag */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-50 to-red-100 border border-red-200 text-red-600 flex items-center justify-center shadow-inner group-hover:bg-red-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-red-700 uppercase tracking-wider bg-red-50 px-2.5 py-1 rounded-md">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-red-600 transition-colors mb-3 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-6">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                    J-Anime Standard
                  </span>
                  <button
                    type="button"
                    onClick={onScrollToRegister}
                    className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>Learn Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature summary banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#0d1428] via-[#111a36] to-[#1c0d20] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400">
              Kyoto Seika University Pedagogy
            </span>
            <h4 className="text-xl sm:text-2xl font-bold mt-1">
              Ready to verify whether your drawing skills match Japanese studio benchmarks?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Schedule an in-person or digital portfolio review with our academic mentors.
            </p>
          </div>
          <button
            type="button"
            onClick={onScrollToRegister}
            className="shrink-0 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-sm tracking-wider uppercase transition-all shadow-lg shadow-red-600/30 cursor-pointer"
          >
            Book Portfolio Review
          </button>
        </div>

      </div>
    </section>
  );
}
