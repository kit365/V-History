import React, { useEffect, useState } from 'react';

interface Petal {
    id: number;
    left: string;
    duration: string;
    delay: string;
    size: string;
    rotation: string;
}

export function FloatingLotus() {
    const [petals, setPetals] = useState<Petal[]>([]);

    useEffect(() => {
        const newPetals = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            duration: `${10 + Math.random() * 15}s`,
            delay: `${Math.random() * 20}s`,
            size: `${15 + Math.random() * 20}px`,
            rotation: `${Math.random() * 360}deg`,
        }));
        setPetals(newPetals);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
            <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(110vh) translateX(100px) rotate(360deg);
            opacity: 0;
          }
        }
        .lotus-petal {
          position: absolute;
          background: radial-gradient(circle at 30% 30%, #ffb7c5, #ff69b4);
          clip-path: polygon(50% 0%, 100% 40%, 80% 100%, 20% 100%, 0% 40%);
          filter: blur(1px);
          animation: fall linear infinite;
        }
      `}</style>
            {petals.map((petal) => (
                <div
                    key={petal.id}
                    className="lotus-petal"
                    style={{
                        left: petal.left,
                        width: petal.size,
                        height: `calc(${petal.size} * 1.5)`,
                        animationDuration: petal.duration,
                        animationDelay: petal.delay,
                        transform: `rotate(${petal.rotation})`,
                    }}
                />
            ))}
        </div>
    );
}
