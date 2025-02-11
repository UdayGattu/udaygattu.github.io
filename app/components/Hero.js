// components/Hero.js
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex items-center bg-dark">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Profile Image on the left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="w-48 h-48 rounded-full overflow-hidden shadow-xl mb-6 md:mb-0 md:mr-8"
        >
          <Image
            src="/images/page/UdayGattu.jpeg"  // Replace with your actual profile image URL later
            alt="Profile Picture"
            width={192}
            height={192}
            className="object-cover"
          />
        </motion.div>
        {/* Text Section on the right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <motion.h1 className="text-6xl md:text-7xl font-extrabold text-accent">
            <Typewriter
              options={{
                strings: ["Hi, I'm Uday Shankar Gattu"],
                autoStart: true,
                loop: true,
                delay: 75,
                pauseFor: 10,
            }}
            />
          </motion.h1>
          <p className="mt-4 text-xl">
            Machine Learning Engineer | AI Researcher | Software Developer
          </p>
          <p className="mt-2 text-lg text-gray-300 max-w-xl">
          I am an AI & ML Engineer specializing in Generative AI, LLMs, NLP, and Cloud Computing. Currently pursuing my Master’s in Software Engineering Systems at Northeastern University, I also serve as a Graduate Teaching Assistant for Generative AI, NLP, and Prompt Engineering.

With experience at TCS and a strong foundation in LLM Fine-Tuning, Retrieval-Augmented Generation (RAG), Stable Diffusion, and MLOps, I have built AI-powered solutions in eCommerce, Text-to-Video, and Cloud Automation. My expertise spans Python (PyTorch, TensorFlow), FastAPI, LangChain, Hugging Face, and CI/CD pipelines, enabling scalable AI applications on AWS, GCP, and Azure.

Passionate about AI-driven automation, I thrive on solving real-world challenges with cutting-edge technologies. 
          </p>
          <div className="mt-4 flex justify-center md:justify-start gap-4">
            <ScrollLink to="contact" smooth={true} duration={500} offset={-80} className="px-6 py-3 bg-accent text-secondary rounded hover:bg-red-700 transition-colors cursor-pointer">
              Get in Touch
            </ScrollLink>
            <ScrollLink to="cv" smooth={true} duration={500} offset={-80} className="px-6 py-3 bg-accent text-secondary rounded hover:bg-red-700 transition-colors cursor-pointer">
              View CV
            </ScrollLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
