import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Highlights', href: '#highlights' },
    { name: 'Admission', href: '#eligibility' },
    { name: 'Pathways', href: '#pathways' },
    { name: 'Mentors', href: '#mentors' },
    { name: 'Curriculum', href: '#curriculum' },
    { name: 'Japanese', href: '#language' },
    { name: 'Comparison', href: '#comparison' },
    { name: 'Campus & FAQ', href: '#faq' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#070b14]/90 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/30 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg p-1"
              aria-label="J-Anime Residential Program Home"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-red-600 to-rose-900 text-white font-black shadow-lg shadow-red-900/40 border border-red-500/40 group-hover:scale-105 transition-transform">
                <span className="font-serif text-lg">J</span>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-[#070b14]"></span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black tracking-wider text-white uppercase group-hover:text-red-400 transition-colors">
                    J-Anime<span className="text-[#ff2a4b]">.</span>Pro
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 font-medium">
                    Kyoto Seika Collab
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 font-medium tracking-tight">
                  Residential School of Manga & Anime
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm" aria-label="Main Navigation">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-3 py-1 text-xs font-semibold text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="tel:+918000000000"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/5 transition-colors"
                title="Admissions Helpline"
              >
                <Phone className="w-3.5 h-3.5 text-red-400" />
                <span>+91 (Admissions)</span>
              </a>

              <a
                href="#register"
                onClick={(e) => handleScrollTo(e, '#register')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-red-600 via-rose-600 to-[#e63946] text-white shadow-lg shadow-red-600/30 hover:shadow-red-600/50 hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Apply Now</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href="#register"
                onClick={(e) => handleScrollTo(e, '#register')}
                className="px-3 py-1.5 rounded-full text-xs font-bold uppercase bg-red-600 text-white"
              >
                Apply
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white rounded-lg bg-white/5 border border-white/10"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#0a0f1d] border-b border-white/10 px-4 pt-3 pb-6 shadow-2xl transition-all">
            <div className="flex flex-col gap-2">
              <div className="px-3 py-2 text-xs font-semibold text-red-400 uppercase tracking-widest border-b border-white/5">
                Quick Navigation
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="px-3 py-2 text-sm font-medium text-slate-200 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-slate-500">→</span>
                </a>
              ))}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href="#register"
                  onClick={(e) => handleScrollTo(e, '#register')}
                  className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-red-600/40"
                >
                  Register for Details
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
