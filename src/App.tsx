import { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';
import { Conclusion } from './components/Conclusion';
import { FloatingLotus } from './components/FloatingLotus';
import { GoldenOpportunity } from './components/GoldenOpportunity';
import { CustomCursor } from './components/CustomCursor';
import { Archive } from './components/Archive';
import { ImageGallery } from './components/ImageGallery';
import { Soundscape } from './components/Soundscape';

export default function App() {
  const [showArchive, setShowArchive] = useState(false);
  const [showGallery, setShowGallery] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { scrollYProgress } = useScroll();

  // Scroll reveal logic and active section spy
  useEffect(() => {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.4 });

    document.querySelectorAll('section, main > div').forEach(section => {
      section.classList.add('section-reveal');
      sectionObserver.observe(section);
      if (section.id) {
        activeObserver.observe(section);
      }
    });

    return () => {
      sectionObserver.disconnect();
      activeObserver.disconnect();
    };
  }, []);

  // Nếu đang xem Archive → render fullscreen
  if (showArchive) {
    return <Archive onClose={() => setShowArchive(false)} />;
  }

  // Nếu đang xem Gallery → render fullscreen
  if (showGallery) {
    return <ImageGallery onClose={() => setShowGallery(false)} />;
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Mở Đầu' },
    { id: 'gioi-thieu', label: 'Lời Đồn' },
    { id: 'lich-su', label: 'Khái Quát' },
    { id: 'thoi-co', label: 'Thời Cơ' },
    { id: 'ket-luan', label: 'Tổng Kết' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E8] overflow-x-hidden">
      <motion.div
        className="fixed top-20 left-0 right-0 h-1 bg-gold-accent origin-left z-[51]"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="historical-grain" />
      <div className="vignette" />
      <CustomCursor />
      <FloatingLotus />
      <Soundscape />

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(180deg, rgba(45, 26, 26, 0.98) 0%, rgba(92, 34, 48, 0.95) 100%)',
        backdropFilter: 'blur(15px)',
        zIndex: 50,
        boxShadow: '0 4px 60px rgba(0,0,0,0.3)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
          <div className="flex justify-between items-center h-20 w-full relative">
            {/* Logo */}
            <div className="flex items-center gap-6 shrink-0 cursor-pointer" onClick={() => scrollToSection('hero')}>
              <span className="text-xl text-white font-bold tracking-tighter text-historical">
                DECODE<span className="text-gold-accent">1945</span>
              </span>
            </div>

            {/* Nav Actions */}
            <div className="flex items-center gap-4 sm:gap-6">
              <button
                onClick={() => setShowArchive(true)}
                className="group relative px-6 py-3 rounded-md bg-white/10 hover:bg-white/20 border border-white/30 transition-all duration-300 outline-none flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]" />
                <span className="relative z-10 text-[14px] sm:text-[15px] text-white tracking-[0.1em] uppercase font-bold transition-transform duration-300 group-hover:scale-105" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Thư Viện Di Sản
                </span>
              </button>

              <button
                onClick={() => setShowGallery(true)}
                className="group relative px-6 py-3 rounded-md bg-[#C9A227] hover:bg-[#E0B838] border border-[#C9A227] hover:border-[#E0B838] shadow-[0_0_15px_rgba(201,162,39,0.3)] hover:shadow-[0_0_25px_rgba(201,162,39,0.5)] transition-all duration-300 outline-none flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 border border-white/40 rounded-md m-[2px]" />
                <span className="relative z-10 text-[14px] sm:text-[15px] text-[#1A1A1A] tracking-[0.1em] uppercase font-extrabold transition-transform duration-300 group-hover:scale-105" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Triển lãm ảnh 1945
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Timeline Nav Menu (Fixed Layout) */}
      <div
        className="fixed top-1/2 -translate-y-1/2 flex flex-col items-end mix-blend-difference pointer-events-auto"
        style={{ right: '16px', zIndex: 99999 }}
      >
        <div className="relative flex flex-col gap-8 sm:gap-12 items-end">
          {/* Continuous Line Behind Dots */}
          <div className="absolute top-2 bottom-2 right-[3px] w-[2px] bg-white/30 pointer-events-none" />

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group relative flex flex-row items-center justify-end gap-3 outline-none cursor-pointer hover:bg-transparent"
              aria-label={item.label}
              style={{ padding: '4px 0', border: 'none', background: 'transparent' }}
            >
              {/* Timeline Label - White with mix-blend-difference */}
              <span
                className={`font-sans text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 whitespace-nowrap 
                  ${activeSection === item.id ? 'text-white font-bold scale-110' : 'text-white/40 group-hover:text-white/80'}
                `}
              >
                {item.label}
              </span>

              {/* The Dot Indicator */}
              <div
                className={`w-2 h-2 rounded-full transition-all duration-300 relative z-10 
                  ${activeSection === item.id ? 'bg-white scale-[1.8] shadow-[0_0_10px_rgba(255,255,255,0.8)]' : 'bg-white/30 group-hover:bg-white/60'}
                `}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-20">
        <div id="hero"><Hero /></div>
        <div id="gioi-thieu"><Introduction /></div>
        <div id="lich-su"><Timeline /></div>
        <div id="thoi-co"><GoldenOpportunity /></div>
        <div id="ket-luan"><Conclusion /></div>
      </main>
      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          zIndex: 9999,
          width: 48,
          height: 48,
          background: 'white',
          color: '#7B2D3E',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        }}
      >
        <ChevronRight className="w-6 h-6 rotate-[-90deg]" />
      </button>
    </div >
  );
}