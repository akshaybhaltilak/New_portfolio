import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';
import resume from '../../assets/Akshay Resume .pdf';

const Home = () => {
    const [font, setFont] = useState('Comfortaa');
    const [expandedQuestion, setExpandedQuestion] = useState(null);

    useEffect(() => {
        const fonts = ['Roboto', 'Comfortaa', 'Abril Fatface', 'Lobster'];
        const intervalId = setInterval(() => {
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            setFont(randomFont);
        }, 400);
        return () => clearInterval(intervalId);
    }, []);

    const toggleQuestion = (index) => {
        setExpandedQuestion(expandedQuestion === index ? null : index);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 1 } }
    };

    const faqVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } }
    };

    const faqData = [
        {
            question: "What Problem Does WebReich Solve?",
            answer: (
                <>
                    In India, students and professionals face an <strong className='text-gray-200'>overwhelming tech landscape with fragmented knowledge.</strong> Many lack direction and awareness of emerging trends due to the <strong className='text-gray-200'>gap in traditional education systems.</strong> WebReich tackles this by using AI to filter information and provide clear, personalized learning paths and free learning resources by top mentors on the internet and provides network support. It connects users with a supportive community for mentorship and collaboration, helping them stay current, gain practical skills, and make real-world contributions in tech.
                </>
            )
        },
        {
            question: "What is Our Mission?",
            answer: (
                <>
                    <strong className='text-gray-200'>To empower students and professionals in India by providing clear, AI-driven pathways through the overwhelming tech landscape.</strong> WebReich is dedicated to making emerging technologies accessible, helping users build relevant skills, connect with a community, and confidently contribute to the tech industry.
                </>
            )
        },
        {
            question: "What is Our Vision?",
            answer: (
                <>
                    <strong className='text-gray-200'>To be India’s leading platform for tech education and collaboration, bridging knowledge gaps and enabling users to thrive in the rapidly evolving tech ecosystem.</strong> Through personalized guidance, mentorship, and community support, WebReich aims to create a generation of skilled, innovative, and industry-ready tech professionals.
                </>
            )
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-black px-4 py-8">
            {/* Main Section */}
            <motion.div
                className="text-center bg-gray-900 rounded-lg shadow-lg p-8 w-full max-w-6xl mb-8"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h3 className="text-3xl font-bold py-4 text-white" style={{ fontFamily: font }}>
                    How can I help You?
                </motion.h3>
                <motion.h4 className="text-lg font-semibold mb-6 text-gray-300">
                    Co-Founder of WebReich | Full Stack Web Developer | Learning AI And LLM
                </motion.h4>
                <div className="flex justify-center flex-wrap gap-4 mb-6">
                    <motion.a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=akshaybhaltilak989@gmail.com&su=Connect%20Me&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you.
"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-700 text-white py-2 px-4 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out"
                    >
                        Connect Me
                    </motion.a>
                    <motion.a
                        href={resume}
                        download="AkshayResume.pdf"
                        className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
                    >
                        View Resume
                    </motion.a>
                </div>
            </motion.div>

            {/* WebReich Intro Section */}
            <motion.div
                className="bg-gray-900 shadow-lg rounded-lg p-6 w-full max-w-6xl text-left"
                initial="hidden"
                animate="visible"
                variants={faqVariants}
            >
                <img
                    src="https://github.com/Shiro005/WebReich-Services/blob/main/src/assets/webreich_logo1.png?raw=true"
                    alt="WebReich Logo"
                    className="mb-4 w-28 h-10"
                />
                <h2 className="text-2xl font-bold mb-4 text-white">Introducing WebReich Transforming Tech Education with AI-Driven Guidance for Students and Professionals</h2>
                <p className="text-gray-300 mb-6">
                    WebReich is an AI-powered coding community and social platform built to simplify tech learning for students, professionals, and enthusiasts, helping them navigate the overwhelming and fragmented information in today’s tech landscape. Our platform addresses key challenges in India’s education system: information overload, a lack of awareness about emerging technologies, and the absence of structured guidance for individuals looking to contribute to or participate in the latest tech trends.
                </p>

                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg shadow-sm p-4">
                            <button
                                onClick={() => toggleQuestion(index)}
                                className="flex justify-between items-center w-full text-left text-lg font-semibold text-white focus:outline-none"
                            >
                                {item.question}
                                <motion.span
                                    animate={{ rotate: expandedQuestion === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    ▼
                                </motion.span>
                            </button>
                            {expandedQuestion === index && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="mt-2 text-gray-300"
                                >
                                    {item.answer}
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Home;
