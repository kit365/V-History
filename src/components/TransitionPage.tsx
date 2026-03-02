import { useState, useEffect } from 'react';

// ==========================================
// TRANG TRÁI (LEFT PAGE) - TRANSITION
// ==========================================
export function TransitionLeftPage() {
    const [visibleItems, setVisibleItems] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleItems(prev => {
                if (prev < 4) return prev + 1;
                clearInterval(timer);
                return prev;
            });
        }, 400);
        return () => clearInterval(timer);
    }, []);

    const questions = [
        { text: 'Làm thế nào để cứu nước, giải phóng dân tộc?' },
        { text: 'Con đường nào đúng đắn cho dân tộc Việt Nam?' },
        { text: 'Bài học từ các cuộc cách mạng trên thế giới?' },
        { text: 'Lý luận nào soi đường cho cách mạng?' }
    ];

    return (
        <div style={{
            width: '100%', height: '100%',
            backgroundColor: '#F4F1EA', // Màu giấy cũ đồng bộ
            padding: '35px 30px', display: 'flex', flexDirection: 'column',
            position: 'relative', overflow: 'hidden', color: '#222',
            backgroundImage: 'radial-gradient(#d1d1d1 1px, transparent 1px)',
            backgroundSize: '30px 30px'
        }}>
            {/* Họa tiết trang trí */}
            <div style={{
                position: 'absolute', top: '-20px', right: '-20px',
                width: '150px', height: '150px', borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(201,162,39,0.1) 0%, transparent 70%)',
                pointerEvents: 'none'
            }} />

            {/* Header đồng bộ */}
            <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.75rem', letterSpacing: '3px', color: '#8B2323', fontWeight: 'bold' }}>
                    TÌM KIẾM CHÂN LÝ
                </span>
                <h1 style={{
                    color: '#1A1A1A', fontSize: '1.6rem',
                    fontFamily: "'Playfair Display', serif", fontWeight: '900',
                    margin: '5px 0', lineHeight: 1.3
                }}>
                    Tư Tưởng Hồ Chí Minh
                </h1>
                <h2 style={{
                    color: '#8B2323', fontSize: '1rem',
                    fontFamily: "'Playfair Display', serif", fontWeight: 'bold',
                    fontStyle: 'italic', margin: 0
                }}>
                    Về Con Đường Giải Phóng
                </h2>
            </div>

            {/* Divider */}
            <div style={{
                width: '60px', height: '2px', background: '#C9A227',
                margin: '0 auto 25px auto'
            }} />

            {/* Introduction */}
            <p style={{
                color: '#444', fontFamily: "'Lora', serif", fontSize: '0.9rem',
                lineHeight: 1.7, textAlign: 'center', marginBottom: '25px', fontStyle: 'italic'
            }}>
                Trước khi tìm ra con đường cứu nước, Người đã trải qua hành trình vạn dặm đầy gian khổ với những trăn trở lớn lao...
            </p>

            {/* Questions list - Editorial Style */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {questions.map((q, idx) => (
                    <div
                        key={idx}
                        style={{
                            display: 'flex', alignItems: 'center', gap: '15px',
                            padding: '15px', backgroundColor: '#fff',
                            border: '1px solid rgba(139, 35, 35, 0.1)',
                            borderLeft: '4px solid #8B2323',
                            transform: visibleItems > idx ? 'translateX(0)' : 'translateX(-20px)',
                            opacity: visibleItems > idx ? 1 : 0,
                            transition: 'all 0.6s ease',
                            boxShadow: '4px 4px 10px rgba(0,0,0,0.03)'
                        }}
                    >
                        <span style={{ color: '#C9A227', fontFamily: "'Playfair Display', serif", fontWeight: 'bold' }}>0{idx + 1}</span>
                        <span style={{
                            color: '#1A1A1A', fontFamily: "'Lora', serif",
                            fontSize: '0.9rem', fontWeight: 500
                        }}>
                            {q.text}
                        </span>
                    </div>
                ))}
            </div>

            {/* Page number */}
            <div style={{
                position: 'absolute', bottom: '20px', left: '30px',
                color: '#8B2323', fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', fontWeight: 'bold'
            }}>
                12
            </div>
        </div>
    );
}

