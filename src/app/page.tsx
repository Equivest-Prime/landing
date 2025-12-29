import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import TrustedGlobally from "@/components/TrustedGlobally";
import Regulations from "@/components/Regulations";
import Features from "@/components/Features";
import Solutions from "@/components/Solutions";
import WorldMapSection from "@/components/WorldMapSection";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <Solutions />
      <WorldMapSection />
      <Regulations />
      <FAQ />
      <TrustedGlobally />
      <Contact />
      <Footer />
    </main>
  );
}
