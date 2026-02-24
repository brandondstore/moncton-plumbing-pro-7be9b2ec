import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, Flame, Zap, Thermometer, Droplets, Wrench, CheckCircle } from "lucide-react";
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

const signs = [
  { title: "No Hot Water or Lukewarm Water", text: "If your taps run cold or only lukewarm, the heating element, thermostat, or gas igniter may have failed. Our Moncton technicians diagnose the root cause quickly and carry common replacement parts on every service call for same-day heat restoration." },
  { title: "Strange Noises or Rumbling", text: "Banging, popping, or rumbling sounds usually indicate sediment buildup at the bottom of the tank. Left untreated, this reduces efficiency and can cause premature tank failure. We flush and descale your unit to restore quiet, efficient operation." },
  { title: "Rusty or Discoloured Water", text: "Brown or rusty hot water often means the anode rod has corroded or the tank itself is deteriorating. We inspect and replace anode rods as a cost-effective fix, or recommend replacement if the tank is beyond repair." },
];

const steps = [
  { num: "1", title: "Assessment", text: "We inspect your current setup, water usage patterns, and available fuel sources to recommend the best unit." },
  { num: "2", title: "Installation", text: "Our licensed NB technicians handle permits, old unit removal, and professional installation to code." },
  { num: "3", title: "Testing", text: "We verify water temperature, pressure, and all connections before leaving. Your hot water is guaranteed." },
];

const faqs = [
  { q: "How long does a water heater last?", a: "Traditional tank water heaters typically last 8-12 years in Moncton. Tankless models last 15-20 years. Hard water and sediment buildup in NB can shorten lifespan. Regular maintenance extends the life of your unit." },
  { q: "When should I replace vs. repair my water heater?", a: "If your heater is under 8 years old, repairs usually make sense. If it's over 10 years old or repairs exceed 50% of replacement cost, replacement is more cost-effective. We provide honest assessments to help you decide." },
  { q: "What are the benefits of a tankless water heater?", a: "Tankless heaters provide endless hot water, use 24-34% less energy, take up less space, and last longer. For larger families or homes with high hot water demand, they save significantly on energy bills over time." },
  { q: "How much does water heater installation cost?", a: `Installation costs vary based on unit type (tank vs. tankless), your existing plumbing, and permits. Call us at ${BUSINESS.phone} for a free estimate. We provide transparent pricing before any work begins.` },
  { q: "Can you install a water heater in an emergency?", a: `Yes. No hot water is a true emergency. Call ${BUSINESS.name} at ${BUSINESS.phone} anytime, day or night. We keep emergency units in stock and can often install same-day.` },
];

