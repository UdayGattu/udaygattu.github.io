import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('Home');
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-lg parallax">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo/Avatar Placeholder */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-2xl bg-gray-100 flex items-center justify-center shadow border border-gray-200">
            <span className="text-xl font-bold text-gray-900">🤖</span>
          </div>
          <span className="font-display text-lg font-bold text-gray-900 tracking-wide">Uday Gattu</span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className={`relative px-2 py-1 font-semibold text-sm text-gray-900 cursor-pointer select-none transition-colors hover:text-gray-700 ${active === link.label ? 'text-gray-900' : ''}`}
              onClick={() => {
                setActive(link.label);
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {link.label}
              <AnimatePresence>
                {active === link.label && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-gray-900"
                    initial={{ opacity: 0, y: 2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 2 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            className="w-9 h-9 flex items-center justify-center focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <span className="block w-6 h-0.5 bg-gray-900 mb-1 rounded transition-all" style={{ transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }}></span>
            <span className={`block w-6 h-0.5 bg-gray-900 mb-1 rounded transition-all ${open ? 'opacity-0' : ''}`}></span>
            <span className="block w-6 h-0.5 bg-gray-900 rounded transition-all" style={{ transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }}></span>
          </button>
        </div>
      </div>
      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-white border-t border-gray-200 shadow-lg flex flex-col items-center gap-2 py-4"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {navLinks.map((link) => (
              <div
                key={link.label}
                className={`relative px-2 py-2 font-semibold text-sm text-gray-900 cursor-pointer select-none transition-colors hover:text-gray-700 ${active === link.label ? 'text-gray-900' : ''}`}
                onClick={() => {
                  setActive(link.label);
                  setOpen(false);
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
                <AnimatePresence>
                  {active === link.label && (
                    <motion.span
                      layoutId="underline-mobile"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 rounded bg-gray-900"
                      initial={{ opacity: 0, y: 2 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 2 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 