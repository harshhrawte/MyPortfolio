import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.section
      className="hero-section flex flex-col items-center justify-center text-center p-8 min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('backgroun.png')",
        backgroundPosition: 'center',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {/* Overlay for background image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Hero content */}
      <motion.div
        className="relative z-10"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Name and Titles */}
        <h1 className="text-white text-5xl font-extrabold tracking-wide">
          Harsh Rawte
        </h1>
        <p className="text-gray-400 mt-3 text-xl">Full Stack Developer | Web Developer</p>
        <p className="text-gray-300 mt-2 text-lg">
          Passionate about building innovative web applications.
        </p>

        {/* Call-to-Action Button */}
        <motion.button
          className="mt-6 px-8 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
          whileHover={{ scale: 1.05, backgroundColor: "#1c64f2" }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' })}
        >
          View Projects
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export default Hero;
