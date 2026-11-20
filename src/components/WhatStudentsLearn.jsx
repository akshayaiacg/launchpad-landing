import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { curriculumData } from '../data/landingData';
import { PenTool, Layers, Camera, Cpu, Sparkles, Check, ArrowRight, Briefcase } from 'lucide-react';

export default function WhatStudentsLearn({ onScrollToRegister }) {
  const [activeTab, setActiveTab] = useState(curriculumData.categories[0].id);

  const iconMap = {
    PenTool: PenTool,
    Layers: Layers,
    Camera: Camera,
    Cpu: Cpu,
    Sparkles: Sparkles
  };

  const selectedCategory = curriculumData.categories.find(c => c.id === activeTab) || curriculumData.categories[0];
  const IconComponent = iconMap[selectedCategory.icon] || PenTool;

  return (
    <section 
      id="curriculum" 
      className="py-20 md:py-28 bg-[#faf7f2] text-slate-900 relative overflow-hidden"
      aria-label="Anime and Manga Curriculum Details"
    >
      <div className="absolute inset-0 bg-dot-pattern-light opacity-50 pointer-events-none" />

      {/* Kanji Watermark */}
      <div 
        aria-hidden="true" 
        className="absolute top-10 right-10 font-serif text-8xl lg:text-[12rem] font-black text-red-600/[0.03] pointer-events-none select-none"
      >
        教育
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          badge="In-Depth Studio Curriculum"
          kanji="実習内容"
          title={curriculumData.sectionTitle}
          subtitle={curriculumData.subheading}
          light={true}
        />

        {/* Interactive Tabs Header */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {curriculumData.categories.map((cat) => {
            const TabIcon = iconMap[cat.icon] || PenTool;
            const isActive = cat.id === activeTab;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <TabIcon className="w-3.5 h-3.5" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel Content */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl mb-16">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
            <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center shadow-inner">
              <IconComponent className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-red-600 uppercase tracking-widest">
                Specialized Studio Domain
              </span>
              <h3 className="text-2xl font-black text-slate-900">
                {selectedCategory.name}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                {selectedCategory.summary}
              </p>
            </div>
          </div>

          {/* Module items */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Hands-On Production Modules:
            </h4>
            {selectedCategory.modules.map((mod, i) => (
              <div 
                key={i}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3 text-xs sm:text-sm text-slate-800 hover:bg-red-50/50 hover:border-red-200 transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 mt-0.5 font-mono text-[10px] font-bold">
                  {i + 1}
                </div>
                <span>{mod}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500">
              Toolsets: Clip Studio Paint EX, Toon Boom Harmony, Traditional Light Tables
            </span>
            <button
              type="button"
              onClick={onScrollToRegister}
              className="text-xs font-bold text-red-600 hover:text-red-700 inline-flex items-center gap-1 cursor-pointer"
            >
              <span>Download Full Semester Syllabus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* 6 Career Tracks Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Briefcase className="w-3.5 h-3.5 text-red-600" />
              <span>Dedicated Career Tracks</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Where Graduates Qualify in Japanese & Global Pipelines
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {curriculumData.careerTracks.map((tr, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-xs font-mono font-bold text-red-600 mb-1">
                  Track 0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1.5">
                  {tr.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {tr.role}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
