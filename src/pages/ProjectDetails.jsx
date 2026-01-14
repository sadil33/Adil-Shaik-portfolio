import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Activity, Layers, Database, Mail, Bot, Brain, FileText, AlertCircle, CheckCircle, Bell, X, PlayCircle, ChevronRight, RefreshCw, PlusCircle, Save } from 'lucide-react';
import Button from '../components/ui/Button';
import { PROJECTS } from '../data/projects';

// Internal Modal Component
const WorkflowModal = ({ isOpen, close, workflow }) => {
    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={close}
                        className="fixed inset-0 bg-slate-900/90 backdrop-blur-md z-[60] flex items-center justify-center p-4"
                    >
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-slate-950 rounded-2xl w-full max-w-6xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[90vh]"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl">
                                <div>
                                    <h3 className="text-2xl font-bold flex items-center gap-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-600">
                                        <Activity className="w-6 h-6 text-purple-500 animate-pulse" /> Intelligent Automation Flow
                                    </h3>
                                    <p className="text-slate-500 text-sm">End-to-end execution pipeline</p>
                                </div>
                                <button
                                    onClick={close}
                                    className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                                >
                                    <X className="w-6 h-6 text-slate-500" />
                                </button>
                            </div>

                            {/* Body - Horizontal Scroll */}
                            <div className="p-8 overflow-x-auto custom-scrollbar bg-slate-50/50 dark:bg-slate-900/50 relative">
                                <div className="flex items-start gap-8 min-w-max px-4 py-12">
                                    {workflow.map((step, idx) => {
                                        const Icon = {
                                            Mail, Bot, Brain, FileText, AlertCircle, CheckCircle, Bell, RefreshCw, PlusCircle, Save, PlayCircle, Database
                                        }[step.icon] || Activity;

                                        return (
                                            <div key={idx} className="relative flex flex-col items-center group">
                                                {/* Connector Line (Horizontal) */}
                                                {idx < workflow.length - 1 && (
                                                    <>
                                                        <div className="absolute top-8 left-[50%] w-[calc(100%+2rem)] h-0.5 bg-slate-200 dark:bg-slate-800 -z-10">
                                                            <motion.div
                                                                initial={{ width: "0%" }}
                                                                animate={{ width: "100%" }}
                                                                transition={{ delay: idx * 0.4, duration: 0.5 }}
                                                                className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                                                            />
                                                            {/* Moving Particle */}
                                                            <motion.div
                                                                animate={{ x: [0, 200], opacity: [0, 1, 0] }}
                                                                transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.4 }}
                                                                className="absolute top-1/2 -translate-y-1/2 w-12 h-12 bg-purple-500/20 blur-xl rounded-full"
                                                            />
                                                        </div>

                                                        {/* Arrow Indicator in Gap */}
                                                        <motion.div
                                                            initial={{ opacity: 0, x: -10 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: idx * 0.4 + 0.3 }}
                                                            className="absolute top-8 -translate-y-1/2 left-[calc(100%+0.6rem)] z-0 text-purple-300 dark:text-purple-800"
                                                        >
                                                            <ChevronRight className="w-8 h-8 opacity-50" />
                                                            <motion.div
                                                                animate={{ x: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                                                                transition={{ duration: 1.5, repeat: Infinity }}
                                                                className="absolute inset-0 text-purple-500"
                                                            >
                                                                <ChevronRight className="w-8 h-8" />
                                                            </motion.div>
                                                        </motion.div>
                                                    </>
                                                )}

                                                {/* Node */}
                                                <motion.div
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    animate={{ scale: 1, opacity: 1 }}
                                                    transition={{ delay: idx * 0.2, type: "spring" }}
                                                    className="relative z-10"
                                                >
                                                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-xl flex items-center justify-center group-hover:border-purple-500 dark:group-hover:border-purple-500 transition-colors duration-300 relative overflow-hidden">
                                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                        <Icon className="w-8 h-8 text-slate-400 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 transform group-hover:scale-110" />

                                                        {/* Ripple Effect */}
                                                        <motion.div
                                                            initial={{ scale: 1, opacity: 0 }}
                                                            animate={{ scale: 1.5, opacity: [0.5, 0] }}
                                                            transition={{ duration: 1.5, repeat: Infinity, delay: idx * 0.2 }}
                                                            className="absolute inset-0 border border-purple-500 rounded-2xl"
                                                        />
                                                    </div>

                                                    {/* Step Number Badge */}
                                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-xs ring-4 ring-white dark:ring-slate-950 z-20">
                                                        {idx + 1}
                                                    </div>
                                                </motion.div>

                                                {/* Content Card */}
                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: idx * 0.2 + 0.2 }}
                                                    className="mt-6 w-64 bg-white dark:bg-slate-900 p-5 rounded-xl border border-slate-100 dark:border-slate-800 shadow-lg text-center"
                                                >
                                                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">{step.step}</h4>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                                        {step.desc}
                                                    </p>
                                                </motion.div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Footer Metrics */}
                            <div className="p-6 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex justify-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: workflow.length * 0.2 }}
                                    className="flex items-center gap-8 py-2 px-6 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-200 dark:border-slate-700"
                                >
                                    <div className="text-center">
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Time Saved</p>
                                        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">95%</p>
                                    </div>
                                    <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
                                    <div className="text-center">
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">Accuracy</p>
                                        <p className="font-bold text-green-500">99.9%</p>
                                    </div>
                                    <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />
                                    <div className="text-center">
                                        <p className="text-xs text-slate-500 uppercase tracking-wider font-bold">ROI</p>
                                        <p className="font-bold text-blue-500">20x Year 1</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = PROJECTS.find((p) => p.id === id);
    const [isWorkflowOpen, setIsWorkflowOpen] = useState(false);

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                <Button onClick={() => window.history.back()}>Go Back</Button>
            </div>
        );
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-10 max-w-4xl mx-auto"
            >
                {/* Header */}
                <Link to="/projects" className="inline-flex items-center text-slate-500 hover:text-primary-500 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Projects
                </Link>

                <div className="mb-10">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">{project.title}</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300">{project.shortDescription}</p>

                    <div className="flex flex-wrap gap-4 mt-6">
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Button variant="secondary" size="sm" icon={Github}>View Code</Button>
                            </a>
                        )}
                        {project.demo && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                <Button variant="primary" size="sm" icon={ExternalLink}>Live Demo</Button>
                            </a>
                        )}

                        {/* Visualize Workflow Button */}
                        {project.workflow && (
                            <Button
                                variant="outline"
                                size="sm"
                                icon={PlayCircle}
                                onClick={() => setIsWorkflowOpen(true)}
                                className="border-purple-200 text-purple-600 hover:bg-purple-50 dark:border-purple-800 dark:text-purple-400 dark:hover:bg-purple-900/20"
                            >
                                Visualize Workflow
                            </Button>
                        )}
                    </div>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Left Column: Details (Challenges & Impact) */}
                    <div className="lg:col-span-2 space-y-10 order-2 lg:order-1">
                        <section>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Activity className="w-6 h-6 text-primary-500" /> Overview
                            </h3>
                            <p className="text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                                {project.fullDescription}
                            </p>
                        </section>

                        <section>
                            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                                <Layers className="w-6 h-6 text-accent-500" /> Key Features
                            </h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.features?.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800">
                                        <div className="w-2 h-2 rounded-full bg-primary-500 mt-2" />
                                        <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {project.challenges && (
                            <section>
                                <h3 className="text-2xl font-bold mb-6">Challenges & Solutions</h3>
                                <div className="space-y-6">
                                    {project.challenges.map((item, idx) => (
                                        <div key={idx} className="glass-panel p-6 rounded-xl border-l-4 border-primary-500">
                                            <h4 className="font-bold text-lg mb-2 text-slate-900 dark:text-white">{item.title}</h4>
                                            <div className="grid md:grid-cols-2 gap-4">
                                                <div>
                                                    <span className="text-xs font-semibold uppercase text-red-500 tracking-wider">The Challenge</span>
                                                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                                                        Addressed complexity in {item.title.toLowerCase()}.
                                                    </p>
                                                </div>
                                                <div>
                                                    <span className="text-xs font-semibold uppercase text-green-500 tracking-wider">The Solution</span>
                                                    <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">{item.solution}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {project.impact && (
                            <section>
                                <h3 className="text-2xl font-bold mb-4">Impact & Results</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {project.impact.map((result, idx) => (
                                        <div key={idx} className="p-4 bg-gradient-to-br from-primary-50 dark:from-primary-900/10 to-transparent rounded-xl border border-primary-100 dark:border-primary-800/30 flex items-center gap-3">
                                            <div className="p-2 bg-green-100 dark:bg-green-900/20 rounded-full text-green-600 dark:text-green-400">
                                                <Activity className="w-4 h-4" />
                                            </div>
                                            <span className="font-medium text-slate-700 dark:text-slate-200">{result}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h4 className="font-bold mb-4 flex items-center gap-2">
                                <Database className="w-5 h-5 text-slate-500" /> Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {project.aiPrompts && (
                            <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                                <h4 className="font-bold mb-4 flex items-center gap-2">
                                    <span className="text-xl">🤖</span> AI Prompts Used
                                </h4>
                                <div className="space-y-4">
                                    {project.aiPrompts.map((item, idx) => (
                                        <div key={idx} className="bg-white dark:bg-slate-950 p-3 rounded-lg border border-slate-200 dark:border-slate-800 text-sm">
                                            <p className="font-semibold text-primary-600 mb-1">{item.name}</p>
                                            <div className="font-mono text-xs bg-slate-100 dark:bg-slate-900 p-2 rounded text-slate-600 dark:text-slate-400">
                                                "{item.prompt}"
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h4 className="font-bold mb-4">Project Info</h4>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span className="text-slate-500">Complexity</span>
                                    <span className="font-medium text-accent-500">{project.complexity}</span>
                                </div>
                                <div className="flex justify-between border-b border-slate-200 dark:border-slate-700 pb-2">
                                    <span className="text-slate-500">Status</span>
                                    <span className="font-medium text-green-500">{project.status}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>

            {/* Render Modal */}
            {project.workflow && (
                <WorkflowModal
                    isOpen={isWorkflowOpen}
                    close={() => setIsWorkflowOpen(false)}
                    workflow={project.workflow}
                />
            )}
        </>
    );
};

export default ProjectDetails;
