import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  Ticker,
  VisionLayers,
  HowItWorks,
  Features,
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
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
