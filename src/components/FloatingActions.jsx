import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, MessageCircle } from 'lucide-react';

export default function FloatingActions({ onScrollToRegister }) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Quick Mobile Action Pill */}
      <button
        type="button"
        onClick={onScrollToRegister}
        className="pointer-events-auto inline-flex sm:hidden items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-xs uppercase tracking-wider shadow-2xl shadow-red-600/50 cursor-pointer active:scale-95"
        aria-label="Quick Register"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span>Apply Now</span>
      </button>

      {/* Back to Top Floating Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="pointer-events-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-900/90 hover:bg-slate-800 text-white border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl shadow-black/40 cursor-pointer transition-all hover:scale-105 active:scale-95"
          aria-label="Scroll Back to Top"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      )}

    </div>
  );
}
