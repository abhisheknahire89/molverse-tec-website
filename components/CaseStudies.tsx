'use client';

import { motion } from 'framer-motion';

const caseStudies = [
    {
        title: "Type I Restriction Modification System (EcoR124I)",
        description: "The first unbiased electron density map of the pentameric complex comprising two restriction endonuclease subunits, two methylation subunits and one specificity subunit that enables bacteria to fight invading viral genomes.",
        image: "/case-studies/ecor124i-full.jpg", // Placeholder
    },
    {
        title: "EcoR124I Methyltransferase",
        description: "The first unbiased electron density map of the Mtase trimeric complex. This complex forms when two methylation subunits bind to the specificity subunit, housing the catalytic site for DNA methylation.",
        image: "/case-studies/ecor124i-mtase.jpg",
    },
    {
        title: "Active HsdR Subunit",
        description: "The HsdR subunit is crucial for ATP-dependent translocation and cleavage of unmethylated foreign DNA. The endonuclease activity is highly regulated through interactions with HsdS and HsdM subunits.",
        image: "/case-studies/ecor124i-hsdr.jpg",
    },
];

export default function CaseStudies() {
    return (
        <section className="relative py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#000000]">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-light text-[#e8e8e8] mb-4">
                        Precision Structure Determination
                    </h2>
                    <p className="text-base text-[#888888] max-w-2xl mx-auto">
                        Now accessible, affordable, reproducible and scalable
                    </p>
                </motion.div>

                {/* Case Studies Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {caseStudies.map((study, index) => (
                        <motion.div
                            key={study.title}
                            className="group relative overflow-hidden rounded-lg bg-gradient-to-b from-white/5 to-white/0 border border-white/10 p-6 backdrop-blur-sm hover:border-white/20 transition-all duration-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Placeholder for image - molecular structure visualization */}
                            <div className="w-full h-40 mb-4 rounded-lg bg-gradient-to-br from-[#333333] to-[#1a1a1a] flex items-center justify-center text-6xl font-light text-[#666666]">
                                🧬
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-[#e8e8e8] mb-3 leading-tight">
                                    {study.title}
                                </h3>
                                <p className="text-sm text-[#999999] leading-relaxed">
                                    {study.description}
                                </p>
                            </div>

                            {/* Subtle glow effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Description */}
                <motion.p
                    className="text-center text-[#666666] mt-12 text-sm max-w-3xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    Our novel technology, tailored solutions and comprehensive services cater to diverse needs of biochemists, cell biologists, drug developers, life sciences researchers, vaccinologists and beyond.
                </motion.p>
            </div>
        </section>
    );
}
