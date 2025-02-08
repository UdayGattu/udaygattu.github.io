"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { workExperiences } from "../../data";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import WorkCard from "./WorkCard";

export default function WorkExperience() {
  // State to track the currently active work experience (for description view)
  const [activeWork, setActiveWork] = useState(null);

  const handleClose = () => setActiveWork(null);

  return (
    <section id="work" className="py-12 bg-dark">
      <h2 className="text-3xl font-bold text-center text-accent mb-8">
        Work Experience
      </h2>
      <div className="max-w-4xl mx-auto px-4">
        <AnimatePresence mode="wait">
          {activeWork ? (
            // Description Card View – full width, fixed height of 250px
            <motion.div
              key="description"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3, rotate: 90, transition: { duration: 0.5 } }}
              transition={{ duration: 0.5 }}
              className="relative bg-secondary rounded-lg shadow-md overflow-hidden w-full"
              style={{ height: "250px" }}
              // Close description card when mouse leaves its area
              onMouseLeave={handleClose}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-white hover:text-red-400 transition"
              >
                <FaTimes size={20} />
              </button>
              <div className="flex h-full">
                {/* Left Side: Company Logo */}
                <div className="w-1/4 flex items-center justify-center p-4">
                  <Image
                    src={activeWork.logo || "https://via.placeholder.com/150"}
                    alt={`${activeWork.company} Logo`}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                {/* Right Side: Work Details */}
                <div className="w-3/4 p-4 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold text-accent">
                    {activeWork.company}
                  </h3>
                  <p className="text-lg text-gray-300">{activeWork.role}</p>
                  <p className="text-gray-400">{activeWork.period}</p>
                  <p className="text-gray-400">{activeWork.location}</p>
                  <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                    {activeWork.description.map((desc, i) => (
                      <li key={i} className="whitespace-normal">
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ) : (
            // Grid View: All work experience cards as square boxes
            <motion.div
              key="grid"
              className="flex flex-wrap justify-center items-center gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {workExperiences.map((work, index) => (
                <WorkCard
                  key={work.id}
                  work={work}
                  index={index}
                  onActivate={setActiveWork}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
