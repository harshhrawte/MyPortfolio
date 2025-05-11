import React from 'react';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Achievements from './components/Achievements';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md p-4">
        <ul className="flex justify-center space-x-6 text-white">
          <li><a href="#about" className="hover:text-purple-400">Who Am I?</a></li>
          <li><a href="#education" className="hover:text-green-400">Education</a></li>
          <li><a href="#techstack" className="hover:text-teal-400">Tech Stack</a></li>
          <li><a href="#projects" className="hover:text-pink-400">Projects</a></li>
          <li><a href="#certifications" className="hover:text-yellow-400">Certifications</a></li>
          <li><a href="#achievements" className="hover:text-blue-400">Achievements</a></li>
          <li><a href="#contact" className="hover:text-red-400">Contact</a></li>
        </ul>
      </nav>

      <div className="pt-24"> {/* Adds padding to prevent nav bar from overlapping sections */}
        <About />
        <Education />
        <TechStack />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </div>
    </div>
  );
}

export default App;
