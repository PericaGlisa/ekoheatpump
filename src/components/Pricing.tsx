import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const pricingData = {
  monoblockR32: [
    { model: "BLN-B06-F1", power: "2.5-8.3 kW", price: "2,750.00" },
    { model: "BLN-B10-F3", power: "4.2-12.2 kW", price: "3,070.00" },
    { model: "BLN-B14-F3", power: "5.3-16.6 kW", price: "3,590.00" },
    { model: "BLN-B18-F3", power: "6.2-20.5 kW", price: "4,470.00" },
    { model: "BLN-B24-F3", power: "6.5-26.1 kW", price: "5,120.00" },
    { model: "KS6-MB-F1", power: "6.0 kW", price: "2,499.00" },
    { model: "KS8-MB-F1", power: "7.98 kW", price: "2,780.00" },
    { model: "KS10-MB-F1", power: "10.21 kW", price: "3,109.00" },
  ],
  splitR32: [
    { model: "AHb6VR3HP / AHb6VR3HIP", power: "6.0 kW", price: "2,869.00" },
    { model: "AHb8VR3HP / AHb10VR3HIP", power: "8.0 kW", price: "3,110.00" },
    { model: "AHb10VR3HP / AHb10VR3HIP", power: "10.0 kW", price: "3,285.00" },
    { model: "AHb12VR3XP / AHb16VR3XIP", power: "12.0 kW", price: "4,125.00" },
    { model: "AHb14VR3XP / AHb16VR3XIP", power: "14.0 kW", price: "4,327.00" },
    { model: "AHb16VR3XP / AHb16VR3XIP", power: "16.0 kW", price: "4,400.00" },
  ],
  monoblockR290: [
    { model: "ES7-MB-F1", power: "7 kW", price: "3,453.00" },
    { model: "BLN-C06-F1", power: "2.92-9.1 kW", price: "3,070.00" },
    { model: "BLN-C12-F3", power: "4.3-15.2 kW", price: "3,700.00" },
    { model: "BLN-C18-F1/F3", power: "7.24-21.9 kW", price: "4,980.00" },
  ],
  sanitarna: [
    { model: "AXN-16/200 All", power: "Sanitarna voda", price: "1,825.00" },
  ],
};

const PricingTable = ({ data }: { data: typeof pricingData.monoblockR32 }) => (
  <Table>
    <TableHeader>
      <TableRow className="border-border/50 hover:bg-transparent">
        <TableHead className="text-muted-foreground">Model</TableHead>
        <TableHead className="text-muted-foreground">Snaga</TableHead>
        <TableHead className="text-right text-muted-foreground">Ponuda</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((item, index) => (
        <TableRow
          key={index}
          className="border-border/50 hover:bg-primary/5 transition-colors"
        >
          <TableCell className="font-medium text-foreground">{item.model}</TableCell>
          <TableCell className="text-muted-foreground">{item.power}</TableCell>
          <TableCell className="text-right">
            <a href="#kontakt" className="text-sm font-medium text-accent hover:underline">
              Pošaljite upit
            </a>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const Pricing = () => {
  return (
    <section id="cenovnik" className="py-16 sm:py-20 md:py-24 bg-muted/30 relative">
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
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-accent" />
            <span className="text-xs sm:text-sm font-medium">Modeli i snage</span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 font-display">
            Pregled 
            <span className="text-gradient-brand"> modela</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-2">
            Kontaktirajte nas za detaljan cenovnik, posebne ponude i popuste.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="monoblock-r32" className="w-full">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 mb-8 h-auto bg-card">
              <TabsTrigger value="monoblock-r32" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Monoblock R32
              </TabsTrigger>
              <TabsTrigger value="split-r32" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Split R32
              </TabsTrigger>
              <TabsTrigger value="monoblock-r290" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Monoblock R290
              </TabsTrigger>
              <TabsTrigger value="sanitarna" className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Sanitarna
              </TabsTrigger>
            </TabsList>

            <div className="bg-card rounded-xl border border-border/50 shadow-card overflow-hidden">
              <div className="overflow-x-auto">
                <TabsContent value="monoblock-r32" className="mt-0 min-w-[600px] sm:min-w-full">
                  <PricingTable data={pricingData.monoblockR32} />
                </TabsContent>
                <TabsContent value="split-r32" className="mt-0 min-w-[600px] sm:min-w-full">
                  <PricingTable data={pricingData.splitR32} />
                </TabsContent>
                <TabsContent value="monoblock-r290" className="mt-0 min-w-[600px] sm:min-w-full">
                  <PricingTable data={pricingData.monoblockR290} />
                </TabsContent>
                <TabsContent value="sanitarna" className="mt-0 min-w-[600px] sm:min-w-full">
                  <PricingTable data={pricingData.sanitarna} />
                </TabsContent>
              </div>
            </div>
          </Tabs>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          * Ponuda može varirati u zavisnosti od lokacije i uslova montaže. 
          Kontaktirajte nas za besplatnu konsultaciju.
        </motion.p>
      </div>
    </section>
  );
};

export default Pricing;
