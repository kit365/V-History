import { useState, useEffect } from 'react';

// ==========================================
// TRANG TRÁI (LEFT PAGE) - ĐỒNG BỘ AVANT-GARDE
// ==========================================
export function Part8LeftPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="scroll-container-left" style={{
            width: '100%', height: '100%',
            backgroundColor: '#F4F1EA', // Nền giấy cũ
            display: 'flex', flexDirection: 'column',
            padding: '35px 30px', boxSizing: 'border-box',
            position: 'relative', overflowY: 'auto', overflowX: 'hidden',
            color: '#222',
            backgroundImage: 'radial-gradient(#d1d1d1 1px, transparent 1px)',
            backgroundSize: '30px 30px'
        }}>
            <style>{`
                .scroll-container-left::-webkit-scrollbar { width: 4px; }
                .scroll-container-left::-webkit-scrollbar-thumb { background: #8B2323; border-radius: 10px; }
                @keyframes paperSpotlight {
                    0% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.1); }
                    100% { opacity: 0.3; transform: scale(1); }
                }
            `}</style>

            {/* Hiệu ứng ánh sáng bảo tàng */}
            <div style={{
                position: 'absolute', top: '-10%', left: '0', right: '0', height: '100%',
                background: 'radial-gradient(circle at 50% 0%, rgba(201, 162, 39, 0.15) 0%, transparent 70%)',
                pointerEvents: 'none', zIndex: 1, animation: 'paperSpotlight 6s infinite'
            }} />

            {/* Header */}
            <div style={{
                textAlign: 'center', marginBottom: '1.5rem',
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'all 0.6s ease', zIndex: 2
            }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.75rem', letterSpacing: '3px', color: '#8B2323', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>
                    HỆ THỐNG QUAN ĐIỂM
                </span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: '900', color: '#1A1A1A', margin: 0 }}>
                    Phần VIII
                </h2>
                <div style={{ width: '40px', height: '2px', background: '#C9A227', margin: '10px auto' }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#8B2323', fontStyle: 'italic', fontWeight: 'bold' }}>
                    Chính Quốc và Thuộc Địa
                </h3>
            </div>

            {/* Main Quote Box - Editorial Style */}
            <div style={{
                backgroundColor: '#fff', padding: '1.5rem', borderRadius: '2px',
                borderLeft: '5px solid #8B2323', boxShadow: '10px 10px 30px rgba(0,0,0,0.05)',
                marginBottom: '2rem', opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.2s', zIndex: 2
            }}>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '1rem', color: '#1A1A1A', lineHeight: '1.6', fontStyle: 'italic', margin: 0, textAlign: 'justify' }}>
                    "Cách mạng giải phóng dân tộc cần <strong style={{ color: '#8B2323' }}>chủ động, sáng tạo</strong>, có khả năng giành thắng lợi trước cách mạng vô sản ở chính quốc."
                </p>
            </div>

            {/* Content List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', zIndex: 2, opacity: isRevealed ? 1 : 0, transition: 'all 0.6s ease 0.4s' }}>
                <div style={{ borderBottom: '1px solid rgba(139, 35, 35, 0.1)', paddingBottom: '1rem' }}>
                    <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#8B2323', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>01. CHÍNH QUỐC</h4>
                    <p style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                        Các nước đế quốc thống trị. Cách mạng ở đây là <strong>cách mạng vô sản</strong> do giai cấp công nhân lãnh đạo nhằm lật đổ tư bản.
                    </p>
                </div>

                <div style={{ borderBottom: '1px solid rgba(139, 35, 35, 0.1)', paddingBottom: '1rem' }}>
                    <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#8B2323', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>02. THUỘC ĐỊA</h4>
                    <p style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', lineHeight: 1.6, margin: 0 }}>
                        Các dân tộc bị áp bức. Cách mạng ở đây là <strong>cách mạng giải phóng dân tộc</strong> nhằm giành lại độc lập, tự do.
                    </p>
                </div>
            </div>

            {/* Page number */}
            <div style={{ position: 'absolute', bottom: '15px', left: '20px', fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', color: '#8B2323', fontWeight: 'bold' }}>22</div>
        </div>
    );
}

