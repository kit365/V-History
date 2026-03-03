import { useState } from 'react';
import { X, Library, FileText, ArrowRight, Eye } from 'lucide-react';

// --- 1. IMPORT HÌNH ẢNH BÌA TỪ THƯ MỤC CỦA BẠN ---
// Bạn hãy bỏ comment và trỏ đúng tên file ảnh trong thư mục picture của bạn nhé
import biaNhatKyTrongTu from '../utils/cover_book/nhatkytrongtu.jpg';
import biaTuyenNgon from '../utils/cover_book/tuyenngondoclap.jpg';

interface Document {
    id: string;
    title: string;
    year: string;
    description: string;
    category: 'book' | 'document';
    coverColor: string;
    coverImage?: string; // Thuộc tính để add ảnh bìa thực tế
    paragraphs: string[];
    officialLink: string;
}
const documents: Document[] = [
    {
        id: '1',
        title: "Cương lĩnh chính trị đầu tiên",
        year: "Tháng 2/1930",
        description: "Điểm xuất phát của '15 năm', vạch sẵn lộ trình đánh đổ đế quốc, phong kiến.",
        category: 'document',
        coverColor: '#7B2C3E',
        paragraphs: [
            "Chủ trương làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản.",
            "Đánh đổ đế quốc chủ nghĩa Pháp và bọn phong kiến. Làm cho nước Nam được hoàn toàn độc lập.",
            "Cương lĩnh này chứng minh chúng ta không hề đi trong sương mù, mà đã có một định hướng chiến lược rõ ràng ngay từ ngày đầu tiên thành lập Đảng."
        ],
        officialLink: "https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/hoi-nghi-tl-dang/cuong-linh-chinh-tri-dau-tien-cua-dang-thang-2-1930-101"
    },
    {
        id: '2',
        title: "Nghị quyết Hội nghị Trung ương 8",
        year: "Tháng 5/1941",
        description: "'Cú bẻ lái sinh tử', quyết định đặt nhiệm vụ giải phóng dân tộc lên hàng đầu, tạm gác vấn đề điền địa.",
        category: 'document',
        coverColor: '#C9A227',
        paragraphs: [
            "Trong lúc này, quyền lợi của bộ phận của giai cấp phải phục tùng sự sinh tử tồn vong của quốc gia, của dân tộc.",
            "Nếu không giải quyết được vấn đề dân tộc giải phóng, không đòi lại được độc lập tự do cho toàn thể dân tộc, thì chẳng những toàn quốc gia dân tộc còn chịu mãi kiếp ngựa trâu, mà quyền lợi của bộ phận, giai cấp đến vạn năm cũng không đòi lại được.",
            "Đây là văn kiện cốt lõi, là linh hồn của việc chuẩn bị lực lượng, chớp đúng thời cơ để tiến tới Tổng khởi nghĩa."
        ],
        officialLink: "https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/ban-chap-hanh-trung-uong/khoa-i/nghi-quyet-hoi-nghi-lan-thu-viii-cua-ban-chap-hanh-trung-uong-10"
    },
    {
        id: '3',
        title: "Chương trình 10 chính sách của Việt Minh",
        year: "1941",
        description: "Minh chứng cho việc thu phục lòng người, đại đoàn kết toàn dân tộc (bỏ thuế thân, nông dân có ruộng...).",
        category: 'document',
        coverColor: '#2D4A3E',
        paragraphs: [
            "Làm cho nước Việt Nam hoàn toàn độc lập.",
            "Tịch thu tài sản của đế quốc, Việt gian phân phát cho người nghèo. Bỏ sưu thuế, phu phen, muối rượu do Tây đặt ra.",
            "Chia lại ruộng đất cho công bằng, giảm địa tô, giảm tức, hoãn nợ. Ban bố các quyền tự do dân chủ. Nhờ 10 chính sách thiết thực này, Mặt trận Việt Minh đã quy tụ được sức mạnh của khối đại đoàn kết toàn dân."
        ],
        officialLink: "https://mattran.org.vn/phong-trao/chuong-trinh-viet-minh-10-chinh-sach-lon-3972.html"
    },
    {
        id: '4',
        title: "Chỉ thị 'Nhật - Pháp bắn nhau và hành động của chúng ta'",
        year: "12/03/1945",
        description: "Đây là 'vũ khí' mạnh nhất đập tan luận điểm 'há miệng chờ sung', chứng minh ta đã chủ động tấn công từ tận tháng 3.",
        category: 'document',
        coverColor: '#1A3A5F',
        paragraphs: [
            "Phát động cao trào kháng Nhật cứu nước mạnh mẽ làm tiền đề cho cuộc Tổng khởi nghĩa.",
            "Thay đổi các khẩu hiệu, chuyển hình thức đấu tranh từ bí mật sang công khai, từ biểu tình tiến lên khởi nghĩa vũ trang du kích tại những nơi đủ điều kiện.",
            "Bản Chỉ thị là minh chứng đanh thép cho việc Đảng ta không hề ngồi chờ một cách bị động. Sự nhạy bén tuyệt vời này đã biến cuộc đảo chính của kẻ thù thành cơ hội chín muồi cho cách mạng."
        ],
        officialLink: "https://tulieuvankien.dangcongsan.vn/van-kien-tu-lieu-ve-dang/ban-chap-hanh-trung-uong/khoa-i/chi-thi-cua-ban-thuong-vu-trung-uong-nhat-phap-ban-nhau-va-hanh-dong-cua-chung-ta-231"
    },
    {
        id: '5',
        title: "Báo Cờ Giải Phóng / Kèn Gọi Lính / Cứu Quốc",
        year: "1941-1945",
        description: "Hình ảnh trang bìa của các tờ báo cách mạng, minh chứng cho công tác tuyên truyền, chuẩn bị lực lượng của Mặt trận Việt Minh.",
        category: 'book',
        coverColor: '#4169E1',
        paragraphs: [
            "Dưới muôn vàn khó khăn, những tờ báo in thô sơ này chính là vũ khí tư tưởng sắc bén nhất, mang ánh sáng cách mạng len lỏi vào từng làng mạc, góc phố.",
            "Nội dung các tờ báo liên tục cập nhật tình hình chiến sự thế giới, vạch trần tội ác khủng bố của phát xít, đồng thời truyền đạt các chỉ thị, nghị quyết của Đảng xuống cơ sở.",
            "Báo chí cách mạng đã làm tròn sứ mệnh lịch sử: Thức tỉnh quần chúng, tổ chức lực lượng và thổi bùng ngọn lửa đấu tranh giải phóng dân tộc."
        ],
        officialLink: "https://baotanglichsu.vn/vi/Articles/3096/16035/bao-cuthiet-mang.html"
    },
    {
        id: '6',
        title: "Nhật ký trong tù",
        year: "1942 - 1943",
        description: "Tập thơ gồm 133 bài thơ bằng chữ Hán được Bác sáng tác trong thời gian bị chính quyền Tưởng Giới Thạch giam giữ.",
        category: 'book',
        coverColor: '#800000',
        coverImage: biaNhatKyTrongTu,
        paragraphs: [
            "Thân thể ở trong lao - Tinh thần ở ngoài lao. Muốn nên sự nghiệp lớn - Tinh thần càng phải cao. Những vần thơ thép được viết bằng máu và nước mắt trong chuỗi ngày bị đày ải nơi đất khách quê người.",
            "Dù chân tay bị xiềng xích, mỗi bữa chỉ một bát cơm hèn, Người vẫn tìm thấy vẻ đẹp của thiên nhiên, niềm tin vào ngày mai tươi sáng. Đó là tinh thần lạc quan cách mạng của một vĩ nhân giữ trọn phong thái tự tại giữa chốn lao tù.",
            "Nhật ký trong tù không chỉ là một tác phẩm văn học xuất sắc mà còn là tấm gương sáng ngời về bản lĩnh kiên cường, tấm lòng yêu nước thương dân và ý chí tự do bất diệt."
        ],
        officialLink: "https://hochiminh.vn/upload/3000001/20251024/ea88203adf499d8290ea36227a76d2fdNhat_ky_trong_tu.pdf"
    },
    {
        id: '7',
        title: "Tuyên ngôn Độc lập",
        year: "1945",
        description: "Văn kiện lịch sử trọng đại khai sinh ra nước Việt Nam Dân chủ Cộng hòa, khẳng định quyền tự do dân chủ của dân tộc.",
        category: 'document',
        coverColor: '#B8860B',
        coverImage: biaTuyenNgon,
        paragraphs: [
            "'Tất cả mọi người đều sinh ra có quyền bình đẳng. Tạo hóa cho họ những quyền không ai có thể xâm phạm được; trong những quyền ấy, có quyền được sống, quyền tự do và quyền mưu cầu hạnh phúc.'",
            "Bản Tuyên ngôn là một áng văn lập quốc vĩ đại, tuyên bố với thế giới về sự chấm dứt của chế độ thực dân nửa thế kỷ và chế độ quân chủ mấy mươi đời. Nước Việt Nam từ nay hoàn toàn độc lập.",
            "Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy. Đây là lời thề sắt đá của một dân tộc không bao giờ chịu khuất phục."
        ],
        officialLink: "https://hochiminh.vn/tu-tuong-dao-duc-ho-chi-minh/nghien-cuu-tu-tuong-dao-duc-ho-chi-minh/tuyen-ngon-doc-lap-ang-van-lap-quoc-vi-dai-7396"
    },
    {
        id: '8',
        title: "Thư gửi các học sinh",
        year: "1945",
        description: "Bức thư Bác gửi học sinh cả nước nhân ngày khai giảng đầu tiên của nước Việt Nam Dân chủ Cộng hòa.",
        category: 'document',
        coverColor: '#5C2230',
        paragraphs: [
            "Non sông Việt Nam có trở nên tươi đẹp hay không, dân tộc Việt Nam có bước tới đài vinh quang để sánh vai với các cường quốc năm châu được hay không, chính là nhờ một phần lớn ở công học tập của các em.",
            "Ngày hôm nay là ngày khai trường đầu tiên ở nước Việt Nam Độc lập. Sau 80 năm trời nô lệ làm cho nước nhà bị yếu hèn, ngày nay chúng ta cần xây dựng lại cơ đồ mà tổ tiên đã để lại cho chúng ta.",
            "Các em hãy cố gắng siêng năng học tập, ngoan ngoãn, nghe thầy, yêu bạn để sau này trở thành những người công dân có ích cho đất nước."
        ],
        officialLink: "https://moet.gov.vn/tintuc/Pages/tin-tong-hop.aspx?ItemID=5035"
    },
    {
        id: '9',
        title: "Lời kêu gọi Tổng khởi nghĩa",
        year: "8/1945",
        description: "Lời hiệu triệu quyết định giờ chót của Bác Hồ gửi đồng bào cả nước trước cuộc hồi sinh của dân tộc.",
        category: 'document',
        coverColor: '#B22222',
        paragraphs: [
            "Giờ quyết định cho vận mệnh dân tộc ta đã đến. Toàn quốc đồng bào hãy đứng dậy đem sức ta mà tự giải phóng cho ta. Nhiều dân tộc bị xiềng xích trên thế giới đang vùng dậy giành độc lập.",
            "Chúng ta không thể chậm trễ. Tiến lên! Tiến lên! Dưới lá cờ Việt Minh, đồng bào hãy dũng cảm tiến lên! Quân thù đã quỵ ngã, cơ hội ngàn năm có một đang ở trong tay chúng ta.",
            "Toàn thể đồng bào hãy đoàn kết chặt chẽ thành một khối thống nhất. Sự lãnh đạo của Tổng bộ Việt Minh sẽ cùng các cấp chính quyền cách mạng đưa đất nước đến thắng lợi cuối cùng."
        ],
        officialLink: "https://baotanglichsu.vn/vi/Articles/3096/16016/loi-keu-goi-tong-khoi-nghia-cua-chu-tich-ho-chi-minh.html"
    },
    {
        id: '10',
        title: "Quân lệnh số 1",
        year: "13/8/1945",
        description: "Lệnh tấn công của Ủy ban Khởi nghĩa toàn quốc, chính thức bắt đầu cuộc Tổng khởi nghĩa Tháng Tám.",
        category: 'document',
        coverColor: '#2C3E50',
        paragraphs: [
            "Hỡi quân dân toàn quốc! Giờ tổng khởi nghĩa đã đánh! Cơ hội có một cho quân dân Việt Nam vùng dậy giành độc lập dân tộc đã tới!",
            "Chúng ta phải hành động cho nhanh, với một tinh thần vô cùng quả cảm, vô cùng thận trọng! Cuộc khởi nghĩa này nhất định phải thành công để cứu quốc gia khỏi thảm cảnh diệt vong.",
            "Tất cả các lực lượng vũ trang và nhân dân phải tuân thủ mệnh lệnh, tập trung hỏa lực và sức mạnh để đánh chiếm các cơ quan đầu não của quân thù ngay trong đêm nay."
        ],
        officialLink: "https://baotanglichsu.vn/vi/Articles/3096/15891/quan-lenh-so-1-cua-uy-ban-khoi-nghia-toan-quoc.html"
    }
];

