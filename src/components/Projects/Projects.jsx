import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pagination } from '../pagination/Pagination';
import { FaGithub, FaExternalLinkAlt, FaStar, FaSearch, FaFilter } from 'react-icons/fa';

export function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [activeProject, setActiveProject] = useState(null);
    const [isGridView, setIsGridView] = useState(true);

    const projects = [
        {
            title: 'WebReich Community',
            description: 'An educational platform addressing the gap between theoretical college education and practical skills needed in the industry, providing proper guidance to students from tier 3 colleges.',
            Technologies: ['HTML', 'EJS', 'JavaScript', 'Node Js', 'PostgreSQL', 'REST API', 'Github'],
            category: 'Education',
            logo: 'https://cdn-icons-png.flaticon.com/128/4121/4121044.png',
            key_features: 'Used by 250+ students, Mentorship programs, Interactive learning modules, Real-time feedback',
            github_code: 'https://github.com/Shiro005/vercelHost.git',
            live_link: 'https://webreichedu.vercel.app/',
            featured: true,
            completion: 100,
        },
        {
            title: 'Dine Join',
            description: 'A digital solution for restaurants to reduce operational costs and improve customer experience through efficient digital menu management and ordering systems.',
            Technologies: ['Vite', 'React.js', 'REST API', 'JSON', 'Github'],
            category: 'Food & Beverage',
            logo: 'https://cdn-icons-png.flaticon.com/128/753/753839.png',
            key_features: 'Digital menu management, QR code ordering, Staff optimization, Real-time updates',
            github_code: '',
            live_link: 'https://dinejoindemo.vercel.app/',
            featured: true,
            completion: 90,
        },
        {
            title: 'CRM Application',
            description: 'A comprehensive React-based CRM application designed for small-scale businesses, providing advanced features for managing clients and payments efficiently.',
            Technologies: ['React.js', 'API', 'Git', 'Github'],
            category: 'Business',
            logo: 'https://cdn-icons-png.flaticon.com/128/7560/7560719.png',
            key_features: 'Client management, Payment tracking, Earnings dashboard, Automated reports',
            github_code: 'https://github.com/akshaybhaltilak/CRM',
            live_link: 'https://crm-billing.vercel.app/',
            featured: false,
            completion: 85,
        },
        {
            title: 'Portfolio Tracker',
            description: 'A financial tool that helps users track their investment portfolios, visualize performance, and make informed decisions based on market trends.',
            Technologies: ['React.js', 'Chart.js', 'Firebase', 'Tailwind CSS'],
            category: 'Finance',
            logo: 'https://cdn-icons-png.flaticon.com/128/2037/2037957.png',
            key_features: 'Investment tracking, Performance analytics, Market insights, Goal setting',
            github_code: 'https://github.com/yourusername/portfolio-tracker',
            live_link: 'https://portfolio-tracker.vercel.app/',
            featured: false,
            completion: 75,
        },
        {
            title: 'Health Companion',
            description: 'A wellness application that helps users maintain healthy lifestyle habits, track fitness goals, and monitor nutrition intake.',
            Technologies: ['React Native', 'Firebase', 'Node.js', 'Express'],
            category: 'Health',
            logo: 'https://cdn-icons-png.flaticon.com/128/3501/3501241.png',
            key_features: 'Activity tracking, Meal planning, Progress visualization, Reminder system',
            github_code: 'https://github.com/yourusername/health-companion',
            live_link: 'https://health-companion.vercel.app/',
            featured: true,
            completion: 80,
        },
    ];

    const categories = ['All', ...new Set(projects.map(project => project.category))];

    const filteredProjects = projects.filter(project => {
        const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            project.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    useEffect(() => {
        // Add scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            className="bg-white text-black w-full max-w-6xl mx-auto p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="p-6 rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <div className="text-center mb-8">
                    <motion.h1
                        className="text-4xl font-bold text-black"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="text-orange-500">Project</span> Highlights
                    </motion.h1>
                    <motion.p
                        className="text-lg text-gray-700 mt-4 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        My projects reflect my dedication to creating seamless, user-friendly applications. 
                        I am always eager to learn and take on new challenges, and I strive to keep up with 
                        the latest industry trends and best practices.
                    </motion.p>
                    
                    {/* Featured Projects Badge */}
                    <motion.div 
                        className="mt-6 flex justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                    >
                        <div className="inline-flex items-center bg-orange-100 px-4 py-2 rounded-full">
                            <FaStar className="text-orange-500 mr-2" />
                            <span className="text-orange-700 font-medium">Featured Projects: {projects.filter(p => p.featured).length}</span>
                        </div>
                    </motion.div>
                </div>
                
                {/* Search and Filter Controls */}
                <motion.div 
                    className="mb-8 bg-gray-100 p-4 rounded-lg shadow-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="relative w-full md:w-2/3">
                            <FaSearch className="absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                        
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <div className="relative w-full md:w-auto">
                                <FaFilter className="absolute left-3 top-3 text-gray-400" />
                                <select
                                    value={selectedCategory}
                                    onChange={(e) => setSelectedCategory(e.target.value)}
                                    className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-orange-500"
                                >
                                    {categories.map((category, index) => (
                                        <option key={index} value={category}>{category}</option>
                                    ))}
                                </select>
                            </div>
                            
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => setIsGridView(true)}
                                    className={`p-2 rounded-lg ${isGridView ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                    </svg>
                                </button>
                                <button 
                                    onClick={() => setIsGridView(false)}
                                    className={`p-2 rounded-lg ${!isGridView ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Projects Display */}
                <AnimatePresence>
                    {filteredProjects.length === 0 ? (
                        <motion.div 
                            className="text-center py-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <p className="text-gray-600 text-lg">No projects found matching your criteria.</p>
                            <button 
                                onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                                className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md font-medium hover:bg-orange-600 transition-all"
                            >
                                Reset Filters
                            </button>
                        </motion.div>
                    ) : isGridView ? (
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <div className="relative">
                                        <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-24 flex items-center justify-center">
                                            <img 
                                                src={project.logo} 
                                                alt={`${project.title} logo`} 
                                                className="w-16 h-16 object-cover bg-white p-2 rounded-full shadow-md absolute top-16"
                                            />
                                        </div>
                                        {project.featured && (
                                            <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                                                Featured
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="px-6 pt-12 pb-6">
                                        <div className="flex justify-between items-start mb-2">
                                            <h2 className="text-xl font-bold text-gray-800">{project.title}</h2>
                                            <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                                                {project.category}
                                            </span>
                                        </div>
                                        
                                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                                        
                                        {/* Project Completion Bar */}
                                        <div className="mb-4">
                                            <div className="flex justify-between text-xs text-gray-600 mb-1">
                                                <span>Completion</span>
                                                <span>{project.completion}%</span>
                                            </div>
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div 
                                                    className="h-2 rounded-full bg-orange-500" 
                                                    style={{width: `${project.completion}%`}}
                                                ></div>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-wrap mb-4">
                                            {project.Technologies.slice(0, 3).map((tech, techIndex) => (
                                                <span
                                                    key={techIndex}
                                                    className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mr-2 mb-2"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.Technologies.length > 3 && (
                                                <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mr-2 mb-2">
                                                    +{project.Technologies.length - 3}
                                                </span>
                                            )}
                                        </div>
                                        
                                        <div className="flex justify-between items-center">
                                            <button 
                                                onClick={() => setActiveProject(project)}
                                                className="text-orange-600 text-sm hover:text-orange-800 transition-colors"
                                            >
                                                View Details
                                            </button>
                                            <div className="flex space-x-2">
                                                {project.github_code && (
                                                    <a 
                                                        href={project.github_code} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="bg-black text-white p-2 rounded-md hover:bg-gray-800 transition-colors"
                                                    >
                                                        <FaGithub />
                                                    </a>
                                                )}
                                                <a 
                                                    href={project.live_link} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 transition-colors"
                                                >
                                                    <FaExternalLinkAlt />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            className="flex flex-col gap-6 mb-8"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {filteredProjects.map((project, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <div className="flex flex-col md:flex-row">
                                        <div className="md:w-1/4 bg-gradient-to-br from-orange-500 to-orange-600 p-6 flex items-center justify-center relative">
                                            {project.featured && (
                                                <div className="absolute top-2 right-2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full">
                                                    Featured
                                                </div>
                                            )}
                                            <img 
                                                src={project.logo} 
                                                alt={`${project.title} logo`} 
                                                className="w-20 h-20 object-cover bg-white p-3 rounded-full shadow-md"
                                            />
                                        </div>
                                        
                                        <div className="md:w-3/4 p-6">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <h2 className="text-2xl font-bold text-gray-800">{project.title}</h2>
                                                    <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full">
                                                        {project.category}
                                                    </span>
                                                </div>
                                                
                                                <div className="flex space-x-2">
                                                    {project.github_code && (
                                                        <a 
                                                            href={project.github_code} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="bg-black text-white p-2 rounded-md hover:bg-gray-800 transition-colors"
                                                        >
                                                            <FaGithub />
                                                        </a>
                                                    )}
                                                    <a 
                                                        href={project.live_link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="bg-orange-500 text-white p-2 rounded-md hover:bg-orange-600 transition-colors"
                                                    >
                                                        <FaExternalLinkAlt />
                                                    </a>
                                                </div>
                                            </div>
                                            
                                            <p className="text-gray-600 mb-4">{project.description}</p>
                                            
                                            <div className="flex flex-wrap gap-1 mb-4">
                                                {project.Technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            
                                            <div className="mb-4">
                                                <div className="flex justify-between text-xs text-gray-600 mb-1">
                                                    <span>Completion</span>
                                                    <span>{project.completion}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div 
                                                        className="h-2 rounded-full bg-orange-500" 
                                                        style={{width: `${project.completion}%`}}
                                                    ></div>
                                                </div>
                                            </div>
                                            
                                            <div className="mt-2">
                                                <h3 className="font-medium text-gray-700">Key Features:</h3>
                                                <p className="text-gray-600 text-sm">{project.key_features}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Project Detail Modal */}
                <AnimatePresence>
                    {activeProject && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setActiveProject(null)}
                        >
                            <motion.div
                                className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-6 relative">
                                    <button
                                        className="absolute top-4 right-4 bg-white bg-opacity-20 p-2 rounded-full text-white hover:bg-opacity-30 transition-all"
                                        onClick={() => setActiveProject(null)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                    <div className="flex items-center gap-4">
                                        <img 
                                            src={activeProject.logo} 
                                            alt={`${activeProject.title} logo`} 
                                            className="w-16 h-16 object-cover bg-white p-2 rounded-full shadow-md"
                                        />
                                        <div>
                                            <h2 className="text-2xl font-bold text-white">{activeProject.title}</h2>
                                            <div className="flex items-center gap-2">
                                                <span className="text-xs bg-white bg-opacity-20 text-white px-2 py-1 rounded-full">
                                                    {activeProject.category}
                                                </span>
                                                {activeProject.featured && (
                                                    <span className="text-xs bg-black text-white px-2 py-1 rounded-full">
                                                        Featured
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="font-bold text-gray-800 mb-2">Description</h3>
                                    <p className="text-gray-600 mb-6">{activeProject.description}</p>
                                    
                                    <h3 className="font-bold text-gray-800 mb-2">Key Features</h3>
                                    <p className="text-gray-600 mb-6">{activeProject.key_features}</p>
                                    
                                    <h3 className="font-bold text-gray-800 mb-2">Technologies</h3>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {activeProject.Technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <h3 className="font-bold text-gray-800 mb-2">Project Completion</h3>
                                    <div className="mb-6">
                                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                                            <span>Progress</span>
                                            <span>{activeProject.completion}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                            <div 
                                                className="h-3 rounded-full bg-orange-500" 
                                                style={{width: `${activeProject.completion}%`}}
                                            ></div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex justify-end gap-4">
                                        {activeProject.github_code && (
                                            <a 
                                                href={activeProject.github_code} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                                            >
                                                <FaGithub /> View Code
                                            </a>
                                        )}
                                        <a 
                                            href={activeProject.live_link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-orange-600 transition-colors"
                                        >
                                            <FaExternalLinkAlt /> Live Demo
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                <Pagination result={'About'} next={'/contact'} prev={'/about'} />
            </motion.div>
        </motion.div>
    );
}