import { useState, useEffect } from 'react';

const timelineData = [
    {
        year: '',
        title: 'Thực tiễn phong trào yêu nước',
        description: 'Các phong trào yêu nước nổ ra và thất bại',
        detail: 'Từ phong trào Cần Vương, Đông Du, Duy Tân đến khởi nghĩa Yên Bái... tất cả đều thất bại do thiếu đường lối đúng đắn.'
    },
    {
        year: '',
        title: 'Khảo cứu cách mạng Pháp, Mỹ',
        description: 'Tìm hiểu các cuộc cách mạng tư sản',
        detail: 'Hồ Chí Minh nghiên cứu Cách mạng Pháp 1789, Cách mạng Mỹ 1776 và nhận ra những hạn chế của cách mạng tư sản.'
    },
    {
        year: '1917',
        title: 'Cách mạng Tháng Mười Nga',
        description: 'Bước ngoặt lịch sử thế giới',
        detail: 'Cách mạng Tháng Mười Nga thắng lợi mở ra thời đại mới - thời đại quá độ từ chủ nghĩa tư bản lên chủ nghĩa xã hội.'
    },
    {
        year: '1920',
        title: 'Đọc Luận cương của Lênin',
        description: 'Sơ thảo lần thứ nhất luận cương về vấn đề dân tộc và thuộc địa',
        detail: 'Đây là bước ngoặt quyết định trong tư tưởng Hồ Chí Minh, tìm ra con đường cứu nước đúng đắn.'
    }
];

// ==========================================
// TRANG TRÁI (LEFT PAGE) - PART 5
// ==========================================
export function Part5LeftPage() {
    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <div className="scroll-container-left-5" style={{
            width: '100%', height: '100%',
            backgroundColor: '#F4F1EA',
            padding: '40px 35px', display: 'flex', flexDirection: 'column',
            position: 'relative', overflowY: 'auto', overflowX: 'hidden',
            backgroundImage: 'radial-gradient(#d1d1d1 1px, transparent 1px)',
            backgroundSize: '30px 30px', color: '#222'
        }}>
            <style>{`
                .scroll-container-left-5::-webkit-scrollbar { width: 4px; }
                .scroll-container-left-5::-webkit-scrollbar-thumb { background: #8B2323; border-radius: 10px; }
            `}</style>

            {/* Header đồng bộ */}
            <div style={{ marginBottom: '25px', textAlign: 'center', zIndex: 2 }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.75rem', letterSpacing: '3px', color: '#8B2323', fontWeight: 'bold' }}>
                    TIỀN ĐỀ TƯ TƯỞNG
                </span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: '900', color: '#1A1A1A', marginTop: '5px' }}>
                    Phần V
                </h2>
                <div style={{ width: '40px', height: '2px', background: '#C9A227', margin: '10px auto' }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', color: '#8B2323', fontStyle: 'italic', fontWeight: 'bold' }}>
                    Con Đường Cách Mạng Vô Sản
                </h3>
            </div>

            {/* Timeline Vertical */}
            <div style={{ flex: 1, position: 'relative', paddingLeft: '25px', zIndex: 2 }}>
                <div style={{
                    position: 'absolute', left: '8px', top: '0', bottom: '20px',
                    width: '1px', background: '#C9A227', opacity: 0.5
                }}></div>

                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        style={{ position: 'relative', marginBottom: '25px', cursor: 'pointer' }}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(-1)}
                    >
                        <div style={{
                            position: 'absolute', left: '-22px', top: '5px',
                            width: '10px', height: '10px', borderRadius: '50%',
                            background: activeIndex === index ? '#8B2323' : '#C9A227',
                            border: '2px solid #F4F1EA', transition: 'all 0.3s ease',
                            boxShadow: activeIndex === index ? '0 0 10px rgba(139, 35, 35, 0.4)' : 'none'
                        }}></div>

                        <div style={{
                            background: activeIndex === index ? '#fff' : 'rgba(255,255,255,0.4)',
                            padding: '12px 15px', borderRadius: '2px',
                            border: '1px solid rgba(139, 35, 35, 0.1)',
                            borderLeft: activeIndex === index ? '4px solid #8B2323' : '4px solid transparent',
                            transition: 'all 0.3s ease', boxShadow: activeIndex === index ? '5px 5px 15px rgba(0,0,0,0.05)' : 'none'
                        }}>
                            {item.year && (
                                <div style={{ color: '#8B2323', fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', fontWeight: 'bold' }}>
                                    {item.year}
                                </div>
                            )}
                            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 'bold', color: '#1A1A1A' }}>
                                {item.title}
                            </div>
                            <div style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#444', lineHeight: 1.4 }}>
                                {item.description}
                            </div>
                            {activeIndex === index && (
                                <div style={{ marginTop: '8px', paddingTop: '8px', borderTop: '1px solid #F0EBE0', fontFamily: "'Lora', serif", fontSize: '0.8rem', fontStyle: 'italic', color: '#666' }}>
                                    {item.detail}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ position: 'absolute', bottom: '15px', left: '20px', fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', color: '#8B2323', fontWeight: 'bold' }}>14</div>
        </div>
    );
}

