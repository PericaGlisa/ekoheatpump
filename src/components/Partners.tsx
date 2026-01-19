import { motion } from "framer-motion";

const partners = [
  { name: "Daikin", logo: "DAIKIN" },
  { name: "Mitsubishi", logo: "MITSUBISHI" },
  { name: "Panasonic", logo: "PANASONIC" },
  { name: "LG", logo: "LG" },
  { name: "Bosch", logo: "BOSCH" },
  { name: "Viessmann", logo: "VIESSMANN" },
];

const Partners = () => {
  return (
    <section className="py-16 bg-muted/30 border-y border-border/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            Pouzdani partneri i brendovi
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <div className="text-2xl md:text-3xl font-bold text-muted-foreground/40 group-hover:text-primary/60 transition-colors duration-300 tracking-widest">
                {partner.logo}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;
