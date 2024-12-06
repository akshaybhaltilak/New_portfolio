import React from 'react';
import './About.css';
import { Pagination } from '../pagination/Pagination';
import AboutData from '../AboutData/AboutData';
import { motion } from 'framer-motion';

export default function About() {
    const eduction = [
        {
            name: 'Graduation',
            title: 'Sant Gadge Baba Amravati University , Amravati',
            department: 'Shankarlal Khandelwal College of Akola',
            email: 'B.Sc Computer Science',
            role: '58.30 %',
            status: 'Completed',
            color: 'Green',
            colorBG: '#E3FBE3',
            image: 'https://cdn-icons-png.flaticon.com/128/1940/1940611.png',
        },
        {
            name: 'HSC',
            title: 'Sant Gadge Baba Amravati University,Amravati',
            department: 'Geetanjali College kanheri, sarap',
            email: 'XII',
            role: '85.60 %',
            status: 'Completed',
            color: 'green',
            colorBG: '#E3FBE3',
            image: 'https://cdn-icons-png.flaticon.com/128/1940/1940611.png',
        },
        {
            name: 'SSC',
            title: 'Sant Gadge Baba Amravati University,Amravati',
            department: 'Geetanjali Vidhyalay kanheri, sarap',
            email: 'X',
            role: '74.40 %',
            status: 'Completed',
            color: 'green',
            colorBG: '#E3FBE3',
            image: 'https://cdn-icons-png.flaticon.com/128/1940/1940611.png',
        }
    ];

    const people = [
        {
            name: 'Akshay Bhaltilak',
            title: 'WebReich Community',
            department: 'Engineering',
            email: 'akshaybhaltilak989@gmail.com',
            role: 'Full-Stack Developer',
            status: 'Active',
            color: 'red',
            colorBG: '#F8C9CD',
            image: 'https://cdn-icons-png.flaticon.com/128/9790/9790766.png',
        },
        {
            name: 'Akshay Bhaltilak',
            title: 'Welframe Tech',
            department: 'Engineering',
            email: 'akshaybhaltilak989@gmail.com',
            role: 'React Js Developer',
            status: 'Completed',
            color: 'green',
            colorBG: '#E3FBE3',
            image: 'https://cdn-icons-png.flaticon.com/128/9790/9790766.png',
        },
        {
            name: 'Akshay Bhaltilak',
            title: 'Brighter Beings',
            department: 'Engineering',
            email: 'akshaybhaltilak989@gmail.com',
            role: 'Frontend Developer',
            status: 'Completed',
            color: 'green',
            colorBG: '#E3FBE3',
            image: 'https://cdn-icons-png.flaticon.com/128/9790/9790766.png',
        },
    ];

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="custom_about_container bg-white text-gray-900 mt-6"
            >
                <div className="about_img">
                    <img src="./src/assets/akshay.png" alt="My-Pic" className="rounded-lg" />
                </div>

                <div className="space-y-7">
                    <p className="text-sm font-semibold md:text-base text-indigo-600">Full Stack Web Developer →</p>

                    <p className="text-3xl font-bold md:text-4xl text-indigo-700">
                        Know About Me
                    </p>
                    <p className="text-base text-gray-900 md:text-lg">
                        Computer Science student at Sant Gadge Baba Amravati University and Co-founder of Web Reich, a 250+ member coding community. I am a full-stack developer with strong leadership, communication, and problem-solving skills, dedicated to creating impactful, user-friendly solutions that address real societal needs. Passionate about emerging technologies, including AI and LLM, I continuously seek opportunities to automate and enhance real-world processes, transforming ideas into valuable software products.
                    </p>
                </div>

                <AboutData
                    people={people}
                    box_heading={"Professional Experience"}
                    a1={"Employee"}
                    a2={"Title"}
                    a3={"Status"}
                    a4={"Role"}
                />

                <AboutData
                    people={eduction}
                    box_heading={"Education & Certifications"}
                    a1={"Degree"}
                    a2={"University"}
                    a3={"Status"}
                    a4={"Percentage"}
                />

                <p className="text-sm font-semibold md:text-base mx-4 text-indigo-600">akshaybhaltilak989@gmail.com</p>
                <p className="mx-4 text-sm font-semibold md:text-base text-indigo-600">Akola, Maharashtra 444-001</p>
                <Pagination result={"About"} next={"/projects"} prev={"/"} />
            </motion.div>
        </>
    );
}
