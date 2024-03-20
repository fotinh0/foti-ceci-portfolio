import Hero from "./Hero";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import BackToTopButton from "./BackToTopButton";

export default function Homepage() {
  return (
    <div className="bg-[#0a192f]">
      <BackToTopButton />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
