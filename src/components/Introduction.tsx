import { Star } from 'lucide-react';
// Import ảnh từ đường dẫn của bạn
import tuongDaiImg from '../picture/intropic.png';

// --- STYLES ---
const IntroStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&:wght@400;700;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Manrope:wght@300;400;500;600&family=Great+Vibes&display=swap');

    :root {
      --primary: #8B2323;
      --accent: #C9A227;
      --bg: #F4F1EA;
      --text: #222;
    }

    .intro-section {
      background-color: var(--bg);
      color: var(--text);
      font-family: 'Manrope', sans-serif;
      position: relative;
      overflow: hidden;
      background-image: 
        radial-gradient(#d1d1d1 1px, transparent 1px),
        linear-gradient(to bottom, rgba(244, 241, 234, 1), rgba(244, 241, 234, 0.8));
      background-size: 30px 30px, cover;
      padding-top: 10rem;
      padding-bottom: 10rem;
    }

    .bg-number-decor {
      position: absolute;
      top: 5%;
      right: -5%;
      font-family: 'Playfair Display', serif;
      font-size: 30rem;
      font-weight: 900;
      color: rgba(139, 35, 35, 0.03);
      line-height: 1;
      pointer-events: none;
      user-select: none;
      z-index: 0;
    }

    .portrait-frame {
      position: relative;
      padding: 20px;
      background: #fff;
      border: 1px solid rgba(139, 35, 35, 0.1);
      box-shadow: 30px 30px 0px rgba(139, 35, 35, 0.08); 
      width: 100%;
      max-width: 550px;
      margin-left: auto;
      margin-right: auto;
    }
    
    .portrait-frame::before {
      content: '';
      position: absolute;
      inset: 8px;
      border: 3px solid var(--primary);
      z-index: 10;
      pointer-events: none;
    }
    
    .intro-text {
      font-family: 'Manrope', sans-serif;
      font-size: 1.15rem;
      line-height: 1.9;
      color: #333;
      text-align: justify;
    }

    .drop-cap {
      float: left;
      font-family: 'Playfair Display', serif;
      font-size: 6rem;
      line-height: 0.7;
      font-weight: 700;
      color: var(--primary);
      padding-right: 1.2rem;
      padding-top: 0.8rem;
    }

    .highlight-text {
      color: var(--primary);
      font-weight: 600;
      background: linear-gradient(to bottom, transparent 70%, rgba(201, 162, 39, 0.2) 30%);
    }

    .signature-area {
      margin-top: 4rem;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .signature-font {
      font-family: 'Great Vibes', cursive;
      font-size: 3.5rem;
      color: var(--primary);
      transform: rotate(-3deg);
      opacity: 0.9;
    }
  `}</style>
);

export function Introduction() {
  return (
    <>
      <IntroStyles />
      <section id="gioi-thieu" className="intro-section">
        <div className="bg-number-decor">01</div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="text-center mb-28">
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="w-20 h-px bg-[#C9A227]"></div>
              <span className="text-sm font-bold tracking-[0.3em] uppercase text-[#8B2323]" style={{ fontFamily: "'Playfair Display', serif" }}>
                Đặt Vấn Đề
              </span>
              <div className="w-20 h-px bg-[#C9A227]"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ăn May Hay Tất Yếu?
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

            {/* CỘT ẢNH: Sử dụng ảnh tuongDaiImg bạn đã cung cấp */}
            <div className="lg:col-span-5 lg:sticky lg:top-32">
              <div className="portrait-frame">
                <img
                  src={tuongDaiImg}
                  alt="Tượng đài Chủ tịch Hồ Chí Minh"
                  className="w-full h-auto object-cover grayscale sepia-[0.1] contrast-110 aspect-[2/3] block shadow-inner"
                />
              </div>

              <div className="mt-10 text-center">
                <div className="flex items-center justify-center gap-3 text-[#C9A227] mb-3">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <span className="text-xs tracking-[0.4em] uppercase text-[#8B2323] font-black opacity-60">
                  Phân Tích Lịch Sử
                </span>
              </div>
            </div>

            {/* CỘT TEXT */}
            <div className="lg:col-span-7 space-y-10 pt-4">
              <div className="intro-text">
                <span className="drop-cap">"C</span>
                ách mạng Tháng Tám năm 1945 là một trong những trang sử chói lọi nhất của dân tộc Việt Nam. Tuy nhiên, có một số quan điểm cho rằng sự kiện này thành công chỉ đơn thuần là do <span className="highlight-text">"sự ăn may"</span> khi phát xít Nhật đầu hàng Đồng minh, tạo ra "khoảng trống quyền lực".
              </div>

              <div className="intro-text border-l-4 border-[#C9A227]/30 pl-8 py-2">
                Thực chất, cơ hội ngàn năm có một đó tuy là một yếu tố khách quan vô cùng thuận lợi, nhưng <span className="italic text-[#8B2323] font-semibold">nếu không có sự lãnh đạo sáng suốt, chuẩn bị chu đáo và tinh thần chủ động chớp thời cơ của Đảng Cộng sản Đông Dương</span>, cơ hội đó đã vụt mất vào tay các thế lực khác.
              </div>

              <div className="intro-text">
                Nhìn lại lịch sử 15 năm trước cuộc khởi nghĩa, chúng ta thấy rõ một quá trình chuẩn bị không mệt mỏi về đường lối lãnh đạo, phát triển lực lượng vũ trang và xây dựng căn cứ địa. Chiến thắng mùa Thu năm ấy là kết quả <span className="text-[#1A1A1A] font-bold italic">Tất Yếu</span> của lòng yêu nước được tập hợp đúng lúc, đúng chỗ.
              </div>

              <div className="signature-area">
                <div className="w-32 h-px bg-[#8B2323] mb-4 opacity-30"></div>
                <p className="text-xs uppercase tracking-[0.5em] text-gray-400 mb-2 font-bold">Người lãnh đạo tối cao</p>
                <div className="signature-font">Hồ Chí Minh</div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}