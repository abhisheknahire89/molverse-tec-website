'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Navigation() {
    return (
        <motion.nav
            className="fixed top-0 left-0 right-0 z-40 bg-black/30 backdrop-blur-md border-b border-white/10"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <Image
                        src="/molverse-logo.png"
                        alt="MolVerse"
                        width={180}
                        height={60}
                        className="h-12 w-auto"
                        priority
                    />
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 text-sm">
                    <a
                        href="#hero"
                        className="text-[#e8e8e8] hover:text-white transition-colors"
                    >
                        Home
                    </a>
                    <a
                        href="#team"
                        className="text-[#e8e8e8] hover:text-white transition-colors"
                    >
                        Team
                    </a>
                    <a
                        href="#contact"
                        className="text-[#e8e8e8] hover:text-white transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </motion.nav>
    );
}
