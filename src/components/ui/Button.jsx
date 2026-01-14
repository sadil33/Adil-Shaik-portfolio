import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/cn'; // We need to create this util or just inline classes. 
// I'll inline for now or use clsx/tailwind-merge standard pattern if installed. 
// I installed clsx and tailwind-merge, so I should create the utility.

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    icon: Icon,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500",
        secondary: "bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 focus:ring-slate-500",
        gradient: "bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:opacity-90 shadow-lg shadow-primary-500/20",
        ghost: "bg-transparent text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800",
    };

    const sizes = {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`} // Temporary without cn util
            {...props}
        >
            {Icon && <Icon className="mr-2 h-4 w-4" />}
            {children}
        </motion.button>
    );
};

export default Button;