const WaterHeaterServices = () => (
  <>
    <Helmet>
      <title>Water Heater Repair & Installation Moncton, NB | EasyFlow Plumbing of Moncton.</title>
      <meta name="description" content="Water heater repair, installation & tankless upgrades in Moncton, NB. EasyFlow Plumbing of Moncton. — Restore hot water fast. Call (506) 497-1959." />
      <link rel="canonical" href="https://easyflowplumbingofmoncton.online/water-heater-repair-installation-moncton" />

      <meta property="og:title" content="Water Heater Repair & Installation Moncton, NB | EasyFlow Plumbing of Moncton." />
      <meta property="og:description" content="Water heater repair, installation & tankless upgrades in Moncton, NB. Restore hot water fast. Call (506) 497-1959." />
      <meta property="og:url" content="https://easyflowplumbingofmoncton.online/water-heater-repair-installation-moncton" />
      <meta property="og:image" content="https://easyflowplumbingofmoncton.online/images/water-heater.jpg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://easyflowplumbingofmoncton.online/water-heater-repair-installation-moncton",
        "name": "EasyFlow Plumbing of Moncton.",
        "description": "Water heater repair, installation, and tankless upgrades in Moncton, NB",
        "url": "https://easyflowplumbingofmoncton.online/water-heater-repair-installation-moncton",
        "telephone": "+1-506-497-1959",
        "email": "support@easyflowplumbingofmoncton.online",
        "address": { "@type": "PostalAddress", "streetAddress": "15 Roy Brown St", "addressLocality": "Moncton", "addressRegion": "NB", "postalCode": "E1C 0M4", "addressCountry": "CA" },
        "image": "https://easyflowplumbingofmoncton.online/images/water-heater.jpg",
        "serviceArea": [{ "@type": "City", "name": "Moncton" }, { "@type": "City", "name": "Dieppe" }, { "@type": "Town", "name": "Riverview" }, { "@type": "Town", "name": "Shediac" }],
        "hasOfferCatalog": {
          "@type": "OfferCatalog", "name": "Water Heater Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Repair" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Installation" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tankless Water Heater Upgrades" } }
          ]
        },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" }
      })}
      </script>

      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org", "@type": "Service",
        "name": "Water Heater Repair & Installation",
        "description": "Professional water heater repair and installation services in Moncton, NB, available 24/7",
        "areaServed": [{ "@type": "City", "name": "Moncton" }, { "@type": "City", "name": "Dieppe" }, { "@type": "Town", "name": "Riverview" }],
        "provider": { "@type": "Plumber", "name": "EasyFlow Plumbing of Moncton.", "telephone": "+1-506-497-1959", "url": "https://easyflowplumbingofmoncton.online" },
        "image": "https://easyflowplumbingofmoncton.online/images/water-heater.jpg"
      })}
      </script>

      <script type="application/ld+json">
      {JSON.stringify({ "@context": "https://schema.org", "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "47", "bestRating": "5", "worstRating": "1", "itemReviewed": { "@type": "Service", "name": "Water Heater Repair & Installation", "provider": { "@type": "Plumber", "name": "EasyFlow Plumbing of Moncton." } } })}
      </script>

      <script type="application/ld+json">
      {JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}
      </script>

      <script type="application/ld+json">
      {JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://easyflowplumbingofmoncton.online/" },
        { "@type": "ListItem", "position": 2, "name": "Water Heater Services", "item": "https://easyflowplumbingofmoncton.online/water-heater-repair-installation-moncton" }
      ] })}
      </script>
    </Helmet>

    {/* Hero */}
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
          <a href={BUSINESS.phoneTel}><Phone className="h-5 w-5" />Call Now – {BUSINESS.phone}</a>
        </Button>
      </div>
    </section>

    {/* Introduction */}
    <section className="py-16">
      <div className="container max-w-4xl">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">Reliable Hot Water for Every Moncton Home</h2>
        <p className="mb-4 text-foreground/90">
          Your water heater works harder than almost any other appliance in your home — especially during New Brunswick's long, cold winters. When it fails, you need a fast, reliable solution from a company you can trust. {BUSINESS.name} provides expert water heater repair, installation, and supply services across Greater Moncton.
        </p>
        <p className="text-foreground/90">
          Whether your tank is leaking, your heat isn't consistent, or you're ready to upgrade to an energy-efficient tankless system, our licensed NB technicians deliver professional results backed by quality parts and transparent pricing. We install and service all major brands and keep common supplies in stock for same-day repair.
        </p>
      </div>
    </section>

    {/* Service Cards */}
    <section className="bg-secondary py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Our Water Heater Services in Moncton</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.title} className="rounded-lg border bg-card p-6">
              <s.icon className="mb-3 h-8 w-8 text-accent" />
              <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Signs You Need Service */}
    <section className="py-16">
      <div className="container max-w-4xl">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Signs Your Water Heater Needs Attention</h2>
        <div className="space-y-6">
          {signs.map((s) => (
            <div key={s.title} className="rounded-lg border bg-card p-6">
              <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="bg-secondary py-16">
      <div className="container max-w-4xl">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Why Choose {BUSINESS.name} for Water Heaters?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Same-day emergency repair available", "All major brands serviced & installed", "Licensed & insured NB technicians", "Transparent pricing — no surprises", "Energy-efficient tankless upgrades", "Quality parts & supplies in stock"].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-lg bg-card p-4">
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* What to Expect */}
    <section className="py-16">
      <div className="container max-w-4xl">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Our Installation Process</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.num} className="rounded-lg border bg-card p-6 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-accent-foreground">{s.num}</div>
              <h3 className="mb-2 font-bold">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="bg-secondary py-16">
      <div className="container max-w-3xl">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Water Heater FAQ — Moncton, NB</h2>
        <div className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-lg border bg-card p-6">
              <h3 className="mb-2 text-lg font-bold">{f.q}</h3>
              <p className="text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Related Services */}
    <section className="py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Related Services</h2>
        <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
          <Link to="/drain-cleaning-sewer-moncton" className="flex items-center gap-4 rounded-lg border bg-card p-5 transition-shadow hover:shadow-md">
            <Droplets className="h-8 w-8 shrink-0 text-accent" />
            <div>
              <h3 className="font-bold">Drain &amp; Sewer Services</h3>
              <p className="text-sm text-muted-foreground">Emergency unclogging &amp; sewer clearing</p>
            </div>
          </Link>
          <Link to="/plumbing-repairs-fixtures-moncton" className="flex items-center gap-4 rounded-lg border bg-card p-5 transition-shadow hover:shadow-md">
            <Wrench className="h-8 w-8 shrink-0 text-accent" />
            <div>
              <h3 className="font-bold">Repairs &amp; Installations</h3>
              <p className="text-sm text-muted-foreground">Leak detection, pipes &amp; fixtures</p>
            </div>
          </Link>
        </div>
      </div>
    </section>

    <CallToAction />
  </>
);

export default WaterHeaterServices;
