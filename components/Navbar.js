"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaGoogle, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-gray-900 text-white p-4 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Navigation Links */}
        <div className="flex space-x-6 text-lg">
          <Link href="/" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">
            Home
          </Link>
          <Link href="/studies" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">
            Education
          </Link>
          <Link href="/work" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">
            Work Experience
          </Link>
          <Link href="/skills" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">
            Skills
          </Link>
          <Link href="/projects" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">
            Projects
          </Link>
          <Link href="/cv" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">
            Resume
          </Link>
          <Link href="/contact" className="hover:text-red-400 transition-colors duration-300 cursor-pointer">
            Contact
          </Link>
        </div>

        {/* Right Side: Social Icons with React Icons */}
        <div className="flex gap-4 text-xl">
          <a href="https://www.linkedin.com/in/udayshankargattu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition-colors duration-300" />
          </a>
          <a href="https://github.com/UdayGattu" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-500 transition-colors duration-300" />
          </a>
          <a href="https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID" target="_blank" rel="noopener noreferrer">
            <FaGoogle className="hover:text-red-400 transition-colors duration-300" />
          </a>
          <a href="mailto:udaygattu9949@gmail.com">
            <FaEnvelope className="hover:text-green-400 transition-colors duration-300" />
          </a>
          <a href="tel:+16179717892">
            <FaPhone className="hover:text-yellow-400 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
