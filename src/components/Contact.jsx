import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-gray-950 text-white p-16 rounded-2xl shadow-xl mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-red-400 text-center">Contact Me</h2>
      <p className="text-gray-400 mb-4 text-center">Email: harshrawte.dev@gmail.com</p>
      <p className="text-gray-400 text-center">LinkedIn: linkedin.com/in/harshrawte</p>
    </motion.section>
  );
}

export default Contact;