// ==========================================
// TRANG PHẢI (RIGHT PAGE) - ĐỒNG BỘ AVANT-GARDE
// ==========================================
export function Part8RightPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="scroll-container-right" style={{
            width: '100%', height: '100%',
            backgroundColor: '#F4F1EA',
            display: 'flex', flexDirection: 'column',
            padding: '35px 30px', boxSizing: 'border-box',
            position: 'relative', overflowY: 'auto',
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")' // Texture giấy sợi
        }}>
            {/* Header */}
            <div style={{
                textAlign: 'center', marginBottom: '2rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.5s ease',
                borderBottom: '1px solid #C9A227', paddingBottom: '10px'
            }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.7rem', color: '#C9A227', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '0.3rem', fontWeight: '800' }}>
                    Đối Chiếu Quan Điểm
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', color: '#8B2323', fontWeight: 'bold', margin: 0 }}>
                    Mối Quan Hệ Cách Mạng
                </h3>
            </div>

            {/* Comparison Visual - Clean & Synchronized */}
            <div style={{
                backgroundColor: '#fff', padding: '1.5rem', marginBottom: '1.5rem',
                border: '1px solid rgba(139, 35, 35, 0.1)', boxShadow: '5px 5px 0px #C9A227',
                opacity: isRevealed ? 1 : 0, transition: 'all 0.6s ease 0.2s', textAlign: 'center'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <div style={{ backgroundColor: '#8B2323', color: '#fff', padding: '0.6rem 1rem', fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', fontWeight: 'bold', borderRadius: '2px' }}>CHÍNH QUỐC</div>
                    <div style={{ color: '#C9A227', fontSize: '1.5rem', fontWeight: 'bold' }}>⇆</div>
                    <div style={{ backgroundColor: '#8B2323', color: '#fff', padding: '0.6rem 1rem', fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', fontWeight: 'bold', borderRadius: '2px' }}>THUỘC ĐỊA</div>
                </div>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#444', fontStyle: 'italic', margin: 0, lineHeight: 1.5 }}>
                    Mối quan hệ bình đẳng, chủ động. Cách mạng thuộc địa không nhất thiết phải chờ đợi chính quốc.
                </p>
            </div>

            {/* Ho Chi Minh's breakthrough insight */}
            <div style={{
                backgroundColor: 'rgba(139, 35, 35, 0.03)', padding: '1.5rem', border: '1px dashed #8B2323',
                marginBottom: '1.5rem', opacity: isRevealed ? 1 : 0, transition: 'all 0.6s ease 0.4s'
            }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", color: '#8B2323', fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '0.8rem' }}>Tư tưởng Đột phá</h4>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#1A1A1A', lineHeight: 1.7, margin: 0, textAlign: 'justify' }}>
                    Nguyễn Ái Quốc ví cách mạng vô sản ở chính quốc và cách mạng giải phóng dân tộc ở thuộc địa như <strong style={{ color: '#8B2323' }}>"hai cánh của một con chim"</strong>. Sự phối hợp nhịp nhàng sẽ tạo nên sức mạnh vô địch để tiêu diệt chủ nghĩa đế quốc.
                </p>
            </div>

            {/* Final insight highlight */}
            <div style={{
                marginTop: 'auto', padding: '1rem', textAlign: 'center',
                background: 'linear-gradient(to right, transparent, rgba(201, 162, 39, 0.1), transparent)',
                opacity: isRevealed ? 1 : 0, transition: 'all 0.6s ease 0.5s'
            }}>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.75rem', color: '#8B2323', fontWeight: 'bold', letterSpacing: '1px', margin: 0 }}>
                    SÁNG TẠO LỚN NHẤT CỦA HỒ CHÍ MINH TRONG LÝ LUẬN MÁC-LÊNIN
                </p>
            </div>

            {/* Page number */}
            <div style={{ position: 'absolute', bottom: '15px', right: '20px', fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', color: '#8B2323', fontWeight: 'bold' }}>23</div>
        </div>
    );
}