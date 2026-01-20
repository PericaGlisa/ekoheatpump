import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Check, Cookie, UserCheck } from "lucide-react";

const PrivacyPolicy = () => {
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
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[150%] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-accent/5 rounded-full blur-[100px]" />
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
              <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 mb-8 shadow-soft">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 font-display tracking-tight">
                Politika <span className="text-gradient-brand">privatnosti</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Vaša privatnost je temelj našeg poslovanja. Saznajte transparentno kako čuvamo i koristimo Vaše podatke.
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
                      <Eye className="w-4 h-4 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Prikupljanje podataka</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    EKO Elektrofrigo prikuplja samo neophodne podatke kako bismo Vam pružili vrhunsku uslugu. 
                    Ovo uključuje informacije koje nam dobrovoljno dostavite putem kontakt forme (ime, email, broj telefona) 
                    ili direktnom komunikacijom.
                  </p>
                </section>

                <section className="relative pl-8 border-l-2 border-accent/20 hover:border-accent transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4 -ml-[41px]">
                    <div className="w-8 h-8 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-sm z-10">
                      <FileText className="w-4 h-4 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Upotreba podataka</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    Vaše podatke koristimo isključivo sa ciljem unapređenja našeg odnosa i usluge:
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Odgovaranje na Vaše upite",
                      "Kreiranje personalizovanih ponuda",
                      "Tehnička podrška i savetovanje",
                      "Unapređenje korisničkog iskustva"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-3 bg-muted/50 p-3 rounded-xl">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4 -ml-[41px]">
                    <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-sm z-10">
                      <Lock className="w-4 h-4 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Zaštita podataka</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Bezbednost Vaših podataka je naš prioritet. Primenjujemo najsavremenije tehničke i organizacione mere zaštite. 
                    Vaši podaci se čuvaju na enkriptovanim serverima i dostupni su isključivo ovlašćenim licima. 
                    <span className="font-semibold text-foreground"> Nikada ne prodajemo niti delimo Vaše podatke trećim licima.</span>
                  </p>
                </section>

                <section className="relative pl-8 border-l-2 border-accent/20 hover:border-accent transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4 -ml-[41px]">
                    <div className="w-8 h-8 rounded-full bg-background border-2 border-accent flex items-center justify-center shadow-sm z-10">
                      <Cookie className="w-4 h-4 text-accent" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Kolačići (Cookies)</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Naš sajt koristi kolačiće radi optimizacije performansi i analize posećenosti. 
                    Oni nam pomažu da razumemo kako koristite sajt i kako da ga učinimo još boljim za Vas. 
                    Podešavanja kolačića možete u svakom trenutku promeniti u Vašem pretraživaču.
                  </p>
                </section>

                <section className="relative pl-8 border-l-2 border-primary/20 hover:border-primary transition-colors duration-300">
                  <div className="flex items-center gap-3 mb-4 -ml-[41px]">
                    <div className="w-8 h-8 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-sm z-10">
                      <UserCheck className="w-4 h-4 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">Vaša prava</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Vi ste vlasnik svojih podataka. Imate apsolutno pravo da u svakom trenutku zatražite uvid, 
                    ispravku ili potpuno brisanje Vaših ličnih podataka iz naše baze.
                  </p>
                  <div className="mt-6 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                    <p className="text-center font-medium text-foreground">
                      Za sve zahteve stojimo Vam na raspolaganju putem emaila:<br/>
                      <a href="mailto:office@eef.rs" className="text-primary hover:text-accent transition-colors text-lg font-bold mt-2 inline-block">
                        office@eef.rs
                      </a>
                    </p>
                  </div>
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

export default PrivacyPolicy;
