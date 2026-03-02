// Trang Phần III - Trang 3: Độc lập giả hiệu với trích dẫn
export function Part3Page3() {
    return (
        <div style={{
            animation: 'pageIn 0.6s ease-out',
            position: 'relative',
            height: '100%',
            overflow: 'hidden'
        }}>
            {/* Tiêu đề */}
            <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.6rem',
                color: '#1A1A1A',
                marginBottom: '0.4rem',
                fontWeight: 'bold'
            }}>
                Phê Phán "Độc Lập Giả Hiệu"
            </h2>
            <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.8rem',
                color: '#666',
                marginBottom: '0.6rem',
                lineHeight: '1.5'
            }}>
                Bác vạch trần những biểu hiện của chế độ thực dân núp bóng "bảo hộ" hoặc "trao trả độc lập giả tạo".
            </p>

            {/* Bóc lột kinh tế */}
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.75rem', color: '#1A1A1A', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                Về "Bóc lột kinh tế" & "Chế độ ăn cướp":
            </p>
            <div style={{
                backgroundColor: 'rgba(150, 100, 100, 0.1)',
                padding: '0.5rem 0.7rem',
                borderRadius: '6px',
                borderLeft: '3px solid #8B4513',
                marginBottom: '0.5rem'
            }}>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.7rem', color: '#4A4A4A', lineHeight: '1.5', fontStyle: 'italic', margin: 0 }}>
                    "Về kinh tế, chúng bóc lột dân ta đến xương tủy, khiến cho dân ta nghèo nàn, thiếu thốn, nước ta xơ xác, tiêu điều. Chúng cướp không ruộng đất, hầm mỏ, nguyên liệu."
                </p>
            </div>

            {/* Áp bức chính trị */}
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.75rem', color: '#1A1A1A', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                Về "Áp bức chính trị" & "Không quyền tự quyết":
            </p>
            <div style={{
                backgroundColor: 'rgba(150, 100, 100, 0.1)',
                padding: '0.5rem 0.7rem',
                borderRadius: '6px',
                borderLeft: '3px solid #8B4513',
                marginBottom: '0.5rem'
            }}>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.7rem', color: '#4A4A4A', lineHeight: '1.5', fontStyle: 'italic', margin: 0 }}>
                    "Về chính trị, chúng tuyệt đối không cho nhân dân ta một chút tự do dân chủ nào. Chúng thi hành những luật pháp dã man... Chúng tắm các cuộc khởi nghĩa của ta trong những bể máu."
                </p>
            </div>

            {/* Nô dịch văn hóa */}
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.75rem', color: '#1A1A1A', fontWeight: 'bold', marginBottom: '0.25rem' }}>
                Về "Nô dịch văn hóa":
            </p>
            <div style={{
                backgroundColor: 'rgba(150, 100, 100, 0.1)',
                padding: '0.5rem 0.7rem',
                borderRadius: '6px',
                borderLeft: '3px solid #8B4513',
                marginBottom: '0.5rem'
            }}>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.7rem', color: '#4A4A4A', lineHeight: '1.5', fontStyle: 'italic', margin: 0 }}>
                    "Chúng lập ra nhà tù nhiều hơn trường học... Chúng thi hành chính sách ngu dân."
                </p>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.65rem', color: '#666', marginTop: '0.2rem', marginBottom: 0 }}>
                    (Nô dịch về tinh thần để dân tộc không thể nhận thức được quyền lợi của mình)
                </p>
            </div>

            {/* Độc lập bánh vẽ */}
            <div style={{
                backgroundColor: 'rgba(123, 45, 62, 0.1)',
                padding: '0.5rem 0.7rem',
                borderRadius: '6px',
                border: '1px dashed #7B2D3E',
                marginTop: '0.5rem'
            }}>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.7rem', color: '#4A4A4A', lineHeight: '1.5', margin: 0 }}>
                    <strong>Năm 1948:</strong> Khi Pháp dựng lên chính quyền Bảo Đại và gọi đó là "Quốc gia Việt Nam độc lập", Hồ Chí Minh đã gọi đây là <strong style={{ color: '#7B2D3E' }}>"Độc lập bánh vẽ"</strong> - thực chất chỉ là chính quyền bù nhìn.
                </p>
            </div>

            {/* Số trang */}
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem', color: '#999' }}>
                9
            </div>
        </div>
    );
}
