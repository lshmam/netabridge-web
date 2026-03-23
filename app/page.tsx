import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  Ticker,
  VisionLayers,
  HowItWorks,
  Features,
  Comparison,
  CTASection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <VisionLayers />
        <HowItWorks />
        <Features />
        <Comparison />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
