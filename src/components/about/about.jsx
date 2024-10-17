import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 max-w-5xl overflow-y-auto hide-scrollbar">
      <div className="mb-8">
        <img
          src="/harsh.jpg"
          alt="Profile"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>
      
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      
      <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-lg p-6 shadow-xl">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Harshpreet Singh</h2>
        </div>

        <p className="mb-6">
          Computer Science student with a passion for software development and machine learning. Experienced in real-world projects, leadership roles, problem-solving, and innovative design. Eager to contribute to impactful tech solutions.
        </p>

        <div className="space-y-6">
          <Section title="Highlights">
            <ul className="list-disc pl-5 space-y-2">
              <li>Internship at Semi-Conductor Laboratory (SCL), Ministry of Electronics and Information Technology</li>
              <li>Graphics Head at Open Source Chandigarh</li>
              <li>Developed "Let's Help Everyone" - a comprehensive solution for CSE Students with 10,000+ views</li>
              <li>Created "Inner Echo" - a Machine Learning project on Depression Analysis with 99.6% accuracy</li>
              <li>Honored as Star Programmer and Dean's List Member</li>
              <li>1800+ LeetCode Rating with 800+ Questions Solved</li>
            </ul>
          </Section>
          
          <Section title="Education">
            <p>
              <strong>Chitkara University Institute of Engineering & Technology</strong><br />
              Bachelor of Engineering in Computer Science (2022 – 2026)<br />
              <strong>Delhi Public School</strong><br />
              XII Non-Medical (CBSE) (2020 - 2022)
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

export default About;