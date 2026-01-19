import { motion } from "framer-motion";
import { Droplets, Wind, Snowflake, Check, Star, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import pumpR32 from "@/assets/pump-r32.jpg";
import pumpR290 from "@/assets/pump-r290.jpg";
import pumpR290Black from "@/assets/pump-r290-black.jpg";

const products = [
  {
    id: 1,
    title: "Monoblock R32",
    description: "Kompaktni sve-u-jednom sistemi za efikasno grejanje i hlađenje",
    image: pumpR32,
    badge: "Najprodavaniji",
    badgeClass: "bg-gradient-hero text-white border-0",
    features: [
      "Snaga: 6 - 26 kW",
      "Energetska klasa A+++",
      "Tihi rad: od 64 dB",
      "Inverter tehnologija",
    ],
    price: "od 2.499€",
    popular: false,
  },
  {
    id: 2,
    title: "Monoblock R290",
    description: "Najnovija generacija sa prirodnim rashladnim gasom R290 (propan)",
    image: pumpR290Black,
    badge: "Eko izbor",
    badgeClass: "bg-gradient-accent text-white border-0",
    features: [
      "Snaga: 7 - 22 kW",
      "Minimalan GWP < 3",
      "Visok COP do 5.0",
      "Budućnost grejanja",
    ],
    price: "od 3.070€",
    popular: false,
  },
  {
    id: 3,
    title: "Split R32",
    description: "Dvodelni sistemi za maksimalnu fleksibilnost instalacije",
    image: pumpR32,
    badge: "Fleksibilan",
    badgeClass: "bg-gradient-gold text-white border-0",
    features: [
      "Snaga: 6 - 16 kW",
      "Odvojena jedinica",
      "Jednostavna montaža",
      "Idealan za renovacije",
    ],
    price: "od 2.869€",
    popular: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Products = () => {
  return (
    <section id="proizvodi" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent/5 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[800px] h-[400px] sm:h-[800px] bg-gradient-to-br from-primary/3 to-accent/3 rounded-full blur-[120px] hidden sm:block" />
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
            <Star className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium">Premium kolekcija</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 font-display">
            Toplotne pumpe za 
            <span className="text-gradient-brand"> svaku potrebu</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Izaberite idealno rešenje za Vaš dom ili poslovni prostor. 
            Nudimo širok asortiman toplotnih pumpi sa R32 i R290 rashladnim gasovima.
          </p>
        </motion.div>

        {/* Features Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-14 md:mb-20"
        >
          {[
            { icon: Droplets, label: "Topla voda", desc: "Sanitarna priprema", gradient: "bg-gradient-hero" },
            { icon: Wind, label: "Grejanje", desc: "Efikasno i tiho", gradient: "bg-gradient-accent" },
            { icon: Snowflake, label: "Hlađenje", desc: "Letnji komfor", gradient: "bg-gradient-hero" },
            { icon: Check, label: "Garancija", desc: "Do 5 godina", gradient: "bg-gradient-gold" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="premium-card p-4 sm:p-6 text-center hover:shadow-elevated transition-all duration-500 h-full">
                <div className={`w-10 h-10 sm:w-14 sm:h-14 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-300`}>
                  <item.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="font-bold text-foreground text-sm sm:text-lg mb-0.5 sm:mb-1">{item.label}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Product Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              variants={itemVariants}
              className="group"
            >
              <Card className={`relative h-full overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-500 ${product.popular ? 'ring-2 ring-primary/20' : ''}`}>
                {/* Popular Ribbon */}
                {product.popular && (
                  <div className="absolute top-6 -right-8 z-20 bg-gradient-gold text-white text-xs font-bold py-1.5 px-10 rotate-45 shadow-lg">
                    NAJPRODAVANIJI
                  </div>
                )}
                
                {/* Image Container */}
                <div className="relative overflow-hidden bg-white">
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent z-10" />
                  <div className="h-48 sm:h-56 md:h-64 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
                    <motion.img
                      src={product.image}
                      alt={product.title}
                      className={`max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105 ${product.id === 2 ? 'scale-125 sm:scale-150 group-hover:scale-[1.30] sm:group-hover:scale-[1.55]' : ''}`}
                    />
                  </div>
                  <Badge className={`absolute top-4 left-4 ${product.badgeClass} shadow-lg z-20`}>
                    {product.badge}
                  </Badge>
                  {/* Subtle bottom line */}
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-border/50 z-20" />
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-2xl font-display">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <ul className="space-y-3 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-6 border-t border-border/50">
                    <div>
                      <span className="text-sm text-muted-foreground">Cena</span>
                      <div className="text-3xl font-bold text-gradient-brand">{product.price}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;