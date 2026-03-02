import { useState, useEffect } from 'react';

// ==========================================
// TRANG TRÁI (LEFT PAGE) - PART 8 PAGE 2
// ==========================================
export function Part8Page2LeftPage() {
    const [isRevealed, setIsRevealed] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const foundations = [
        {
            title: "Vị trí đặc biệt của thuộc địa",
            description: "Là nơi duy trì sự tồn tại, phát triển của chủ nghĩa đế quốc - một món mồi \"béo bở\" không thể thiếu."
        },
        {
            title: "Tinh thần đấu tranh quyết liệt",
            description: "Khi được tập hợp và giác ngộ cách mạng, sẽ bùng lên mạnh mẽ thành một \"lực lượng khổng lồ\"."
        }
    ];

    return (
        <div className="scroll-container-red" style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #7B2D3E 0%, #5C2230 50%, #7B2D3E 100%)', // Tông đỏ rượu
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
                .scroll-container-red::-webkit-scrollbar { width: 6px; }
                .scroll-container-red::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
                .scroll-container-red::-webkit-scrollbar-thumb { background: rgba(255, 215, 0, 0.4); border-radius: 3px; }
                .scroll-container-red::-webkit-scrollbar-thumb:hover { background: rgba(255, 215, 0, 0.7); }

                @keyframes spotlightMoveRed {
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
                background: 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, transparent 70%)',
                filter: 'blur(25px)',
                pointerEvents: 'none',
                zIndex: 1,
                animation: 'spotlightMoveRed 8s infinite ease-in-out'
            }}></div>

            {/* Decorative background (Giữ nguyên) */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 70% 30%, rgba(255,215,0,0.1) 0%, transparent 50%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />

            {/* Header */}
            <div style={{
                textAlign: 'center',
                marginBottom: '0.8rem',
                transform: isRevealed ? 'translateY(0)' : 'translateY(-20px)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease',
                zIndex: 2,
                flexShrink: 0
            }}>
                <h2 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    margin: '0 0 0.3rem 0',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}>
                    Luận Điểm Sáng Tạo
                </h2>
                <div style={{
                    width: '40px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
                    margin: '0 auto'
                }} />
            </div>

            {/* Main thesis box */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(255,215,0,0.18) 0%, rgba(184,134,11,0.12) 100%)',
                borderRadius: '10px',
                padding: '1rem',
                border: '1px solid rgba(255,215,0,0.4)',
                marginBottom: '0.8rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.2s',
                zIndex: 2,
                flexShrink: 0
            }}>
                <div style={{
                    color: 'rgba(255,215,0,0.8)',
                    fontSize: '1.2rem',
                    marginBottom: '4px',
                    lineHeight: 1
                }}>
                    ❝
                </div>
                <p style={{
                    color: '#fff',
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.9rem',
                    lineHeight: 1.5,
                    textAlign: 'center',
                    margin: 0,
                    fontStyle: 'italic'
                }}>
                    Cách mạng giải phóng dân tộc cần <strong style={{ color: '#ffd700' }}>chủ động, sáng tạo</strong>, có khả năng <strong style={{ color: '#ffd700' }}>giành thắng lợi trước</strong> cách mạng vô sản ở chính quốc
                </p>
            </div>

            {/* Significance */}
            <div style={{
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '8px',
                padding: '0.6rem',
                marginBottom: '0.6rem',
                textAlign: 'center',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.3s',
                zIndex: 2,
                flexShrink: 0
            }}>
                <p style={{
                    color: 'rgba(255,255,255,0.9)',
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.8rem',
                    lineHeight: 1.5,
                    margin: 0
                }}>
                    Đây là luận điểm <strong style={{ color: '#ffd700' }}>sáng tạo</strong> của Hồ Chí Minh, bổ sung vào CN Mác – Lênin
                </p>
            </div>

            {/* Two foundations header */}
            <div style={{
                marginBottom: '0.5rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.4s',
                zIndex: 2,
                flexShrink: 0
            }}>
                <h4 style={{
                    color: '#ffd700',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    margin: 0
                }}>
                    Luận điểm dựa trên hai cơ sở:
                </h4>
            </div>

            {/* Foundations list */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                flex: 1,
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.5s',
                zIndex: 2
            }}>
                {foundations.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            background: activeIndex === index
                                ? 'rgba(255,215,0,0.15)'
                                : 'rgba(255,255,255,0.06)',
                            borderRadius: '8px',
                            padding: '0.7rem',
                            borderLeft: activeIndex === index
                                ? '3px solid #ffd700'
                                : '3px solid rgba(255,215,0,0.3)',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            flexShrink: 0
                        }}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(-1)}
                    >
                        <div style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.6rem'
                        }}>
                            <div style={{
                                background: 'linear-gradient(135deg, #ffd700 0%, #B8860B 100%)',
                                color: '#5C2230',
                                width: '20px',
                                height: '20px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.7rem',
                                fontWeight: 'bold',
                                flexShrink: 0
                            }}>
                                {index + 1}
                            </div>
                            <div>
                                <div style={{
                                    color: '#ffd700',
                                    fontSize: '0.85rem',
                                    fontWeight: 'bold',
                                    marginBottom: '0.3rem'
                                }}>
                                    {item.title}
                                </div>
                                <div style={{
                                    color: 'rgba(255,255,255,0.85)',
                                    fontSize: '0.8rem',
                                    lineHeight: 1.5
                                }}>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Spacer */}
            <div style={{ height: '30px', flexShrink: 0 }}></div>

            {/* Page number */}
            <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                color: 'rgba(255,255,255,0.5)',
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.75rem',
                zIndex: 2,
                pointerEvents: 'none'
            }}>
                24
            </div>
        </div>
    );
}

