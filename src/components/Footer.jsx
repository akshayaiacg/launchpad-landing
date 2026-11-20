import React from 'react';
import { ShieldCheck, Heart, ExternalLink, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04070e] text-slate-400 text-xs border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-rose-900 text-white font-black flex items-center justify-center border border-red-500/40 shadow-lg shadow-red-950/40">
                <span className="font-serif text-base">J</span>
              </div>
              <div>
                <span className="text-base font-black tracking-wider text-white uppercase">
                  J-Anime<span className="text-red-500">.</span>Pro
                </span>
                <span className="block text-[11px] text-slate-400">
                  India's Premier School of Manga & Anime
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm mb-4">
              An intensive two-year residential animation conservatory located in Hyderabad, delivering authentic Japanese 2D animation, sequential manga disciplines, and JLPT language mastery in collaboration with Kyoto Seika University faculty standards.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <span>Alliance Model: Kyoto Seika University, Japan</span>
            </div>
          </div>

          {/* Pathways Col */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Academic Tracks
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#pathways" className="hover:text-white transition-colors">J-Anime Pro (2-Year Diploma)</a>
              </li>
              <li>
                <a href="#pathways" className="hover:text-white transition-colors">J-Anime Grad (Bachelors Pathway)</a>
              </li>
              <li>
                <a href="#pathways" className="hover:text-white transition-colors">Japan FuturePath (Intermediate)</a>
              </li>
              <li>
                <a href="#eligibility" className="hover:text-white transition-colors">Route A (Direct Portfolio)</a>
              </li>
              <li>
                <a href="#eligibility" className="hover:text-white transition-colors">Route B (2-Week Workshop)</a>
              </li>
            </ul>
          </div>

          {/* Curriculum & Language Col */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Curriculum & Language
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors">Classical Manga Inking</a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors">Action Sakuga & Genga</a>
              </li>
              <li>
                <a href="#curriculum" className="hover:text-white transition-colors">Clip Studio Paint EX Pipeline</a>
              </li>
              <li>
                <a href="#language" className="hover:text-white transition-colors">JLPT N5 to N2 Progression</a>
              </li>
              <li>
                <a href="#mentors" className="hover:text-white transition-colors">Japanese Visiting Mentors</a>
              </li>
            </ul>
          </div>

          {/* Campus Location & Inquiries */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold mb-4">
              Admissions Office
            </h4>
            <div className="space-y-2.5 text-slate-400">
              <p>
                <strong className="text-slate-200 block">Madhapur Campus:</strong>
                IACG Multimedia College, Plot 43, Silicon Valley, Madhapur, Hyderabad, TS 500081
              </p>
              <p>
                <strong className="text-slate-200 block">Dilsukhnagar Campus:</strong>
                Gaddi Annaram, Dilsukhnagar, Hyderabad, TS 500060
              </p>
              <p className="pt-1 text-red-400 font-semibold">
                Inquiries: anime-admissions@iacg.co.in
              </p>
            </div>
          </div>

        </div>

        {/* Regulatory & Institutional Compliance Disclaimer */}
        <div className="pt-8 border-t border-white/10 pb-8 text-[11px] text-slate-500 leading-relaxed space-y-2">
          <p>
            <strong className="text-slate-400">Compliance & Transparency Statement:</strong> The J-Anime Pro programs are educational diplomas, undergraduate tracks, and collaborative certificate courses. Descriptions of international studio placement, scholarships, education loans, and immigration work visas (e.g., Specialist in Humanities / International Services) reflect historical pathways, educational guidelines, and partner facilitation support. Nothing on this page constitutes an unconditional guarantee of employment, specific compensation, visa issuance, or bank loan approval, all of which remain subject to sovereign government regulations, studio hiring requirements, and candidate merit.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} IACG Multimedia College • India's First School of Manga & Anime. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#hero" onClick={scrollToTop} className="hover:text-slate-300 transition-colors flex items-center gap-1">
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
