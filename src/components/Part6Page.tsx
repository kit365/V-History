import { useState, useEffect } from 'react';

// ==========================================
// TRANG TRÁI (LEFT PAGE) - CHO PHÉP CUỘN
// ==========================================
export function Part6LeftPage() {
    const [activeIndex, setActiveIndex] = useState(-1);

    const keyPoints = [
        {
            icon: '🎯',
            title: 'Nhân tố chủ quan',
            description: 'Đảng cộng sản là nhân tố chủ quan để giai cấp công nhân hoàn thành sứ mệnh lịch sử'
        },
        {
            icon: '⚡',
            title: 'Tổ chức chính đảng',
            description: 'Giai cấp công nhân phải tổ chức ra chính đảng của mình'
        },
        {
            icon: '👥',
            title: 'Thuyết phục & giác ngộ',
            description: 'Đảng phải thuyết phục, giác ngộ, tập hợp đông đảo quần chúng'
        },
        {
            icon: '✊',
            title: 'Huấn luyện & đấu tranh',
            description: 'Huấn luyện quần chúng và đưa quần chúng ra đấu tranh'
        }
    ];

    return (
        <div className="scroll-container" style={{
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            padding: '30px 25px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflowY: 'auto', // <--- QUAN TRỌNG: Cho phép cuộn dọc
            overflowX: 'hidden' // Ẩn thanh cuộn ngang
        }}>
            {/* CSS tùy chỉnh thanh cuộn cho nền tối */}
            <style>{`
                .scroll-container::-webkit-scrollbar {
                    width: 6px;
                }
                .scroll-container::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.05);
                }
                .scroll-container::-webkit-scrollbar-thumb {
                    background: rgba(255, 215, 0, 0.3);
                    border-radius: 3px;
                }
                .scroll-container::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 215, 0, 0.6);
                }
            `}</style>

            {/* Decorative elements */}
            <div style={{ position: 'absolute', top: '15px', right: '15px', fontSize: '20px', opacity: 0.3 }}>☭</div>
            <div style={{ position: 'absolute', bottom: '50px', left: '15px', fontSize: '16px', opacity: 0.2 }}>★</div>

            {/* Header */}
            <div style={{ marginBottom: '15px', textAlign: 'center', flexShrink: 0 }}>
                <div style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    color: '#ffd700',
                    fontSize: '1.75rem',
                    fontWeight: 'bold',
                    marginBottom: '6px'
                }}>
                    Phần VI
                </div>
                <h3 style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.85rem',
                    color: 'rgba(255,255,255,0.9)',
                    fontStyle: 'italic',
                    marginBottom: '0.3rem',
                    lineHeight: 1.3
                }}>
                    Đảng Cộng Sản Lãnh Đạo Cách Mạng
                </h3>
                <div style={{
                    width: '50px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, #ffd700, transparent)',
                    margin: '8px auto 0'
                }}></div>
            </div>

            {/* Main Quote */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.4) 0%, rgba(102, 0, 0, 0.3) 100%)',
                borderRadius: '10px',
                padding: '12px 15px',
                marginBottom: '15px',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                flexShrink: 0
            }}>
                <div style={{
                    color: 'rgba(255,215,0,0.8)',
                    fontSize: '1.2rem',
                    marginBottom: '6px',
                    lineHeight: 1
                }}>
                    ❝
                </div>
                <p style={{
                    color: '#fff',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    fontFamily: "'Lora', Georgia, serif",
                    fontStyle: 'italic',
                    margin: 0
                }}>
                    Cách mạng giải phóng dân tộc, trong điều kiện của Việt Nam muốn thắng lợi phải do <strong style={{ color: '#ffd700' }}>đảng cộng sản lãnh đạo</strong>
                </p>
            </div>

            {/* Theo Mác-Lênin Label */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '10px',
                flexShrink: 0
            }}>
                <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #8B0000, #660000)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '12px',
                    color: '#ffd700'
                }}>
                    📜
                </div>
                <h4 style={{
                    color: '#ffd700',
                    fontSize: '1rem',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 'bold',
                    margin: 0
                }}>
                    Theo chủ nghĩa Mác - Lênin
                </h4>
            </div>

            {/* Key Points */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {keyPoints.map((point, index) => (
                    <div
                        key={index}
                        style={{
                            background: activeIndex === index
                                ? 'rgba(255,215,0,0.15)'
                                : 'rgba(255,255,255,0.05)',
                            borderRadius: '8px',
                            padding: '10px 12px',
                            borderLeft: activeIndex === index
                                ? '3px solid #ffd700'
                                : '3px solid transparent',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            flexShrink: 0
                        }}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(-1)}
                    >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                            <div style={{ fontSize: '16px' }}>{point.icon}</div>
                            <div>
                                <div style={{
                                    color: '#ffd700',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    marginBottom: '3px'
                                }}>
                                    {point.title}
                                </div>
                                <div style={{
                                    color: 'rgba(255,255,255,0.85)',
                                    fontSize: '0.85rem',
                                    lineHeight: 1.5
                                }}>
                                    {point.description}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Spacer để tránh số trang che mất nội dung cuối */}
            <div style={{ height: '30px', flexShrink: 0 }}></div>

            {/* Page number */}
            <div style={{
                position: 'absolute',
                bottom: '15px',
                left: '25px',
                color: 'rgba(255,255,255,0.5)',
                fontSize: '0.75rem',
                pointerEvents: 'none' // Để click xuyên qua nếu cần
            }}>
                18
            </div>
        </div>
    );
}

