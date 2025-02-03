// app/contact/page.js
"use client";
import { motion } from "framer-motion";
import { contactData } from "../../data";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaGraduationCap } from "react-icons/fa";

const directions = [
  { x: -50, opacity: 0 },
  { x: 50, opacity: 0 },
  { y: -50, opacity: 0 },
  { y: 50, opacity: 0 },
];

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="p-6 px-4"
    >
      <h2 className="text-3xl font-bold mb-6 text-accent text-center">
        Contact Me
      </h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mb-4 text-gray-300 text-center"
      >
        I'm always open to discussing opportunities and collaborations. Feel
        free to reach out!
      </motion.p>
      <div className="flex flex-col items-center gap-4">
        {contactData.map((item, index) => {
          const initial = directions[index % directions.length];
          // Map label to an icon (React Icons)
          let IconComponent;
          switch (item.label) {
            case "Email":
              IconComponent = FaEnvelope;
              break;
            case "Phone":
              IconComponent = FaPhone;
              break;
            case "LinkedIn":
              IconComponent = FaLinkedin;
              break;
            case "GitHub":
              IconComponent = FaGithub;
              break;
            case "Google Scholar":
              IconComponent = FaGraduationCap;
              break;
            default:
              IconComponent = FaEnvelope;
          }
          return (
            <motion.div
              key={item.label}
              initial={initial}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="flex items-center gap-2 text-gray-300"
            >
              <IconComponent className="w-5 h-5" />
              <strong>{item.label}:</strong>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-accent"
                >
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
