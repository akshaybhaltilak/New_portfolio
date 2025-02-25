import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
];

const socialLinks = [
    { icon: Github, href: 'https://github.com/akshay-bhaltilak', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/akshay-bhaltilak', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/akshay-bhaltilak', label: 'Twitter' },
    { icon: Mail, href: 'mailto:akshaybhaltilak989@gmail.com', label: 'Email' }
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        
        // Find the current active menu item based on URL
        const currentPath = window.location.pathname;
        const index = menuItems.findIndex(item => item.href === currentPath);
        setActiveIndex(index >= 0 ? index : 0);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white shadow-lg' : 'py-4 bg-white bg-opacity-90 backdrop-blur-sm'}`}>
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link to="/" className="group flex items-center space-x-2">
                    <motion.img 
                        src="https://avatars.githubusercontent.com/u/99380793?s=400&v=4" 
                        alt="Akshay Bhaltilak" 
                        className="h-10 w-10 rounded-full ring-2 ring-orange-500 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                    />
                    <div className="flex flex-col">
                        <span className="text-xl font-bold text-black group-hover:text-orange-500 transition-colors duration-300">
                            Akshay Bhaltilak
                        </span>
                        <span className="text-xs text-orange-500 -mt-1">Full Stack Developer</span>
                    </div>
                </Link>
                
                <div className="hidden lg:flex items-center space-x-8">
                    <nav className="relative">
                        <ul className="flex space-x-8">
                            {menuItems.map((item, index) => (
                                <li key={item.name} 
                                    onMouseEnter={() => setActiveIndex(index)}
                                    onMouseLeave={() => {
                                        const currentPath = window.location.pathname;
                                        const currentIndex = menuItems.findIndex(i => i.href === currentPath);
                                        setActiveIndex(currentIndex >= 0 ? currentIndex : null);
                                    }}
                                >
                                    <NavLink 
                                        to={item.href} 
                                        className={({ isActive }) => 
                                            `relative font-medium transition-colors duration-300 py-2 ${
                                                isActive ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                                            }`
                                        }
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        
                        {/* Animated underline indicator */}
                        {activeIndex !== null && (
                            <motion.div 
                                className="absolute bottom-0 h-0.5 bg-orange-500"
                                initial={false}
                                animate={{ 
                                    left: `calc(${activeIndex * 100}% + ${activeIndex * 32}px)`, 
                                    width: `${menuItems[activeIndex].name.length * 10}px` 
                                }}
                                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            />
                        )}
                    </nav>
                    
                    <div className="flex space-x-4 items-center pl-6 border-l border-gray-200">
                        {socialLinks.map((social) => (
                            <motion.a 
                                key={social.label} 
                                href={social.href} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="text-gray-600 hover:text-orange-500 transition-colors"
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.95 }}
                                title={social.label}
                            >
                                <social.icon className="h-5 w-5" />
                            </motion.a>
                        ))}
                    </div>
                    
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-orange-500 text-white px-4 py-2 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-md"
                    >
                        Resume
                    </motion.button>
                </div>
                
                <motion.button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className="lg:hidden p-2 text-black bg-gray-100 rounded-md hover:bg-orange-100 transition-colors"
                    whileTap={{ scale: 0.9 }}
                >
                    <Menu className="h-6 w-6" />
                </motion.button>
            </div>
            
            {/* Mobile menu with animation */}
            {isMenuOpen && (
                <motion.div 
                    className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm lg:hidden flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div 
                        className="h-full w-72 bg-white shadow-lg p-6 flex flex-col"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        transition={{ type: 'spring', damping: 20 }}
                    >
                        <div className="flex justify-between items-center mb-8">
                            <Link to="/" className="flex items-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                                <img src="https://avatars.githubusercontent.com/u/99380793?s=400&v=4" alt="Akshay Bhaltilak" className="h-10 w-10 rounded-full ring-2 ring-orange-500" />
                                <span className="font-bold text-black">
                                    <span className="text-orange-500">A</span>kshay
                                </span>
                            </Link>
                            <motion.button 
                                onClick={() => setIsMenuOpen(false)} 
                                className="p-2 rounded-full bg-gray-100 hover:bg-orange-100 transition-colors"
                                whileTap={{ scale: 0.9 }}
                            >
                                <X className="h-5 w-5" />
                            </motion.button>
                        </div>
                        
                        <nav className="mb-8">
                            <ul className="space-y-2">
                                {menuItems.map((item, index) => (
                                    <motion.li 
                                        key={item.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <NavLink 
                                            to={item.href} 
                                            onClick={() => setIsMenuOpen(false)} 
                                            className={({ isActive }) => 
                                                `block py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                                                    isActive 
                                                        ? 'bg-orange-50 text-orange-500 border-l-4 border-orange-500' 
                                                        : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500 hover:pl-5'
                                                }`
                                            }
                                        >
                                            {item.name}
                                        </NavLink>
                                    </motion.li>
                                ))}
                            </ul>
                        </nav>
                        
                        <div className="mt-auto">
                            <div className="mb-6">
                                <motion.button 
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors shadow-md flex justify-center items-center"
                                >
                                    Download Resume
                                </motion.button>
                            </div>
                            
                            <div className="pt-6 border-t border-gray-200">
                                <p className="text-sm text-gray-600 mb-4">Connect with me</p>
                                <div className="flex justify-between">
                                    {socialLinks.map((social, index) => (
                                        <motion.a 
                                            key={social.label} 
                                            href={social.href} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex flex-col items-center text-gray-600 hover:text-orange-500 transition-colors"
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            transition={{ delay: 0.3 + (index * 0.1) }}
                                            whileHover={{ y: -3 }}
                                        >
                                            <div className="p-2 bg-gray-100 rounded-full">
                                                <social.icon className="h-5 w-5" />
                                            </div>
                                            <span className="text-xs mt-1">{social.label}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </header>
    );
}