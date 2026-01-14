import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Briefcase, Award, Code, FolderGit2 } from 'lucide-react';
import Card from '../components/ui/Card';
import { PROFILE } from '../data/profile';
import { PROJECTS } from '../data/projects';

// Helper to render bold text
const renderBoldText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index} className="text-slate-900 dark:text-white font-bold">{part.slice(2, -2)}</strong>;
        }
        return part;
    });
};

const About = () => {

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="py-10 space-y-20 max-w-5xl mx-auto"
        >
            {/* Introduction with Typewriter */}
            <section className="text-center max-w-4xl mx-auto min-h-[200px]">
                <motion.h2 variants={item} className="text-3xl md:text-5xl font-bold mb-8">
                    <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                        My Journey
                    </span>
                </motion.h2>
                <div className="text-lg md:text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                    {renderBoldText(PROFILE.about.text)}
                </div>
            </section>



            {/* Work & Projects Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* Experience Timeline */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <Briefcase className="w-6 h-6 text-primary-500" />
                        <h3 className="text-2xl font-bold">Experience</h3>
                    </div>

                    <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 space-y-10 pl-8">
                        {/* Work Experience */}
                        <div className="relative">
                            <div className="absolute -left-[37px] top-1 h-5 w-5 rounded-full border-4 border-white dark:border-slate-900 bg-primary-500" />
                            <Card className="hover:shadow-lg transition-shadow">
                                <span className="text-sm text-primary-500 font-semibold">Aug 2023 - Present</span>
                                <h4 className="text-xl font-bold mt-1">Software Engineer Associate</h4>
                                <p className="text-slate-500 dark:text-slate-400 mb-4">Infor, Hyderabad</p>
                                <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    <li>Designed interactive UIs with <strong>Angular</strong> reducing manual effort.</li>
                                    <li>Developed custom <strong>H5 scripts</strong> to extend M3 ERP functionalities.</li>
                                    <li>Implemented seamless system integrations using <strong>Infor ION</strong> workflows.</li>
                                    <li>Leading <strong>Intelligent Automation</strong> initiatives using RPA & GenAI.</li>
                                </ul>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Automation Projects Highlight */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <FolderGit2 className="w-6 h-6 text-purple-500" />
                        <h3 className="text-2xl font-bold">Key Projects</h3>
                    </div>
                    <div className="space-y-6">
                        {PROJECTS.filter(p => p.id.includes('automation') || p.id.includes('genai') || p.id.includes('idm')).map(project => (
                            <Card key={project.id} className="group hover:border-purple-500/50 transition-colors cursor-pointer" onClick={() => window.location.href = `/projects/${project.id}`}>
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-lg group-hover:text-purple-500 transition-colors">{project.title}</h4>
                                    <span className="text-xs font-mono bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 px-2 py-1 rounded">{project.status}</span>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-3">{project.shortDescription}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.slice(0, 3).map(tech => (
                                        <span key={tech} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-slate-600 dark:text-slate-400">{tech}</span>
                                    ))}
                                    {project.techStack.length > 3 && <span className="text-xs px-2 py-1 text-slate-400">+{project.techStack.length - 3}</span>}
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>

            {/* Education & Skills Split */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Education */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <BookOpen className="w-6 h-6 text-accent-500" />
                        <h3 className="text-2xl font-bold">Education</h3>
                    </div>

                    <div className="space-y-6">
                        <Card>
                            <span className="text-sm text-accent-500 font-semibold">2019 - 2023</span>
                            <h4 className="text-lg font-bold mt-1">B.Tech in ECE</h4>
                            <p className="text-slate-500 mb-2">Pace Institute of Technology</p>
                            <div className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-yellow-500" />
                                <span className="font-bold">CGPA: 8.7</span>
                            </div>
                        </Card>
                        <Card>
                            <span className="text-sm text-accent-500 font-semibold">2017 - 2019</span>
                            <h4 className="text-lg font-bold mt-1">Intermediate (MPC)</h4>
                            <p className="text-slate-500 mb-2">Sri Gayatri Junior College</p>
                            <div className="flex items-center gap-2">
                                <Award className="w-4 h-4 text-yellow-500" />
                                <span className="font-bold">CGPA: 9.88 / 10</span>
                            </div>
                        </Card>
                    </div>
                </section>

                {/* Detailed Skills */}
                <section>
                    <div className="flex items-center gap-3 mb-8">
                        <Code className="w-6 h-6 text-primary-500" />
                        <h3 className="text-2xl font-bold">Detailed Skills</h3>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {PROFILE.skills.map((skillGroup) => (
                            <div key={skillGroup.category}>
                                <h5 className="text-sm font-bold text-slate-500 mb-2 uppercase tracking-wide">{skillGroup.category}</h5>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 rounded-full text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default About;
