import React from 'react';
import SectionHeader from './SectionHeader';
import { milestoneData } from '../data/landingData';
import { CheckCircle2, Calendar, Milestone, ArrowRight, ShieldCheck } from 'lucide-react';

export default function MilestoneJourney() {
  return (
    <section 
      id="milestones" 
      className="py-20 md:py-28 bg-[#070b14] text-white relative overflow-hidden"
      aria-label="Five Stage Milestone Journey"
    >
      {/* Background Japanese Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-10 font-serif text-8xl lg:text-[12rem] font-black text-white/[0.02] pointer-events-none select-none"
      >
        里程
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Curriculum Progression"
          kanji="五段階"
          title={milestoneData.sectionTitle}
          subtitle={milestoneData.subheading}
          light={false}
        />

        {/* Milestone Vertical/Horizontal Timeline */}
        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
          {milestoneData.stages.map((stage, idx) => (
            <div 
              key={idx}
              className="relative rounded-2xl bg-gradient-to-r from-[#0f172a] via-[#121c33] to-[#0a101f] border border-white/10 p-6 sm:p-8 hover:border-red-500/40 transition-all shadow-xl group"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-red-600 text-white font-mono font-black text-sm flex items-center justify-center shrink-0 shadow-lg shadow-red-600/30">
                    {stage.stage.split(' ')[1]}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-red-400 uppercase tracking-widest">
                        {stage.stage}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10">
                        {stage.duration}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-red-400 transition-colors mt-0.5">
                      {stage.title}
                    </h3>
                  </div>
                </div>

                {/* Japanese Label */}
                <div 
                  aria-hidden="true"
                  className="font-serif text-xl sm:text-2xl font-bold text-slate-500/40 md:text-right shrink-0"
                >
                  {stage.kanji}
                </div>
              </div>

              {/* Stage Focus Lead */}
              <p className="text-xs sm:text-sm text-amber-200/90 font-medium mb-4 pl-0 md:pl-16">
                Core Focus: {stage.focus}
              </p>

              {/* Key Milestones Bullets */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-5 pl-0 md:pl-16">
                {stage.milestones.map((ms, mIdx) => (
                  <div key={mIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ms}</span>
                  </div>
                ))}
              </div>

              {/* Deliverable Pill at bottom */}
              <div className="pl-0 md:pl-16 pt-3 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Milestone className="w-3.5 h-3.5 text-red-400" />
                  <span className="font-semibold text-slate-300">Milestone Review Output:</span>
                  <span className="text-amber-300 font-mono">{stage.deliverable}</span>
                </div>
                <span className="text-[11px] font-mono text-emerald-400">
                  Director Sign-off Required
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
