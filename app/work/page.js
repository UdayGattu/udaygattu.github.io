// app/work/page.js
"use client";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-primary">Work Experience</h2>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold">
          Machine Learning Engineer, Tata Consultancy Services
        </h3>
        <p className="text-lg text-gray-600">
          Hyderabad, India | June 2022 – August 2023
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>
            Deployed predictive models on Azure, boosting efficiency by 20% and
            reducing response time by 30%.
          </li>
          <li>
            Developed ML-powered applications using Python and Flask, achieving
            a 25% improvement in deployment efficiency.
          </li>
          <li>Optimized ML pipelines to reduce model training time by 40%.</li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold">
          AI-ML Engineer Intern, EduSkills Foundation
        </h3>
        <p className="text-lg text-gray-600">
          Hyderabad, India | January 2022 – May 2022
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>Enhanced model accuracy by 30% using Amazon SageMaker.</li>
          <li>
            Deployed scalable AI solutions on AWS, increasing operational
            efficiency by 25%.
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold">
          Artificial Intelligence Intern, Xane.ai
        </h3>
        <p className="text-lg text-gray-600">
          Hyderabad, India | June 2020 – September 2020
        </p>
        <ul className="list-disc list-inside mt-4 text-gray-700">
          <li>
            Developed TensorFlow models for mask detection achieving 95%
            accuracy.
          </li>
          <li>
            Improved performance by 20% through advanced image processing
            techniques.
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
