import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlignRight, X, Phone, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoEko from "@/assets/logo-eko-new.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optimized scroll handler with throttling
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  const navLinks = [
    { href: "/#proizvodi", label: "Proizvodi" },
    { href: "/#galerija", label: "Galerija" },
    { href: "/#cenovnik", label: "Cenovnik" },
    { href: "/#prednosti", label: "Prednosti" },
    { href: "/#kontakt", label: "Kontakt" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "glass-effect shadow-elevated py-2"
            : "bg-transparent py-3 sm:py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <motion.a 
              href="/" 
              className="flex items-center gap-2 sm:gap-3 relative group flex-shrink-0"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <img 
                src={logoEko} 
                alt="EKO Elektrofrigo" 
                className="h-12 sm:h-14 md:h-16 w-auto drop-shadow-md brightness-105 contrast-105 transition-all duration-300 group-hover:drop-shadow-lg" 
              />
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative px-3 xl:px-5 py-2.5 text-foreground/70 hover:text-foreground font-medium transition-colors group text-sm xl:text-base"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-brand rounded-full transition-all duration-300 group-hover:w-3/4" />
                </motion.a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2 text-muted-foreground hover:text-foreground hover:bg-transparent text-sm"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+381 11 375 72 87</span>
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-hero hover:shadow-glow-primary transition-all duration-300 gap-2 px-4 xl:px-6 rounded-full text-sm"
                asChild
              >
                <a href="/#kontakt">
                  <Sparkles className="w-4 h-4" />
                  <span className="hidden xl:inline">Zatraži ponudu</span>
                  <span className="xl:hidden">Ponuda</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="lg:hidden p-2.5 rounded-xl bg-muted/50 hover:bg-muted transition-colors touch-manipulation"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Zatvori meni" : "Otvori meni"}
              aria-expanded={isMobileMenuOpen}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <AlignRight className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
              onClick={closeMobileMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background z-50 lg:hidden shadow-elevated overflow-y-auto"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-border/50">
                <img 
                  src={logoEko} 
                  alt="EKO Elektrofrigo" 
                  className="h-10 w-auto" 
                />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl bg-muted/50 hover:bg-muted transition-colors touch-manipulation"
                  onClick={closeMobileMenu}
                  aria-label="Zatvori meni"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col p-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="flex items-center justify-between px-4 py-4 text-foreground/80 hover:text-foreground hover:bg-muted/50 rounded-xl transition-all font-medium text-lg touch-manipulation active:bg-muted"
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </motion.a>
                ))}
              </nav>

              {/* Divider */}
              <div className="mx-4 h-px bg-border/50" />

              {/* Contact Section */}
              <div className="p-4 space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="p-4 rounded-xl bg-muted/30 border border-border/50"
                >
                  <p className="text-sm text-muted-foreground mb-2">Pozovite nas</p>
                  <a 
                    href="tel:+381113757287" 
                    className="flex items-center gap-3 text-foreground font-semibold text-lg touch-manipulation"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    +381 11 375 72 87
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button 
                    className="w-full bg-gradient-hero rounded-xl py-6 text-lg gap-2 touch-manipulation" 
                    asChild
                  >
                    <a href="/#kontakt" onClick={closeMobileMenu}>
                      <Sparkles className="w-5 h-5" />
                      Zatraži ponudu
                    </a>
                  </Button>
                </motion.div>
              </div>

              {/* Bottom Safe Area */}
              <div className="h-safe-area-inset-bottom" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;