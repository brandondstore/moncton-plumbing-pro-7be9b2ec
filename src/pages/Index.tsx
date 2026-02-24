import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ShieldCheck, Clock, MapPin, Star, Droplets, Flame, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import CallToAction from "@/components/CallToAction";
import heroImg from "@/assets/hero-plumber.jpg";
import drainImg from "@/assets/drain-service.jpg";
import waterHeaterImg from "@/assets/water-heater.jpg";
import repairImg from "@/assets/general-repair.jpg";

const trustItems = [
  { icon: ShieldCheck, text: "Fully Licensed & Insured in NB" },
  { icon: Clock, text: "24/7 Emergency Response" },
  { icon: MapPin, text: "Local Moncton Experts" },
];

const services = [
  {
    to: "/drain-cleaning-sewer-moncton",
    img: drainImg,
    icon: Droplets,
    title: "Drain & Sewer Services",
    desc: "Emergency drain unclogging, sewer line clearing & video inspections in Moncton.",
  },
  {
    to: "/water-heater-repair-installation-moncton",
    img: waterHeaterImg,
    icon: Flame,
    title: "Water Heater Services",
    desc: "Tank & tankless water heater repair, install & heat supply for Moncton homes.",
  },
  {
    to: "/plumbing-repairs-fixtures-moncton",
    img: repairImg,
    icon: Wrench,
    title: "Repairs & Installations",
    desc: "Leak detection, pipe repair, sump pumps & fixture installations across NB.",
  },
];

const testimonials = [
  { name: "Sarah M.", text: "Our basement drain backed up at midnight. EasyFlow had someone here within the hour. Incredible service for the city of Moncton!", rating: 5 },
  { name: "David K.", text: "Professional install of our new tankless water heater. They supplied everything and the heat efficiency has been amazing. Best plumbing companies in NB.", rating: 5 },
  { name: "Julie T.", text: "Fixed a stubborn leak that two other companies couldn't find. Fair price, honest work. Highly recommend this Moncton store of plumbing expertise.", rating: 5 },
];

const faqs = [
  { q: "Running Toilet: Why won't it stop flushing?", a: "A running toilet is usually caused by a faulty flapper valve or a worn-out fill valve. We can quickly diagnose the issue to save you money on your water bill." },
  { q: "Slow Drains: What is causing the backup?", a: "Slow drains are typically caused by a buildup of hair, grease, or debris. Professional cleaning is the best way to clear the blockage and prevent a total backup." },
  { q: "Low Water Pressure: Why is my pressure dropping?", a: "Low water pressure can be caused by shut-off valve issues, leaks, or mineral buildup. We find the source of the drop to restore your home's water flow." },
];

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Plumber in Moncton, NB | 24/7 Emergency | EasyFlow Plumbing of Moncton.</title>
        <meta name="description" content="EasyFlow Plumbing of Moncton. — Fast, reliable 24/7 plumbing in Moncton, NB. Drain cleaning, water heater repair & installation, and general plumbing services. Call (506) 497-1959." />
        <link rel="canonical" href="https://easyflowplumbingofmoncton.online/" />

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://easyflowplumbingofmoncton.online/" }
          ]
        })}
        </script>
      </Helmet>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Professional plumber working in a Moncton home" className="h-full w-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="container relative py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-primary-foreground md:text-5xl">
              Fast, Reliable Plumbing in Moncton When You Need It Most
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
              {BUSINESS.name} — your trusted local plumber in Greater Moncton, New Brunswick. Licensed, insured, and ready to supply expert service 24/7.
            </p>
            <Button variant="cta" size="xl" asChild>
              <a href={BUSINESS.phoneTel}><Phone className="h-5 w-5" />Call Now – {BUSINESS.phone}</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b bg-card py-6">
        <div className="container flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {trustItems.map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-sm font-medium text-foreground">
              <item.icon className="h-5 w-5 text-trust" />
              {item.text}
            </div>
          ))}
        </div>
      </section>

      {/* Service Grid */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-2 text-center text-2xl font-bold md:text-3xl">Plumbing Services in Moncton, New Brunswick</h2>
          <p className="mb-10 text-center text-muted-foreground">From emergency repairs to complete installations, our city plumbing companies have you covered with top-quality supplies and service.</p>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((s) => (
              <Link key={s.to} to={s.to} className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-shadow hover:shadow-md">
                <div className="relative h-48 overflow-hidden">
                  <img src={s.img} alt={s.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <s.icon className="h-5 w-5 text-accent" />
                    <h3 className="font-bold">{s.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">What Moncton Homeowners Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-lg bg-card p-6 shadow-sm">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-sm text-foreground/90">"{t.text}"</p>
                <p className="text-sm font-semibold">— {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Common Plumbing Questions in Moncton</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="rounded-lg border bg-card p-6">
                <h3 className="mb-2 text-lg font-bold">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Index;
