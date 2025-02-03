// app/skills/page.js
"use client";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-primary">Skills & Technologies</h2>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Programming & Frameworks</h3>
        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center space-x-2">
            <img src="https://via.placeholder.com/40?text=Py" alt="Python" className="w-10 h-10" />
            <span>Python</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://via.placeholder.com/40?text=JS" alt="JavaScript" className="w-10 h-10" />
            <span>JavaScript</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://via.placeholder.com/40?text=CSS" alt="CSS" className="w-10 h-10" />
            <span>CSS</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://via.placeholder.com/40?text=Flask" alt="Flask" className="w-10 h-10" />
            <span>Flask</span>
          </div>
          {/* Add additional technology icons as needed */}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Machine Learning & AI</h3>
        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center space-x-2">
            <img src="https://via.placeholder.com/40?text=TF" alt="TensorFlow" className="w-10 h-10" />
            <span>TensorFlow</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://via.placeholder.com/40?text=PT" alt="PyTorch" className="w-10 h-10" />
            <span>PyTorch</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://via.placeholder.com/40?text=HF" alt="Hugging Face" className="w-10 h-10" />
            <span>Hugging Face</span>
          </div>
          {/* Add additional technology icons as needed */}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Cloud & DevOps</h3>
        <div className="flex flex-wrap gap-4 mt-2">
          <div className="flex items-center space-x-2">
            <img src="https://via.placeholder.com/40?text=AWS" alt="AWS" className="w-10 h-10" />
            <span>AWS</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src="https://via.placeholder.com/40?text=GCP" alt="GCP" className="w-10 h-10" />
            <span>GCP</span>
          </div>
          {/* Add additional technology icons as needed */}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-2xl font-semibold">Certifications</h3>
        <p className="mt-2 text-gray-700">
          AWS Academy Cloud Practitioner, Azure Fundamentals, Azure Developer, EDX CS50
        </p>
      </div>
    </motion.div>
  );
}
