import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.section
      id="projects"
      className="bg-gray-850 text-white p-16 rounded-2xl shadow-xl mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-pink-400 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((project) => (
          <motion.div
            key={project}
            className="bg-gray-800 p-6 rounded-xl shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-2">Project {project}</h3>
            <p className="text-gray-400 text-sm">This is a short description of Project {project}. It showcases the use of modern technologies and creative design.</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
