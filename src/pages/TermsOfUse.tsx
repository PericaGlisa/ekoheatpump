import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ScrollText, CheckCircle, AlertCircle, Scale } from "lucide-react";

const TermsOfUse = () => {
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
              <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-accent/10 mb-6">
                <ScrollText className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-display">
                Uslovi <span className="text-gradient-gold">korišćenja</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Pravila i uslovi korišćenja EKO Elektrofrigo web prezentacije.
              </p>
            </div>

            <div className="space-y-8 bg-card rounded-2xl p-6 sm:p-10 border border-border/50 shadow-sm">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Scale className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">1. Opšte odredbe</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Pristupanjem i korišćenjem ovog sajta prihvatate ove Uslove korišćenja u celosti. 
                  Sadržaj sajta je informativnog karaktera i EKO Elektrofrigo zadržava pravo izmene sadržaja 
                  i uslova korišćenja bez prethodne najave.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">2. Intelektualna svojina</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Svi materijali na ovom sajtu, uključujući tekstove, fotografije, logotipe i grafička rešenja, 
                  zaštićeni su autorskim pravima i intelektualna su svojina kompanije EKO Elektrofrigo ili njenih partnera. 
                  Zabranjeno je neovlašćeno kopiranje i distribucija sadržaja.
                </p>
              </section>

              <section>
                <div className="flex items-center gap-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">3. Odricanje od odgovornosti</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  EKO Elektrofrigo se trudi da informacije na sajtu budu tačne i ažurne, ali ne garantujemo:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Apsolutnu tačnost svih tehničkih specifikacija (podložne promenama proizvođača)</li>
                  <li>Neprekidnu dostupnost sajta</li>
                  <li>Da sajt ne sadrži greške ili viruse</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">4. Cene i ponude</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sve cene prikazane na sajtu su informativnog karaktera, izražene u evrima (EUR) bez PDV-a. 
                  Zvaničnu ponudu dobijate isključivo direktnim kontaktom sa našim prodajnim timom. 
                  Zadržavamo pravo promene cena bez prethodne najave.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">5. Linkovi ka trećim stranama</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Sajt može sadržati linkove ka drugim web sajtovima. EKO Elektrofrigo nije odgovoran 
                  za sadržaj ili politiku privatnosti tih sajtova.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-bold text-foreground mb-4">6. Nadležnost suda</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Za sve eventualne sporove koji mogu proisteći iz korišćenja ovog sajta nadležan je sud u Beogradu, 
                  uz primenu prava Republike Srbije.
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

export default TermsOfUse;
