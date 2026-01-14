import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { motion, AnimatePresence } from 'framer-motion';

import Background from './Background';

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950/50 text-slate-900 dark:text-white transition-colors duration-300 font-sans overflow-x-hidden relative">
            <Background />
            <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

            <Sidebar isOpen={isSidebarOpen} close={() => setIsSidebarOpen(false)} />

            <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[calc(100vh-80px)]">
                <AnimatePresence mode="wait">
                    {/* We'll add page transitions here later */}
                    <Outlet />
                </AnimatePresence>
            </main>

            <footer className="py-6 text-center text-slate-500 dark:text-slate-400 text-sm">
                <p>© {new Date().getFullYear()} Adil Shaik. Built with React & Tailwind.</p>
            </footer>
        </div>
    );
};

export default Layout;
