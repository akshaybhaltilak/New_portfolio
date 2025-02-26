import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Pagination } from '../pagination/Pagination';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaPaperPlane, FaCheck, FaSpinner } from 'react-icons/fa';

export const Contact = () => {
  const [formState, setFormState] = useState({
    status: 'idle', // idle, loading, success, error
    errorMessage: ''
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const formRef = useRef(null);
  const [activeTab, setActiveTab] = useState('message');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormState({ status: 'loading', errorMessage: '' });

    try {
      const form = new FormData(event.target);
      form.append("access_key", "648b11dc-d485-4b99-a68a-24707b1d0665");

      const object = Object.fromEntries(form);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setFormState({ status: 'success', errorMessage: '' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(res.message || 'Something went wrong');
      }
    } catch (error) {
      setFormState({ 
        status: 'error', 
        errorMessage: error.message || 'Failed to send message. Please try again later.'
      });
    }
  };

  const encodedAddress = encodeURIComponent('Kanheri, Sarap Akola Maharashtra');
  const mapsUrl = "https://www.google.com/maps/place/Akshay+Bhaltilak+home/@20.6374556,77.0402078,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd72d84dd2492d9:0x57c08994b1091e96!8m2!3d20.6374556!4d77.0427827!16s%2Fg%2F11qrj4s0ys?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D";


  const contactMethods = [
    {
      icon: <FaMapMarkerAlt className="text-orange-500" />,
      title: 'Visit Us',
      details: 'Akola, Maharashtra, India',
      action: {
        text: 'Get Directions',
        url: mapsUrl
      }
    },
    {
      icon: <FaPhone className="text-orange-500" />,
      title: 'Call Us',
      details: '+91-9834153020',
      action: {
        text: 'Call Now',
        url: 'tel:+919834153020'
      }
    },
    {
      icon: <FaEnvelope className="text-orange-500" />,
      title: 'Email Us',
      details: 'akshaybhaltilak989@gmail.com',
      action: {
        text: 'Send Email',
        url: 'mailto:contact@yourdomain.com'
      }
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, url: 'https://linkedin.com/', label: 'LinkedIn' },
    { icon: <FaGithub />, url: 'https://github.com/', label: 'GitHub' },
    { icon: <FaTwitter />, url: 'https://twitter.com/', label: 'Twitter' }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="bg-white text-black">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Get In <span className="text-black">Touch</span>
            </h1>
            <p className="mt-4 text-lg text-white max-w-2xl mx-auto">
              Have a question or want to work together? I'd love to hear from you!
              Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Methods Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-orange-100 rounded-full mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.details}</p>
                <a
                  href={method.action.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-orange-500 hover:text-orange-700 font-medium"
                >
                  {method.action.text}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gray-50 border border-gray-100 rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Left Side - Contact Info */}
            <div className="lg:col-span-2 bg-gradient-to-br from-black to-gray-800 p-8 text-white">
              <div className="h-full flex flex-col">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-gray-300 mb-8">
                    Ready to start your next project? Want to collaborate? Or just want to say hello?
                    Feel free to reach out!
                  </p>
                  
                  <div className="space-y-6">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="flex items-start">
                        <div className="mt-1 mr-4">
                          {method.icon}
                        </div>
                        <div>
                          <h3 className="font-medium">{method.title}</h3>
                          <p className="text-gray-400">{method.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-12">
                    <h3 className="text-lg font-medium mb-4">Connect with me</h3>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-700 hover:bg-orange-500 p-3 rounded-full transition-colors duration-300"
                          whileHover={{ scale: 1.1 }}
                          aria-label={social.label}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
                
                <div className="mt-auto">
                  <div className="w-32 h-1 bg-orange-500 mb-6"></div>
                  <p className="text-gray-400 text-sm">
                    &copy; {new Date().getFullYear()} Your Name
                    <br />All rights reserved
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Side - Contact Form/Map Tabs */}
            <div className="lg:col-span-3 p-8">
              <div className="mb-6 border-b border-gray-200">
                <div className="flex">
                  <button
                    className={`px-4 py-2 font-medium text-sm mr-4 ${
                      activeTab === 'message' 
                        ? 'text-orange-500 border-b-2 border-orange-500' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('message')}
                  >
                    Send Message
                  </button>
                  <button
                    className={`px-4 py-2 font-medium text-sm ${
                      activeTab === 'map' 
                        ? 'text-orange-500 border-b-2 border-orange-500' 
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab('map')}
                  >
                    Find Us
                  </button>
                </div>
              </div>
              
              <AnimatePresence mode="wait">
                {activeTab === 'message' ? (
                  <motion.div
                    key="form"
                    {...fadeInUp}
                    transition={{ duration: 0.4 }}
                  >
                    <AnimatePresence mode="wait">
                      {formState.status === 'success' ? (
                        <motion.div
                          className="bg-green-50 border border-green-200 rounded-lg p-6 text-center"
                          {...fadeInUp}
                          transition={{ duration: 0.4 }}
                        >
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaCheck className="text-green-500 text-2xl" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 mb-2">Message Sent!</h3>
                          <p className="text-gray-600 mb-6">
                            Thank you for reaching out! I'll get back to you as soon as possible.
                          </p>
                          <button
                            onClick={() => setFormState({ status: 'idle', errorMessage: '' })}
                            className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition-colors"
                          >
                            Send Another Message
                          </button>
                        </motion.div>
                      ) : (
                        <motion.form
                          ref={formRef}
                          onSubmit={onSubmit}
                          className="space-y-6"
                          {...fadeInUp}
                          transition={{ duration: 0.4 }}
                        >
                          {formState.status === 'error' && (
                            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                              <p>{formState.errorMessage}</p>
                            </div>
                          )}
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="Your name"
                              />
                            </div>
                            <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                Email Address <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="your.email@example.com"
                              />
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="+91 12345 67890"
                              />
                            </div>
                            <div>
                              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                Subject <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                                placeholder="How can I help you?"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                              Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                              id="message"
                              name="message"
                              value={formData.message}
                              onChange={handleChange}
                              required
                              rows={5}
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                              placeholder="Your message here..."
                            />
                          </div>
                          
                          <div className="flex items-start">
                            <input
                              id="privacy"
                              name="privacy"
                              type="checkbox"
                              required
                              className="h-4 w-4 text-orange-500 rounded border-gray-300 focus:ring-orange-500 mt-1"
                            />
                            <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                              I consent to having this website store my submitted information so they can respond to my inquiry. See our <a href="#" className="text-orange-500 hover:underline">privacy policy</a>.
                            </label>
                          </div>
                          
                          <div>
                            <button
                              type="submit"
                              disabled={formState.status === 'loading'}
                              className="w-full bg-orange-500 text-white px-6 py-3 rounded-md font-medium hover:bg-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            >
                              {formState.status === 'loading' ? (
                                <span className="flex items-center justify-center">
                                  <FaSpinner className="animate-spin mr-2" />
                                  Sending...
                                </span>
                              ) : (
                                <span className="flex items-center justify-center">
                                  <FaPaperPlane className="mr-2" />
                                  Send Message
                                </span>
                              )}
                            </button>
                          </div>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ) : (
                  <motion.div
                    key="map"
                    {...fadeInUp}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    <div className="bg-white rounded-lg overflow-hidden h-96 shadow-md">
                      <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.1646561628663!2d77.0427827!3d20.6374556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd72d84dd2492d9%3A0x57c08994b1091e96!2sAkshay%20Bhaltilak%20home!5e0!3m2!1sen!2sin!4v1717056812345"

                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        className="rounded-lg"
                      ></iframe>
                    </div>
                    <div className="mt-4">
                      <h3 className="font-medium text-lg">How to Reach Us</h3>
                      <p className="text-gray-600 mt-2">
                        We are located in Akola, Maharashtra. The office is easily accessible by public transportation, with several bus stops nearby. If you're coming by car, there's parking available on the premises.
                      </p>
                      <div className="mt-4">
                        <h4 className="font-medium">Working Hours</h4>
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <div>
                            <p className="text-gray-600">Monday - Friday</p>
                            <p className="font-medium">9:00 AM - 6:00 PM</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Saturday</p>
                            <p className="font-medium">10:00 AM - 4:00 PM</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Sunday</p>
                            <p className="font-medium">Closed</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mb-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Here are some common questions about my services and how I work.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              question: "What services do you offer?",
              answer: "I offer web development, app development, and UI/UX design services. I specialize in creating responsive, user-friendly interfaces with modern frameworks."
            },
            {
              question: "How long does a typical project take?",
              answer: "Project timelines vary depending on complexity and scope. A simple website might take 2-4 weeks, while a complex application could take several months."
            },
            {
              question: "Do you offer maintenance services?",
              answer: "Yes, I offer ongoing maintenance and support for all projects. This includes updates, bug fixes, and performance optimizations."
            },
            {
              question: "What is your pricing structure?",
              answer: "I offer both fixed-price and hourly rate options. The best approach depends on your project requirements and scope."
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-gray-600">
            Don't see your question here? Feel free to <button onClick={() => setActiveTab('message')} className="text-orange-500 hover:underline">contact me</button>.
          </p>
        </motion.div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-black to-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-8">
              Let's work together to bring your ideas to life. I'm just one message away!
            </p>
            <button
              onClick={() => {
                setActiveTab('message');
                window.scrollTo({
                  top: document.querySelector('form')?.offsetTop - 100 || 0,
                  behavior: 'smooth'
                });
              }}
              className="bg-orange-500 text-white px-8 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors"
            >
              Get Started
            </button>
          </motion.div>
        </div>
      </div>
      
      <Pagination result={"About"} next={"/coffee"} prev={"/projects"} className="py-8 bg-white" />
    </div>
  );
};