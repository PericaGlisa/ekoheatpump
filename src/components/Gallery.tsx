import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import houseWinter from "@/assets/house-winter.jpg";
import houseLuxury from "@/assets/house-luxury.jpg";
import floorDetail from "@/assets/floor-heating-detail.jpg";
import livingRoom from "@/assets/living-room-heating.jpg";

const galleryImages = [
  {
    src: houseLuxury,
    alt: "Luksuzna kuća sa toplotnom pumpom",
    title: "Moderna arhitektura",
    description: "Toplotna pumpa za luksuzne objekte",
    size: "large",
  },
  {
    src: houseWinter,
    alt: "Kuća u zimskom okruženju",
    title: "Zimski uslovi",
    description: "Efikasno grejanje i do -25°C",
    size: "small",
  },
  {
    src: livingRoom,
    alt: "Dnevna soba sa podnim grejanjem",
    title: "Udoban dom",
    description: "Podno grejanje za savršen komfor",
    size: "small",
  },
  {
    src: floorDetail,
    alt: "Detalj podnog grejanja",
    title: "Kvalitetna instalacija",
    description: "Profesionalna ugradnja",
    size: "large",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Gallery = () => {
  return (
    <section id="galerija" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent/5 rounded-full blur-[120px]" />
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
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium">Galerija projekata</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 font-display">
            Naša rešenja 
            <span className="text-gradient-brand"> u praksi</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Pogledajte kako naše toplotne pumpe izgledaju u stvarnim projektima - 
            od luksuznih vila do modernih porodičnih kuća.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`group relative overflow-hidden rounded-3xl shadow-card hover:shadow-elevated transition-all duration-700 ${
                index === 0 || index === 3 ? 'md:col-span-1' : ''
              }`}
            >
              <div className="relative aspect-[2/1] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-1 bg-gradient-brand rounded-full" />
                    <Badge variant="secondary" className="bg-white/20 text-white border-0 backdrop-blur-sm">
                      {index === 0 ? 'Premium' : index === 1 ? 'Zima' : index === 2 ? 'Enterijer' : 'Detalj'}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-display">{image.title}</h3>
                  <p className="text-white/80 text-lg">{image.description}</p>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-4 right-4 w-12 h-12 rounded-full glass-effect flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;