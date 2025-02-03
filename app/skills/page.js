// // app/skills/page.js
// "use client";
// import { motion } from "framer-motion";
// import { skills } from "../../data";
// import { FaReact } from "react-icons/fa"; // fallback icon

// const directions = [
//   { x: -50, opacity: 0 },
//   { x: 50, opacity: 0 },
//   { y: -50, opacity: 0 },
//   { y: 50, opacity: 0 },
// ];

// export default function Skills() {
//   // Helper function to render items from a skills category.
//   const renderItems = (items) =>
//     items.map((item, index) => {
//       const initial = directions[index % directions.length];
//       return (
//         <motion.div
//           key={item.name}
//           initial={initial}
//           animate={{ x: 0, y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: index * 0.2 }}
//           className="flex items-center gap-2"
//         >
//           {item.icon ? (
//             // If an icon URL is provided, use an img element
//             <img src={item.icon} alt={item.name} className="w-10 h-10" />
//           ) : (
//             // Otherwise, fallback to the React Icon (FaReact in this example)
//             <FaReact className="w-10 h-10 text-accent" />
//           )}
//           <span>{item.name}</span>
//         </motion.div>
//       );
//     });

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.95 }}
//       animate={{ opacity: 1, scale: 1 }}
//       transition={{ duration: 1 }}
//       className="px-4"
//     >
//       <h2 className="text-3xl font-bold mb-6 text-accent text-center">
//         Skills & Technologies
//       </h2>

//       <div className="mb-6">
//         <h3 className="text-2xl font-semibold mb-2">Programming & Frameworks</h3>
//         <div className="flex flex-wrap gap-4">{renderItems(skills.programming)}</div>
//       </div>

//       <div className="mb-6">
//         <h3 className="text-2xl font-semibold mb-2">Machine Learning & AI</h3>
//         <div className="flex flex-wrap gap-4">{renderItems(skills.ai)}</div>
//       </div>

//       <div className="mb-6">
//         <h3 className="text-2xl font-semibold mb-2">Cloud & DevOps</h3>
//         <div className="flex flex-wrap gap-4">{renderItems(skills.cloud)}</div>
//       </div>

//       <div className="mb-6">
//         <h3 className="text-2xl font-semibold mb-2">Certifications</h3>
//         <div className="flex flex-wrap gap-4">{renderItems(skills.certifications)}</div>
//       </div>
//     </motion.div>
//   );
// }
// app/skills/page.js
// // app/skills/page.js
// app/skills/page.js
// app/skills/page.js
// app/skills/page.js
// app/skills/page.js
"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "../../data";

// Import React Icons (adjust these imports as needed)
import { FaPython, FaReact, FaGitAlt, FaGraduationCap, FaAws } from "react-icons/fa";
import { SiMysql, SiDjango, SiCplusplus, SiPytorch, SiTensorflow, SiScikitlearn, SiHuggingface, SiGooglecloud, SiFlask } from "react-icons/si";

const fallbackMapping = {
  // Programming Skills
  "Python": FaPython,
  "MySQL": SiMysql,
  "Fast API": SiFlask, // using SiFlask as a placeholder for Fast API
  "Django": SiDjango,
  "C++": SiCplusplus,
  "Java": FaReact, // fallback for Java
  // AI Concepts
  "PyTorch": SiPytorch,
  "TensorFlow": SiTensorflow,
  "Scikit-learn": SiScikitlearn,
  "LLMs": FaReact,
  "Fine-tuning": FaReact,
  "Transformers": FaReact,
  "BERT": FaReact,
  "GPT": FaReact,
  "GANs": FaReact,
  "Reinforcement Learning": FaReact,
  "Encodings": FaReact,
  "RAG": FaReact,
  "LLM Agents": FaReact,
  "Prompt Engineering": FaReact,
  "LangChain": FaReact,
  // Machine Learning Frameworks
  "CNN": FaReact,
  "LSTM": FaReact,
  "Hugging Face": SiHuggingface,
  "Stable Diffusion": FaReact,
  "Deep Learning": FaReact,
  "Data Science": FaReact,
  "OpenCV": FaReact,
  "Flask": SiFlask,
  // Cloud Computing Skills
  "AWS": FaAws,
  "GCP": SiGooglecloud,
  "Vertex AI": FaReact,
  "Azure": FaReact,
  "Amazon Sage Maker": FaReact,
  "Git": FaGitAlt,
  "Azure DevOps": FaReact,
  // Certifications
  "AWS Academy Cloud Practitioner": FaAws,
  "Microsoft Azure Fundamentals": FaReact,
  "Microsoft Azure Developer": FaReact,
  "EDX CS50": FaGraduationCap
};

// Helper function to get the fallback icon component
const getFallbackIcon = (name) => fallbackMapping[name] || FaReact;

// SkillItem component: Checks for an uploaded icon image first; if not available or if image fails to load, uses fallback React Icon.
function SkillItem({ skill, delay }) {
  // If the skill is provided as a string, convert it to an object
  const skillObj = typeof skill === "string" ? { name: skill } : skill;
  const { name, icon: uploadedIcon } = skillObj;
  
  // Local state to track if the image has an error
  const [imgError, setImgError] = useState(false);
  
  // Determine if we should use the uploaded image:
  // Use image if an icon URL is provided and no error occurred.
  const useUploadedImage = uploadedIcon && !imgError;
  
  // Fallback icon component from our mapping
  const FallbackIcon = getFallbackIcon(name);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.2 }}
      className="flex items-center gap-3 p-3 rounded-lg shadow-md border border-gray-200"
    >
      {useUploadedImage ? (
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

// Helper function to render a list of skills
function renderSkillItems(items) {
  return items.map((skill, index) => (
    <SkillItem key={typeof skill === "string" ? skill : skill.name} skill={skill} delay={index} />
  ));
}

export default function SkillsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="px-4"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Skills & Technologies</h2>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">Programming Skills</h3>
        <div className="flex flex-wrap gap-4">
          {renderSkillItems(skills.programming)}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">AI Concepts</h3>
        <div className="flex flex-wrap gap-4">
          {renderSkillItems(skills.ai)}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">Machine Learning Frameworks</h3>
        <div className="flex flex-wrap gap-4">
          {renderSkillItems(skills.mlFrameworks)}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">Cloud Computing Skills</h3>
        <div className="flex flex-wrap gap-4">
          {renderSkillItems(skills.cloud)}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-3">Certifications</h3>
        <div className="flex flex-wrap gap-4">
          {renderSkillItems(skills.certifications)}
        </div>
      </div>
    </motion.div>
  );
}