// components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <Link href="/">
            <span className="hover:text-secondary transition-colors duration-300 cursor-pointer">Home</span>
          </Link>
          <Link href="/work">
            <span className="hover:text-secondary transition-colors duration-300 cursor-pointer">Work Experience</span>
          </Link>
          <Link href="/skills">
            <span className="hover:text-secondary transition-colors duration-300 cursor-pointer">Skills</span>
          </Link>
          <Link href="/projects">
            <span className="hover:text-secondary transition-colors duration-300 cursor-pointer">Projects</span>
          </Link>
          <Link href="/contact">
            <span className="hover:text-secondary transition-colors duration-300 cursor-pointer">Contact</span>
          </Link>
        </div>
        <div>
          <a 
            href="https://www.linkedin.com/in/udayshankargattu/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-secondary transition-colors duration-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </nav>
  );
}
