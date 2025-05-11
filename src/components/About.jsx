import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <motion.section
      id="about"
      className="bg-gray-950 text-white p-16 rounded-2xl shadow-xl mb-12 mt-20"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-purple-400 text-center" data-aos="fade-up">
        Who Am I?
      </h2>
      <p className="text-lg leading-relaxed text-gray-300 text-center" data-aos="fade-up" data-aos-delay="200">
        I am a dedicated Full Stack Developer with experience building responsive and dynamic web applications using modern technologies like React, Node.js, MongoDB, and Flask. I love solving problems and building creative digital solutions.
      </p>
    </motion.section>
  );
}

export default About;
