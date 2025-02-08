// components/Education.js
import { motion } from "framer-motion";
import { studies } from "../../data";
import Image from "next/image";

export default function Education() {
  return (
    <section id="education" className="py-16">
      <h2 className="text-4xl font-bold text-center text-accent mb-8">Education</h2>
      <div className="flex flex-col gap-6 max-w-4xl mx-auto">
        {studies.map((study, index) => (
          <motion.div
            key={study.id}
            className="p-6 bg-gray-800 rounded-lg shadow-md flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Image
              src={study.logo}
              alt={study.institution}
              width={80}
              height={80}
              className="object-contain mr-6"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">{study.degree}</h3>
              <p className="text-gray-400">{study.institution}</p>
              <p className="text-gray-400">{study.period}</p>
              <p className="text-gray-300 mt-2">{study.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
