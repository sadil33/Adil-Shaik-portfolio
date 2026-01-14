import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
            {/* Dot Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.4] dark:opacity-[0.1]"
                style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, rgb(148 163 184 / 0.3) 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }}
            />

            {/* Orb 1: Primary Purple/Connect */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-300/30 dark:bg-primary-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal"
            />

            {/* Orb 2: Accent Pink/Warm */}
            <motion.div
                animate={{
                    x: [0, -100, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.5, 1]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-pink-300/30 dark:bg-accent-600/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal"
            />

            {/* Orb 3: Soft Blue/Balance */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 50, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-blue-200/40 dark:bg-blue-600/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-normal"
            />
        </div>
    );
};

export default Background;
