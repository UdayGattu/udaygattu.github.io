"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

// This component renders a single work experience card in grid view.
export default function WorkCard({ work, index, onActivate }) {
  // Compute random exit values once (client-side only)
  const exitX = useMemo(() => (Math.random() - 0.5) * 1200, [work.id]); // between -600 and 600
  const exitY = useMemo(() => (Math.random() - 0.5) * 600, [work.id]);  // between -300 and 300

  return (
    <motion.div
      className="bg-secondary rounded-lg shadow-md w-[300px] h-[300px] cursor-pointer hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        x: exitX,
        y: exitY,
        transition: { duration: 0.5 },
      }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      onClick={() => onActivate(work)}
    >
      <div className="flex flex-col items-center justify-center p-4 h-full">
        <Image
          src={work.logo || "https://via.placeholder.com/150"}
          alt={`${work.company} Logo`}
          width={150}
          height={150}
          className="object-contain"
        />
        <h3 className="mt-4 text-xl font-bold text-accent text-center">
          {work.company}
        </h3>
        <p className="text-lg text-gray-300">{work.role}</p>
        <p className="text-gray-400">{work.period}</p>
        <p className="text-gray-400">{work.location}</p>
      </div>
    </motion.div>
  );
}
