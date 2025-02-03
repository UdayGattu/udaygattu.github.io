// components/Navbar.js
"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-primary text-white p-4 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <Link href="/" className="hover:text-secondary transition-colors duration-300 cursor-pointer">
            Home
          </Link>
          <Link href="/work" className="hover:text-secondary transition-colors duration-300 cursor-pointer">
            Work
          </Link>
          <Link href="/skills" className="hover:text-secondary transition-colors duration-300 cursor-pointer">
            Skills
          </Link>
          <Link href="/projects" className="hover:text-secondary transition-colors duration-300 cursor-pointer">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-secondary transition-colors duration-300 cursor-pointer">
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <motion.a
            href="https://www.linkedin.com/in/udayshankargattu/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer underline"
          >
            LinkedIn
          </motion.a>
          <motion.a
            href="https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer underline"
          >
            Google Scholar
          </motion.a>
          <motion.a
            href="mailto:udaygattu9949@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer underline text-sm"
          >
            Email
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
