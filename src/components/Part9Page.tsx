import { useState, useEffect } from 'react';

// ==========================================
// TRANG TRÁI (LEFT PAGE) - PART 9
// ==========================================
export function Part9LeftPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const foundations = [
        { text: "Giải phóng dân tộc là một cuộc cách mạng bạo lực." },
        { text: "Sự thống trị thực dân, đế quốc không có cơ sở cho đấu tranh phi bạo lực." },
        { text: "Giai cấp thống trị không bao giờ tự nguyện từ bỏ địa vị." }
    ];

    return (
        <div className="scroll-container-red-9" style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #4a0404 0%, #750808 50%, #4a0404 100%)', // Tông đỏ sẫm
            display: 'flex',
            flexDirection: 'column',
            padding: '30px 25px',
            boxSizing: 'border-box',
            position: 'relative',
            overflowY: 'auto', // Cho phép cuộn
            overflowX: 'hidden'
        }}>
            {/* --- CSS: SCROLLBAR & ANIMATION --- */}
            <style>{`
                .scroll-container-red-9::-webkit-scrollbar { width: 6px; }
                .scroll-container-red-9::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
                .scroll-container-red-9::-webkit-scrollbar-thumb { background: rgba(255, 215, 0, 0.3); border-radius: 3px; }
                .scroll-container-red-9::-webkit-scrollbar-thumb:hover { background: rgba(255, 215, 0, 0.6); }

                @keyframes spotlightMoveRed9 {
                    0% { top: -20%; opacity: 0.2; transform: scale(1); }
                    50% { top: 60%; opacity: 0.5; transform: scale(1.3); }
                    100% { top: -20%; opacity: 0.2; transform: scale(1); }
                }
            `}</style>

            {/* --- HIỆU ỨNG SPOTLIGHT --- */}
            <div style={{
                position: 'absolute',
                left: '0',
                right: '0',
                height: '400px',
                background: 'radial-gradient(circle, rgba(255, 69, 0, 0.15) 0%, transparent 70%)', // Ánh đỏ cam
                filter: 'blur(25px)',
                pointerEvents: 'none',
                zIndex: 1,
                animation: 'spotlightMoveRed9 8s infinite ease-in-out'
            }}></div>

            {/* Decorative elements */}
            <div style={{ position: 'absolute', top: '15px', right: '15px', fontSize: '20px', opacity: 0.2, zIndex: 0 }}>🔥</div>

            {/* Header */}
            <div style={{
                textAlign: 'center',
                marginBottom: '1.5rem',
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? 'translateY(0)' : 'translateY(-20px)',
                transition: 'all 0.6s ease',
                zIndex: 2,
                flexShrink: 0
            }}>
                <div style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '0.7rem',
                    letterSpacing: '2px',
                    color: '#ffd700',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase'
                }}>
                    Hệ thống quan điểm
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.8rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    margin: '0.2rem 0',
                    textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                }}>
                    Phần IX
                </h2>
                <h3 style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.9)',
                    fontStyle: 'italic',
                    marginBottom: '0.3rem'
                }}>
                    Phương Pháp Bạo Lực Cách Mạng
                </h3>
                <div style={{
                    width: '50px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
                    margin: '8px auto 0'
                }}></div>
            </div>

            {/* Main Quote Box */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(0,0,0,0.3) 0%, rgba(50,0,0,0.2) 100%)',
                padding: '1.2rem',
                borderRadius: '10px',
                borderLeft: '4px solid #ffd700',
                marginBottom: '1.5rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.2s',
                zIndex: 2,
                flexShrink: 0
            }}>
                <p style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.95rem',
                    color: '#fff',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    margin: 0,
                    textAlign: 'center'
                }}>
                    "Cách mạng giải phóng dân tộc phải được tiến hành bằng <strong style={{ color: '#ffd700' }}>phương pháp bạo lực cách mạng</strong>."
                </p>
            </div>

            {/* Foundations list */}
            <div style={{
                flex: 1,
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.4s',
                zIndex: 2
            }}>
                <h4 style={{
                    color: '#ffd700',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    marginBottom: '0.8rem',
                    letterSpacing: '1px',
                    textTransform: 'uppercase'
                }}>
                    Cơ sở khẳng định:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {foundations.map((item, index) => (
                        <div key={index} style={{
                            background: 'rgba(255,255,255,0.08)',
                            padding: '0.8rem',
                            borderRadius: '8px',
                            borderRight: '3px solid #ffd700'
                        }}>
                            <p style={{
                                fontFamily: "'Lora', Georgia, serif",
                                fontSize: '0.85rem',
                                color: 'rgba(255,255,255,0.9)',
                                lineHeight: 1.5,
                                margin: 0
                            }}>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Page number */}
            <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '25px',
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.75rem',
                color: 'rgba(255,255,255,0.5)',
                zIndex: 2,
                pointerEvents: 'none'
            }}>
                26
            </div>
        </div>
    );
}

