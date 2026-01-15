'use client';

import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: "Pradeep Hiriyur Nagaraj",
        role: "Founder & CEO",
        image: "/team/pradeep.jpg", // Placeholder - can be added later
    },
    {
        name: "Tapan Pancholi",
        role: "Co-founder & CTO",
        image: "/team/tapan.jpg",
    },
    {
        name: "Ramesh Tata Anantha (Gupta)",
        role: "Co-founder & COO",
        image: "/team/ramesh.jpg",
    },
];

export default function TeamSection() {
    return (
        <section id="team" className="relative py-24 px-6 bg-gradient-to-b from-[#000000] to-[#0a0a0a]">
            <div className="max-w-6xl mx-auto">
                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.name}
                            className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-white/5 to-white/0 border border-white/10 p-8 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Placeholder for photo - can be replaced with actual images */}
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#666666] to-[#333333] flex items-center justify-center text-4xl font-light text-white">
                                {member.name.charAt(0)}
                            </div>

                            <div className="text-center">
                                <h3 className="text-xl font-medium text-[#e8e8e8] mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-sm text-[#999999]">
                                    {member.role}
                                </p>
                            </div>

                            {/* Subtle glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Additional Team Description */}
                <motion.p
                    className="text-center text-[#888888] mt-12 max-w-4xl mx-auto text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    Our multidisciplinary team combines deep scientific knowledge with business acumen, ensuring we understand both the technical challenges and commercial realities of drug development. With backgrounds spanning biotechnology, bioinformatics, multi-omics, pharmaceutical sciences, and enterprise management, we deliver solutions that are both scientifically rigorous and commercially viable.
                </motion.p>
            </div>
        </section>
    );
}
