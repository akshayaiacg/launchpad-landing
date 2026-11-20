import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { mentorsData } from '../data/landingData';
import { ChevronLeft, ChevronRight, User, Award, ExternalLink, Sparkles } from 'lucide-react';

export default function MentorProfiles() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? mentorsData.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === mentorsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section 
      id="mentors" 
      className="py-20 md:py-28 bg-[#070b14] text-white relative overflow-hidden"
      aria-label="Industry Mentors and Faculty"
    >
      {/* Background Japanese Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-10 font-serif text-8xl lg:text-[12rem] font-black text-white/[0.02] pointer-events-none select-none"
      >
        師範
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="World-Class Pedagogy"
          kanji="指導陣"
          title="Trained Directly by Veteran Japanese Directors & Artists"
          subtitle="Learn the exact production disciplines, exposure sheet math, and brushwork from veterans who have created for mainstream Tokyo studios and published manga."
          light={false}
        />

        {/* Carousel Container */}
        <div className="relative">
          
          {/* Controls Bar for Desktop & Mobile */}
          <div className="flex items-center justify-between mb-8">
            <div className="text-xs font-mono text-slate-400">
              Showing Mentor <span className="text-red-400 font-bold">{currentIndex + 1}</span> of {mentorsData.length}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={prevSlide}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/15 text-slate-300 hover:text-white transition-all cursor-pointer focus:ring-2 focus:ring-red-500"
                aria-label="Previous Mentor"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                className="p-3 rounded-full bg-red-600 hover:bg-red-500 text-white transition-all cursor-pointer shadow-lg shadow-red-600/30 focus:ring-2 focus:ring-red-500"
                aria-label="Next Mentor"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Cards Display Grid (Desktop shows 3, mobile shows single or carousel) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentorsData.map((mentor, index) => {
              // Highlight the currently active index on mobile, show all on desktop
              const isActive = index === currentIndex;

              return (
                <div
                  key={mentor.id}
                  className={`rounded-2xl bg-gradient-to-b from-[#0f172a] to-[#090e1c] border border-white/10 p-6 flex flex-col justify-between transition-all duration-300 hover:border-red-500/40 hover:-translate-y-1 ${
                    isActive ? 'ring-2 ring-red-500/50 md:ring-0' : 'hidden md:flex'
                  }`}
                >
                  <div>
                    {/* Mentor Avatar Placeholder Frame */}
                    <div className="relative mb-6 rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-tr from-slate-950 via-slate-900 to-red-950/60 border border-white/10 flex flex-col items-center justify-center text-center p-4">
                      
                      {/* Avatar Initials Badge */}
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-tr ${mentor.avatarBg} text-white font-serif font-black text-2xl flex items-center justify-center shadow-xl border-2 border-white/20 mb-3`}>
                        {mentor.initials}
                      </div>

                      <span className="text-[10px] font-mono text-red-300 bg-black/60 px-2 py-0.5 rounded border border-white/10">
                        [Mentor Portrait Placeholder]
                      </span>

                      <div className="absolute bottom-2 right-2 flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded">
                        <Sparkles className="w-2.5 h-2.5 text-amber-400" />
                        <span>Faculty</span>
                      </div>
                    </div>

                    {/* Mentor Identity */}
                    <h3 className="text-xl font-bold text-white tracking-tight mb-1">
                      {mentor.name}
                    </h3>
                    <div className="text-xs font-semibold text-red-400 mb-2">
                      {mentor.role}
                    </div>
                    <div className="text-[11px] font-medium text-slate-400 mb-4 bg-white/5 p-2 rounded-lg border border-white/5">
                      {mentor.affiliation}
                    </div>

                    {/* Bio */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                      {mentor.bio}
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="pt-4 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block mb-2">
                      Specialized Expertise:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {mentor.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8 md:hidden">
            {mentorsData.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  dotIdx === currentIndex ? 'bg-red-500 w-6' : 'bg-white/20'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
