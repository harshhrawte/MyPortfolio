import React from 'react';
import { motion } from 'framer-motion';

const stack = [
  'React', 'Node.js', 'Express', 'MongoDB', 'Flask', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Git'
];

function TechStack() {
  return (
    <motion.section
      id="techstack"
      className="bg-gray-900 text-white p-16 rounded-2xl shadow-xl mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-teal-400 text-center">Tech Stack</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center">
        {stack.map((tech, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800 py-3 rounded-lg text-lg font-semibold"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default TechStack;
