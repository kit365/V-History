import { useState } from 'react';

interface QuoteWithAudioProps {
    quote: string;
    audioId: string;
    playingQuote: string | null;
    onPlay: (id: string) => void;
}

export function QuoteWithAudio({ quote, audioId, playingQuote, onPlay }: QuoteWithAudioProps) {
    const isPlaying = playingQuote === audioId;

    return (
        <div style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '0.5rem',
            marginBottom: '0.75rem',
            padding: '0.5rem',
            borderRadius: '4px',
            backgroundColor: isPlaying ? 'rgba(123, 45, 62, 0.05)' : 'transparent',
            transition: 'all 0.3s ease'
        }}>
            <button
                onClick={() => {
                    console.log('Audio button clicked! audioId:', audioId);
                    onPlay(audioId);
                }}
                style={{
                    background: 'linear-gradient(135deg, #8B4513 0%, #654321 100%)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '28px',
                    height: '28px',
                    minWidth: '28px',
                    minHeight: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    flexShrink: 0,
                    marginTop: '0.15rem',
                    boxShadow: isPlaying ? '0 0 12px rgba(139, 69, 19, 0.6)' : '0 2px 4px rgba(0,0,0,0.2)',
                    transition: 'all 0.3s ease',
                    transform: isPlaying ? 'scale(1.1)' : 'scale(1)',
                    position: 'relative',
                    zIndex: 10,
                }}
                onMouseEnter={(e) => {
                    const target = e.currentTarget;
                    if (!isPlaying) {
                        target.style.transform = 'scale(1.1)';
                        target.style.boxShadow = '0 4px 8px rgba(139, 69, 19, 0.4)';
                    }
                }}
                onMouseLeave={(e) => {
                    const target = e.currentTarget;
                    if (!isPlaying) {
                        target.style.transform = 'scale(1)';
                        target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.2)';
                    }
                }}
            >
                {isPlaying ? (
                    // Pause icon
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <rect x="6" y="4" width="4" height="16" rx="1" />
                        <rect x="14" y="4" width="4" height="16" rx="1" />
                    </svg>
                ) : (
                    // Speaker/Volume icon
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                )}
            </button>
            <p style={{
                fontFamily: "'Lora', Georgia, serif",
                fontSize: '0.95rem',
                color: '#4A4A4A',
                lineHeight: '1.7',
                fontStyle: 'italic',
                margin: 0,
                flex: 1
            }}>
                {quote}
            </p>
        </div>
    );
}
