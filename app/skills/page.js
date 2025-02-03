// app/skills/page.js
"use client";
import { motion } from "framer-motion";
import { FaPython, FaCss3Alt, FaLinkedinIn, FaAws } from "react-icons/fa";
import { SiJavascript, SiTensorflow, SiPytorch, SiHuggingface, SiGooglecloud } from "react-icons/si";
import { FaGraduationCap } from "react-icons/fa";

const directions = [
  { x: -50, opacity: 0 },
  { x: 50, opacity: 0 },
  { y: -50, opacity: 0 },
  { y: 50, opacity: 0 },
];

export default function Skills() {
  const skillsProgramming = [
    { name: "Python", icon: <FaPython className="w-10 h-10 text-accent" /> },
    { name: "JavaScript", icon: <SiJavascript className="w-10 h-10 text-accent" /> },
    { name: "CSS", icon: <FaCss3Alt className="w-10 h-10 text-accent" /> },
    { name: "Flask", icon: <span className="w-10 h-10 text-accent">Flask</span> },
  ];

  const skillsAI = [
    { name: "TensorFlow", icon: <SiTensorflow className="w-10 h-10 text-accent" /> },
    { name: "PyTorch", icon: <SiPytorch className="w-10 h-10 text-accent" /> },
    { name: "Hugging Face", icon: <SiHuggingface className="w-10 h-10 text-accent" /> },
  ];

  const skillsCloud = [
    { name: "AWS", icon: <FaAws className="w-10 h-10 text-accent" /> },
    { name: "GCP", icon: <SiGooglecloud className="w-10 h-10 text-accent" /> },
  ];

  const certifications = [
    { name: "AWS Academy Cloud Practitioner", icon: <FaAws className="w-10 h-10 text-accent" /> },
    { name: "Azure Fundamentals", icon: <span className="w-10 h-10 text-accent">Azure</span> },
    { name: "Azure Developer", icon: <span className="w-10 h-10 text-accent">AzureDev</span> },
    { name: "EDX CS50", icon: <FaGraduationCap className="w-10 h-10 text-accent" /> },
  ];

  const renderItems = (items) =>
    items.map((item, index) => {
      const initial = directions[index % directions.length];
      return (
        <motion.div
          key={item.name}
          initial={initial}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className="flex items-center gap-2"
        >
          {item.icon}
          <span>{item.name}</span>
        </motion.div>
      );
    });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="px-4"
    >
      <h2 className="text-3xl font-bold mb-6 text-accent text-center">
        Skills & Technologies
      </h2>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Programming & Frameworks</h3>
        <div className="flex flex-wrap gap-4">{renderItems(skillsProgramming)}</div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Machine Learning & AI</h3>
        <div className="flex flex-wrap gap-4">{renderItems(skillsAI)}</div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Cloud & DevOps</h3>
        <div className="flex flex-wrap gap-4">{renderItems(skillsCloud)}</div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-2">Certifications</h3>
        <div className="flex flex-wrap gap-4">{renderItems(certifications)}</div>
      </div>
    </motion.div>
  );
}
