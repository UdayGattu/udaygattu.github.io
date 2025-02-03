// app/cv/page.js
"use client";
import { motion } from "framer-motion";

export default function CV() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="p-6 px-4"
    >
      <h2 className="text-3xl font-bold mb-6 text-accent text-center">
        My Resume / CV
      </h2>
      <div className="flex flex-col items-center gap-4">
        <motion.iframe
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src="/CV.pdf"
          width="80%"
          height="600px"
          className="border-2 border-accent rounded-lg shadow-lg"
        />
        <a
          href="/CV.pdf"
          download
          className="text-accent hover:underline text-center"
        >
          Download My Resume
        </a>
      </div>
    </motion.div>
  );
}