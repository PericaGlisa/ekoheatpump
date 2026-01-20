import { motion } from "framer-motion";
import { ArrowRight, Leaf, Thermometer, Zap, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPump from "@/assets/hero-pump.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-muted" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(220_65%_35%_/_0.08),_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(155_75%_32%_/_0.06),_transparent_50%)]" />
      
      {/* Animated Orbs - Hidden on mobile for performance */}
      <motion.div
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-[10%] w-48 sm:w-72 h-48 sm:h-72 rounded-full bg-primary/10 blur-3xl hidden sm:block"
      />
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 right-[10%] w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-accent/10 blur-3xl hidden sm:block"
      />
      <motion.div
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-gradient-to-br from-primary/5 to-accent/5 blur-3xl hidden sm:block"
      />

      {/* Floating Elements - Hidden on mobile for performance */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-[15%] w-20 h-20 rounded-2xl bg-gradient-hero opacity-20 blur-xl hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-[25%] w-16 h-16 rounded-full bg-gradient-accent opacity-20 blur-xl hidden md:block"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-effect mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-sm font-medium text-foreground/80">Premium rešenja za grejanje</span>
              <Leaf className="w-4 h-4 text-accent" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 sm:mb-8 drop-shadow-md"
            >
              <span className="text-foreground font-display">EKO Toplotne</span>
              <br />
              <span className="text-foreground font-display">Pumpe</span>
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="inline-block ml-2 sm:ml-4"
              >
                <span className="text-lg sm:text-2xl md:text-3xl text-gradient-gold font-sans font-semibold">A+++</span>
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-lg leading-relaxed"
            >
              Revolucionarna tehnologija grejanja i hlađenja sa ekološkim R32 i R290 
              rashladnim gasovima. Uštedite do <span className="text-accent font-semibold">80% energije</span>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-3 sm:gap-6 mb-8 sm:mb-10"
            >
              {[
                { icon: Thermometer, value: "A+++", label: "Energetska klasa", gradient: "bg-gradient-hero" },
                { icon: Zap, value: "80%", label: "Ušteda energije", gradient: "bg-gradient-accent" },
                { icon: Shield, value: "5 god", label: "Garancija", gradient: "bg-gradient-gold" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className="relative group"
                >
                  <div className="premium-card p-3 sm:p-4 text-center hover:shadow-elevated transition-all duration-500">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 rounded-lg sm:rounded-xl ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-lg sm:text-2xl font-bold text-foreground mb-0.5 sm:mb-1">{stat.value}</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground leading-tight">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4"
            >
              <Button 
                size="lg" 
                className="bg-gradient-hero hover:shadow-glow-primary transition-all duration-300 gap-2 text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl w-full xs:w-auto"
                asChild
              >
                <a href="#proizvodi">
                  Pogledaj ponudu
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-glow-primary text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl transition-all duration-300 hover:scale-[1.02] w-full xs:w-auto"
                asChild
              >
                <a href="#kontakt">
                  Besplatna konsultacija
                </a>
              </Button>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col xs:flex-row items-start xs:items-center gap-4 sm:gap-6 mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-border/50"
            >
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Award className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                <span>Sertifikovani partner</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                <span>100+ instalacija</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative max-w-md sm:max-w-lg lg:max-w-none mx-auto">
              {/* Glow Effects - Reduced on mobile */}
              <div className="absolute inset-0 bg-gradient-brand opacity-10 sm:opacity-20 blur-[60px] sm:blur-[100px] rounded-full scale-75 animate-pulse-glow" />
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary/10 sm:from-primary/20 via-transparent to-accent/10 sm:to-accent/20 blur-xl sm:blur-2xl rounded-full" />
              
              {/* Product Image */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src={heroPump}
                  alt="EKO Toplotna Pumpa"
                  className="w-full max-w-xs sm:max-w-md lg:max-w-xl mx-auto drop-shadow-2xl rounded-2xl sm:rounded-3xl object-cover object-top premium-glow"
                  style={{ clipPath: 'inset(0 0 20% 0 round 16px)' }}
                />
              </motion.div>

              {/* Floating Labels - Hidden on very small screens */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
                className="absolute top-1/4 left-0 sm:-left-4 z-20 glass-effect px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-elevated hidden xs:block"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-accent" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-foreground">R32 / R290</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Ekološki gas</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-1/3 right-0 sm:-right-4 z-20 hidden xs:block"
              >
                <a 
                  href="#kontakt"
                  className="glass-effect px-3 sm:px-5 py-2 sm:py-3 rounded-lg sm:rounded-xl shadow-elevated flex items-center gap-2 hover:scale-105 transition-transform duration-300"
                >
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-gold" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-accent">Zatražite ponudu</div>
                    <div className="text-[10px] sm:text-xs text-muted-foreground">Monoblock sistemi</div>
                  </div>
                </a>
              </motion.div>

              {/* Quality Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4, type: "spring" }}
                className="absolute -top-2 right-1/4 z-20 bg-gradient-gold text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-glow-gold"
              >
                <span className="text-xs sm:text-sm font-bold whitespace-nowrap">Premium kvalitet</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;