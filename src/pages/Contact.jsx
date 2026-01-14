import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { PROFILE } from '../data/profile';

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Construct Mailto Link
        const subject = `Portfolio Contact from ${formState.name}`;
        const body = `Name: ${formState.name}%0D%0AEmail: ${formState.email}%0D%0A%0D%0AMessage:%0D%0A${formState.message}`;
        const mailtoLink = `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}&body=${body}`;

        // Open Email Client
        window.location.href = mailtoLink;

        // Show success state UI
        setTimeout(() => {
            setIsSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
        }, 1000);
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="py-10 max-w-4xl mx-auto"
        >
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Get in <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Touch</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Contact Info */}
                <div className="space-y-6">
                    <Card className="h-full flex flex-col justify-center gap-8">
                        <h3 className="text-2xl font-bold">Contact Information</h3>

                        <div className="space-y-6">
                            <a href={`mailto:${PROFILE.email}`} className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
                                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Email Me</p>
                                    <p className="font-medium">{PROFILE.email}</p>
                                </div>
                            </a>

                            <a href={PROFILE.socials.find(s => s.name === 'LinkedIn').url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
                                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Connect on LinkedIn</p>
                                    <p className="font-medium">Adil Shaik</p>
                                </div>
                            </a>

                            <a href={PROFILE.socials.find(s => s.name === 'GitHub').url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-600 dark:text-slate-300 hover:text-primary-500 transition-colors">
                                <div className="p-3 bg-slate-200 dark:bg-slate-800 rounded-lg text-slate-700 dark:text-slate-300">
                                    <Github className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Check my Code</p>
                                    <p className="font-medium">github.com/19aa83237</p>
                                </div>
                            </a>
                        </div>
                    </Card>
                </div>

                {/* Contact Form */}
                <Card>
                    {isSubmitted ? (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="h-full flex flex-col items-center justify-center text-center py-10"
                        >
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                            <p className="text-slate-500 mb-6">Thanks for reaching out. I'll get back to you soon.</p>
                            <Button onClick={() => setIsSubmitted(false)} variant="secondary">Send Another</Button>
                        </motion.div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={formState.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={formState.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    required
                                    value={formState.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                                    placeholder="How can I help you?"
                                />
                            </div>

                            <Button type="submit" className="w-full" icon={Send}>
                                Send Message
                            </Button>
                        </form>
                    )}
                </Card>

            </div>
        </motion.div>
    );
};

export default Contact;
