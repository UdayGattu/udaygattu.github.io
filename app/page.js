// app/page.js
"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="text-center">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      >
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
        >
          Hi, I'm Uday Shankar Gattu
        </motion.h1>
      </motion.div>

      {/* Introduction & Profile Section */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg"
        >
          <img
            src="https://via.placeholder.com/150"
            alt="Profile Picture"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-left"
        >
          <h2 className="text-2xl font-semibold text-primary">
            Aspiring Machine Learning Engineer & AI Researcher
          </h2>
          <p className="mt-4 text-gray-700">
            I specialize in building and deploying machine learning models,
            leveraging cutting-edge AI research to solve real-world problems.
            Passionate about data, innovation, and technology.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="mt-4 inline-block px-6 py-3 bg-accent text-white rounded hover:bg-green-600 transition-colors duration-300"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Dynamic Graphics Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <img
            src="https://via.placeholder.com/300x200"
            alt="Graphic 1"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="mt-4 text-xl font-bold text-primary">
            Innovative AI Solutions
          </h3>
          <p className="mt-2 text-gray-600">
            Utilizing state-of-the-art algorithms to drive next-gen AI
            innovations.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <img
            src="https://via.placeholder.com/300x200"
            alt="Graphic 2"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="mt-4 text-xl font-bold text-primary">
            Data-Driven Insights
          </h3>
          <p className="mt-2 text-gray-600">
            Harnessing data to transform business strategies and outcomes.
          </p>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <img
            src="https://via.placeholder.com/300x200"
            alt="Graphic 3"
            className="w-full h-40 object-cover rounded-md"
          />
          <h3 className="mt-4 text-xl font-bold text-primary">
            Cloud & Scalability
          </h3>
          <p className="mt-2 text-gray-600">
            Deploying robust and scalable solutions on the cloud.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
