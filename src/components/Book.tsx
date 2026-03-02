import { useState, useRef, useEffect } from 'react';
import { User } from 'lucide-react';
import { Part1Page2 } from './Part1Page2';
import { Part2LeftPage } from './Part2LeftPage';
import { Part2RightPage } from './Part2RightPage';
import { Part3LeftPage, Part3RightPage } from './Part3Page';

import { Part4LeftPage, Part4RightPage } from './Part4Page';
import { TransitionLeftPage, TransitionRightPage } from './TransitionPage';
import { Part5LeftPage, Part5RightPage } from './Part5Page';
import { Part5Page2LeftPage, Part5Page2RightPage } from './Part5Page2';
import { Part6LeftPage, Part6RightPage } from './Part6Page';
import { Part7LeftPage, Part7RightPage } from './Part7Page';
import { Part8LeftPage, Part8RightPage } from './Part8Page';
import { Part8Page2LeftPage, Part8Page2RightPage } from './Part8Page2';
import { Part9LeftPage, Part9RightPage } from './Part9Page';
import tuyenNgonAudio from '../audio/cd80510c4c31f8f1b26e234bcfa7658c01_-_Tuyen_ngon_doc_lap_103854.mp3';
import tatCaDanTocAudio from '../audio/tatrcadantoctrenthegioideusinhrabinhdang.mp3';
import hoChiMinhImage from '../Screenshot 2026-01-15 001843.png';


interface BookProps {
    onClose: () => void;
    onShowBiography?: () => void;
}

