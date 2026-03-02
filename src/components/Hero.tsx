interface HeroProps {
  onOpenArchive: () => void;
  onOpenBiography: () => void;
}

export function Hero({ onOpenArchive, onOpenBiography }: HeroProps) {
  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(180deg, #F5F0E8 0%, #FDFBF7 40%, #F5F0E8 100%)' }}>
        {/* Decorative glow effects */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(123, 45, 62, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 350,
          height: 350,
          background: 'radial-gradient(circle, rgba(201, 162, 39, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)'
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, rgba(123, 45, 62, 0.03) 0%, transparent 50%)',
          borderRadius: '50%'
        }} />




        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center py-16">

          {/* Historical period */}
          <div className="mb-16" style={{ animation: 'fadeIn 1s ease-out' }}>
            <div className="flex items-center justify-center gap-8 mb-3">
              <div style={{ width: '80px', height: '1px', backgroundColor: '#7B2D3E', opacity: 0.3 }}></div>
              <span
                className="text-xs font-medium tracking-widest"
                style={{
                  fontFamily: 'system-ui, sans-serif',
                  color: '#7B2D3E',
                  letterSpacing: '0.2em'
                }}
              >
                THÁNG 8 NĂM 1945
              </span>
              <div style={{ width: '80px', height: '1px', backgroundColor: '#7B2D3E', opacity: 0.3 }}></div>
            </div>
          </div>

          {/* Main heading */}
          <div className="mb-16" style={{ animation: 'fadeInUp 1s ease-out', fontFamily: "'Playfair Display', Georgia, serif" }}>
            {/* Subtitle */}
            <div
              className="text-2xl sm:text-3xl md:text-4xl font-light mb-8"
              style={{
                color: '#4A4A4A',
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}
            >
              CÁCH MẠNG
            </div>

            {/* Main title */}
            <h1
              className="font-bold mb-12"
              style={{
                color: '#1A1A1A',
                letterSpacing: '0.05em',
                fontSize: 'clamp(3rem, 10vw, 8rem)',
                lineHeight: '1.1',
                whiteSpace: 'nowrap'
              }}
            >
              THÁNG TÁM
            </h1>

            {/* Decorative element */}
            <div className="flex justify-center items-center gap-4 mb-12">
              <div style={{ width: '60px', height: '2px', background: 'linear-gradient(to right, transparent, #7B2D3E)' }}></div>
              <div style={{ width: '8px', height: '8px', backgroundColor: '#C9A227', transform: 'rotate(45deg)' }}></div>
              <div style={{ width: '60px', height: '2px', background: 'linear-gradient(to left, transparent, #7B2D3E)' }}></div>
            </div>
          </div>

          {/* Quote */}
          <div className="max-w-2xl mx-auto mb-16" style={{ animation: 'fadeIn 1.5s ease-out' }}>
            <p
              className="text-lg sm:text-xl font-light italic leading-relaxed"
              style={{ fontFamily: "'Lora', Georgia, serif", color: '#4A4A4A' }}
            >
              "Thắng lợi của Cách mạng Tháng Tám là một sự 'ăn may' của lịch sử hay là kết quả tất yếu của 15 năm chuẩn bị chu đáo?"
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16" style={{ animation: 'fadeInUp 1.5s ease-out' }}>
            <button
              onClick={onOpenArchive}
              style={{
                padding: '14px 32px',
                background: '#7B2D3E',
                color: 'white',
                border: 'none',
                borderRadius: 8,
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(123, 45, 62, 0.3)',
                transition: 'all 0.2s ease',
                fontFamily: 'system-ui, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#5C2230';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#7B2D3E';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              THƯ VIỆN DI SẢN
            </button>

            <button
              onClick={() => document.getElementById('gioi-thieu')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                padding: '14px 32px',
                background: 'transparent',
                color: '#7B2D3E',
                border: '2px solid #7B2D3E',
                borderRadius: 8,
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase' as const,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                fontFamily: 'system-ui, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#7B2D3E';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#7B2D3E';
              }}
            >
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>

        {/* Scroll indicator - Simple and elegant */}
        <div
          className="absolute left-1/2 z-20"
          style={{
            bottom: '2.5rem',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s ease-in-out infinite'
          }}
        >
          <div className="text-center" style={{ opacity: 0.5 }}>
            <div
              className="mx-auto mb-2"
              style={{
                width: '24px',
                height: '36px',
                border: '2px solid #6B6B6B',
                borderRadius: '12px',
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: '4px',
                  height: '8px',
                  backgroundColor: '#7B2D3E',
                  borderRadius: '2px',
                  position: 'absolute',
                  top: '6px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  animation: 'scrollDot 2s ease-in-out infinite'
                }}
              ></div>
            </div>
            <div
              className="text-xs tracking-widest"
              style={{
                fontFamily: 'system-ui, sans-serif',
                color: '#6B6B6B',
                letterSpacing: '0.15em',
                fontSize: '0.65rem'
              }}
            >
              SCROLL
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes bounce {
            0%, 100% {
              transform: translateX(-50%) translateY(0);
            }
            50% {
              transform: translateX(-50%) translateY(-8px);
            }
          }
          
          @keyframes scrollDot {
            0% {
              transform: translateX(-50%) translateY(0);
              opacity: 1;
            }
            100% {
              transform: translateX(-50%) translateY(16px);
              opacity: 0;
            }
          }
        `}</style>
      </section >
    </>
  );
}