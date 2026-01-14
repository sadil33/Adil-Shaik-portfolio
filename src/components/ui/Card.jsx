import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className, ...props }) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`glass-panel rounded-2xl p-6 ${className || ''}`}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default Card;
