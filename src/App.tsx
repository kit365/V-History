import { useState, useEffect } from 'react';
import { Menu, X, Presentation, User, ChevronRight } from 'lucide-react';
import { motion, useScroll } from 'framer-motion';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { DeclarationVideo } from './components/DeclarationVideo';
import { LiberationRevolution } from './components/LiberationRevolution';
import { KeyThoughts } from './components/KeyThoughts';
import { Timeline } from './components/Timeline';
import { Quotes } from './components/Quotes';
import { Footer } from './components/Footer';
import { HousePresentation } from './components/HousePresentation';
import { Biography } from './components/Biography';
import { KnowledgeQuiz } from './components/KnowledgeQuiz';
import { Conclusion } from './components/Conclusion';
import { FloatingLotus } from './components/FloatingLotus';
import { GoldenOpportunity } from './components/GoldenOpportunity';
import { DataComparison } from './components/DataComparison';
import { CustomCursor } from './components/CustomCursor';
import { Archive } from './components/Archive';
import { ImageGallery } from './components/ImageGallery';
import { DigitalMuseum } from './components/DigitalMuseum';
import { DailyInspiration } from './components/DailyInspiration';
import { Soundscape } from './components/Soundscape';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPresentation, setShowPresentation] = useState(false);
  const [showBiography, setShowBiography] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

  const { scrollYProgress } = useScroll();

  // Scroll reveal logic
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      section.classList.add('section-reveal');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Nếu đang xem Presentation → render fullscreen
  if (showPresentation) {
    return <HousePresentation onClose={() => setShowPresentation(false)} />;
  }

  // Nếu đang xem Biography → render fullscreen
  if (showBiography) {
    return <Biography onClose={() => setShowBiography(false)} />;
  }

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
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'gioi-thieu', label: 'Giới Thiệu' },
    { id: 'tu-tuong', label: 'Bối cảnh' },
    { id: 'cam-hung', label: 'Khoảnh khắc' },
    { id: 'thoi-co', label: 'Thời cơ' },
    { id: 'doi-chieu', label: 'Nội lực' },
    { id: 'lich-su', label: 'Dòng thời gian' },
    { id: 'bao-tang-so', label: 'Bảo tàng số' },
    { id: 'cach-mang-giai-phong', label: 'Bài học' },
    { id: 'tuyen-ngon', label: 'Tuyên Ngôn' },
    { id: 'trac-nghiem', label: 'Trắc nghiệm' },
    { id: 'trich-dan', label: 'Trích dẫn' },
    { id: 'ket-luan', label: 'Lời kết' },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center gap-6">
              <span className="text-xl text-white font-bold tracking-tighter text-historical">
                DECODE<span className="text-gold-accent">1945</span>
              </span>

              <div className="h-6 w-px bg-white/20 hidden md:block" />

              {/* Quick Actions */}
              <div className="hidden sm:flex items-center gap-4">
                <button
                  onClick={() => setShowBiography(true)}
                  className="px-4 py-2 bg-gold-accent text-ink-black text-[10px] font-bold tracking-widest uppercase rounded-sm hover:scale-105 transition-transform"
                >
                  Tiểu Sử Bác Hồ
                </button>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden xl:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase hover:text-gold-accent transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden text-white/80 p-2"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="xl:hidden pb-10 pt-4 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="grid grid-cols-2 gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-[11px] font-bold text-white/60 uppercase tracking-widest py-3 hover:text-gold-accent text-left"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Hero onOpenArchive={() => setShowArchive(true)} onOpenBiography={() => setShowBiography(true)} />
        <Introduction />
        <KeyThoughts />
        <DailyInspiration />
        <GoldenOpportunity />
        <DataComparison />
        <Timeline />
        <DigitalMuseum />
        <LiberationRevolution />
        <DeclarationVideo />
        <KnowledgeQuiz />
        <Quotes />
        <Conclusion />
      </main>
      <Footer />

      {/* Floating Presentation Button */}
      <button
        onClick={() => setShowPresentation(true)}
        style={{
          position: 'fixed',
          bottom: 32,
          left: 32,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
          color: 'white',
          padding: '14px 24px',
          borderRadius: 100,
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 8px 30px rgba(123, 45, 62, 0.4)',
          transition: 'all 0.3s ease',
          fontFamily: 'system-ui, sans-serif'
        }}
      >
        <Presentation className="w-5 h-5" />
        <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>XÂY NHÀ</span>
      </button>

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
    </div>
  );
}