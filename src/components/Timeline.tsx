import { useState, useEffect, useRef } from 'react';

// --- 1. IMPORT HÌNH ẢNH ---
import khoidauImg from '../utils/picture/khoidauhanhtrinh.png';
import raditimduongImg from '../utils/picture/raditimduong.png';
import anhsangtuluancuongImg from '../utils/picture/anhsangtuluancuong.png';
import thanhlapDangImg from '../utils/picture/thanhlapdang.png';
import trovetoquocImg from '../utils/picture/trovetoquoc.png';
import tuyenngondoclapImg from '../utils/picture/tuyenngondoclap.png';

// Import logo búa liềm từ đường dẫn cục bộ của bạn
import buaLiemImg from '../utils/picture/bua_liem.webp';

// --- 2. CẤU TRÚC DỮ LIỆU ---
interface TimelineEvent {
  id: string;
  year: string;
  date: string;
  title: string;
  location: string;
  shortDesc: string;
  fullDesc: string;
  significance: string;
  image: string;
  layout: 'layout-diagonal' | 'layout-split' | 'layout-center' | 'layout-hero';
  stage: 'prep' | 'boom'; // Mới: Phân chi giai đoạn
}

const timelineEvents: TimelineEvent[] = [
  {
    id: '1930',
    year: '1930',
    date: '3 tháng 2',
    title: 'Thành Lập Đảng',
    location: 'Hương Cảng, Trung Quốc',
    shortDesc: 'Tổ chức lãnh đạo cách mạng ra đời',
    fullDesc: 'Sự ra đời của Đảng Cộng sản Việt Nam chấm dứt thời kỳ khủng hoảng về đường lối. Từ đây, cách mạng Việt Nam có một tổ chức tiên phong với đường lối đúng đắn, chuẩn bị cho chặng đường đấu tranh sắp tới.',
    significance: 'Nhân tố quyết định và tiền đề đầu tiên cho mọi thắng lợi của cách mạng.',
    image: thanhlapDangImg,
    layout: 'layout-diagonal',
    stage: 'prep'
  },
  {
    id: '1941',
    year: '1941',
    date: 'Tháng 5',
    title: 'Hội Nghị TW 8',
    location: 'Pác Bó, Cao Bằng',
    shortDesc: 'Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu',
    fullDesc: 'Hội nghị Trung ương 8 quyết định thay đổi chiến lược: Chuyển hướng chỉ đạo chiến lược, giương cao ngọn cờ giải phóng dân tộc, thành lập Mặt trận Việt Minh để đoàn kết toàn dân.',
    significance: 'Bước chuyển hướng chiến lược sáng suốt, trực tiếp chuẩn bị cho Tổng khởi nghĩa.',
    image: trovetoquocImg,
    layout: 'layout-split',
    stage: 'prep'
  },
  {
    id: '1944',
    year: '1944',
    date: '22 tháng 12',
    title: 'Thành Lập Quân Đội',
    location: 'Trần Hưng Đạo, Cao Bằng',
    shortDesc: 'Vũ trang toàn dân',
    fullDesc: 'Đội Việt Nam Tuyên truyền Giải phóng quân được thành lập theo chỉ thị của Hồ Chí Minh tại khu rừng Trần Hưng Đạo. Đây là lực lượng nòng cốt bồi dưỡng và phát triển phong trào vũ trang quần chúng.',
    significance: 'Sự chuẩn bị chu đáo về lực lượng vũ trang cách mạng.',
    image: raditimduongImg,
    layout: 'layout-center',
    stage: 'prep'
  },
  {
    id: '1945-3',
    year: '1945',
    date: '12 tháng 3',
    title: 'Nhật Đảo Chính Pháp',
    location: 'Toàn quốc',
    shortDesc: 'Phát động cao trào kháng Nhật',
    fullDesc: 'Ngay khi Nhật đảo chính Pháp, Thường vụ TW Đảng ra ngay bản Chỉ thị "Nhật - Pháp bắn nhau và hành động của chúng ta", kịp thời phát động cao trào tiền khởi nghĩa trên cả nước.',
    significance: 'Sự nhạy bén và nghệ thuật chớp thời cơ tuyệt vời của Đảng.',
    image: anhsangtuluancuongImg,
    layout: 'layout-diagonal',
    stage: 'boom'
  },
  {
    id: '1945-8',
    year: '1945',
    date: '14-15 tháng 8',
    title: 'Lệnh Tổng Khởi Nghĩa',
    location: 'Tân Trào, Tuyên Quang',
    shortDesc: 'Quyết định lịch sử kịp thời',
    fullDesc: 'Hội nghị toàn quốc của Đảng và Quốc dân Đại hội Tân Trào quyết định Tổng khởi nghĩa giành chính quyền trước khi quân Đồng minh vào Đông Dương, tận dụng khoảng trống quyền lực khi Nhật đầu hàng.',
    significance: 'Quyết đoán "dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập".',
    image: khoidauImg,
    layout: 'layout-split',
    stage: 'boom'
  },
  {
    id: '1945-9',
    year: '1945',
    date: '2 tháng 9',
    title: 'Tuyên Ngôn Độc Lập',
    location: 'Ba Đình, Hà Nội',
    shortDesc: 'Trái ngọt của 15 năm chuẩn bị',
    fullDesc: 'Thắng lợi nhanh chóng và ít đổ máu của Cách mạng Tháng Tám không phải do "nhặt được chính quyền", mà là thành quả tất yếu của quá trình đấu tranh gian khổ, chuẩn bị kỹ lưỡng về mọi mặt.',
    significance: 'Nước Việt Nam Dân chủ Cộng hòa ra đời, khẳng định thắng lợi của sự chủ động tiến công.',
    image: tuyenngondoclapImg,
    layout: 'layout-hero',
    stage: 'boom'
  }
];

