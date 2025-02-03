// app/page.js
"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { workExperiences, projects } from "../data";

export default function Home() {
  const recentWork = workExperiences.slice(0, 2);
  const recentProjects = projects.slice(0, 2);

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
          className="text-5xl md:text-6xl font-extrabold text-accent drop-shadow-lg"
        >
          Hi, I'm Uday Shankar Gattu
        </motion.h1>
      </motion.div>

      {/* Introduction & Profile Section */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl"
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
          <h2 className="text-2xl font-semibold text-accent">
            Machine Learning Engineer, AI Researcher &amp; AI Enthusiast
          </h2>
          <p className="mt-4 text-gray-300">
            I build and deploy advanced machine learning models while
            conducting cutting-edge AI research to drive transformative
            innovation. Passionate about data, algorithms, and solving complex
            problems.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="mt-4 inline-block px-6 py-3 bg-accent text-secondary rounded hover:bg-red-700 transition-colors duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Recent Work Experience Preview */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-accent mb-4">
          Recent Work Experience
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {recentWork.map((work) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.9, x: work.id % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="bg-secondary p-6 rounded-lg shadow-xl flex flex-col items-center"
            >
              <img
                src={work.logo || "https://via.placeholder.com/100x100"}
                alt={`${work.company} Logo`}
                className="w-24 h-24 object-contain"
              />
              <h3 className="mt-4 text-xl font-semibold text-accent">
                {work.company}
              </h3>
              <p className="mt-2 text-gray-300">
                {work.role} | {work.period}
              </p>
            </motion.div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/work" className="text-accent hover:underline">
            View All Work Experiences
          </Link>
        </div>
      </div>

      {/* Recent Projects Preview */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-accent mb-4">
          Recent Projects
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {recentProjects.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, scale: 0.9, y: proj.id % 2 === 0 ? 50 : -50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-secondary p-6 rounded-lg shadow-xl flex flex-col items-center"
            >
              <img
                src={proj.image || "https://via.placeholder.com/200x150"}
                alt={proj.title}
                className="w-full md:w-1/3 h-40 object-cover rounded"
              />
              <h3 className="mt-4 text-xl font-semibold text-accent">
                {proj.title}
              </h3>
            </motion.div>
          ))}
        </div>
        <div className="mt-4">
          <Link href="/projects" className="text-accent hover:underline">
            View All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
