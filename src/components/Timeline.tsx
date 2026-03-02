import { useState, useEffect, useRef } from 'react';

// --- 1. IMPORT HÌNH ẢNH ---
import trovetoquocImg from '../picture/pacbo_caobang.png';
import thanhlapDangImg from '../picture/hoinghi_tw8.png';
import raditimduongImg from '../picture/thanhlap_quandoi.png';
import anhsangtuluancuongImg from '../picture/nhatdaochinhphap.png';
import doanketImg from '../picture/hoinghiquansubacki.png';
import dangcotheImg from '../picture/lenhtongkhoinghia.png';
import khoidauhanhtrinhImg from '../picture/khoinghiahanoi.png';
import doanketmotnguoiImg from '../picture/tantrao.png';
import cachmanggiaiphongImg from '../picture/hanoi.png';
import apbucImg from '../utils/picture/apbuc.png';
import danlachuImg from '../utils/picture/danlachu.png';
import bachodixaImg from '../utils/picture/bachodixa.png';
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
  significance?: string;
  image: string;
  layout: 'layout-diagonal' | 'layout-split' | 'layout-center' | 'layout-hero';
  stage: 'prep' | 'boom';
}

const timelineEvents: TimelineEvent[] = [
  // 1. Chuẩn bị lực lượng và chuyển hướng chiến lược (1941 - 1944)
  {
    id: '1941-01',
    year: '1941',
    date: '28/01',
    title: 'Bác Hồ Về Nước',
    location: 'Pác Bó, Cao Bằng',
    shortDesc: 'Trực tiếp lãnh đạo cách mạng',
    fullDesc: 'Lãnh tụ Nguyễn Ái Quốc về nước trực tiếp lãnh đạo cách mạng tại Pác Bó, Cao Bằng.',
    image: trovetoquocImg,
    layout: 'layout-diagonal',
    stage: 'prep'
  },
  {
    id: '1941-05',
    year: '1941',
    date: 'Tháng 5',
    title: 'Hội nghị TW 8',
    location: 'Cao Bằng',
    shortDesc: 'Chuyển hướng chiến lược',
    fullDesc: 'Hội nghị Trung ương Đảng lần thứ 8 quyết định đặt nhiệm vụ giải phóng dân tộc lên hàng đầu và thành lập Mặt trận Việt Minh.',
    image: thanhlapDangImg,
    layout: 'layout-split',
    stage: 'prep'
  },
  {
    id: '1944-12',
    year: '1944',
    date: '22/12',
    title: 'Thành lập Quân Đội',
    location: 'Cao Bằng',
    shortDesc: 'Việt Nam Tuyên truyền Giải phóng quân',
    fullDesc: 'Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân (tiền thân của Quân đội Nhân dân Việt Nam).',
    image: raditimduongImg,
    layout: 'layout-center',
    stage: 'prep'
  },
  // 2. Cao trào kháng Nhật cứu nước (3/1945 - 8/1945)
  {
    id: '1945-03',
    year: '1945',
    date: '09/03',
    title: 'Nhật Đảo Chính Pháp',
    location: 'Đông Dương',
    shortDesc: 'Cao trào kháng Nhật',
    fullDesc: 'Nhật đảo chính Pháp độc chiếm Đông Dương. Ban Thường vụ Trung ương Đảng ra chỉ thị quan trọng: "Nhật - Pháp bắn nhau và hành động của chúng ta".',
    image: anhsangtuluancuongImg,
    layout: 'layout-diagonal',
    stage: 'boom'
  },
  {
    id: '1945-04',
    year: '1945',
    date: 'Tháng 4',
    title: 'Hội nghị Quân sự Bắc Kỳ',
    location: 'Bắc Kỳ',
    shortDesc: 'Việt Nam Giải phóng quân',
    fullDesc: 'Hội nghị Quân sự cách mạng Bắc Kỳ thống nhất các lực lượng vũ trang thành Việt Nam Giải phóng quân.',
    image: doanketImg,
    layout: 'layout-split',
    stage: 'boom'
  },
  {
    id: '1945-08-13',
    year: '1945',
    date: '13/08',
    title: 'Lệnh Tổng Khởi Nghĩa',
    location: 'Toàn quốc',
    shortDesc: 'Phát động Tổng khởi nghĩa',
    fullDesc: 'Phát động Tổng khởi nghĩa trên toàn quốc ngay khi Nhật hoàng tuyên bố đầu hàng Đồng minh.',
    image: dangcotheImg,
    layout: 'layout-center',
    stage: 'boom'
  },
  {
    id: '1945-08-14',
    year: '1945',
    date: '14-15/08',
    title: 'Hội nghị Tân Trào',
    location: 'Tân Trào',
    shortDesc: 'Chớp thời cơ vàng',
    fullDesc: 'Hội nghị toàn quốc của Đảng tại Tân Trào quyết định phương châm đánh chiếm những nơi chắc thắng.',
    image: khoidauhanhtrinhImg,
    layout: 'layout-diagonal',
    stage: 'boom'
  },
  {
    id: '1945-08-16',
    year: '1945',
    date: '16/08',
    title: 'Đại hội Quốc dân Tân Trào',
    location: 'Tân Trào',
    shortDesc: 'Ủy ban Dân tộc Giải phóng',
    fullDesc: 'Đại hội Quốc dân Tân Trào thông qua 10 chính sách của Việt Minh và bầu ra Ủy ban Dân tộc Giải phóng Việt Nam do Hồ Chí Minh làm Chủ tịch.',
    image: doanketmotnguoiImg,
    layout: 'layout-split',
    stage: 'boom'
  },
  // 3. Diễn biến Tổng khởi nghĩa Tháng Tám
  {
    id: '1945-08-19',
    year: '1945',
    date: '19/08',
    title: 'Khởi nghĩa Hà Nội',
    location: 'Hà Nội',
    shortDesc: 'Thủ đô giành chính quyền',
    fullDesc: 'Khởi nghĩa thắng lợi tại Thủ đô Hà Nội.',
    image: cachmanggiaiphongImg,
    layout: 'layout-center',
    stage: 'boom'
  },
  {
    id: '1945-08-23',
    year: '1945',
    date: '23/08',
    title: 'Khởi nghĩa Huế',
    location: 'Huế',
    shortDesc: 'Trung Kỳ giành chính quyền',
    fullDesc: 'Khởi nghĩa thắng lợi tại Huế.',
    image: apbucImg,
    layout: 'layout-diagonal',
    stage: 'boom'
  },
  {
    id: '1945-08-25',
    year: '1945',
    date: '25/08',
    title: 'Khởi nghĩa Sài Gòn',
    location: 'Sài Gòn',
    shortDesc: 'Dẫn dắt bởi Việt Minh Tiền phong',
    fullDesc: 'Khởi nghĩa thắng lợi tại Sài Gòn dưới sự chỉ đạo của nhóm Việt Minh Tiền phong.',
    image: danlachuImg,
    layout: 'layout-split',
    stage: 'boom'
  },
  {
    id: '1945-08-30',
    year: '1945',
    date: '30/08',
    title: 'Vua Bảo Đại Thoái Vị',
    location: 'Ngọ Môn, Huế',
    shortDesc: 'Chấm dứt chế độ phong kiến',
    fullDesc: 'Vua Bảo Đại thoái vị tại Ngọ Môn (Huế), chấm dứt chế độ phong kiến.',
    image: bachodixaImg,
    layout: 'layout-center',
    stage: 'boom'
  },
  {
    id: '1945-09-02',
    year: '1945',
    date: '02/09',
    title: 'Tuyên Ngôn Độc Lập',
    location: 'Quảng trường Ba Đình',
    shortDesc: 'Ngày Quốc Khánh',
    fullDesc: 'Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình, khai sinh nước Việt Nam Dân chủ Cộng hòa.',
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
                      {event.significance && <p className="significance">{event.significance}</p>}
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