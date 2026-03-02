import { Play, Volume2 } from 'lucide-react';
import { useState } from 'react';

export function DeclarationVideo() {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section
            id="tuyen-ngon"
            style={{
                padding: '100px 24px',
                background: 'linear-gradient(180deg, #2D1A1A 0%, #3D1620 40%, #FDFBF7 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background Pattern */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23C9A227\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                opacity: 0.5
            }} />

            {/* Decorative elements */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '5%',
                width: 300,
                height: 300,
                background: 'radial-gradient(circle, rgba(123, 45, 62, 0.2) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '10%',
                right: '5%',
                width: 400,
                height: 400,
                background: 'radial-gradient(circle, rgba(201, 162, 39, 0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(80px)'
            }} />

            <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 50 }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 12,
                        marginBottom: 20
                    }}>
                        <div style={{ width: 50, height: 1, background: 'linear-gradient(to right, transparent, #C9A227)' }} />
                        <span style={{
                            fontSize: 11,
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            color: '#C9A227',
                            fontWeight: 600
                        }}>
                            02/09/1945
                        </span>
                        <div style={{ width: 50, height: 1, background: 'linear-gradient(to left, transparent, #C9A227)' }} />
                    </div>

                    <h2 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        color: 'white',
                        marginBottom: 16,
                        fontWeight: 400,
                        lineHeight: 1.2
                    }}>
                        Tuyên Ngôn <span style={{ color: '#C9A227' }}>Độc Lập</span>
                    </h2>

                    <p style={{
                        fontFamily: "'Lora', Georgia, serif",
                        fontSize: 17,
                        color: 'rgba(255,255,255,0.7)',
                        maxWidth: 700,
                        margin: '0 auto',
                        lineHeight: 1.7
                    }}>
                        Khoảnh khắc lịch sử khi Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập
                        tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa
                    </p>
                </div>

                {/* Video Container */}
                <div style={{
                    position: 'relative',
                    maxWidth: 900,
                    margin: '0 auto'
                }}>
                    {/* Video Frame with decorative border */}
                    <div style={{
                        position: 'relative',
                        borderRadius: 20,
                        overflow: 'hidden',
                        boxShadow: '0 30px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(201, 162, 39, 0.3)',
                        background: '#000'
                    }}>
                        {/* Decorative corners */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: 60,
                            height: 60,
                            borderTop: '3px solid #C9A227',
                            borderLeft: '3px solid #C9A227',
                            borderTopLeftRadius: 20,
                            zIndex: 10,
                            pointerEvents: 'none'
                        }} />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: 60,
                            height: 60,
                            borderTop: '3px solid #C9A227',
                            borderRight: '3px solid #C9A227',
                            borderTopRightRadius: 20,
                            zIndex: 10,
                            pointerEvents: 'none'
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: 60,
                            height: 60,
                            borderBottom: '3px solid #C9A227',
                            borderLeft: '3px solid #C9A227',
                            borderBottomLeftRadius: 20,
                            zIndex: 10,
                            pointerEvents: 'none'
                        }} />
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            right: 0,
                            width: 60,
                            height: 60,
                            borderBottom: '3px solid #C9A227',
                            borderRight: '3px solid #C9A227',
                            borderBottomRightRadius: 20,
                            zIndex: 10,
                            pointerEvents: 'none'
                        }} />

                        {/* Video Embed */}
                        <div style={{
                            position: 'relative',
                            paddingBottom: '56.25%',
                            height: 0
                        }}>
                            {!isPlaying ? (
                                // Thumbnail with play button
                                <div
                                    onClick={() => setIsPlaying(true)}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    {/* YouTube thumbnail */}
                                    <img
                                        src="https://img.youtube.com/vi/xRKUB3fUTJM/maxresdefault.jpg"
                                        alt="Bác Hồ đọc Tuyên ngôn Độc lập"
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                        onError={(e) => {
                                            // Fallback to hqdefault if maxres not available
                                            e.currentTarget.src = "https://img.youtube.com/vi/xRKUB3fUTJM/hqdefault.jpg";
                                        }}
                                    />
                                    {/* Overlay */}
                                    <div style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%)'
                                    }} />

                                    {/* Play button */}
                                    <div style={{
                                        position: 'relative',
                                        zIndex: 5,
                                        width: 90,
                                        height: 90,
                                        background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 10px 40px rgba(123, 45, 62, 0.5)',
                                        transition: 'all 0.3s ease'
                                    }}>
                                        <Play size={36} color="#C9A227" fill="#C9A227" style={{ marginLeft: 4 }} />
                                    </div>

                                    <p style={{
                                        position: 'relative',
                                        zIndex: 5,
                                        marginTop: 20,
                                        color: 'white',
                                        fontSize: 15,
                                        fontWeight: 500,
                                        textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                                    }}>
                                        Nhấn để xem video
                                    </p>
                                </div>
                            ) : (
                                // Actual YouTube iframe
                                <iframe
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 'none'
                                    }}
                                    src="https://www.youtube.com/embed/xRKUB3fUTJM?autoplay=1&start=26"
                                    title="Bác Hồ đọc Tuyên ngôn Độc lập"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            )}
                        </div>
                    </div>

                    {/* VTV24 Badge */}
                    <div style={{
                        position: 'absolute',
                        top: -12,
                        right: 30,
                        background: 'linear-gradient(135deg, #FF0000, #CC0000)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: 8,
                        fontSize: 12,
                        fontWeight: 700,
                        boxShadow: '0 4px 15px rgba(255,0,0,0.3)',
                        zIndex: 20
                    }}>
                        VTV24
                    </div>
                </div>

                {/* Quote below video */}
                <div style={{
                    maxWidth: 800,
                    margin: '50px auto 0',
                    textAlign: 'center'
                }}>
                    <div style={{
                        background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
                        borderRadius: 20,
                        padding: '32px 36px',
                        boxShadow: '0 15px 40px rgba(123, 45, 62, 0.3)',
                        border: '1px solid rgba(201, 162, 39, 0.3)'
                    }}>
                        <Volume2 size={28} color="#C9A227" style={{ marginBottom: 20 }} />
                        <p style={{
                            fontFamily: "'Lora', Georgia, serif",
                            fontSize: 19,
                            color: 'white',
                            fontStyle: 'italic',
                            lineHeight: 1.8,
                            marginBottom: 20,
                            textShadow: '0 2px 4px rgba(0,0,0,0.2)'
                        }}>
                            "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập.
                            Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải
                            để giữ vững quyền tự do, độc lập ấy."
                        </p>
                        <div style={{
                            width: 60,
                            height: 2,
                            background: 'linear-gradient(90deg, transparent, #C9A227, transparent)',
                            margin: '0 auto 16px'
                        }} />
                        <p style={{
                            color: '#C9A227',
                            fontSize: 14,
                            fontWeight: 600,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase'
                        }}>
                            Trích Tuyên ngôn Độc lập, 02/09/1945
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
