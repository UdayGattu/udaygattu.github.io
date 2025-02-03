"use client";

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="text-center">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
          Hi, I'm Uday Shankar Gattu
        </h1>
      </motion.div>

      {/* Introduction */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}
        className="mt-8"
      >
        <h2 className="text-2xl font-semibold text-primary">
          Aspiring Machine Learning Engineer & AI Researcher
        </h2>
        <p className="mt-4 text-gray-700">
          I specialize in building and deploying machine learning models, leveraging cutting-edge AI research to solve real-world problems.
        </p>
        <a 
          href="/contact" 
          className="mt-8 inline-block px-6 py-3 bg-accent text-white rounded hover:bg-green-600 transition-colors duration-300"
        >
          Get In Touch
        </a>
      </motion.div>
    </div>
  );
}
