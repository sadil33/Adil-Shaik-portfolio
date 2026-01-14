import React from 'react';
import Hero from '../components/sections/Hero';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Hero />
            {/* We can add a "Featured Projects" preview or "Stats" section here later */}
        </motion.div>
    );
};

export default Home;
