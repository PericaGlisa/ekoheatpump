import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Droplets, Thermometer, Zap, Timer, Sparkles } from "lucide-react";
import waterHeater from "@/assets/water-heater.jpg";

const WaterHeater = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl bg-white border border-white/20 group">
              
              <img
                src={waterHeater}
                alt="R290 Toplotna pumpa za sanitarnu vodu"
                className="w-full h-[350px] sm:h-[450px] md:h-[550px] object-contain object-center contrast-105 drop-shadow-2xl transition-transform duration-700 group-hover:scale-105 relative z-10 p-4 sm:p-8"
              />
              
              {/* Floating Badges */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 flex flex-col gap-2">
                <Badge className="w-fit bg-gradient-accent text-white border-0 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm shadow-lg backdrop-blur-md">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  R290 Eco
                </Badge>
                <Badge className="w-fit bg-white/90 text-primary border-0 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm shadow-lg backdrop-blur-md">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  A++ Klasa
                </Badge>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 right-4 sm:right-8 transform -translate-y-1/2">
                <div className="flex flex-col gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse" />
                  <div className="w-2 h-2 rounded-full bg-accent/40 animate-pulse delay-75" />
                  <div className="w-2 h-2 rounded-full bg-primary/40 animate-pulse delay-150" />
                </div>
              </div>
            </div>
            
            {/* Premium Price Tag */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-4 right-4 sm:bottom-6 sm:right-6 lg:-bottom-8 lg:-right-8 bg-gradient-premium text-white p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-elevated"
            >
              <div className="text-xs sm:text-sm font-medium text-white/70 mb-0.5 sm:mb-1">Specijalna ponuda</div>
              <a href="#kontakt" className="text-xl sm:text-2xl md:text-3xl font-bold text-gradient-gold hover:underline">
                Zatražite cenu
              </a>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-effect mb-4 sm:mb-6">
              <Droplets className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-xs sm:text-sm font-medium">Sanitarna voda</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 font-display">
              R290 Toplotna pumpa 
              <span className="text-gradient-brand"> za sanitarnu toplu vodu</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 leading-relaxed">
              Efikasna priprema sanitarne tople vode sa prirodnim rashladnim gasom R290. 
              Model AXN-16/200 All-in-One kombinuje toplotnu pumpu i bojler kapaciteta 200L 
              u jednom kompaktnom uređaju.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 md:mb-10">
              {[
                { icon: Droplets, label: "200L kapacitet", desc: "Dovoljno za porodicu", gradient: "bg-gradient-hero" },
                { icon: Thermometer, label: "Do 65°C", desc: "Visoka temperatura", gradient: "bg-gradient-accent" },
                { icon: Zap, label: "COP do 3.5", desc: "Visoka efikasnost", gradient: "bg-gradient-gold" },
                { icon: Timer, label: "Brzo zagrevanje", desc: "Ušteda vremena", gradient: "bg-gradient-hero" },
              ].map((feature, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${feature.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm sm:text-base">{feature.label}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{feature.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits List */}
            <div className="premium-card p-5 sm:p-6 md:p-8">
              <h4 className="font-bold text-foreground mb-4 text-lg font-display">Ključne prednosti:</h4>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Ekološki R290 gas sa GWP < 3",
                  "Ušteda do 75% energije u odnosu na električni bojler",
                  "Tihi rad - idealno za stambene prostore",
                  "Jednostavna instalacija i održavanje",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-gradient-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WaterHeater;