import React from 'react';
import SectionHeader from './SectionHeader';
import { languageProgressionData } from '../data/landingData';
import { Languages, BookOpen, MessageSquare, Award, CheckCircle } from 'lucide-react';

export default function JapaneseProgression() {
  return (
    <section 
      id="language" 
      className="py-20 md:py-28 bg-[#090e1c] text-white relative overflow-hidden"
      aria-label="Japanese Language Progression"
    >
      {/* Background Kanji Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-10 font-serif text-8xl lg:text-[12rem] font-black text-white/[0.02] pointer-events-none select-none"
      >
        語学
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Bilingual Advantage"
          kanji="日本語"
          title={languageProgressionData.sectionTitle}
          subtitle={languageProgressionData.subheading}
          light={false}
        />

        {/* Progression Ladder Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-5 mb-14">
          {languageProgressionData.levels.map((lvl, idx) => (
            <div 
              key={idx}
              className={`rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 ${
                idx === 4
                  ? 'bg-gradient-to-b from-red-950/60 to-slate-900 border-2 border-red-500/50 shadow-xl'
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              <div>
                {/* Level Title & Kanji */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-red-400">
                    {lvl.level}
                  </span>
                  <span 
                    aria-hidden="true" 
                    className="font-serif text-sm font-bold text-slate-500"
                  >
                    {lvl.kanji}
                  </span>
                </div>

                <div className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10 inline-block mb-3">
                  {lvl.timing}
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-tight">
                  {lvl.badge}
                </h3>

                {/* Target Vocab & Kanji stats */}
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 space-y-1 mb-4 text-xs font-mono">
                  <div className="text-emerald-400">
                    📖 {lvl.vocab}
                  </div>
                  <div className="text-amber-400">
                    ✍️ {lvl.kanjiCount}
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  <strong className="text-slate-400 block mb-0.5">Syllabus Focus:</strong>
                  {lvl.focus}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10">
                <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
                  Studio Competency:
                </span>
                <p className="text-[11px] text-slate-300 leading-snug">
                  {lvl.competency}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Communication Deep Dive */}
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#11192e] to-[#1a1226] border border-white/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-red-400">
                Beyond Standard Textbooks
              </span>
              <h4 className="text-xl font-bold text-white mt-1">
                Specialized Anime Production Japanese (アニメ制作現場の日本語)
              </h4>
            </div>
            <span className="text-xs font-mono bg-red-600/30 text-red-300 border border-red-500/40 px-3 py-1 rounded-full">
              Hou-Ren-So Protocol
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
            Most Japanese language courses teach tourist or generic academic grammar. At J-Anime Pro, our sensei teach the real colloquial phrases, script notations (Daihon), time-sheet shorthand, and respectful feedback responses used daily inside Tokyo animation studios.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono">
            <div className="bg-black/40 p-2.5 rounded border border-white/5">
              <span className="text-red-400 font-bold block">原画 (Genga)</span>
              <span className="text-slate-400 text-[10px]">Key Animation</span>
            </div>
            <div className="bg-black/40 p-2.5 rounded border border-white/5">
              <span className="text-red-400 font-bold block">動画 (Douga)</span>
              <span className="text-slate-400 text-[10px]">In-Betweening</span>
            </div>
            <div className="bg-black/40 p-2.5 rounded border border-white/5">
              <span className="text-red-400 font-bold block">タイムシート</span>
              <span className="text-slate-400 text-[10px]">Exposure Sheet</span>
            </div>
            <div className="bg-black/40 p-2.5 rounded border border-white/5">
              <span className="text-red-400 font-bold block">報連相 (Hou-Ren-So)</span>
              <span className="text-slate-400 text-[10px]">Studio Reporting Norm</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