// ==========================================
// TRANG PHẢI (RIGHT PAGE) - PART 9
// ==========================================
export function Part9RightPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="scroll-container-light-9" style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#F4F1EA', // Màu giấy cũ
            display: 'flex',
            flexDirection: 'column',
            padding: '30px 25px',
            boxSizing: 'border-box',
            position: 'relative',
            overflowY: 'auto', // Cho phép cuộn
            overflowX: 'hidden',
            backgroundImage: 'radial-gradient(#d1d1d1 1px, transparent 1px)',
            backgroundSize: '30px 30px'
        }}>
            {/* --- CSS: SCROLLBAR & ANIMATION --- */}
            <style>{`
                .scroll-container-light-9::-webkit-scrollbar { width: 6px; }
                .scroll-container-light-9::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.05); }
                .scroll-container-light-9::-webkit-scrollbar-thumb { background: rgba(139, 35, 35, 0.3); border-radius: 3px; }
                .scroll-container-light-9::-webkit-scrollbar-thumb:hover { background: rgba(139, 35, 35, 0.6); }

                @keyframes lanternMoveLight9 {
                    0% { top: -10%; opacity: 0.4; }
                    50% { top: 50%; opacity: 0.7; }
                    100% { top: -10%; opacity: 0.4; }
                }
            `}</style>

            {/* --- HIỆU ỨNG LANTERN LIGHT --- */}
            <div style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '120%', 
                height: '300px',
                background: 'radial-gradient(ellipse at center, rgba(201, 162, 39, 0.3) 0%, transparent 70%)', // Ánh vàng đồng
                filter: 'blur(30px)',
                pointerEvents: 'none',
                zIndex: 0,
                mixBlendMode: 'multiply',
                animation: 'lanternMoveLight9 10s infinite ease-in-out'
            }}></div>

            {/* Header */}
            <div style={{
                textAlign: 'center',
                marginBottom: '1.5rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.5s ease',
                borderBottom: '2px solid #C9A227',
                paddingBottom: '0.5rem',
                zIndex: 1,
                flexShrink: 0
            }}>
                <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.1rem',
                    color: '#8B2323',
                    fontWeight: 'bold',
                    margin: 0,
                    letterSpacing: '1px'
                }}>
                    NỘI DUNG VÀ HÌNH THỨC
                </h3>
            </div>

            {/* Section 2: Hai lực lượng */}
            <div style={{
                marginBottom: '1.5rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.2s',
                zIndex: 1,
                flexShrink: 0
            }}>
                <h4 style={{
                    color: '#1A1A1A',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    marginBottom: '0.8rem',
                    textAlign: 'center'
                }}>
                    Hai lực lượng cốt lõi
                </h4>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {['Lực lượng Chính trị', 'Lực lượng Quân sự'].map((text, i) => (
                        <div key={i} style={{
                            flex: 1,
                            background: 'linear-gradient(135deg, #8B2323 0%, #6d1b1b 100%)',
                            padding: '0.8rem',
                            textAlign: 'center',
                            borderRadius: '4px',
                            boxShadow: '3px 3px 0px #C9A227'
                        }}>
                            <span style={{
                                color: '#fff',
                                fontFamily: "'Lora', Georgia, serif",
                                fontSize: '0.75rem',
                                fontWeight: 'bold'
                            }}>
                                {text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 3: Hai hình thức đấu tranh */}
            <div style={{
                marginBottom: '1.5rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.4s',
                zIndex: 1,
                flexShrink: 0
            }}>
                <h4 style={{
                    color: '#1A1A1A',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    marginBottom: '0.8rem',
                    textAlign: 'center'
                }}>
                    Hai hình thức đấu tranh
                </h4>
                <div style={{ display: 'grid', gap: '0.8rem' }}>
                    <div style={{
                        border: '1px solid #8B2323',
                        padding: '0.7rem',
                        backgroundColor: '#fff',
                        textAlign: 'center',
                        borderRadius: '4px'
                    }}>
                        <span style={{
                            color: '#8B2323',
                            fontFamily: "'Lora', Georgia, serif",
                            fontSize: '0.8rem',
                            fontWeight: 'bold'
                        }}>
                            ĐẤU TRANH CHÍNH TRỊ
                        </span>
                    </div>
                    <div style={{
                        border: '1px solid #8B2323',
                        padding: '0.7rem',
                        backgroundColor: '#fff',
                        textAlign: 'center',
                        borderRadius: '4px'
                    }}>
                        <span style={{
                            color: '#8B2323',
                            fontFamily: "'Lora', Georgia, serif",
                            fontSize: '0.8rem',
                            fontWeight: 'bold'
                        }}>
                            ĐẤU TRANH VŨ TRANG
                        </span>
                    </div>
                </div>
            </div>

            {/* Conclusion */}
            <div style={{
                backgroundColor: 'rgba(139, 35, 35, 0.05)',
                padding: '1rem',
                border: '1px dashed #8B2323',
                borderRadius: '8px',
                marginTop: 'auto',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.5s',
                zIndex: 1,
                flexShrink: 0
            }}>
                <p style={{
                    color: '#444',
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.85rem',
                    lineHeight: 1.5,
                    margin: 0,
                    textAlign: 'center',
                    fontStyle: 'italic'
                }}>
                    Sự kết hợp nhuần nhuyễn giữa <strong style={{ color: '#8B2323' }}>chính trị</strong> và <strong style={{ color: '#8B2323' }}>vũ trang</strong> là đặc trưng sáng tạo của cách mạng Việt Nam.
                </p>
            </div>

            {/* Spacer */}
            <div style={{ height: '30px', flexShrink: 0 }}></div>

            {/* Page number */}
            <div style={{
                position: 'absolute',
                bottom: '15px',
                right: '25px',
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.75rem',
                color: '#8B2323',
                fontWeight: 'bold',
                zIndex: 1,
                pointerEvents: 'none'
            }}>
                27
            </div>
        </div>
    );
}