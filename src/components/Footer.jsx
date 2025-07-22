import { contact } from '../data/contact';

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-auto flex flex-col md:flex-row items-center justify-between bg-swissbg border-t border-swissline text-swissfg text-base px-4">
      <div className="mb-2 md:mb-0 font-semibold">&copy; {new Date().getFullYear()} Uday Shankar Gattu</div>
      <div className="flex gap-6">
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold transition">LinkedIn</a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent font-semibold transition">GitHub</a>
      </div>
    </footer>
  );
} 