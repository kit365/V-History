import { useState } from 'react';
import { X, Image as ImageIcon, Search, Download, Calendar, MapPin } from 'lucide-react';

interface Photo {
    id: string;
    url: string;
    title: string;
    year: string;
    location: string;
    description: string;
    category: 'career' | 'war' | 'people' | 'daily';
}

const photos: Photo[] = [
    {
        id: '1',
        url: 'https://imgcdn.tapchicongthuong.vn/thumb/w_1000/tcct-media/23/9/1/1945_64f207b99f453.jpg',
        title: 'Bác Hồ đọc Tuyên ngôn Độc lập',
        year: '1945',
        location: 'Quảng trường Ba Đình, Hà Nội',
        category: 'career',
        description: 'Chủ tịch Hồ Chí Minh đọc bản Tuyên ngôn Độc lập khai sinh nước Việt Nam Dân chủ Cộng hòa.'
    },
    {
        id: '2',
        url: 'https://cdn2.tuoitre.vn/thumb_w/480/2018/9/1/images19063801-1-read-only-15358012301841934384139.jpg',
        title: 'Bác Hồ làm việc tại chiến khu Việt Bắc',
        year: '1947',
        location: 'Việt Bắc',
        category: 'war',
        description: 'Bác Hồ làm việc trong hang đá tại chiến khu Việt Bắc trong những năm đầu của cuộc kháng chiến chống Pháp.'
    },
    {
        id: '3',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7KEE-v_gXYS69V8kKEldUrIUbbGflyhbDaQ&s',
        title: 'Bác Hồ và các cháu thiếu nhi',
        year: '1960',
        location: 'Phủ Chủ tịch, Hà Nội',
        category: 'people',
        description: 'Bác Hồ luôn dành tình cảm yêu thương đặc biệt cho các cháu thiếu niên, nhi đồng.'
    },
    {
        id: '4',
        url: 'https://media.baovanhoa.vn/zoom/1000/uploaded/dovandong/2026_01_11/tat_nuoc_NAWY.jpg',
        title: 'Bác Hồ tát nước cùng nông dân',
        year: '1958',
        location: 'Hà Đông',
        category: 'daily',
        description: 'Bác Hồ trực tiếp tham gia lao động cùng bà con nông dân, thể hiện sự gần gũi và giản dị.'
    },
    {
        id: '5',
        url: 'https://vanhoavaphattrien.vn/uploads/images/blog/photongbientap/2022/10/27/dh3aq3-1666831966.jpg',
        title: 'Bác Hồ quan sát mặt trận Đông Khê',
        year: '1950',
        location: 'Cao Bằng',
        category: 'war',
        description: 'Bác Hồ trực tiếp ra mặt trận quan sát và chỉ đạo chiến dịch Biên giới Thu Đông 1950.'
    },
    {
        id: '6',
        url: 'https://hochiminh.vn/upload/3000001/20220517/a3f1245016f4978a10f0e7e03.jpg',
        title: 'Nguyễn Ái Quốc tại Đại hội Tours, Pháp',
        year: '1920',
        location: 'Tours, Pháp',
        category: 'career',
        description: 'Nguyễn Ái Quốc phát biểu tại Đại hội lần thứ XVIII của Đảng Xã hội Pháp, ủng hộ Quốc tế thứ ba.'
    }
];

