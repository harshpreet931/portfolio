import React from 'react';
import './techStack.css';

const techStack = [
  {
    category: 'Languages',
    items: [
      { name: 'Java', icon: '☕', description: 'A high-level, class-based programming language' },
      { name: 'Python', icon: '🐍', description: 'A popular programming language known for its readability' },
      { name: 'C', icon: '📄', description: 'A powerful general-purpose programming language' },
      { name: 'C++', icon: '💻', description: 'An extension of C, with object-oriented features' },
      { name: 'JavaScript', icon: '🟨', description: 'A dynamic programming language for web development' },
      { name: 'HTML', icon: '🌐', description: 'The standard markup language for creating web pages' },
      { name: 'CSS', icon: '🎨', description: 'A stylesheet language used to describe the presentation of a document' },
    ],
  },
  {
    category: 'Frameworks',
    items: [
      { name: 'React', icon: '⚛️', description: 'A JavaScript library for building user interfaces' },
      { name: 'Node.js', icon: '🟢', description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine' },
      { name: 'Next.js', icon: '▲', description: 'React framework for production-grade applications' },
      { name: 'Express', icon: '🚅', description: 'A minimal and flexible Node.js web application framework' },
      { name: 'Flask', icon: '🍶', description: 'A lightweight WSGI web application framework for Python' },
    ],
  },
  {
    category: 'Developer Tools',
    items: [
      { name: 'Git', icon: '🔧', description: 'A distributed version control system for tracking changes in code' },
      { name: 'JetBrains (PyCharm, IntelliJ, CLion, WebStorm)', icon: '🖥️', description: 'A suite of powerful IDEs for development' },
      { name: 'VS Code', icon: '📝', description: 'A lightweight, yet powerful code editor from Microsoft' },
    ],
  },
  {
    category: 'Libraries',
    items: [
      { name: 'Pandas', icon: '🐼', description: 'A Python library for data manipulation and analysis' },
      { name: 'NumPy', icon: '📊', description: 'A Python library used for working with arrays and numerical operations' },
      { name: 'Matplotlib', icon: '📈', description: 'A plotting library for creating static, animated, and interactive visualizations' },
      { name: 'Seaborn', icon: '🌊', description: 'A Python visualization library based on Matplotlib' },
      { name: 'scikit-learn', icon: '🔬', description: 'A Python library for machine learning and data mining' },
    ],
  },
];

const TechStack = () => {
  return (
    <div className="container flex flex-col p-8 overflow-y-auto hide-scrollbar">
      {techStack.map((category, index) => (
        <div key={index} className="w-full mb-12">
          {/* Category Heading */}
          <h2 className="text-4xl font-bold text-center mb-8 text-white">{category.category}</h2>
          
          {/* Cards for the current category */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {category.items.map((tech, subIndex) => (
              <div key={subIndex} className="group relative overflow-hidden rounded-2xl w-full max-w-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg transition-all duration-300 group-hover:backdrop-blur-2xl" />
                <div className="relative p-6 flex flex-col h-full transition-all duration-300 group-hover:scale-105">
                  <div className="mb-4 flex items-center">
                    <span className="text-4xl mr-3 transition-all duration-300 group-hover:scale-110">{tech.icon}</span>
                    <h3 className="text-2xl font-bold text-white">{tech.name}</h3>
                  </div>
                  <p className="text-white flex-grow">{tech.description}</p>
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;