export function Book({ onClose, onShowBiography }: BookProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const [playingQuote, setPlayingQuote] = useState<string | null>(null);
    const currentAudioRef = useRef<HTMLAudioElement | null>(null);

    // Cleanup audio when component unmounts (close book)
    useEffect(() => {
        return () => {
            if (currentAudioRef.current) {
                currentAudioRef.current.pause();
                currentAudioRef.current = null;
            }
        };
    }, []);

    // Load confetti script
    useEffect(() => {
        const scriptId = 'confetti-script';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js';
            script.id = scriptId;
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    // Keyboard navigation: Arrow keys to flip pages
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                // Right arrow or Space -> Next page
                if (currentPage < pages.length - 1) {
                    stopAudio();
                    setCurrentPage((prev: number) => prev + 1);
                }
            } else if (e.key === 'ArrowLeft') {
                // Left arrow -> Previous page
                if (currentPage > 0) {
                    stopAudio();
                    setCurrentPage((prev: number) => prev - 1);
                }
            } else if (e.key === 'Escape') {
                // Escape -> Close book
                onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentPage, onClose]);

    // Helper function to stop current audio
    const stopAudio = () => {
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current = null;
        }
        setPlayingQuote(null);
    };


    // Audio clips for Ho Chi Minh's quotes
    const audioQuotes: { [key: string]: string } = {
        'khong-co-gi-quy-hon': tuyenNgonAudio, // Tạm thời dùng chung file (cần file riêng cho chính xác)
        'tat-ca-moi-nguoi': tatCaDanTocAudio, // ✅ Audio đã cắt: "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng..."
        'doc-lap-tu-do-quyen': tuyenNgonAudio, // Tạm thời dùng chung
    };

    // Debug logging
    console.log('Loaded audio sources:', {
        tuyenNgon: tuyenNgonAudio,
        tatCa: tatCaDanTocAudio
    });

    const playQuote = (quoteId: string) => {
        console.log('=== playQuote called ===');
        console.log('quoteId:', quoteId);
        console.log('audioQuotes:', audioQuotes);
        console.log('audioQuotes[quoteId]:', audioQuotes[quoteId]);

        // Stop current audio if any
        if (currentAudioRef.current) {
            currentAudioRef.current.pause();
            currentAudioRef.current = null;
        }

        // If clicking the same quote that is playing, just stop it (toggle off)
        if (playingQuote === quoteId) {
            setPlayingQuote(null);
            return;
        }

        // Play new quote
        setPlayingQuote(quoteId);

        const audioSrc = audioQuotes[quoteId];
        console.log('Creating Audio with src:', audioSrc);

        const audio = new Audio(audioSrc);
        audio.volume = 1.0; // Đảm bảo volume max
        currentAudioRef.current = audio;

        console.log('Attempting to play...');
        audio.play()
            .then(() => {
                console.log('✅ Audio playing successfully!');
            })
            .catch((err) => {
                console.error('❌ Audio playback failed:', err);
                setPlayingQuote(null);
            });

        audio.onended = () => {
            console.log('Audio ended');
            setPlayingQuote(null);
            currentAudioRef.current = null;

            // Bùm! Pháo giấy bay tung tóe (Confetti effect)
            if ((window as any).confetti) {
                (window as any).confetti({
                    particleCount: 150,
                    spread: 70,
                    origin: { y: 0.6 }
                });
            }
        };
    };

    // Detailed book pages based on research
    const pages = [
        {
            title: "Tư Tưởng Hồ Chí Minh",
            subtitle: "Về Độc Lập Dân Tộc",
            content: `Tư tưởng Hồ Chí Minh về độc lập dân tộc là một hệ thống quan điểm toàn diện, sâu sắc và nhân văn cao cả về vấn đề cơ bản nhất của dân tộc Việt Nam trong thời kỳ đấu tranh giải phóng.

Người đã làm sáng tỏ bản chất, ý nghĩa, phạm vi và con đường thực hiện độc lập dân tộc một cách khoa học và thực tiễn, tạo nền tảng tư tưởng vững chắc cho cách mạng Việt Nam.

Trước hết, chúng ta cần hiểu rõ những vấn đề cơ bản về độc lập dân tộc trong tư tưởng Hồ Chí Minh.`,
            showImage: true,
            hasAudio: false
        },
        {
            title: "Phần I",
            subtitle: "Độc Lập, Tự Do - Quyền Thiêng Liêng, Bất Khả Xâm Phạm của Tất Cả Các Dân Tộc",
            content: `Lịch sử dựng nước và giữ nước của dân tộc Việt Nam từ ngàn xưa đến nay gắn liền với truyền thống yêu nước, đấu tranh chống giặc ngoại xâm.

Điều đó nói lên một khát khao to lớn của dân tộc ta là: luôn mong muốn một nền độc lập cho dân tộc, tự do cho nhân dân.

Đó cũng là một giá trị tinh thần thiêng liêng, bất hủ của dân tộc, là động lực mạnh mẽ thúc đẩy mọi người Việt Nam đứng lên đấu tranh giành lại quyền sống, quyền làm người.`,
            showImage: false,
            hasAudio: false
        },
        {
            title: "Phần II",
            subtitle: "Gắn Với Tự Do, Cơm No, Áo Ấm, Và Hạnh Phúc của Nhân Dân",
            content: `Xuyên suốt tư tưởng của Người:

• Độc lập dân tộc phải gắn với tự do của nhân dân.

• Độc lập phải thiết thực, tức là phải gắn với cơm no, áo ấm và hạnh phúc của nhân dân.

Theo Hồ Chí Minh, độc lập dân tộc phải gắn với tự do của nhân dân. Ngoài ra, độc lập cũng phải gắn với cơm no, áo ấm và hạnh phúc của nhân dân.`,
            showImage: false
        },

        {
            title: "Phần III",
            subtitle: "Độc Lập Thật Sự, Hoàn Toàn Và Triệt Để",
            content: "Nội dung Part III", // Placeholder, rendering handled by Part3Page component
            showImage: false
        },

        {
            title: "Phần IV",
            subtitle: "Độc lập dân tộc gắn liền với thống nhất và toàn vẹn lãnh thổ",
            content: "Nội dung Part IV", // Placeholder, rendering handled by Part4Page component
            showImage: false
        },
        {
            title: "Phần V - Giới thiệu",
            subtitle: "Tư tưởng HCM về con đường đạt được độc lập",
            content: "Trang chuyển tiếp", // Transition page before Part V
            showImage: false
        },
        {
            title: "Phần V",
            subtitle: "Con đường cách mạng vô sản",
            content: "Nội dung Part V", // Placeholder, rendering handled by Part5Page component
            showImage: false
        },
        {
            title: "Phần V - Chi tiết",
            subtitle: "So sánh đường lối cách mạng",
            content: "Nội dung Part V Page 2", // Placeholder, rendering handled by Part5Page2 component
            showImage: false
        },
        {
            title: "Phần VI",
            subtitle: "Đảng Cộng Sản Lãnh Đạo Cách Mạng",
            content: "Nội dung Part VI", // Placeholder, rendering handled by Part6Page component
            showImage: false
        },
        {
            title: "Phần VII",
            subtitle: "Lực Lượng Cách Mạng Giải Phóng Dân Tộc",
            content: "Nội dung Part VII", // Placeholder, rendering handled by Part7Page component
            showImage: false
        },
        {
            title: "Phần VIII",
            subtitle: "Chính Quốc và Thuộc Địa",
            content: "Nội dung Part VIII Page 1",
            showImage: false
        },
        {
            title: "Phần VIII",
            subtitle: "Luận Điểm Sáng Tạo",
            content: "Nội dung Part VIII Page 2",
            showImage: false
        },
        {
            title: "Phần IX",
            subtitle: "Phương Pháp Bạo Lực Cách Mạng",
            content: "Nội dung Part IX",
            showImage: false
        },

    ];

    const nextPage = () => {
        if (currentPage < pages.length - 1) {
            stopAudio(); // Dừng audio khi chuyển trang
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 0) {
            stopAudio(); // Dừng audio khi chuyển trang
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                animation: 'fadeIn 0.5s ease-out'
            }}
        >
            {/* Close button */}
            <button
                onClick={onClose}
                className="transition-all duration-300"
                style={{
                    position: 'fixed',
                    top: '2rem',
                    right: '2rem',
                    zIndex: 100,
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    lineHeight: '1'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.borderColor = 'white';
                    e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                ×
            </button>

            {/* Book container */}
            <div
                className="relative"
                style={{
                    perspective: '2000px',
                    animation: 'bookOpen 1s ease-out'
                }}
            >
                {/* Bìa sách - màu đỏ đô giống hộ chiếu Việt Nam */}
                <div style={{
                    background: 'linear-gradient(135deg, #8B0000 0%, #660000 50%, #4A0000 100%)',
                    padding: '12px',
                    borderRadius: '4px 12px 12px 4px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.5), inset 0 0 60px rgba(0,0,0,0.3)',
                    border: '2px solid #C9A227',
                    position: 'relative'
                }}>
                    {/* Họa tiết viền vàng */}
                    <div style={{
                        position: 'absolute',
                        top: '6px',
                        left: '6px',
                        right: '6px',
                        bottom: '6px',
                        border: '1px solid rgba(201, 162, 39, 0.5)',
                        borderRadius: '2px 10px 10px 2px',
                        pointerEvents: 'none'
                    }}></div>

                    <div
                        className="relative"
                        style={{
                            width: '1000px',
                            height: '700px',
                            maxWidth: '88vw',
                            maxHeight: '82vh',
                            transformStyle: 'preserve-3d',
                            borderRadius: '2px 8px 8px 2px',
                            overflow: 'hidden'
                        }}
                    >
                        {/* LEFT PAGE */}
                        <div
                            className="absolute left-0 top-0"
                            style={{
                                width: '50%',
                                height: '100%',
                                backgroundColor: (currentPage === 2 || currentPage === 4 || currentPage === 5 || currentPage === 6 || currentPage === 7 || currentPage === 8 || currentPage === 9 || currentPage === 10 || currentPage === 11 || currentPage === 12) ? 'transparent' : '#FDFBF7',
                                padding: (currentPage === 2 || currentPage === 4 || currentPage === 5 || currentPage === 6 || currentPage === 7 || currentPage === 8 || currentPage === 9 || currentPage === 10 || currentPage === 11 || currentPage === 12) ? '0' : '60px 50px',
                                boxShadow: (currentPage === 2 || currentPage === 4 || currentPage === 5 || currentPage === 6 || currentPage === 7 || currentPage === 8 || currentPage === 9 || currentPage === 10 || currentPage === 11 || currentPage === 12) ? 'none' : 'inset -10px 0 20px rgba(0,0,0,0.1)',
                                borderLeft: (currentPage === 2 || currentPage === 4 || currentPage === 5 || currentPage === 6 || currentPage === 7 || currentPage === 8 || currentPage === 9 || currentPage === 10 || currentPage === 11 || currentPage === 12) ? 'none' : '2px solid #d4c5a0',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden'
                            }}
                        >
                            {currentPage > 0 ? (
                                currentPage === 2 ? (
                                    /* Phần II - Trang trái: nền đỏ đô với video */
                                    <Part2LeftPage />
                                ) : currentPage === 3 ? (
                                    /* Phần III - Trang trái: sơ đồ so sánh */
                                    <Part3LeftPage />
                                ) : currentPage === 4 ? (
                                    /* Phần IV - Trang trái: thống nhất */
                                    <Part4LeftPage />
                                ) : currentPage === 5 ? (
                                    /* Trang chuyển tiếp - Giới thiệu Part V */
                                    <TransitionLeftPage />
                                ) : currentPage === 6 ? (
                                    /* Phần V - Trang trái: timeline cách mạng */
                                    <Part5LeftPage />
                                ) : currentPage === 7 ? (
                                    /* Phần V Page 2 - Trang trái: so sánh đường lối */
                                    <Part5Page2LeftPage />
                                ) : currentPage === 8 ? (
                                    /* Phần VI - Trang trái: Đảng Cộng Sản lãnh đạo */
                                    <Part6LeftPage />
                                ) : currentPage === 9 ? (
                                    /* Phần VII - Trang trái: Lực lượng cách mạng */
                                    <Part7LeftPage />
                                ) : currentPage === 10 ? (
                                    /* Phần VIII Page 1 - Trang trái: Chính Quốc vs Thuộc Địa */
                                    <Part8LeftPage />
                                ) : currentPage === 11 ? (
                                    /* Phần VIII Page 2 - Trang trái: Luận điểm sáng tạo */
                                    <Part8Page2LeftPage />
                                ) : currentPage === 12 ? (
                                    /* Phần IX - Trang trái: Phương pháp bạo lực cách mạng */
                                    <Part9LeftPage />
                                ) : (
                                    <div style={{ animation: 'pageIn 0.6s ease-out' }}>
                                        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem', color: '#1A1A1A', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                            {pages[currentPage]?.title}
                                        </h2>
                                        <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: '#7B2D3E', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                            {pages[currentPage]?.subtitle}
                                        </h3>
                                        <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.95rem', color: '#4A4A4A', lineHeight: '1.7', textAlign: 'justify', whiteSpace: 'pre-line' }}>
                                            {pages[currentPage]?.content}
                                        </p>
                                        <div style={{ position: 'absolute', bottom: '40px', left: '50px', fontFamily: "'Lora', Georgia, serif", fontSize: '0.9rem', color: '#999' }}>
                                            {currentPage * 2}
                                        </div>
                                    </div>
                                )
                            ) : (
                                /* Trang trái đầu tiên - hiển thị ảnh Bác Hồ */
                                currentPage === 0 && pages[0]?.showImage && (
                                    <div style={{ animation: 'pageIn 0.6s ease-out', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
                                        <div style={{ border: '3px solid #d4c5a0', padding: '8px', backgroundColor: '#f5f5f0', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                                            <img
                                                src={hoChiMinhImage}
                                                alt="Chân dung Chủ tịch Hồ Chí Minh"
                                                style={{ width: '100%', maxWidth: '360px', height: 'auto', maxHeight: '420px', objectFit: 'contain', filter: 'sepia(0.3) contrast(1.1)', display: 'block' }}
                                            />
                                            <div style={{ marginTop: '0.75rem', textAlign: 'center', fontFamily: "'Lora', Georgia, serif", fontSize: '0.8rem', color: '#888', fontStyle: 'italic' }}>
                                                Chủ tịch Hồ Chí Minh<br />(1890-1969)
                                            </div>
                                        </div>
                                        {/* Nút Tiểu Sử Bác Hồ */}
                                        {onShowBiography && (
                                            <button
                                                onClick={onShowBiography}
                                                style={{
                                                    marginTop: '1.25rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px',
                                                    padding: '10px 20px',
                                                    background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
                                                    color: 'white',
                                                    border: 'none',
                                                    borderRadius: '100px',
                                                    fontFamily: "'Lora', Georgia, serif",
                                                    fontSize: '0.85rem',
                                                    fontWeight: 600,
                                                    cursor: 'pointer',
                                                    boxShadow: '0 4px 15px rgba(123, 45, 62, 0.3)',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1.05)';
                                                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(123, 45, 62, 0.4)';
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.currentTarget.style.transform = 'scale(1)';
                                                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(123, 45, 62, 0.3)';
                                                }}
                                            >
                                                <User size={16} />
                                                Xem Tiểu Sử Bác Hồ
                                            </button>
                                        )}
                                    </div>
                                )
                            )}
                        </div>

                        {/* RIGHT PAGE - Nội dung giới thiệu */}
                        <div
                            className="absolute right-0 top-0"
                            style={{
                                width: '50%',
                                height: '100%',
                                backgroundColor: '#FDFBF7',
                                padding: '60px 50px',
                                boxShadow: 'inset 10px 0 20px rgba(0,0,0,0.1)',
                                borderRight: '2px solid #d4c5a0',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden'
                            }}
                        >
                            {currentPage < pages.length && (
                                <>
                                    {currentPage === 1 ? (
                                        /* Sử dụng component đặc biệt có audio cho Phần I */
                                        <Part1Page2 playingQuote={playingQuote} onPlayQuote={playQuote} />
                                    ) : currentPage === 2 ? (
                                        /* Phần II - trang phải: nội dung đầy đủ */
                                        <Part2RightPage />
                                    ) : currentPage === 3 ? (
                                        /* Phần III - trang phải: trích dẫn */
                                        <Part3RightPage />
                                    ) : currentPage === 4 ? (
                                        /* Phần IV - trang phải: di chúc */
                                        <Part4RightPage />
                                    ) : currentPage === 5 ? (
                                        /* Trang chuyển tiếp - trang phải: hành trình */
                                        <TransitionRightPage />
                                    ) : currentPage === 6 ? (
                                        /* Phần V - trang phải: kết luận */
                                        <Part5RightPage />
                                    ) : currentPage === 7 ? (
                                        /* Phần V Page 2 - trang phải: ý nghĩa sáng tạo */
                                        <Part5Page2RightPage />
                                    ) : currentPage === 8 ? (
                                        /* Phần VI - trang phải: quan điểm Hồ Chí Minh */
                                        <Part6RightPage />
                                    ) : currentPage === 9 ? (
                                        /* Phần VII - trang phải: quan điểm về lực lượng cách mạng */
                                        <Part7RightPage />
                                    ) : currentPage === 10 ? (
                                        /* Phần VIII Page 1 - trang phải: Mối quan hệ Chính Quốc - Thuộc Địa */
                                        <Part8RightPage />
                                    ) : currentPage === 11 ? (
                                        /* Phần VIII Page 2 - trang phải: Ý nghĩa lịch sử */
                                        <Part8Page2RightPage />
                                    ) : currentPage === 12 ? (
                                        /* Phần IX - trang phải: Nội dung và hình thức bạo lực */
                                        <Part9RightPage />
                                    ) : (
                                        /* Render nội dung bình thường cho các trang khác */
                                        <div style={{ animation: 'pageIn 0.6s ease-out' }}>
                                            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '2rem', color: '#1A1A1A', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                                                {pages[currentPage === 0 ? 0 : currentPage + 1]?.title}
                                            </h2>
                                            <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: '#7B2D3E', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                                                {pages[currentPage === 0 ? 0 : currentPage + 1]?.subtitle}
                                            </h3>
                                            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.95rem', color: '#4A4A4A', lineHeight: '1.7', textAlign: 'justify', whiteSpace: 'pre-line' }}>
                                                {pages[currentPage === 0 ? 0 : currentPage + 1]?.content}
                                            </p>
                                        </div>
                                    )}

                                    {/* Số trang - Custom components render số trang riêng, chỉ hiển thị cho Intro hoặc trang thường */}
                                    {currentPage === 0 && (
                                        <div style={{ position: 'absolute', bottom: '40px', right: '50px', fontFamily: "'Lora', Georgia, serif", fontSize: '0.9rem', color: '#999' }}>
                                            {1}
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        {/* Book spine */}
                        <div style={{ position: 'absolute', left: '50%', top: '0', width: '20px', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.2), transparent, rgba(0,0,0,0.2))', transform: 'translateX(-50%)', pointerEvents: 'none' }}></div>
                    </div>

                    {/* Navigation */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-4" style={{ width: 'calc(100% + 100px)', left: '-50px', pointerEvents: 'none' }}>
                        <button onClick={prevPage} disabled={currentPage === 0} className="transition-all duration-300" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: currentPage === 0 ? '#ccc' : '#7B2D3E', color: 'white', border: 'none', fontSize: '1.5rem', cursor: currentPage === 0 ? 'not-allowed' : 'pointer', opacity: currentPage === 0 ? 0.5 : 1, pointerEvents: 'auto' }} onMouseEnter={(e) => { if (currentPage > 0) { e.currentTarget.style.backgroundColor = '#5C2230'; e.currentTarget.style.transform = 'scale(1.1)'; } }} onMouseLeave={(e) => { if (currentPage > 0) { e.currentTarget.style.backgroundColor = '#7B2D3E'; e.currentTarget.style.transform = 'scale(1)'; } }}>‹</button>
                        <button onClick={nextPage} disabled={currentPage >= pages.length - 1} className="transition-all duration-300" style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: currentPage >= pages.length - 1 ? '#ccc' : '#7B2D3E', color: 'white', border: 'none', fontSize: '1.5rem', cursor: currentPage >= pages.length - 1 ? 'not-allowed' : 'pointer', opacity: currentPage >= pages.length - 1 ? 0.5 : 1, pointerEvents: 'auto' }} onMouseEnter={(e) => { if (currentPage < pages.length - 1) { e.currentTarget.style.backgroundColor = '#5C2230'; e.currentTarget.style.transform = 'scale(1.1)'; } }} onMouseLeave={(e) => { if (currentPage < pages.length - 1) { e.currentTarget.style.backgroundColor = '#7B2D3E'; e.currentTarget.style.transform = 'scale(1)'; } }}>›</button>
                    </div>
                </div>
            </div>

            <style>{`
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes bookOpen { from { transform: scale(0.8) rotateY(-20deg); opacity: 0; } to { transform: scale(1) rotateY(0deg); opacity: 1; } }
@keyframes pageIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
`}</style>
        </div>
    );
}
