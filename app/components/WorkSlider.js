"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { workExperiences } from "../../data";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Helper function to format descriptions into bullet points
const formatDescription = (description) => {
  if (Array.isArray(description)) {
    return description;
  }
  return description
    ? description.toString().split(". ").map((sentence) => sentence.trim()).filter((sentence) => sentence.length > 0)
    : [];
};

// **Group experiences by company** – Ensures multiple experiences in the same company are grouped correctly
function groupByCompany(experiences) {
  const groups = {};
  experiences.forEach((exp) => {
    if (!groups[exp.company]) {
      groups[exp.company] = [];
    }
    groups[exp.company].push(exp);
  });
  return Object.entries(groups).map(([company, exps]) => ({
    company,
    experiences: exps.reverse(), // Most recent role appears first
  }));
}

export default function WorkExperience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const groupedExperiences = groupByCompany(workExperiences);
  const totalSlides = groupedExperiences.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  return (
    <section id="work" className="py-12 bg-dark relative">
      <h2 className="text-3xl font-bold text-center text-accent mb-8">
        Work Experience
      </h2>

      <div className="relative w-full flex justify-center items-center overflow-hidden">
        {/* Left Scroll Button */}
        <button
          onClick={handlePrev}
          className="absolute left-4 text-white bg-accent p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Work Experience Card */}
        <div className="w-full max-w-5xl overflow-hidden flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={groupedExperiences[currentIndex].company}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="w-full bg-secondary rounded-lg shadow-lg flex items-center p-6"
            >
              {/* Left Side: Company Logo */}
              <div className="w-[20%] flex items-center justify-center">
                <Image
                  src={groupedExperiences[currentIndex].experiences[0].logo || "https://via.placeholder.com/150"}
                  alt={`${groupedExperiences[currentIndex].company} Logo`}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>

              {/* Right Side: Work Experience Details */}
              <div className="w-[75%] pl-6">
                <h3 className="text-3xl font-bold text-accent mb-2">
                  {groupedExperiences[currentIndex].company}
                </h3>

                {/* If multiple roles in the same company, show vertically */}
                {groupedExperiences[currentIndex].experiences.length > 1 ? (
                  <div className="space-y-3">
                    {groupedExperiences[currentIndex].experiences.map((exp, i) => (
                      <motion.div
                        key={i}
                        className="border-b border-gray-600 pb-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <p className="text-xl text-gray-300 font-semibold">
                          {exp.role}
                        </p>
                        <p className="text-gray-400">
                          {exp.period} | {exp.location}
                        </p>
                        <ul className="list-disc list-inside mt-1 text-gray-300 space-y-1">
                          {formatDescription(exp.description).map((desc, j) => (
                            <li key={j}>{desc}</li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <motion.div
                    className="text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {groupedExperiences[currentIndex].experiences.map((exp, i) => (
                      <div key={i}>
                        <p className="text-xl text-gray-300 font-semibold">
                          {exp.role}
                        </p>
                        <p className="text-gray-400">
                          {exp.period} | {exp.location}
                        </p>
                        <ul className="list-disc list-inside mt-1 text-gray-300 space-y-1">
                          {formatDescription(exp.description).map((desc, j) => (
                            <li key={j}>{desc}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={handleNext}
          className="absolute right-4 text-white bg-accent p-3 rounded-full shadow-md hover:scale-110 transition"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
