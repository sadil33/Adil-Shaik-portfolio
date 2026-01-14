import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Terminal } from 'lucide-react';
import Button from '../ui/Button'; // Assuming we placed it here
import { PROFILE } from '../../data/profile';

const Hero = () => {
    return (
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-400/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 text-sm font-medium mb-8 border border-primary-200 dark:border-primary-800"
                >
                    <Terminal className="w-4 h-4" />
                    <span>Hello, I'm {PROFILE.name}</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6"
                >
                    Transforming Logic into <br />
                    <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent">
                        Digital Experiences
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-2xl text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-10 leading-relaxed"
                >
                    {PROFILE.subtext} <br />
                    Building scalable enterprise solutions with Angular and Java, while driving operational efficiency through RPA (UiPath), Generative AI, and Infor IDM integrations.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                >
                    <Button variant="gradient" size="lg" onClick={() => window.location.href = '/projects'}>
                        View My Work <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="secondary" size="lg" onClick={() => window.location.href = '/contact'}>
                        Contact Me
                    </Button>
                </motion.div>

                {/* Tech Stack Hints */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="mt-20 pt-10 border-t border-slate-200 dark:border-slate-800 w-full max-w-4xl"
                >
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 uppercase tracking-wider font-semibold">Tech Stack</p>
                    <div className="relative flex overflow-hidden mask-gradient">
                        <motion.div
                            className="flex gap-12 items-center whitespace-nowrap"
                            animate={{ x: ["0%", "-50%"] }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                        >
                            {[
                                "Angular", "React", "UiPath (RPA)", "Generative AI", "Python", "Automation",
                                "Java", "Tailwind", "Infor M3/IDM", "SQL",
                                // Duplicate for seamless loop
                                "Angular", "React", "UiPath (RPA)", "Generative AI", "Python", "Automation",
                                "Java", "Tailwind", "Infor M3/IDM", "SQL"
                            ].map((tech, index) => (
                                <span key={index} className="text-xl font-bold text-slate-400 dark:text-slate-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors cursor-default">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
