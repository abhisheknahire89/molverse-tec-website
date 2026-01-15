'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ContactForm() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
        captcha: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simple captcha check
        if (formState.captcha.toLowerCase() !== 'brasília' && formState.captcha.toLowerCase() !== 'brasilia') {
            setSubmitMessage('❌ Captcha answer is incorrect');
            return;
        }

        setIsSubmitting(true);

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            setSubmitMessage('✅ Thank you! We\'ll be in touch soon.');
            setIsSubmitting(false);
            setFormState({ name: '', email: '', company: '', message: '', captcha: '' });
        }, 1500);
    };

    return (
        <section id="contact" className="relative py-24 px-6 bg-gradient-to-b from-[#0a0a0a] to-[#000000]">
            <div className="max-w-2xl mx-auto">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-light text-[#e8e8e8] mb-4">
                        Contact Us
                    </h2>
                    <p className="text-lg text-[#b8b8b8]">
                        Get in touch to learn more about MolVerse
                    </p>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm text-[#b8b8b8] mb-2">
                            Your name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-white/40 transition-colors"
                            placeholder="John Doe"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block text-sm text-[#b8b8b8] mb-2">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-white/40 transition-colors"
                            placeholder="john@example.com"
                        />
                    </div>

                    {/* Company */}
                    <div>
                        <label htmlFor="company" className="block text-sm text-[#b8b8b8] mb-2">
                            Institute/Company
                        </label>
                        <input
                            type="text"
                            id="company"
                            required
                            value={formState.company}
                            onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-white/40 transition-colors"
                            placeholder="Your Organization"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="block text-sm text-[#b8b8b8] mb-2">
                            Your message
                        </label>
                        <textarea
                            id="message"
                            required
                            rows={5}
                            value={formState.message}
                            onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-white/40 transition-colors resize-none"
                            placeholder="Tell us about your research interests..."
                        />
                    </div>

                    {/* Captcha */}
                    <div>
                        <label htmlFor="captcha" className="block text-sm text-[#b8b8b8] mb-2">
                            The capital of Brazil?
                        </label>
                        <input
                            type="text"
                            id="captcha"
                            required
                            value={formState.captcha}
                            onChange={(e) => setFormState({ ...formState, captcha: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-[#666666] focus:outline-none focus:border-white/40 transition-colors"
                            placeholder="Your answer"
                        />
                    </div>

                    {/* Submit Button */}
                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-8 py-4 bg-gradient-to-r from-white/10 to-white/5 border border-white/40 text-white font-medium rounded-full backdrop-blur-sm shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:border-white/60 hover:bg-white/15 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </motion.button>

                    {/* Submit Message */}
                    {submitMessage && (
                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`text-center text-sm ${submitMessage.includes('✅') ? 'text-green-400' : 'text-red-400'
                                }`}
                        >
                            {submitMessage}
                        </motion.p>
                    )}
                </motion.form>

                {/* Footer */}
                <motion.div
                    className="mt-16 pt-8 border-t border-white/10 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                >
                    <p className="text-[#666666] text-sm mb-2">© MolVerse, 2023</p>
                    <div className="flex items-center justify-center gap-6 text-[#888888] text-xs">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <span>·</span>
                        <a href="#team" className="hover:text-white transition-colors">Team</a>
                        <span>·</span>
                        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
