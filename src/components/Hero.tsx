import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroBg from '../picture/tuyenngondoclap.png';

interface HeroProps {
  onOpenArchive: () => void;
  onOpenGallery: () => void;
}
export function Hero({ onOpenArchive, onOpenGallery }: HeroProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: '#77727232' }}
    >
      {/* Faded Historical Background Image */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-[1] pointer-events-none"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
          style={{ backgroundImage: `url(${heroBg})`, opacity: 0.2 }}
        />
        {/* Gradient overlays to smoothly blend the image edges into the background color */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0F0F]/80 via-transparent to-[#1A0F0F]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A0F0F] via-transparent to-[#1A0F0F]" />
      </motion.div>

      {/* Decorative Parallax Background Elements */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <div style={{
          position: 'absolute',
          top: '15%',
          right: '5%',
          width: 500,
          height: 500,
          background: 'radial-gradient(circle, rgba(123, 45, 62, 0.08) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(100px)'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '-5%',
          width: 400,
          height: 400,
          background: 'radial-gradient(circle, rgba(201, 162, 39, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(80px)'
        }} />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ y: y2, scale }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center py-20"
      >
        {/* Historical period with motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12 flex items-center justify-center gap-6"
        >
          <div className="h-px w-12 sm:w-24 bg-maroon-primary/30" />
          <span className="text-[10px] sm:text-xs font-bold tracking-[0.4em] text-maroon-primary uppercase">
            Hào khí Việt Nam • 1945
          </span>
          <div className="h-px w-12 sm:w-24 bg-maroon-primary/30" />
        </motion.div>

        {/* Main heading with stagger effect */}
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-2xl sm:text-3xl md:text-5xl font-light text-white/80 tracking-[0.2em] uppercase mb-4 text-historical"
          >
            CÁCH MẠNG
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="text-[4rem] sm:text-[6rem] md:text-[9rem] font-black text-white tracking-tighter leading-none mb-8 text-historical"
          >
            THÁNG <span className="text-maroon-primary">8</span>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="h-1 bg-gold-accent mx-auto"
          />
        </div>

        {/* Quote with fade in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.4 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <p className="text-xl sm:text-2xl font-medium italic leading-relaxed text-white/90 text-body-historical">
            "Nay thời cơ đã đến, dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập!"
          </p>
          <footer className="mt-4 text-sm font-bold tracking-widest text-maroon-primary opacity-80">
            — HỒ CHÍ MINH
          </footer>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="flex flex-col items-center mt-12 gap-4"
        >
          <div className="flex flex-row gap-12 sm:gap-16 justify-center items-center">
            <button
              onClick={onOpenArchive}
              className="group relative px-2 py-1 text-white/90 transition-all duration-300 hover:text-maroon-primary outline-none"
            >
              <span className="relative z-10 text-[16px] sm:text-[18px]" style={{ fontFamily: "'Playfair Display', serif" }}>Thư Viện Di Sản</span>
            </button>

            <button
              onClick={() => document.getElementById('gioi-thieu')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-2 py-1 text-white/90 transition-all duration-300 hover:text-maroon-primary outline-none"
            >
              <span className="relative z-10 text-[16px] sm:text-[18px]" style={{ fontFamily: "'Playfair Display', serif" }}>Khám phá lịch sử</span>
            </button>
          </div>

          {/* Gallery Button */}
          <button
            onClick={onOpenGallery}
            className="group relative px-2 py-1 text-white/90 transition-all duration-300 hover:text-maroon-primary outline-none mt-2"
          >
            <span className="relative z-10 text-[16px] sm:text-[18px]" style={{ fontFamily: "'Playfair Display', serif" }}>Triển lãm ảnh 1945</span>
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Elements (Pure CSS) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-10"
            style={{
              top: `${Math.random() * 100}% `,
              left: `${Math.random() * 100}% `,
              animationDelay: `${i * 1.5} s`,
              fontSize: `${20 + Math.random() * 40} px`
            }}
          >
            🌸
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <div className="w-px h-24 bg-gradient-to-b from-maroon-primary/50 to-transparent" />
        </div>
      </motion.div>

      <style>{`
  .vertical - text {
  writing - mode: vertical - rl;
  text - orientation: mixed;
}
`}</style>
    </section>
  );
}
