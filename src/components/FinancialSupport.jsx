import React from 'react';
import SectionHeader from './SectionHeader';
import { financialSupportData } from '../data/landingData';
import { ShieldAlert, Award, CreditCard, Landmark, Clock, ArrowRight } from 'lucide-react';

export default function FinancialSupport({ onScrollToRegister }) {
  const iconMap = [Award, Clock, Landmark, CreditCard];

  return (
    <section 
      id="financial" 
      className="py-20 md:py-28 bg-[#090e1c] text-white relative overflow-hidden"
      aria-label="Financial Support and Payment Plans"
    >
      {/* Background Japanese Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 left-10 font-serif text-8xl lg:text-[12rem] font-black text-white/[0.02] pointer-events-none select-none"
      >
        学費
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Transparent Fee Options"
          kanji="奨学制度"
          title={financialSupportData.sectionTitle}
          subtitle={financialSupportData.subheading}
          light={false}
        />

        {/* 4 Financial Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {financialSupportData.supportOptions.map((opt, idx) => {
            const Icon = iconMap[idx % iconMap.length];

            return (
              <div 
                key={idx}
                className="rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#0a101f] border border-white/10 p-6 flex flex-col justify-between hover:border-red-500/40 transition-all shadow-xl"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-[10px] font-mono text-amber-300 bg-amber-950/60 border border-amber-500/30 px-2 py-0.5 rounded inline-block mb-2">
                    {opt.badge}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {opt.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {opt.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400">
                  {opt.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Compliance & Disclaimer Box (as required by prompt) */}
        <div className="max-w-4xl mx-auto p-5 sm:p-6 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs leading-relaxed flex items-start gap-4">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="block text-amber-300 font-bold mb-1 uppercase tracking-wider">
              Transparency & Regulatory Compliance Notice:
            </strong>
            <p>
              {financialSupportData.disclaimer}
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={onScrollToRegister}
            className="inline-flex items-center gap-2 text-xs font-bold text-red-400 hover:text-red-300 uppercase tracking-wider cursor-pointer"
          >
            <span>Request Detailed Fee Breakup & Loan Documentation Kit</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
