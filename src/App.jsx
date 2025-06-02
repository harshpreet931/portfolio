import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainScreen from './components/mainScreen';
import Projects from './components/projects/projects';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import TechStack from './components/teckStack/teckStack';
import './fonts/fonts.css';

function App() {
  return (
    <Router>
      <MainScreen>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/techstack" element={<TechStack />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainScreen>
    </Router>
  );
}

export default App;