import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white text-black py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="text-center md:text-left mb-4 md:mb-0">
                        <h2 className="text-xl font-bold text-orange-500">Akshay Bhaltilak</h2>
                        <p>Co-Founder of WebReich</p>
                    </div>
                    <div className="flex justify-center space-x-4 mb-4 md:mb-0">
                        <Link 
                            to="/" 
                            className="hover:text-orange-500 text-base font-semibold text-black"
                        >
                            Home
                        </Link>
                        <Link 
                            to="/about" 
                            className="hover:text-orange-500 text-base font-semibold text-black"
                        >
                            About
                        </Link>
                        <Link 
                            to="/projects" 
                            className="hover:text-orange-500 text-base font-semibold text-black"
                        >
                            Projects
                        </Link>
                        <Link 
                            to="/contact" 
                            className="hover:text-orange-500 text-base font-semibold text-black"
                        >
                            Contact
                        </Link>
                        <Link 
                            to="/coffee" 
                            className="hover:text-orange-500 text-base font-semibold text-black"
                        >
                            Coffee
                        </Link>
                    </div>
                    <div className="flex justify-center space-x-4 items-center">
                        <a 
                            href="https://github.com/akshaybhaltilak" 
                            aria-label="GitHub" 
                            className="hover:text-orange-500 text-black"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.165c-3.338.724-4.033-1.416-4.033-1.416-.546-1.387-1.332-1.756-1.332-1.756-1.09-.745.083-.729.083-.729 1.204.084 1.837 1.236 1.837 1.236 1.07 1.833 2.806 1.303 3.492.996.108-.774.42-1.303.763-1.604-2.665-.304-5.467-1.334-5.467-5.93 0-1.31.467-2.382 1.236-3.22-.124-.305-.536-1.526.117-3.176 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013.003-.403c1.02.005 2.048.137 3.003.403 2.29-1.552 3.297-1.23 3.297-1.23.655 1.65.243 2.871.12 3.176.77.838 1.234 1.91 1.234 3.22 0 4.607-2.807 5.623-5.479 5.92.431.372.814 1.103.814 2.222v3.293c0 .32.218.694.825.576C20.565 21.798 24 17.301 24 12c0-6.628-5.372-12-12-12z" />
                            </svg>
                        </a>
                        <a 
                            href="https://www.linkedin.com/in/akshay-bhaltilak-5a8197251" 
                            aria-label="LinkedIn" 
                            className="hover:text-orange-500 text-black"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.225 0H1.771C.791 0 0 .774 0 1.734v20.533C0 23.225.792 24 1.771 24h20.451C23.206 24 24 23.225 24 22.267V1.734C24 .774 23.206 0 22.225 0zM7.05 20.452H3.545V9.034H7.05v11.418zM5.298 7.683c-1.144 0-2.062-.926-2.062-2.065 0-1.138.918-2.065 2.062-2.065 1.141 0 2.062.926 2.062 2.065 0 1.138-.921 2.065-2.062 2.065zM20.451 20.452h-3.506v-5.614c0-1.336-.027-3.055-1.86-3.055-1.861 0-2.146 1.45-2.146 2.951v5.718H9.44V9.034h3.364v1.554h.046c.468-.885 1.609-1.818 3.313-1.818 3.545 0 4.197 2.334 4.197 5.368v6.314z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="text-center mt-6 text-sm text-gray-600">
                    <p>&copy; {new Date().getFullYear()} Akshay Bhaltilak. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
