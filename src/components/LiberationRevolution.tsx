// IMPORT ẢNH CỦA BẠN (Tạm giữ thư viện ảnh hiện có, có thể thay đổi sau nếu có ảnh phù hợp hơn)
import cachMangImg from '../utils/picture/cachmanggiaiphong.png';

// --- DỮ LIỆU ---
const points = [
  {
    id: '01',
    title: 'Xây dựng lực lượng chính trị',
    content: 'Không thụ động chờ thời, Đảng ta đã bền bỉ suốt 15 năm (1930-1945) đi sâu vào quần chúng, giác ngộ và tổ chức nhân dân thành một đội quân chính trị hùng hậu, rộng khắp cả nước.',
  },
  {
    id: '02',
    title: 'Phát triển lực lượng vũ trang',
    content: 'Từ các đội du kích nhỏ lẻ, Đảng dần tiến tới thành lập Đội Việt Nam Tuyên truyền Giải phóng quân (12/1944), chu đáo rèn giũa "thanh gươm" quân sự làm nòng cốt cho khởi nghĩa.',
  },
  {
    id: '03',
    title: 'Thiết lập căn cứ địa',
    content: 'Khu giải phóng Việt Bắc bao gồm Cao Bằng, Bắc Kạn, Lạng Sơn, Thái Nguyên, Tuyên Quang, Hà Giang được củng cố làm căn cứ địa vững chắc, tạo bàn đạp tiến về đồng bằng.',
  },
  {
    id: '04',
    title: 'Nắm bắt biến động toàn cầu',
    content: 'Đảng theo dõi sát sao cục diện Chiến tranh thế giới thứ 2, nhạy bén ra Chỉ thị "Nhật - Pháp bắn nhau và hành động của chúng ta" (3/1945) làm dấy lên cao trào kháng Nhật cứu nước.',
  },
  {
    id: '05',
    title: 'Nghệ thuật chớp thời cơ',
    content: 'Chỉ trong 15 ngày (giữa tháng 8/1945), Đảng quyết đoán phát động Tổng khởi nghĩa giành chính quyền trên toàn quốc khi khoảng trống quyền lực xuất hiện, trước khi Đồng minh vào Đông Dương.',
  }
];

