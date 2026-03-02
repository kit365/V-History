import React, { useState } from 'react';

export function Conclusion() {
    const [userAnswer, setUserAnswer] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (userAnswer.trim()) {
            setIsSubmitted(true);
        }
    };

    return (
        <section id="ket-luan" style={{
            padding: '100px 24px',
            background: 'linear-gradient(180deg, #FDFBF7 0%, #F5F0E8 100%)',
            position: 'relative'
        }}>
            <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    marginBottom: 16
                }}>
                    <div style={{ width: '40px', height: '1px', backgroundColor: '#C9A227' }}></div>
                    <span style={{
                        fontSize: 14,
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: '#8B2323',
                        fontWeight: 700,
                        fontFamily: "'Playfair Display', serif"
                    }}>
                        Tổng Kết Cơ Sở Lý Luận
                    </span>
                    <div style={{ width: '40px', height: '1px', backgroundColor: '#C9A227' }}></div>
                </div>
                <h2 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    color: '#1A1A1A',
                    marginBottom: 40,
                    fontWeight: 700
                }}>Tất Yếu Của <span style={{ color: '#8B2323' }}>Lịch Sử</span></h2>

                <div style={{
                    background: 'white',
                    padding: '50px',
                    borderRadius: 24,
                    boxShadow: '0 20px 50px rgba(139, 35, 35, 0.08)',
                    borderTop: '6px solid #C9A227',
                    textAlign: 'left',
                    position: 'relative',
                    marginBottom: '60px'
                }}>
                    <p style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '1.25rem',
                        lineHeight: 1.8,
                        color: '#222',
                        marginBottom: 24
                    }}>
                        Nhận định <strong style={{ color: '#8B2323' }}>"Cách mạng Tháng Tám chỉ là một cuộc ăn may của lịch sử"</strong> là <strong>hoàn toàn phi khách quan và phủ nhận công sức của cả một dân tộc</strong>.
                    </p>
                    <p style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '1.15rem',
                        lineHeight: 1.8,
                        color: '#444',
                        marginBottom: 30
                    }}>
                        Sự kiện Nhật đầu hàng Đồng minh đã tạo ra <span style={{ backgroundColor: 'rgba(201, 162, 39, 0.15)', padding: '2px 6px', borderRadius: 4, color: '#8B2323', fontWeight: 600 }}>thời cơ khách quan vô cùng thuận lợi</span>. Tuy nhiên, yếu tố quyết định là <strong>nhân tố chủ quan</strong>: Sự lãnh đạo sáng suốt của Đảng, quá trình 15 năm chuẩn bị ròng rã, và tinh thần chủ động chớp thời cơ của toàn dân tộc.
                    </p>
                    <div style={{
                        padding: 30,
                        background: 'rgba(244, 241, 234, 0.5)',
                        borderLeft: '4px solid #8B2323',
                        borderRadius: '0 12px 12px 0'
                    }}>
                        <p style={{
                            fontStyle: 'italic',
                            fontSize: '1.2rem',
                            color: '#333',
                            margin: 0,
                            fontFamily: "'Playfair Display', serif",
                            lineHeight: 1.6
                        }}>
                            "May mắn chỉ mỉm cười với những bộ óc đã chuẩn bị sẵn sàng."
                        </p>
                    </div>
                </div>

                {/* Gen Z Interactive Section */}
                <div style={{
                    background: '#1A1A1A',
                    padding: '50px',
                    borderRadius: 24,
                    boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)',
                    textAlign: 'center',
                    color: 'white'
                }}>
                    <h3 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '2rem',
                        color: '#C9A227',
                        marginBottom: 20,
                        fontWeight: 700
                    }}>
                        Góc Nhìn Gen Z
                    </h3>
                    <p style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '1.1rem',
                        color: '#DDD',
                        marginBottom: 30,
                        lineHeight: 1.6
                    }}>
                        Từ bài học lịch sử của dân tộc, bạn rút ra được điều gì cho chính mình trong một thế giới đầy biến động ngày nay? Nếu ngày mai bạn nhận được một cơ hội lớn, bạn đã "chuẩn bị" được những gì?
                    </p>

                    <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <textarea
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            placeholder="Nhập suy nghĩ của bạn..."
                            disabled={isSubmitted}
                            style={{
                                width: '100%',
                                minHeight: '120px',
                                padding: '20px',
                                borderRadius: '12px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                color: 'white',
                                fontSize: '1rem',
                                fontFamily: "'Manrope', sans-serif",
                                resize: 'none',
                                marginBottom: '20px',
                                outline: 'none',
                                transition: 'all 0.3s ease'
                            }}
                            onFocus={(e) => e.target.style.border = '1px solid #C9A227'}
                            onBlur={(e) => e.target.style.border = '1px solid rgba(255, 255, 255, 0.1)'}
                        />

                        {!isSubmitted ? (
                            <button
                                type="submit"
                                style={{
                                    padding: '16px 40px',
                                    background: '#8B2323',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    fontSize: '1rem',
                                    fontWeight: 700,
                                    letterSpacing: '0.1em',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 10px 20px rgba(139, 35, 35, 0.2)'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                Gửi Phản Hồi
                            </button>
                        ) : (
                            <div style={{
                                padding: '30px',
                                background: 'rgba(201, 162, 39, 0.1)',
                                border: '1px dashed #C9A227',
                                borderRadius: '12px',
                                animation: 'fadeIn 0.5s ease-out'
                            }}>
                                <h4 style={{ color: '#C9A227', fontSize: '1.2rem', marginBottom: '10px', fontWeight: 700 }}>Cảm ơn bạn đã chia sẻ!</h4>
                                <p style={{ color: '#white', fontSize: '1.6rem', fontFamily: "'Playfair Display', serif", fontWeight: 700, lineHeight: 1.4 }}>
                                    "May mắn là giao điểm của sự chuẩn bị kỹ lưỡng và cơ hội chín muồi."
                                </p>
                            </div>
                        )}
                    </form>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </section>
    );
}
