import React from 'react';
import SectionHeader from './SectionHeader';
import { portfolioAndSelectionData } from '../data/landingData';
import { FolderGit2, Briefcase, CalendarCheck, Check, ArrowRight } from 'lucide-react';

export default function PortfolioOutcomes({ onScrollToRegister }) {
  return (
    <section 
      id="outcomes" 
      className="py-20 md:py-28 bg-[#faf7f2] text-slate-900 relative overflow-hidden"
      aria-label="Portfolio Outcomes and Selection Timeline"
    >
      <div className="absolute inset-0 bg-dot-pattern-light opacity-50 pointer-events-none" />

      {/* Kanji Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-10 font-serif text-8xl lg:text-[12rem] font-black text-slate-900/[0.03] pointer-events-none select-none"
      >
        成果
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Graduation Deliverables & Admissions Flow"
          kanji="就業実績"
          title={portfolioAndSelectionData.sectionTitle}
          subtitle={portfolioAndSelectionData.subheading}
          light={true}
        />

        {/* Two-Column: Left Portfolio Deliverables, Right Career Outcomes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          
          {/* Portfolio Deliverables Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-slate-900">
                  Mandatory Graduation Portfolio Reel
                </h3>
                <p className="text-xs text-slate-500">
                  Targeted specifically for Tokyo studio recruitment juries
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {portfolioAndSelectionData.portfolioDeliverables.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex items-center gap-2 font-bold text-sm text-slate-900 mb-1">
                    <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-4">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Career Pathways & Compensation Framework */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">
                    Target Career Pathways in Japan
                  </h3>
                  <p className="text-xs text-slate-500">
                    Bilingual roles qualifying for international work visas
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                {portfolioAndSelectionData.careerOutcomes.map((co, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span className="font-bold text-sm text-slate-900">
                      {co.role}
                    </span>
                    <span className="text-[11px] font-mono text-amber-800 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 shrink-0">
                      {co.salaryEstimate}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-500 leading-relaxed">
                * Note: In accordance with Japanese Immigration guidelines, overseas employment requires passing official JLPT certification (typically N3 or N2) and meeting studio portfolio criteria.
              </p>
            </div>

            <button
              type="button"
              onClick={onScrollToRegister}
              className="mt-6 w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <span>Download Studio Placement Guide</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Selection Process Timeline */}
        <div className="bg-gradient-to-r from-[#0d1428] via-[#101933] to-[#1c0d20] rounded-3xl p-6 sm:p-10 text-white shadow-2xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
              Transparent 4-Step Selection Process
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold mt-1">
              How Candidates Are Selected for the Cohort
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Our cohort is capped at 35 seats per session to maintain 1:1 mentor feedback ratios.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioAndSelectionData.selectionTimeline.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-mono font-black text-red-500 mb-2">
                    {step.step}
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={onScrollToRegister}
              className="px-8 py-3.5 rounded-full bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-600/40 cursor-pointer transition-all"
            >
              Start Your Step 01 Application
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
