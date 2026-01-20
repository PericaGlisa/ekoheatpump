import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ScrollText, CheckCircle, AlertCircle, Scale, ShoppingBag, ExternalLink, Gavel } from "lucide-react";

const TermsOfUse = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[500px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            {/* Header Section */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 mb-8 shadow-soft">
                <ScrollText className="w-10 h-10 text-accent" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-display tracking-tight">
                Uslovi <span className="text-gradient-brand">korišćenja</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Molimo Vas da pažljivo pročitate pravila i uslove korišćenja EKO Elektrofrigo web prezentacije.
              </p>
            </motion.div>

            {/* Content Card */}
            <motion.div 
              variants={itemVariants}
              className="bg-card/50 backdrop-blur-sm rounded-3xl p-6 sm:p-10 md:p-12 border border-white/10 shadow-elevated"
            >
              <div className="space-y-12">
                <section className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4 -ml-[41px]">
                    <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-sm z-10">
                      <Scale className="w-4 h-4 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Opšte odredbe</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Pristupanjem i korišćenjem ovog sajta prihvatate ove Uslove korišćenja u celosti. 
                    Sadržaj sajta je informativnog karaktera i EKO Elektrofrigo zadržava pravo izmene sadržaja 
                    i uslova korišćenja bez prethodne najave.
                  </p>
                </section>

                <section className="relative pl-8 border-l-2 border-accent/20 hover:border-accent transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4 -ml-[41px]">
                    <div className="w-8 h-8 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-sm z-10">
                      <CheckCircle className="w-4 h-4 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Intelektualna svojina</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Svi materijali na ovom sajtu, uključujući tekstove, fotografije, logotipe i grafička rešenja, 
                    zaštićeni su autorskim pravima i intelektualna su svojina kompanije EKO Elektrofrigo ili njenih partnera. 
                    <span className="font-semibold text-foreground"> Zabranjeno je neovlašćeno kopiranje i distribucija sadržaja.</span>
                  </p>
                </section>

                <section className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4 -ml-[41px]">
                    <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-sm z-10">
                      <AlertCircle className="w-4 h-4 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Odricanje od odgovornosti</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    EKO Elektrofrigo se trudi da informacije na sajtu budu tačne i ažurne, ali ne garantujemo:
                  </p>
                  <ul className="grid gap-3">
                    {[
                      "Apsolutnu tačnost svih tehničkih specifikacija (podložne promenama proizvođača)",
                      "Neprekidnu dostupnost sajta u svakom trenutku",
                      "Da sajt ne sadrži nenamerne greške ili viruse"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 bg-muted/50 p-3 rounded-xl">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="relative pl-8 border-l-2 border-accent/20 hover:border-accent transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4 -ml-[41px]">
                    <div className="w-8 h-8 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-sm z-10">
                      <ShoppingBag className="w-4 h-4 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Ponude</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Informacije o proizvodima na sajtu su informativnog karaktera. 
                    Zvaničnu ponudu i cene dobijate isključivo direktnim kontaktom sa našim prodajnim timom 
                    putem telefona ili emaila.
                  </p>
                </section>

                <section className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4 -ml-[41px]">
                    <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-sm z-10">
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Linkovi ka trećim stranama</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Sajt može sadržati linkove ka drugim web sajtovima. EKO Elektrofrigo nije odgovoran 
                    za sadržaj ili politiku privatnosti tih sajtova, te ih koristite na sopstvenu odgovornost.
                  </p>
                </section>

                <section className="relative pl-8 border-l-2 border-accent/20 hover:border-accent transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4 -ml-[41px]">
                    <div className="w-8 h-8 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-sm z-10">
                      <Gavel className="w-4 h-4 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Nadležnost suda</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Za sve eventualne sporove koji mogu proisteći iz korišćenja ovog sajta nadležan je sud u Beogradu, 
                    uz primenu prava Republike Srbije.
                  </p>
                </section>
              </div>

              <div className="mt-16 pt-8 border-t border-border/50 text-center">
                <p className="text-sm text-muted-foreground">
                  Dokument je poslednji put ažuriran: <span className="font-medium text-foreground">Januar 2026.</span>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfUse;
