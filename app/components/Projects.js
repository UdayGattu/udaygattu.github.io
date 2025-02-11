"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../data";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  return (
    <section id="projects" className="py-12 bg-dark relative">
      <h2 className="text-3xl font-bold text-center text-accent mb-8">
        Projects
      </h2>

      <div className="relative w-full flex justify-center items-center overflow-hidden">
        {/* Left Scroll Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 text-white bg-accent p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Project Card */}
        <div className="w-full max-w-4xl overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[currentIndex].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="w-full bg-secondary rounded-lg shadow-lg flex items-center p-6"
            >
              {/* Left Side: Project Image */}
              <div className="w-1/3 flex items-center justify-center">
                <Image
                  src={projects[currentIndex].image || "/images/default.png"}
                  alt={projects[currentIndex].title}
                  width={200}
                  height={200}
                  className="object-cover rounded-lg"
                />
              </div>

              {/* Right Side: Project Details */}
              <div className="w-2/3 pl-6 flex flex-col">
                <h3 className="text-2xl font-bold text-accent">
                  {projects[currentIndex].title}
                </h3>

                {/* GitHub Link (Shown Only If Available) */}
                {projects[currentIndex].link && (
                  <a
                    href={projects[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center text-red-400 hover:underline"
                  >
                    <FaGithub className="mr-2" /> View on GitHub
                  </a>
                )}

                {/* Tech Stack */}
                {projects[currentIndex].techStack && projects[currentIndex].techStack.length > 0 && (
                  <p className="mt-2 text-gray-400">
                    <span className="font-semibold text-gray-300">Tech Stack:</span>{" "}
                    {projects[currentIndex].techStack.join(", ")}
                  </p>
                )}

                {/* Project Description (Now Supports Bullet Points) */}
                <ul className="list-disc list-inside mt-3 text-gray-300 space-y-1">
                  {Array.isArray(projects[currentIndex].description)
                    ? projects[currentIndex].description.map((desc, i) => (
                        <li key={i}>{desc.trim()}</li>
                      ))
                    : projects[currentIndex].description
                        .split(". ")
                        .map((desc, i) => (
                          <li key={i}>{desc.trim()}</li>
                        ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 text-white bg-accent p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
