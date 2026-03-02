import { useState, useEffect } from 'react';
import { Trophy, CheckCircle2, XCircle, RefreshCcw, Award, Share2, Download, Star } from 'lucide-react';

interface Question {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
}

const quizData: Question[] = [
    {
        question: "Hội nghị nào của Đảng đã quyết định đặt nhiệm vụ giải phóng dân tộc lên hàng đầu giai đoạn 1939-1945?",
        options: [
            "Hội nghị TW 6 (11/1939)",
            "Hội nghị TW 7 (11/1940)",
            "Hội nghị TW 8 (5/1941)",
            "Hội nghị toàn quốc của Đảng (8/1945)"
        ],
        correct: 2,
        explanation: "Hội nghị TW 8 do Nguyễn Ái Quốc chủ trì đã nhấn mạnh giải phóng dân tộc là nhiệm vụ thiết cấp nhất, chuẩn bị trực tiếp cho Tổng khởi nghĩa."
    },
    {
        question: "Chỉ thị 'Nhật - Pháp bắn nhau và hành động của chúng ta' ra đời vào thời điểm nào?",
        options: [
            "Ngày 9 Tháng 3 năm 1945",
            "Ngày 12 Tháng 3 năm 1945",
            "Ngày 15 Tháng 4 năm 1945",
            "Ngày 13 Tháng 8 năm 1945"
        ],
        correct: 1,
        explanation: "Ngay sau khi Nhật đảo chính Pháp đêm 9/3/1945, ngày 12/3/1945 Đảng ra chỉ thị phát động cao trào kháng Nhật cứu nước."
    },
    {
        question: "Sự kiện được coi là báo hiệu sự khởi đầu của cao trào vũ trang khởi nghĩa trước tháng 8/1945 là gì?",
        options: [
            "Khởi nghĩa Bắc Sơn",
            "Thành lập Đội VNTTGPQ",
            "Cuộc mít tinh tại Nhà hát lớn Hà Nội",
            "Khởi nghĩa Nam Kỳ"
        ],
        correct: 1,
        explanation: "Thành lập Đội Việt Nam Tuyên truyền Giải phóng quân (12/1944) là bước chuẩn bị sống còn về lực lượng vũ trang."
    },
    {
        question: "Nhật hoàng tuyên bố đầu hàng Đồng minh vô điều kiện vào ngày nào?",
        options: [
            "13/08/1945",
            "14/08/1945",
            "15/08/1945",
            "02/09/1945"
        ],
        correct: 2,
        explanation: "Ngày 15/8/1945, Nhật đầu hàng. Đảng đã chớp lấy thời cơ 'ngàn năm có một' này để tiến hành Tổng khởi nghĩa trước khi giặc ngoại xâm khác kịp vào."
    },
    {
        question: "Thắng lợi của Cách mạng Tháng Tám đã dẫn đến sự kiện vĩ đại nào vào ngày 2/9/1945?",
        options: [
            "Quân Đồng Minh vào Đông Dương",
            "Bảo Đại thoái vị",
            "Thành lập Mặt trận Việt Minh",
            "Đọc Tuyên ngôn Độc lập, khai sinh nước VNDCCH"
        ],
        correct: 3,
        explanation: "Tại Quảng trường Ba Đình, Chủ tịch Hồ Chí Minh đã đọc Tuyên ngôn Độc lập, chính thức khai sinh nước Việt Nam Dân chủ Cộng hòa."
    }
];

