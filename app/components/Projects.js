"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "../../data";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  // State for the currently active (clicked) project
  const [activeProject, setActiveProject] = useState(null);

  const handleClose = () => setActiveProject(null);

  return (
    <section id="projects" className="py-12 bg-dark">
      <h2 className="text-3xl font-bold text-center mb-4 text-accent">Projects</h2>
      <div className="max-w-4xl mx-auto px-4 relative">
        <AnimatePresence mode="wait">
          {activeProject ? (
            // Detail View: Full-width detail card for the active project
            <motion.div
              key="project-detail"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3, rotate: 90, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5 }}
              className="relative bg-secondary rounded-lg shadow-md overflow-hidden w-full"
              style={{ height: "250px" }}
              onMouseLeave={handleClose}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-white hover:text-red-400 transition"
              >
                <FaTimes size={20} />
              </button>
              <div className="flex h-full">
                {/* Left Side: Project Image */}
                <div className="w-1/3 flex items-center justify-center p-4">
                  <Image
                    src={activeProject.image || "https://via.placeholder.com/200x150"}
                    alt={activeProject.title}
                    width={150}
                    height={150}
                    className="object-cover rounded"
                  />
                </div>
                {/* Right Side: Project Details */}
                <div className="w-2/3 p-4 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-accent">
                    {activeProject.title}
                  </h3>
                  {activeProject.github && (
                    <div className="mt-2">
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-accent hover:underline"
                      >
                        View on GitHub
                      </a>
                    </div>
                  )}
                  {/* Dummy description placeholder */}
                  <p className="mt-2 text-gray-300">
                    This is a dummy project description. More details coming soon.
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            // Grid View: Render all project cards in a grid layout with explicit horizontal and vertical gap
            <motion.div
              key="project-grid"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {projects.map((proj, index) => (
                <ProjectCard
                  key={proj.id}
                  project={proj}
                  index={index}
                  onActivate={setActiveProject}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
