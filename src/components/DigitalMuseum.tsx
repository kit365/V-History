import { useState } from 'react';
import { Info } from 'lucide-react';

interface Artifact {
    id: string;
    name: string;
    icon: string;
    description: string;
    story: string;
    year: string;
}

const artifacts: Artifact[] = [
    {
        id: 'sandals',
        name: 'Đôi Dép Cao Su',
        icon: '🩴',
        description: 'Biểu tượng của sự giản dị',
        story: 'Đôi dép cao su mà Bác thường xuyên sử dụng trong cuộc sống hàng ngày, thể hiện phong cách sống giản dị, gần gũi với nhân dân. Bác từng nói: "Tôi chỉ có một nguyện vọng, nguyện vọng cuối cùng, là toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hoà bình, thống nhất, độc lập, dân chủ và giàu mạnh".',
        year: '1960-1969'
    },
    {
        id: 'stick',
        name: 'Chiếc Gậy Tre',
        icon: '🦯',
        description: 'Người bạn đồng hành',
        story: 'Chiếc gậy tre đơn sơ luôn đồng hành cùng Bác trong những chuyến đi thăm đồng bào, thăm bộ đội. Tre Việt Nam - biểu tượng của sự kiên cường, bền bỉ, chính là hình ảnh mà Bác muốn gửi gắm đến thế hệ sau.',
        year: '1945-1969'
    },
    {
        id: 'typewriter',
        name: 'Máy Chữ Hermes',
        icon: '⌨️',
        description: 'Công cụ viết nên lịch sử',
        story: 'Chiếc máy chữ Hermes Baby của Thụy Sĩ mà Bác sử dụng để soạn thảo nhiều văn kiện quan trọng, trong đó có Tuyên ngôn Độc lập năm 1945. Mỗi phím đánh là một tiếng vang của lịch sử.',
        year: '1945'
    },
    {
        id: 'glasses',
        name: 'Cặp Kính Tròn',
        icon: '👓',
        description: 'Ánh mắt nhân ái',
        story: 'Cặp kính tròn giản dị luôn đi kèm với hình ảnh Bác Hồ hiền từ, mà ai cũng có thể nhận ra. Qua cặp kính này, Bác đã nhìn thấy tương lai tươi sáng của dân tộc.',
        year: '1950-1969'
    },
    {
        id: 'ao-ba-ba',
        name: 'Áo Bà Ba',
        icon: '👔',
        description: 'Trang phục của người dân',
        story: 'Bác thường mặc áo bà ba kaki màu nâu hoặc xanh - trang phục của người dân lao động Việt Nam. Đây là cách Bác thể hiện sự gắn bó máu thịt với nhân dân.',
        year: '1945-1969'
    },
    {
        id: 'teapot',
        name: 'Bộ Ấm Trà',
        icon: '🫖',
        description: 'Nơi giao lưu tư tưởng',
        story: 'Bộ ấm trà nơi Bác thường mời khách và các đồng chí cùng thưởng thức, bàn bạc về công việc cách mạng. Những tách trà giản dị nhưng chứa đựng những quyết định lịch sử.',
        year: '1954-1969'
    }
];

