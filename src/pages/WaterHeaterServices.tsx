import { Helmet } from "react-helmet-async";
import { Phone, Flame, Zap, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import CallToAction from "@/components/CallToAction";
import waterHeaterImg from "@/assets/water-heater.jpg";

const services = [
  {
    icon: Thermometer,
    title: "Water Heater Repair in Moncton",
    desc: "No hot water? Our Moncton plumbers diagnose and repair all major tank water heater brands fast. We supply the parts and expertise to restore your heat and hot water the same day. Licensed for all NB code requirements.",
  },
  {
    icon: Flame,
    title: "Water Heater Installation in Moncton, NB",
    desc: "Whether you need a new standard tank install or a replacement, our New Brunswick certified technicians handle everything — from city permits to final hookup. We install to-code, every time, using quality supplies from trusted store partners.",
  },
  {
    icon: Zap,
    title: "Tankless Water Heater Upgrades",
    desc: "Save on energy and enjoy endless hot water with a tankless upgrade. Our Moncton companies install leading tankless brands that heat water on demand, cutting your energy bills and increasing your home's value across Greater Moncton, NB.",
  },
];

const WaterHeaterServices = () => (
  <>
    <Helmet>
      <title>Water Heater Repair & Installation Moncton, NB | EasyFlow Plumbing of Moncton.</title>
      <meta name="description" content="Water heater repair, installation & tankless upgrades in Moncton, NB. EasyFlow Plumbing of Moncton. — Restore hot water fast. Call (506) 497-1959." />
      <link rel="canonical" href="https://easyflowplumbingofmoncton.online/water-heater-repair-installation-moncton" />
    </Helmet>

    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={waterHeaterImg} alt="Water heater installation in Moncton" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      <div className="container relative py-16 md:py-24">
        <h1 className="mb-4 max-w-2xl text-3xl font-bold text-primary-foreground md:text-4xl">
          Water Heater Repair &amp; Installation in Moncton, NB
        </h1>
        <p className="mb-6 max-w-xl text-primary-foreground/90">
          From emergency heat restoration to energy-efficient tankless upgrades, {BUSINESS.name} keeps Moncton homes supplied with reliable hot water year-round.
        </p>
        <Button variant="cta" size="xl" asChild>
          <a href={BUSINESS.phoneTel}>
            <Phone className="h-5 w-5" />
            Call Now – {BUSINESS.phone}
          </a>
        </Button>
      </div>
    </section>

    <section className="py-16">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border bg-card p-6">
              <s.icon className="mb-3 h-8 w-8 text-accent" />
              <h2 className="mb-2 text-lg font-bold">{s.title}</h2>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CallToAction />
  </>
);

export default WaterHeaterServices;
