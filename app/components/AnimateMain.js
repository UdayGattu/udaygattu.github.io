"use client";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function AnimateMain({ children }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex-grow container mx-auto p-6"
    >
      {children}
    </motion.main>
  );
}
