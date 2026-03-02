import { Clock, Zap, AlertTriangle } from 'lucide-react';

export function GoldenOpportunity() {
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
                background: 'linear-gradient(90deg, transparent, #C9A227, transparent)',
                opacity: 0.5
            }}></div>

            <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center', marginBottom: 80 }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 12,
                        marginBottom: 20
                    }}>
                        <Zap size={24} color="#C9A227" fill="#C9A227" />
                        <span style={{
                            fontSize: 14,
                            letterSpacing: '0.4em',
                            textTransform: 'uppercase',
                            color: '#C9A227',
                            fontWeight: 700,
                            fontFamily: "'Playfair Display', serif"
                        }}>
                            KỊCH TÍNH LỊCH SỬ
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                        marginBottom: 24,
                        fontWeight: 700,
                        lineHeight: 1.1
                    }}>
                        15 Ngày Đêm Thần Tốc
                    </h2>
                    <p style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '1.2rem',
                        color: '#AAA',
                        maxWidth: 700,
                        margin: '0 auto',
                        lineHeight: 1.6
                    }}>
                        Khoảng trống quyền lực chỉ xuất hiện trong tích tắc. Chậm một bước là rơi vào tay quân Anh - Tưởng, nhanh một bước là giành lại chủ quyền dân tộc.
                    </p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: 40,
                    alignItems: 'center'
                }}>
                    {/* Countdown Visual */}
                    <div style={{
                        background: 'linear-gradient(135deg, #2D1A1A 0%, #1A1A1A 100%)',
                        padding: '60px 40px',
                        borderRadius: 30,
                        border: '2px solid #332222',
                        textAlign: 'center',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
                        position: 'relative'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 20,
                            right: 30,
                            color: '#8B2323',
                            opacity: 0.3
                        }}>
                            <AlertTriangle size={80} />
                        </div>

                        <div style={{
                            fontSize: '6rem',
                            fontWeight: 900,
                            fontFamily: "'Cinzel', serif",
                            color: '#C9A227',
                            lineHeight: 1,
                            marginBottom: 10,
                            textShadow: '0 0 30px rgba(201, 162, 39, 0.4)'
                        }}>
                            15
                        </div>
                        <div style={{
                            fontSize: '1.5rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.3em',
                            color: 'white',
                            fontWeight: 600,
                            marginBottom: 30
                        }}>
                            Ngày "Vàng"
                        </div>
                        <div style={{
                            height: '4px',
                            background: '#332222',
                            borderRadius: 2,
                            overflow: 'hidden',
                            width: '80%',
                            margin: '0 auto 30px'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: '#C9A227',
                                animation: 'shrink 15s linear infinite'
                            }}></div>
                        </div>
                        <p style={{ fontSize: '0.9rem', color: '#888', fontStyle: 'italic' }}>
                            "Thời cơ chỉ đến một lần, không chớp lấy sẽ ngàn năm hối hận"
                        </p>
                    </div>

                    {/* Academic Details */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
                        {[
                            {
                                time: '13/08/1945',
                                event: 'Lệnh Tổng khởi nghĩa được ban bố ngay đêm Nhật đầu hàng.',
                                icon: Clock
                            },
                            {
                                time: '14-28/08/1945',
                                event: 'Chớp thời cơ vàng trước khi quân Đồng minh tràn vào Đông Dương.',
                                icon: Zap
                            },
                            {
                                time: '02/09/1945',
                                event: 'Đọc Tuyên ngôn Độc lập, hoàn thành sứ mệnh lịch sử thần tốc.',
                                icon: Flag
                            }
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                display: 'flex',
                                gap: 20,
                                padding: '24px',
                                background: 'rgba(255,255,255,0.03)',
                                borderRadius: 16,
                                border: '1px solid rgba(255,255,255,0.05)',
                                transition: 'all 0.3s ease'
                            }}>
                                <div style={{
                                    minWidth: 48,
                                    height: 48,
                                    borderRadius: 12,
                                    background: '#8B2323',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white'
                                }}>
                                    <item.icon size={22} />
                                </div>
                                <div>
                                    <div style={{ color: '#C9A227', fontWeight: 800, fontSize: '0.85rem', marginBottom: 6, letterSpacing: '0.1em' }}>
                                        {item.time}
                                    </div>
                                    <div style={{ color: '#DDD', fontSize: '1rem', lineHeight: 1.5 }}>
                                        {item.event}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes shrink {
            from { width: 100%; }
            to { width: 0%; }
        }
      `}</style>
        </section>
    );
}

const Flag = ({ size }: { size: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1v12z"></path>
        <line x1="4" y1="22" x2="4" y2="15"></line>
    </svg>
);
