import { useState } from 'react';
import { Menu, X, Presentation, User, ChevronRight } from 'lucide-react';
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
import { Library, Image as ImageIcon } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPresentation, setShowPresentation] = useState(false);
  const [showBiography, setShowBiography] = useState(false);
  const [showArchive, setShowArchive] = useState(false);
  const [showGallery, setShowGallery] = useState(false);

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
    { id: 'thoi-co', label: 'Thời cơ' },
    { id: 'doi-chieu', label: 'Nội lực' },
    { id: 'lich-su', label: 'Dòng thời gian' },
    { id: 'cach-mang-giai-phong', label: 'Bài học' },
    { id: 'tuyen-ngon', label: 'Tuyên Ngôn' },
    { id: 'trac-nghiem', label: 'Trắc nghiệm' },
    { id: 'trich-dan', label: 'Trích dẫn' },
    { id: 'ket-luan', label: 'Lời kết' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E8]">
      <CustomCursor />
      <FloatingLotus />
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'linear-gradient(180deg, rgba(45, 26, 26, 0.95) 0%, rgba(92, 34, 48, 0.9) 100%)',
        backdropFilter: 'blur(10px)',
        zIndex: 50,
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
      }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <span style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.2rem',
                color: 'white',
                fontWeight: 600
              }}>
                Cách Mạng <span style={{ color: '#C9A227' }}>Tháng 8</span>
              </span>
              {/* Biography Button */}
              <button
                onClick={() => setShowBiography(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  background: '#C9A227',
                  color: '#1A1A1A',
                  padding: '8px 14px',
                  borderRadius: 6,
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase' as const,
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'system-ui, sans-serif'
                }}
              >
                <User className="w-3 h-3" />
                <span className="hidden sm:inline">Tổng khởi nghĩa</span>
                <span className="sm:hidden">1945</span>
              </button>
              {/* Archive Button */}
              <button
                onClick={() => setShowArchive(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  padding: '8px 14px',
                  borderRadius: 6,
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase' as const,
                  border: '1px solid rgba(255,255,255,0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'system-ui, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
              >
                <Library className="w-3 h-3" />
                <span className="hidden sm:inline">Thư Viện</span>
                <span className="sm:hidden">Sách</span>
              </button>
              {/* Gallery Button */}
              <button
                onClick={() => setShowGallery(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  padding: '8px 14px',
                  borderRadius: 6,
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase' as const,
                  border: '1px solid rgba(255,255,255,0.2)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'system-ui, sans-serif'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                }}
              >
                <ImageIcon className="w-3 h-3" />
                <span className="hidden sm:inline">Ảnh Tư Liệu</span>
                <span className="sm:hidden">Ảnh</span>
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'rgba(255,255,255,0.8)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase' as const,
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontFamily: 'system-ui, sans-serif',
                    padding: '8px 0'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#C9A227';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'rgba(255,255,255,0.8)',
                cursor: 'pointer',
                padding: 8
              }}
              className="lg:hidden"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div style={{
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: 16,
              paddingBottom: 16
            }} className="lg:hidden">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '0.8rem',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase' as const,
                      fontWeight: 500,
                      cursor: 'pointer',
                      textAlign: 'left' as const,
                      padding: '8px 0',
                      fontFamily: 'system-ui, sans-serif'
                    }}
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
      <main className="pt-16">
        <Hero onOpenArchive={() => setShowArchive(true)} onOpenBiography={() => setShowBiography(true)} />
        <Introduction />
        <KeyThoughts />
        <GoldenOpportunity />
        <DataComparison />
        <Timeline />
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