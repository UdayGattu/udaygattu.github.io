"use client";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <section id="cv" className="py-12 bg-dark">
      <h2 className="text-3xl font-bold text-center mb-4 text-accent">
        Resume{" "}
        <a 
          href="/cv.pdf" 
          download 
          className="inline-block ml-2 hover:text-red-400"
        >
          <FaDownload className="w-6 h-6" />
        </a>
      </h2>
      <div className="flex flex-col items-center">
        <motion.iframe
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="/cv.pdf"  // Replace with your actual resume PDF when available
          width="80%"
          height="600px"
          className="border-2 border-accent rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
