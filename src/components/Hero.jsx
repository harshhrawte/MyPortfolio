import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

function Hero() {
  return (
    <motion.section
      className="hero-section bg-dark flex flex-col items-center justify-center text-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <motion.img
        src={profileImage}
        alt="Profile"
        className="w-40 h-40 rounded-full mb-4"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />
      <h1 className="text-white text-4xl font-bold">Harsh Rawte</h1>
      <p className="text-gray-400 mt-2">Full Stack Developer | Web Developer</p>
    </motion.section>
  );
}

export default Hero;