// ==========================================
// TRANG PHẢI (RIGHT PAGE) - PART 8 PAGE 2
// ==========================================
export function Part8Page2RightPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 300);
        return () => clearTimeout(timer);
    }, []);

    const insights = [
        {
            title: "Đề cao tính chủ động",
            description: "Các dân tộc thuộc địa không cần \"chờ đợi\" mà có thể tự quyết định vận mệnh của mình.",
            color: "#7B2D3E"
        },
        {
            title: "Bổ sung lý luận Mác-Lênin",
            description: "Mở rộng lý thuyết cách mạng, phù hợp với thực tiễn phương Đông.",
            color: "#B8860B"
        },
        {
            title: "Thực tiễn Việt Nam chứng minh",
            description: "Cách mạng tháng Tám 1945 thắng lợi trước khi Pháp có cách mạng vô sản!",
            color: "#22c55e"
        }
    ];

    return (
        <div className="scroll-container-light" style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #faf8f1 0%, #f5f0e1 100%)',
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
                .scroll-container-light::-webkit-scrollbar { width: 6px; }
                .scroll-container-light::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.05); }
                .scroll-container-light::-webkit-scrollbar-thumb { background: rgba(123, 45, 62, 0.3); border-radius: 3px; }
                .scroll-container-light::-webkit-scrollbar-thumb:hover { background: rgba(123, 45, 62, 0.6); }

                @keyframes lanternMoveLight {
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
                background: 'radial-gradient(ellipse at center, rgba(255, 223, 120, 0.4) 0%, transparent 70%)',
                filter: 'blur(30px)',
                pointerEvents: 'none',
                zIndex: 0,
                mixBlendMode: 'multiply',
                animation: 'lanternMoveLight 10s infinite ease-in-out'
            }}></div>

            {/* Header */}
            <div style={{
                textAlign: 'center',
                marginBottom: '0.8rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.5s ease',
                zIndex: 1,
                flexShrink: 0
            }}>
                <h3 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.1rem',
                    color: '#7B2D3E',
                    fontWeight: 'bold',
                    margin: '0 0 0.3rem 0'
                }}>
                    Ý Nghĩa Lịch Sử
                </h3>
                <div style={{
                    width: '40px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #B8860B, transparent)',
                    margin: '0 auto'
                }} />
            </div>

            {/* New paradigm visual */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(34, 197, 94, 0.05) 100%)',
                borderRadius: '10px',
                padding: '0.8rem',
                marginBottom: '0.7rem',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.2s',
                zIndex: 1,
                flexShrink: 0
            }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.6rem',
                    marginBottom: '0.5rem'
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #ed8936 0%, #dd6b20 100%)',
                        borderRadius: '6px',
                        padding: '0.4rem 0.8rem',
                        color: '#fff',
                        fontFamily: "'Lora', Georgia, serif",
                        fontSize: '0.75rem',
                        fontWeight: 'bold'
                    }}>
                        Thuộc địa
                    </div>
                    <div style={{
                        color: '#22c55e',
                        fontSize: '0.9rem',
                        fontWeight: 'bold'
                    }}>
                        CÓ THỂ →
                    </div>
                    <div style={{
                        background: 'linear-gradient(135deg, #4299e1 0%, #2b6cb0 100%)',
                        borderRadius: '6px',
                        padding: '0.4rem 0.8rem',
                        color: '#fff',
                        fontFamily: "'Lora', Georgia, serif",
                        fontSize: '0.75rem',
                        fontWeight: 'bold'
                    }}>
                        Chính quốc
                    </div>
                </div>
                <p style={{
                    color: '#166534',
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.75rem',
                    lineHeight: 1.4,
                    margin: 0,
                    textAlign: 'center',
                    fontWeight: '500'
                }}>
                    Thuộc địa có thể thắng lợi TRƯỚC chính quốc!
                </p>
            </div>

            {/* Key insights */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginBottom: '0.7rem',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.3s',
                zIndex: 1,
                flexShrink: 0
            }}>
                {insights.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            background: `linear-gradient(135deg, ${item.color}12 0%, ${item.color}06 100%)`,
                            borderRadius: '8px',
                            padding: '0.6rem',
                            borderLeft: `3px solid ${item.color}`,
                            flexShrink: 0
                        }}
                    >
                        <div style={{
                            color: item.color,
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                            marginBottom: '0.2rem',
                            fontFamily: "'Playfair Display', Georgia, serif"
                        }}>
                            {item.title}
                        </div>
                        <p style={{
                            color: '#4a5568',
                            fontFamily: "'Lora', Georgia, serif",
                            fontSize: '0.78rem',
                            lineHeight: 1.5,
                            margin: 0
                        }}>
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Conclusion box */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(123, 45, 62, 0.12) 0%, rgba(184, 134, 11, 0.08) 100%)',
                borderRadius: '10px',
                padding: '0.8rem',
                border: '1px solid rgba(123, 45, 62, 0.25)',
                marginTop: 'auto',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.4s',
                zIndex: 1,
                flexShrink: 0
            }}>
                <p style={{
                    color: '#5C2230',
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.82rem',
                    lineHeight: 1.6,
                    margin: 0,
                    textAlign: 'center',
                    fontStyle: 'italic'
                }}>
                    Luận điểm này khẳng định: <strong style={{ color: '#7B2D3E' }}>Các dân tộc thuộc địa hoàn toàn có thể giành độc lập bằng chính sức mạnh của mình</strong>
                </p>
            </div>

            {/* Spacer */}
            <div style={{ height: '30px', flexShrink: 0 }}></div>

            {/* Page number */}
            <div style={{
                position: 'absolute',
                bottom: '10px',
                right: '20px',
                color: 'rgba(0,0,0,0.3)',
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.75rem',
                zIndex: 1,
                pointerEvents: 'none'
            }}>
                25
            </div>
        </div>
    );
}