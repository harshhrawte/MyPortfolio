import React from 'react';
import { motion } from 'framer-motion';

function Certifications() {
  const certs = [
    'Python & Flask Development',
    'Responsive Web Design',
    'Machine Learning with Python'
  ];

  return (
    <motion.section
      id="certifications"
      className="bg-gray-900 text-white p-16 rounded-2xl shadow-xl mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-yellow-400 text-center">Certifications</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-4 text-center">
        {certs.map((cert, i) => (
          <li key={i} className="text-lg">{cert}</li>
        ))}
      </ul>
    </motion.section>
  );
}

export default Certifications;
