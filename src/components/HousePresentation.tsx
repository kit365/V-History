import { useState } from 'react';
import { X, ChevronRight, Home, Sparkles, CheckCircle, XCircle } from 'lucide-react';

interface ContentData {
    title: string;
    subtitle: string;
    content: string;
    quote?: string;
}

interface QuizData {
    question: string;
    options: string[];
    correctIndex: number;
    hint: string;
}

const foundationData: ContentData[] = [
    { title: "Viên Gạch 1", subtitle: "Quyền Thiêng Liêng", content: "Độc lập, tự do là quyền thiêng liêng, bất khả xâm phạm của tất cả các dân tộc", quote: "Tất cả các dân tộc trên thế giới đều sinh ra bình đẳng, dân tộc nào cũng có quyền sống, quyền sung sướng và quyền tự do." },
    { title: "Viên Gạch 2", subtitle: "Gắn Với Hạnh Phúc", content: "Độc lập phải gắn với tự do, cơm no, áo ấm và hạnh phúc của nhân dân", quote: "Nếu nước độc lập mà dân không hưởng hạnh phúc, tự do, thì độc lập cũng chẳng có nghĩa lý gì." },
    { title: "Viên Gạch 3", subtitle: "Độc Lập Thực Sự", content: "Độc lập phải thật sự, hoàn toàn và triệt để - không phải độc lập hình thức", quote: "Chúng ta thà hy sinh tất cả chứ nhất định không chịu mất nước, nhất định không chịu làm nô lệ!" },
    { title: "Viên Gạch 4", subtitle: "Thống Nhất Lãnh Thổ", content: "Độc lập gắn liền với thống nhất và toàn vẹn lãnh thổ của Tổ quốc", quote: "Nước Việt Nam là một, dân tộc Việt Nam là một. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi." }
];

const foundationQuizzes: QuizData[] = [
    {
        question: "Theo tư tưởng Hồ Chí Minh, quyền độc lập, tự do của các dân tộc có đặc điểm gì?",
        options: ["Có thể thay đổi theo thời gian", "Thiêng liêng, bất khả xâm phạm", "Chỉ dành cho nước lớn", "Phụ thuộc vào hoàn cảnh"],
        correctIndex: 1,
        hint: "Hãy nhớ lại tinh thần của bản Tuyên ngôn Độc lập!"
    },
    {
        question: "Nếu nước độc lập mà dân không được gì, thì độc lập có ý nghĩa không?",
        options: ["Vẫn có ý nghĩa", "Chẳng có nghĩa lý gì", "Có một phần ý nghĩa", "Tuỳ thuộc hoàn cảnh"],
        correctIndex: 1,
        hint: "Bác Hồ luôn đặt hạnh phúc của nhân dân lên hàng đầu!"
    },
    {
        question: "Độc lập theo tư tưởng Hồ Chí Minh phải như thế nào?",
        options: ["Độc lập hình thức", "Độc lập nửa vời", "Thật sự, hoàn toàn, triệt để", "Độc lập tương đối"],
        correctIndex: 2,
        hint: "Chúng ta không chấp nhận bất kỳ sự nô lệ nào!"
    },
    {
        question: "Điền vào chỗ trống: 'Nước Việt Nam là ___, dân tộc Việt Nam là ___'",
        options: ["lớn, mạnh", "một, một", "đẹp, giỏi", "cổ, lâu"],
        correctIndex: 1,
        hint: "Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi!"
    }
];

