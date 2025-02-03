// app/cv/page.js
"use client";
import { motion } from "framer-motion";

export default function CV() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="p-6"
    >
      <h2 className="text-3xl font-bold mb-6 text-accent text-center">
        My Resume / CV
      </h2>
      <div className="flex justify-center">
        <motion.iframe
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src="/cv.pdf"
          width="80%"
          height="600px"
          className="border-2 border-accent rounded-lg shadow-lg"
        >
          Your browser does not support PDFs.{" "}
          <a href="/cv.pdf" className="text-accent underline">
            Download the PDF
          </a>
        </motion.iframe>
      </div>
      <div className="text-center mt-4">
        <a href="/cv.pdf" download className="text-accent hover:underline">
          Download My Resume
        </a>
      </div>
    </motion.div>
  );
}
