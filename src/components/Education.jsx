import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <motion.section
      id="education"
      className="bg-gray-950 text-white p-16 rounded-2xl shadow-xl mb-12"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold text-green-400 mb-6 text-center">Education</h2>
      <div className="text-center">
        <h3 className="text-2xl font-semibold">B.Tech in Information Technology</h3>
        <p className="text-gray-400">Vidyalankar Institute of Technology, Mumbai</p>
        <p className="text-gray-500 text-sm">CGPA: 9.5 till 4th semester | Currently in 5th</p>
      </div>
    </motion.section>
  );
}

export default Education;
