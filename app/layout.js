// app/layout.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';
console.log("Navbar:", Navbar); // Should log a function/component definition

export const metadata = {
  title: 'Uday Shankar Gattu Portfolio',
  description: 'Portfolio of Uday Shankar Gattu – Aspiring Machine Learning Engineer & AI Researcher',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Navbar />
        <main className="flex-grow container mx-auto p-6">
          {children}
        </main>
        <footer className="bg-gray-800 text-white text-center py-4">
          © {new Date().getFullYear()} Uday Shankar Gattu. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
