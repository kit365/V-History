import React from 'react';

export function Conclusion() {
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
                        Lời Kết
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
                    position: 'relative'
                }}>
                    <p style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '1.25rem',
                        lineHeight: 1.8,
                        color: '#222',
                        marginBottom: 24
                    }}>
                        Nhận định <strong style={{ color: '#8B2323' }}>"Cách mạng Tháng Tám chỉ là một cuộc ăn may của lịch sử"</strong> là <strong>hoàn toàn thiếu thực tế và phiến diện</strong>.
                    </p>
                    <p style={{
                        fontFamily: "'Manrope', sans-serif",
                        fontSize: '1.15rem',
                        lineHeight: 1.8,
                        color: '#444',
                        marginBottom: 30
                    }}>
                        Sự kiện Nhật đầu hàng Đồng minh đã tạo ra <span style={{ backgroundColor: 'rgba(201, 162, 39, 0.15)', padding: '2px 6px', borderRadius: 4, color: '#8B2323', fontWeight: 600 }}>thời cơ khách quan vô cùng thuận lợi</span>. Nhưng nếu không có <strong>15 năm chuẩn bị (1930 - 1945)</strong> gian khổ về mọi mặt: Từ việc xây dựng tổ chức Đảng, Mặt trận Việt Minh, định hướng lực lượng vũ trang; nếu không có nghệ thuật <strong>chủ động chớp thời cơ</strong> phát lệnh Tổng khởi nghĩa "dù hy sinh tới đâu...", thì dân tộc không thể nào giành chính quyền một cách toàn vẹn.
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
                            "Cách mạng Tháng Tám không phải là quả rụng vào vạt áo, mà là <strong>trái ngọt</strong> của một cây đại thụ được vun trồng bằng máu, bản lĩnh và trí tuệ của toàn dân tộc."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
