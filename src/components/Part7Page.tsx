import { useState, useEffect } from 'react';

// ==========================================
// TRANG TRÁI (LEFT PAGE) - PART 7
// ==========================================
export function Part7LeftPage() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const keyPoints = [
        {
            title: 'Quần chúng nhân dân',
            description: 'Quần chúng nhân dân là chủ thể sáng tạo ra lịch sử'
        },
        {
            title: 'Đại đoàn kết dân tộc',
            description: 'Cách mạng phải dựa trên lực lượng đại đoàn kết toàn dân tộc'
        },
        {
            title: 'Liên minh Công - Nông',
            description: 'Lấy liên minh công nhân - nông dân làm nền tảng vững chắc'
        },
        {
            title: 'Công nông là gốc',
            description: 'Công nông là chủ cách mệnh, là gốc cách mệnh'
        }
    ];

    return (
        <div className="scroll-container-left" style={{
            width: '100%', height: '100%',
            backgroundColor: '#F4F1EA', // Màu nền giấy cũ đồng bộ
            padding: '35px 30px', display: 'flex', flexDirection: 'column',
            position: 'relative', overflowY: 'auto', overflowX: 'hidden',
            backgroundImage: 'radial-gradient(#d1d1d1 1px, transparent 1px)',
            backgroundSize: '30px 30px', color: '#222'
        }}>
            <style>{`
                .scroll-container-left::-webkit-scrollbar { width: 4px; }
                .scroll-container-left::-webkit-scrollbar-thumb { background: #8B2323; border-radius: 10px; }
            `}</style>

            {/* Header đồng bộ */}
            <div style={{ marginBottom: '25px', textAlign: 'center', zIndex: 2 }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.7rem', letterSpacing: '2px', color: '#8B2323', fontWeight: 'bold' }}>
                    HỆ THỐNG QUAN ĐIỂM
                </span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: '900', color: '#1A1A1A', marginTop: '5px' }}>
                    Phần VII
                </h2>
                <div style={{ width: '40px', height: '2px', background: '#C9A227', margin: '10px auto' }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#8B2323', fontStyle: 'italic', fontWeight: 'bold' }}>
                    Lực Lượng Cách Mạng Giải Phóng
                </h3>
            </div>

            {/* Main Quote - Khung viền đỏ huyết dụ */}
            <div style={{
                backgroundColor: '#fff', padding: '1.2rem', borderRadius: '2px',
                borderLeft: '5px solid #8B2323', boxShadow: '5px 5px 15px rgba(0,0,0,0.05)',
                marginBottom: '2rem', zIndex: 2
            }}>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.95rem', color: '#1A1A1A', lineHeight: '1.6', fontStyle: 'italic', margin: 0 }}>
                    "Cách mạng giải phóng dân tộc phải dựa trên lực lượng <strong style={{ color: '#8B2323' }}>đại đoàn kết toàn dân tộc</strong>, lấy <strong style={{ color: '#8B2323' }}>liên minh công - nông</strong> làm nền tảng."
                </p>
            </div>

            {/* Key Points - Vertical List */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 2 }}>
                {keyPoints.map((point, index) => (
                    <div
                        key={index}
                        style={{
                            background: activeIndex === index ? 'rgba(201, 162, 39, 0.1)' : 'rgba(255,255,255,0.6)',
                            padding: '12px 15px',
                            border: activeIndex === index ? '1px solid #C9A227' : '1px solid rgba(139, 35, 35, 0.1)',
                            borderRight: activeIndex === index ? '4px solid #8B2323' : '4px solid transparent',
                            transition: 'all 0.3s ease', cursor: 'pointer'
                        }}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(-1)}
                    >
                        <div style={{
                            color: '#8B2323', fontFamily: "'Playfair Display', serif",
                            fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '4px'
                        }}>
                            {index + 1}. {point.title}
                        </div>
                        <div style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#444', lineHeight: 1.5 }}>
                            {point.description}
                        </div>
                    </div>
                ))}
            </div>

            {/* Page Number */}
            <div style={{ position: 'absolute', bottom: '15px', left: '20px', fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', color: '#8B2323', fontWeight: 'bold' }}>20</div>
        </div>
    );
}

// ==========================================
// TRANG PHẢI (RIGHT PAGE) - PART 7
// ==========================================
export function Part7RightPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 400);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="scroll-container-right" style={{
            width: '100%', height: '100%',
            backgroundColor: '#F4F1EA', padding: '40px 30px',
            display: 'flex', flexDirection: 'column',
            position: 'relative', overflowY: 'auto', overflowX: 'hidden',
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")' // Texture giấy sợi mờ
        }}>
            {/* Header phong cách chương sách */}
            <div style={{
                textAlign: 'center', marginBottom: '2rem',
                borderBottom: '1px solid #C9A227', paddingBottom: '15px',
                opacity: isRevealed ? 1 : 0, transition: 'all 0.8s ease'
            }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.75rem', color: '#C9A227', letterSpacing: '2px', textTransform: 'uppercase' }}>
                    Tư tưởng nhân văn
                </span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', color: '#8B2323', margin: '5px 0', fontWeight: 'bold' }}>
                    LUẬN ĐIỂM CHIẾN LƯỢC
                </h2>
            </div>

            {/* Content Box 1 */}
            <div style={{
                backgroundColor: '#fff', padding: '1.5rem', marginBottom: '1.5rem',
                border: '1px solid rgba(139, 35, 35, 0.1)', boxShadow: '5px 5px 0px #C9A227',
                transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                opacity: isRevealed ? 1 : 0, transition: 'all 0.6s ease 0.2s'
            }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.9rem', color: '#8B2323', marginBottom: '10px', fontWeight: 'bold' }}>
                    SỨC MẠNH CỦA DÂN
                </h3>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.95rem', color: '#333', lineHeight: 1.7, textAlign: 'justify', margin: 0 }}>
                    "Trên đời này <strong style={{ color: '#8B2323' }}>không gì quý bằng dân</strong>, được lòng dân thì được tất cả, mất lòng dân thì mất tất cả." 
                </p>
                
            </div>

            {/* Content Box 2 */}
            <div style={{
                backgroundColor: 'rgba(139, 35, 35, 0.03)', padding: '1.2rem',
                border: '1px dashed #8B2323',
                transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                opacity: isRevealed ? 1 : 0, transition: 'all 0.6s ease 0.4s'
            }}>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#444', lineHeight: 1.6, margin: 0, fontStyle: 'italic' }}>
                    Sự sáng tạo của Hồ Chí Minh nằm ở việc đặt <strong style={{ color: '#8B2323' }}>nhân dân làm trung tâm</strong>, biến cuộc cách mạng từ nhiệm vụ của một giai cấp thành cuộc giải phóng của cả dân tộc.
                </p>
            </div>

            {/* Bottom Citation */}
            <div style={{ marginTop: 'auto', textAlign: 'center', opacity: 0.6 }}>
                <div style={{ width: '20px', height: '1px', background: '#8B2323', margin: '15px auto' }} />
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.65rem', letterSpacing: '1px', color: '#8B2323' }}>
                    LÝ LUẬN CÁCH MẠNG VIỆT NAM
                </p>
            </div>

            {/* Page Number */}
            <div style={{ position: 'absolute', bottom: '15px', right: '20px', fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', color: '#8B2323', fontWeight: 'bold' }}>21</div>
        </div>
    );
}