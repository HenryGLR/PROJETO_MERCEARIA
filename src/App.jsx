import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Environments from "./components/Environments";
import ProjectsGallery from "./components/ProjectsGallery";
import {
  Differentials,
  Process,
  About,
  Materials,
  BudgetSection,
  Testimonials,
} from "./components/StorySections";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { WhatsAppButton } from "./components/Shared";
export default function App() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 },
    );
    const elements = document.querySelectorAll(
      ".section-heading, .intro-heading, .advantages-grid article, .project-card, .process-steps li, .about-content, .testimonials-grid figure",
    );
    elements.forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Differentials />
        <Environments />
        <ProjectsGallery />
        <Process />
        <About />
        <Materials />
        <BudgetSection />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
