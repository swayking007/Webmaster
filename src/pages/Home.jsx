import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Statistics from "../components/Statistics";
import Features from "../components/Features";
import Internships from "../components/Internships";
import CertificatePreview from "../components/CertificatePreview";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <Statistics />
      <Features />
      <Internships />
      <CertificatePreview />
      <FAQ />
      <Contact />
    </>
  );
}
