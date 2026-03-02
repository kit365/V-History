import { useState, useEffect } from 'react';

// ==========================================
// TRANG TRÁI (LEFT PAGE) - PART 5 PAGE 2
// ==========================================
export function Part5Page2LeftPage() {
    const [animationStep, setAnimationStep] = useState(0);

    useEffect(() => {
        const timers = [
            setTimeout(() => setAnimationStep(1), 300),
            setTimeout(() => setAnimationStep(2), 600),
            setTimeout(() => setAnimationStep(3), 900)
        ];
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="scroll-container-brown" style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #2C1810 0%, #3D2317 50%, #4A2C1A 100%)', // Nâu đất/Đỏ gạch tối
            padding: '30px 25px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflowY: 'auto', // Cho phép cuộn
            overflowX: 'hidden'
        }}>
            {/* --- CSS: SCROLLBAR & ANIMATION --- */}
            <style>{`
                .scroll-container-brown::-webkit-scrollbar { width: 6px; }
                .scroll-container-brown::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.05); }
                .scroll-container-brown::-webkit-scrollbar-thumb { background: rgba(255, 215, 0, 0.4); border-radius: 3px; }
                .scroll-container-brown::-webkit-scrollbar-thumb:hover { background: rgba(255, 215, 0, 0.7); }

                @keyframes spotlightMoveBrown {
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
                animation: 'spotlightMoveBrown 8s infinite ease-in-out'
            }}></div>

            {/* Decorative elements */}
            <div style={{ position: 'absolute', top: '15px', right: '15px', fontSize: '20px', opacity: 0.2, zIndex: 0 }}>☭</div>
            <div style={{ position: 'absolute', bottom: '50px', left: '15px', fontSize: '16px', opacity: 0.15, zIndex: 0 }}>★</div>

            {/* Header */}
            <div style={{ marginBottom: '10px', textAlign: 'center', zIndex: 2, flexShrink: 0 }}>
                <div style={{
                    color: '#ffd700',
                    fontSize: '0.65rem',
                    letterSpacing: '2px',
                    marginBottom: '2px',
                    textTransform: 'uppercase'
                }}>
                    So Sánh Đường Lối
                </div>
                <h2 style={{
                    color: '#fff',
                    fontSize: '1.1rem',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 'bold',
                    lineHeight: 1.2,
                    textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                    marginBottom: '0'
                }}>
                    Hai Con Đường Cách Mạng
                </h2>
                <div style={{
                    width: '50px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
                    margin: '6px auto 0'
                }}></div>
            </div>

            {/* Marx-Engels Path */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                zIndex: 2
            }}>
                {/* Marx-Engels Card */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.4) 0%, rgba(102, 0, 0, 0.3) 100%)',
                    borderRadius: '12px',
                    padding: '15px',
                    border: '1px solid rgba(255, 215, 0, 0.3)',
                    transform: animationStep >= 1 ? 'translateX(0)' : 'translateX(-30px)',
                    opacity: animationStep >= 1 ? 1 : 0,
                    transition: 'all 0.5s ease',
                    flexShrink: 0
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '10px'
                    }}>
                        <div style={{
                            width: '35px',
                            height: '35px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #8B0000, #660000)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px',
                            color: '#ffd700'
                        }}>
                            📜
                        </div>
                        <h3 style={{
                            color: '#ffd700',
                            fontSize: '0.9rem',
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontWeight: 'bold',
                            margin: 0
                        }}>
                            Mác - Ăngghen
                        </h3>
                    </div>
                    <div style={{
                        background: 'rgba(0,0,0,0.3)',
                        borderRadius: '8px',
                        padding: '12px',
                        borderLeft: '3px solid #ffd700'
                    }}>
                        <p style={{
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                            margin: 0,
                            fontFamily: "'Lora', Georgia, serif"
                        }}>
                            <strong style={{ color: '#ffd700' }}>Giải phóng giai cấp</strong>
                            <span style={{ color: 'rgba(255,255,255,0.7)', margin: '0 8px' }}>→</span>
                            Giải phóng dân tộc
                        </p>
                        <p style={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.8rem',
                            marginTop: '8px',
                            marginBottom: 0,
                            fontStyle: 'italic'
                        }}>
                            Xuất phát từ thực tiễn phương Tây - nơi chủ nghĩa tư bản đã phát triển
                        </p>
                    </div>
                </div>

                {/* Arrow */}
                <div style={{
                    textAlign: 'center',
                    color: '#ffd700',
                    fontSize: '1.2rem',
                    opacity: animationStep >= 2 ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                    flexShrink: 0
                }}>
                    ⟷
                </div>

                {/* Ho Chi Minh Path */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.4) 0%, rgba(139, 105, 20, 0.3) 100%)',
                    borderRadius: '12px',
                    padding: '15px',
                    border: '1px solid rgba(255, 215, 0, 0.5)',
                    transform: animationStep >= 2 ? 'translateX(0)' : 'translateX(30px)',
                    opacity: animationStep >= 2 ? 1 : 0,
                    transition: 'all 0.5s ease',
                    flexShrink: 0
                }}>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '10px'
                    }}>
                        <div style={{
                            width: '35px',
                            height: '35px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #B8860B, #8B6914)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '16px'
                        }}>
                            ⭐
                        </div>
                        <h3 style={{
                            color: '#ffd700',
                            fontSize: '0.9rem',
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontWeight: 'bold',
                            margin: 0
                        }}>
                            Hồ Chí Minh
                        </h3>
                    </div>
                    <div style={{
                        background: 'rgba(0,0,0,0.3)',
                        borderRadius: '8px',
                        padding: '12px',
                        borderLeft: '3px solid #ffd700'
                    }}>
                        <p style={{
                            color: 'rgba(255,255,255,0.9)',
                            fontSize: '0.9rem',
                            lineHeight: 1.6,
                            margin: 0,
                            fontFamily: "'Lora', Georgia, serif"
                        }}>
                            <strong style={{ color: '#ffd700' }}>Giải phóng dân tộc</strong>
                            <span style={{ color: 'rgba(255,255,255,0.7)', margin: '0 8px' }}>→</span>
                            Giải phóng giai cấp
                        </p>
                        <p style={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.8rem',
                            marginTop: '8px',
                            marginBottom: 0,
                            fontStyle: 'italic'
                        }}>
                            Xuất phát từ thực tiễn các nước thuộc địa - nơi áp bức dân tộc là chủ yếu
                        </p>
                    </div>
                </div>
            </div>

            {/* Key insight */}
            <div style={{
                marginTop: '10px',
                transform: animationStep >= 3 ? 'translateY(0)' : 'translateY(20px)',
                opacity: animationStep >= 3 ? 1 : 0,
                transition: 'all 0.5s ease',
                zIndex: 2,
                flexShrink: 0
            }}>
                <div style={{
                    background: 'rgba(255, 215, 0, 0.1)',
                    borderRadius: '8px',
                    padding: '12px',
                    border: '1px solid rgba(255, 215, 0, 0.3)',
                    textAlign: 'center'
                }}>
                    <p style={{
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: '0.85rem',
                        lineHeight: 1.6,
                        margin: 0,
                        fontFamily: "'Lora', Georgia, serif",
                        fontStyle: 'italic'
                    }}>
                        Đây là sự <strong style={{ color: '#ffd700' }}>sáng tạo</strong> của Hồ Chí Minh trong việc vận dụng chủ nghĩa Mác-Lênin vào điều kiện cụ thể của Việt Nam
                    </p>
                </div>
            </div>

            {/* Spacer */}
            <div style={{ height: '30px', flexShrink: 0 }}></div>

            {/* Page number */}
            <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '25px',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.75rem',
                zIndex: 2,
                pointerEvents: 'none'
            }}>
                16
            </div>
        </div>
    );
}

// ==========================================
// TRANG PHẢI (RIGHT PAGE) - PART 5 PAGE 2
// ==========================================
export function Part5Page2RightPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 400);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="scroll-container-light" style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#FDFBF7',
            padding: '20px 25px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflowY: 'auto',
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
            <div style={{ marginBottom: '15px', textAlign: 'center', zIndex: 1, flexShrink: 0 }}>
                <div style={{
                    color: '#B8860B',
                    fontSize: '0.65rem',
                    letterSpacing: '2px',
                    marginBottom: '4px',
                    textTransform: 'uppercase'
                }}>
                    Ý Nghĩa Sáng Tạo
                </div>
                <h2 style={{
                    color: '#7B2D3E',
                    fontSize: '1rem',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 'bold',
                    margin: 0
                }}>
                    Giải Phóng Dân Tộc & Giai Cấp
                </h2>
            </div>

            {/* Main content */}
            <div style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                zIndex: 1
            }}>
                {/* Key Quote */}
                <div style={{
                    background: 'linear-gradient(135deg, #7B2D3E 0%, #5C2230 100%)',
                    borderRadius: '12px',
                    padding: '18px',
                    boxShadow: '0 6px 20px rgba(123, 45, 62, 0.3)',
                    transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isRevealed ? 1 : 0,
                    transition: 'all 0.6s ease',
                    flexShrink: 0
                }}>
                    <div style={{
                        color: 'rgba(255,215,0,0.8)',
                        fontSize: '1.5rem',
                        marginBottom: '8px',
                        lineHeight: 1
                    }}>
                        ❝
                    </div>
                    <p style={{
                        color: '#fff',
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        fontFamily: "'Lora', Georgia, serif",
                        fontStyle: 'italic',
                        margin: 0
                    }}>
                        Trong điều kiện Việt Nam, <strong style={{ color: '#ffd700' }}>giải phóng dân tộc</strong> là điều kiện tiên quyết để <strong style={{ color: '#ffd700' }}>giải phóng giai cấp</strong>, và ngược lại, giải phóng giai cấp là điều kiện để giải phóng dân tộc triệt để.
                    </p>
                    <div style={{
                        marginTop: '10px',
                        textAlign: 'right',
                        color: 'rgba(255,255,255,0.8)',
                        fontSize: '0.85rem'
                    }}>
                        — Tư tưởng Hồ Chí Minh
                    </div>
                </div>

                {/* Explanation Cards */}
                <div style={{
                    display: 'flex',
                    gap: '10px',
                    transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isRevealed ? 1 : 0,
                    transition: 'all 0.6s ease 0.2s',
                    flexShrink: 0
                }}>
                    <div style={{
                        flex: 1,
                        background: 'linear-gradient(135deg, rgba(123, 45, 62, 0.1) 0%, rgba(92, 34, 48, 0.05) 100%)',
                        borderRadius: '8px',
                        padding: '12px',
                        border: '1px solid rgba(123, 45, 62, 0.2)'
                    }}>
                        <div style={{ fontSize: '1.2rem', marginBottom: '6px', textAlign: 'center' }}>🇻🇳</div>
                        <h4 style={{
                            color: '#7B2D3E',
                            fontSize: '0.85rem',
                            fontWeight: 'bold',
                            marginBottom: '6px',
                            textAlign: 'center'
                        }}>
                            Giải phóng dân tộc
                        </h4>
                        <p style={{
                            color: '#5C2230',
                            fontSize: '0.8rem',
                            lineHeight: 1.5,
                            margin: 0,
                            textAlign: 'center'
                        }}>
                            Điều kiện tiên quyết trong hoàn cảnh thuộc địa
                        </p>
                    </div>
                    <div style={{
                        flex: 1,
                        background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.15) 0%, rgba(139, 105, 20, 0.1) 100%)',
                        borderRadius: '8px',
                        padding: '12px',
                        border: '1px solid rgba(184, 134, 11, 0.3)'
                    }}>
                        <div style={{ fontSize: '1.2rem', marginBottom: '6px', textAlign: 'center' }}>⚒️</div>
                        <h4 style={{
                            color: '#8B6914',
                            fontSize: '0.7rem',
                            fontWeight: 'bold',
                            marginBottom: '6px',
                            textAlign: 'center'
                        }}>
                            Giải phóng giai cấp
                        </h4>
                        <p style={{
                            color: '#6B5210',
                            fontSize: '0.65rem',
                            lineHeight: 1.5,
                            margin: 0,
                            textAlign: 'center'
                        }}>
                            Điều kiện giải phóng dân tộc triệt để
                        </p>
                    </div>
                </div>

                {/* Connection arrow */}
                <div style={{
                    textAlign: 'center',
                    color: '#B8860B',
                    fontSize: '1.5rem',
                    transform: isRevealed ? 'scale(1)' : 'scale(0)',
                    transition: 'transform 0.4s ease 0.4s',
                    flexShrink: 0
                }}>
                    ⟺
                </div>

                {/* Final conclusion */}
                <div style={{
                    background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.2) 0%, rgba(139, 105, 20, 0.15) 100%)',
                    borderRadius: '10px',
                    padding: '15px',
                    border: '2px solid rgba(184, 134, 11, 0.4)',
                    transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isRevealed ? 1 : 0,
                    transition: 'all 0.6s ease 0.5s',
                    flexShrink: 0
                }}>
                    <p style={{
                        color: '#5C2230',
                        fontSize: '0.8rem',
                        lineHeight: 1.6,
                        fontFamily: "'Lora', Georgia, serif",
                        margin: 0,
                        textAlign: 'center'
                    }}>
                        Hai nhiệm vụ này <strong>gắn bó chặt chẽ</strong> và <strong>bổ sung cho nhau</strong> trong suốt tiến trình cách mạng Việt Nam, tạo nên sức mạnh tổng hợp để đưa dân tộc đến thắng lợi cuối cùng.
                    </p>
                </div>
            </div>

            {/* Bottom decoration */}
            <div style={{
                marginTop: '10px',
                paddingTop: '8px',
                textAlign: 'center',
                borderTop: '1px solid rgba(184, 134, 11, 0.3)',
                zIndex: 1,
                flexShrink: 0
            }}>
                <div style={{
                    color: '#B8860B',
                    fontSize: '1.2rem',
                    marginBottom: '3px'
                }}>
                    ★
                </div>
                <p style={{
                    color: '#999',
                    fontSize: '0.6rem',
                    fontStyle: 'italic',
                    margin: 0
                }}>
                    Kết thúc Phần V: Con đường cách mạng vô sản
                </p>
            </div>

            {/* Spacer */}
            <div style={{ height: '30px', flexShrink: 0 }}></div>

            {/* Page number */}
            <div style={{
                position: 'absolute',
                bottom: '15px',
                right: '25px',
                color: '#999',
                fontSize: '0.75rem',
                zIndex: 1,
                pointerEvents: 'none'
            }}>
                17
            </div>
        </div>
    );
}