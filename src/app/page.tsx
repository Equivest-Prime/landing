import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import ProblemSolution from "@/components/ProblemSolution";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <ProblemSolution />
      <Features />
      <UseCases />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
