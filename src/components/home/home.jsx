import React from 'react';
import SocialLinks from '../socialLinks/socialLinks';
import Loading from '../loading/loading';

const Home = () => {
    return (
        <>
        <div className=" text-white flex flex-col justify-center items-center">
            <h1 className="text-6xl mb-4 font-Caveat font-thin tracking-tight">Harshpreet Singh</h1>
            <h2 className="text-2xl mb-6">Web Developer & Designer & AI/ML Enthusiast</h2>
            
            <p className="text-center max-w-md mb-8">
                I'm passionate about Problem-Solving, Web Development and Designing. I love to learn and explore new technologies. Always ready for new challenges 💪.
            </p>
            
            <div className="flex space-x-4 mb-8">
                <button className="bg-blue-600 bg-opacity-20 backdrop-blur-md border border-blue-500 hover:bg-opacity-40 px-4 py-2 rounded">
                    View Projects
                </button>
                <button className="bg-green-600 bg-opacity-20 backdrop-blur-md border border-green-500 hover:bg-opacity-40 px-4 py-2 rounded">
                    View Resume
                </button>
            </div>

        </div>
        <SocialLinks />
        </>  
    );
};

export default Home;