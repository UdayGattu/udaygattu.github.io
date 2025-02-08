"use client";
import Hero from "./components/Hero";
import WorkExperience from "./components/Work";
import Education from "./components/Education";
import SkillsPage from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <WorkExperience />
      <Education />
      <SkillsPage />
      <Projects />
      <Resume />
      <Contact />
    </div>
  );
}
