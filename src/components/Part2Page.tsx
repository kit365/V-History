import { useState } from 'react';

interface Part2PageProps {
    pageNumber: 1 | 2; // Trang 1 hoặc 2 của Phần II
}

export function Part2Page({ pageNumber }: Part2PageProps) {
    const [showVideo, setShowVideo] = useState(false);

    if (pageNumber === 1) {
        return (
            <div style={{ animation: 'pageIn 0.6s ease-out' }}>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.75rem', color: '#1A1A1A', marginBottom: '0.4rem', fontWeight: 'bold' }}>
                    Phần II
                </h2>
                <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem', color: '#7B2D3E', marginBottom: '1rem', fontStyle: 'italic' }}>
                    Gắn Với Tự Do, Cơm No, Áo Ấm, Và Hạnh Phúc của Nhân Dân
                </h3>

                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.9rem', color: '#1A1A1A', fontWeight: 'bold', marginBottom: '0.75rem' }}>
                    Xuyên suốt tư tưởng của Người:
                </p>

                <ul style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem', color: '#4A4A4A', lineHeight: '1.7', paddingLeft: '1.2rem', margin: '0 0 1rem 0' }}>
                    <li style={{ marginBottom: '0.5rem' }}>
                        Độc lập dân tộc phải gắn với tự do của nhân dân.
                    </li>
                    <li>
                        Độc lập phải thiết thực, tức là phải gắn với cơm no, áo ấm và hạnh phúc của nhân dân.
                    </li>
                </ul>

                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem', color: '#4A4A4A', lineHeight: '1.6', textAlign: 'justify' }}>
                    Theo Hồ Chí Minh, độc lập dân tộc phải gắn với tự do của nhân dân. Ngoài ra, độc lập cũng phải gắn với cơm no, áo ấm và hạnh phúc của nhân dân.
                </p>
            </div>
        );
    }

    // Page 2 - với video
    return (
        <div style={{ animation: 'pageIn 0.6s ease-out', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.6rem', color: '#1A1A1A', marginBottom: '0.3rem', fontWeight: 'bold' }}>
                Phần II
            </h2>
            <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.8rem', color: '#7B2D3E', marginBottom: '0.75rem', fontStyle: 'italic' }}>
                Chánh Cương Vắn Tắt của Đảng (1930)
            </h3>

            <div style={{ flex: 1, display: 'flex', gap: '1.5rem' }}>
                {/* BÊN TRÁI: Video + Trích dẫn */}
                <div style={{ width: '55%', display: 'flex', flexDirection: 'column' }}>
                    {/* Video container */}
                    <div style={{
                        width: '100%',
                        height: '200px',
                        backgroundColor: '#1A1A1A',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
                        cursor: 'pointer',
                        position: 'relative',
                        marginBottom: '0.75rem'
                    }}>
                        {showVideo ? (
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/7iyvqkuFEE4?autoplay=1"
                                title="Chánh cương vắn tắt của Đảng"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            />
                        ) : (
                            <div
                                onClick={() => setShowVideo(true)}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    background: 'linear-gradient(135deg, #7B2D3E 0%, #5C2230 100%)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'white',
                                    transition: 'all 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #8B3D4E 0%, #6C3240 100%)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #7B2D3E 0%, #5C2230 100%)';
                                }}
                            >
                                {/* Play icon */}
                                <svg width="56" height="56" viewBox="0 0 24 24" fill="white" style={{ marginBottom: '0.5rem' }}>
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                                <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem' }}>
                                    Xem Video
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Trích dẫn bên dưới video */}
                    <div style={{
                        backgroundColor: 'rgba(123, 45, 62, 0.05)',
                        padding: '0.75rem',
                        borderRadius: '6px',
                        borderLeft: '3px solid #7B2D3E'
                    }}>
                        <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.75rem', color: '#4A4A4A', lineHeight: '1.5', fontStyle: 'italic', margin: 0 }}>
                            "Làm cho nước Nam được hoàn toàn độc lập... dân chúng được tự do... thủ tiêu hết các thứ quốc trái..."
                        </p>
                        <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.7rem', color: '#7B2D3E', marginTop: '0.5rem', marginBottom: 0, fontWeight: '600' }}>
                            — Chánh cương vắn tắt của Đảng
                        </p>
                    </div>
                </div>

                {/* BÊN PHẢI: Nội dung */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem', color: '#4A4A4A', lineHeight: '1.7', textAlign: 'justify', marginBottom: '1rem' }}>
                        Đây là quan niệm tiến bộ, toàn diện về độc lập dân tộc gắn liền với quyền và lợi ích thiết thực của nhân dân lao động.
                    </p>

                    <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem', color: '#4A4A4A', lineHeight: '1.7', textAlign: 'justify' }}>
                        Người đã đề ra những mục tiêu cụ thể: bỏ sưu thuế cho dân cày nghèo, thi hành luật ngày làm 8 giờ, thể hiện sự quan tâm sâu sắc đến đời sống nhân dân.
                    </p>
                </div>
            </div>
        </div>
    );
}
