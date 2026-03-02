import React, { useEffect, useState } from 'react';

export function CustomCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isPointer, setIsPointer] = useState(false);

    useEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            const target = e.target as HTMLElement;
            setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
        };

        window.addEventListener('mousemove', onMouseMove);
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, []);

    return (
        <>
            <style>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          background: rgba(201, 162, 39, 0.3);
          border: 1px solid rgba(201, 162, 39, 0.8);
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          transition: transform 0.15s ease-out, background 0.3s ease;
          transform: translate(-50%, -50%);
        }
        .custom-cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 4px;
          height: 4px;
          background: #C9A227;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10001;
          transform: translate(-50%, -50%);
        }
        .custom-cursor.pointer {
          transform: translate(-50%, -50%) scale(1.5);
          background: rgba(139, 35, 35, 0.2);
          border-color: rgba(139, 35, 35, 0.6);
        }
        @media (max-width: 768px) {
          .custom-cursor, .custom-cursor-dot { display: none; }
        }
      `}</style>
            <div
                className={`custom-cursor ${isPointer ? 'pointer' : ''}`}
                style={{ left: position.x, top: position.y }}
            />
            <div
                className="custom-cursor-dot"
                style={{ left: position.x, top: position.y }}
            />
        </>
    );
}
