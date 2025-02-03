// app/contact/page.js
"use client";
import { motion } from "framer-motion";

const contactItems = [
  {
    label: "Email",
    value: "udaygattu9949@gmail.com",
    link: "mailto:udaygattu9949@gmail.com",
  },
  {
    label: "Phone",
    value: "(617) 971-7892",
    link: "",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/udayshankargattu/",
    link: "https://www.linkedin.com/in/udayshankargattu/",
  },
  {
    label: "GitHub",
    value: "github.com/UdayGattu",
    link: "https://github.com/UdayGattu",
  },
  {
    label: "Google Scholar",
    value: "scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID",
    link: "https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID",
  },
];

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
      className="p-6"
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
        {contactItems.map((item, index) => {
          const initial = directions[index % directions.length];
          return (
            <motion.div
              key={item.label}
              initial={initial}
              animate={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              className="flex items-center gap-2 text-gray-300"
            >
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