export function Archive({ onClose }: { onClose: () => void }) {
    const [selectedDoc, setSelectedDoc] = useState<Document | null>(null);
    const [filter, setFilter] = useState<'all' | 'book' | 'document'>('all');

    const filteredDocs = documents.filter(doc => filter === 'all' || doc.category === filter);

    return (
        <div style={{ position: 'fixed', inset: 0, zIndex: 10000, background: '#FDFBF7', overflowY: 'auto' }}>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&:wght@400;700;900&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Lora:ital,wght@0,400;0,500;1,400&family=Manrope:wght@300;400;600;700&display=swap');

                .book-cover { 
                    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); 
                    transform-style: preserve-3d; 
                    perspective: 1200px; 
                    position: relative;
                }
                .book-card:hover .book-cover { 
                    transform: rotateY(-30deg) translateX(-10px); 
                    box-shadow: 20px 20px 40px rgba(139, 35, 35, 0.2); 
                }
                .book-spine { 
                    position: absolute; left: 0; top: 0; bottom: 0; 
                    width: 15px; background: rgba(0,0,0,0.2); 
                    transform: rotateY(-90deg); transform-origin: left; 
                    z-index: 2;
                }
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: #F4F1EA; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: #8B2323; border-radius: 10px; }
                
                @keyframes pageFadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .reading-content { animation: pageFadeIn 0.8s ease-out; }
            `}</style>

            {/* Header đồng bộ Avant-Garde */}
            <header style={{ position: 'sticky', top: 0, background: 'rgba(244, 241, 234, 0.98)', backdropFilter: 'blur(10px)', borderBottom: '1px solid #C9A227', zIndex: 100, padding: '16px 24px' }}>
                <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <Library size={32} color="#8B2323" />
                        <div>
                            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', color: '#1A1A1A', margin: 0, fontWeight: 900 }}>Tàng Kinh Các</h1>
                            <p style={{ fontSize: '0.65rem', color: '#8B2323', letterSpacing: '0.2em', textTransform: 'uppercase', margin: 0, fontWeight: 800 }}>Thư Viện Di Sản Hồ Chí Minh</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: 15, alignItems: 'center' }}>
                        <div style={{ display: 'flex', background: 'rgba(139, 35, 35, 0.05)', padding: 4, borderRadius: 100, border: '1px solid rgba(201, 162, 39, 0.3)' }}>
                            {['all', 'book', 'document'].map((f) => (
                                <button key={f} onClick={() => setFilter(f as any)} style={{ padding: '8px 24px', borderRadius: 100, border: 'none', background: filter === f ? '#8B2323' : 'transparent', color: filter === f ? 'white' : '#666', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.3s', fontFamily: "'Manrope', sans-serif" }}>
                                    {f === 'all' ? 'Tất cả' : f === 'book' ? 'Tác phẩm' : 'Văn kiện'}
                                </button>
                            ))}
                        </div>
                        <button onClick={onClose} style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid #C9A227', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: '0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background = '#F4F1EA'} onMouseLeave={(e) => e.currentTarget.style.background = 'white'}>
                            <X size={24} color="#8B2323" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Grid Sách */}
            <section style={{ padding: '80px 24px', maxWidth: 1250, margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 40 }}>
                    {filteredDocs.map((doc) => (
                        <div key={doc.id} className="book-card" style={{ display: 'flex', gap: 24, background: 'white', padding: 24, borderRadius: 2, border: '1px solid rgba(139, 35, 35, 0.1)', cursor: 'pointer', position: 'relative', overflow: 'hidden' }} onClick={() => setSelectedDoc(doc)}>
                            <div style={{ position: 'absolute', top: 0, right: 0, width: 40, height: 40, background: 'rgba(201, 162, 39, 0.1)', clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />

                            {/* Bìa Sách 3D */}
                            <div className="book-cover" style={{ width: 120, height: 180, background: doc.coverColor, borderRadius: '2px 4px 4px 2px', flexShrink: 0, overflow: 'hidden' }}>
                                <div className="book-spine" />
                                {doc.coverImage ? (
                                    <img src={doc.coverImage} alt={doc.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 12, textAlign: 'center', border: '1px solid rgba(255,255,255,0.2)' }}>
                                        <span style={{ fontSize: '0.45rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.15em', marginBottom: 8, fontFamily: "'Playfair Display', serif" }}>HỒ CHÍ MINH</span>
                                        <div style={{ width: 20, height: 1, background: 'rgba(255,255,255,0.3)', marginBottom: 8 }} />
                                        <span style={{ fontSize: '0.8rem', color: 'white', fontFamily: "'Playfair Display', serif", fontWeight: 700, lineHeight: 1.2 }}>{doc.title}</span>
                                    </div>
                                )}
                            </div>

                            {/* Info */}
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flex: 1 }}>
                                <div>
                                    <span style={{ fontSize: '10px', fontWeight: 900, color: '#C9A227', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{doc.year}</span>
                                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', margin: '8px 0', color: '#1A1A1A', fontWeight: 900, lineHeight: 1.3 }}>{doc.title}</h3>
                                    <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.5, margin: 0, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', fontFamily: "'Manrope', sans-serif" }}>{doc.description}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#8B2323', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '0.05em' }}>
                                    XEM TRÍCH ĐOẠN <ArrowRight size={14} strokeWidth={3} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Reading Modal - editorial style */}
            {selectedDoc && (
                <div onClick={() => setSelectedDoc(null)} style={{ position: 'fixed', inset: 0, background: 'rgba(26, 26, 26, 0.95)', backdropFilter: 'blur(15px)', zIndex: 10001, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '30px' }}>
                    <div onClick={(e) => e.stopPropagation()} style={{ background: '#FAF6F0', width: '100%', maxWidth: 1150, height: '92vh', borderRadius: 4, overflow: 'hidden', display: 'flex', boxShadow: '0 50px 100px rgba(0,0,0,0.5)', position: 'relative', border: '1px solid #C9A227' }}>

                        {/* Cột trái: Thông tin tác phẩm */}
                        <div style={{ width: 380, background: '#1A1A1A', padding: '60px 40px', color: 'white', display: 'flex', flexDirection: 'column', flexShrink: 0, borderRight: '1px solid rgba(201, 162, 39, 0.3)' }}>
                            <div style={{ width: 200, height: 290, background: selectedDoc.coverColor, margin: '0 auto 40px', borderRadius: 4, overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)' }}>
                                {selectedDoc.coverImage ? (
                                    <img src={selectedDoc.coverImage} alt={selectedDoc.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                ) : (
                                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20, textAlign: 'center', border: '1px solid rgba(255,255,255,0.1)' }}>
                                        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 900 }}>{selectedDoc.title}</span>
                                    </div>
                                )}
                            </div>

                            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', marginBottom: 20, textAlign: 'center', color: '#C9A227', fontWeight: 900 }}>{selectedDoc.title}</h2>

                            <div style={{ display: 'flex', gap: 10, marginBottom: 30, justifyContent: 'center' }}>
                                <span style={{ border: '1px solid #C9A227', color: '#C9A227', padding: '4px 16px', borderRadius: 2, fontSize: '0.7rem', fontWeight: 800, fontFamily: "'Playfair Display', serif" }}>{selectedDoc.year}</span>
                                <span style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.8)', padding: '4px 16px', borderRadius: 2, fontSize: '0.7rem', fontFamily: "'Manrope', sans-serif" }}>{selectedDoc.category === 'book' ? 'Tác phẩm' : 'Văn kiện'}</span>
                            </div>

                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.8, textAlign: 'justify', marginBottom: 40, fontFamily: "'Manrope', sans-serif", fontStyle: 'italic' }}>{selectedDoc.description}</p>

                            <a href={selectedDoc.officialLink} target="_blank" rel="noopener noreferrer" style={{ marginTop: 'auto', padding: '18px', background: '#8B2323', color: 'white', borderRadius: 2, fontWeight: 800, textDecoration: 'none', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, transition: '0.3s', fontFamily: "'Playfair Display', serif", letterSpacing: '1px', fontSize: '0.85rem', boxShadow: '0 10px 20px rgba(139, 35, 35, 0.3)' }} onMouseEnter={(e) => e.currentTarget.style.background = '#A52A2A'} onMouseLeave={(e) => e.currentTarget.style.background = '#8B2323'}>
                                <Eye size={20} /> XEM BẢN GỐC ĐẦY ĐỦ
                            </a>
                        </div>

                        {/* Cột phải: Nội dung trích dẫn (Trang sách in) */}
                        <div className="custom-scrollbar reading-content" style={{ flex: 1, padding: '80px 100px', overflowY: 'auto', background: '#FFFFFF', position: 'relative' }}>
                            {/* Texture giấy sợi mờ */}
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.05, backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper-fibers.png")', pointerEvents: 'none' }} />

                            <div style={{ maxWidth: 680, margin: '0 auto', position: 'relative', zIndex: 1 }}>
                                {/* Decorative Header */}
                                <div style={{ textAlign: 'center', marginBottom: 70 }}>
                                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.85rem', color: '#C9A227', letterSpacing: '0.4em', textTransform: 'uppercase', display: 'block', marginBottom: 15, fontWeight: 700 }}>Trích đoạn tiêu biểu</span>
                                    <div style={{ width: 50, height: 2, background: '#8B2323', margin: '0 auto' }} />
                                </div>

                                {/* Main Text Article */}
                                <article style={{ fontFamily: "'Lora', serif", fontSize: '1.2rem', color: '#1A1A1A', lineHeight: 2.3, textAlign: 'justify' }}>
                                    {selectedDoc.paragraphs.map((p, idx) => (
                                        <p key={idx} style={{ marginBottom: '2.8rem', textIndent: idx === 0 ? 0 : '3em', position: 'relative' }}>
                                            {idx === 0 && (
                                                <span style={{
                                                    float: 'left',
                                                    fontSize: '5.5rem',
                                                    lineHeight: '0.8',
                                                    paddingTop: '10px',
                                                    paddingRight: '15px',
                                                    fontFamily: "'Playfair Display', serif",
                                                    color: '#8B2323',
                                                    fontWeight: 900
                                                }}>
                                                    {p.charAt(0)}
                                                </span>
                                            )}
                                            {idx === 0 ? p.slice(1) : p}
                                        </p>
                                    ))}
                                </article>

                                {/* Footer kết thúc */}
                                <div style={{ marginTop: 100, paddingTop: 40, borderTop: '1px solid #EDE9E1', textAlign: 'center', opacity: 0.6 }}>
                                    <FileText size={28} color="#8B2323" style={{ margin: '0 auto 15px' }} />
                                    <p style={{ fontSize: '0.75rem', fontStyle: 'italic', letterSpacing: '0.2em', color: '#8B2323', fontWeight: 700 }}>HẾT TRÍCH ĐOẠN TÁC PHẨM</p>
                                    <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center', gap: 8 }}>
                                        {[1, 2, 3].map(i => <div key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A227' }} />)}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Nút đóng nổi bật */}
                        <button onClick={() => setSelectedDoc(null)} style={{ position: 'absolute', top: 25, right: 25, width: 45, height: 45, borderRadius: '50%', border: '1px solid rgba(139, 35, 35, 0.2)', background: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, boxShadow: '0 4px 15px rgba(0,0,0,0.1)', transition: '0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(90deg)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(0)'}>
                            <X size={24} color="#8B2323" strokeWidth={3} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}