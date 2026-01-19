import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Koliko mogu uštedeti sa toplotnom pumpom?",
    answer: "Toplotne pumpe mogu smanjiti troškove grejanja za 50-80% u poređenju sa tradicionalnim sistemima. Tačna ušteda zavisi od veličine prostora, izolacije objekta i prethodnog načina grejanja. Naš kalkulator uštede može Vam dati precizniju procenu.",
  },
  {
    question: "Koja je razlika između R32 i R290 rashladnih gasova?",
    answer: "R32 je popularan rashladni gas sa niskim GWP (Global Warming Potential) od 675, dok je R290 (propan) prirodni gas sa izuzetno niskim GWP od samo 3. R290 je ekološki prihvatljiviji, ali zahteva posebne sigurnosne mere zbog zapaljivosti. Oba su odlični izbori za efikasno grejanje.",
  },
  {
    question: "Da li toplotna pumpa radi i na niskim temperaturama?",
    answer: "Da! Moderne toplotne pumpe efikasno rade čak i na temperaturama do -25°C. Naši modeli koriste inverter tehnologiju koja automatski prilagođava snagu uslovima, obezbeđujući konstantan komfor tokom najhladnijih zimskih dana.",
  },
  {
    question: "Koliko traje instalacija toplotne pumpe?",
    answer: "Instalacija monoblock sistema obično traje 1-2 dana, dok split sistemi mogu zahtevati 2-3 dana. Vreme zavisi od kompleksnosti instalacije i pripremljenosti lokacije. Naš tim će Vam dati tačnu procenu nakon procene lokacije.",
  },
  {
    question: "Koja je garancija na toplotne pumpe?",
    answer: "Nudimo do 5 godina garancije na sve naše toplotne pumpe. Garancija pokriva kompresor i ključne komponente. Dodatno, pružamo podršku i servis nakon isteka garantnog roka po povoljnim cenama.",
  },
  {
    question: "Da li je potrebno veliko dvorište za instalaciju?",
    answer: "Ne obavezno. Monoblock sistemi zauzimaju prostor od samo 1m², dok split sistemi omogućavaju fleksibilniji raspored komponenti. Možemo pronaći rešenje za gotovo svaki prostor - kontaktirajte nas za besplatnu procenu.",
  },
  {
    question: "Kako se održava toplotna pumpa?",
    answer: "Toplotne pumpe zahtevaju minimalno održavanje. Preporučujemo godišnji servis koji uključuje čišćenje filtera, proveru rashladnog gasa i pregled električnih komponenti. Naš servisni tim nudi povoljne pakete održavanja.",
  },
  {
    question: "Da li mogu koristiti toplotnu pumpu i za hlađenje?",
    answer: "Apsolutno! Sve naše toplotne pumpe imaju reverzibilan rad, što znači da mogu i da greju i da hlade Vaš prostor. Leti jednostavno prebacite režim i uživajte u prijatnoj klimi bez potrebe za dodatnim klima uređajima.",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-effect mb-4 sm:mb-6"
          >
            <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-xs sm:text-sm font-medium">Česta pitanja</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 font-display">
            Imate 
            <span className="text-gradient-brand"> pitanja?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Pronađite odgovore na najčešća pitanja o toplotnim pumpama, 
            instalaciji i održavanju.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="premium-card border-0 px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors py-6 [&[data-state=open]]:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Still Have Questions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="premium-card max-w-2xl mx-auto p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center flex-shrink-0">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-bold text-foreground mb-2">
                Još uvek imate pitanja?
              </h3>
              <p className="text-muted-foreground">
                Naš tim je tu da Vam pomogne. Kontaktirajte nas za besplatnu konsultaciju.
              </p>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:shadow-glow-primary transition-all duration-300"
              asChild
            >
              <a href="#kontakt">
                Kontaktirajte nas
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
