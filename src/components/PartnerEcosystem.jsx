import React from 'react';
import SectionHeader from './SectionHeader';
import { partnerEcosystemData } from '../data/landingData';
import { Building2, Globe, FileText, CheckCircle2 } from 'lucide-react';

export default function PartnerEcosystem() {
  return (
    <section 
      id="partners" 
      className="py-20 md:py-28 bg-[#070b14] text-white relative overflow-hidden"
      aria-label="Partner Ecosystem"
    >
      {/* Background Japanese Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-10 font-serif text-8xl lg:text-[12rem] font-black text-white/[0.02] pointer-events-none select-none"
      >
        提携
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="Global Ecosystem"
          kanji="産学連携"
          title={partnerEcosystemData.sectionTitle}
          subtitle={partnerEcosystemData.subheading}
          light={false}
        />

        {/* Informative Note Badge */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <span className="inline-block px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-amber-300 font-mono">
            {partnerEcosystemData.note}
          </span>
        </div>

        {/* Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerEcosystemData.partners.map((partner, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#0a101f] border border-white/10 p-6 flex flex-col justify-between hover:border-red-500/40 transition-all shadow-lg"
            >
              <div>
                {/* Category & Location */}
                <div className="flex items-center justify-between text-xs font-mono mb-3">
                  <span className="text-red-400 font-semibold uppercase">
                    {partner.category}
                  </span>
                  <span className="text-slate-400">
                    {partner.location}
                  </span>
                </div>

                {/* Partner Name */}
                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {partner.name}
                </h3>

                {/* Role Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {partner.role}
                </p>
              </div>

              {/* Status / Placeholder Tag */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{partner.status}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio MoU Inquiry Callout */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-xl mx-auto">
          Are you an animation studio, streaming platform, or cultural body interested in bilateral recruitment or student exchange? Contact our industry relations desk.
        </div>
      </div>
    </section>
  );
}
