// app/page.js
"use client";
import { motion } from "framer-motion";
import Link from "next/link";

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
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        >
          Hi, I'm Uday Shankar Gattu
        </motion.h1>
      </motion.div>

      {/* Introduction & Profile Section */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg"
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-left"
        >
          <h2 className="text-2xl font-semibold text-primary">
            Machine Learning Engineer, AI Researcher &amp; AI Enthusiast
          </h2>
          <p className="mt-4 text-gray-700">
            I build and deploy advanced machine learning models while
            conducting cutting-edge AI research to drive transformative
            innovation. Passionate about data, algorithms, and solving complex
            problems.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="mt-4 inline-block px-6 py-3 bg-accent text-white rounded hover:bg-green-600 transition-colors duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Recent Work Experience Preview */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-primary mb-4">Recent Work Experience</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Work Item 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100x100?text=TCS"
              alt="TCS Logo"
              className="w-24 h-24 object-contain"
            />
            <h3 className="mt-4 text-xl font-semibold">TCS</h3>
            <p className="mt-2 text-gray-600">ML Engineer | Jun 2022 – Aug 2023</p>
          </div>
          {/* Work Item 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="https://via.placeholder.com/100x100?text=EduSkills"
              alt="EduSkills Logo"
              className="w-24 h-24 object-contain"
            />
            <h3 className="mt-4 text-xl font-semibold">EduSkills</h3>
            <p className="mt-2 text-gray-600">AI-ML Intern | Jan 2022 – May 2022</p>
          </div>
        </div>
        <div className="mt-4">
          <Link href="/work" className="text-blue-600 hover:underline">
            View More Work Experience
          </Link>
        </div>
      </div>

      {/* Recent Projects Preview */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-primary mb-4">Recent Projects</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Project Item 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="https://via.placeholder.com/200x150?text=Project+1"
              alt="Project 1"
              className="w-full md:w-1/3 h-40 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-semibold">Travel Agent Chatbot</h3>
          </div>
          {/* Project Item 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img
              src="https://via.placeholder.com/200x150?text=Project+2"
              alt="Project 2"
              className="w-full md:w-1/3 h-40 object-cover rounded"
            />
            <h3 className="mt-4 text-xl font-semibold">Text-to-Video Pipeline</h3>
          </div>
        </div>
        <div className="mt-4">
          <Link href="/projects" className="text-blue-600 hover:underline">
            View More Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
