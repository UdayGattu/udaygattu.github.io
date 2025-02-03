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
      className="bg-gray-800 text-white p-4 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              Home
            </motion.span>
          </Link>
          <Link href="/work">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              Work Experience
            </motion.span>
          </Link>
          <Link href="/skills">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              Skills
            </motion.span>
          </Link>
          <Link href="/projects">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              Projects
            </motion.span>
          </Link>
          <Link href="/contact">
            <motion.span
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer"
            >
              Contact
            </motion.span>
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
            href="mailto:udaygattu9949@gmail.com"
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer underline text-sm"
          >
            udaygattu9949@gmail.com
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
}
