"use client";
import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
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
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const groupedExperiences = groupByCompany(workExperiences);
  const totalSlides = groupedExperiences.length;

  useEffect(() => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.clientWidth * currentSlide;
      sliderRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
    }
  }, [currentSlide]);

  // Scroll Left (Only Moves One Step at a Time)
  const handleLeft = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  // Scroll Right (Only Moves One Step at a Time)
  const handleRight = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  };

  return (
    <section id="work" className="py-12 bg-dark relative">
      <h2 className="text-3xl font-bold text-center text-accent mb-8">
        Work Experience
      </h2>
      <div className="relative max-w-[98vw] mx-auto px-6">
        {/* Left Scroll Button (Outside Work Cards) */}
        <button
          onClick={handleLeft}
          disabled={currentSlide === 0}
          className="absolute top-1/2 -translate-y-1/2 left-[-50px] z-10 p-3 bg-secondary rounded-full text-white hover:bg-accent transition disabled:opacity-50"
        >
          <FaArrowLeft size={25} />
        </button>
        
        {/* Right Scroll Button (Outside Work Cards) */}
        <button
          onClick={handleRight}
          disabled={currentSlide === totalSlides - 1}
          className="absolute top-1/2 -translate-y-1/2 right-[-50px] z-10 p-3 bg-secondary rounded-full text-white hover:bg-accent transition disabled:opacity-50"
        >
          <FaArrowRight size={25} />
        </button>

        {/* Slider Wrapper */}
        <div ref={sliderRef} className="overflow-hidden w-full">
          <motion.div
            className="flex"
            animate={{ x: `-${currentSlide * 100}%` }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            {groupedExperiences.map((group, index) => (
              <motion.div
                key={index}
                className="min-w-full bg-secondary rounded-lg p-6 shadow-md flex items-center justify-between"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ height: "550px", width: "95vw" }}
              >
                {/* Left Side: Company Logo */}
                <div className="w-[20%] flex items-center justify-center">
                  <Image
                    src={group.experiences[0].logo || "https://via.placeholder.com/150"}
                    alt={`${group.company} Logo`}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </div>

                {/* Right Side: Work Experience Details */}
                <div className="w-[75%]">
                  <h3 className="text-3xl font-bold text-accent mb-2">
                    {group.company}
                  </h3>
                  {group.experiences.length > 1 ? (
                    <div className="space-y-3">
                      {group.experiences.map((exp, i) => (
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
                      {group.experiences.map((exp, i) => (
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
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
