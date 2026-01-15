'use client';

import { motion, useTransform, MotionValue } from 'framer-motion';

interface ScrollProgressProps {
    scrollProgress: MotionValue<number>;
}

const sections = [
    { start: 0, end: 0.25 },      // Hero
    { start: 0.3, end: 0.55 },    // Complexity
    { start: 0.6, end: 0.72 },    // AI Intelligence
    { start: 0.75, end: 0.87 },   // Rigor
    { start: 0.9, end: 1 },       // Discovery
];

export default function ScrollProgress({ scrollProgress }: ScrollProgressProps) {
    return (
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-3">
            {sections.map((section, i) => {
                // Calculate opacity based on scroll position within section
                const opacity = useTransform(
                    scrollProgress,
                    [
                        section.start - 0.05,
                        section.start,
                        section.end,
                        section.end + 0.05,
                    ],
                    [0.3, 1, 1, 0.3]
                );

                return (
                    <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-white"
                        style={{ opacity }}
                    />
                );
            })}
        </div>
    );
}
