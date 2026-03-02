import { useState } from 'react';
import { X, Image as ImageIcon, Search, Download, Calendar, MapPin } from 'lucide-react';

interface Photo {
    id: string;
    url: string;
    title: string;
    year: string;
    location: string;
    description: string;
    category: 'pre-1941' | '1941-1944' | '1945';
}

const photos: Photo[] = [
    {
        id: '1',
        url: 'https://placehold.co/800x500/1a1a1a/c9a227?text=Anh+1',
        title: '"Một cổ hai tròng" - Lịch sử không có khoảng trống.',
        year: '1940',
        location: 'Đông Dương',
        category: 'pre-1941',
        description: 'Từ năm 1940, dân tộc ta rơi vào thảm cảnh tăm tối nhất khi cả đế quốc Pháp và phát xít Nhật cùng ráo riết vơ vét, bóc lột. Trong hoàn cảnh đó, nếu không tự đứng lên, sẽ chẳng có phép màu nào xuất hiện.'
    },
    {
        id: '2',
        url: 'https://placehold.co/800x500/1a1a1a/c9a227?text=Anh+2',
        title: 'Xây móng nhà trước cơn bão lớn.',
        year: '1930 - 1939',
        location: 'Việt Nam',
        category: 'pre-1941',
        description: 'Không có thành công nào thiếu đi sự tập dượt. Hai phong trào cách mạng (1930-1931 và 1936-1939) chính là nền tảng đẫm máu để Đảng và nhân dân ta rèn luyện bản lĩnh, chuẩn bị cho giai đoạn nước rút.'
    },
    {
        id: '3',
        url: 'https://placehold.co/800x500/1a1a1a/c9a227?text=Anh+3',
        title: 'Người cầm lái trở về.',
        year: '28/01/1941',
        location: 'Pác Bó, Cao Bằng',
        category: '1941-1944',
        description: 'Ngày 28/01/1941, Lãnh tụ Nguyễn Ái Quốc trực tiếp về nước. Sự xuất hiện của Người đã mở ra một chương mới: Chuyển hướng chiến lược sinh tử, đặt nhiệm vụ "Giải phóng dân tộc" lên hàng tối cao.'
    },
    {
        id: '4',
        url: 'https://placehold.co/800x500/1a1a1a/c9a227?text=Anh+4',
        title: 'Cú bẻ lái đi trước thời đại.',
        year: 'Tháng 5/1941',
        location: 'Pác Bó, Cao Bằng',
        category: '1941-1944',
        description: 'Tại Hội nghị Trung ương 8, Đảng ra quyết định tạm gác cách mạng ruộng đất. "Nếu không giải quyết được vấn đề dân tộc giải phóng... thì quyền lợi giai cấp đến vạn năm cũng không đòi lại được".'
    },
    {
        id: '5',
        url: 'https://placehold.co/800x500/1a1a1a/c9a227?text=Anh+5',
        title: 'Mặt trận Việt Minh - Khối đại đoàn kết vô song.',
        year: '1941',
        location: 'Việt Nam',
        category: '1941-1944',
        description: 'Để có lực lượng đánh giặc, Đảng lập ra Mặt trận Việt Minh với 10 chính sách thiết thực. Lời kêu gọi không phân biệt thợ thuyền, nông dân hay tư bản, địa chủ... miễn có lòng yêu nước đều là anh em.'
    },
    {
        id: '6',
        url: 'https://placehold.co/800x500/1a1a1a/c9a227?text=Anh+6',
        title: 'Rèn thanh gươm chờ ngày vung kiếm.',
        year: '22/12/1944',
        location: 'Cao Bằng',
        category: '1941-1944',
        description: 'Thành lập ngày 22/12/1944, đây là tiền thân của Quân đội Nhân dân Việt Nam. Chúng ta đã xây dựng quân đội chủ lực từ rất sớm, tuyệt đối không hề "tay không bắt giặc" khi Nhật đầu hàng!'
    },
    {
        id: '7',
        url: 'https://placehold.co/800x500/1a1a1a/c9a227?text=Anh+7',
        title: 'Không chờ sung rụng!',
        year: 'Tháng 3/1945',
        location: 'Ban Thường vụ TW',
        category: '1945',
        description: 'Ngay khi Nhật đảo chính Pháp (9/3/1945), Đảng lập tức ra Chỉ thị "Nhật - Pháp bắn nhau và hành động của chúng ta". Cao trào kháng Nhật và phong trào phá kho thóc cứu đói bùng nổ. Ta đã chủ động tấn công từ tận tháng 3!'
    },
    {
        id: '8',
        url: 'https://placehold.co/800x500/1a1a1a/c9a227?text=Anh+8',
        title: 'Chớp "Thời cơ vàng" thần tốc.',
        year: 'Giữa tháng 8/1945',
        location: 'Tân Trào, Tuyên Quang',
        category: '1945',
        description: 'Tháng 8/1945, Nhật đầu hàng. Thời cơ chỉ kéo dài chưa đầy 15 ngày trước khi Đồng minh tràn vào. Bộ máy lãnh đạo đã phản ứng với tốc độ ánh sáng: Phát lệnh khởi nghĩa (13/8), Hội nghị Tân Trào (14-15/8) và Đại hội Quốc dân (16/8).'
    },
    {
        id: '9',
        url: 'https://placehold.co/800x500/1a1a1a/c9a227?text=Anh+9',
        title: 'Càn quét tàn dư phong kiến, thực dân.',
        year: '19/8 - 30/8/1945',
        location: 'Cả nước',
        category: '1945',
        description: 'Từ ngày 19/08 đến 30/08, một hiệu ứng domino không thể cản phá quét qua 3 miền: Hà Nội, Huế, Sài Gòn giành chính quyền. Chế độ phong kiến ngàn năm chính thức sụp đổ. Sự đồng bộ này là minh chứng rõ nhất của nghệ thuật chớp thời cơ.'
    },
    {
        id: '10',
        url: 'https://placehold.co/800x500/1a1a1a/c9a227?text=Anh+10',
        title: 'Kỷ nguyên Độc lập - Tự do.',
        year: '02/09/1945',
        location: 'Quảng trường Ba Đình',
        category: '1945',
        description: 'Ngày 02/09/1945, nước Việt Nam Dân chủ Cộng hòa khai sinh. Thắng lợi vĩ đại này là sự hội tụ đỉnh cao giữa điều kiện khách quan và sự chuẩn bị chủ quan 15 năm của Đảng. Khái niệm "ăn may" hoàn toàn bị đập tan!'
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
        { id: 'pre-1941', label: 'Trước 1941' },
        { id: '1941-1944', label: 'Giai đoạn 1941-1944' },
        { id: '1945', label: 'Năm 1945' }
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
                            <h1 style={{ fontSize: '1.4rem', fontWeight: 700, margin: 0, letterSpacing: '-0.02em' }}>Hành Trình 15 Năm</h1>
                            <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Kiến tạo "Thời Cơ Vàng"</p>
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
