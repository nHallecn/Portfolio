import { useState, useEffect } from "react";
import useReveal from "./hooks/useScrollReveal";
import "./App.css";

import Nav from "./sections/navbar.jsx";
import Hero from "./sections/hero.jsx";
import Skills from "./sections/skills.jsx";
import Projects from "./sections/projects.jsx";
import About from "./sections/about.jsx";
import Contact from "./sections/contact.jsx";
import Footer from "./sections/footer.jsx";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useReveal();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <Nav scrolled={scrolled} />
      <Hero />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}