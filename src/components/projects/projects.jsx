import React from 'react';

const projects = [
  {
    title: "Markd",
    github: "https://github.com/harshpreet931/Markd",
    image: "/markd.png",
    description: "A modern content-sharing platform that enables users to create, share, and discover articles on various topics. It offers a seamless user experience with features like real-time updates, user authentication, article management, and social interactions such as upvoting and downvoting.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind"]
  },
  {
    title: "Spam Classification in C",
    github: "https://github.com/harshpreet931/Spam-Email-Classification",
    image: "/spamEmail.png",
    description: "A lightweight and fast Naive Bayes-based spam email classifier written in C.",
    tech: ["C", "Naive Bayes", "Machine Learning"]
  },
  {
    title: "Let's Help Everyone",
    github: "https://letshelp.vercel.app/",
    image: "/letshelp.png",
    description: " Comprehensive solution for CSE Students to get all of their study material. More than 10,000+ views and 15+ contributors in first 3 months of release.",
    tech: ["Next.js", "Firebase"]
  },
  {
    title: "Flashify",
    github: "https://github.com/harshpreet931/Flashify",
    image: "/flashify.png",
    description: "A fully responsive web-based application designed to enhance your learning experience through interactive flashcards.",
    tech: ["HTML/CSS", "JS"]
  },
  {
    title: "Inner Echo",
    github: "https://github.com/harshpreet931/InnerEcho",
    image: "/innerecho.png",
    description: "Team Project for Artificial Intelligence course. Machine Learning Project on Depression Analysis from a Survey form made in Flask.",
    tech: ["Python", "Flask", "Sci-kit-learn", "HTML/CSS"]
  },
  {
    title: "Know Thy Shelf",
    github: "https://github.com/Ishika-6/KnowThyShelfReact",
    image: "/knowthyshelf.png",
    description: " Website for reading and publishing books.",
    tech: ["React", "Firebase"]
  }
];

const Projects = () => {
  return (
    <div className="container p-2 overflow-y-auto hide-scrollbar">
      <h1 className="text-4xl font-bold text-center mb-12 text-white">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20">
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
                <div className="absolute bottom-0 right-0 m-3">
                    <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/10 backdrop-blur-lg rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                    >
                    <i className="fab fa-github text-lg"></i>
                    </a>
                </div>
              <h2 className="text-2xl font-bold text-white mb-3">{project.title}</h2>
              <p className="text-white/80 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;