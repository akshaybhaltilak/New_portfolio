import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ExternalLink, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' }
    ];
    
    const socialLinks = [
        { icon: Github, href: 'https://github.com/akshaybhaltilak', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/akshay-bhaltilak-5a8197251', label: 'LinkedIn' },
        { icon: Twitter, href: 'https://twitter.com/akshaybhaltilak', label: 'Twitter' },
        { icon: Mail, href: 'mailto:akshaybhaltilak989@gmail.com', label: 'Email' }
    ];
    
    const projects = [
        { name: 'WebReich', description: 'Digital Solutions' },
        { name: 'Portfolio', description: 'Personal Website' },
        { name: 'E-Commerce App', description: 'Online Store' }
    ];

    return (
        <footer className="bg-gradient-to-b from-white to-gray-50 pt-12 pb-6">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Top section with animated border */}
                <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="bg-orange-50 rounded-xl p-6 sm:p-8 mb-10 border border-orange-100 shadow-sm relative overflow-hidden"
                >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-300 via-orange-500 to-orange-300"></div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Ready to start a project?</h2>
                            <p className="text-gray-600 mt-2">Let's build something amazing together.</p>
                        </div>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link to="/contact" className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-md group">
                                Get in touch
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
                
                {/* Main footer content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 border-b border-gray-200">
                    {/* Column 1: About */}
                    <div className="flex flex-col">
                        <div className="mb-4 flex items-center">
                            <motion.img 
                                src="https://avatars.githubusercontent.com/u/99380793?s=400&v=4" 
                                alt="Akshay Bhaltilak" 
                                className="h-10 w-10 rounded-full mr-3 ring-2 ring-orange-500"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            />
                            <div>
                                <h2 className="text-lg font-bold text-orange-500">Akshay Bhaltilak</h2>
                                <p className="text-sm text-gray-600">Co-Founder of WebReich</p>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm mb-4">
                            Full-stack developer passionate about creating intuitive and performant web applications.
                        </p>
                        <div className="flex space-x-3 mt-2">
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
                                    aria-label={social.label}
                                >
                                    <social.icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    
                    {/* Column 2: Navigation */}
                    <div>
                        <h3 className="text-base font-semibold mb-4 text-gray-800 relative inline-block">
                            Quick Links
                            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-orange-500"></span>
                        </h3>
                        <ul className="space-y-2">
                            {menuItems.map((item) => (
                                <motion.li key={item.name} whileHover={{ x: 5 }}>
                                    <Link 
                                        to={item.href} 
                                        className="text-gray-600 hover:text-orange-500 transition-colors flex items-center group"
                                    >
                                        <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Column 3: Projects */}
                    <div>
                        <h3 className="text-base font-semibold mb-4 text-gray-800 relative inline-block">
                            Recent Projects
                            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-orange-500"></span>
                        </h3>
                        <ul className="space-y-3">
                            {projects.map((project, index) => (
                                <motion.li 
                                    key={index} 
                                    className="bg-white p-3 rounded-lg border border-gray-100 shadow-sm"
                                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                                >
                                    <h4 className="font-medium text-gray-800">{project.name}</h4>
                                    <p className="text-sm text-gray-500">{project.description}</p>
                                    <Link to="/projects" className="text-xs flex items-center mt-2 text-orange-500 hover:text-orange-600 font-medium">
                                        View details <ExternalLink className="ml-1 h-3 w-3" />
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-base font-semibold mb-4 text-gray-800 relative inline-block">
                            Stay Updated
                            <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-orange-500"></span>
                        </h3>
                        <p className="text-sm text-gray-600 mb-4">Subscribe to receive updates about new projects and tech insights.</p>
                        <form className="relative">
                            <input 
                                type="email" 
                                placeholder="Your email address" 
                                className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none transition-all text-sm"
                                required
                            />
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                className="mt-2 w-full bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm flex items-center justify-center"
                            >
                                Subscribe
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </motion.button>
                        </form>
                    </div>
                </div>
                
                {/* Copyright */}
                <div className="text-center mt-6 text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center">
                    <p>&copy; {currentYear} Akshay Bhaltilak. All rights reserved.</p>
                    <div className="mt-2 sm:mt-0 space-x-4 text-xs">
                        <Link to="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-orange-500 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;