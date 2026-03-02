import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Soundscape() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Create audio element if it doesn't exist
        if (!audioRef.current) {
            audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3'); // Example epic ambient
            audioRef.current.loop = true;
            audioRef.current.volume = 0.3;
        }
    }, []);

    const toggleSound = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play().catch(e => console.log("Audio play blocked by browser", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="fixed bottom-32 right-32 z-[9999] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isPlaying && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-maroon-primary/20 flex items-center gap-3"
                    >
                        <div className="flex gap-1">
                            {[1, 2, 3, 4].map((i) => (
                                <motion.div
                                    key={i}
                                    animate={{ height: [4, 12, 4] }}
                                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                    className="w-1 bg-maroon-primary rounded-full"
                                />
                            ))}
                        </div>
                        <span className="text-[10px] font-bold text-maroon-primary tracking-widest uppercase">Âm hưởng lịch sử</span>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleSound}
                className="w-12 h-12 bg-maroon-primary text-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden relative group"
            >
                <div className="absolute inset-0 bg-maroon-dark transform translate-y-full transition-transform group-hover:translate-y-0" />
                <div className="relative z-10">
                    {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
                </div>
            </motion.button>
        </div>
    );
}
