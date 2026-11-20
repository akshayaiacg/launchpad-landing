import React from 'react';
import SectionHeader from './SectionHeader';
import { comparisonData } from '../data/landingData';
import { XCircle, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

export default function SelfStudyComparison() {
  return (
    <section 
      id="comparison" 
      className="py-20 md:py-28 bg-[#faf7f2] text-slate-900 relative overflow-hidden"
      aria-label="Comparison with Self Study"
    >
      <div className="absolute inset-0 bg-dot-pattern-light opacity-50 pointer-events-none" />

      {/* Kanji Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-10 font-serif text-8xl lg:text-[12rem] font-black text-slate-900/[0.03] pointer-events-none select-none"
      >
        比較
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Structured vs. Self-Taught"
          kanji="進路比較"
          title={comparisonData.sectionTitle}
          subtitle={comparisonData.subheading}
          light={true}
        />

        {/* Comparison Table / Cards Container */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 bg-slate-950 text-white p-5 sm:p-6 divide-y md:divide-y-0 md:divide-x divide-white/10 items-center">
            <div className="md:col-span-4 font-mono text-xs uppercase tracking-wider text-slate-400 font-bold mb-3 md:mb-0">
              Evaluation Criteria
            </div>
            <div className="md:col-span-4 flex items-center gap-2 text-rose-400 font-bold text-sm py-2 md:py-0 md:px-4">
              <XCircle className="w-4 h-4 shrink-0" />
              <span>Unstructured Self-Study</span>
            </div>
            <div className="md:col-span-4 flex items-center gap-2 text-emerald-400 font-bold text-sm pt-2 md:pt-0 md:px-4">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>J-Anime Residential Pro</span>
            </div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-slate-100">
            {comparisonData.rows.map((row, idx) => (
              <div 
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 gap-4 md:gap-0 hover:bg-slate-50/80 transition-colors items-center"
              >
                {/* Criterion */}
                <div className="md:col-span-4 font-bold text-sm sm:text-base text-slate-900 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-600 shrink-0" />
                  <span>{row.criterion}</span>
                </div>

                {/* Self Study */}
                <div className="md:col-span-4 text-xs sm:text-sm text-slate-600 md:px-4 flex items-start gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    ✕
                  </div>
                  <span>{row.selfStudy}</span>
                </div>

                {/* Residential Program */}
                <div className="md:col-span-4 text-xs sm:text-sm text-slate-800 font-medium md:px-4 flex items-start gap-2 bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100/60 md:bg-transparent md:p-0 md:border-0">
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold text-[10px]">
                    ✓
                  </div>
                  <span>{row.residential}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Takeaway Box */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <strong>Why Japanese studios rarely hire off internet portfolios alone:</strong> Tokyo directors require verifiable proof that you can hit timing sheet frames accurately, follow Hou-Ren-So daily reporting protocol in Japanese, and adapt instantly to unit director corrections.
          </div>
        </div>

      </div>
    </section>
  );
}