const pillarData: ContentData[] = [
    { title: "Cột Trụ 1", subtitle: "Cách Mạng Vô Sản", content: "Muốn cứu nước và giải phóng dân tộc, phải đi theo con đường cách mạng vô sản", quote: "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản." },
    { title: "Cột Trụ 2", subtitle: "Đảng Lãnh Đạo", content: "Phải có Đảng Cộng sản lãnh đạo - đội tiên phong của giai cấp công nhân", quote: "Cách mệnh trước hết phải có đảng cách mệnh... Đảng có vững cách mệnh mới thành công." },
    { title: "Cột Trụ 3", subtitle: "Đại Đoàn Kết", content: "Dựa trên lực lượng đại đoàn kết toàn dân tộc, lấy liên minh Công-Nông làm nền tảng", quote: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công." },
    { title: "Cột Trụ 4", subtitle: "Chủ Động Sáng Tạo", content: "Cách mạng thuộc địa có thể chủ động, sáng tạo, giành thắng lợi trước cách mạng vô sản ở chính quốc" },
    { title: "Cột Trụ 5", subtitle: "Bạo Lực Cách Mạng", content: "Phải tiến hành bằng phương pháp bạo lực cách mạng - dùng sức mạnh của quần chúng đánh đổ bạo lực phản cách mạng" }
];

const pillarQuizzes: QuizData[] = [
    {
        question: "Theo Hồ Chí Minh, muốn cứu nước và giải phóng dân tộc, phải đi theo con đường nào?",
        options: ["Cách mạng tư sản", "Cách mạng vô sản", "Cải lương từng bước", "Thỏa hiệp với đế quốc"],
        correctIndex: 1,
        hint: "Đây là bài học quan trọng từ Cách mạng Tháng Mười Nga!"
    },
    {
        question: "Để cách mạng thành công, điều tiên quyết cần có là gì?",
        options: ["Nhiều tiền bạc", "Quân đội mạnh", "Đảng cách mạng vững mạnh", "Sự giúp đỡ từ nước ngoài"],
        correctIndex: 2,
        hint: "Đảng có vững thì cách mạng mới thành công!"
    },
    {
        question: "Câu nói nổi tiếng của Bác về đoàn kết là gì?",
        options: ["Đoàn kết là sức mạnh", "Đoàn kết, đại đoàn kết, đại thành công", "Đoàn kết chiến thắng", "Đoàn kết một nhà"],
        correctIndex: 1,
        hint: "Thành công, thành công, đại thành công!"
    },
    {
        question: "Cách mạng thuộc địa có thể giành thắng lợi trước cách mạng ở đâu?",
        options: ["Ở nước láng giềng", "Ở chính quốc", "Ở các nước khác", "Không thể"],
        correctIndex: 1,
        hint: "Đây là quan điểm sáng tạo của Hồ Chí Minh!"
    },
    {
        question: "Phương pháp cách mạng theo Hồ Chí Minh sử dụng sức mạnh gì?",
        options: ["Sức mạnh quân sự", "Sức mạnh kinh tế", "Sức mạnh quần chúng", "Sức mạnh ngoại giao"],
        correctIndex: 2,
        hint: "Bạo lực cách mạng là sức mạnh của nhân dân!"
    }
];

export function HousePresentation({ onClose }: { onClose: () => void }) {
    const [builtFoundations, setBuiltFoundations] = useState<number[]>([]);
    const [builtPillars, setBuiltPillars] = useState<number[]>([]);
    const [roofBuilt, setRoofBuilt] = useState(false);
    const [phase, setPhase] = useState<'intro' | 'foundation' | 'pillars' | 'complete'>('intro');
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState<ContentData | null>(null);
    const [modalType, setModalType] = useState<'foundation' | 'pillar' | 'roof'>('foundation');

    // Quiz states
    const [showQuiz, setShowQuiz] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState<QuizData | null>(null);
    const [pendingBuildIndex, setPendingBuildIndex] = useState<number | null>(null);
    const [pendingBuildType, setPendingBuildType] = useState<'foundation' | 'pillar' | null>(null);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [answerResult, setAnswerResult] = useState<'correct' | 'wrong' | null>(null);

    const buildFoundation = (index: number) => {
        if (phase === 'foundation' && !builtFoundations.includes(index)) {
            // Show quiz instead of building immediately
            setCurrentQuiz(foundationQuizzes[index]);
            setPendingBuildIndex(index);
            setPendingBuildType('foundation');
            setSelectedAnswer(null);
            setAnswerResult(null);
            setShowQuiz(true);
        }
    };

    const buildPillar = (index: number) => {
        if (phase === 'pillars' && !builtPillars.includes(index)) {
            // Show quiz instead of building immediately
            setCurrentQuiz(pillarQuizzes[index]);
            setPendingBuildIndex(index);
            setPendingBuildType('pillar');
            setSelectedAnswer(null);
            setAnswerResult(null);
            setShowQuiz(true);
        }
    };

    const handleAnswerSelect = (answerIndex: number) => {
        if (answerResult !== null) return; // Already answered

        setSelectedAnswer(answerIndex);

        if (currentQuiz && answerIndex === currentQuiz.correctIndex) {
            setAnswerResult('correct');
            // After a short delay, complete the build
            setTimeout(() => {
                if (pendingBuildType === 'foundation' && pendingBuildIndex !== null) {
                    setBuiltFoundations(prev => [...prev, pendingBuildIndex!]);
                    setModalContent(foundationData[pendingBuildIndex!]);
                    setModalType('foundation');
                } else if (pendingBuildType === 'pillar' && pendingBuildIndex !== null) {
                    setBuiltPillars(prev => [...prev, pendingBuildIndex!]);
                    setModalContent(pillarData[pendingBuildIndex!]);
                    setModalType('pillar');
                }
                setShowQuiz(false);
                setShowModal(true);
            }, 1200);
        } else {
            setAnswerResult('wrong');
        }
    };

    const retryQuiz = () => {
        setSelectedAnswer(null);
        setAnswerResult(null);
    };

    const buildRoof = () => {
        if (builtPillars.length === 5 && !roofBuilt) {
            setRoofBuilt(true);
            setModalContent({ title: "🎉 Hoàn Thành!", subtitle: "Ngôi Nhà Độc Lập", content: "Ngôi nhà ĐỘC LẬP DÂN TỘC đã được xây dựng vững chắc!", quote: "Không có gì quý hơn độc lập, tự do!" });
            setModalType('roof');
            setShowModal(true);
            setPhase('complete');
        }
    };

    const advancePhase = () => {
        if (phase === 'intro') {
            setPhase('foundation');
        } else if (phase === 'foundation' && builtFoundations.length === 4) {
            setPhase('pillars');
        }
    };

    const getModalColor = () => {
        if (modalType === 'foundation') return '#dc2626';
        if (modalType === 'pillar') return '#f59e0b';
        return '#16a34a';
    };

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10000, background: '#faf9f6', display: 'flex', flexDirection: 'column' }}>

            {/* Header */}
            <div style={{ height: 60, padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #eee', background: 'white' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 36, height: 36, background: '#dc2626', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Home size={20} color="white" />
                    </div>
                    <span style={{ fontWeight: 'bold', fontSize: 16, color: '#1f2937' }}>Xây Nhà Độc Lập</span>
                </div>
                <button onClick={onClose} style={{ padding: 8, background: 'none', border: 'none', cursor: 'pointer' }}>
                    <X size={20} color="#6b7280" />
                </button>
            </div>

            {/* House Area */}
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, minHeight: 0, overflow: 'hidden' }}>
                <svg viewBox="0 0 500 350" style={{ width: '100%', maxWidth: 500, height: 'auto', maxHeight: 'calc(100vh - 260px)' }}>

                    <defs>
                        <linearGradient id="roofGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#dc2626" />
                            <stop offset="100%" stopColor="#b91c1c" />
                        </linearGradient>
                        <linearGradient id="pillarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#fbbf24" />
                            <stop offset="100%" stopColor="#f59e0b" />
                        </linearGradient>
                        <linearGradient id="brickGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#ef4444" />
                            <stop offset="100%" stopColor="#dc2626" />
                        </linearGradient>
                        <filter id="glow">
                            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.3" />
                        </filter>
                    </defs>

                    {/* Ground */}
                    <rect x="40" y="310" width="420" height="16" fill="#d1d5db" rx="4" />

                    {/* Foundation Bricks */}
                    {[0, 1, 2, 3].map(i => {
                        const isBuilt = builtFoundations.includes(i);
                        const canBuild = phase === 'foundation' && !isBuilt;
                        const x = 70 + i * 95;
                        return (
                            <g key={`f${i}`} onClick={() => buildFoundation(i)} style={{ cursor: canBuild ? 'pointer' : 'default' }}>
                                <rect x={x} y={isBuilt ? 260 : 300} width="85" height={isBuilt ? 50 : 12} fill={isBuilt ? 'url(#brickGrad)' : canBuild ? '#fecaca' : '#e5e7eb'} rx="6" filter={isBuilt ? 'url(#glow)' : ''} />
                                {isBuilt && <text x={x + 42} y="292" fill="white" fontSize="18" fontWeight="bold" textAnchor="middle">{i + 1}</text>}
                                {canBuild && <text x={x + 42} y="295" fill="#dc2626" fontSize="10" textAnchor="middle" fontWeight="bold">CLICK</text>}
                            </g>
                        );
                    })}

                    {/* Pillars */}
                    {[0, 1, 2, 3, 4].map(i => {
                        const isBuilt = builtPillars.includes(i);
                        const canBuild = phase === 'pillars' && builtFoundations.length === 4 && !isBuilt;
                        const x = 82 + i * 75;
                        return (
                            <g key={`p${i}`} onClick={() => buildPillar(i)} style={{ cursor: canBuild ? 'pointer' : 'default' }}>
                                <rect x={x} y={isBuilt ? 100 : 242} width="36" height={isBuilt ? 160 : 18} fill={isBuilt ? 'url(#pillarGrad)' : canBuild ? '#fef3c7' : '#f3f4f6'} rx="4" filter={isBuilt ? 'url(#glow)' : ''} />
                                {isBuilt && <>
                                    <rect x={x - 5} y="94" width="46" height="12" fill="#fbbf24" rx="3" />
                                    <text x={x + 18} y="190" fill="#78350f" fontSize="14" fontWeight="bold" textAnchor="middle">{i + 1}</text>
                                </>}
                                {canBuild && <text x={x + 18} y="235" fill="#d97706" fontSize="9" textAnchor="middle" fontWeight="bold">CLICK</text>}
                            </g>
                        );
                    })}

                    {/* Roof */}
                    <g onClick={buildRoof} style={{ cursor: builtPillars.length === 5 && !roofBuilt ? 'pointer' : 'default' }}>
                        <polygon points="250,15 45,95 455,95" fill={roofBuilt ? 'url(#roofGrad)' : builtPillars.length === 5 ? '#fca5a5' : '#f3f4f6'} opacity={builtPillars.length >= 1 || roofBuilt ? 1 : 0.6} filter={roofBuilt ? 'url(#glow)' : ''} />
                        {roofBuilt && <text x="250" y="65" fill="#fef08a" fontSize="32" textAnchor="middle">⭐</text>}
                        {builtPillars.length === 5 && !roofBuilt && <text x="250" y="60" fill="#dc2626" fontSize="12" textAnchor="middle" fontWeight="bold">CLICK MÁI</text>}
                    </g>

                    <text x="250" y="340" fill="#9ca3af" fontSize="12" textAnchor="middle">
                        {roofBuilt ? '🏠 NGÔI NHÀ ĐỘC LẬP' : phase === 'pillars' ? `CỘT: ${builtPillars.length}/5` : phase === 'foundation' ? `MÓNG: ${builtFoundations.length}/4` : ''}
                    </text>
                </svg>
            </div>

            {/* Bottom Control Bar */}
            <div style={{ height: 'auto', minHeight: 80, padding: 16, background: 'white', borderTop: '1px solid #eee', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                {phase === 'intro' && (
                    <div style={{ textAlign: 'center' }}>
                        <h2 style={{ fontSize: 18, fontWeight: 'bold', color: '#1f2937', marginBottom: 8 }}>Xây Nhà <span style={{ color: '#dc2626' }}>Độc Lập</span></h2>
                        <button onClick={advancePhase} style={{ padding: '12px 32px', background: '#dc2626', color: 'white', fontWeight: 'bold', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 16, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                            Bắt đầu <ChevronRight size={18} />
                        </button>
                    </div>
                )}

                {phase === 'foundation' && builtFoundations.length < 4 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <span style={{ fontSize: 24 }}>🧱</span>
                        <span style={{ fontWeight: 'bold', color: '#1f2937' }}>Click vào viên gạch đỏ</span>
                        <span style={{ fontSize: 20, fontWeight: 'bold', color: '#dc2626' }}>{builtFoundations.length}/4</span>
                    </div>
                )}

                {phase === 'foundation' && builtFoundations.length === 4 && (
                    <button onClick={advancePhase} style={{ padding: '12px 32px', background: '#f59e0b', color: 'white', fontWeight: 'bold', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 16 }}>
                        Móng xong! Tiếp tục dựng cột →
                    </button>
                )}

                {phase === 'pillars' && builtPillars.length < 5 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                        <span style={{ fontSize: 24 }}>🏛️</span>
                        <span style={{ fontWeight: 'bold', color: '#1f2937' }}>Click vào cột vàng</span>
                        <span style={{ fontSize: 20, fontWeight: 'bold', color: '#f59e0b' }}>{builtPillars.length}/5</span>
                    </div>
                )}

                {phase === 'pillars' && builtPillars.length === 5 && !roofBuilt && (
                    <div style={{ fontWeight: 'bold', color: '#16a34a', fontSize: 16 }}>✓ Cột xong! Click vào mái nhà màu đỏ!</div>
                )}

                {phase === 'complete' && (
                    <button onClick={onClose} style={{ padding: '12px 32px', background: '#16a34a', color: 'white', fontWeight: 'bold', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 16 }}>
                        🎉 Kết thúc
                    </button>
                )}
            </div>

            {/* QUIZ MODAL */}
            {showQuiz && currentQuiz && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10001, padding: 20 }}>
                    <div style={{ background: 'white', borderRadius: 24, maxWidth: 520, width: '100%', padding: 0, boxShadow: '0 25px 50px rgba(0,0,0,0.4)', animation: 'quizIn 0.4s ease-out', overflow: 'hidden' }} onClick={e => e.stopPropagation()}>

                        {/* Quiz Header */}
                        <div style={{
                            background: pendingBuildType === 'foundation' ? 'linear-gradient(135deg, #dc2626, #b91c1c)' : 'linear-gradient(135deg, #f59e0b, #d97706)',
                            padding: '24px 28px',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, background: 'rgba(255,255,255,0.1)', borderRadius: '50%' }} />
                            <div style={{ position: 'absolute', bottom: -30, left: -30, width: 80, height: 80, background: 'rgba(255,255,255,0.05)', borderRadius: '50%' }} />

                            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                                <span style={{ fontSize: 28 }}>{pendingBuildType === 'foundation' ? '🧱' : '🏛️'}</span>
                                <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1.5 }}>
                                    {pendingBuildType === 'foundation' ? `Viên Gạch ${(pendingBuildIndex ?? 0) + 1}` : `Cột Trụ ${(pendingBuildIndex ?? 0) + 1}`}
                                </span>
                            </div>
                            <p style={{ color: 'white', fontSize: 18, fontWeight: 700, margin: 0, lineHeight: 1.5, position: 'relative', zIndex: 1 }}>
                                {currentQuiz.question}
                            </p>
                        </div>

                        {/* Quiz Options */}
                        <div style={{ padding: '20px 24px' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                {currentQuiz.options.map((option, idx) => {
                                    const isSelected = selectedAnswer === idx;
                                    const isCorrect = idx === currentQuiz.correctIndex;
                                    const showResult = answerResult !== null;

                                    let bgColor = '#f8fafc';
                                    let borderColor = '#e2e8f0';
                                    let textColor = '#374151';

                                    if (showResult && isCorrect) {
                                        bgColor = '#dcfce7';
                                        borderColor = '#22c55e';
                                        textColor = '#166534';
                                    } else if (showResult && isSelected && !isCorrect) {
                                        bgColor = '#fee2e2';
                                        borderColor = '#ef4444';
                                        textColor = '#991b1b';
                                    } else if (isSelected && !showResult) {
                                        bgColor = pendingBuildType === 'foundation' ? '#fef2f2' : '#fffbeb';
                                        borderColor = pendingBuildType === 'foundation' ? '#dc2626' : '#f59e0b';
                                    }

                                    return (
                                        <button
                                            key={idx}
                                            onClick={() => handleAnswerSelect(idx)}
                                            disabled={answerResult !== null}
                                            style={{
                                                padding: '14px 18px',
                                                background: bgColor,
                                                border: `2px solid ${borderColor}`,
                                                borderRadius: 12,
                                                cursor: answerResult !== null ? 'default' : 'pointer',
                                                textAlign: 'left',
                                                fontSize: 15,
                                                color: textColor,
                                                fontWeight: isSelected ? 600 : 500,
                                                transition: 'all 0.2s ease',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 12
                                            }}
                                        >
                                            <span style={{
                                                width: 28,
                                                height: 28,
                                                borderRadius: '50%',
                                                background: showResult && isCorrect ? '#22c55e' : showResult && isSelected && !isCorrect ? '#ef4444' : isSelected ? (pendingBuildType === 'foundation' ? '#dc2626' : '#f59e0b') : '#e2e8f0',
                                                color: isSelected || (showResult && isCorrect) ? 'white' : '#6b7280',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 700,
                                                fontSize: 13,
                                                flexShrink: 0
                                            }}>
                                                {showResult && isCorrect ? <CheckCircle size={16} /> : showResult && isSelected && !isCorrect ? <XCircle size={16} /> : String.fromCharCode(65 + idx)}
                                            </span>
                                            <span style={{ flex: 1 }}>{option}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Quiz Footer / Result */}
                        <div style={{ padding: '16px 24px 24px', borderTop: '1px solid #f1f5f9' }}>
                            {answerResult === 'correct' && (
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 12,
                                    padding: '16px 20px',
                                    background: 'linear-gradient(135deg, #dcfce7, #bbf7d0)',
                                    borderRadius: 12,
                                    animation: 'correctPulse 0.5s ease'
                                }}>
                                    <span style={{ fontSize: 32 }}>🎉</span>
                                    <div>
                                        <p style={{ color: '#166534', fontWeight: 700, fontSize: 16, margin: 0 }}>Chính xác!</p>
                                        <p style={{ color: '#15803d', fontSize: 13, margin: '4px 0 0 0' }}>Đang xây dựng...</p>
                                    </div>
                                </div>
                            )}

                            {answerResult === 'wrong' && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                    <div style={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        gap: 12,
                                        padding: '16px 20px',
                                        background: '#fef3c7',
                                        borderRadius: 12,
                                        border: '1px solid #fcd34d'
                                    }}>
                                        <span style={{ fontSize: 24 }}>💡</span>
                                        <div>
                                            <p style={{ color: '#92400e', fontWeight: 600, fontSize: 14, margin: 0 }}>Gợi ý:</p>
                                            <p style={{ color: '#a16207', fontSize: 14, margin: '4px 0 0 0', lineHeight: 1.5 }}>{currentQuiz.hint}</p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={retryQuiz}
                                        style={{
                                            padding: '12px 24px',
                                            background: pendingBuildType === 'foundation' ? '#dc2626' : '#f59e0b',
                                            color: 'white',
                                            fontWeight: 700,
                                            border: 'none',
                                            borderRadius: 10,
                                            cursor: 'pointer',
                                            fontSize: 15,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            gap: 8
                                        }}
                                    >
                                        🔄 Thử lại
                                    </button>
                                </div>
                            )}

                            {answerResult === null && (
                                <p style={{ color: '#9ca3af', fontSize: 13, textAlign: 'center', margin: 0 }}>
                                    Chọn câu trả lời đúng để xây dựng
                                </p>
                            )}
                        </div>
                    </div>

                    <style>{`
                        @keyframes quizIn {
                            from { opacity: 0; transform: scale(0.9) translateY(30px); }
                            to { opacity: 1; transform: scale(1) translateY(0); }
                        }
                        @keyframes correctPulse {
                            0% { transform: scale(0.95); }
                            50% { transform: scale(1.02); }
                            100% { transform: scale(1); }
                        }
                    `}</style>
                </div>
            )}

            {/* MODAL */}
            {showModal && modalContent && (
                <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10001, padding: 20 }} onClick={() => setShowModal(false)}>
                    <div style={{ background: 'white', borderRadius: 20, maxWidth: 480, width: '100%', padding: 0, boxShadow: '0 25px 50px rgba(0,0,0,0.3)', animation: 'modalIn 0.3s ease-out' }} onClick={e => e.stopPropagation()}>

                        {/* Modal Header */}
                        <div style={{ background: getModalColor(), padding: '20px 24px', borderRadius: '20px 20px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{modalContent.title}</p>
                                <h3 style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 0 }}>{modalContent.subtitle}</h3>
                            </div>
                            <button onClick={() => setShowModal(false)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <X size={18} color="white" />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div style={{ padding: 24 }}>
                            <p style={{ color: '#374151', fontSize: 16, lineHeight: 1.7, marginBottom: modalContent.quote ? 20 : 0 }}>
                                {modalContent.content}
                            </p>

                            {modalContent.quote && (
                                <div style={{ background: '#fef3c7', borderLeft: `4px solid ${getModalColor()}`, padding: 16, borderRadius: 8 }}>
                                    <p style={{ color: '#92400e', fontSize: 14, fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
                                        "{modalContent.quote}"
                                    </p>
                                    <p style={{ color: '#b45309', fontSize: 12, marginTop: 8, marginBottom: 0, fontWeight: 'bold' }}>— Hồ Chí Minh</p>
                                </div>
                            )}
                        </div>

                        {/* Modal Footer */}
                        <div style={{ padding: '16px 24px', borderTop: '1px solid #f3f4f6', display: 'flex', justifyContent: 'flex-end' }}>
                            <button onClick={() => setShowModal(false)} style={{ padding: '10px 24px', background: getModalColor(), color: 'white', fontWeight: 'bold', border: 'none', borderRadius: 8, cursor: 'pointer', fontSize: 14 }}>
                                Tiếp tục xây
                            </button>
                        </div>
                    </div>

                    <style>{`
            @keyframes modalIn {
              from { opacity: 0; transform: scale(0.9) translateY(20px); }
              to { opacity: 1; transform: scale(1) translateY(0); }
            }
          `}</style>
                </div>
            )}

            {/* Celebration */}
            {roofBuilt && !showModal && (
                <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
                    {[...Array(12)].map((_, i) => (
                        <Sparkles key={i} style={{ position: 'absolute', color: '#f59e0b', top: `${15 + Math.random() * 40}%`, left: `${25 + Math.random() * 50}%`, width: 20 + Math.random() * 16 }} className="animate-ping" />
                    ))}
                </div>
            )}
        </div>
    );
}
