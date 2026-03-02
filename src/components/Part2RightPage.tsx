// Trang phải của Phần II - hiển thị nội dung
export function Part2RightPage() {
    return (
        <div style={{ animation: 'pageIn 0.6s ease-out', position: 'relative', height: '100%' }}>
            {/* Họa tiết nền */}
            <div style={{
                position: 'absolute',
                bottom: '-50px',
                right: '-50px',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                border: '1px solid rgba(212, 197, 160, 0.3)',
                pointerEvents: 'none'
            }}>
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '240px',
                    height: '240px',
                    borderRadius: '50%',
                    border: '1px solid rgba(212, 197, 160, 0.2)'
                }}></div>
            </div>

            {/* Tiêu đề */}
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.75rem', color: '#1A1A1A', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                Phần II
            </h2>
            <h3 style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem', color: '#7B2D3E', marginBottom: '1rem', fontStyle: 'italic' }}>
                Gắn Với Tự Do, Cơm No, Áo Ấm, Và Hạnh Phúc của Nhân Dân
            </h3>

            {/* Xuyên suốt tư tưởng */}
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1.05rem', color: '#1A1A1A', fontWeight: 'bold', marginBottom: '0.75rem' }}>
                Xuyên suốt tư tưởng của Người:
            </p>

            <ul style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: '#4A4A4A', lineHeight: '1.7', paddingLeft: '1.5rem', margin: '0 0 1rem 0' }}>
                <li style={{ marginBottom: '0.5rem' }}>
                    Độc lập dân tộc phải gắn với tự do của nhân dân.
                </li>
                <li>
                    Độc lập phải thiết thực, tức là phải gắn với cơm no, áo ấm và hạnh phúc của nhân dân.
                </li>
            </ul>

            {/* Nội dung chính */}
            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: '#4A4A4A', lineHeight: '1.7', textAlign: 'justify', marginBottom: '1.25rem' }}>
                Đây là quan niệm tiến bộ, toàn diện về độc lập dân tộc, gắn liền với quyền và lợi ích thiết thực của nhân dân lao động.
            </p>

            <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '1rem', color: '#4A4A4A', lineHeight: '1.7', textAlign: 'justify' }}>
                Người đã đề ra những mục tiêu cụ thể: bỏ sưu thuế cho dân cày nghèo, thi hành luật ngày làm 8 giờ, thể hiện sự quan tâm sâu sắc đến đời sống nhân dân.
            </p>

            {/* Số trang */}
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontFamily: "'Lora', Georgia, serif", fontSize: '0.9rem', color: '#999' }}>
                5
            </div>
        </div>
    );
}
