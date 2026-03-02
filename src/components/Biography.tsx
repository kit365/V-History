import { useState } from 'react';
import { X, Calendar, MapPin, Star, Award, Heart, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { DigitalMuseum } from './DigitalMuseum';

interface LifeEvent {
    year: string;
    title: string;
    description: string;
    location?: string;
    highlight?: boolean;
}

const lifeEvents: LifeEvent[] = [
    {
        year: "1890",
        title: "Chào đời",
        description: "Nguyễn Sinh Cung (tên khai sinh của Bác) ra đời ngày 19/5/1890 tại làng Hoàng Trù, xã Kim Liên, huyện Nam Đàn, tỉnh Nghệ An, trong một gia đình nhà nho yêu nước.",
        location: "Nghệ An, Việt Nam",
        highlight: true
    },
    {
        year: "1895",
        title: "Tuổi thơ ở Huế",
        description: "Theo cha vào Huế, bắt đầu cuộc sống và học tập trong cố đô. Đây là thời kỳ hình thành nhân cách và tình yêu đất nước.",
        location: "Huế, Việt Nam"
    },
    {
        year: "1911",
        title: "Ra đi tìm đường cứu nước",
        description: "Ngày 5/6/1911, từ bến cảng Nhà Rồng, Người lên tàu Amiral Latouche-Tréville với tên Văn Ba, bắt đầu hành trình tìm đường cứu nước đầy gian nan.",
        location: "Sài Gòn, Việt Nam",
        highlight: true
    },
    {
        year: "1919",
        title: "Bản yêu sách của nhân dân An Nam",
        description: "Tại Hội nghị Versailles, Nguyễn Ái Quốc gửi bản yêu sách 8 điểm đòi quyền tự do, dân chủ cho nhân dân Việt Nam, gây tiếng vang lớn.",
        location: "Paris, Pháp"
    },
    {
        year: "1920",
        title: "Tham gia sáng lập Đảng Cộng sản Pháp",
        description: "Tại Đại hội Tours, Nguyễn Ái Quốc bỏ phiếu tán thành gia nhập Quốc tế Cộng sản, trở thành người cộng sản Việt Nam đầu tiên.",
        location: "Tours, Pháp",
        highlight: true
    },
    {
        year: "1930",
        title: "Sáng lập Đảng Cộng sản Việt Nam",
        description: "Ngày 3/2/1930, tại Cửu Long (Hương Cảng), Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất thành lập Đảng Cộng sản Việt Nam.",
        location: "Hương Cảng, Trung Quốc",
        highlight: true
    },
    {
        year: "1941",
        title: "Về nước trực tiếp lãnh đạo cách mạng",
        description: "Sau 30 năm bôn ba hải ngoại, Người về nước, sống và làm việc tại hang Pác Bó, trực tiếp lãnh đạo phong trào cách mạng.",
        location: "Cao Bằng, Việt Nam",
        highlight: true
    },
    {
        year: "1945",
        title: "Đọc Tuyên ngôn Độc lập",
        description: "Ngày 2/9/1945, tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.",
        location: "Hà Nội, Việt Nam",
        highlight: true
    },
    {
        year: "1946",
        title: "Lời kêu gọi toàn quốc kháng chiến",
        description: "Ngày 19/12/1946, Chủ tịch Hồ Chí Minh ra Lời kêu gọi toàn quốc kháng chiến, mở đầu cuộc kháng chiến chống thực dân Pháp.",
        location: "Hà Nội, Việt Nam"
    },
    {
        year: "1954",
        title: "Chiến thắng Điện Biên Phủ",
        description: "Dưới sự lãnh đạo của Đảng và Bác Hồ, quân dân ta làm nên chiến thắng Điện Biên Phủ 'lừng lẫy năm châu, chấn động địa cầu'.",
        location: "Điện Biên, Việt Nam",
        highlight: true
    },
    {
        year: "1969",
        title: "Vĩnh biệt",
        description: "Ngày 2/9/1969, Chủ tịch Hồ Chí Minh từ trần tại Hà Nội, để lại cho dân tộc bản Di chúc thiêng liêng và sự nghiệp cách mạng vĩ đại.",
        location: "Hà Nội, Việt Nam",
        highlight: true
    }
];

const personalInfo = [
    { icon: Calendar, label: "Ngày sinh", value: "19/05/1890" },
    { icon: MapPin, label: "Quê quán", value: "Kim Liên, Nam Đàn, Nghệ An" },
    { icon: Star, label: "Tên khai sinh", value: "Nguyễn Sinh Cung" },
    { icon: Award, label: "Bí danh nổi tiếng", value: "Nguyễn Ái Quốc" }
];

interface AliasData {
    name: string;
    period: string;
    purpose: string;
    context: string;
}

const aliasesData: AliasData[] = [
    {
        name: "Nguyễn Sinh Cung",
        period: "1890 - 1901",
        purpose: "Tên khai sinh",
        context: "Tên do cha mẹ đặt khi sinh ra tại làng Hoàng Trù, Nghệ An. Đây là tên gốc trong gia đình nhà nho yêu nước."
    },
    {
        name: "Nguyễn Tất Thành",
        period: "1901 - 1911",
        purpose: "Tên học tập",
        context: "Tên được đổi khi theo cha vào Huế học tập. 'Tất Thành' mang ý nghĩa 'nhất định sẽ thành công' - thể hiện khát vọng lớn lao."
    },
    {
        name: "Văn Ba",
        period: "1911 - 1913",
        purpose: "Tên đi làm thuê",
        context: "Tên dùng khi làm phụ bếp trên tàu Amiral Latouche-Tréville, bắt đầu hành trình tìm đường cứu nước từ bến cảng Nhà Rồng."
    },
    {
        name: "Nguyễn Ái Quốc",
        period: "1919 - 1941",
        purpose: "Bí danh hoạt động cách mạng tại Pháp",
        context: "'Người yêu nước' - tên nổi tiếng khi gửi bản yêu sách 8 điểm tại Hội nghị Versailles 1919 và hoạt động tại Đảng Cộng sản Pháp."
    },
    {
        name: "Lý Thụy",
        period: "1924 - 1927",
        purpose: "Hoạt động tại Quảng Châu",
        context: "Bí danh khi hoạt động tại Trung Quốc, tham gia huấn luyện cán bộ cách mạng Việt Nam và thành lập Hội Việt Nam Cách mạng Thanh niên."
    },
    {
        name: "Vương",
        period: "1928 - 1929",
        purpose: "Hoạt động bí mật tại Thái Lan",
        context: "Tên dùng khi truyền bá chủ nghĩa Mác-Lênin trong cộng đồng Việt kiều tại Thái Lan (Xiêm)."
    },
    {
        name: "Lin",
        period: "1930",
        purpose: "Hoạt động tại Hồng Kông",
        context: "Bí danh ngắn gọn khi chủ trì Hội nghị hợp nhất thành lập Đảng Cộng sản Việt Nam tại Cửu Long, Hương Cảng."
    },
    {
        name: "Hồ Quang",
        period: "1938 - 1940",
        purpose: "Hoạt động tại Trung Quốc",
        context: "Tên dùng khi làm việc với Bát lộ quân Trung Quốc và chuẩn bị về nước lãnh đạo cách mạng."
    },
    {
        name: "Hồ Chí Minh",
        period: "1941 - 1969",
        purpose: "Tên chính thức của Chủ tịch nước",
        context: "'Người mang ánh sáng' - tên chính thức từ khi về nước lãnh đạo cách mạng, trở thành Chủ tịch nước Việt Nam Dân chủ Cộng hòa."
    }
];

export function Biography({ onClose }: { onClose: () => void }) {
    const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
    const [selectedAlias, setSelectedAlias] = useState<AliasData | null>(null);
    const [activePeriod, setActivePeriod] = useState(0);

    const periods = [
        { label: "1890 - 1911: Thời niên thiếu", start: 1890, end: 1911 },
        { label: "1911 - 1941: Tìm đường cứu nước", start: 1911, end: 1941 },
        { label: "1941 - 1969: Lãnh đạo Cách mạng", start: 1941, end: 1969 }
    ];

    const filteredEvents = lifeEvents.filter(event => {
        const year = parseInt(event.year);
        return year >= periods[activePeriod].start && year <= periods[activePeriod].end;
    });

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 10000,
            background: '#FDFBF7',
            overflowY: 'auto'
        }}>
            {/* Header */}
            <header style={{
                position: 'sticky',
                top: 0,
                background: 'rgba(253, 251, 247, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                zIndex: 100
            }}>
                <div style={{
                    maxWidth: 1200,
                    margin: '0 auto',
                    padding: '16px 24px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <BookOpen size={24} color="#7B2D3E" />
                        <span style={{
                            fontSize: 11,
                            letterSpacing: '0.15em',
                            textTransform: 'uppercase',
                            color: '#7B2D3E',
                            fontWeight: 600
                        }}>
                            Tiểu Sử Bác Hồ
                        </span>
                    </div>
                    <button
                        onClick={onClose}
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: '50%',
                            border: 'none',
                            background: 'rgba(123, 45, 62, 0.1)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s'
                        }}
                    >
                        <X size={20} color="#7B2D3E" />
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <section style={{
                background: 'linear-gradient(135deg, #7B2D3E 0%, #5C2230 50%, #3D1620 100%)',
                padding: '80px 24px',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative elements */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.03\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
                    opacity: 0.5
                }} />

                <div style={{ maxWidth: 1000, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center' }}>
                        <span style={{
                            display: 'inline-block',
                            fontSize: 11,
                            letterSpacing: '0.3em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.7)',
                            marginBottom: 16,
                            fontWeight: 500
                        }}>
                            1890 — 1969
                        </span>
                        <h1 style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                            color: 'white',
                            marginBottom: 24,
                            fontWeight: 400,
                            lineHeight: 1.1
                        }}>
                            Chủ tịch <br />
                            <span style={{ color: '#C9A227' }}>Hồ Chí Minh</span>
                        </h1>
                        <p style={{
                            fontFamily: "'Lora', Georgia, serif",
                            fontSize: 18,
                            color: 'rgba(255,255,255,0.85)',
                            maxWidth: 700,
                            margin: '0 auto',
                            lineHeight: 1.7,
                            fontStyle: 'italic'
                        }}>
                            "Tôi chỉ có một sự ham muốn, ham muốn tột bậc, là làm sao cho nước ta được hoàn toàn độc lập,
                            dân ta được hoàn toàn tự do, đồng bào ai cũng có cơm ăn áo mặc, ai cũng được học hành."
                        </p>
                    </div>
                </div>
            </section>

            {/* Personal Info Cards */}
            <section style={{ padding: '60px 24px', background: '#FFFFFF', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, height: '100%',
                    background: 'url("https://www.transparenttextures.com/patterns/white-diamond-dark.png")',
                    opacity: 0.05,
                    pointerEvents: 'none'
                }} />
                <div style={{ maxWidth: 1000, margin: '0 auto' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: 20
                    }}>
                        {personalInfo.map((info, idx) => (
                            <div key={idx} style={{
                                background: 'white',
                                borderRadius: 16,
                                padding: 24,
                                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
                                border: '1px solid rgba(0,0,0,0.05)',
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 16
                            }}>
                                <div style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 12,
                                    background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    <info.icon size={22} color="#C9A227" />
                                </div>
                                <div>
                                    <p style={{
                                        fontSize: 11,
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase',
                                        color: '#7B2D3E',
                                        marginBottom: 4,
                                        fontWeight: 600
                                    }}>
                                        {info.label}
                                    </p>
                                    <p style={{
                                        fontSize: 16,
                                        color: '#1A1A1A',
                                        fontWeight: 500,
                                        fontFamily: "'Lora', Georgia, serif"
                                    }}>
                                        {info.value}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Aliases Section */}
            <section style={{ padding: '60px 24px 80px', background: '#FAF6F0', borderTop: '1px solid #E5E0D5', borderBottom: '1px solid #E5E0D5' }}>
                <div style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
                    <h3 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: 28,
                        color: '#1A1A1A',
                        marginBottom: 8
                    }}>
                        Các tên gọi & bí danh
                    </h3>
                    <p style={{
                        fontSize: 14,
                        color: '#6B6B6B',
                        marginBottom: 8
                    }}>
                        Trong cuộc đời hoạt động cách mạng, Bác đã sử dụng nhiều tên gọi khác nhau
                    </p>
                    <p style={{
                        fontSize: 12,
                        color: '#C9A227',
                        marginBottom: 24,
                        fontWeight: 500
                    }}>
                        👆 Nhấn vào mỗi tên để xem thông tin chi tiết
                    </p>
                    <div style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 16,
                        justifyContent: 'center'
                    }}>
                        {aliasesData.map((alias, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedAlias(alias)}
                                style={{
                                    padding: '12px 24px',
                                    background: idx === aliasesData.length - 1 ? 'linear-gradient(135deg, #7B2D3E, #5C2230)' : '#FFFFFF',
                                    color: idx === aliasesData.length - 1 ? '#C9A227' : '#2D2D2D',
                                    borderRadius: 12,
                                    fontSize: 15,
                                    fontWeight: idx === aliasesData.length - 1 ? 700 : 600,
                                    boxShadow: '0 4px 0px rgba(0,0,0,0.05), 0 8px 15px rgba(0,0,0,0.05)',
                                    fontFamily: "'Playfair Display', serif",
                                    border: '1px solid #D4C5A9',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 7px 0px rgba(0,0,0,0.08), 0 12px 20px rgba(0,0,0,0.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 4px 0px rgba(0,0,0,0.05), 0 8px 15px rgba(0,0,0,0.05)';
                                }}
                            >
                                {alias.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Alias Popup Modal */}
            {selectedAlias && (
                <div
                    onClick={() => setSelectedAlias(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        background: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10001,
                        padding: 20,
                        animation: 'fadeIn 0.3s ease'
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            background: 'white',
                            borderRadius: 24,
                            maxWidth: 480,
                            width: '100%',
                            overflow: 'hidden',
                            boxShadow: '0 25px 50px rgba(0,0,0,0.3)',
                            animation: 'slideUp 0.3s ease'
                        }}
                    >
                        {/* Modal Header */}
                        <div style={{
                            background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
                            padding: '24px 28px',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: -20,
                                right: -20,
                                width: 100,
                                height: 100,
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '50%'
                            }} />
                            <p style={{
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: 12,
                                letterSpacing: '0.15em',
                                textTransform: 'uppercase',
                                marginBottom: 8,
                                fontWeight: 600
                            }}>
                                {selectedAlias.period}
                            </p>
                            <h4 style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                fontSize: 28,
                                color: 'white',
                                margin: 0,
                                fontWeight: 600
                            }}>
                                {selectedAlias.name}
                            </h4>
                        </div>

                        {/* Modal Body */}
                        <div style={{ padding: 28 }}>
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                marginBottom: 16
                            }}>
                                <span style={{
                                    padding: '6px 14px',
                                    background: 'linear-gradient(135deg, #C9A227, #B8941F)',
                                    color: 'white',
                                    borderRadius: 100,
                                    fontSize: 12,
                                    fontWeight: 600
                                }}>
                                    {selectedAlias.purpose}
                                </span>
                            </div>

                            <p style={{
                                fontFamily: "'Lora', Georgia, serif",
                                fontSize: 16,
                                color: '#4A4A4A',
                                lineHeight: 1.7,
                                margin: 0
                            }}>
                                {selectedAlias.context}
                            </p>
                        </div>

                        {/* Modal Footer */}
                        <div style={{
                            padding: '16px 28px 24px',
                            borderTop: '1px solid #f0f0f0',
                            display: 'flex',
                            justifyContent: 'flex-end'
                        }}>
                            <button
                                onClick={() => setSelectedAlias(null)}
                                style={{
                                    padding: '10px 24px',
                                    background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 100,
                                    fontSize: 14,
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                }}
                            >
                                Đóng
                            </button>
                        </div>
                    </div>

                    <style>{`
                        @keyframes fadeIn {
                            from { opacity: 0; }
                            to { opacity: 1; }
                        }
                        @keyframes slideUp {
                            from { opacity: 0; transform: translateY(20px) scale(0.95); }
                            to { opacity: 1; transform: translateY(0) scale(1); }
                        }
                    `}</style>
                </div>
            )}

            {/* Timeline Section - Manuscript Style */}
            <section style={{
                padding: '120px 24px',
                background: '#EBE5D9',
                position: 'relative',
                boxShadow: 'inset 0 20px 40px rgba(0,0,0,0.05), inset 0 -20px 40px rgba(0,0,0,0.05)'
            }}>
                {/* Decorative Divider Top */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, height: 40,
                    background: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'40\' viewBox=\'0 0 1200 40\' preserveAspectRatio=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 0C300 30 900 30 1200 0V40H0V0Z\' fill=\'%23FAF6F0\'/%3E%3C/svg%3E")',
                    transform: 'rotate(180deg)'
                }} />
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&family=Great+Vibes&display=swap');
                    
                    .manuscript-card {
                        background: #FFFFFF;
                        border: 1px solid #D4C5A9;
                        position: relative;
                        padding: 35px;
                        box-shadow: 4px 4px 0px #D4C5A9, 0 15px 35px rgba(0,0,0,0.08);
                        border-radius: 4px;
                        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    }
                    .manuscript-card::before {
                        content: '';
                        position: absolute;
                        top: 0; left: 0; width: 100%; height: 100%;
                        background-image: url("https://www.transparenttextures.com/patterns/parchment.png");
                        opacity: 0.2;
                        pointer-events: none;
                    }
                    .manuscript-card:hover {
                        transform: translateY(-5px) rotate(0.5deg);
                        box-shadow: 2px 2px 0px #7B2D3E, 20px 20px 50px rgba(123, 45, 62, 0.1);
                        border-color: #7B2D3E;
                    }
                    .year-handwritten {
                        font-family: 'Dancing Script', cursive;
                        font-size: 2.8rem;
                        color: #7B2D3E;
                        line-height: 1;
                    }
                    .timeline-line-manuscript {
                        position: absolute;
                        left: 40px;
                        top: 0;
                        bottom: 0;
                        width: 1px;
                        background: dashed #d4c5a9;
                        border-left: 2px dashed rgba(123, 45, 62, 0.2);
                    }
                    .sidebar-nav-item {
                        padding: 14px 22px;
                        margin-bottom: 12px;
                        cursor: pointer;
                        border-left: 3px solid transparent;
                        transition: all 0.3s;
                        font-family: 'Playfair Display', serif;
                        font-size: 0.95rem;
                        color: #555;
                        background: rgba(255,255,255,0.4);
                        border-radius: 0 8px 8px 0;
                    }
                    .sidebar-nav-item.active {
                        border-left-color: #7B2D3E;
                        color: #7B2D3E;
                        background: rgba(123, 45, 62, 0.05);
                        font-weight: 700;
                    }
                `}</style>

                <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                    {/* Header */}
                    <div style={{ textAlign: 'left', marginBottom: 80, borderBottom: '1px solid #d4c5a9', paddingBottom: 30 }}>
                        <h2 style={{
                            fontFamily: "'Playfair Display', serif",
                            fontSize: '3.5rem',
                            color: '#1A1A1A',
                            margin: 0
                        }}>
                            Biên Niên Sử
                        </h2>
                        <p style={{
                            fontFamily: "'Great Vibes', cursive",
                            fontSize: '1.8rem',
                            color: '#7B2D3E',
                            marginTop: 10
                        }}>
                            Hành trình phụng sự Tổ quốc
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: 60 }}>
                        {/* Left Sidebar Nav */}
                        <div style={{ position: 'sticky', top: 120, height: 'fit-content' }}>
                            {periods.map((p, i) => (
                                <div
                                    key={i}
                                    className={`sidebar-nav-item ${activePeriod === i ? 'active' : ''}`}
                                    onClick={() => {
                                        setActivePeriod(i);
                                        setExpandedEvent(null);
                                    }}
                                >
                                    {p.label}
                                </div>
                            ))}

                            <div style={{ marginTop: 40, padding: 20, background: '#fffcf5', border: '1px solid #d4c5a9', borderRadius: 4 }}>
                                <p style={{ fontSize: '0.8rem', fontStyle: 'italic', color: '#888', margin: 0 }}>
                                    "Tôi hiến cả đời tôi cho dân tộc tôi."
                                </p>
                            </div>
                        </div>

                        {/* Right Timeline Content */}
                        <div style={{ position: 'relative', paddingLeft: 80 }}>
                            <div className="timeline-line-manuscript"></div>

                            {filteredEvents.map((event, idx) => {
                                const realIdx = lifeEvents.indexOf(event);
                                const isExpanded = expandedEvent === realIdx;
                                return (
                                    <div
                                        key={idx}
                                        style={{ marginBottom: 60, position: 'relative' }}
                                    >
                                        {/* Dot marker */}
                                        <div style={{
                                            position: 'absolute',
                                            left: -49,
                                            top: 20,
                                            width: 18,
                                            height: 18,
                                            borderRadius: '50%',
                                            background: '#fffcf5',
                                            border: '3px solid #7B2D3E',
                                            zIndex: 2
                                        }} />

                                        <div
                                            className="manuscript-card"
                                            onClick={() => setExpandedEvent(isExpanded ? null : realIdx)}
                                            style={{ cursor: 'pointer' }}
                                        >
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                                                <div className="year-handwritten">{event.year}</div>
                                                {event.highlight && (
                                                    <div style={{ background: '#7B2D3E', padding: '4px 12px', borderRadius: 100, color: '#C9A227', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase' }}>
                                                        Mốc Son Chói Lọi
                                                    </div>
                                                )}
                                            </div>

                                            <h3 style={{
                                                fontFamily: "'Playfair Display', serif",
                                                fontSize: '1.6rem',
                                                color: '#1A1A1A',
                                                marginBottom: 15,
                                                borderBottom: '1px solid rgba(212, 197, 169, 0.5)',
                                                paddingBottom: 10
                                            }}>
                                                {event.title}
                                            </h3>

                                            <div style={{
                                                maxHeight: isExpanded ? 1000 : 80,
                                                overflow: 'hidden',
                                                transition: 'all 0.5s ease',
                                                position: 'relative'
                                            }}>
                                                <p style={{
                                                    fontFamily: "'Lora', serif",
                                                    fontSize: '1.1rem',
                                                    color: '#2D2D2D',
                                                    lineHeight: 1.8,
                                                    textAlign: 'justify'
                                                }}>
                                                    {event.description}
                                                </p>

                                                {event.location && (
                                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 20, color: '#7B2D3E', fontWeight: 600, fontSize: '0.9rem' }}>
                                                        <MapPin size={16} />
                                                        {event.location}
                                                    </div>
                                                )}

                                                {!isExpanded && (
                                                    <div style={{
                                                        position: 'absolute',
                                                        bottom: 0, left: 0, right: 0, height: 40,
                                                        background: 'linear-gradient(to top, #fffcf5, transparent)'
                                                    }} />
                                                )}
                                            </div>

                                            <div style={{ textAlign: 'right', marginTop: 15 }}>
                                                <span style={{ fontSize: '0.8rem', color: '#7B2D3E', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                                    {isExpanded ? 'Thu gọn -' : 'Xem chi tiết +'}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* Decorative Divider bottom */}
            <div style={{
                height: 60,
                background: '#FFFFFF',
                backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'60\' viewBox=\'0 0 1200 60\' preserveAspectRatio=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 60C300 0 900 0 1200 60V0H0V60Z\' fill=\'%23EBE5D9\'/%3E%3C/svg%3E")',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                zIndex: 2,
                marginTop: -1
            }}>
                <div style={{ width: 100, height: 1, background: '#D4C5A9' }} />
                <Star size={16} color="#7B2D3E" style={{ margin: '0 20px' }} />
                <div style={{ width: 100, height: 1, background: '#D4C5A9' }} />
            </div>


            {/* Digital Museum Section */}
            < DigitalMuseum />


            {/* Video Section */}
            <section style={{ padding: '100px 24px', background: '#FFFFFF' }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: 50 }}>
                        <span style={{
                            display: 'inline-block',
                            fontSize: 11,
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            color: '#7B2D3E',
                            marginBottom: 12,
                            fontWeight: 600
                        }}>
                            Tư liệu video
                        </span>
                        <h2 style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            color: '#1A1A1A',
                            marginBottom: 16
                        }}>
                            Video về Bác Hồ
                        </h2>
                        <p style={{
                            fontSize: 15,
                            color: '#6B6B6B',
                            maxWidth: 600,
                            margin: '0 auto'
                        }}>
                            Xem các video tư liệu quý giá về cuộc đời và sự nghiệp cách mạng của Chủ tịch Hồ Chí Minh
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: 24
                    }}>
                        {/* Video 1 */}
                        <div style={{
                            background: 'white',
                            borderRadius: 20,
                            overflow: 'hidden',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
                        }}>
                            <div style={{
                                position: 'relative',
                                paddingBottom: '56.25%',
                                height: 0,
                                overflow: 'hidden'
                            }}>
                                <iframe
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 'none'
                                    }}
                                    src="https://www.youtube.com/embed/-234M2tlpKQ"
                                    title="Chủ tịch Hồ Chí Minh - Vị lãnh tụ thiên tài"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            <div style={{ padding: '20px 24px' }}>
                                <div style={{
                                    display: 'inline-block',
                                    background: 'linear-gradient(135deg, #FF0000, #CC0000)',
                                    color: 'white',
                                    fontSize: 10,
                                    padding: '4px 10px',
                                    borderRadius: 4,
                                    marginBottom: 10,
                                    fontWeight: 600
                                }}>
                                    VTV24
                                </div>
                                <h4 style={{
                                    fontFamily: "'Lora', Georgia, serif",
                                    fontSize: 16,
                                    color: '#1A1A1A',
                                    marginBottom: 8,
                                    fontWeight: 600
                                }}>
                                    Vị lãnh tụ thiên tài của Cách mạng Việt Nam
                                </h4>
                                <p style={{
                                    fontSize: 13,
                                    color: '#6B6B6B',
                                    lineHeight: 1.5
                                }}>
                                    Chân dung Chủ tịch Hồ Chí Minh - người anh hùng giải phóng dân tộc, danh nhân văn hóa thế giới
                                </p>
                            </div>
                        </div>

                        {/* Video 2 */}
                        <div style={{
                            background: 'white',
                            borderRadius: 20,
                            overflow: 'hidden',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
                        }}>
                            <div style={{
                                position: 'relative',
                                paddingBottom: '56.25%',
                                height: 0,
                                overflow: 'hidden'
                            }}>
                                <iframe
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 'none'
                                    }}
                                    src="https://www.youtube.com/embed/58HGVK6j-80"
                                    title="Hành trình tìm đường cứu nước"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            <div style={{ padding: '20px 24px' }}>
                                <h4 style={{
                                    fontFamily: "'Lora', Georgia, serif",
                                    fontSize: 16,
                                    color: '#1A1A1A',
                                    marginBottom: 8,
                                    fontWeight: 600
                                }}>
                                    Hành trình tìm đường cứu nước
                                </h4>
                                <p style={{
                                    fontSize: 13,
                                    color: '#6B6B6B',
                                    lineHeight: 1.5
                                }}>
                                    30 năm bôn ba từ bến Nhà Rồng đến với chủ nghĩa Mác-Lênin
                                </p>
                            </div>
                        </div>

                        {/* Video 3 */}
                        <div style={{
                            background: 'white',
                            borderRadius: 20,
                            overflow: 'hidden',
                            boxShadow: '0 8px 30px rgba(0,0,0,0.08)'
                        }}>
                            <div style={{
                                position: 'relative',
                                paddingBottom: '56.25%',
                                height: 0,
                                overflow: 'hidden'
                            }}>
                                <iframe
                                    style={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        border: 'none'
                                    }}
                                    src="https://www.youtube.com/embed/cxKnRdHQIm4"
                                    title="Tiểu sử Chủ tịch Hồ Chí Minh"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                            <div style={{ padding: '20px 24px' }}>
                                <h4 style={{
                                    fontFamily: "'Lora', Georgia, serif",
                                    fontSize: 16,
                                    color: '#1A1A1A',
                                    marginBottom: 8,
                                    fontWeight: 600
                                }}>
                                    Tiểu sử Chủ tịch Hồ Chí Minh
                                </h4>
                                <p style={{
                                    fontSize: 13,
                                    color: '#6B6B6B',
                                    lineHeight: 1.5
                                }}>
                                    Cuộc đời từ thuở thiếu thời đến khi trở thành vị lãnh tụ vĩ đại của dân tộc
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* More videos link */}
                    <div style={{ textAlign: 'center', marginTop: 40 }}>
                        <a
                            href="https://www.youtube.com/results?search_query=ti%E1%BB%83u+s%E1%BB%AD+H%E1%BB%93+Ch%C3%AD+Minh"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '14px 28px',
                                background: 'linear-gradient(135deg, #FF0000, #CC0000)',
                                color: 'white',
                                borderRadius: 100,
                                fontSize: 14,
                                fontWeight: 600,
                                textDecoration: 'none',
                                boxShadow: '0 4px 15px rgba(255,0,0,0.3)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            Xem thêm video trên YouTube
                        </a>
                    </div>
                </div>
            </section >

            {/* Legacy Section */}
            < section style={{
                padding: '80px 24px',
                background: 'linear-gradient(135deg, #7B2D3E 0%, #5C2230 100%)',
                position: 'relative'
            }}>
                <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
                    <Heart size={48} color="#C9A227" style={{ marginBottom: 24 }} />
                    <h2 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        color: 'white',
                        marginBottom: 24,
                        lineHeight: 1.3
                    }}>
                        Di sản tinh thần bất diệt
                    </h2>
                    <p style={{
                        fontFamily: "'Lora', Georgia, serif",
                        fontSize: 17,
                        color: 'rgba(255,255,255,0.9)',
                        lineHeight: 1.8,
                        marginBottom: 32
                    }}>
                        Chủ tịch Hồ Chí Minh đã để lại cho dân tộc Việt Nam một di sản tinh thần vô giá:
                        Tư tưởng về độc lập dân tộc gắn liền với chủ nghĩa xã hội, về đại đoàn kết toàn dân tộc,
                        về đạo đức cách mạng cần, kiệm, liêm, chính, chí công vô tư.
                        Người là biểu tượng cao đẹp nhất của chủ nghĩa yêu nước Việt Nam.
                    </p>
                    <div style={{
                        background: 'rgba(201, 162, 39, 0.15)',
                        borderRadius: 16,
                        padding: 24,
                        border: '1px solid rgba(201, 162, 39, 0.3)'
                    }}>
                        <p style={{
                            fontFamily: "'Lora', Georgia, serif",
                            fontSize: 20,
                            color: '#C9A227',
                            fontStyle: 'italic',
                            fontWeight: 500,
                            margin: 0
                        }}>
                            "Không có gì quý hơn độc lập, tự do!"
                        </p>
                    </div>
                </div>
            </section >

            {/* Footer */}
            < footer style={{
                padding: '40px 24px',
                background: '#1A1A1A',
                textAlign: 'center'
            }}>
                <button
                    onClick={onClose}
                    style={{
                        padding: '16px 40px',
                        background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
                        color: 'white',
                        border: 'none',
                        borderRadius: 100,
                        fontSize: 14,
                        fontWeight: 600,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                    }}
                >
                    Quay lại trang chính
                </button>
                <p style={{
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: 12,
                    marginTop: 24,
                    letterSpacing: '0.1em'
                }}>
                    Nguồn: hochiminh.vn
                </p>
            </footer >
        </div >
    );
}
