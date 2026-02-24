import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, Search, PipetteIcon, Wrench, Droplets, Flame, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import CallToAction from "@/components/CallToAction";
import repairImg from "@/assets/general-repair.jpg";

const services = [
  {
    icon: Search,
    title: "Leak Detection in Moncton, NB",
    desc: "Hidden leaks cause major water damage and mold. Our Moncton leak detection experts use advanced equipment to find leaks behind walls, under floors, and in your city water supply lines — without tearing up your home.",
  },
  {
    icon: PipetteIcon,
    title: "Pipe Repair & Sump Pump Service",
    desc: "From burst pipes in New Brunswick winters to sump pump repair and install, our NB licensed plumbers protect your Moncton home from flooding. We supply and install commercial-grade sump pumps built for the local climate.",
  },
  {
    icon: Wrench,
    title: "Toilet, Sink & Faucet Installations in Moncton",
    desc: "Upgrade your bathroom or kitchen with professional fixture installations. We supply and install premium toilets, sinks, and faucets across Moncton. Our companies ensure every install meets NB plumbing code for a perfect, leak-free finish.",
  },
];

const problems = [
  { title: "Hidden Water Leaks", text: "Undetected leaks behind walls or under foundations can cause thousands of dollars in damage. We use acoustic listening devices, thermal imaging, and moisture meters to pinpoint leaks within inches — minimizing damage and repair costs for Moncton homeowners." },
  { title: "Frozen or Burst Pipes", text: "New Brunswick winters are brutal on plumbing. When pipes freeze or burst, you need immediate response. Our emergency team arrives fast with the tools and supplies to thaw, repair, or replace damaged pipes before water damage spreads." },
  { title: "Worn-Out Fixtures", text: "Dripping faucets, running toilets, and leaky showerheads waste water and money. We supply and install quality replacement fixtures from trusted brands, ensuring every installation meets NB plumbing code and lasts for years." },
];

const steps = [
  { num: "1", title: "Inspection", text: "We assess the issue using advanced diagnostic tools and provide an honest evaluation of what needs to be done." },
  { num: "2", title: "Repair or Install", text: "Our licensed NB plumbers complete the work using quality parts and supplies, following all local codes." },
  { num: "3", title: "Quality Check", text: "We test everything thoroughly and clean up the work area. Your satisfaction is guaranteed." },
];

const faqs = [
  { q: "How do you detect hidden water leaks?", a: "We use acoustic listening devices, thermal imaging, and moisture meters to pinpoint leaks without tearing into walls. If a leak is inside the walls, we can often locate it within a few inches, minimizing damage." },
  { q: "What causes low water pressure in Moncton homes?", a: "Common causes include mineral buildup in lines, shut-off valve issues, leaks, or old corroded pipes. We diagnose the problem and recommend the best solution, whether it's cleaning aerators, replacing valves, or replumbing affected areas." },
  { q: "Is it better to repair or replace old pipes?", a: "If you have frequent leaks or rusty water, replacement is usually better long-term. Modern PEX or copper pipe lasts 50+ years. We evaluate your system and provide honest recommendations based on age, material, and failure patterns." },
  { q: "How much does a plumbing fixture installation cost?", a: `Costs depend on the fixture type, your plumbing setup, and whether any modifications are needed. Faucet replacement typically runs $150-400, while toilet installation runs $200-500. Call ${BUSINESS.phone} for a free estimate.` },
  { q: "Do you offer financing for large plumbing projects?", a: "Yes. We work with customers to find solutions within their budget. Call to discuss options for larger projects like pipe replacement or sump pump installation." },
];