export function KnowledgeQuiz() {
    const [currentStep, setCurrentStep] = useState<'start' | 'quiz' | 'result'>('start');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [showExplanation, setShowExplanation] = useState(false);

    const handleOptionSelect = (index: number) => {
        if (selectedOption !== null) return;

        setSelectedOption(index);
        const correct = index === quizData[currentIndex].correct;
        setIsCorrect(correct);
        if (correct) {
            setScore(prev => prev + 1);
            // Có thể thêm âm thanh success ở đây
        }
        setShowExplanation(true);
    };

    const nextQuestion = () => {
        if (currentIndex < quizData.length - 1) {
            setCurrentIndex(prev => prev + 1);
            setSelectedOption(null);
            setIsCorrect(null);
            setShowExplanation(false);
        } else {
            setCurrentStep('result');
        }
    };

    const resetQuiz = () => {
        setCurrentStep('start');
        setCurrentIndex(0);
        setScore(0);
        setSelectedOption(null);
        setIsCorrect(null);
        setShowExplanation(false);
    };

    return (
        <section id="trac-nghiem" style={{
            padding: '100px 24px',
            background: '#FDFBF7',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background elements */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '40%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(201,162,39,0.05) 0%, transparent 70%)',
                zIndex: 0
            }} />

            <div style={{ maxWidth: 900, margin: '0 auto', position: 'relative', zIndex: 1 }}>

                {/* Header Header */}
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 12,
                        marginBottom: 16
                    }}>
                        <Star size={18} color="#C9A227" fill="#C9A227" />
                        <span style={{
                            fontSize: 12,
                            letterSpacing: '0.25em',
                            textTransform: 'uppercase',
                            color: '#7B2D3E',
                            fontWeight: 700
                        }}>
                            Góc Tương Tác
                        </span>
                    </div>
                    <h2 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: 'clamp(2rem, 5vw, 2.8rem)',
                        color: '#1A1A1A',
                        fontWeight: 600,
                        lineHeight: 1.2
                    }}>
                        Thử Thách <span style={{ color: '#C9A227' }}>Kiến Thức</span>
                    </h2>
                </div>

                {/* Main Content Area */}
                <div style={{
                    background: 'white',
                    borderRadius: 32,
                    padding: '40px 30px',
                    boxShadow: '0 20px 50px rgba(123, 45, 62, 0.1)',
                    border: '1px solid rgba(201, 162, 39, 0.1)',
                    minHeight: 500,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transition: 'all 0.5s ease'
                }}>

                    {currentStep === 'start' && (
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                width: 80,
                                height: 80,
                                borderRadius: '50%',
                                background: 'rgba(201, 162, 39, 0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 24px'
                            }}>
                                <Trophy size={40} color="#C9A227" />
                            </div>
                            <h3 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '1.8rem',
                                marginBottom: 16
                            }}>Bạn hiểu bao nhiêu về Bác?</h3>
                            <p style={{
                                color: '#666',
                                marginBottom: 40,
                                fontSize: '1.1rem',
                                lineHeight: 1.6
                            }}>
                                Tham gia bài trắc nghiệm nhanh 5 câu hỏi để kiểm tra kiến thức của bạn về
                                tiến trình lịch sử vĩ đại của Cách mạng Tháng Tám năm 1945.
                            </p>
                            <button
                                onClick={() => setCurrentStep('quiz')}
                                style={{
                                    padding: '16px 48px',
                                    background: 'linear-gradient(135deg, #7B2D3E, #5C2230)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: 100,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    boxShadow: '0 8px 25px rgba(123, 45, 62, 0.3)',
                                    transition: 'transform 0.2s'
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                Bắt đầu ngay
                            </button>
                        </div>
                    )}

                    {currentStep === 'quiz' && (
                        <div>
                            {/* Progress Bar */}
                            <div style={{ marginBottom: 40 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                                    <span style={{ fontSize: '0.9rem', color: '#7B2D3E', fontWeight: 600 }}>
                                        Câu hỏi {currentIndex + 1}/{quizData.length}
                                    </span>
                                    <span style={{ fontSize: '0.9rem', color: '#C9A227', fontWeight: 600 }}>
                                        {Math.round(((currentIndex + 1) / quizData.length) * 100)}%
                                    </span>
                                </div>
                                <div style={{
                                    width: '100%',
                                    height: 6,
                                    background: '#F0F0F0',
                                    borderRadius: 3,
                                    overflow: 'hidden'
                                }}>
                                    <div style={{
                                        width: `${((currentIndex + 1) / quizData.length) * 100}%`,
                                        height: '100%',
                                        background: 'linear-gradient(90deg, #7B2D3E, #C9A227)',
                                        transition: 'width 0.5s ease'
                                    }} />
                                </div>
                            </div>

                            <h3 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '1.5rem',
                                lineHeight: 1.4,
                                marginBottom: 32,
                                color: '#1A1A1A'
                            }}>
                                {quizData[currentIndex].question}
                            </h3>

                            <div style={{ display: 'grid', gap: 16 }}>
                                {quizData[currentIndex].options.map((option, index) => {
                                    let borderColor = 'rgba(0,0,0,0.08)';
                                    let bgColor = 'white';
                                    let textColor = '#444';

                                    if (selectedOption !== null) {
                                        if (index === quizData[currentIndex].correct) {
                                            borderColor = '#22C55E';
                                            bgColor = 'rgba(34, 197, 94, 0.05)';
                                            textColor = '#166534';
                                        } else if (index === selectedOption) {
                                            borderColor = '#EF4444';
                                            bgColor = 'rgba(239, 68, 68, 0.05)';
                                            textColor = '#991B1B';
                                        }
                                    }

                                    return (
                                        <button
                                            key={index}
                                            onClick={() => handleOptionSelect(index)}
                                            style={{
                                                padding: '20px 24px',
                                                border: `2px solid ${borderColor}`,
                                                background: bgColor,
                                                color: textColor,
                                                borderRadius: 16,
                                                textAlign: 'left',
                                                fontSize: '1rem',
                                                fontWeight: 500,
                                                cursor: selectedOption === null ? 'pointer' : 'default',
                                                transition: 'all 0.2s',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}
                                        >
                                            {option}
                                            {selectedOption !== null && index === quizData[currentIndex].correct && (
                                                <CheckCircle2 color="#22C55E" size={20} />
                                            )}
                                            {selectedOption !== null && index === selectedOption && index !== quizData[currentIndex].correct && (
                                                <XCircle color="#EF4444" size={20} />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {showExplanation && (
                                <div style={{
                                    marginTop: 32,
                                    padding: 20,
                                    background: '#FDFBF7',
                                    borderRadius: 16,
                                    borderLeft: `4px solid ${isCorrect ? '#22C55E' : '#EF4444'}`,
                                    animation: 'fadeInUp 0.4s ease'
                                }}>
                                    <p style={{ fontSize: '0.95rem', lineHeight: 1.6, color: '#555', margin: 0 }}>
                                        <strong>Giải thích:</strong> {quizData[currentIndex].explanation}
                                    </p>
                                    <button
                                        onClick={nextQuestion}
                                        style={{
                                            marginTop: 20,
                                            padding: '12px 28px',
                                            background: '#7B2D3E',
                                            color: 'white',
                                            border: 'none',
                                            borderRadius: 8,
                                            fontSize: '0.9rem',
                                            fontWeight: 600,
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {currentIndex < quizData.length - 1 ? 'Câu kế tiếp' : 'Xem kết quả'}
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {currentStep === 'result' && (
                        <div style={{ textAlign: 'center' }}>
                            <div style={{
                                position: 'relative',
                                width: 200,
                                height: 200,
                                margin: '0 auto 32px'
                            }}>
                                <svg width="200" height="200" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#F0F0F0" strokeWidth="8" />
                                    <circle cx="50" cy="50" r="45" fill="none" stroke="#C9A227" strokeWidth="8"
                                        strokeDasharray={`${(score / quizData.length) * 283} 283`}
                                        transform="rotate(-90 50 50)"
                                        style={{ transition: 'stroke-dasharray 1s ease' }}
                                    />
                                </svg>
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    textAlign: 'center'
                                }}>
                                    <span style={{ fontSize: '3rem', fontWeight: 700, color: '#1A1A1A' }}>{score}</span>
                                    <span style={{ fontSize: '1.5rem', color: '#666' }}>/{quizData.length}</span>
                                </div>
                            </div>

                            <h2 style={{
                                fontFamily: "'Playfair Display', serif",
                                fontSize: '2rem',
                                marginBottom: 16
                            }}>{score === quizData.length ? 'Xuất sắc!' : score >= quizData.length / 2 ? 'Rất tốt!' : 'Tiếp tục cố gắng!'}</h2>

                            {score === quizData.length && (
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    pointerEvents: 'none',
                                    zIndex: 10,
                                    overflow: 'hidden'
                                }}>
                                    {[...Array(30)].map((_, i) => (
                                        <div key={i} className="confetti" style={{
                                            left: `${Math.random() * 100}%`,
                                            backgroundColor: ['#C9A227', '#7B2D3E', '#F5F0E8', '#5C2230'][Math.floor(Math.random() * 4)],
                                            animationDelay: `${Math.random() * 3}s`,
                                            width: Math.random() * 10 + 5,
                                            height: Math.random() * 10 + 5,
                                            position: 'absolute',
                                            top: -20
                                        }} />
                                    ))}
                                </div>
                            )}

                            <p style={{ color: '#666', marginBottom: 40, fontSize: '1.1rem' }}>
                                Bạn đã hoàn thành bài thử thách về lịch sử Cách mạng Tháng Tám 1945.
                            </p>

                            {/* Mini Certificate Card */}
                            <div style={{
                                background: 'linear-gradient(135deg, #FDFBF7, #F5F0E8)',
                                border: '2px solid rgba(201, 162, 39, 0.3)',
                                borderRadius: 20,
                                padding: 32,
                                marginBottom: 40,
                                position: 'relative'
                            }}>
                                <Award size={48} color="#C9A227" style={{ marginBottom: 16 }} />
                                <h4 style={{
                                    fontFamily: "'Playfair Display', serif",
                                    fontSize: '1.2rem',
                                    marginBottom: 8
                                }}>CHỨNG NHẬN HOÀN THÀNH</h4>
                                <div style={{
                                    fontSize: '0.8rem',
                                    color: '#7B2D3E',
                                    fontWeight: 600,
                                    letterSpacing: '0.1em',
                                    marginBottom: 16
                                }}>NGƯỜI CON ĐẤT VIỆT</div>
                                <p style={{ fontSize: '0.9rem', color: '#666', fontStyle: 'italic' }}>
                                    "Đã vượt qua thử thách kiến thức với kết quả {score}/{quizData.length}"
                                </p>
                                <div style={{
                                    position: 'absolute',
                                    bottom: 10,
                                    right: 20,
                                    opacity: 0.2
                                }}>
                                    <img src="/logo-placeholder.png" alt="" style={{ width: 60 }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
                                <button
                                    onClick={resetQuiz}
                                    style={{
                                        padding: '14px 28px',
                                        background: 'white',
                                        color: '#7B2D3E',
                                        border: '2px solid #7B2D3E',
                                        borderRadius: 12,
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 8
                                    }}
                                >
                                    <RefreshCcw size={18} /> Chơi lại
                                </button>

                            </div>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                @keyframes fadeInUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .confetti {
                    position: absolute;
                    animation: confetti-fall 3s linear infinite;
                }
                @keyframes confetti-fall {
                    0% { transform: translateY(0) rotate(0deg); opacity: 1; }
                    100% { transform: translateY(600px) rotate(720deg); opacity: 0; }
                }
            `}</style>
        </section>
    );
}
