import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';
import resume from '../../assets/Akshay Resume .pdf';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope, FaFileDownload, FaArrowDown, FaArrowRight } from 'react-icons/fa';

const Home = () => {
    const [font, setFont] = useState('Comfortaa');
    const [expandedQuestion, setExpandedQuestion] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const fonts = ['Roboto', 'Comfortaa', 'Montserrat', 'Poppins'];
        const intervalId = setInterval(() => {
            const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
            setFont(randomFont);
        }, 600);

        // Set visibility after a short delay for entrance animation
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300);

        return () => {
            clearInterval(intervalId);
            clearTimeout(timer);
        };
    }, []);

    const toggleQuestion = (index) => {
        setExpandedQuestion(expandedQuestion === index ? null : index);
    };

    const containerVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } }
    };

    const faqVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.6 } }
    };

    const buttonVariants = {
        hover: { scale: 1.05, transition: { duration: 0.2 } },
        tap: { scale: 0.95 }
    };

    const faqData = [
        {
            question: "What Problem Does WebReich Solve?",
            answer: (
                <>
                    In India, students and professionals face an <strong className='text-orange-600'>overwhelming tech landscape with fragmented knowledge.</strong> Many lack direction and awareness of emerging trends due to the <strong className='text-orange-600'>gap in traditional education systems.</strong> WebReich tackles this by using AI to filter information and provide clear, personalized learning paths and free learning resources by top mentors on the internet and provides network support. It connects users with a supportive community for mentorship and collaboration, helping them stay current, gain practical skills, and make real-world contributions in tech.
                </>
            ),
            icon: "🔍"
        },
        {
            question: "What is Our Mission?",
            answer: (
                <>
                    <strong className='text-orange-600'>To empower students and professionals in India by providing clear, AI-driven pathways through the overwhelming tech landscape.</strong> WebReich is dedicated to making emerging technologies accessible, helping users build relevant skills, connect with a community, and confidently contribute to the tech industry.
                </>
            ),
            icon: "🚀"
        },
        {
            question: "What is Our Vision?",
            answer: (
                <>
                    <strong className='text-orange-600'>To be India's leading platform for tech education and collaboration, bridging knowledge gaps and enabling users to thrive in the rapidly evolving tech ecosystem.</strong> Through personalized guidance, mentorship, and community support, WebReich aims to create a generation of skilled, innovative, and industry-ready tech professionals.
                </>
            ),
            icon: "🔮"
        },
        {
            question: "How Do We Support Our Community?",
            answer: (
                <>
                    WebReich provides <strong className='text-orange-600'>personalized learning paths</strong>, curated resources, and connects you with <strong className='text-orange-600'>industry professionals</strong> who can mentor you through your journey. Our AI assistant helps you navigate complex topics, and our community events create networking opportunities and collaborative learning experiences.
                </>
            ),
            icon: "👥"
        }
    ];

    const testimonials = [
        {
            name: "Rahul Sharma",
            position: "Software Engineer",
            text: "WebReich completely transformed my learning journey. The personalized roadmaps and community support made all the difference.",
            avatar: "/api/placeholder/48/48"
        },
        {
            name: "Priya Patel",
            position: "CS Student",
            text: "I was lost in the sea of information until I found WebReich. Now I have clear direction and am making real progress!",
            avatar: "/api/placeholder/48/48"
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4 py-8">
            {/* Hero Section */}
            <motion.div
                className="text-center bg-white rounded-lg shadow-xl p-8 w-full max-w-6xl mb-8 border-l-4 border-orange-500"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={containerVariants}
            >
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-6"
                >
                    <motion.h1 
                        className="text-4xl md:text-5xl font-bold py-4 text-black bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-orange-400" 
                        style={{ fontFamily: font }}
                    >
                        How can I help You?
                    </motion.h1>
                    <motion.div 
                        className="w-24 h-1 bg-orange-500 mx-auto my-4"
                        initial={{ width: 0 }}
                        animate={{ width: "6rem" }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                    />
                </motion.div>
                
                <motion.h4 className="text-lg font-semibold mb-6 text-gray-700">
                    Co-Founder of WebReich | Full Stack Web Developer | Learning AI And LLM
                </motion.h4>
                
                <div className="flex justify-center flex-wrap gap-4 mb-6">
                    <motion.a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=akshaybhaltilak989@gmail.com&su=Connect%20Me&body=Hi%2C%20I%20would%20like%20to%20connect%20with%20you."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300 ease-in-out flex items-center gap-2 font-medium"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <FaEnvelope /> Connect With Me
                    </motion.a>
                    <motion.a
                        href={resume}
                        download="AkshayResume.pdf"
                        className="bg-white text-orange-600 border-2 border-orange-500 py-3 px-6 rounded-full hover:bg-orange-50 transition duration-300 ease-in-out flex items-center gap-2 font-medium"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <FaFileDownload /> Download Resume
                    </motion.a>
                </div>
                
                <div className="flex justify-center space-x-4 mt-4">
                    {['linkedin', 'github', 'twitter'].map((platform) => (
                        <motion.a
                            key={platform}
                            href={`https://${platform}.com/`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-orange-500 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
                            whileHover={{ y: -5, scale: 1.1 }}
                        >
                            {platform === 'linkedin' && <FaLinkedin size={20} />}
                            {platform === 'github' && <FaGithub size={20} />}
                            {platform === 'twitter' && <FaTwitter size={20} />}
                        </motion.a>
                    ))}
                </div>
                
                <motion.div 
                    className="mt-12 flex justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <FaArrowDown className="text-orange-500 text-2xl" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* WebReich Intro Section */}
            <motion.div
                className="bg-white shadow-xl rounded-lg p-8 w-full max-w-6xl text-left border-t-4 border-orange-500 mb-8"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={faqVariants}
            >
                <div className="flex items-center mb-6">
                    <img
                        src="https://github.com/Shiro005/WebReich-Services/blob/main/src/assets/webreich_logo1.png?raw=true"
                        alt="WebReich Logo"
                        className="w-32 h-12 mr-4"
                    />
                    <div className="h-12 w-1 bg-orange-500 mr-4"></div>
                    <h2 className="text-3xl font-bold text-black">Transforming Tech Education</h2>
                </div>
                
                <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    WebReich is an <span className="text-orange-600 font-semibold">AI-powered coding community</span> and social platform built to simplify tech learning for students, professionals, and enthusiasts, helping them navigate the overwhelming and fragmented information in today's tech landscape. Our platform addresses key challenges in India's education system: information overload, a lack of awareness about emerging technologies, and the absence of structured guidance for individuals looking to contribute to or participate in the latest tech trends.
                </p>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                    {[
                        { title: "AI-Driven Learning Paths", icon: "🧠", description: "Personalized roadmaps tailored to your goals and current skill level." },
                        { title: "Community Support", icon: "🤝", description: "Connect with like-minded learners and experienced mentors." },
                        { title: "Curated Resources", icon: "📚", description: "Quality over quantity with hand-picked learning materials." },
                        { title: "Progress Tracking", icon: "📈", description: "Monitor your growth and celebrate your achievements." }
                    ].map((feature, idx) => (
                        <motion.div 
                            key={idx}
                            className="bg-orange-50 p-5 rounded-lg shadow-sm border-l-4 border-orange-400"
                            whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-2xl mb-2">{feature.icon}</div>
                            <h3 className="text-xl font-bold text-black mb-1">{feature.title}</h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials */}
                <div className="mb-10">
                    <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                        <span className="mr-2">What Our Community Says</span>
                        <div className="h-1 bg-orange-500 flex-grow ml-4"></div>
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {testimonials.map((testimonial, idx) => (
                            <motion.div 
                                key={idx}
                                className="bg-white p-5 rounded-lg shadow-md border border-gray-200"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="flex items-center mb-3">
                                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-3" />
                                    <div>
                                        <h4 className="font-bold text-black">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div>
                    <h3 className="text-2xl font-bold text-black mb-6 flex items-center">
                        <span className="mr-2">Frequently Asked Questions</span>
                        <div className="h-1 bg-orange-500 flex-grow ml-4"></div>
                    </h3>
                    <div className="space-y-4">
                        {faqData.map((item, index) => (
                            <motion.div 
                                key={index} 
                                className={`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden ${expandedQuestion === index ? 'border-l-4 border-l-orange-500' : ''}`}
                                whileHover={{ boxShadow: "0 4px 12px rgba(0,0,0,0.08)" }}
                            >
                                <button
                                    onClick={() => toggleQuestion(index)}
                                    className="flex justify-between items-center w-full text-left text-lg font-semibold text-black p-5 focus:outline-none"
                                >
                                    <div className="flex items-center">
                                        <span className="mr-3 text-xl">{item.icon}</span>
                                        {item.question}
                                    </div>
                                    <motion.div
                                        animate={{ rotate: expandedQuestion === index ? 90 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <FaArrowRight className="text-orange-500" />
                                    </motion.div>
                                </button>
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ 
                                        opacity: expandedQuestion === index ? 1 : 0,
                                        height: expandedQuestion === index ? "auto" : 0
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="px-5 pb-5 text-gray-700 overflow-hidden"
                                >
                                    <div className="border-t border-gray-200 pt-3">
                                        {item.answer}
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <motion.div 
                    className="mt-12 bg-gradient-to-r from-orange-600 to-orange-400 p-8 rounded-lg text-white text-center"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.2 }}
                >
                    <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Tech Journey?</h3>
                    <p className="mb-6">Join WebReich today and get personalized guidance to navigate the complex tech landscape.</p>
                    <motion.button 
                        className="bg-white text-orange-600 py-3 px-8 rounded-full font-bold hover:bg-orange-50 transition duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Join Our Community
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Home;