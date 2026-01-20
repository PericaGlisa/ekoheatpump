import { motion } from "framer-motion";
import { Linkedin, Heart, ArrowUp } from "lucide-react";
import logoEko from "@/assets/logo-eko-new.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-premium text-white overflow-hidden">
      {/* Background Effects - Reduced on mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-primary/10 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-accent/10 rounded-full blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer */}
        <div className="py-12 sm:py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 sm:col-span-2 md:col-span-1"
          >
            <a href="/" className="inline-block">
              <img
                src={logoEko}
                alt="EKO Elektrofrigo"
                className="h-12 sm:h-16 w-auto mb-4 sm:mb-6 brightness-0 invert drop-shadow-lg"
              />
            </a>
            <p className="text-white/60 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Lider u distribuciji ekoloških toplotnih pumpi u Srbiji. 
              Kvalitet i pouzdanost na prvom mestu.
            </p>
            <div className="flex gap-3">
              <motion.a
                href="https://www.linkedin.com/feed/update/urn:li:activity:6899988285712596994"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-accent transition-colors touch-manipulation"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 font-display">Adresa i kontakt</h4>
            <div className="space-y-3 sm:space-y-4 text-white/60 text-sm sm:text-base">
              <p>Svetolika Nikačevića 11<br />Beograd, Srbija</p>
              <div>
                <a href="tel:+381113757287" className="hover:text-white transition-colors block touch-manipulation">+381 11 375 72 87</a>
                <a href="tel:+381113757288" className="hover:text-white transition-colors block touch-manipulation">+381 11 375 72 88</a>
              </div>
            </div>
          </motion.div>

          {/* Email Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 font-display">Email</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { label: "Office", email: "office@eef.rs" },
                { label: "Prodaja", email: "prodaja@eef.rs" },
                { label: "Inženjering", email: "tehnika@eef.rs" },
                { label: "Servis", email: "servis@eef.rs" },
              ].map((item) => (
                <li key={item.email}>
                  <a href={`mailto:${item.email}`} className="text-white/60 hover:text-white transition-colors inline-flex flex-wrap items-center gap-2 group text-sm sm:text-base touch-manipulation">
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all hidden sm:block" />
                    <span className="font-medium text-white/80">{item.label}:</span> <span className="break-all">{item.email}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold text-base sm:text-lg mb-4 sm:mb-6 font-display">Navigacija</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { href: "/#proizvodi", label: "Proizvodi" },
                { href: "/#galerija", label: "Galerija" },
                { href: "/#cenovnik", label: "Modeli" },
                { href: "/#prednosti", label: "Prednosti" },
                { href: "/#kontakt", label: "Kontakt" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/60 hover:text-white transition-colors inline-flex items-center gap-2 group text-sm sm:text-base touch-manipulation">
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all hidden sm:block" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 sm:py-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 pb-safe">
          <p className="text-white/40 text-xs sm:text-sm flex items-center gap-2 text-center sm:text-left">
            © {currentYear} EKO Elektrofrigo. Napravljeno sa <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-accent flex-shrink-0" /> u Srbiji.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <a href="/politika-privatnosti" className="text-white/40 hover:text-white text-xs sm:text-sm transition-colors touch-manipulation">Politika privatnosti</a>
            <a href="/uslovi-koriscenja" className="text-white/40 hover:text-white text-xs sm:text-sm transition-colors touch-manipulation">Uslovi korišćenja</a>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors touch-manipulation"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;