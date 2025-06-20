import React from 'react';
import SocialLinks from '../socialLinks/socialLinks';
import { Link } from 'react-router-dom';
import { FlipWords } from '../ui/flip-words';
import SEOMetaTags from '../SEOMetaTags';

const Home = () => {
    const words = ["Web Developer", "Designer", "AI/ML Enthusiast", "Problem-Solver"];

    return (
        <>
        <SEOMetaTags 
                title="Harshpreet Singh - Full Stack Developer | React, Node.js, AI/ML Expert"
                description="Passionate Full Stack Developer specializing in React, Node.js, Python, and AI/ML. Creating innovative web solutions with modern technologies. View my portfolio of 10+ projects."
                keywords="Harshpreet Singh, Full Stack Developer, React Developer, Node.js, Python, AI/ML, Web Developer, JavaScript, Portfolio, Software Engineer"
                image="/og-image.png"
            />
        <div className=" text-white flex flex-col justify-center items-center">
            <h1 className="text-6xl mb-4 font-Caveat font-thin tracking-tight">Harshpreet Singh</h1>
            <h2 className="text-2xl mb-6 text-center text-white"><FlipWords words={words} /></h2>
            
            <p className="text-center max-w-md mb-8">
                I'm passionate about Problem-Solving, Web Development and Designing. I love to learn and explore new technologies. Always ready for new challenges 💪.
            </p>
            
            <div className="flex space-x-4 mb-8">
                <button className="bg-blue-600 bg-opacity-20 backdrop-blur-md border border-blue-500 hover:bg-opacity-40 px-4 py-2 rounded">
                    <Link to="/projects">View Projects</Link>
                </button>
                <button className="bg-green-600 bg-opacity-20 backdrop-blur-md border border-green-500 hover:bg-opacity-40 px-4 py-2 rounded">
                    <Link to="/contact">Contact</Link>
                </button>
            </div>

        </div>
        <SocialLinks />
        </>  
    );
};

export default Home;