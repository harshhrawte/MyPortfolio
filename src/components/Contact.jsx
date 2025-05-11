import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.section
      className="contact-section bg-gray-800 text-white p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2 className="text-3xl font-semibold">Contact Me</h2>
      <p className="mt-4 text-lg">
        Feel free to reach out to me for collaborations or any queries!
      </p>
      <p className="mt-2">
        <a href="mailto:harsh@example.com" className="text-blue-500">
          harsh@example.com
        </a>
      </p>
    </motion.section>
  );
}

export default Contact;
