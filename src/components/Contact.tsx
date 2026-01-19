import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresa",
    content: "Svetolika Nikačevića 11, Beograd, Srbija",
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "+381 11 375 72 87 / +381 11 375 72 88",
  },
  {
    icon: Mail,
    title: "Email",
    content: "office@eef.rs",
  },
  {
    icon: Clock,
    title: "Radno vreme",
    content: "Pon - Pet: 07:30 - 15:30",
  },
];

const emailContacts = [
  { label: "Office", email: "office@eef.rs" },
  { label: "Prodaja", email: "prodaja@eef.rs" },
  { label: "Inženjering", email: "tehnika@eef.rs" },
  { label: "Servis", email: "servis@eef.rs" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const recipients = "damnjanovic.nikola@eef.rs,office@eef.rs";
    const subject = encodeURIComponent(`Upit sa sajta - ${formData.name}`);
    const body = encodeURIComponent(
      `Ime i prezime: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Telefon: ${formData.phone || 'Nije unet'}\n\n` +
      `Poruka:\n${formData.message}`
    );
    
    window.location.href = `mailto:${recipients}?subject=${subject}&body=${body}`;
    
    toast({
      title: "Email klijent otvoren!",
      description: "Pošaljite email da bismo primili Vaš upit.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="kontakt" className="py-16 sm:py-20 md:py-24 bg-muted/30 relative">
      <div className="container mx-auto px-4 sm:px-6">
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
            <span className="text-xs sm:text-sm font-medium">Kontakt</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 font-display">
            Pošaljite nam 
            <span className="text-gradient-brand"> upit</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Imate pitanja? Potrebna Vam je ponuda? Javite nam se i odgovorićemo 
            u najkraćem mogućem roku.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/50"
              >
                <div className={`w-12 h-12 rounded-xl ${index % 2 === 0 ? 'bg-gradient-hero' : 'bg-gradient-accent'} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <p className="text-muted-foreground">{item.content}</p>
                </div>
              </div>
            ))}

            <div className="p-6 rounded-xl bg-card border border-border/50">
              <h4 className="font-semibold text-foreground mb-4">Kontaktirajte nas direktno</h4>
              <div className="space-y-2 text-sm">
                {emailContacts.map((item) => (
                  <div key={item.email} className="flex items-center gap-2">
                    <span className="font-medium text-foreground">{item.label}:</span>
                    <a href={`mailto:${item.email}`} className="text-primary hover:underline">{item.email}</a>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-brand text-primary-foreground">
              <h4 className="font-semibold text-lg mb-2">Besplatna konsultacija</h4>
              <p className="text-primary-foreground/80 text-sm">
                Zakažite besplatan termin sa našim stručnjacima za procenu 
                Vaših potreba i odabir idealne toplotne pumpe.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-2xl bg-card border border-border/50 shadow-card"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Ime i prezime *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Vaše ime"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email adresa *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vas@email.com"
                    required
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Telefon
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+381 ..."
                  className="bg-background"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Vaša poruka *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Opišite Vaše potrebe, kvadraturu prostora, trenutni sistem grejanja..."
                  rows={5}
                  required
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-accent hover:opacity-90 transition-opacity gap-2"
              >
                <Send className="w-5 h-5" />
                Pošalji upit
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
