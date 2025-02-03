// app/work/page.js
"use client";
import { motion } from "framer-motion";
import { workExperiences } from "../../data";

export default function Work() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-accent">Work Experience</h2>
      {workExperiences.map((work) => (
        <motion.div
          key={work.id}
          initial={{ opacity: 0, x: work.id % 2 === 0 ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 flex flex-col md:flex-row items-center bg-secondary p-6 rounded-lg shadow-xl"
        >
          <img
            src={work.logo || "https://via.placeholder.com/100x100"}
            alt={`${work.company} Logo`}
            className="w-24 h-24 object-contain mr-4"
          />
          <div>
            <h3 className="text-2xl font-semibold text-accent">
              {work.role}, {work.company}
            </h3>
            <p className="text-lg text-gray-300">
              {work.location} | {work.period}
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              {work.description.map((line, index) => (
                <li key={index}>{line}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
