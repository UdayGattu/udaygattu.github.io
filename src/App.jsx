import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CurrentlyBuilding from './components/CurrentlyBuilding';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-glass flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <CurrentlyBuilding />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App; 