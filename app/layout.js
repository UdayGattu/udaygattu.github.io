import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimateMain from "./components/AnimateMain";
import "../styles/globals.css";

export const metadata = {
  title: "Uday Shankar Gattu Portfolio",
  description: "Portfolio of Uday Shankar Gattu – Machine Learning Engineer, AI Researcher & AI Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{metadata.title}</title>
      </head>
      <body className="bg-dark text-white flex flex-col min-h-screen">
        <Navbar />
        <AnimateMain>{children}</AnimateMain>
        <Footer />
      </body>
    </html>
  );
}