const GeneralRepairs = () => (
  <>
    <Helmet>
      <title>Plumbing Repairs & Fixture Installations Moncton, NB | EasyFlow Plumbing of Moncton.</title>
      <meta name="description" content="Leak detection, pipe repair, sump pumps & fixture installations in Moncton, NB. EasyFlow Plumbing of Moncton. — Protect your home. Call (506) 497-1959." />
      <link rel="canonical" href="https://easyflowplumbingofmoncton.online/plumbing-repairs-fixtures-moncton" />

      <meta property="og:title" content="Plumbing Repairs & Fixture Installations Moncton, NB | EasyFlow Plumbing of Moncton." />
      <meta property="og:description" content="Leak detection, pipe repair, sump pumps & fixture installations in Moncton, NB. Call (506) 497-1959." />
      <meta property="og:url" content="https://easyflowplumbingofmoncton.online/plumbing-repairs-fixtures-moncton" />
      <meta property="og:image" content="https://easyflowplumbingofmoncton.online/images/general-repair.jpg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org", "@type": "LocalBusiness",
        "@id": "https://easyflowplumbingofmoncton.online/plumbing-repairs-fixtures-moncton",
        "name": "EasyFlow Plumbing of Moncton.",
        "description": "Leak detection, pipe repair, and fixture installation services in Moncton, NB",
        "url": "https://easyflowplumbingofmoncton.online/plumbing-repairs-fixtures-moncton",
        "telephone": "+1-506-497-1959", "email": "support@easyflowplumbingofmoncton.online",
        "address": { "@type": "PostalAddress", "streetAddress": "15 Roy Brown St", "addressLocality": "Moncton", "addressRegion": "NB", "postalCode": "E1C 0M4", "addressCountry": "CA" },
        "image": "https://easyflowplumbingofmoncton.online/images/general-repair.jpg",
        "serviceArea": [{ "@type": "City", "name": "Moncton" }, { "@type": "City", "name": "Dieppe" }, { "@type": "Town", "name": "Riverview" }, { "@type": "Town", "name": "Shediac" }],
        "hasOfferCatalog": { "@type": "OfferCatalog", "name": "Plumbing Repairs & Installations", "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Leak Detection & Repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pipe Repair" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fixture Installation" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sump Pump Installation" } }
        ] },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" }
      })}
      </script>

      <script type="application/ld+json">
      {JSON.stringify({ "@context": "https://schema.org", "@type": "Service", "name": "Plumbing Repairs & Fixture Installation", "description": "Professional plumbing repair and fixture installation services in Moncton, NB", "areaServed": [{ "@type": "City", "name": "Moncton" }, { "@type": "City", "name": "Dieppe" }, { "@type": "Town", "name": "Riverview" }], "provider": { "@type": "Plumber", "name": "EasyFlow Plumbing of Moncton.", "telephone": "+1-506-497-1959", "url": "https://easyflowplumbingofmoncton.online" }, "image": "https://easyflowplumbingofmoncton.online/images/general-repair.jpg" })}
      </script>

      <script type="application/ld+json">
      {JSON.stringify({ "@context": "https://schema.org", "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": "47", "bestRating": "5", "worstRating": "1", "itemReviewed": { "@type": "Service", "name": "Plumbing Repairs & Fixture Installation", "provider": { "@type": "Plumber", "name": "EasyFlow Plumbing of Moncton." } } })}
      </script>

      <script type="application/ld+json">
      {JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) })}
      </script>

      <script type="application/ld+json">
      {JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://easyflowplumbingofmoncton.online/" },
        { "@type": "ListItem", "position": 2, "name": "Plumbing Repairs & Installations", "item": "https://easyflowplumbingofmoncton.online/plumbing-repairs-fixtures-moncton" }
      ] })}
      </script>
    </Helmet>

    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={repairImg} alt="Plumbing repair in Moncton" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      <div className="container relative py-16 md:py-24">
        <h1 className="mb-4 max-w-2xl text-3xl font-bold text-primary-foreground md:text-4xl">
          Plumbing Repairs &amp; Fixture Installations in Moncton, NB
        </h1>
        <p className="mb-6 max-w-xl text-primary-foreground/90">
          Protect your home from water damage with expert repairs. {BUSINESS.name} delivers quality fixture supplies and installations across the city of Moncton.
        </p>
        <Button variant="cta" size="xl" asChild>
          <a href={BUSINESS.phoneTel}><Phone className="h-5 w-5" />Call Now – {BUSINESS.phone}</a>
        </Button>
      </div>
    </section>

    {/* Introduction */}
    <section className="py-16">
      <div className="container max-w-4xl">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">Expert Plumbing Repairs for Moncton Homeowners</h2>
        <p className="mb-4 text-foreground/90">
          From a dripping faucet to a major pipe burst, plumbing problems demand fast, professional attention. Left unaddressed, even minor leaks can lead to water damage, mold growth, and costly structural repairs. {BUSINESS.name} provides comprehensive plumbing repair and fixture installation services across Greater Moncton, NB.
        </p>
        <p className="text-foreground/90">
          Our licensed New Brunswick plumbers carry the tools, training, and quality supplies needed to diagnose and fix any plumbing issue — the first time. Whether you need an emergency pipe repair, a new toilet install, or a complete bathroom fixture upgrade, we deliver professional workmanship backed by honest pricing and a satisfaction guarantee.
        </p>
      </div>
    </section>

    {/* Service Cards */}
    <section className="bg-secondary py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Our Repair &amp; Installation Services</h2>
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

    {/* Common Problems */}
    <section className="py-16">
      <div className="container max-w-4xl">
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Common Plumbing Problems We Solve</h2>
        <div className="space-y-6">
          {problems.map((p) => (
            <div key={p.title} className="rounded-lg border bg-card p-6">
              <h3 className="mb-2 text-lg font-bold">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="bg-secondary py-16">
      <div className="container max-w-4xl">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Why Choose {BUSINESS.name}?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Licensed & insured NB plumbers", "24/7 emergency repair response", "Advanced leak detection technology", "Quality fixtures & supplies", "Transparent, upfront pricing", "Satisfaction guaranteed"].map((item) => (
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
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Our Repair Process</h2>
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
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Plumbing Repairs FAQ — Moncton, NB</h2>
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
          <Link to="/water-heater-repair-installation-moncton" className="flex items-center gap-4 rounded-lg border bg-card p-5 transition-shadow hover:shadow-md">
            <Flame className="h-8 w-8 shrink-0 text-accent" />
            <div>
              <h3 className="font-bold">Water Heater Services</h3>
              <p className="text-sm text-muted-foreground">Repair, installation &amp; tankless upgrades</p>
            </div>
          </Link>
        </div>
      </div>
    </section>

    <CallToAction />
  </>
);

export default GeneralRepairs;
