import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712]">
      <Navbar />
      <Hero />
      <About />
      <Certifications />
      <Experience />
      {/* <Projects /> */}
      <Contact />
      {/* <Blog /> */}
      <Footer />
    </main>
  );
}
