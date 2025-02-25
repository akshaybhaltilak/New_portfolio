import React, { useState, useEffect } from 'react';
import './About.css';
import { Pagination } from '../pagination/Pagination';
import AboutData from '../AboutData/AboutData';
import { motion } from 'framer-motion';

export default function About() {
    const [activeTab, setActiveTab] = useState('experience');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const education = [
        {
            name: 'Graduation',
            title: 'Sant Gadge Baba Amravati University , Amravati',
            department: 'Shankarlal Khandelwal College of Akola',
            email: 'B.Sc Computer Science',
            role: '58.30 %',
            status: 'Completed',
            color: '#FF5722',
            colorBG: 'rgba(255, 87, 34, 0.1)',
            image: 'https://cdn-icons-png.flaticon.com/128/1940/1940611.png',
        },
        {
            name: 'HSC',
            title: 'Sant Gadge Baba Amravati University, Amravati',
            department: 'Geetanjali College kanheri, sarap',
            email: 'XII',
            role: '85.60 %',
            status: 'Completed',
            color: '#FF5722',
            colorBG: 'rgba(255, 87, 34, 0.1)',
            image: 'https://cdn-icons-png.flaticon.com/128/1940/1940611.png',
        },
        {
            name: 'SSC',
            title: 'Sant Gadge Baba Amravati University, Amravati',
            department: 'Geetanjali Vidhyalay kanheri, sarap',
            email: 'X',
            role: '74.40 %',
            status: 'Completed',
            color: '#FF5722',
            colorBG: 'rgba(255, 87, 34, 0.1)',
            image: 'https://cdn-icons-png.flaticon.com/128/1940/1940611.png',
        }
    ];

    const experience = [
        {
            name: 'Akshay Bhaltilak',
            title: 'WebReich Community',
            department: 'Engineering',
            email: 'akshaybhaltilak989@gmail.com',
            role: 'Full-Stack Developer',
            status: 'Active',
            color: '#FF5722',
            colorBG: 'rgba(255, 87, 34, 0.1)',
            image: 'https://cdn-icons-png.flaticon.com/128/9790/9790766.png',
        },
        {
            name: 'Akshay Bhaltilak',
            title: 'Welframe Tech',
            department: 'Engineering',
            email: 'akshaybhaltilak989@gmail.com',
            role: 'React Js Developer',
            status: 'Completed',
            color: '#FF5722',
            colorBG: 'rgba(255, 87, 34, 0.1)',
            image: 'https://cdn-icons-png.flaticon.com/128/9790/9790766.png',
        },
        {
            name: 'Akshay Bhaltilak',
            title: 'Brighter Beings',
            department: 'Engineering',
            email: 'akshaybhaltilak989@gmail.com',
            role: 'Frontend Developer',
            status: 'Completed',
            color: '#FF5722',
            colorBG: 'rgba(255, 87, 34, 0.1)',
            image: 'https://cdn-icons-png.flaticon.com/128/9790/9790766.png',
        },
    ];

    const skills = [
        { name: 'React', proficiency: 90 },
        { name: 'JavaScript', proficiency: 85 },
        { name: 'Node.js', proficiency: 80 },
        { name: 'HTML/CSS', proficiency: 95 },
        { name: 'MongoDB', proficiency: 75 },
        { name: 'Express', proficiency: 80 },
    ];

    const SkillBar = ({ skill, proficiency }) => (
        <div className="mb-4">
            <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-800">{skill}</span>
                <span className="text-sm font-medium text-orange-600">{proficiency}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <motion.div 
                    className="bg-orange-500 h-2.5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${proficiency}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                />
            </div>
        </div>
    );

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -100 }}
                transition={{ duration: 1 }}
                className="bg-white text-gray-900 mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 rounded-2xl shadow-lg"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                        <div className="sticky top-8">
                            <div className="flex flex-col items-center">
                                <motion.div 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="relative"
                                >
                                    <img 
                                        src="https://avatars.githubusercontent.com/u/99380793?v=4" 
                                        alt="Profile" 
                                        className="rounded-full w-48 h-48 object-cover border-4 border-orange-400 shadow-lg" 
                                    />
                                    <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-2 rounded-full shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                        </svg>
                                    </div>
                                </motion.div>
                                <h2 className="mt-4 text-2xl font-bold text-gray-900">Akshay Bhaltilak</h2>
                                <p className="text-orange-600 font-medium">Full Stack Web Developer</p>
                                
                                <div className="mt-6 w-full">
                                    <div className="flex flex-col space-y-2">
                                        <a href="mailto:akshaybhaltilak989@gmail.com" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-orange-50 transition-colors text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                            <span>akshaybhaltilak989@gmail.com</span>
                                        </a>
                                        <div className="flex items-center space-x-2 p-2 rounded-lg hover:bg-orange-50 transition-colors text-gray-700">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Akola, Maharashtra 444-001</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-6 flex space-x-4">
                                    <motion.a 
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href="#" 
                                        className="bg-orange-500 text-white p-2 rounded-full transition-colors hover:bg-orange-600"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                        </svg>
                                    </motion.a>
                                    <motion.a 
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href="#" 
                                        className="bg-orange-500 text-white p-2 rounded-full transition-colors hover:bg-orange-600"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                                        </svg>
                                    </motion.a>
                                    <motion.a 
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        href="#" 
                                        className="bg-orange-500 text-white p-2 rounded-full transition-colors hover:bg-orange-600"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </motion.a>
                                </div>

                                <a href="/download-cv" className="mt-6 inline-flex items-center justify-center w-full px-4 py-2 bg-orange-500 text-white rounded-lg shadow-md hover:bg-orange-600 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            <div className="bg-orange-50 p-6 rounded-xl mb-8 border border-orange-100 shadow-sm">
                                <h1 className="text-3xl font-bold mb-4 text-gray-900">
                                    <span className="text-orange-600">Know</span> About Me
                                </h1>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Computer Science student at Sant Gadge Baba Amravati University and Co-founder of Web Reich, a 250+ member coding community. I am a full-stack developer with strong leadership, communication, and problem-solving skills, dedicated to creating impactful, user-friendly solutions that address real societal needs.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Passionate about emerging technologies, including AI and LLM, I continuously seek opportunities to automate and enhance real-world processes, transforming ideas into valuable software products.
                                </p>
                            </div>

                            <div className="mb-8">
                                <div className="flex border-b border-gray-200">
                                    <button
                                        className={`px-4 py-2 font-medium text-sm focus:outline-none ${
                                            activeTab === 'experience' 
                                            ? 'border-b-2 border-orange-500 text-orange-600' 
                                            : 'text-gray-500 hover:text-orange-500'
                                        }`}
                                        onClick={() => setActiveTab('experience')}
                                    >
                                        Experience
                                    </button>
                                    <button
                                        className={`px-4 py-2 font-medium text-sm focus:outline-none ${
                                            activeTab === 'education' 
                                            ? 'border-b-2 border-orange-500 text-orange-600' 
                                            : 'text-gray-500 hover:text-orange-500'
                                        }`}
                                        onClick={() => setActiveTab('education')}
                                    >
                                        Education
                                    </button>
                                    <button
                                        className={`px-4 py-2 font-medium text-sm focus:outline-none ${
                                            activeTab === 'skills' 
                                            ? 'border-b-2 border-orange-500 text-orange-600' 
                                            : 'text-gray-500 hover:text-orange-500'
                                        }`}
                                        onClick={() => setActiveTab('skills')}
                                    >
                                        Skills
                                    </button>
                                </div>

                                <div className="mt-4">
                                    {activeTab === 'experience' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <AboutData
                                                people={experience}
                                                box_heading={"Professional Experience"}
                                                a1={"Employee"}
                                                a2={"Title"}
                                                a3={"Status"}
                                                a4={"Role"}
                                            />
                                        </motion.div>
                                    )}
                                    
                                    {activeTab === 'education' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            <AboutData
                                                people={education}
                                                box_heading={"Education & Certifications"}
                                                a1={"Degree"}
                                                a2={"University"}
                                                a3={"Status"}
                                                a4={"Percentage"}
                                            />
                                        </motion.div>
                                    )}
                                    
                                    {activeTab === 'skills' && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
                                        >
                                            <h3 className="text-lg font-semibold mb-4 text-orange-600">Technical Skills</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    {skills.slice(0, 3).map((skill) => (
                                                        <SkillBar key={skill.name} skill={skill.name} proficiency={skill.proficiency} />
                                                    ))}
                                                </div>
                                                <div>
                                                    {skills.slice(3, 6).map((skill) => (
                                                        <SkillBar key={skill.name} skill={skill.name} proficiency={skill.proficiency} />
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            <div className="mt-8">
                                <Pagination result={"About"} next={"/projects"} prev={"/"} />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}