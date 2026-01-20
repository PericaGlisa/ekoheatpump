import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Home, Calendar, Award } from "lucide-react";

const stats = [
  {
    icon: Home,
    value: 150,
    suffix: "+",
    label: "Instalacija",
    description: "Uspešno završenih projekata",
    gradient: "bg-gradient-hero",
  },
  {
    icon: Users,
    value: 100,
    suffix: "+",
    label: "Zadovoljnih kupaca",
    description: "Porodice koje štede energiju",
    gradient: "bg-gradient-accent",
  },
  {
    icon: Calendar,
    value: 10,
    suffix: "+",
    label: "Godina iskustva",
    description: "U industriji toplotnih pumpi",
    gradient: "bg-gradient-gold",
  },
  {
    icon: Award,
    value: 5,
    suffix: "",
    label: "Godina garancije",
    description: "Na sve naše proizvode",
    gradient: "bg-gradient-hero",
  },
];

const useCounter = (target: number, duration: number = 2000, startCounting: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, startCounting]);

  return count;
};

const StatCard = ({ stat, index, isInView }: { stat: typeof stats[0]; index: number; isInView: boolean }) => {
  const count = useCounter(stat.value, 2000, isInView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group"
    >
      <div className="premium-card p-8 text-center hover:shadow-elevated transition-all duration-500 h-full">
        <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
          <stat.icon className="w-8 h-8 text-white" />
        </div>
        <div className="text-5xl font-bold text-foreground mb-2 font-display">
          {count}{stat.suffix}
        </div>
        <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
        <div className="text-sm text-muted-foreground">{stat.description}</div>
      </div>
    </motion.div>
  );
};

const StatsCounter = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 font-display">
            Brojevi govore 
            <span className="text-gradient-brand"> sami za sebe</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ponosni smo na naše rezultate i poverenje koje nam klijenti ukazuju.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
