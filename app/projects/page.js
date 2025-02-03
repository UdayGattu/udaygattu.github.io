// app/projects/page.js
"use client";
import { motion } from "framer-motion";
import { projects } from "../../data";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="px-4"
    >
      <h2 className="text-3xl font-bold mb-6 text-accent text-center">
        Projects & Research
      </h2>
      {projects.map((proj, index) => (
        <motion.div
          key={proj.id}
          initial={{ opacity: 0, y: index % 2 === 0 ? 50 : -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.3 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold text-accent">{proj.title}</h3>
          <div className="flex flex-col md:flex-row items-center gap-4 mt-2">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              src={proj.image || "https://via.placeholder.com/200x150"}
              alt={proj.title}
              className="w-full md:w-1/3 h-40 object-cover rounded"
            />
            <div>
              <p className="text-gray-300">
                <strong>Tech Stack:</strong> {proj.techStack}
              </p>
              <p className="text-gray-300 mt-2">{proj.description}</p>
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-accent hover:underline"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
