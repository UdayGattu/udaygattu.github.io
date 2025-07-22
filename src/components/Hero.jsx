import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { hero } from '../data/hero';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function AnimatedBlobs({ activeBg }) {
  // Default: subtle gray blobs
  if (!activeBg) {
    return (
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-br from-gray-200 via-gray-100 to-white opacity-60 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-tr from-gray-100 via-white to-gray-300 opacity-50 blur-2xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>
    );
  }
  // LinkedIn: blurred feed + animated overlay + icon
  if (activeBg === 'linkedin') {
    return (
      <motion.div
        className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.img
          src="/images/linkedin-feed.jpg"
          alt="LinkedIn Feed Placeholder"
          className="absolute inset-0 w-full h-full object-cover opacity-75 blur-sm"
          style={{ pointerEvents: 'none', background: 'white', filter: 'blur(4px)' }}
          initial={{ scale: 1.01, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
        />
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ mixBlendMode: 'screen', pointerEvents: 'none' }}
          animate={{
            background: [
              'linear-gradient(120deg, rgba(0,119,181,0.18) 0%, rgba(255,255,255,0.05) 100%)',
              'linear-gradient(120deg, rgba(0,119,181,0.28) 30%, rgba(255,255,255,0.10) 100%)',
              'linear-gradient(120deg, rgba(0,119,181,0.18) 0%, rgba(255,255,255,0.05) 100%)',
            ],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0.7, scale: 0.9 }}
          animate={{ opacity: [0.7, 1, 0.7], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaLinkedin size={90} className="text-[#0077b5] drop-shadow-lg" style={{ filter: 'blur(1.5px) brightness(1.2)' }} />
        </motion.div>
      </motion.div>
    );
  }
  // GitHub: dark gradient + floating icon + animated code lines
  if (activeBg === 'github') {
    return (
      <motion.div
        className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-900/80 via-gray-700/60 to-white/20"
          style={{ pointerEvents: 'none', filter: 'blur(8px)', opacity: 0.7 }}
        />
        {/* Animated code lines */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="w-[60vw] max-w-xl h-3 rounded bg-gray-800/80 mb-2"
              initial={{ opacity: 0.2, x: -30 * (i % 2 === 0 ? 1 : -1) }}
              animate={{ opacity: [0.2, 0.7, 0.2], x: [0, 10 * (i % 2 === 0 ? 1 : -1), 0] }}
              transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.1 }}
            />
          ))}
        </div>
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0.7, scale: 0.9 }}
          animate={{ opacity: [0.7, 1, 0.7], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FaGithub size={90} className="text-gray-900 drop-shadow-lg" style={{ filter: 'blur(1.5px) brightness(1.2)' }} />
        </motion.div>
      </motion.div>
    );
  }
  // Resume: blurred image preview at 60% opacity
  if (activeBg === 'resume') {
    return (
      <motion.div
        className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.img
          src="/images/resume-preview.jpg"
          alt="Resume Preview"
          className="absolute inset-0 w-full h-full object-cover opacity-60 blur-sm"
          style={{ pointerEvents: 'none', background: 'white', filter: 'blur(4px)' }}
          initial={{ scale: 1.01, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
        />
      </motion.div>
    );
  }
  // Hugging Face: blurred background at 55% opacity
  if (activeBg === 'huggingface') {
    return (
      <motion.div
        className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        <motion.img
          src="/images/huggingface-feed.jpg"
          alt="Hugging Face Feed"
          className="absolute inset-0 w-full h-full object-cover opacity-55 blur-sm"
          style={{ pointerEvents: 'none', background: 'white', filter: 'blur(4px)' }}
          initial={{ scale: 1.01, y: 10 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.5, type: 'spring' }}
        />
      </motion.div>
    );
  }
  return null;
}

export default function Hero() {
  const [activeBg, setActiveBg] = useState(null);
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-white" id="hero">
      <AnimatePresence mode="wait">
        <AnimatedBlobs key={activeBg} activeBg={activeBg} />
      </AnimatePresence>
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <h1 className="heading">{hero.name}</h1>
        <p className="subheading mb-8">{hero.tagline}</p>
        <p className="text-lg md:text-2xl text-gray-700 mb-10 font-medium">{hero.intro}</p>
        <div className="flex flex-wrap gap-4 justify-center mt-6">
          {hero.buttons.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              className="btn-apple"
              onMouseEnter={() => setActiveBg(
                btn.label.toLowerCase().includes('linkedin') ? 'linkedin' :
                btn.label.toLowerCase().includes('github') ? 'github' :
                btn.label.toLowerCase().includes('resume') ? 'resume' :
                btn.label.toLowerCase().includes('hugging') ? 'huggingface' : null
              )}
              onMouseLeave={() => setActiveBg(null)}
              {...(btn.type === 'download' ? { download: true } : { target: '_blank', rel: 'noopener noreferrer' })}
            >
              {btn.label}
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
} 