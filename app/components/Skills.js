"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../../data";
import { FaReact, FaPython, FaAws, FaGitAlt } from "react-icons/fa";
import {
  SiMysql,
  SiDjango,
  SiCplusplus,
  SiPytorch,
  SiTensorflow,
  SiScikitlearn,
  SiGooglecloud,
  SiFlask,
  SiJava,
} from "react-icons/si";

// Fallback mapping for React icons
const fallbackMapping = {
  "Python": FaPython,
  "MySQL": SiMysql,
  "Fast API": SiFlask,
  "Django": SiDjango,
  "C++": SiCplusplus,
  "Java": SiJava, // Using SiJava instead of FaJava for better support
  "PyTorch": SiPytorch,
  "TensorFlow": SiTensorflow,
  "Scikit-learn": SiScikitlearn,
  "AWS": FaAws,
  "GCP": SiGooglecloud,
  "Git": FaGitAlt,
};

// Returns a fallback icon based on the skill name or a default icon
const getFallbackIcon = (name) => fallbackMapping[name] || FaReact;

function SkillItem({ skill, delay }) {
  // Convert string to object if needed
  const skillObj = typeof skill === "string" ? { name: skill } : skill;
  const { name, icon: uploadedIcon } = skillObj;
  const [imgError, setImgError] = useState(false);
  const FallbackIcon = getFallbackIcon(name);

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ scale: 1.15, rotate: 3 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="flex items-center gap-2 p-3 rounded-lg shadow-md hover:shadow-xl transition-all"
    >
      {uploadedIcon && !imgError ? (
        <img
          src={uploadedIcon}
          alt={name}
          className="w-10 h-10 object-contain"
          onError={() => setImgError(true)}
        />
      ) : (
        <FallbackIcon className="w-10 h-10 text-accent" />
      )}
      <span className="text-lg">{name}</span>
    </motion.div>
  );
}

export default function SkillsPage() {
  // Combine all skills from each category into one array
  const allSkills = Object.values(skills).flat();

  return (
    <section id="skills" className="py-12 bg-dark">
      <h2 className="text-3xl font-bold mb-6 text-center">Skills & Technologies</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {allSkills.map((skill, index) => (
          <SkillItem
            key={typeof skill === "string" ? skill : skill.name}
            skill={skill}
            delay={index}
          />
        ))}
      </div>
    </section>
  );
}
