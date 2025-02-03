// app/skills/page.js
"use client";
import { motion } from "framer-motion";
import { skills } from "../../data";
import { FaReact } from "react-icons/fa"; // fallback icon

const directions = [
  { x: -50, opacity: 0 },
  { x: 50, opacity: 0 },
  { y: -50, opacity: 0 },
  { y: 50, opacity: 0 },
];

export default function Skills() {
  // Helper function to render items from a skills category.
  const renderItems = (items) =>
    items.map((item, index) => {
      const initial = directions[index % directions.length];
      return (
        <motion.div
          key={item.name}
          initial={initial}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className="flex items-center gap-2"
        >
          {item.icon ? (
            // If an icon URL is provided, use an img element
            <img src={item.icon} alt={item.name} className="w-10 h-10" />
          ) : (
            // Otherwise, fallback to the React Icon (FaReact in this example)
            <FaReact className="w-10 h-10 text-accent" />
          )}
          <span>{item.name}</span>
        </motion.div>
      );
    });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="px-4"
    >
      <h2 className="text-3xl font-bold mb-6 text-accent text-center">
        Skills & Technologies
      </h2>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Programming & Frameworks</h3>
        <div className="flex flex-wrap gap-4">{renderItems(skills.programming)}</div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Machine Learning & AI</h3>
        <div className="flex flex-wrap gap-4">{renderItems(skills.ai)}</div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Cloud & DevOps</h3>
        <div className="flex flex-wrap gap-4">{renderItems(skills.cloud)}</div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Certifications</h3>
        <div className="flex flex-wrap gap-4">{renderItems(skills.certifications)}</div>
      </div>
    </motion.div>
  );
}
