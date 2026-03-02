import React from 'react';

// Palette màu "Thống nhất & Toàn vẹn lãnh thổ" - Premium & Trang trọng
const THEME_ACCENT = '#B91C1C'; // Đỏ cờ, đậm và sang hơn
const PAPER_BG = '#FDFBF7'; // Màu giấy kem
const TEXT_MAIN = '#2D1810'; // Nâu đen thẫm, đọc dịu mắt hơn đen
const TEXT_SUB = '#6D5A50'; // Nâu xám nhạt

// Trang trái Phần IV
export function Part4LeftPage() {
    return (
        <div style={{
            animation: 'pageIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)',
            position: 'relative',
            height: '100%',
            backgroundColor: PAPER_BG, // Nền giấy
            display: 'flex',
            flexDirection: 'column',
            padding: '40px 35px', // Giảm padding để có thêm không gian
            borderLeft: '1px solid rgba(0,0,0,0.05)',
            backgroundImage: 'linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)',
            backgroundSize: '20px 100%', // Hiệu ứng giấy kẻ rất mờ
            overflowY: 'auto' // Cho phép cuộn nếu nội dung quá dài
        }}>
            {/* Header: Số phần & Tên phần */}
            <div style={{ marginBottom: '1.5rem', borderBottom: `2px solid ${THEME_ACCENT}`, paddingBottom: '0.75rem' }}>
                <h2 style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.75rem',
                    color: '#1A1A1A',
                    margin: '0',
                    fontWeight: 'bold'
                }}>
                    Phần IV
                </h2>
                <h3 style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.85rem',
                    color: '#7B2D3E',
                    marginBottom: '1rem',
                    fontStyle: 'italic'
                }}>
                    Thống Nhất Và Toàn Vẹn Lãnh Thổ
                </h3>
            </div>

            {/* Intro Text */}
            <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.95rem', // Chữ vừa vặn hơn
                color: TEXT_SUB,
                lineHeight: '1.6',
                marginBottom: '1.5rem',
                textAlign: 'justify'
            }}>
                Khát vọng thống nhất là dòng chảy xuyên suốt trong tư tưởng Hồ Chí Minh. Người luôn khẳng định: độc lập mà đất nước còn chia cắt thì chưa trọn vẹn.
            </p>

            {/* Highlight Quote 1 */}
            <div style={{
                marginBottom: '1.5rem',
                position: 'relative',
                paddingLeft: '1.5rem'
            }}>
                <div style={{
                    position: 'absolute',
                    left: '0',
                    top: '5px',
                    bottom: '5px',
                    width: '3px',
                    backgroundColor: THEME_ACCENT,
                    borderRadius: '2px'
                }}></div>
                <p style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.4rem',
                    color: TEXT_MAIN,
                    lineHeight: '1.3',
                    fontWeight: '600',
                    margin: '0 0 0.4rem 0'
                }}>
                    "Nước Việt Nam là một, dân tộc Việt Nam là một."
                </p>
                <p style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.85rem',
                    color: THEME_ACCENT,
                    margin: 0,
                    fontWeight: 'bold',
                    letterSpacing: '0.5px'
                }}>
                    — THÁNG 2 / 1958
                </p>
            </div>

            {/* Box Quote 2: Nam Bộ Style Premium */}
            <div style={{
                marginTop: 'auto', // Đẩy xuống dưới cùng nếu còn chỗ
                background: '#fff',
                padding: '1.25rem 1.5rem', // Padding gọn hơn
                borderRadius: '2px',
                border: '1px solid #e5e5e5',
                boxShadow: '0 5px 20px rgba(0,0,0,0.04)',
                position: 'relative',
                marginBottom: '2rem' // Cách số trang
            }}>
                {/* Dấu ngoặc kép trang trí */}
                <span style={{
                    position: 'absolute',
                    top: '-20px',
                    left: '15px',
                    fontSize: '3.5rem',
                    color: 'rgba(185, 28, 28, 0.1)',
                    fontFamily: 'serif',
                    lineHeight: 1
                }}>“</span>

                <p style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '1rem',
                    color: TEXT_MAIN,
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    margin: '0 0 0.75rem 0',
                    textAlign: 'justify',
                    position: 'relative',
                    zIndex: 1
                }}>
                    Nam Bộ là máu của máu Việt Nam, là thịt của thịt Việt Nam. Sông có thể cạn, núi có thể mòn, song chân lý ấy không bao giờ thay đổi.
                </p>
                <div style={{
                    borderTop: '1px solid #eee',
                    paddingTop: '0.5rem',
                    textAlign: 'right'
                }}>
                    <span style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: '0.8rem',
                        color: TEXT_SUB,
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>Thư gửi đồng bào Nam Bộ, 1946</span>
                </div>
            </div>

            {/* Pagination */}
            <div style={{ position: 'absolute', bottom: '15px', left: '40px', fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#aaa', fontWeight: 'bold' }}>10</div>
        </div>
    );
}