export function ImageGallery({ onClose }: { onClose: () => void }) {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
    const [filter, setFilter] = useState<'all' | Photo['category']>('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPhotos = photos.filter(photo => {
        const matchesFilter = filter === 'all' || photo.category === filter;
        const matchesSearch = photo.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            photo.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    const categories = [
        { id: 'all', label: 'Tất cả' },
        { id: 'career', label: 'Sự nghiệp' },
        { id: 'war', label: 'Kháng chiến' },
        { id: 'people', label: 'Với Nhân dân' },
        { id: 'daily', label: 'Đời thường' }
    ];

    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            zIndex: 10000,
            background: '#0F0F0F',
            color: 'white',
            overflowY: 'auto',
            fontFamily: 'system-ui, -apple-system, sans-serif'
        }}>
            {/* Background Texture */}
            <div style={{
                position: 'fixed',
                inset: 0,
                opacity: 0.05,
                pointerEvents: 'none',
                background: 'url("https://www.transparenttextures.com/patterns/dark-matter.png")',
                zIndex: 1
            }} />

            {/* Header Area */}
            <header style={{
                position: 'sticky',
                top: 0,
                zIndex: 100,
                background: 'rgba(15, 15, 15, 0.9)',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                padding: '20px 40px'
            }}>
                <div style={{ maxWidth: 1400, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                        <div style={{
                            width: 45, height: 45, background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
                            borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 5px 15px rgba(123, 45, 62, 0.3)'
                        }}>
                            <ImageIcon size={24} color="white" />
                        </div>
                        <div>
                            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0, letterSpacing: '-0.02em' }}>Thư Viện Ảnh</h1>
                            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tư liệu lịch sử Hồ Chí Minh</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <Search style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }} size={16} />
                            <input
                                type="text"
                                placeholder="Tìm kiếm ảnh..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: 100,
                                    padding: '10px 15px 10px 40px',
                                    color: 'white',
                                    width: 250,
                                    fontSize: '0.85rem',
                                    outline: 'none',
                                    transition: 'all 0.3s'
                                }}
                            />
                        </div>
                        <button
                            onClick={onClose}
                            style={{
                                width: 44, height: 44, borderRadius: '50%', background: 'rgba(255,255,255,0.05)',
                                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transition: 'all 0.2s'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                        >
                            <X size={24} color="white" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Filter Bar */}
            <div style={{ padding: '30px 40px', maxWidth: 1400, margin: '0 auto', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {categories.map(cat => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.id as any)}
                        style={{
                            padding: '10px 24px',
                            borderRadius: 100,
                            border: 'none',
                            background: filter === cat.id ? '#C9A227' : 'rgba(255,255,255,0.05)',
                            color: filter === cat.id ? '#1A1A1A' : 'rgba(255,255,255,0.7)',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Photo Grid */}
            <main style={{ padding: '0 40px 80px', maxWidth: 1400, margin: '0 auto', position: 'relative', zIndex: 2 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: 30
                }}>
                    {filteredPhotos.map((photo) => (
                        <div
                            key={photo.id}
                            onClick={() => setSelectedPhoto(photo)}
                            style={{
                                borderRadius: 20,
                                overflow: 'hidden',
                                background: '#1A1A1A',
                                border: '1px solid rgba(255,255,255,0.05)',
                                cursor: 'pointer',
                                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                position: 'relative',
                                aspectRatio: '16/10'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = 'rgba(201, 162, 39, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
                            }}
                        >
                            <img
                                src={photo.url}
                                alt={photo.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)',
                                padding: 24,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end'
                            }}>
                                <div style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
                                    <span style={{
                                        fontSize: '0.65rem', background: 'rgba(201, 162, 39, 0.2)', color: '#C9A227',
                                        padding: '3px 10px', borderRadius: 4, fontWeight: 700, textTransform: 'uppercase'
                                    }}>{photo.year}</span>
                                    <span style={{
                                        fontSize: '0.65rem', background: 'rgba(255,255,255,0.1)', color: 'white',
                                        padding: '3px 10px', borderRadius: 4, fontWeight: 700, textTransform: 'uppercase'
                                    }}>{categories.find(c => c.id === photo.category)?.label}</span>
                                </div>
                                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 600 }}>{photo.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* Lightbox Modal */}
            {selectedPhoto && (
                <div
                    onClick={() => setSelectedPhoto(null)}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 10005,
                        background: 'rgba(0,0,0,0.95)',
                        backdropFilter: 'blur(20px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: 40,
                        cursor: 'zoom-out'
                    }}
                >
                    <div
                        onClick={(e) => e.stopPropagation()}
                        style={{
                            width: '100%',
                            maxWidth: 1200,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 30,
                            cursor: 'default'
                        }}
                    >
                        {/* Main Image View */}
                        <div style={{ position: 'relative', borderRadius: 24, overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}>
                            <img
                                src={selectedPhoto.url}
                                alt={selectedPhoto.title}
                                style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', background: '#000' }}
                            />

                            <button
                                onClick={() => setSelectedPhoto(null)}
                                style={{
                                    position: 'absolute',
                                    top: 20, right: 20,
                                    width: 50, height: 50, borderRadius: '50%',
                                    background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
                                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
                                }}
                            >
                                <X size={24} color="white" />
                            </button>
                        </div>

                        {/* Info Section */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 40 }}>
                            <div style={{ flex: 1 }}>
                                <div style={{ display: 'flex', gap: 15, marginBottom: 20 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#C9A227', fontSize: '0.9rem', fontWeight: 600 }}>
                                        <Calendar size={16} /> {selectedPhoto.year}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                                        <MapPin size={16} /> {selectedPhoto.location}
                                    </div>
                                </div>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: '0 0 15px 0', letterSpacing: '-0.02em' }}>{selectedPhoto.title}</h2>
                                <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, maxWidth: 800 }}>{selectedPhoto.description}</p>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                <a
                                    href={selectedPhoto.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        padding: '16px 32px',
                                        background: 'white',
                                        color: '#000',
                                        borderRadius: 100,
                                        fontWeight: 700,
                                        textDecoration: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 10,
                                        transition: 'all 0.3s'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'scale(1.05)';
                                        e.currentTarget.style.boxShadow = '0 0 30px rgba(255,255,255,0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <Download size={20} /> Tải ảnh tư liệu
                                </a>
                                <button
                                    onClick={() => setSelectedPhoto(null)}
                                    style={{
                                        padding: '16px 32px',
                                        background: 'rgba(255,255,255,0.05)',
                                        color: 'white',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: 100,
                                        fontWeight: 600,
                                        cursor: 'pointer'
                                    }}
                                >
                                    Quay lại thư viện
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
