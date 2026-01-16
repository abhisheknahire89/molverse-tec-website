'use client';

import { motion, useTransform, MotionValue } from 'framer-motion';

interface NarrativeSection {
    id: string;
    title: string;
    subtitle: string;
    scrollStart: number;
    scrollEnd: number;
    alignment: 'left' | 'center' | 'right';
}

const narrativeSections: NarrativeSection[] = [
    {
        id: 'hero',
        title: 'MolVerse',
        subtitle: 'Accelerating Molecular Discoveries',
        scrollStart: 0,
        scrollEnd: 0.15,
        alignment: 'center',
    },
    {
        id: 'mission',
        title: '"We need a people\'s cryo-EM"',
        subtitle: '— Richard Henderson, Nobel Prize in Chemistry 2017. We unlock the true 3D architecture of biological molecules, empowering faster discoveries and reducing animal model use.',
        scrollStart: 0.2,
        scrollEnd: 0.35,
        alignment: 'left',
    },
    {
        id: 'innovation',
        title: 'Sustainable Innovation',
        subtitle: 'Non-invasive, high-throughput methods to understand biomolecular structures and biochemical interactions into biological and disease pathways.',
        scrollStart: 0.4,
        scrollEnd: 0.55,
        alignment: 'center',
    },
    {
        id: 'precision',
        title: 'Unbiased Structural Solutions',
        subtitle: 'Decipher functional insights through high-resolution structures with precision defying hypotheses, biases and AI hallucinations.',
        scrollStart: 0.6,
        scrollEnd: 0.72,
        alignment: 'right',
    },
    {
        id: 'impact',
        title: '"When the world is in trouble, chemistry comes to the rescue!"',
        subtitle: '— Carolyn Bertozzi, Nobel Prize in Chemistry 2022. Making structural biology accessible from genomics to drug development.',
        scrollStart: 0.75,
        scrollEnd: 0.87,
        alignment: 'left',
    },
    {
        id: 'discovery',
        title: 'Accelerating Drug Discovery',
        subtitle: 'From molecular clarity to real-world outcomes. Shortening the path from biological insight to therapeutic impact.',
        scrollStart: 0.9,
        scrollEnd: 1,
        alignment: 'center',
    },
];

export default function NarrativeOverlay({
    scrollProgress,
}: {
    scrollProgress: MotionValue<number>;
}) {
    // Scroll hint fades out when user starts scrolling
    const scrollHintOpacity = useTransform(
        scrollProgress,
        [0, 0.05],
        [1, 0]
    );

    return (
        <div className="pointer-events-none fixed inset-0 z-10">
            {narrativeSections.map((section) => {
                return (
                    <NarrativeText
                        key={section.id}
                        section={section}
                        scrollProgress={scrollProgress}
                    />
                );
            })}

            {/* Scroll Hint - appears only on hero */}
            <motion.div
                className="fixed bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
                style={{ opacity: scrollHintOpacity }}
            >
                <motion.svg
                    className="w-8 h-8 text-[#b8b8b8]"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </motion.svg>
                <div className="text-sm text-[#888888] mt-2">Scroll to explore</div>
            </motion.div>
        </div>
    );
}

function NarrativeText({
    section,
    scrollProgress,
}: {
    section: NarrativeSection;
    scrollProgress: MotionValue<number>;
}) {
    // Calculate opacity with fade transitions
    const fadeRange = 0.05; // 5% fade in/out zone for cleaner transitions
    const opacity = useTransform(
        scrollProgress,
        [
            Math.max(0, section.scrollStart - fadeRange),
            section.scrollStart,
            section.scrollEnd,
            Math.min(1, section.scrollEnd + fadeRange),
        ],
        [0, 1, 1, 0]
    );

    // Micro parallax effect - subtle vertical movement
    const y = useTransform(
        scrollProgress,
        [section.scrollStart, section.scrollEnd],
        [20, -20] // 40px total movement for subtle parallax
    );

    const getAlignmentClasses = () => {
        switch (section.alignment) {
            case 'left':
                return 'items-start text-left pl-8 md:pl-16 lg:pl-24';
            case 'right':
                return 'items-end text-right pr-8 md:pr-16 lg:pr-24';
            case 'center':
            default:
                return 'items-center text-center';
        }
    };

    return (
        <motion.div
            style={{ opacity, y }}
            className={`fixed inset-0 flex flex-col justify-center ${getAlignmentClasses()} px-4`}
        >
            <div className="max-w-2xl">
                <h2 className="mb-4 text-4xl font-light tracking-tight text-[#e8e8e8] text-shadow-soft md:text-5xl lg:text-6xl">
                    {section.title}
                </h2>
                <p className="text-base text-[#b8b8b8] md:text-lg lg:text-xl">
                    {section.subtitle}
                </p>

                {/* CTA Button - only on final section */}
                {section.id === 'discovery' && (
                    <motion.button
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            contactSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className="pointer-events-auto mt-8 inline-block px-10 py-4 
                                   bg-gradient-to-r from-white/10 to-white/5 
                                   border border-white/40 text-white font-medium rounded-full 
                                   backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.15)]
                                   hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] 
                                   hover:border-white/60 hover:bg-white/15
                                   transition-all duration-300 cursor-pointer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Contact Us →
                    </motion.button>
                )}
            </div>
        </motion.div>
    );
}
