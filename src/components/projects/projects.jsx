import React from 'react';
import SEOMetaTags from '../SEOMetaTags';

const projects = [
  {
    title: "Markd",
    github: "https://github.com/harshpreet931/Markd",
    image: "/markd.png",
    description: "A modern content-sharing platform that enables users to create, share, and discover articles on various topics. It offers a seamless user experience with features like real-time updates, user authentication, article management, and social interactions such as upvoting and downvoting.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT", "Tailwind"],
    category: "Full Stack Web Application",
    year: "2024"
  },
  {
    title: "Spam Classification in C",
    github: "https://github.com/harshpreet931/Spam-Email-Classification", 
    image: "/spamEmail.png",
    description: "A lightweight and fast Naive Bayes-based spam email classifier written in C.",
    tech: ["C", "Naive Bayes", "Machine Learning"],
    category: "Machine Learning",
    year: "2024"
  },
  {
    title: "Let's Help Everyone",
    github: "https://letshelp.vercel.app/",
    image: "/letshelp.png",
    description: " Comprehensive solution for CSE Students to get all of their study material. More than 10,000+ views and 15+ contributors in first 3 months of release.",
    tech: ["Next.js", "Firebase"],
    category: "Educational Platform",
    year: "2023"
  },
  {
    title: "Flashify",
    github: "https://github.com/harshpreet931/Flashify",
    image: "/flashify.png", 
    description: "A fully responsive web-based application designed to enhance your learning experience through interactive flashcards.",
    tech: ["HTML/CSS", "JS"],
    category: "Educational Tool",
    year: "2023"
  },
  {
    title: "Inner Echo",
    github: "https://github.com/harshpreet931/InnerEcho",
    image: "/innerecho.png",
    description: "Team Project for Artificial Intelligence course. Machine Learning Project on Depression Analysis from a Survey form made in Flask.",
    tech: ["Python", "Flask", "Sci-kit-learn", "HTML/CSS"],
    category: "Machine Learning",
    year: "2024"
  },
  {
    title: "Know Thy Shelf",
    github: "https://github.com/Ishika-6/KnowThyShelfReact",
    image: "/knowthyshelf.png",
    description: "Website for reading and publishing books.",
    tech: ["React", "Firebase"],
    category: "Web Application",
    year: "2023"
  }
];

// Structured data for projects
const projectsStructuredData = {
  "@context": "https://schema.org/",
  "@type": "ItemList",
  "name": "Harshpreet Singh's Projects",
  "description": "Portfolio of innovative software development projects by Harshpreet Singh",
  "numberOfItems": projects.length,
  "itemListElement": projects.map((project, index) => ({
    "@type": "SoftwareSourceCode",
    "position": index + 1,
    "name": project.title,
    "description": project.description,
    "programmingLanguage": project.tech,
    "codeRepository": project.github,
    "author": {
      "@type": "Person",
      "name": "Harshpreet Singh"
    },
    "dateCreated": project.year,
    "applicationCategory": project.category,
    "operatingSystem": "Cross Platform",
    "softwareRequirements": project.tech
  }))
};

const Projects = () => {
  // Add structured data to head
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(projectsStructuredData);
    script.setAttribute('data-identifier', 'projects-schema');
    document.head.appendChild(script);

    return () => {
      const existingScript = document.querySelector('script[data-identifier="projects-schema"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      <SEOMetaTags 
        title="Projects Portfolio - Harshpreet Singh | 10+ Full Stack & ML Projects"
        description="🚀 Explore innovative projects by Harshpreet Singh: Markd (MERN Stack platform), Machine Learning projects (99.6% accuracy), Educational platforms (10k+ views). React, Node.js, Python, AI/ML expertise showcased."
        keywords="Harshpreet Singh projects, React projects portfolio, Node.js applications, Python machine learning projects, MERN stack development, web development portfolio, full stack projects, AI ML projects, educational platforms, software engineering portfolio, GitHub projects, open source contributions"
        image="/projects-og.png"
        breadcrumbs={[
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://harshpreetsingh.vercel.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Projects",
            "item": "https://harshpreetsingh.vercel.app/projects"
          }
        ]}
        category="Technology Portfolio"
        readingTime="5 minutes"
        wordCount="300"
      />
    <div className="container p-2 overflow-y-auto hide-scrollbar">
      <header>
        <h1 className="text-4xl font-bold text-center mb-4 text-white">Projects Portfolio</h1>
        <p className="text-center text-white/80 mb-12 max-w-3xl mx-auto">
          Explore my collection of innovative software development projects spanning full stack web applications, 
          machine learning solutions, and educational platforms. Each project demonstrates expertise in modern 
          technologies and problem-solving skills.
        </p>
      </header>
      
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8" aria-label="Projects showcase">
        {projects.map((project, index) => (
          <article 
            key={index} 
            className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
            itemScope 
            itemType="https://schema.org/SoftwareSourceCode"
          >
            <div className="relative">
              <img 
                src={project.image} 
                alt={`${project.title} - ${project.description.slice(0, 100)}...`}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                itemProp="image"
              />
            </div>
            <div className="p-6">
                <div className="absolute bottom-0 right-0 m-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 backdrop-blur-lg rounded-full text-white hover:bg-white/20 transition-colors duration-300"
                      aria-label={`View ${project.title} source code on GitHub`}
                      itemProp="codeRepository"
                    >
                    <i className="fab fa-github text-lg" aria-hidden="true"></i>
                    </a>
                </div>
              <h2 className="text-2xl font-bold text-white mb-3" itemProp="name">{project.title}</h2>
              <p className="text-white/80 mb-4" itemProp="description">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20"
                    itemProp="programmingLanguage"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center text-sm text-white/60">
                <span className="bg-white/5 px-2 py-1 rounded" itemProp="applicationCategory">{project.category}</span>
                <time itemProp="dateCreated">{project.year}</time>
              </div>
              <meta itemProp="author" content="Harshpreet Singh" />
            </div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
          </article>
        ))}
      </section>
    </div>
    </>
  );
};

export default Projects;
