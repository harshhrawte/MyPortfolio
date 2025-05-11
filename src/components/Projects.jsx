import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.section
      className="projects-section bg-gray-800 text-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-3xl font-semibold">My Projects</h2>
      <div className="projects mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          className="project-card bg-gray-700 p-4 rounded-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p className="text-gray-400">Description of Project 1</p>
        </motion.div>
        <motion.div
          className="project-card bg-gray-700 p-4 rounded-lg"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p className="text-gray-400">Description of Project 2</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Projects;
