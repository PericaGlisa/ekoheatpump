import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatsCounter from "@/components/StatsCounter";
import Products from "@/components/Products";
import SystemDiagram from "@/components/SystemDiagram";
import WaterHeater from "@/components/WaterHeater";
import SavingsCalculator from "@/components/SavingsCalculator";
import Gallery from "@/components/Gallery";
import Pricing from "@/components/Pricing";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <StatsCounter />
      <Products />
      <SystemDiagram />
      <WaterHeater />
      <SavingsCalculator />
      <Gallery />
      <Pricing />
      <Benefits />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
