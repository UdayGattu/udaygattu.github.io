// app/contact/page.js
"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-primary">Contact Me</h2>
      <p className="mb-4 text-gray-700">
        I'm always open to discussing opportunities and collaborations. Feel free to reach out!
      </p>
      <ul className="text-gray-700">
        <li className="mb-2">
          <strong>Email:</strong>{" "}
          <a href="mailto:udaygattu9949@gmail.com" className="underline">
            udaygattu9949@gmail.com
          </a>
        </li>
        <li className="mb-2">
          <strong>Phone:</strong> (617) 971-7892
        </li>
        <li className="mb-2">
          <strong>LinkedIn:</strong>{" "}
          <a
            href="https://www.linkedin.com/in/udayshankargattu/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            linkedin.com/in/udayshankargattu/
          </a>
        </li>
        <li className="mb-2">
          <strong>GitHub:</strong>{" "}
          <a
            href="https://github.com/UdayGattu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            github.com/UdayGattu
          </a>
        </li>
        <li className="mb-2">
          <strong>Google Scholar:</strong>{" "}
          <a
            href="https://scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            scholar.google.com/citations?user=YOUR_GOOGLE_SCHOLAR_ID
          </a>
        </li>
      </ul>
    </motion.div>
  );
}