// ==========================================
// TRANG PHẢI (RIGHT PAGE) - CHO PHÉP CUỘN
// ==========================================
export function Part6RightPage() {
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsRevealed(true), 400);
        return () => clearTimeout(timer);
    }, []);

    const characteristics = [
        { label: 'Đội tiên phong', value: 'giai cấp công nhân' },
        { label: 'Đội tiên phong', value: 'nhân dân lao động' },
        { label: 'Kiên quyết nhất', value: 'hăng hái nhất' },
        { label: 'Trong sạch nhất', value: 'tận tâm tận lực' }
    ];

    return (
        <div className="scroll-container-light" style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#FDFBF7',
            padding: '25px 25px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflowY: 'auto', // <--- QUAN TRỌNG: Cho phép cuộn dọc
            overflowX: 'hidden'
        }}>
            {/* CSS tùy chỉnh thanh cuộn cho nền sáng */}
            <style>{`
                .scroll-container-light::-webkit-scrollbar {
                    width: 6px;
                }
                .scroll-container-light::-webkit-scrollbar-track {
                    background: rgba(0, 0, 0, 0.05);
                }
                .scroll-container-light::-webkit-scrollbar-thumb {
                    background: rgba(123, 45, 62, 0.3);
                    border-radius: 3px;
                }
                .scroll-container-light::-webkit-scrollbar-thumb:hover {
                    background: rgba(123, 45, 62, 0.6);
                }
            `}</style>

            {/* Header */}
            <div style={{ marginBottom: '12px', textAlign: 'center', flexShrink: 0 }}>
                <div style={{
                    color: '#B8860B',
                    fontSize: '0.65rem',
                    letterSpacing: '2px',
                    marginBottom: '4px',
                    textTransform: 'uppercase'
                }}>
                    Quan Điểm
                </div>
                <h2 style={{
                    color: '#7B2D3E',
                    fontSize: '1rem',
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontWeight: 'bold',
                    margin: 0
                }}>
                    Theo Hồ Chí Minh
                </h2>
            </div>

            {/* Main Quote */}
            <div style={{
                background: 'linear-gradient(135deg, #7B2D3E 0%, #5C2230 100%)',
                borderRadius: '10px',
                padding: '15px',
                marginBottom: '12px',
                boxShadow: '0 6px 20px rgba(123, 45, 62, 0.3)',
                transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease',
                flexShrink: 0
            }}>
                <div style={{
                    color: 'rgba(255,215,0,0.8)',
                    fontSize: '1.2rem',
                    marginBottom: '6px',
                    lineHeight: 1
                }}>
                    ❝
                </div>
                <p style={{
                    color: '#fff',
                    fontSize: '0.95rem',
                    lineHeight: 1.6,
                    fontFamily: "'Lora', Georgia, serif",
                    fontStyle: 'italic',
                    margin: 0
                }}>
                    <strong style={{ color: '#ffd700' }}>Đảng Cộng sản</strong> vừa là đội tiên phong của giai cấp công nhân và vừa là đội tiên phong của nhân dân lao động kiên quyết nhất, hăng hái nhất, trong sạch nhất, tận tâm tận lực phụng sự Tổ quốc.
                </p>
            </div>

            {/* Additional Quote */}
            <div style={{
                background: 'linear-gradient(135deg, rgba(184, 134, 11, 0.2) 0%, rgba(139, 105, 20, 0.15) 100%)',
                borderRadius: '10px',
                padding: '12px 15px',
                marginBottom: '12px',
                border: '2px solid rgba(184, 134, 11, 0.4)',
                transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.2s',
                flexShrink: 0
            }}>
                <p style={{
                    color: '#5C2230',
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    fontFamily: "'Lora', Georgia, serif",
                    margin: 0,
                    textAlign: 'center'
                }}>
                    Đội còn là <strong>đại biểu trung thành</strong> lợi ích của giai cấp công nhân, nhân dân lao động và của cả <strong>dân tộc Việt Nam</strong>
                </p>
            </div>

            {/* Characteristics Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
                marginBottom: '12px',
                transform: isRevealed ? 'translateY(0)' : 'translateY(20px)',
                opacity: isRevealed ? 1 : 0,
                transition: 'all 0.6s ease 0.3s',
                flexShrink: 0
            }}>
                {characteristics.map((char, index) => (
                    <div key={index} style={{
                        background: index % 2 === 0
                            ? 'linear-gradient(135deg, rgba(123, 45, 62, 0.1) 0%, rgba(92, 34, 48, 0.05) 100%)'
                            : 'linear-gradient(135deg, rgba(184, 134, 11, 0.15) 0%, rgba(139, 105, 20, 0.1) 100%)',
                        borderRadius: '6px',
                        padding: '8px 10px',
                        textAlign: 'center',
                        border: index % 2 === 0
                            ? '1px solid rgba(123, 45, 62, 0.2)'
                            : '1px solid rgba(184, 134, 11, 0.3)'
                    }}>
                        <div style={{
                            color: index % 2 === 0 ? '#7B2D3E' : '#8B6914',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            marginBottom: '2px'
                        }}>
                            {char.label}
                        </div>
                        <div style={{
                            color: index % 2 === 0 ? '#5C2230' : '#6B5210',
                            fontSize: '0.8rem'
                        }}>
                            {char.value}
                        </div>
                    </div>
                ))}
            </div>

            {/* Key Insight */}
            <div style={{
                marginTop: 'auto',
                background: 'rgba(255, 215, 0, 0.1)',
                borderRadius: '8px',
                padding: '10px 12px',
                border: '1px solid rgba(255, 215, 0, 0.3)',
                textAlign: 'center',
                flexShrink: 0
            }}>
                <p style={{
                    color: '#5C2230',
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    margin: 0,
                    fontFamily: "'Lora', Georgia, serif",
                    fontStyle: 'italic'
                }}>
                    Đây là sự <strong style={{ color: '#B8860B' }}>sáng tạo</strong> của Hồ Chí Minh: Đảng không chỉ của giai cấp công nhân mà còn là đảng của <strong style={{ color: '#B8860B' }}>toàn dân tộc</strong>
                </p>
            </div>

             {/* Spacer để tránh số trang che mất nội dung cuối */}
             <div style={{ height: '30px', flexShrink: 0 }}></div>

            {/* Page number */}
            <div style={{
                position: 'absolute',
                bottom: '15px',
                right: '25px',
                color: '#999',
                fontSize: '0.75rem',
                pointerEvents: 'none'
            }}>
                19
            </div>
        </div>
    );
}