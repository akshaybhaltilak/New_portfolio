import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
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

        const currentPath = window.location.pathname;
        const index = menuItems.findIndex(item => item.href === currentPath);
        setActiveIndex(index >= 0 ? index : 0);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking outside
    useEffect(() => {
        if (!isMenuOpen) return;
        
        const handleClickOutside = (e) => {
            if (!e.target.closest('.mobile-menu') && !e.target.closest('.menu-button')) {
                setIsMenuOpen(false);
            }
        };
        
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    return (
        <>
            <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'py-1 sm:py-2 bg-white shadow-lg' : 'py-2 sm:py-4 bg-white bg-opacity-90 backdrop-blur-sm'}`}>
                <div className="mx-auto flex items-center justify-between px-3 sm:px-4 lg:px-6 max-w-6xl">
                    <Link to="/" className="group flex items-center space-x-2">
                        <motion.img 
                            src="https://avatars.githubusercontent.com/u/99380793?s=400&v=4" 
                            alt="Akshay Bhaltilak" 
                            className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 rounded-full ring-2 ring-orange-500 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                        />
                        <div className="flex flex-col">
                            <span className="text-base sm:text-lg md:text-xl font-bold text-black group-hover:text-orange-500 transition-colors duration-300">
                                Akshay Bhaltilak
                            </span>
                            <span className="text-xs text-orange-500 -mt-1 hidden sm:block">Full Stack Developer</span>
                        </div>
                    </Link>
                    
                    <div className="hidden lg:flex items-center space-x-4 md:space-x-6 lg:space-x-8">
                        <nav className="relative">
                            <ul className="flex space-x-4 md:space-x-6 lg:space-x-8">
                                {menuItems.map((item, index) => (
                                    <li key={item.name}>
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
                        </nav>
                        
                        <div className="flex space-x-3 md:space-x-4 items-center pl-4 md:pl-6 border-l border-gray-200">
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
                                    <social.icon className="h-4 w-4 md:h-5 md:w-5" />
                                </motion.a>
                            ))}
                        </div>
                        
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-orange-500 text-white px-3 py-1 sm:px-4 sm:py-2 text-sm md:text-base rounded-full font-medium hover:bg-orange-600 transition-colors shadow-md"
                        >
                            Resume
                        </motion.button>
                    </div>
                    
                    <motion.button 
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMenuOpen(!isMenuOpen);
                        }} 
                        className="menu-button lg:hidden p-2 text-black bg-gray-100 rounded-md hover:bg-orange-100 transition-colors"
                        whileTap={{ scale: 0.9 }}
                    >
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </motion.button>
                </div>
            </header>
            
            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div 
                    className="mobile-menu fixed inset-0 z-40 lg:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-25" onClick={() => setIsMenuOpen(false)}></div>
                    <motion.div 
                        className="absolute right-0 top-0 h-full w-64 sm:w-72 bg-white shadow-xl p-4"
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex justify-end">
                                <button 
                                    onClick={() => setIsMenuOpen(false)}
                                    className="p-2 text-gray-500 hover:text-orange-500"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                            
                            <nav className="mt-6">
                                <ul className="space-y-4">
                                    {menuItems.map((item) => (
                                        <li key={item.name}>
                                            <NavLink 
                                                to={item.href}
                                                onClick={() => setIsMenuOpen(false)}
                                                className={({ isActive }) => 
                                                    `block py-2 px-3 rounded font-medium transition-colors ${
                                                        isActive 
                                                            ? 'bg-orange-50 text-orange-500' 
                                                            : 'text-gray-700 hover:bg-gray-50 hover:text-orange-500'
                                                    }`
                                                }
                                            >
                                                {item.name}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            
                            <div className="mt-8 space-y-6">
                                <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-full font-medium hover:bg-orange-600 transition-colors shadow-md">
                                    Resume
                                </button>
                                
                                <div className="pt-6 border-t border-gray-100">
                                    <h3 className="text-sm font-medium text-gray-400 mb-4">Connect with me</h3>
                                    <div className="flex space-x-5">
                                        {socialLinks.map((social) => (
                                            <a 
                                                key={social.label} 
                                                href={social.href} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="text-gray-600 hover:text-orange-500 transition-colors"
                                                title={social.label}
                                            >
                                                <social.icon className="h-5 w-5" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-auto pt-6 text-center text-xs text-gray-400">
                                &copy; {new Date().getFullYear()} Akshay Bhaltilak
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}