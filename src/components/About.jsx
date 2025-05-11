import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.section
      className="about-section bg-gray-900 text-white p-8"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-3xl font-semibold">About Me</h2>
      <p className="mt-4 text-lg">
        I'm a passionate Full Stack Developer with a deep understanding of
        modern technologies. I have experience in building scalable web
        applications with React, Node.js, and other popular tools.
      </p>
    </motion.section>
  );
}

export default About;
