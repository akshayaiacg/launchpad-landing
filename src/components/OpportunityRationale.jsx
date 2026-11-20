import React from 'react';
import SectionHeader from './SectionHeader';
import { opportunityData } from '../data/landingData';
import { TrendingUp, CheckCircle, ArrowRight, Layers, FileEdit } from 'lucide-react';

export default function OpportunityRationale() {
  return (
    <section 
      id="opportunity" 
      className="py-20 md:py-28 bg-[#faf7f2] text-slate-900 relative overflow-hidden"
      aria-label="Opportunity and Program Rationale"
    >
      <div className="absolute inset-0 bg-dot-pattern-light opacity-50 pointer-events-none" />

      {/* Background Kanji Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-10 font-serif text-8xl lg:text-[12rem] font-black text-red-600/[0.03] pointer-events-none select-none"
      >
        機運
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Global Demand & Rationale"
          kanji="市場需要"
          title={opportunityData.sectionTitle}
          subtitle={opportunityData.subheading}
          light={true}
        />

        {/* Narrative Context Card */}
        <div className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-md">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-red-600 uppercase tracking-wider mb-3">
            <TrendingUp className="w-4 h-4" />
            <span>Structural Shift in Japanese Animation Outsourcing</span>
          </div>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            {opportunityData.contextBody}
          </p>
        </div>

        {/* 4 Key Statistics Cards (Explicitly marked as editable sample figures) */}
        <div className="mb-20">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300 text-xs font-medium">
              <FileEdit className="w-3.5 h-3.5" />
              <span>Reference Key Industry Metrics • Clearly Marked Sample Figures</span>
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {opportunityData.sampleStats.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#e63946] mb-2 tracking-tight">
                    {stat.metric}
                  </div>
                  <div className="text-sm font-bold text-slate-900 mb-2">
                    {stat.label}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <span className="text-[11px] text-amber-700 bg-amber-50 px-2 py-0.5 rounded font-mono block">
                    {stat.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Four-Step Sequence (Assess -> Align -> Build -> Produce) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              {opportunityData.sequenceTitle}
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Our systematic pedagogical pipeline that turns untamed creative passion into high-precision commercial execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {opportunityData.steps.map((st, i) => (
              <div 
                key={i}
                className="relative bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md hover:border-red-400 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                {/* Step Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black font-mono text-red-600/30 group-hover:text-red-600 transition-colors">
                    {st.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold bg-slate-100 text-slate-600 px-2.5 py-1 rounded">
                    {st.action}
                  </span>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-red-600 transition-colors">
                    {st.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-red-600">
                  <span>Milestone Stage</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
