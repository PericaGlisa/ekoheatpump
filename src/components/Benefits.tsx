import { motion } from "framer-motion";
import { 
  Leaf, 
  PiggyBank, 
  ThermometerSun, 
  Volume2, 
  Shield, 
  Settings,
  ArrowRight,
  Sparkles
} from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Ekološki prihvatljivo",
    description: "R32 i R290 rashladni gasovi sa minimalnim uticajem na životnu sredinu i nižim GWP.",
    gradient: "bg-gradient-accent",
    glow: "shadow-glow-accent",
  },
  {
    icon: PiggyBank,
    title: "Značajna ušteda",
    description: "Smanjite troškove grejanja do 80% u poređenju sa tradicionalnim sistemima.",
    gradient: "bg-gradient-hero",
    glow: "shadow-glow-primary",
  },
  {
    icon: ThermometerSun,
    title: "Sve u jednom",
    description: "Grejanje, hlađenje i priprema tople vode iz jednog uređaja tokom cele godine.",
    gradient: "bg-gradient-accent",
    glow: "shadow-glow-accent",
  },
  {
    icon: Volume2,
    title: "Tihi rad",
    description: "Moderna inverter tehnologija obezbeđuje tih rad od samo 64 dB.",
    gradient: "bg-gradient-hero",
    glow: "shadow-glow-primary",
  },
  {
    icon: Shield,
    title: "Pouzdanost",
    description: "Kvalitetne komponente i do 5 godina garancije za bezbrižno korišćenje.",
    gradient: "bg-gradient-gold",
    glow: "shadow-glow-gold",
  },
  {
    icon: Settings,
    title: "Pametna kontrola",
    description: "WiFi konekcija i pametni termostati za kontrolu sa bilo kog mesta.",
    gradient: "bg-gradient-hero",
    glow: "shadow-glow-primary",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Benefits = () => {
  return (
    <section id="prednosti" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute top-1/2 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
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
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium">Zašto mi?</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 font-display">
            Prednosti 
            <span className="text-gradient-brand"> toplotnih pumpi</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Investicija u toplotnu pumpu donosi višestruke koristi za Vaš dom, 
            budžet i životnu sredinu.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="premium-card h-full p-5 sm:p-6 md:p-8 hover:shadow-elevated transition-all duration-500 hover:-translate-y-2">
                {/* Icon */}
                <div className={`relative w-12 h-12 sm:w-14 md:w-16 sm:h-14 md:h-16 rounded-xl sm:rounded-2xl ${benefit.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:${benefit.glow} transition-all duration-300`}>
                  <benefit.icon className="w-6 h-6 sm:w-7 md:w-8 sm:h-7 md:h-8 text-white" />
                  <div className="absolute inset-0 rounded-2xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3 font-display group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover Arrow */}
                <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  <span className="text-sm font-medium">Saznaj više</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Premium CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 sm:mt-16 md:mt-24"
        >
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-premium p-6 sm:p-10 md:p-12 lg:p-16">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-primary/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-accent/20 rounded-full blur-[100px]" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8">
              <div className="text-center lg:text-left">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4 font-display">
                  Spremni za promenu?
                </h3>
                <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-lg">
                  Kontaktirajte nas za besplatnu konsultaciju i personalizovanu ponudu 
                  prilagođenu Vašim potrebama.
                </p>
              </div>
              <motion.a
                href="#kontakt"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-white text-primary font-bold text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-elevated hover:shadow-glow-primary transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <Sparkles className="w-5 h-5" />
                Zatražite ponudu
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;