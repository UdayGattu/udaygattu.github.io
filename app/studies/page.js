// app/studies/page.js
"use client";
import { motion } from "framer-motion";
import { studies } from "../../data"; // Import studies array from data.js

export default function Studies() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="px-4"
    >
      <h2 className="text-3xl font-bold mb-6 text-accent text-center">
        Education
      </h2>
      <div className="relative border-l-2 border-accent ml-8">
        {studies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            className="mb-8 ml-4"
          >
            <div className="flex items-center">
              <div className="w-8 h-8 bg-accent rounded-full -left-4 absolute border-2 border-secondary"></div>
              <div className="ml-12">
                <h3 className="text-2xl font-semibold text-accent">
                  {study.degree}
                </h3>
                <p className="text-gray-300">{study.institution}</p>
                <p className="text-gray-300">{study.period}</p>
                <p className="mt-2 text-gray-300">{study.details}</p>
              </div>
            </div>
            <div className="mt-4 flex justify-center">
              <img
                src={study.logo || "https://via.placeholder.com/100"}
                alt={`${study.institution} Logo`}
                className="w-24 h-24 object-contain"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
