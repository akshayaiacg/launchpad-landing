import React from 'react';
import SectionHeader from './SectionHeader';
import { eligibilityRoutesData } from '../data/landingData';
import { CheckCircle2, ArrowRight, Sparkles, Clock, Target, Users } from 'lucide-react';

export default function EligibilityAdmission({ onSelectRoute }) {
  return (
    <section 
      id="eligibility" 
      className="py-20 md:py-28 bg-[#090e1c] text-white relative overflow-hidden"
      aria-label="Eligibility and Admission Routes"
    >
      {/* Background Subtle Japanese Kanji */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-10 font-serif text-8xl lg:text-[12rem] font-black text-white/[0.02] pointer-events-none select-none"
      >
        選考
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Admissions & Eligibility"
          kanji="入学案内"
          title={eligibilityRoutesData.sectionTitle}
          subtitle={eligibilityRoutesData.subheading}
          light={false}
        />

        {/* Side-by-side Admission Routes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {eligibilityRoutesData.routes.map((route) => {
            const isRouteA = route.id === 'route-a';

            return (
              <div
                key={route.id}
                className={`relative rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between transition-all duration-300 ${
                  isRouteA
                    ? 'bg-gradient-to-b from-[#131b33] via-[#0f172a] to-[#0a101f] border-2 border-red-500/50 shadow-2xl shadow-red-950/40'
                    : 'bg-gradient-to-b from-[#11192e] via-[#0d1424] to-[#090d18] border border-white/10 shadow-xl'
                }`}
              >
                {/* Popular / Fast-Track Ribbon */}
                {isRouteA && (
                  <div className="absolute -top-3.5 right-8 px-4 py-1 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white text-[11px] font-extrabold uppercase tracking-widest shadow-md border border-white/20 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Recommended for Experienced Artists</span>
                  </div>
                )}

                <div>
                  {/* Badge & Title */}
                  <div className="mb-4">
                    <span className={`inline-block text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-md mb-2 ${
                      isRouteA ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                    }`}>
                      {route.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      {route.title}
                    </h3>
                    <p className="text-sm text-red-300/90 font-medium mt-1">
                      {route.subtitle}
                    </p>
                  </div>

                  {/* Ideal For */}
                  <div className="p-4 rounded-xl bg-white/5 border border-white/10 mb-6">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-300 uppercase tracking-wide mb-1">
                      <Target className="w-3.5 h-3.5" />
                      <span>Candidate Fit Profile</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {route.idealFor}
                    </p>
                  </div>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-red-400" />
                      <span>Admission Criteria & Evaluation</span>
                    </h4>
                    <ul className="space-y-2.5">
                      {route.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Fit Checklist */}
                  <div className="mb-8 p-4 rounded-xl bg-black/40 border border-white/5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Readiness Checklist (Tick What Applies)</span>
                    </h4>
                    <div className="space-y-2">
                      {route.fitChecklist.map((fit, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                          <div className="w-4 h-4 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0">
                            ✓
                          </div>
                          <span>{fit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline & Action CTA */}
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                    <Clock className="w-3.5 h-3.5 text-red-400 shrink-0" />
                    <span>{route.timeline}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectRoute(route.id)}
                    className={`w-full py-4 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isRouteA
                        ? 'bg-gradient-to-r from-red-600 via-rose-600 to-[#e63946] text-white shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:brightness-110 active:scale-95'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/20 active:scale-95'
                    }`}
                  >
                    <span>{route.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Helpline Notice */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-xl mx-auto">
          Unsure which route matches your current sketch skills? Our faculty conducts complimentary 15-minute diagnostic portfolio counseling calls.
        </div>
      </div>
    </section>
  );
}
