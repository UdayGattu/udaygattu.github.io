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

      {/* Work Item 1: TCS */}
      <div className="mb-8 flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
        <img
          src="https://via.placeholder.com/100x100?text=TCS"
          alt="TCS Logo"
          className="w-24 h-24 object-contain mr-4"
        />
        <div>
          <h3 className="text-2xl font-semibold">Machine Learning Engineer, TCS</h3>
          <p className="text-lg text-gray-600">Hyderabad, India | Jun 2022 – Aug 2023</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>
              Deployed predictive models on Azure, boosting efficiency by 20% and reducing response time by 30%.
            </li>
            <li>
              Developed ML-powered applications using Python and Flask, achieving a 25% improvement in deployment efficiency.
            </li>
            <li>
              Optimized ML pipelines to reduce model training time by 40%.
            </li>
          </ul>
        </div>
      </div>

      {/* Work Item 2: EduSkills */}
      <div className="mb-8 flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
        <img
          src="https://via.placeholder.com/100x100?text=EduSkills"
          alt="EduSkills Logo"
          className="w-24 h-24 object-contain mr-4"
        />
        <div>
          <h3 className="text-2xl font-semibold">AI-ML Engineer Intern, EduSkills Foundation</h3>
          <p className="text-lg text-gray-600">Hyderabad, India | Jan 2022 – May 2022</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Enhanced model accuracy by 30% using Amazon SageMaker.</li>
            <li>
              Deployed scalable AI solutions on AWS, increasing operational efficiency by 25%.
            </li>
          </ul>
        </div>
      </div>

      {/* Work Item 3: Xane.ai */}
      <div className="mb-8 flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg">
        <img
          src="https://via.placeholder.com/100x100?text=Xane.ai"
          alt="Xane.ai Logo"
          className="w-24 h-24 object-contain mr-4"
        />
        <div>
          <h3 className="text-2xl font-semibold">Artificial Intelligence Intern, Xane.ai</h3>
          <p className="text-lg text-gray-600">Hyderabad, India | Jun 2020 – Sep 2020</p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>
              Developed TensorFlow models for mask detection achieving 95% accuracy.
            </li>
            <li>
              Improved performance by 20% through advanced image processing techniques.
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
