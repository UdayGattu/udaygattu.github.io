"use client";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaGoogle, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full bg-dark p-4 z-10 shadow-md"
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Uday Shankar Gattu</h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <ScrollLink to="home" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-red-400">
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="work" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-red-400">
              Work
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="education" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-red-400">
              Education
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="skills" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-red-400">
              Skills
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="projects" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-red-400">
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="cursor-pointer hover:text-red-400">
              Contact
            </ScrollLink>
          </li>
        </ul>
        <div className="flex space-x-4 text-xl">
          <a href="https://www.linkedin.com/in/udayshankargattu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-500 transition duration-300" />
          </a>
          <a href="https://github.com/UdayGattu" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-400 transition duration-300" />
          </a>
          <a href="https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID" target="_blank" rel="noopener noreferrer">
            <FaGoogle className="hover:text-red-400 transition duration-300" />
          </a>
          <a href="mailto:udaygattu9949@gmail.com">
            <FaEnvelope className="hover:text-green-400 transition duration-300" />
          </a>
          <a href="tel:+16179717892">
            <FaPhone className="hover:text-yellow-400 transition duration-300" />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
