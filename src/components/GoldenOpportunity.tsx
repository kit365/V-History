import { useState, useEffect } from 'react';
import { Clock, Zap, AlertTriangle, Flag } from 'lucide-react';

export function GoldenOpportunity() {

    // Countdown Logic for 15 Days
    const [timeLeft, setTimeLeft] = useState({
        days: 15,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Target date is 15 days from "now" visually, but we'll just simulate a ticking clock
        // from a fixed 15 days down.
        const totalSeconds = 15 * 24 * 60 * 60;
        let currentSeconds = totalSeconds;

        const timer = setInterval(() => {
            currentSeconds--;
            if (currentSeconds < 0) {
                clearInterval(timer);
                return;
            }

            const d = Math.floor(currentSeconds / (3600 * 24));
            const h = Math.floor((currentSeconds % (3600 * 24)) / 3600);
            const m = Math.floor((currentSeconds % 3600) / 60);
            const s = Math.floor(currentSeconds % 60);

            setTimeLeft({ days: d, hours: h, minutes: m, seconds: s });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return (
        <section id="thoi-co" style={{
            padding: '120px 24px',
            background: '#1A1A1A',
            color: 'white',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decorative */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, #8B2323, transparent)',
                opacity: 0.8
            }}></div>

            <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center', marginBottom: 80 }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 12,
                        marginBottom: 20
                    }}>
                        <Zap size={24} color="#8B2323" fill="#8B2323" />
                        <span style={{
                            fontSize: 14,
                            letterSpacing: '0.4em',
                            textTransform: 'uppercase',
                            color: '#8B2323',
                            fontWeight: 700,
                            fontFamily: "'Playfair Display', serif"
                        }}>
                            THỜI CƠ NGÀN NĂM CÓ MỘT
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        marginBottom: 24,
                        fontWeight: 700,
                        lineHeight: 1.1,
                        color: 'white'
                    }}>
                        15 Ngày Sinh Tử
                    </h2>
                    <p style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '1.2rem',
                        color: '#AAA',
                        maxWidth: 750,
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        Khoảng trống quyền lực chỉ xuất hiện trong tích tắc. Chậm một bước là rơi vào tay quân Anh - Tưởng, nhanh một bước là giành lại chủ quyền dân tộc.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 40,
                    alignItems: 'center'
                }}>
                    {/* Live Countdown Visual */}
                    <div style={{
                        background: 'linear-gradient(135deg, rgba(45,26,26,0.9) 0%, rgba(26,26,26,0.9) 100%)',
                        padding: '50px 30px',
                        borderRadius: 30,
                        border: '2px solid rgba(139, 35, 35, 0.3)',
                        textAlign: 'center',
                        boxShadow: '0 0 50px rgba(139, 35, 35, 0.2)',
                        position: 'relative',
                        animation: 'pulse-glow 3s infinite alternate'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 20,
                            right: 30,
                            color: '#8B2323',
                            opacity: 0.5
                        }}>
                            <AlertTriangle size={60} />
                        </div>

                        <div className="flex justify-center gap-2 lg:gap-4 mb-8">
                            <div className="flex flex-col items-center">
                                <div className="text-4xl lg:text-6xl font-black font-historical text-white tracking-wider DropShadow">{formatNumber(timeLeft.days)}</div>
                                <span className="text-[#8B2323] text-xs lg:text-sm uppercase font-bold tracking-widest mt-2">Ngày</span>
                            </div>
                            <div className="text-4xl lg:text-6xl font-black text-white/30">:</div>
                            <div className="flex flex-col items-center">
                                <div className="text-4xl lg:text-6xl font-black font-historical text-white tracking-wider">{formatNumber(timeLeft.hours)}</div>
                                <span className="text-[#8B2323] text-xs lg:text-sm uppercase font-bold tracking-widest mt-2">Giờ</span>
                            </div>
                            <div className="text-4xl lg:text-6xl font-black text-white/30">:</div>
                            <div className="flex flex-col items-center">
                                <div className="text-4xl lg:text-6xl font-black font-historical text-[#C9A227] tracking-wider">{formatNumber(timeLeft.minutes)}</div>
                                <span className="text-[#8B2323] text-xs lg:text-sm uppercase font-bold tracking-widest mt-2">Phút</span>
                            </div>
                            <div className="text-4xl lg:text-6xl font-black text-white/30">:</div>
                            <div className="flex flex-col items-center">
                                <div className="text-4xl lg:text-6xl font-black font-historical text-[#C9A227] tracking-wider">{formatNumber(timeLeft.seconds)}</div>
                                <span className="text-[#8B2323] text-xs lg:text-sm uppercase font-bold tracking-widest mt-2">Giây</span>
                            </div>
                        </div>

                        <div style={{
                            fontSize: '1.2rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            color: '#DDD',
                            fontWeight: 600,
                            marginBottom: 20
                        }}>
                            Trước khi quân Đồng Minh tràn vào
                        </div>

                        <p style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic' }}>
                            "Đêm 13/8/1945, ngay khi nhận tin Nhật đầu hàng..."
                        </p>
                    </div>

                    {/* Timeline Data */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                        {[
                            {
                                time: 'Tháng 3/1945',
                                title: 'Nhật Đảo Chính Pháp',
                                event: 'Chỉ thị "Nhật - pháp bắn nhau và hành động của chúng ta" ban hành ngay trong đêm, chớp thời cơ dọn đường cho Tổng khởi nghĩa.',
                                icon: Zap,
                                color: '#C9A227'
                            },
                            {
                                time: '13/08/1945',
                                title: 'Quyết định Thần Tốc',
                                event: 'Ủy ban Khởi nghĩa toàn quốc ra lệnh Tổng khởi nghĩa dù chưa có tin chính thức Nhật đầu hàng Đồng minh.',
                                icon: Clock,
                                color: '#8B2323'
                            },
                            {
                                time: '14/08 - 28/08/1945',
                                title: 'Giành Chính Quyền',
                                event: 'Chỉ trong 15 ngày, chính quyền từ tay phát xít Nhật và tay sai đã về tay nhân dân trên cả nước trước khi Anh - Tưởng kịp can thiệp.',
                                icon: Flag,
                                color: '#C9A227'
                            }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                gap: 20,
                                padding: '24px',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: 16,
                                borderLeft: `4px solid ${item.color}`,
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{
                                    minWidth: 48,
                                    height: 48,
                                    borderRadius: 12,
                                    background: 'rgba(255,255,255,0.05)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: item.color
                                }}>
                                    <item.icon size={22} />
                                </div>
                                <div>
                                    <div style={{ color: item.color, fontWeight: 800, fontSize: '0.85rem', marginBottom: 4, letterSpacing: '0.1em' }}>
                                        {item.time}
                                    </div>
                                    <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                                    <div style={{ color: '#AAA', fontSize: '0.95rem', lineHeight: 1.6 }}>
                                        {item.event}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes pulse-glow {
            0% { box-shadow: 0 0 30px rgba(139, 35, 35, 0.1); border-color: rgba(139, 35, 35, 0.2); }
            100% { box-shadow: 0 0 60px rgba(139, 35, 35, 0.4); border-color: rgba(139, 35, 35, 0.6); }
        }
        .DropShadow {
            text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
        }
      `}</style>
        </section>
    );
}
