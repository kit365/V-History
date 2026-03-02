import { useState } from 'react';
import { X, Library, FileText, ArrowRight, Eye } from 'lucide-react';

// --- 1. IMPORT HÌNH ẢNH BÌA TỪ THƯ MỤC CỦA BẠN ---
// Bạn hãy bỏ comment và trỏ đúng tên file ảnh trong thư mục picture của bạn nhé
import biaBanAn from '../utils/cover_book/bananchedothucdanphat.jpg';
import biaDuongKachMenh from '../utils/cover_book/duongcachmenh.jpg';
import biaNhatKyTrongTu from '../utils/cover_book/nhatkytrongtu.jpg';
import biaTuyenNgon from '../utils/cover_book/tuyenngondoclap.jpg';
import biaSuaDoiLoiLamViec from '../utils/cover_book/suadoiloilamviecj.jpg';
import biaDiChuc from '../utils/cover_book/dichuc.jpg';

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
        title: "Bản án chế độ thực dân Pháp",
        year: "1925",
        description: "Tác phẩm vạch trần tội ác của thực dân Pháp tại các thuộc địa và kêu gọi các dân tộc bị áp bức đứng lên đấu tranh.",
        category: 'book',
        coverColor: '#7B2C3E',
        coverImage: biaBanAn, 
        paragraphs: [
            "Dưới cái tên 'khai hóa' giả tạo, thực dân Pháp đã mang đến cho các dân tộc thuộc địa những xiềng xích tàn bạo nhất. Chúng biến con người thành những vật hy sinh cho quyền lợi của chính quốc thông qua chế độ thuế máu và sưu dịch nặng nề.",
            "Bản án này không chỉ là lời tố cáo tội ác dã man của thực dân Pháp tại Việt Nam, mà còn là hồi chuông thức tỉnh toàn bộ các dân tộc bị áp bức trên thế giới. Người vạch trần sự bóc lột sức lao động đến kiệt quệ và những đạo luật bất công nhằm duy trì sự ngu dân để dễ bề cai trị.",
            "Cuốn sách khẳng định một chân lý: Ở đâu có áp bức, ở đó có đấu tranh. Muốn giải phóng dân tộc, không có con đường nào khác ngoài việc đứng lên lật đổ ách thống trị thực dân."
        ],
        officialLink: "https://tennguoidepnhat.net/2012/02/01/b%E1%BA%A3n-an-ch%E1%BA%BF-d%E1%BB%99-th%E1%BB%B1c-dan-phap-ch%C6%B0%C6%A1ng-i/"
    },
    {
        id: '2',
        title: "Đường Kách mệnh",
        year: "1927",
        description: "Cuốn sách tập hợp các bài giảng của Nguyễn Ái Quốc dùng để huấn luyện cán bộ cách mạng tại Quảng Châu.",
        category: 'book',
        coverColor: '#C9A227',
        coverImage: biaDuongKachMenh,
        paragraphs: [
            "Cách mệnh là việc chung của cả dân chúng chứ không phải việc một hai người. Cuốn sách tập hợp những bài giảng lý luận thực tiễn nhất để đào tạo những hạt giống đỏ đầu tiên cho phong trào cách mạng Việt Nam.",
            "Người nhấn mạnh tư cách của một người cách mệnh: Vị công vong tư, giữ chủ nghĩa cho vững, ít lòng tham muốn về vật chất. Đây là nền tảng đạo đức cốt lõi để người cán bộ có thể vượt qua mọi gian khổ, hy sinh.",
            "Tác phẩm xác định rõ: Cách mệnh Việt Nam là một bộ phận của cách mệnh thế giới. Phải có một Đảng vững bền thì cách mệnh mới thành công, cũng như người cầm lái có vững thuyền mới chạy."
        ],
        officialLink: "https://hochiminh.vn/page/Article/Book/Detail/review/690018af9420925df30e7e03"
    },
    {
        id: '3',
        title: "Nhật ký trong tù",
        year: "1942 - 1943",
        description: "Tập thơ gồm 133 bài thơ bằng chữ Hán được Bác sáng tác trong thời gian bị chính quyền Tưởng Giới Thạch giam giữ.",
        category: 'book',
        coverColor: '#2D4A3E',
        coverImage: biaNhatKyTrongTu,
        paragraphs: [
            "Thân thể ở trong lao - Tinh thần ở ngoài lao. Muốn nên sự nghiệp lớn - Tinh thần càng phải cao. Những vần thơ thép được viết bằng máu và nước mắt trong chuỗi ngày bị đày ải nơi đất khách quê người.",
            "Dù chân tay bị xiềng xích, mỗi bữa chỉ một bát cơm hèn, Người vẫn tìm thấy vẻ đẹp của thiên nhiên, niềm tin vào ngày mai tươi sáng. Đó là tinh thần lạc quan cách mạng của một vĩ nhân giữ trọn phong thái tự tại giữa chốn lao tù.",
            "Nhật ký trong tù không chỉ là một tác phẩm văn học xuất sắc mà còn là tấm gương sáng ngời về bản lĩnh kiên cường, tấm lòng yêu nước thương dân và ý chí tự do bất diệt."
        ],
        officialLink: "https://hochiminh.vn/upload/3000001/20251024/ea88203adf499d8290ea36227a76d2fdNhat_ky_trong_tu.pdf"
    },
    {
        id: '4',
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
        id: '5',
        title: "Sửa đổi lối làm việc",
        year: "1947",
        description: "Tác phẩm quan trọng về xây dựng Đảng, rèn luyện đạo đức cách mạng và phong cách làm việc của cán bộ.",
        category: 'book',
        coverColor: '#5C2230',
        coverImage: biaSuaDoiLoiLamViec,
        paragraphs: [
            "Phê bình và tự phê bình là vũ khí sắc bén để Đảng luôn trong sạch, vững mạnh. Cán bộ phải sửa đổi lối làm việc, chống lại các bệnh chủ quan, hẹp hòi và thói ba hoa trong công tác.",
            "Người căn dặn: Việc gì có lợi cho dân phải hết sức làm, việc gì có hại cho dân phải hết sức tránh. Phải gần dân, hiểu dân và học hỏi từ dân thay vì đứng trên đầu dân phát mệnh lệnh.",
            "Tu dưỡng đạo đức cách mạng là việc làm suốt đời. Một tấm gương sống còn có giá trị hơn một trăm bài diễn văn tuyên truyền. Cán bộ phải là người đi trước để làng nước theo sau."
        ],
        officialLink: "https://duccqdt.nghean.gov.vn/tu-lieu-nghien-cuu/tac-pham-sua-doi-loi-lam-viec-723900?pageindex=0"
    },
    {
        id: '6',
        title: "Di chúc",
        year: "1969",
        description: "Những lời dặn dò cuối cùng của Bác trước khi đi xa, thể hiện tình yêu vô hạn với Đảng, với nhân dân và đất nước.",
        category: 'document',
        coverColor: '#7B2D3E',
        coverImage: biaDiChuc,
        paragraphs: [
            "Điều mong muốn cuối cùng của tôi là: Toàn Đảng, toàn dân ta đoàn kết phấn đấu, xây dựng một nước Việt Nam hòa bình, thống nhất, độc lập, dân chủ và giàu mạnh, và góp phần xứng đáng vào sự nghiệp cách mạng thế giới.",
            "Người dặn dò về việc giữ gìn sự đoàn kết trong Đảng như giữ gìn con ngươi của mắt mình. Phải có tình đồng chí thương yêu lẫn nhau và hết lòng phục vụ nhân dân.",
            "Dù phải từ biệt thế giới này, lòng yêu thương của Người vẫn để lại cho toàn dân, cho toàn quân, cho các cháu thanh niên và nhi đồng. Di chúc là bản thiết kế tương lai cho một dân tộc tự cường và nhân văn."
        ],
        officialLink: "https://www.moj.gov.vn/qt/cacchuyenmuc/Lists/45NamDiChucHCM/Attachments/5/5.%20Di%20chuc-Ban%20cong%20bo%20nam%201969.pdf"
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
                                        {[1,2,3].map(i => <div key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: '#C9A227' }} />)}
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