import { useState, useRef, useEffect } from 'react';
import tuyenNgonDocLapAudio from '../audio/Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập.mp3';

// Trang trái Phần III (trang 6)
export function Part3LeftPage() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio(tuyenNgonDocLapAudio);
        audioRef.current.onended = () => setIsPlaying(false);

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        }
    }, []);

    const toggleAudio = () => {
        if (!audioRef.current) return;
        if (isPlaying) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            setIsPlaying(false);
        } else {
            audioRef.current.play().catch(e => console.error("Error playing audio:", e));
            setIsPlaying(true);
        }
    };

    return (
        <div style={{
            animation: 'pageIn 0.6s ease-out',
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            color: '#222'
        }}>
            {/* Header đồng bộ */}
            <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ 
                    fontFamily: "'Playfair Display', serif", 
                    fontSize: '0.7rem', 
                    letterSpacing: '2px', 
                    color: '#8B2323', 
                    fontWeight: 'bold',
                    display: 'block',
                    marginBottom: '0.2rem'
                }}>
                    HỆ THỐNG QUAN ĐIỂM
                </span>
                <h2 style={{ 
                    fontFamily: "'Playfair Display', serif", 
                    fontSize: '1.8rem', 
                    color: '#1A1A1A', 
                    margin: 0, 
                    fontWeight: '900',
                    borderBottom: '2px solid #8B2323',
                    display: 'inline-block',
                    paddingBottom: '5px'
                }}>
                    Phần III
                </h2>
                <h3 style={{ 
                    fontFamily: "'Playfair Display', serif", 
                    fontSize: '1rem', 
                    color: '#8B2323', 
                    marginTop: '0.5rem', 
                    fontStyle: 'italic',
                    fontWeight: 'bold'
                }}>
                    Độc Lập Thật Sự & Triệt Để
                </h3>
            </div>

            {/* Câu nói chủ đạo - Bố cục trang trọng */}
            <div style={{
                padding: '1rem',
                borderLeft: '3px solid #C9A227',
                backgroundColor: 'rgba(201, 162, 39, 0.05)',
                marginBottom: '1.2rem',
            }}>
                <p style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: '1.05rem',
                    color: '#1A1A1A',
                    fontStyle: 'italic',
                    fontWeight: '600',
                    lineHeight: '1.5',
                    margin: 0
                }}>
                    "Nước độc lập mà dân không hưởng hạnh phúc tự do, thì độc lập cũng chẳng có nghĩa lý gì."
                </p>
            </div>

            <p style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#444', lineHeight: '1.6', marginBottom: '1.2rem', textAlign: 'justify' }}>
                Hồ Chí Minh quan niệm độc lập phải nắm <strong>thực quyền</strong> trên mọi lĩnh vực: Quân sự, Ngoại giao, Kinh tế và Chính trị.
            </p>

            {/* Audio Quote Box - Chỉnh lại màu sắc đồng bộ */}
            <div
                onClick={toggleAudio}
                style={{
                    backgroundColor: '#fff',
                    padding: '1rem',
                    borderRadius: '2px',
                    border: isPlaying ? '1px solid #8B2323' : '1px solid rgba(0,0,0,0.1)',
                    borderLeft: '4px solid #8B2323',
                    marginBottom: '1rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isPlaying ? '0 4px 12px rgba(139, 35, 35, 0.1)' : 'none'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <p style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#1A1A1A', lineHeight: '1.5', fontStyle: 'italic', margin: 0 }}>
                        "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập."
                    </p>
                    <span style={{ fontSize: '1.2rem', filter: isPlaying ? 'none' : 'grayscale(1)' }}>
                        {isPlaying ? '🔊' : '🔈'}
                    </span>
                </div>
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.7rem', color: '#8B2323', marginTop: '0.6rem', marginBottom: 0, fontWeight: 'bold', textAlign: 'right' }}>
                    — TUYÊN NGÔN ĐỘC LẬP (1945)
                </p>
            </div>

            {/* Quote box 2 - Phong cách tài liệu cũ */}
            <div style={{
                padding: '1rem',
                border: '1px dashed rgba(139, 35, 35, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.5)',
                position: 'relative'
            }}>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.85rem', color: '#444', lineHeight: '1.5', fontStyle: 'italic', margin: 0 }}>
                    "Độc lập mà không có quân đội riêng, ngoại giao riêng, kinh tế riêng thì không phải là độc lập."
                </p>
            </div>

            <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', color: '#8B2323', fontWeight: 'bold' }}>06</div>
        </div >
    );
}

