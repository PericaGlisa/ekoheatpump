import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, Zap, PiggyBank, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";

const SavingsCalculator = () => {
  const [squareMeters, setSquareMeters] = useState([100]);
  const [heatingType, setHeatingType] = useState<"electricity" | "gas" | "oil">("electricity");

  const calculations = useMemo(() => {
    const area = squareMeters[0];
    
    // Average heating costs per m² per year (EUR)
    const costPerM2 = {
      electricity: 18,
      gas: 12,
      oil: 14,
    };
    
    // Heat pump efficiency vs traditional (COP ~4 means 75% savings on electricity)
    const savingsPercent = {
      electricity: 75,
      gas: 50,
      oil: 60,
    };

    const currentCost = area * costPerM2[heatingType];
    const savings = Math.round(currentCost * (savingsPercent[heatingType] / 100));
    const newCost = currentCost - savings;
    const co2Reduction = Math.round(area * 0.015 * (savingsPercent[heatingType] / 100) * 10) / 10; // tons per year

    return {
      currentCost: Math.round(currentCost),
      savings,
      newCost: Math.round(newCost),
      co2Reduction,
      savingsPercent: savingsPercent[heatingType],
    };
  }, [squareMeters, heatingType]);

  const heatingTypes = [
    { id: "electricity" as const, label: "Električna energija", icon: "⚡" },
    { id: "gas" as const, label: "Gas", icon: "🔥" },
    { id: "oil" as const, label: "Lož ulje", icon: "🛢️" },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect mb-6"
          >
            <Calculator className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Kalkulator uštede</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
            Izračunajte svoju 
            <span className="text-gradient-brand"> uštedu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Saznajte koliko možete uštedeti prelaskom na toplotnu pumpu 
            na osnovu veličine Vašeg prostora.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="premium-card p-8 md:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Input Side */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8 font-display">
                  Unesite podatke
                </h3>

                {/* Square Meters Slider */}
                <div className="mb-10">
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-medium text-foreground">
                      Površina prostora
                    </label>
                    <span className="text-2xl font-bold text-gradient-brand">
                      {squareMeters[0]} m²
                    </span>
                  </div>
                  <Slider
                    value={squareMeters}
                    onValueChange={setSquareMeters}
                    max={500}
                    min={30}
                    step={10}
                    className="py-4"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>30 m²</span>
                    <span>500 m²</span>
                  </div>
                </div>

                {/* Heating Type Selection */}
                <div>
                  <label className="text-sm font-medium text-foreground mb-4 block">
                    Trenutni način grejanja
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {heatingTypes.map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setHeatingType(type.id)}
                        className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                          heatingType === type.id
                            ? "border-primary bg-primary/10"
                            : "border-border hover:border-primary/50"
                        }`}
                      >
                        <div className="text-2xl mb-2">{type.icon}</div>
                        <div className="text-sm font-medium">{type.label}</div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Results Side */}
              <div className="lg:border-l lg:border-border/50 lg:pl-12">
                <h3 className="text-2xl font-bold text-foreground mb-8 font-display">
                  Vaša ušteda
                </h3>

                <div className="space-y-6">
                  {/* Current Cost */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <Zap className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Trenutni troškovi</div>
                        <div className="font-semibold text-foreground">godišnje</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {calculations.currentCost}€
                    </div>
                  </div>

                  {/* Savings */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-accent/10 border border-accent/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-accent flex items-center justify-center">
                        <PiggyBank className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-accent">Godišnja ušteda</div>
                        <div className="font-semibold text-accent">do {calculations.savingsPercent}%</div>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gradient-accent">
                      {calculations.savings}€
                    </div>
                  </div>

                  {/* CO2 Reduction */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-hero flex items-center justify-center">
                        <Leaf className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Smanjenje CO₂</div>
                        <div className="font-semibold text-foreground">godišnje</div>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-foreground">
                      {calculations.co2Reduction}t
                    </div>
                  </div>

                  {/* ROI Badge */}
                  <div className="text-center pt-4">
                    <Badge className="bg-gradient-gold text-white border-0 px-4 py-2">
                      Povrat investicije za ~{Math.round(2500 / calculations.savings)} godina
                    </Badge>
                  </div>
                </div>

                {/* CTA */}
                <Button 
                  size="lg" 
                  className="w-full mt-8 bg-gradient-hero hover:shadow-glow-primary transition-all duration-300 gap-2"
                  asChild
                >
                  <a href="#kontakt">
                    Zatražite detaljnu ponudu
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCalculator;
