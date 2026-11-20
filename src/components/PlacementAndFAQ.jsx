import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { institutionalStatsData, testimonialsData, faqData } from '../data/landingData';
import { ChevronDown, Play, Building2, Quote, CheckCircle, FileEdit, HelpCircle } from 'lucide-react';

export default function PlacementAndFAQ({ onOpenModal }) {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <section 
      id="faq" 
      className="py-20 md:py-28 bg-[#faf7f2] text-slate-900 relative overflow-hidden"
      aria-label="Institutional Track Record, Testimonials and FAQ"
    >
      <div className="absolute inset-0 bg-dot-pattern-light opacity-50 pointer-events-none" />

      {/* Kanji Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-10 font-serif text-8xl lg:text-[12rem] font-black text-slate-900/[0.03] pointer-events-none select-none"
      >
        実績
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sub-Part 1: Institutional Track Record Metrics */}
        <div className="mb-20">
          <SectionHeader 
            badge="Institutional Trust & Legacy"
            kanji="校風"
            title="Two Decades of Creative Animation Excellence"
            subtitle="Backed by IACG Multimedia College's established production infrastructure and Tokyo university alliances."
            light={true}
          />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {institutionalStatsData.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm text-center flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900">
                    {stat.label}
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-100">
                  <span className="text-[10px] font-mono text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded">
                    {stat.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-Part 2: Campus & Creative Studio Life Gallery Placeholders */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Residential Campus Experience
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Inside the 24/7 Creative Sanctuary
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Purpose-built spaces for life drawing, digital sakuga, screening, and peer reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* Gallery Item 1 */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 flex flex-col justify-end group shadow-md border border-slate-200">
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[10px] font-mono text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                  [Campus Photo Placeholder]
                </span>
                <h4 className="text-lg font-bold mt-1">
                  Digital Sakuga & Cintiq Labs
                </h4>
                <p className="text-xs text-slate-300">
                  Dedicated individual high-spec drawing display pods with Clip Studio Paint EX.
                </p>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-red-950 to-slate-950 text-white p-6 flex flex-col justify-end group shadow-md border border-slate-200">
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[10px] font-mono text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                  [Campus Photo Placeholder]
                </span>
                <h4 className="text-lg font-bold mt-1">
                  Life Drawing & Traditional Anatomy Pod
                </h4>
                <p className="text-xs text-slate-300">
                  Rotational model setups, Japanese light-boxes, and physical peg-bar desks.
                </p>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 flex flex-col justify-end group shadow-md border border-slate-200">
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors pointer-events-none" />
              <div className="relative z-10">
                <span className="text-[10px] font-mono text-amber-300 bg-amber-950/80 px-2 py-0.5 rounded border border-amber-500/30">
                  [Campus Photo Placeholder]
                </span>
                <h4 className="text-lg font-bold mt-1">
                  Manga Library & Screening Theatre
                </h4>
                <p className="text-xs text-slate-300">
                  Over 2,000 authentic Japanese manga volumes, artbooks, and 4K dailies projection.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Sub-Part 3: Video Testimonials from Students / Alumni */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full">
              Voices of the Cohort
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Student Experiences & Studio Breakthroughs
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonialsData.map((test) => (
              <div 
                key={test.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-md flex flex-col justify-between hover:shadow-xl transition-all"
              >
                <div>
                  {/* Video Thumbnail Placeholder with Play Icon */}
                  <div 
                    onClick={onOpenModal}
                    className="relative mb-5 rounded-xl aspect-video bg-gradient-to-tr from-slate-900 to-red-950 flex flex-col items-center justify-center p-3 text-center cursor-pointer group overflow-hidden"
                  >
                    <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    </div>
                    <span className="text-[10px] font-mono text-amber-300 mt-2">
                      {test.videoThumbnailNote}
                    </span>
                  </div>

                  <Quote className="w-6 h-6 text-red-400 mb-2" />
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-4">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 font-bold text-xs flex items-center justify-center shrink-0">
                    {test.initials}
                  </div>
                  <div>
                    <h5 className="font-bold text-xs text-slate-900">
                      {test.name}
                    </h5>
                    <span className="text-[10px] text-slate-500 block">
                      {test.track}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* Sub-Part 4: FAQ Accordion */}
        <div className="max-w-4xl mx-auto">
          <SectionHeader 
            badge="Frequently Asked Questions"
            kanji="質問"
            title="Everything You Need to Know Before Enrolling"
            subtitle="Straightforward answers regarding language, campus living, hardware, and Tokyo visa guidelines."
            light={true}
          />

          <div className="space-y-3">
            {faqData.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <div 
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-expanded={isOpen}
                  >
                    <span className="font-bold text-base sm:text-lg text-slate-900 leading-snug">
                      {item.q}
                    </span>
                    <ChevronDown className={`w-5 h-5 text-red-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            Have a unique question about admission criteria or portfolio guidelines?{' '}
            <a href="#register" className="text-red-600 font-bold underline hover:text-red-700">
              Submit your inquiry in the registration form below
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
