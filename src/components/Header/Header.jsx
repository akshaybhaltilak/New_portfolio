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
        </header>
    );
}