// --- STYLES ---
const LiberationStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&:wght@400;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;500;600&display=swap');

    :root {
      --primary: #8B2323;
      --accent: #C9A227;
      --bg: #F4F1EA;
      --text: #222;
    }

    .liberation-section {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Manrope', sans-serif;
      position: relative;
      overflow-x: hidden; /* Ngăn scroll ngang nhưng vẫn giữ visible cho Y để sticky hoạt động */
      background-image: radial-gradient(#d1d1d1 1px, transparent 1px);
      background-size: 30px 30px;
      padding-top: 8rem;
      padding-bottom: 8rem;
    }

    /* CARD DESIGN (Chuyển về viền trái cho danh sách dọc) */
    .point-card {
      background: #fff;
      border-left: 5px solid var(--primary); /* Viền trái đậm */
      padding: 2rem 1.5rem 2rem 5rem; /* Padding trái lớn để né số ID */
      position: relative;
      transition: all 0.3s ease;
      box-shadow: 5px 5px 20px rgba(0,0,0,0.03);
      border-radius: 0 4px 4px 0;
      margin-bottom: 2rem;
    }

    .point-card:hover {
      transform: translateX(10px);
      box-shadow: 10px 10px 30px rgba(139, 35, 35, 0.1);
      border-left-color: var(--accent);
    }

    /* Số ID mờ nằm ở đầu thẻ */
    .point-id {
      font-family: 'Playfair Display', serif;
      font-weight: 900;
      color: rgba(139, 35, 35, 0.1);
      font-size: 3rem;
      position: absolute;
      top: 1.5rem;
      left: 1rem;
      line-height: 1;
      transition: all 0.3s;
    }

    .point-card:hover .point-id {
      color: var(--accent);
      opacity: 0.5;
      transform: scale(1.1);
    }

    .point-title {
      font-family: 'Playfair Display', serif;
      font-size: 1.4rem;
      font-weight: 700;
      color: #1A1A1A;
      margin-bottom: 0.8rem;
    }

    .point-content {
      font-family: 'Manrope', sans-serif;
      color: #555;
      line-height: 1.6;
      font-size: 1rem;
      text-align: justify;
    }

    /* IMAGE FRAME STYLE */
    .image-frame {
      position: relative;
      padding: 12px;
      border: 2px solid var(--primary);
      background: #fff;
      box-shadow: 20px 20px 0px rgba(139, 35, 35, 0.1); /* Bóng cứng tạo khối */
    }
    
    .image-frame::before {
      content: '';
      position: absolute;
      inset: -6px;
      border: 1px dashed var(--accent);
      z-index: -1;
    }

    .image-caption {
      margin-top: 1.5rem;
      text-align: center;
      font-family: 'Manrope', sans-serif;
      font-size: 0.9rem;
      font-style: italic;
      color: #666;
    }
    
    /* Quote Box dưới ảnh */
    .quote-badge {
        margin-top: 2rem;
        background: #fff;
        border: 1px solid rgba(0,0,0,0.05);
        border-left: 4px solid var(--accent);
        padding: 1.5rem;
        box-shadow: 0 10px 30px rgba(0,0,0,0.05);
    }
  `}</style>
);

export function LiberationRevolution() {
  return (
    <>
      <LiberationStyles />
      <section id="cach-mang-giai-phong" className="liberation-section">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* HEADER SECTION */}
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-12 h-px bg-[#C9A227]"></div>
              <span
                className="text-sm font-bold tracking-[0.2em] uppercase text-[#8B2323]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                BÀI HỌC KINH NGHIỆM
              </span>
              <div className="w-12 h-px bg-[#C9A227]"></div>
            </div>

            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Tầm Nhìn Chiến Lược
            </h2>

            <p
              className="text-lg text-gray-600 max-w-3xl mx-auto italic"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Cách mạng Tháng Tám không phải là một sự tình cờ, mà là kết tinh nghệ thuật lãnh đạo tài tình của Đảng Cộng sản Đông Dương sau quá trình chuẩn bị toàn diện, chủ động và kiên cường.
            </p>
          </div>

          {/* GRID: CONTENT LEFT - IMAGE RIGHT */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* 1. LEFT COLUMN: CONTENT (Các luận điểm) */}
            <div className="space-y-4">
              {points.map((point, index) => (
                <div key={index} className="point-card group">
                  {/* Số ID nằm bên trái */}
                  <span className="point-id">{point.id}</span>

                  <div className="relative z-10">
                    <h3 className="point-title group-hover:text-[#8B2323] transition-colors">
                      {point.title}
                    </h3>
                    <p className="point-content">
                      {point.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* 2. RIGHT COLUMN: IMAGE (Sticky - Trượt theo nội dung) */}
            <div className="lg:sticky lg:top-32">
              <div className="image-frame">
                <img
                  src={cachMangImg}
                  alt="Khởi nghĩa giành chính quyền"
                  className="w-full h-auto object-cover grayscale sepia-[0.2] contrast-110 block"
                />
              </div>
              <div className="image-caption">
                Quyết tâm giành độc lập "dù phải đốt cháy dãy Trường Sơn"
              </div>

              {/* Hộp trích dẫn nhỏ bổ trợ */}
              <div className="quote-badge">
                <p className="text-[#8B2323] font-bold text-[1.1rem] mb-2 font-serif text-center">
                  "Sự chuẩn bị quyết định thắng lợi, thời cơ là ngọn lửa thổi bùng thành quả."
                </p>
                <div className="flex justify-center mt-2 opacity-50">
                  <div className="w-2 h-2 rounded-full bg-[#C9A227] mx-1"></div>
                  <div className="w-2 h-2 rounded-full bg-[#C9A227] mx-1"></div>
                  <div className="w-2 h-2 rounded-full bg-[#C9A227] mx-1"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}