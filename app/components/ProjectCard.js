"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

export default function ProjectCard({ project, index, onActivate }) {
  // Compute random exit translations once per card (client-side)
  const exitX = useMemo(() => (Math.random() - 0.5) * 1200, [project.id]);
  const exitY = useMemo(() => (Math.random() - 0.5) * 600, [project.id]);

  return (
    <motion.div
      className="bg-secondary rounded-lg shadow-md w-[320px] h-[400px] cursor-pointer hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        x: exitX,
        y: exitY,
        transition: { duration: 0.5 },
      }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onClick={() => onActivate(project)}
    >
      <div className="flex flex-col items-center justify-center p-6 h-full">
        <Image
          src={project.image || "https://via.placeholder.com/200x150"}
          alt={project.title}
          width={300}
          height={200}
          className="object-cover rounded"
        />
        <h3 className="mt-4 text-xl font-bold text-accent text-center">
          {project.title}
        </h3>
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-accent hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            View on GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
}