// ==========================================
// TRANG PHẢI (RIGHT PAGE) - PART 5
// ==========================================
export function Part5RightPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{
            width: '100%', height: '100%',
            backgroundColor: '#F4F1EA', padding: '40px 30px',
            display: 'flex', flexDirection: 'column',
            position: 'relative', overflowY: 'auto',
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")'
        }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '25px', zIndex: 1 }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.7rem', color: '#C9A227', letterSpacing: '2px' }}>
                    KẾT LUẬN CHIẾN LƯỢC
                </span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', color: '#8B2323', fontWeight: '900', margin: '5px 0' }}>
                    Bản Chất Của Sự Nghiệp Giải Phóng
                </h2>
            </div>

            {/* Content Box 1 - Editorial Style */}
            <div style={{
                backgroundColor: '#fff', padding: '1.5rem', marginBottom: '1.5rem',
                border: '1px solid rgba(139, 35, 35, 0.1)', boxShadow: '5px 5px 0px #C9A227',
                transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                opacity: isRevealed ? 1 : 0, transition: 'all 0.8s ease', zIndex: 1
            }}>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '1rem', color: '#1A1A1A', lineHeight: 1.8, fontStyle: 'italic', margin: 0, textAlign: 'justify' }}>
                    "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác <strong style={{ color: '#8B2323' }}>con đường cách mạng vô sản</strong>."
                </p>
                <div style={{ marginTop: '10px', textAlign: 'right', fontFamily: "'Playfair Display', serif", fontSize: '0.75rem', color: '#8B2323', fontWeight: 'bold' }}>
                    — HỒ CHÍ MINH
                </div>
            </div>

            {/* Content Box 2 - Highlighted */}
            <div style={{
                backgroundColor: '#8B2323', padding: '1.2rem', marginBottom: '20px',
                transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                opacity: isRevealed ? 1 : 0, transition: 'all 0.8s ease 0.2s', zIndex: 1
            }}>
                <p style={{
                    fontFamily: "'Playfair Display', serif", fontSize: '1.1rem',
                    color: '#F4F1EA', textAlign: 'center', margin: 0, fontWeight: 'bold', letterSpacing: '0.5px'
                }}>
                    Độc lập dân tộc gắn liền với Chủ nghĩa xã hội
                </p>
            </div>

            {/* Bottom Citation */}
            <div style={{
                marginTop: 'auto', padding: '1.2rem', textAlign: 'center',
                backgroundColor: 'rgba(139, 35, 35, 0.03)', border: '1px dashed rgba(139, 35, 35, 0.2)',
                opacity: isRevealed ? 1 : 0, transition: 'all 0.8s ease 0.4s'
            }}>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#444', lineHeight: 1.6, margin: 0 }}>
                    Đây là kết luận quan trọng nhất, mở ra kỷ nguyên mới cho lịch sử dân tộc Việt Nam.
                </p>
            </div>

            <div style={{ position: 'absolute', bottom: '15px', right: '20px', fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', color: '#8B2323', fontWeight: 'bold' }}>15</div>
        </div>
    );
}