// Trang phải Phần IV
export function Part4RightPage() {
    return (
        <div style={{
            animation: 'pageIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s', // Delay nhẹ
            position: 'relative',
            height: '100%',
            backgroundColor: PAPER_BG,
            display: 'flex',
            flexDirection: 'column',
            padding: '35px 30px', // Giảm padding
            borderLeft: '1px solid rgba(0,0,0,0.03)', // Rãnh sách mờ
            overflow: 'hidden' // Bỏ thanh kéo
        }}>
            {/* Box Di Chúc - Style Thư tín cổ điển */}
            <div style={{
                backgroundColor: '#fff',
                padding: '1.5rem 1.25rem', // Nhỏ hơn
                marginBottom: '1.5rem',
                boxShadow: '0 10px 30px rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.02)',
                position: 'relative',
                transform: 'rotate(0.5deg)' // Nghiêng nhẹ tự nhiên
            }}>
                {/* Ghim giấy ảo (Optional visual) */}
                <div style={{
                    position: 'absolute', top: '-10px', left: '50%', transform: 'translateX(-50%)',
                    width: '60px', height: '15px', background: 'rgba(185, 28, 28, 0.15)', borderRadius: '2px'
                }}></div>

                <h4 style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '0.75rem',
                    color: THEME_ACCENT,
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    textAlign: 'center',
                    marginBottom: '0.75rem',
                    borderBottom: '1px solid rgba(185, 28, 28, 0.1)',
                    paddingBottom: '0.3rem',
                    display: 'inline-block',
                    width: '100%'
                }}>
                    Di chúc thiêng liêng
                </h4>

                <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1rem',
                    color: TEXT_MAIN,
                    lineHeight: '1.55',
                    textAlign: 'justify',
                    marginBottom: '0.75rem'
                }}>
                    "Dù khó khăn, gian khổ đến mấy, nhân dân ta nhất định sẽ hoàn toàn thắng lợi... Tổ quốc ta nhất định sẽ thống nhất. Đồng bào Nam Bắc nhất định sẽ sum họp một nhà."
                </p>

                <p style={{
                    fontFamily: "'Lora', serif",
                    fontSize: '0.8rem',
                    color: '#888',
                    textAlign: 'right',
                    fontStyle: 'italic'
                }}>
                    — Hà Nội, 10-5-1969
                </p>
            </div>

            {/* Bottom Section: Quote nổi bật */}
            <div style={{
                marginTop: 'auto',
                marginBottom: '2rem', // Đẩy lên khỏi số trang
                textAlign: 'center',
                padding: '0 1rem'
            }}>
                <div style={{ display: 'inline-block', marginBottom: '0.5rem' }}>
                    {/* Icon trái tim cách điệu nhỏ */}
                    <span style={{ fontSize: '1.5rem', color: THEME_ACCENT, opacity: 0.8 }}>♥</span>
                </div>
                <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.3rem', // Nhỏ hơn
                    color: THEME_ACCENT,
                    fontStyle: 'italic',
                    marginBottom: '0.4rem',
                    fontWeight: '700',
                    textShadow: '0 2px 4px rgba(185, 28, 28, 0.05)'
                }}>
                    "Miền Nam luôn ở trong trái tim tôi"
                </p>
                <div style={{
                    width: '50px',
                    height: '1px',
                    background: '#ccc',
                    margin: '0 auto 0.5rem auto'
                }}></div>
                <p style={{
                    fontFamily: "'Lora', serif",
                    fontSize: '0.8rem',
                    color: '#999',
                    fontStyle: 'normal',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    Hà Nội, 1946
                </p>
            </div>

            {/* Pagination */}
            <div style={{ position: 'absolute', bottom: '15px', right: '40px', fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#aaa', fontWeight: 'bold' }}>11</div>
        </div>
    );
}
