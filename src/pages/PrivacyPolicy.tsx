import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-display">
                Politika <span className="text-gradient-brand">privatnosti</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Vaša privatnost je naš prioritet. Saznajte kako čuvamo i koristimo Vaše podatke.
              </p>
            </div>

            <div className="space-y-8 bg-card rounded-2xl p-6 sm:p-10 border border-border/50 shadow-sm">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">1. Prikupljanje podataka</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  EKO Elektrofrigo prikuplja samo neophodne podatke kako bismo Vam pružili najbolju moguću uslugu. 
                  Ovo uključuje informacije koje nam dobrovoljno dostavite putem kontakt forme (ime, email, broj telefona) 
                  ili direktnom komunikacijom.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">2. Upotreba podataka</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Vaše podatke koristimo isključivo za:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Odgovaranje na Vaše upite i zahteve za ponudu</li>
                  <li>Pružanje informacija o našim proizvodima i uslugama</li>
                  <li>Unapređenje korisničkog iskustva na našem sajtu</li>
                  <li>Tehničku podršku i servisne informacije</li>
                </ul>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lock className="w-6 h-6 text-accent" />
                  <h2 className="text-2xl font-bold text-foreground">3. Zaštita podataka</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Primenjujemo savremene tehničke i organizacione mere zaštite kako bismo osigurali bezbednost Vaših podataka. 
                  Vaši podaci se čuvaju na sigurnim serverima i dostupni su samo ovlašćenim zaposlenima. 
                  Nikada ne prodajemo niti delimo Vaše podatke trećim licima bez Vaše izričite saglasnosti.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">4. Kolačići (Cookies)</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Naš sajt koristi kolačiće radi poboljšanja funkcionalnosti i analize posećenosti. 
                  Korišćenjem sajta saglasni ste sa upotrebom kolačića. Možete kontrolisati podešavanja kolačića 
                  u Vašem pretraživaču.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">5. Vaša prava</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Imate pravo da u svakom trenutku zatražite uvid, ispravku ili brisanje Vaših ličnih podataka 
                  iz naše baze. Za sve zahteve možete nas kontaktirati putem emaila: office@eef.rs.
                </p>
              </section>

              <div className="pt-6 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Poslednje ažuriranje: Januar 2026.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
