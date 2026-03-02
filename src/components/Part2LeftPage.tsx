import { useState } from 'react';

export function Part2LeftPage() {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <div style={{
            animation: 'pageIn 0.6s ease-out',
            height: '100%',
            width: '100%',
            background: 'linear-gradient(135deg, #8B0000 0%, #6B0000 50%, #4A0000 100%)',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Họa tiết hoa văn tròn nền */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                border: '2px solid rgba(201, 162, 39, 0.15)',
                pointerEvents: 'none'
            }}>
                {/* Vòng trong */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '320px',
                    height: '320px',
                    borderRadius: '50%',
                    border: '1px solid rgba(201, 162, 39, 0.12)'
                }}></div>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '240px',
                    height: '240px',
                    borderRadius: '50%',
                    border: '1px solid rgba(201, 162, 39, 0.1)'
                }}></div>
            </div>

            {/* Video container */}
            <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 1,
                marginBottom: '20px'
            }}>
                <div style={{
                    width: '100%',
                    height: '320px',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                    cursor: 'pointer',
                    position: 'relative',
                    border: '2px solid rgba(201, 162, 39, 0.3)'
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
                                background: 'linear-gradient(135deg, rgba(139,0,0,0.8) 0%, rgba(74,0,0,0.9) 100%)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(159,20,20,0.8) 0%, rgba(94,20,20,0.9) 100%)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'linear-gradient(135deg, rgba(139,0,0,0.8) 0%, rgba(74,0,0,0.9) 100%)';
                            }}
                        >
                            {/* Play icon lớn */}
                            <div style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '12px',
                                border: '2px solid rgba(255,255,255,0.4)'
                            }}>
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <span style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: '#C9A227' }}>
                                Xem Video
                            </span>
                        </div>
                    )}
                </div>
            </div>

            {/* Trích dẫn */}
            <div style={{
                backgroundColor: 'rgba(253, 251, 247, 0.95)',
                padding: '16px 20px',
                borderRadius: '8px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                position: 'relative',
                zIndex: 1
            }}>
                <p style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.85rem',
                    color: '#4A4A4A',
                    lineHeight: '1.6',
                    fontStyle: 'italic',
                    margin: 0,
                    textAlign: 'justify'
                }}>
                    "Làm cho nước Nam được hoàn toàn độc lập... dân chúng được tự do... thủ tiêu hết các thứ quốc trái... thâu hết ruộng đất của đế quốc chủ nghĩa làm của công chia cho dân cày nghèo. Bỏ sưu thuế cho dân cày nghèo... thi hành luật ngày làm 8 giờ".
                </p>
                <p style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontSize: '0.8rem',
                    color: '#7B2D3E',
                    marginTop: '10px',
                    marginBottom: 0,
                    fontWeight: '600'
                }}>
                    Chánh cương vắn tắt của Đảng
                </p>
            </div>

            {/* Số trang */}
            <div style={{ position: 'absolute', bottom: '10px', left: '30px', fontFamily: "'Lora', Georgia, serif", fontSize: '0.9rem', color: '#D4C5A0' }}>4</div>
        </div>
    );
}
