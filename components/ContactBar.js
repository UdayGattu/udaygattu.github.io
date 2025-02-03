// components/ContactBar.js
"use client";
import { motion } from "framer-motion";

export default function ContactBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-secondary text-white text-sm py-2 px-4 flex justify-center space-x-4"
    >
      <span>
        Email:{" "}
        <a href="mailto:udaygattu9949@gmail.com" className="underline">
          udaygattu9949@gmail.com
        </a>
      </span>
      <span>
        LinkedIn:{" "}
        <a
          href="https://www.linkedin.com/in/udayshankargattu/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          View Profile
        </a>
      </span>
    </motion.div>
  );
}
