import { useState, useEffect } from 'react';
import { TrendingUp, Users, Shield, Map } from 'lucide-react';

export function DataComparison() {
    const [activeTab, setActiveTab] = useState('political');
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    const data = {
        political: {
            title: 'Xây Dựng Đảng & Mặt Trận',
            years: ['1930', '1935', '1941', '1945'],
            values: [1, 15, 60, 100], // Giả lập mức độ phát triển %
            stats: [
                { label: 'Đảng viên', val: '211 -> 5.000+', desc: 'Từ một nhóm hạt giống đến mạng lưới toàn quốc' },
                { label: 'Việt Minh', val: 'Hàng triệu hội viên', desc: 'Đoàn kết mọi tầng lớp nhân dân' }
            ]
        },
        military: {
            title: 'Lực Lượng Vũ Trang',
            years: ['1940', '1941', '1944', '1945'],
            values: [5, 10, 40, 100],
            stats: [
                { label: 'Đội VNTTGPQ', val: '34 chiến sĩ', desc: 'Ngày 22/12/1944' },
                { label: 'Quân giải phóng', val: 'Hàng vạn người', desc: 'Sẵn sàng cho Tổng khởi nghĩa' }
            ]
        },
        bases: {
            title: 'Căn Cứ Địa Cách Mạng',
            years: ['1940', '1941', '1943', '1945'],
            values: [10, 30, 70, 100],
            stats: [
                { label: 'Bắc Sơn - Võ Nhai', val: '1940', desc: 'Căn cứ địa đầu tiên' },
                { label: 'Khu giải phóng', val: '6 tỉnh Việt Bắc', desc: 'Hình ảnh nước Việt Nam mới' }
            ]
        }
    };

    const currentData = data[activeTab as keyof typeof data];

    return (
        <section id="doi-chieu" style={{
            padding: '120px 24px',
            background: '#FDFBF7',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ maxWidth: 1100, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 15 }}>
                        <TrendingUp size={20} color="#8B2323" />
                        <span style={{ fontSize: 13, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#8B2323', fontWeight: 800 }}>
                            Nội Lực Dân Tộc
                        </span>
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#1A1A1A', fontWeight: 700 }}>
                        Từ <span style={{ color: '#C9A227' }}>Hạt Giống</span> Đến <span style={{ color: '#8B2323' }}>Cây Cổ Thụ</span>
                    </h2>
                    <p style={{ color: '#666', marginTop: 20, maxWidth: 700, margin: '20px auto 0' }}>
                        Đối chiếu sự phát triển thần kỳ của phong trào cách mạng trong nước để thấy rõ sức mạnh nội sinh không thể phủ nhận.
                    </p>
                </div>

                <div style={{ display: 'flex', gap: 15, justifyContent: 'center', marginBottom: 50, flexWrap: 'wrap' }}>
                    {[
                        { id: 'political', label: 'Chính Trị', icon: Users },
                        { id: 'military', label: 'Lực Lượng', icon: Shield },
                        { id: 'bases', label: 'Căn Cứ Địa', icon: Map }
                    ].map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 10,
                                padding: '12px 24px',
                                borderRadius: '50px',
                                border: activeTab === tab.id ? '2px solid #8B2323' : '2px solid #EEE',
                                background: activeTab === tab.id ? '#8B2323' : 'white',
                                color: activeTab === tab.id ? 'white' : '#666',
                                fontWeight: 700,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: activeTab === tab.id ? '0 10px 20px rgba(139, 35, 35, 0.2)' : 'none'
                            }}
                        >
                            <tab.icon size={18} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div style={{
                    background: 'white',
                    borderRadius: 30,
                    padding: '50px',
                    boxShadow: '0 30px 60px rgba(0,0,0,0.05)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 60,
                    border: '1px solid rgba(0,0,0,0.05)'
                }}>
                    {/* Chart Visual */}
                    <div>
                        <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', marginBottom: 40, borderBottom: '2px solid #F0F0F0', paddingBottom: 15 }}>
                            {currentData.title}
                        </h4>
                        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20, height: 250, paddingBottom: 30, borderBottom: '1px solid #EEE', position: 'relative' }}>
                            {currentData.values.map((val, i) => (
                                <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                                    <div style={{
                                        width: '100%',
                                        background: i === 3 ? '#8B2323' : '#C9A227',
                                        height: animate ? `${val}%` : '0%',
                                        borderRadius: '4px 4px 0 0',
                                        transition: 'height 1s cubic-bezier(0.17, 0.67, 0.83, 0.67)',
                                        position: 'relative'
                                    }}>
                                        <span style={{ position: 'absolute', top: -25, left: '50%', transform: 'translateX(-50%)', fontSize: 12, fontWeight: 800, color: i === 3 ? '#8B2323' : '#C9A227' }}>
                                            {val}%
                                        </span>
                                    </div>
                                    <span style={{ fontSize: 13, fontWeight: 700, color: '#999' }}>{currentData.years[i]}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Info */}
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 30 }}>
                        {currentData.stats.map((stat, i) => (
                            <div key={i} style={{ borderLeft: '4px solid #C9A227', paddingLeft: 20 }}>
                                <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#888', marginBottom: 5 }}>
                                    {stat.label}
                                </div>
                                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#1A1A1A', marginBottom: 8 }}>
                                    {stat.val}
                                </div>
                                <div style={{ color: '#666', fontSize: '0.95rem', lineHeight: 1.5 }}>
                                    {stat.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