// Trang phải Phần III (trang 7)
export function Part3RightPage() {
    return (
        <div style={{ animation: 'pageIn 0.6s ease-out', position: 'relative', height: '100%', color: '#222' }}>
            {/* Header phong cách chương sách */}
            <div style={{
                borderBottom: '1px solid #C9A227',
                paddingBottom: '0.5rem',
                marginBottom: '1.5rem',
                textAlign: 'center'
            }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', color: '#8B2323', margin: 0, fontWeight: 'bold', letterSpacing: '1px' }}>
                    Phê Phán "Độc Lập Giả Hiệu"
                </h3>
            </div>

            <p style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#444', marginBottom: '1rem', lineHeight: '1.6', textAlign: 'center' }}>
                Người vạch trần bản chất thực dân núp bóng "bảo hộ" hoặc "trao trả độc lập giả tạo":
            </p>

            {/* Grid các biểu hiện - Chỉnh lại thành dạng thẻ bài đồng bộ */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.5rem' }}>
                {['Bóc lột kinh tế', 'Áp bức chính trị', 'Nô dịch văn hóa', 'Không quyền tự quyết'].map((item, idx) => (
                    <div key={idx} style={{ 
                        border: '1px solid rgba(139, 35, 35, 0.15)', 
                        padding: '0.6rem', 
                        backgroundColor: '#fff',
                        textAlign: 'center',
                        boxShadow: '2px 2px 0px rgba(201, 162, 39, 0.2)'
                    }}>
                        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.75rem', color: '#8B2323', fontWeight: 'bold' }}>{item}</span>
                    </div>
                ))}
                <div style={{ 
                    gridColumn: 'span 2',
                    border: '1px solid #8B2323', 
                    padding: '0.6rem', 
                    backgroundColor: '#8B2323',
                    textAlign: 'center'
                }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', color: '#fff', fontWeight: 'bold', letterSpacing: '1px' }}>CHẾ ĐỘ ĂN CƯỚP</span>
                </div>
            </div>

            {/* Kết luận - Highlight theo phong cách chính luận */}
            <div style={{
                backgroundColor: 'rgba(139, 35, 35, 0.03)',
                padding: '1rem',
                border: '1px solid rgba(139, 35, 35, 0.1)',
                position: 'relative'
            }}>
                <div style={{ position: 'absolute', top: '-10px', left: '10px', backgroundColor: '#F4F1EA', padding: '0 5px' }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '0.7rem', color: '#C9A227', fontWeight: 'bold' }}>1948</span>
                </div>
                <p style={{ fontFamily: "'Lora', serif", fontSize: '0.9rem', color: '#1A1A1A', lineHeight: '1.6', margin: 0 }}>
                    Khi Pháp dựng chính quyền Bảo Đại, Người gọi đó là <strong style={{ color: '#8B2323' }}>"Độc lập bánh vẽ"</strong> — thực chất chỉ là chính quyền bù nhìn tay sai.
                </p>
            </div>

            {/* Chú thích - Typography tinh tế */}
            <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <p style={{
                    fontFamily: "'Lora', serif",
                    fontSize: '0.75rem',
                    color: '#666',
                    lineHeight: '1.5',
                    fontStyle: 'italic'
                }}>
                    * <strong style={{ color: '#8B2323' }}>Độc lập giả hiệu:</strong> Là nền độc lập hình thức, không có thực quyền. Mọi quyền tự quyết tối cao vẫn nằm trong tay thực dân, đế quốc.
                </p>
            </div>

            <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontFamily: "'Playfair Display', serif", fontSize: '0.8rem', color: '#8B2323', fontWeight: 'bold' }}>07</div>
        </div >
    );
}