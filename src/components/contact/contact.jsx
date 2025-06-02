import React from 'react';
import SEOMetaTags from '../SEOMetaTags';

const Contact = () => {
  return (
    <>
      <SEOMetaTags 
        title="Contact - Harshpreet Singh | Get In Touch"
        description="Contact Harshpreet Singh for collaboration opportunities, projects, or inquiries. Connect via GitHub, LinkedIn, Medium, or email. Available for freelance and full-time opportunities."
        keywords="Contact Harshpreet Singh, hire developer, collaboration, freelance developer, full stack developer contact, GitHub, LinkedIn"
        image="/contact-og.png"
      />
    <div className="flex items-center max-w-sm p-4">
      <div className="w-full">
        <h1 className="text-4xl font-extrabold mb-8 text-center font-SpaceMono text-white">
          Contact Me
        </h1>
        <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-8 shadow-xl">
          <div className="flex justify-center space-x-8">
            <ContactIcon href="https://github.com/harshpreet931" icon="fab fa-github" label="GitHub" />
            <ContactIcon href="https://www.linkedin.com/in/harshpreet931/" icon="fab fa-linkedin" label="LinkedIn" />
            <ContactIcon href="https://medium.com/@harshpreet0402" icon="fab fa-medium" label="Medium" />
            <ContactIcon href="mailto:harshpreet393.be22@chitkara.edu.in" icon="fas fa-envelope" label="Email" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const ContactIcon = ({ href, icon, label }) => (
  <a
    href={href}
    className="text-5xl text-white transition-all duration-300 hover:text-blue-400 hover:scale-110 animate-float"
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <i className={icon}></i>
  </a>
);

export default Contact;