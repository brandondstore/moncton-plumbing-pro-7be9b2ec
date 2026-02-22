import { Phone, AlertTriangle, Video, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import CallToAction from "@/components/CallToAction";
import drainImg from "@/assets/drain-service.jpg";

const services = [
  {
    icon: AlertTriangle,
    title: "Emergency Drain Unclogging in Moncton",
    desc: "A clogged drain can't wait. Our Moncton emergency plumbers arrive fast with professional-grade equipment to clear even the toughest blockages. We supply the tools and expertise to prevent sewage backups, water damage, and the mess that comes with slow-draining pipes in your NB home.",
  },
  {
    icon: Waves,
    title: "Sewer Main Line Clearing in Moncton, NB",
    desc: "Tree roots, grease buildup, and aging pipes can block your city sewer main. Our licensed New Brunswick technicians use powerful hydro-jetting and mechanical clearing to restore full flow. We install long-term solutions so the problem doesn't come back to your Moncton property.",
  },
  {
    icon: Video,
    title: "Video Camera Pipe Inspections",
    desc: "Stop guessing where the problem is. Our HD video camera inspections let us see inside your pipes to find cracks, blockages, and damage without digging. This store of diagnostic technology helps Moncton companies and homeowners save money on unnecessary repairs.",
  },
];

const DrainServices = () => (
  <>
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={drainImg} alt="Drain cleaning service in Moncton" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      <div className="container relative py-16 md:py-24">
        <h1 className="mb-4 max-w-2xl text-3xl font-bold text-primary-foreground md:text-4xl">
          Drain Cleaning &amp; Sewer Services in Moncton, NB
        </h1>
        <p className="mb-6 max-w-xl text-primary-foreground/90">
          Blocked drain? Sewer backup? Don't let it ruin your home. {BUSINESS.name} provides fast emergency drain and sewer services across Greater Moncton, New Brunswick.
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

export default DrainServices;