// --- 3. STYLES ---
const TimelineStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&:wght@400;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;600&display=swap');

    :root {
      --primary: #8B2323;
      --accent: #C9A227;
      --bg: #F4F1EA;
      --text: #222;
      --hammer-sickle-local: url('${buaLiemImg}');
    }

    .page-wrapper { background-color: var(--bg); color: var(--text); font-family: 'Manrope', sans-serif; height: 100vh; width: 100%; display: flex; flex-direction: column; overflow: hidden; transition: background-color 1s ease; }
    
    /* Màu nền thay đổi theo giai đoạn */
    .page-wrapper.stage-prep { background-color: #E8E4D9; }
    .page-wrapper.stage-boom { background-color: #FDFBF7; }

    .header-section { text-align: center; padding: 2vh 0 1vh 0; flex-shrink: 0; z-index: 200; position: relative; }
    .header-eyebrow { font-family: 'Manrope', sans-serif; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; color: #555; margin-bottom: 2px; font-weight: 600; }
    .header-title { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 6vh, 3.5rem); font-weight: 700; color: #1a1a1a; margin: 0; line-height: 1.1; }
    .header-desc { font-family: 'Playfair Display', serif; font-size: 1rem; color: #444; margin-top: 5px; max-width: 600px; margin-left: auto; margin-right: auto; line-height: 1.4; }
    
    .timeline-stages { display: flex; justify-content: center; gap: 40px; margin-top: 2vh; margin-bottom: 1vh; }
    .stage { display: flex; alignItems: center; gap: 10px; font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; transition: all 0.3s ease; opacity: 0.4; }
    .stage.active { opacity: 1; transform: scale(1.1); }
    .stage-dot-prep { width: 12px; height: 12px; background: #C9A227; border-radius: 50%; }
    .stage-dot-boom { width: 12px; height: 12px; background: #8B2323; border-radius: 50%; box-shadow: 0 0 10px #8B2323; }

    .timeline-body { display: flex; flex-grow: 1; height: 100%; position: relative; }
    .sidebar { width: 120px; height: 100%; border-right: 1px solid rgba(0,0,0,0.05); display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 40px; z-index: 100; background: rgba(244, 241, 234, 0.5); }
    
    .stage-label {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%) rotate(-90deg);
      font-family: 'Playfair Display', serif;
      font-size: 0.7rem;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      font-weight: 900;
      color: rgba(0,0,0,0.1);
      white-space: nowrap;
      pointer-events: none;
    }

    .nav-dot { 
      width: 14px; 
      height: 14px; 
      background: transparent; 
      border: 2px solid #aaa; 
      border-radius: 50%; 
      cursor: pointer; 
      position: relative; 
      transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1); 
    }

    .nav-dot.prep { border-color: var(--accent); }
    .nav-dot.boom { border-color: var(--primary); }

    .nav-dot:hover, .nav-dot.active { 
      width: 44px; 
      height: 44px; 
      border-width: 2px; 
      background-position: center; 
      background-size: 70%; 
      background-repeat: no-repeat;
      background-image: var(--hammer-sickle-local); 
      transform: scale(1.1); 
    }

    .nav-dot.active.prep { background-color: var(--accent); border-color: #fff; box-shadow: 0 0 15px rgba(201, 162, 39, 0.4); }
    .nav-dot.active.boom { background-color: var(--primary); border-color: #fff; box-shadow: 0 0 15px rgba(139, 35, 35, 0.4); }

    .nav-dot::before { content: attr(data-year); position: absolute; left: 55px; top: 50%; transform: translateY(-50%); font-family: 'Playfair Display', serif; font-weight: 700; opacity: 0; transition: all 0.3s; pointer-events: none; white-space: nowrap; font-size: 1rem; color: #333; }
    .nav-dot:hover::before, .nav-dot.active::before { opacity: 1; left: 50px; }
    
    .main-stage { flex-grow: 1; position: relative; height: 100%; overflow: hidden; perspective: 1200px; }
    .slide { position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0; visibility: hidden; transition: all 0.8s cubic-bezier(0.77, 0, 0.175, 1); display: flex; align-items: center; justify-content: center; transform: translateY(20px) scale(0.98); }
    .slide.active { opacity: 1; visibility: visible; transform: translateY(0) scale(1); }
    
    .bg-year { 
      position: absolute; font-family: 'Playfair Display', serif; font-size: 25vw; font-weight: 900; 
      color: rgba(0,0,0,0.03); z-index: 1; line-height: 1; user-select: none; 
      top: 50%; left: 50%; transform: translate(-50%, -50%); 
    }

    .content-wrap { position: relative; z-index: 5; width: 85%; height: 85%; }

    .meta-info { font-family: 'Playfair Display', serif; font-size: clamp(1.2rem, 3vh, 1.6rem); font-weight: 700; color: #333; letter-spacing: 1px; margin-bottom: 1.5vh; text-transform: uppercase; border-bottom: 3px solid var(--primary); display: inline-block; padding-bottom: 5px; }
    .title { font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 8vh, 4.5rem); color: var(--primary); line-height: 1.1; margin: 1vh 0 2vh 0; }
    .description-box { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); padding: clamp(20px, 4vh, 40px); border-left: 6px solid var(--primary); box-shadow: 0 20px 50px rgba(0,0,0,0.06); max-width: 600px; overflow-y: auto; max-height: 35vh; }
    .full-desc { font-size: clamp(1rem, 2.5vh, 1.3rem); line-height: 1.6; color: #222; margin-bottom: 2vh; text-align: justify; }
    .significance { font-family: 'Playfair Display', serif; font-style: italic; color: var(--primary); font-size: clamp(1.1rem, 2.8vh, 1.4rem); line-height: 1.4; font-weight: 500; }
    
    .visual-img { object-fit: cover; box-shadow: 20px 20px 40px rgba(0,0,0,0.1); border: 1px solid rgba(0,0,0,0.05); }

    .layout-diagonal .visual-img { position: absolute; bottom: 5%; left: 5%; width: 40%; height: auto; z-index: 6; transform: rotate(-1deg); }
    .layout-diagonal .text-group { position: absolute; top: 5%; right: 5%; width: 50%; text-align: right; }
    .layout-diagonal .description-box { margin-left: auto; border-left: none; border-right: 6px solid var(--primary); }

    .layout-split .visual-img { position: absolute; top: 0%; right: 0%; width: 48%; height: 95%; z-index: 4; }
    .layout-split .text-group { position: absolute; top: 15%; left: 5%; width: 44%; z-index: 6; }

    .layout-center .content-wrap { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; gap: 1.5vh; }
    .layout-center .visual-img { max-width: 60%; max-height: 35vh; border: 12px solid #fff; flex-shrink: 0; }
    .layout-center .text-group { max-width: 800px; display: flex; flex-direction: column; align-items: center; }
    .layout-center .description-box { margin: 0 auto; text-align: left; }
    .layout-center .title { font-size: clamp(2rem, 7vh, 4rem); margin: 0.5vh 0 1.5vh 0; }
    .layout-center .meta-info { margin-bottom: 0.5vh; }

    .layout-hero .visual-img { position: absolute; width: 100%; height: 100%; top: 0; left: 0; opacity: 0.3; z-index: 0; filter: grayscale(100%); }
    .layout-hero .content-wrap { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; width: 100%; height: 100%; position: relative; }
    .layout-hero .content-wrap::before { content: ''; position: absolute; inset: 0; background: rgba(244, 241, 234, 0.8); z-index: 1; }
    .layout-hero .text-group { position: relative; z-index: 2; max-width: 1000px; }
    .layout-hero .title { font-size: 6rem; font-weight: 900; background: linear-gradient(135deg, #8B2323, #C9A227); -webkit-background-clip: text; -webkit-text-fill-color: transparent; border: none; padding: 0; }

    @media (max-width: 768px) {
      .page-wrapper { height: auto; min-height: 100vh; overflow: auto; }
      .sidebar { display: none; }
      .main-stage { height: auto; }
    }
  `}</style>
);

export function Timeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentEvent = timelineEvents[activeIndex];

  const timelineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.6 }
    );
    if (timelineRef.current) observer.observe(timelineRef.current);
    return () => observer.disconnect();
  }, []);

  // Hỗ trợ cuộn chuột
  useEffect(() => {
    if (!isVisible) return;

    let lastTime = 0;
    const handleWheel = (e: WheelEvent) => {
      const currentTime = new Date().getTime();
      if (currentTime - lastTime < 800) return; // Debounce 0.8s

      if (e.deltaY > 50) {
        if (activeIndex < timelineEvents.length - 1) {
          // e.preventDefault(); // Ngăn cuộn trang khi đang chuyển slide
          setActiveIndex(prev => prev + 1);
          lastTime = currentTime;
        }
      } else if (e.deltaY < -50) {
        if (activeIndex > 0) {
          // e.preventDefault();
          setActiveIndex(prev => prev - 1);
          lastTime = currentTime;
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeIndex, isVisible]);

  return (
    <>
      <TimelineStyles />
      <div id="lich-su" ref={timelineRef} className={`page-wrapper stage-${currentEvent.stage}`}>
        <div className="header-section">
          <div className="header-eyebrow">Dòng Chảy Lịch Sử</div>
          <h2 className="header-title">15 Năm & 15 Ngày</h2>

          <div className="timeline-stages">
            <div className={`stage ${currentEvent.stage === 'prep' ? 'active' : ''}`} style={{ color: '#C9A227' }}>
              <div className="stage-dot-prep"></div> Tích lũy (Hạ tầng)
            </div>
            <div className={`stage ${currentEvent.stage === 'boom' ? 'active' : ''}`} style={{ color: '#8B2323' }}>
              <div className="stage-dot-boom"></div> Bùng nổ (Thành quả)
            </div>
          </div>
        </div>

        <div className="timeline-body">
          <div className="sidebar">
            <div className="stage-label">GIAI ĐOẠN {currentEvent.stage === 'prep' ? 'TÍCH LŨY' : 'BÙNG NỔ'}</div>
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`nav-dot ${event.stage} ${index === activeIndex ? 'active' : ''}`}
                data-year={event.year}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          <div className="main-stage">
            {timelineEvents.map((event, index) => (
              <div key={event.id} className={`slide ${event.layout} ${index === activeIndex ? 'active' : ''}`}>
                <div className="bg-year">{event.year}</div>
                <div className="content-wrap">
                  <img src={event.image} className="visual-img" alt={event.title} />
                  <div className="text-group">
                    <div className="meta-info" style={{ borderColor: event.stage === 'prep' ? 'var(--accent)' : 'var(--primary)' }}>
                      {event.date} {event.year} {event.location && `| ${event.location}`}
                    </div>
                    <h2 className="title" style={{ color: event.stage === 'prep' ? '#1A1A1A' : 'var(--primary)' }}>{event.title}</h2>
                    <div className="description-box" style={{ borderLeftColor: event.stage === 'prep' ? 'var(--accent)' : 'var(--primary)' }}>
                      <p className="full-desc">{event.fullDesc}</p>
                      <p className="significance">{event.significance}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}