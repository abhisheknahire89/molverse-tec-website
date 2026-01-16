'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true);

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            setSubmitMessage('✅ Thank you! We\'ll be in touch soon.');
            setIsSubmitting(false);
            setFormState({ name: '', email: '', company: '', message: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="relative py-32 px-6 bg-gradient-to-b from-[#000000] to-[#0a0a0a]">
            <div className="max-w-xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-light text-[#e8e8e8] mb-3">
                        Contact Us
                    </h2>
                    <p className="text-base text-[#888888]">
                        Get in touch to learn more about MolVerse
                    </p>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Name */}
                    <div>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#555555] focus:outline-none focus:border-white/30 transition-colors text-sm"
                            placeholder="Your name"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <input
                            type="email"
                            id="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#555555] focus:outline-none focus:border-white/30 transition-colors text-sm"
                            placeholder="Your email"
                        />
                    </div>

                    {/* Company */}
                    <div>
                        <input
                            type="text"
                            id="company"
                            required
                            value={formState.company}
                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#555555] focus:outline-none focus:border-white/30 transition-colors text-sm"
                            placeholder="Institute/Company"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <textarea
                            id="message"
                            required
                            rows={4}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-[#555555] focus:outline-none focus:border-white/30 transition-colors resize-none text-sm"
                            placeholder="Your message"
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-lg hover:bg-white/15 hover:border-white/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                        whileHover={{ scale: isSubmitting ? 1 : 1.01 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.99 }}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>

                    {/* Submit Message */}
                    {submitMessage && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center text-sm text-green-400"
                        >
                            {submitMessage}
                        </motion.p>
                    )}
                </motion.form>

                {/* Footer */}
                <motion.div
                    className="mt-16 pt-8 border-t border-white/5 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <p className="text-[#555555] text-xs">© MolVerse, 2023</p>
                </motion.div>
            </div>
        </section>
    );
}
