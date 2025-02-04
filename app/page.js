"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { workExperiences, projects } from "../data";

export default function Home() {
  const recentWork = workExperiences.slice(0, 2);
  const recentProjects = projects.slice(0, 2);

  return (
    <div className="flex flex-col items-center bg-black text-white">
      {/* Hero Section */}
      <section id="home">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative h-32 flex items-center justify-center"
        >
          <motion.h1
            className="text-6xl md:text-7xl font-extrabold text-accent text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hi, I'm Uday Shankar Gattu
          </motion.h1>
        </motion.div>

        {/* Profile & Description Section */}
        <div className="flex flex-row items-center justify-center gap-6 px-6 mt-0">
          {/* Profile Picture (Larger Size) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="w-52 h-52 md:w-60 md:h-60 rounded-full overflow-hidden shadow-xl"
          >
            <img
              src="/images/page/Pappa.jpg" // Replace with actual profile picture URL
              alt="Profile Picture"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-center md:text-left max-w-lg"
          >
            <h2 className="text-xl md:text-2xl font-semibold text-accent">
              Machine Learning Engineer, AI Researcher & AI Enthusiast
            </h2>
            <p className="mt-1 text-gray-300">
              I build and deploy advanced machine learning models while
              conducting cutting-edge AI research to drive transformative
              innovation.
            </p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="mt-3"
            >
              <Link href="/cv">
                <span className="inline-block px-6 py-3 bg-accent text-secondary rounded hover:bg-red-700 transition-colors duration-300 cursor-pointer">
                  Get in Touch
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="mt-12 px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-3xl font-bold text-accent mb-4 text-center"
        >
          Work Experience
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {recentWork.map((work, index) => (
            <Link key={work.id} href="/work">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="bg-secondary p-6 rounded-lg shadow-xl flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={work.logo || "https://via.placeholder.com/100x100"}
                  alt={`${work.company} Logo`}
                  className="w-24 h-24 object-contain"
                />
                <h3 className="mt-2 text-xl font-semibold text-accent">
                  {work.role} at {work.company}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
