// app/layout.js
import "../styles/globals.css";
import ContactBar from "../components/ContactBar";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Uday Shankar Gattu Portfolio",
  description:
    "Portfolio of Uday Shankar Gattu – Machine Learning Engineer, AI Researcher & AI Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-secondary text-white">
        <ContactBar />
        <Navbar />
        <main className="flex-grow container mx-auto p-6">{children}</main>
        <footer className="bg-primary text-white text-center py-4">
          © {new Date().getFullYear()} Uday Shankar Gattu. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
