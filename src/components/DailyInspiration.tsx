import { useState, useEffect } from 'react';
import { Sparkles, Quote } from 'lucide-react';

interface QuoteData {
    text: string;
    context: string;
}

const quotes: QuoteData[] = [
    {
        text: "Không có gì quý hơn độc lập, tự do.",
        context: "Lời kêu gọi kháng chiến chống Mỹ (17/7/1966)"
    },
    {
        text: "Vì lợi ích mười năm thì phải trồng cây, vì lợi ích trăm năm thì phải trồng người.",
        context: "Nói chuyện tại lớp học chính trị của giáo viên cấp II, cấp III toàn miền Bắc (9/1958)"
    },
    {
        text: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
        context: "Bài nói chuyện tại Đại hội đại biểu Mặt trận Tổ quốc Việt Nam lần thứ II (1955)"
    },
    {
        text: "Cần, kiệm, liêm, chính, chí công vô tư.",
        context: "Sáu điều Bác Hồ dạy Công an nhân dân"
    },
    {
        text: "Dễ mười lần không dân cũng chịu, khó trăm lần dân liệu cũng xong.",
        context: "Trích từ bài thơ 'Nhóm lửa' và phong trào dân vận"
    },
    {
        text: "Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập, dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành.",
        context: "Trả lời các phóng viên nước ngoài (21/1/1946)"
    },
    {
        text: "Học không bao giờ cùng. Học mãi để tiến bộ mãi. Càng tiến bộ, càng thấy cần phải học thêm.",
        context: "Bài nói chuyện tại Đại hội đại biểu toàn quốc lần thứ II của Đảng (1951)"
    },
    {
        text: "Việc gì có lợi cho dân, ta phải hết sức làm. Việc gì hại đến dân, ta phải hết sức tránh.",
        context: "Thư gửi UBND các kỳ, tỉnh, huyện và làng (17/10/1945)"
    }
];

export function DailyInspiration() {
    const [currentQuote, setCurrentQuote] = useState<QuoteData>(quotes[0]);
    const [isAnimating, setIsAnimating] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const getRandomQuote = () => {
        setIsAnimating(true);
        setHasInteracted(true);

        // Giả lập tiếng lật giấy (nếu có audio asset thật thì bỏ cmt)
        // const audio = new Audio('/assets/paper-flip.mp3');
        // audio.play().catch(() => {});

        setTimeout(() => {
            let nextQuote;
            do {
                nextQuote = quotes[Math.floor(Math.random() * quotes.length)];
            } while (nextQuote.text === currentQuote.text);

            setCurrentQuote(nextQuote);
            setIsAnimating(false);
        }, 500);
    };

    return (
        <section
            style={{
                padding: '80px 24px',
                background: 'linear-gradient(180deg, #F5F0E8 0%, #FDFBF7 100%)',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Decorative Background Icons */}
            <div style={{
                position: 'absolute',
                top: '20%',
                left: '5%',
                opacity: 0.1,
                color: '#7B2D3E',
                transform: 'rotate(-15deg)'
            }}>
                <Quote size={120} />
            </div>

            <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 12,
                    marginBottom: 24
                }}>
                    <Sparkles size={20} color="#C9A227" />
                    <span style={{
                        fontSize: 12,
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        color: '#7B2D3E',
                        fontWeight: 700
                    }}>
                        Cảm Hứng Mỗi Ngày
                    </span>
                </div>

                <h2 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    color: '#1A1A1A',
                    marginBottom: 40,
                    fontWeight: 600
                }}>
                    Lời Dạy Của <span style={{ color: '#C9A227' }}>Chủ Tịch Hồ Chí Minh</span>
                </h2>

                {/* Quote Card */}
                <div style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 24,
                    padding: '50px 40px',
                    border: '1px solid rgba(201, 162, 39, 0.2)',
                    boxShadow: '0 15px 40px rgba(123, 45, 62, 0.08)',
                    minHeight: 280,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isAnimating ? 'scale(0.95) translateY(10px)' : 'scale(1) translateY(0)',
                    opacity: isAnimating ? 0.5 : 1
                }}>
                    <Quote
                        size={40}
                        color="#C9A227"
                        style={{ marginBottom: 24, opacity: 0.5 }}
                    />

                    <blockquote style={{
                        fontFamily: "'Lora', Georgia, serif",
                        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                        color: '#1A1A1A',
                        lineHeight: 1.6,
                        marginBottom: 24,
                        fontWeight: 500,
                        fontStyle: 'italic'
                    }}>
                        "{currentQuote.text}"
                    </blockquote>

                    <div style={{
                        width: 40,
                        height: 2,
                        background: '#C9A227',
                        marginBottom: 16,
                        borderRadius: 1
                    }} />

                    <p style={{
                        fontSize: '0.9rem',
                        color: '#7B2D3E',
                        fontWeight: 600,
                        letterSpacing: '0.05em'
                    }}>
                        {currentQuote.context}
                    </p>
                </div>

                {/* Action Button */}
                <button
                    onClick={getRandomQuote}
                    disabled={isAnimating}
                    style={{
                        marginTop: 40,
                        padding: '16px 36px',
                        background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 100,
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        boxShadow: '0 8px 30px rgba(123, 45, 62, 0.3)',
                        transition: 'all 0.3s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 12
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 12px 40px rgba(123, 45, 62, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 8px 30px rgba(123, 45, 62, 0.3)';
                    }}
                >
                    <Sparkles size={18} />
                    {hasInteracted ? "Nhận lời dạy tiếp theo" : "Nhận lời dạy của Bác"}
                </button>

                <p style={{
                    marginTop: 24,
                    fontSize: '0.8rem',
                    color: '#6B6B6B',
                    opacity: 0.8
                }}>
                    Mỗi lời dạy là một ngọn đuốc soi đường cho thế hệ hôm nay.
                </p>
            </div>
        </section>
    );
}
