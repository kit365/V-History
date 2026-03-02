// Trang Phần III - Trang 2: Độc lập thật sự với trích dẫn
export function Part3Page2() {
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
                Độc Lập "Thật Sự, Hoàn Toàn Và Triệt Để"
            </h2>
            <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.8rem',
                color: '#666',
                marginBottom: '0.75rem',
                lineHeight: '1.5'
            }}>
                Hồ Chí Minh quan niệm độc lập không phải là cái vỏ bọc bên ngoài, mà phải nắm thực quyền trên mọi lĩnh vực: <strong>Quân sự, Ngoại giao, Kinh tế và Chính trị</strong>.
            </p>

            {/* Trích dẫn 1 - Tuyên ngôn độc lập */}
            <div style={{
                backgroundColor: 'rgba(123, 45, 62, 0.08)',
                padding: '0.6rem 0.8rem',
                borderRadius: '6px',
                borderLeft: '3px solid #7B2D3E',
                marginBottom: '0.6rem'
            }}>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.75rem', color: '#4A4A4A', lineHeight: '1.5', fontStyle: 'italic', margin: 0 }}>
                    "Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do độc lập."
                </p>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.7rem', color: '#7B2D3E', marginTop: '0.3rem', marginBottom: 0, fontWeight: '600' }}>
                    Tuyên ngôn Độc lập (2/9/1945)
                </p>
            </div>

            {/* Trích dẫn 2 - Về tính hoàn toàn */}
            <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.75rem',
                color: '#1A1A1A',
                fontWeight: 'bold',
                marginBottom: '0.3rem'
            }}>
                Về tính "Hoàn toàn" (Không chấp nhận độc lập nửa vời):
            </p>
            <div style={{
                backgroundColor: 'rgba(91, 163, 198, 0.1)',
                padding: '0.6rem 0.8rem',
                borderRadius: '6px',
                borderLeft: '3px solid #5BA3C6',
                marginBottom: '0.6rem'
            }}>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.75rem', color: '#4A4A4A', lineHeight: '1.5', fontStyle: 'italic', margin: 0 }}>
                    "Độc lập mà không có quân đội riêng, ngoại giao riêng, kinh tế riêng thì không phải là độc lập."
                </p>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.7rem', color: '#3D8DB5', marginTop: '0.3rem', marginBottom: 0, fontWeight: '600' }}>
                    Giai đoạn đàm phán với Pháp (1946)
                </p>
            </div>

            {/* Trích dẫn 3 - Về toàn vẹn lãnh thổ */}
            <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.75rem',
                color: '#1A1A1A',
                fontWeight: 'bold',
                marginBottom: '0.3rem'
            }}>
                Về sự toàn vẹn lãnh thổ (Triệt để):
            </p>
            <div style={{
                backgroundColor: 'rgba(123, 45, 62, 0.08)',
                padding: '0.6rem 0.8rem',
                borderRadius: '6px',
                borderLeft: '3px solid #7B2D3E',
                marginBottom: '0.5rem'
            }}>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.75rem', color: '#4A4A4A', lineHeight: '1.5', fontStyle: 'italic', margin: 0 }}>
                    "Nam Bộ là máu của máu Việt Nam, là thịt của thịt Việt Nam. Sông có thể cạn, núi có thể mòn, song chân lý ấy không bao giờ thay đổi."
                </p>
                <p style={{ fontFamily: "'Lora', Georgia, serif", fontSize: '0.65rem', color: '#666', marginTop: '0.3rem', marginBottom: 0, fontStyle: 'italic' }}>
                    (Về âm mưu của Pháp tách Nam Bộ ra khỏi Việt Nam)
                </p>
            </div>

            {/* Số trang */}
            <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontFamily: "'Lora', Georgia, serif", fontSize: '0.85rem', color: '#999' }}>
                8
            </div>
        </div>
    );
}
