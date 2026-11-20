import React from 'react';

export default function SectionHeader({
  badge,
  kanji,
  title,
  subtitle,
  align = 'center',
  light = false
}) {
  const isCenter = align === 'center';

  return (
    <div className={`relative mb-12 md:mb-16 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {/* Kanji Watermark Accent */}
      {kanji && (
        <span 
          aria-hidden="true"
          className={`absolute select-none pointer-events-none -top-10 font-serif text-6xl md:text-8xl font-black tracking-widest opacity-5 ${
            isCenter ? 'left-1/2 -translate-x-1/2' : 'left-0'
          } ${light ? 'text-slate-900' : 'text-white'}`}
        >
          {kanji}
        </span>
      )}

      {/* Top Badge */}
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full text-xs font-semibold tracking-wider uppercase ${
          light 
            ? 'bg-red-100 text-red-700 border border-red-200' 
            : 'bg-red-950/70 text-red-400 border border-red-500/30'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff2a4b] animate-pulse" />
          <span>{badge}</span>
        </div>
      )}

      {/* Main Title */}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
        light ? 'text-slate-900' : 'text-white'
      }`}>
        {title}
      </h2>

      {/* Accent Line */}
      <div className={`h-1 w-16 bg-gradient-to-r from-[#e63946] to-amber-500 rounded-full my-4 ${
        isCenter ? 'mx-auto' : ''
      }`} />

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${
          light ? 'text-slate-600' : 'text-slate-300'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
