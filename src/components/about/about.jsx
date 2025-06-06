import React from 'react';
import SEOMetaTags from '../SEOMetaTags';

const About = () => {
  // About page structured data
  const aboutStructuredData = {
    "@context": "https://schema.org/",
    "@type": "AboutPage",
    "@id": "https://harshpreetsingh.vercel.app/about#aboutpage",
    "mainEntity": {
      "@type": "Person",
      "@id": "https://harshpreetsingh.vercel.app#person"
    },
    "description": "Learn about Harshpreet Singh's journey as a Computer Science student, Full Stack Developer, and his achievements in software development and machine learning."
  };

  // FAQ structured data for About page
  const faqData = [
    {
      question: "What is Harshpreet Singh's educational background?",
      answer: "Harshpreet Singh is currently pursuing Bachelor of Engineering in Computer Science from Chitkara University Institute of Engineering & Technology (2022-2026). He previously completed XII Non-Medical (CBSE) from Delhi Public School (2020-2022)."
    },
    {
      question: "What are Harshpreet Singh's key achievements?",
      answer: "Harshpreet Singh has achieved Star Programmer recognition, Dean's List membership, 1800+ LeetCode rating with 800+ problems solved, and served as Graphics Head at Open Source Chandigarh. His project 'Let's Help Everyone' received 10,000+ views."
    },
    {
      question: "What technologies does Harshpreet Singh specialize in?",
      answer: "Harshpreet Singh specializes in React.js, Node.js, Python, JavaScript, Machine Learning, AI, MongoDB, Express.js, and modern web development technologies. He has expertise in both frontend and backend development."
    },
    {
      question: "What is Harshpreet Singh's professional experience?",
      answer: "Harshpreet Singh completed an internship at Semi-Conductor Laboratory (SCL), Ministry of Electronics and Information Technology. He has also served as Graphics Head at Open Source Chandigarh and worked on multiple innovative projects."
    }
  ];

  React.useEffect(() => {
    // Add About page structured data
    const aboutScript = document.createElement('script');
    aboutScript.type = 'application/ld+json';
    aboutScript.textContent = JSON.stringify(aboutStructuredData);
    aboutScript.setAttribute('data-identifier', 'about-schema');
    document.head.appendChild(aboutScript);

    return () => {
      const existingScript = document.querySelector('script[data-identifier="about-schema"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <>
      <SEOMetaTags 
        title="About Harshpreet Singh | Computer Science Student & Full Stack Developer | Chitkara University"
        description="🎓 Meet Harshpreet Singh: Computer Science student at Chitkara University, Star Programmer, 1800+ LeetCode rating, SCL intern. Passionate about React, Node.js, Python, AI/ML. Dean's List member with 10+ innovative projects."
        keywords="Harshpreet Singh about, Computer Science student Chitkara University, Star Programmer, Semi-Conductor Laboratory internship, LeetCode 1800 rating, full stack developer biography, React Node.js Python developer, machine learning student, Open Source Chandigarh Graphics Head, Dean's List member, software engineering student, AI ML enthusiast, web development expertise, problem solving skills, algorithm expert"
        image="/about-og.png"
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
            "name": "About",
            "item": "https://harshpreetsingh.vercel.app/about"
          }
        ]}
        faq={faqData}
        category="About, Biography"
        readingTime="3 minutes"
        wordCount="200"
        author="Harshpreet Singh"
      />
      <div className="container mx-auto px-4 max-w-5xl overflow-y-auto hide-scrollbar">
        <header className="mb-8">
          <img
            src="/harsh.jpg"
            alt="Harshpreet Singh - Computer Science Student and Full Stack Developer at Chitkara University"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
            itemProp="image"
            loading="eager"
          />
        </header>
        
        <article itemScope itemType="https://schema.org/Person">
          <h1 className="text-4xl font-bold mb-4" itemProp="name">About Harshpreet Singh</h1>
          
          <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-2xl rounded-lg p-6 shadow-xl mb-10">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold">Full Stack Developer & Computer Science Student</h2>
              <meta itemProp="jobTitle" content="Full Stack Developer" />
              <meta itemProp="alumniOf" content="Chitkara University Institute of Engineering & Technology" />
            </div>

            <p className="mb-6" itemProp="description">
              Computer Science student with a passion for software development and machine learning. Experienced in real-world projects, leadership roles, problem-solving, and innovative design. Eager to contribute to impactful tech solutions.
            </p>

            <div className="space-y-6">
              <Section title="🏆 Key Achievements & Highlights">
                <ul className="list-disc pl-5 space-y-2">
                  <li>🏢 <strong>Internship at Semi-Conductor Laboratory (SCL)</strong>, Ministry of Electronics and Information Technology</li>
                  <li>🎨 <strong>Graphics Head at Open Source Chandigarh</strong> - Leading design initiatives for open source community</li>
                  <li>🚀 Developed <strong>"Let's Help Everyone"</strong> - a comprehensive solution for CSE Students with <strong>10,000+ views</strong></li>
                  <li>🧠 Created <strong>"Inner Echo"</strong> - a Machine Learning project on Depression Analysis with <strong>99.6% accuracy</strong></li>
                  <li>⭐ Honored as <strong>Star Programmer</strong> and <strong>Dean's List Member</strong></li>
                  <li>💻 <strong>1800+ LeetCode Rating</strong> with <strong>800+ Questions Solved</strong></li>
                </ul>
              </Section>
              
              <Section title="🎓 Education & Academic Excellence">
                <div itemScope itemType="https://schema.org/EducationalOrganization">
                  <p className="mb-3">
                    <strong itemProp="name">Chitkara University Institute of Engineering & Technology</strong><br />
                    <span itemProp="description">Bachelor of Engineering in Computer Science (2022 – 2026)</span><br />
                    <em>Dean's List Member | Star Programmer Recognition</em>
                  </p>
                </div>
                <div itemScope itemType="https://schema.org/EducationalOrganization">
                  <p>
                    <strong itemProp="name">Delhi Public School</strong><br />
                    <span itemProp="description">XII Non-Medical (CBSE) (2020 - 2022)</span>
                  </p>
                </div>
              </Section>

              <Section title="💼 Professional Experience">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Semi-Conductor Laboratory (SCL)</h4>
                    <p className="text-sm text-white/70">Intern | Ministry of Electronics and Information Technology</p>
                    <p className="text-sm">Gained hands-on experience in semiconductor technology and government sector operations.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Open Source Chandigarh</h4>
                    <p className="text-sm text-white/70">Graphics Head</p>
                    <p className="text-sm">Leading design initiatives and visual communication for the open source community.</p>
                  </div>
                </div>
              </Section>

              <Section title="🚀 Technical Skills & Expertise">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Frontend Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map((skill) => (
                        <span key={skill} className="px-2 py-1 text-xs bg-blue-500/20 rounded-full">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Backend Development</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Node.js', 'Express.js', 'MongoDB', 'Python', 'Flask'].map((skill) => (
                        <span key={skill} className="px-2 py-1 text-xs bg-green-500/20 rounded-full">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Machine Learning & AI</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Python', 'Scikit-learn', 'TensorFlow', 'Data Analysis', 'Neural Networks'].map((skill) => (
                        <span key={skill} className="px-2 py-1 text-xs bg-purple-500/20 rounded-full">{skill}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tools & Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Git', 'GitHub', 'VS Code', 'Firebase', 'Vercel'].map((skill) => (
                        <span key={skill} className="px-2 py-1 text-xs bg-orange-500/20 rounded-full">{skill}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Section>

              <Section title="🎯 Goals & Aspirations">
                <p className="text-white/90">
                  I am passionate about leveraging technology to solve real-world problems and create meaningful impact. 
                  My goal is to continue growing as a full-stack developer while contributing to innovative projects 
                  that make a difference in people's lives. I'm particularly interested in the intersection of 
                  web development and artificial intelligence.
                </p>
              </Section>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

const Section = ({ title, children }) => (
  <section>
    <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
    <div className="text-white/80">
      {children}
    </div>
  </section>
);

export default About;
