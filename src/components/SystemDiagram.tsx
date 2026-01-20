import { motion } from "framer-motion";

import { Droplets, Flame, Snowflake, Sun, Home, Zap, ThermometerSun, Volume2, Award, Gauge } from "lucide-react";
import houseCutaway from "@/assets/house-cutaway.jpg";
import badgeR32 from "@/assets/badge-r32.png";
import badgeR290 from "@/assets/badge-r290.png";

const systemFeatures = [
  {
    icon: Flame,
    title: "Topla voda",
    description: "Priprema sanitarne tople vode do 65°C za celo domaćinstvo",
    position: "top-[15%] left-[8%]",
    color: "bg-red-500",
  },
  {
    icon: Home,
    title: "Radijatori",
    description: "Klasično radijatorsko grejanje - izlazna temp. do 65°C",
    position: "top-[25%] right-[5%]",
    color: "bg-orange-500",
  },
  {
    icon: Sun,
    title: "Podno grejanje",
    description: "Niskotemperaturno grejanje 35°C - optimalna efikasnost",
    position: "bottom-[20%] right-[8%]",
    color: "bg-amber-500",
  },
  {
    icon: Snowflake,
    title: "Klimatizacija",
    description: "Aktivno hlađenje prostora tokom letnjih meseci",
    position: "top-[45%] right-[3%]",
    color: "bg-sky-500",
  },
  {
    icon: Zap,
    title: "Toplotna pumpa",
    description: "Spoljna jedinica - rad do -25°C spoljne temperature",
    position: "bottom-[15%] left-[5%]",
    color: "bg-primary",
  },
  {
    icon: Droplets,
    title: "Akumulator",
    description: "Buffer za optimizaciju rada i skladištenje energije",
    position: "top-[55%] left-[3%]",
    color: "bg-accent",
  },
];

const modelSpecs = [
  {
    category: "Monoblock R32",
    models: [
      { name: "BLN-B06-F1", power: "2.5-8.3 kW", price: "2,750 €" },
      { name: "BLN-B14-F3", power: "5.3-16.6 kW", price: "3,590 €" },
      { name: "BLN-B24-F3", power: "6.5-26.1 kW", price: "5,120 €" },
    ],
  },
  {
    category: "Monoblock R290",
    models: [
      { name: "BLN-C06-F1", power: "2.9-9.1 kW", price: "3,070 €" },
      { name: "BLN-C12-F3", power: "4.3-15.2 kW", price: "3,700 €" },
      { name: "BLN-C18-F3", power: "7.2-21.9 kW", price: "4,980 €" },
    ],
  },
];

const SystemDiagram = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-effect mb-4 sm:mb-6"
          >
            <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium">Kako funkcioniše</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 font-display">
            Kompletan 
            <span className="text-gradient-brand"> sistem grejanja</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Jedna toplotna pumpa vazduh-voda obezbeđuje grejanje, hlađenje i pripremu sanitarne tople vode. 
            Energetska klasa A+++ garantuje maksimalnu uštedu.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center">
          {/* Left side features */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-4"
          >
            {systemFeatures.slice(0, 3).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-shadow"
              >
                <div className={`w-10 h-10 rounded-lg ${feature.color} flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground text-sm truncate">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground break-words">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Center - Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated border-4 border-card">
              <img
                src={houseCutaway}
                alt="Šema sistema grejanja kuće"
                className="w-full h-auto"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent" />
              
              {/* Badges */}
              <div className="absolute top-4 right-4 flex gap-2">
                <img src={badgeR32} alt="R32" className="h-10 w-auto" />
                <img src={badgeR290} alt="R290" className="h-10 w-auto" />
              </div>
            </div>

            {/* Info box - moved below image on mobile */}
            <div className="mt-4 sm:absolute sm:bottom-4 sm:left-4 sm:right-4 glass-effect p-4 rounded-lg sm:mt-0">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="font-semibold text-foreground">Vazduh-Voda sistem</h4>
                  <p className="text-sm text-muted-foreground">Monoblock i Split varijante</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-primary">A+++</div>
                    <div className="text-xs text-muted-foreground">Klasa</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-accent">-25°C</div>
                    <div className="text-xs text-muted-foreground">Min. temp.</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary">65°C</div>
                    <div className="text-xs text-muted-foreground">Max. izlaz</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right side features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-4"
          >
            {systemFeatures.slice(3, 6).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border/50 shadow-soft hover:shadow-card transition-shadow"
              >
                <div className={`w-10 h-10 rounded-lg ${feature.color} flex items-center justify-center flex-shrink-0`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground text-sm truncate">{feature.title}</h4>
                  <p className="text-xs text-muted-foreground break-words">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technical specs from catalog */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {[
            { icon: Gauge, value: "2.5-26 kW", label: "Opseg snage", sublabel: "Za sve veličine objekata" },
            { icon: ThermometerSun, value: "COP 5.0+", label: "Koeficijent efikasnosti", sublabel: "A+++ energetska klasa" },
            { icon: Volume2, value: "≤64 dB", label: "Nivo buke", sublabel: "Tihi rad spoljne jedinice" },
            { icon: Award, value: "5 godina", label: "Garancija", sublabel: "Puna fabrička garancija" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-gradient-brand">{stat.value}</div>
              <div className="text-sm font-medium text-foreground mt-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
            </div>
          ))}
        </motion.div>

        {/* Model specifications table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Pregled modela i snaga
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {modelSpecs.map((category, catIndex) => (
              <div key={catIndex} className="bg-card rounded-xl border border-border/50 overflow-hidden">
                <div className={`px-6 py-4 ${catIndex === 0 ? 'bg-primary/10' : 'bg-accent/10'}`}>
                  <h4 className="font-bold text-lg text-foreground flex items-center gap-2">
                    <img 
                      src={catIndex === 0 ? badgeR32 : badgeR290} 
                      alt={category.category} 
                      className="h-6 w-auto" 
                    />
                    {category.category}
                  </h4>
                </div>
                <div className="divide-y divide-border/50">
                  {category.models.map((model, modelIndex) => (
                    <div key={modelIndex} className="px-6 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors">
                      <div>
                        <div className="font-medium text-foreground">{model.name}</div>
                        <div className="text-sm text-muted-foreground">{model.power}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-6">
            * Za tačnu ponudu i specifikacije kontaktirajte nas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SystemDiagram;
