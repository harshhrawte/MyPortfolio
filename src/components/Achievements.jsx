import React from 'react';
import { motion } from 'framer-motion';

function Achievements() {
  const achievements = [
    'Secured top 5 rank in coding contest at VIT',
    'Selected for final round of XYZ Hackathon',
    'Published research on student performance prediction'
  ];

  return (
    <motion.section
      id="achievements"
      className="bg-gray-850 text-white p-16 rounded-2xl shadow-xl mb-12"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-blue-400 text-center">Achievements</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-4 text-center">
        {achievements.map((item, idx) => (
          <li key={idx} className="text-lg">{item}</li>
        ))}
      </ul>
    </motion.section>
  );
}

export default Achievements;
