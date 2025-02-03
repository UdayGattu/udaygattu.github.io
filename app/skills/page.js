// app/skills/page.js
"use client";
import { motion } from "framer-motion";

const directions = [
  { x: -50, opacity: 0 },
  { x: 50, opacity: 0 },
  { y: -50, opacity: 0 },
  { y: 50, opacity: 0 },
];

export default function Skills() {
  const skillsProgramming = [
    { name: "Python", img: "https://via.placeholder.com/40?text=Py" },
    { name: "JavaScript", img: "https://via.placeholder.com/40?text=JS" },
    { name: "CSS", img: "https://via.placeholder.com/40?text=CSS" },
    { name: "Flask", img: "https://via.placeholder.com/40?text=Flask" },
    // Add more as needed...
  ];

  const skillsAI = [
    { name: "TensorFlow", img: "https://via.placeholder.com/40?text=TF" },
    { name: "PyTorch", img: "https://via.placeholder.com/40?text=PT" },
    { name: "Hugging Face", img: "https://via.placeholder.com/40?text=HF" },
    // Add more as needed...
  ];

  const skillsCloud = [
    { name: "AWS", img: "https://via.placeholder.com/40?text=AWS" },
    { name: "GCP", img: "https://via.placeholder.com/40?text=GCP" },
    // Add more as needed...
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => {
      const initial = directions[index % directions.length];
      return (
        <motion.div
          key={skill.name}
          initial={initial}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          className="flex items-center gap-2"
        >
          <img src={skill.img} alt={skill.name} className="w-10 h-10" />
          <span>{skill.name}</span>
        </motion.div>
      );
    });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-accent">Skills & Technologies</h2>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Programming & Frameworks</h3>
        <div className="flex flex-wrap gap-4 mt-2">
          {renderSkills(skillsProgramming)}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Machine Learning & AI</h3>
        <div className="flex flex-wrap gap-4 mt-2">
          {renderSkills(skillsAI)}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Cloud & DevOps</h3>
        <div className="flex flex-wrap gap-4 mt-2">
          {renderSkills(skillsCloud)}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Certifications</h3>
        <p className="mt-2 text-gray-300">
          AWS Academy Cloud Practitioner, Azure Fundamentals, Azure Developer, EDX CS50
        </p>
      </div>
    </motion.div>
  );
}