export function DigitalMuseum() {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section
            id="bao-tang-so"
            style={{
                padding: '100px 24px',
                background: 'linear-gradient(180deg, #FDFBF7 0%, #F5F0E8 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Background decorative elements */}
            <div style={{
                position: 'absolute',
                top: '15%',
                right: '8%',
                width: 300,
                height: 300,
                background: 'radial-gradient(circle, rgba(201, 162, 39, 0.06) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(60px)'
            }} />
            <div style={{
                position: 'absolute',
                bottom: '20%',
                left: '10%',
                width: 250,
                height: 250,
                background: 'radial-gradient(circle, rgba(123, 45, 62, 0.05) 0%, transparent 70%)',
                borderRadius: '50%',
                filter: 'blur(50px)'
            }} />

            <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 12,
                        marginBottom: 16
                    }}>
                        <div style={{ width: 50, height: 1, background: 'linear-gradient(to right, transparent, #C9A227)' }} />
                        <span style={{
                            fontSize: 11,
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            color: '#7B2D3E',
                            fontWeight: 600
                        }}>
                            Kỷ Vật Lịch Sử
                        </span>
                        <div style={{ width: 50, height: 1, background: 'linear-gradient(to left, transparent, #C9A227)' }} />
                    </div>

                    <h2 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                        color: '#1A1A1A',
                        marginBottom: 16,
                        fontWeight: 600,
                        lineHeight: 1.2
                    }}>
                        Bảo Tàng <span style={{ color: '#C9A227' }}>Hồ Chí Minh</span> Số
                    </h2>

                    <p style={{
                        fontFamily: "'Lora', Georgia, serif",
                        fontSize: 17,
                        color: '#4A4A4A',
                        maxWidth: 700,
                        margin: '0 auto',
                        lineHeight: 1.8
                    }}>
                        Khám phá những kỷ vật giản dị nhưng mang ý nghĩa lịch sử sâu sắc,
                        gắn liền với cuộc đời và sự nghiệp vĩ đại của Chủ tịch Hồ Chí Minh
                    </p>
                </div>

                {/* Artifacts Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 30,
                    marginTop: 50
                }}>
                    {artifacts.map((artifact) => (
                        <div
                            key={artifact.id}
                            onMouseEnter={() => setHoveredId(artifact.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            style={{
                                position: 'relative',
                                borderRadius: 20,
                                padding: 32,
                                background: hoveredId === artifact.id
                                    ? 'rgba(255, 255, 255, 0.9)'
                                    : 'rgba(255, 255, 255, 0.6)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(201, 162, 39, 0.2)',
                                boxShadow: hoveredId === artifact.id
                                    ? '0 20px 60px rgba(123, 45, 62, 0.15)'
                                    : '0 10px 30px rgba(0, 0, 0, 0.05)',
                                transform: hoveredId === artifact.id
                                    ? 'translateY(-10px) scale(1.02)'
                                    : 'translateY(0) scale(1)',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                cursor: 'pointer',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Icon container */}
                            <div style={{
                                fontSize: '4rem',
                                textAlign: 'center',
                                marginBottom: 20,
                                transform: hoveredId === artifact.id ? 'rotateY(360deg)' : 'rotateY(0deg)',
                                transition: 'transform 0.8s ease',
                                filter: hoveredId === artifact.id ? 'drop-shadow(0 4px 8px rgba(201, 162, 39, 0.3))' : 'none'
                            }}>
                                {artifact.icon}
                            </div>

                            {/* Year badge */}
                            <div style={{
                                position: 'absolute',
                                top: 20,
                                right: 20,
                                background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
                                color: 'white',
                                padding: '4px 12px',
                                borderRadius: 100,
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                letterSpacing: '0.05em'
                            }}>
                                {artifact.year}
                            </div>

                            {/* Name */}
                            <h3 style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                fontSize: '1.5rem',
                                color: '#1A1A1A',
                                marginBottom: 8,
                                fontWeight: 600,
                                textAlign: 'center'
                            }}>
                                {artifact.name}
                            </h3>

                            {/* Description */}
                            <p style={{
                                fontFamily: "'Lora', Georgia, serif",
                                fontSize: '0.9rem',
                                color: '#C9A227',
                                fontStyle: 'italic',
                                textAlign: 'center',
                                marginBottom: 16
                            }}>
                                {artifact.description}
                            </p>

                            {/* Story - shown on hover */}
                            <div style={{
                                maxHeight: hoveredId === artifact.id ? 300 : 0,
                                opacity: hoveredId === artifact.id ? 1 : 0,
                                overflow: 'hidden',
                                transition: 'all 0.4s ease',
                                marginTop: 16
                            }}>
                                <div style={{
                                    background: 'rgba(123, 45, 62, 0.05)',
                                    borderRadius: 12,
                                    padding: 16,
                                    borderLeft: '3px solid #C9A227'
                                }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 6,
                                        marginBottom: 8
                                    }}>
                                        <Info size={16} color="#7B2D3E" />
                                        <span style={{
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            color: '#7B2D3E',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.08em'
                                        }}>
                                            Câu Chuyện
                                        </span>
                                    </div>
                                    <p style={{
                                        fontFamily: "'Lora', Georgia, serif",
                                        fontSize: '0.85rem',
                                        lineHeight: 1.7,
                                        color: '#4A4A4A',
                                        margin: 0
                                    }}>
                                        {artifact.story}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom note */}
                <div style={{
                    marginTop: 60,
                    textAlign: 'center',
                    padding: '24px 32px',
                    background: 'linear-gradient(135deg, rgba(123, 45, 62, 0.05), rgba(201, 162, 39, 0.05))',
                    borderRadius: 16,
                    border: '1px solid rgba(201, 162, 39, 0.2)'
                }}>
                    <p style={{
                        fontFamily: "'Lora', Georgia, serif",
                        fontSize: '0.95rem',
                        color: '#4A4A4A',
                        fontStyle: 'italic',
                        lineHeight: 1.8,
                        margin: 0
                    }}>
                        "Những vật dụng giản dị này không chỉ là kỷ vật, mà là minh chứng sống động cho phong cách
                        sống trong sạch, giản dị và luôn gần gũi với nhân dân của Chủ tịch Hồ Chí Minh."
                    </p>
                </div>
            </div>
        </section>
    );
}
