import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Server, Layout } from 'lucide-react';
import Card from '../components/ui/Card';
import { PROJECTS } from '../data/projects';

const Projects = () => {
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
            className="py-10"
        >
            <div className="mb-12 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Featured <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Projects</span>
                </h2>
                <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                    A showcase of my work in UI/UX, ERP Extensions, and System Integration.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {PROJECTS.map((project) => (
                    <Link to={`/projects/${project.id}`} key={project.id} className="block group">
                        <Card className="h-full hover:border-primary-500/50 transition-all duration-300 relative overflow-hidden group">

                            {/* Decorative Background Gradient */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 rounded-bl-[100px] -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400">
                                        {/* Dynamic Icon based on tech stack could go here, simplicity for now */}
                                        <Code className="w-6 h-6" />
                                    </div>
                                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${project.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-700'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary-500 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-3">
                                    {project.shortDescription}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.slice(0, 3).map((tech) => (
                                        <span key={tech} className="text-xs px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded text-slate-600 dark:text-slate-400">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.techStack.length > 3 && (
                                        <span className="text-xs px-2 py-1 text-slate-500">+{project.techStack.length - 3}</span>
                                    )}
                                </div>

                                <div className="flex items-center text-primary-600 dark:text-primary-400 text-sm font-medium group-hover:underline">
                                    View Details <ArrowRight className="ml-1 w-4 h-4" />
                                </div>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </motion.div>
    );
};

export default Projects;