// ==========================================
// TRANG PHẢI (RIGHT PAGE) - TRANSITION
// ==========================================
export function TransitionRightPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 600);
        return () => clearTimeout(timer);
    }, []);

    const timelineData = [
        { year: '1911', text: 'Ra đi tìm đường cứu nước từ Bến Nhà Rồng' },
        { year: '1919', text: 'Gửi Bản yêu sách 8 điểm đến Hội nghị Versailles' },
        { year: '1920', text: 'Đọc Sơ thảo Luận cương của Lênin' },
        { year: 'Kết luận', text: 'Chủ nghĩa xã hội là con đường duy nhất giải phóng dân tộc' }
    ];

    return (
        <div style={{
            width: '100%', height: '100%',
            backgroundColor: '#F4F1EA', padding: '35px 30px',
            display: 'flex', flexDirection: 'column',
            position: 'relative', overflow: 'hidden',
            backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")'
        }}>
            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <h2 style={{
                    color: '#8B2323', fontSize: '1.3rem',
                    fontFamily: "'Playfair Display', serif", fontWeight: '900',
                    margin: 0, borderBottom: '1px solid #C9A227', paddingBottom: '10px'
                }}>
                    Hành Trình Tìm Ánh Sáng
                </h2>
            </div>

            {/* Timeline visual - Professional Editorial Style */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px', paddingLeft: '10px' }}>
                {timelineData.map((item, idx) => (
                    <div key={idx} style={{
                        position: 'relative', paddingLeft: '30px',
                        borderLeft: '2px solid #C9A227',
                        opacity: isRevealed ? 1 : 0,
                        transform: isRevealed ? 'translateX(0)' : 'translateX(15px)',
                        transition: `all 0.6s ease ${idx * 0.15}s`
                    }}>
                        <div style={{
                            position: 'absolute', left: '-7px', top: '0',
                            width: '12px', height: '12px', borderRadius: '50%',
                            background: '#8B2323', border: '2px solid #F4F1EA'
                        }} />
                        <span style={{
                            fontFamily: "'Playfair Display', serif", color: '#8B2323',
                            fontSize: '0.8rem', fontWeight: 'bold', display: 'block'
                        }}>
                            {item.year}
                        </span>
                        <p style={{
                            color: '#333', fontFamily: "'Lora', serif",
                            fontSize: '0.9rem', lineHeight: 1.5, margin: '3px 0 0 0'
                        }}>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>

            {/* Quote box - Chỉnh lại đồng bộ */}
            <div style={{
                marginTop: '20px', padding: '15px',
                backgroundColor: '#fff', border: '1px solid rgba(201, 162, 39, 0.3)',
                boxShadow: '3px 3px 0px #C9A227',
                opacity: isRevealed ? 1 : 0, transition: 'all 0.8s ease 0.6s'
            }}>
                <p style={{
                    color: '#1A1A1A', fontFamily: "'Lora', serif",
                    fontSize: '0.9rem', lineHeight: 1.7, fontStyle: 'italic', margin: 0
                }}>
                    "Tôi hiểu rằng chủ nghĩa Lênin là cái cẩm nang thần kỳ, là con đường giải phóng chúng ta."
                </p>
                <div style={{
                    marginTop: '8px', textAlign: 'right',
                    color: '#8B2323', fontFamily: "'Playfair Display', serif",
                    fontSize: '0.75rem', fontWeight: 'bold'
                }}>
                    — CHỦ TỊCH HỒ CHÍ MINH
                </div>
            </div>

            {/* Bottom Indicator */}
            <div style={{
                textAlign: 'center', marginTop: '20px',
                color: '#C9A227', fontFamily: "'Playfair Display', serif",
                fontSize: '0.7rem', letterSpacing: '1px', fontWeight: 'bold'
            }}>
                PHẦN KẾ TIẾP: CÁCH MẠNG VÔ SẢN ➜
            </div>

            {/* Page number */}
            <div style={{
                position: 'absolute', bottom: '20px', right: '30px',
                color: '#8B2323', fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', fontWeight: 'bold'
            }}>
                13
            </div>
        </div>
    );
}