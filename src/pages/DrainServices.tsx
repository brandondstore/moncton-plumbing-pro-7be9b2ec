import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, AlertTriangle, Video, Waves, Flame, Wrench, CheckCircle } from "lucide-react";
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

const problems = [
  {
    title: "Hair & Soap Buildup in Bathroom Drains",
    text: "The most common cause of slow bathroom drains in Moncton homes. Hair combines with soap residue to create stubborn blockages. Our technicians use professional-grade drain snakes and hydro-jetting to clear the buildup completely, preventing future clogs.",
  },
  {
    title: "Grease Accumulation in Kitchen Drains",
    text: "Grease solidifies as it cools, coating your drain pipes and creating blockages that grow over time. Professional hydro-jetting at high pressure is the only way to safely remove years of grease buildup without damaging your pipes.",
  },
  {
    title: "Root Intrusion in Sewer Lines",
    text: "Tree roots seek out moisture and can penetrate small cracks in underground sewer lines. This is a serious issue in older Moncton properties. Our HD video camera inspections pinpoint root damage, and our hydro-jetting or mechanical clearing removes the roots without excavation.",
  },
];

const steps = [
  { num: "1", title: "Diagnosis (15–30 minutes)", text: "We perform a video camera inspection to identify the exact location and cause of the blockage." },
  { num: "2", title: "Treatment (30–90 minutes)", text: "Using hydro-jetting or mechanical clearing, we remove the blockage and clear the entire line." },
  { num: "3", title: "Verification (10–15 minutes)", text: "We re-inspect with our camera to confirm the drain is fully clear and there are no remaining issues." },
];

const faqs = [
  { q: "How long does professional drain cleaning take?", a: "Most residential drain cleaning in Moncton takes 1-2 hours. Emergency sewer main clearing may take 2-4 hours depending on the severity and location of the blockage. We always provide a time estimate before starting work." },
  { q: "What causes sewer backups in Moncton homes?", a: "Common causes include tree root intrusion (especially in older homes), grease buildup, collapsed pipes, and debris accumulation. Our video camera inspection pinpoints the exact cause so we can provide the right solution for your property." },
  { q: "Is hydro-jetting safe for older pipes?", a: "Yes. Our technicians assess your pipes first and adjust water pressure accordingly. For pipes that can't handle hydro-jetting, we use mechanical clearing methods. We always prioritize your plumbing system's integrity." },
  { q: "How often should I have my drains professionally cleaned?", a: "Most homeowners benefit from professional drain cleaning every 1-2 years as preventative maintenance. Homes with frequent clogs, older plumbing, or tree-lined properties may need more frequent service. We can recommend a schedule during your first appointment." },
  { q: "Do you offer emergency drain service 24/7?", a: `Yes. ${BUSINESS.name} offers 24/7 emergency drain and sewer service. Call ${BUSINESS.phone} anytime for immediate assistance with sewer backups, complete blockages, or other urgent plumbing issues.` },
];

const DrainServices = () => (
  <>
    <Helmet>
      <title>Drain Cleaning & Sewer Services Moncton, NB | EasyFlow Plumbing of Moncton.</title>
      <meta name="description" content="Emergency drain unclogging, sewer main line clearing & video camera pipe inspections in Moncton, NB. EasyFlow Plumbing of Moncton. — Call (506) 497-1959." />
      <link rel="canonical" href="https://easyflowplumbingofmoncton.online/drain-cleaning-sewer-moncton" />

      <meta property="og:title" content="Drain Cleaning & Sewer Services Moncton, NB | EasyFlow Plumbing of Moncton." />
      <meta property="og:description" content="Emergency drain unclogging, sewer main line clearing & video camera pipe inspections in Moncton, NB. Call (506) 497-1959." />
      <meta property="og:url" content="https://easyflowplumbingofmoncton.online/drain-cleaning-sewer-moncton" />
      <meta property="og:image" content="https://easyflowplumbingofmoncton.online/images/drain-service.jpg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      {/* LocalBusiness Schema */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://easyflowplumbingofmoncton.online/drain-cleaning-sewer-moncton",
        "name": "EasyFlow Plumbing of Moncton.",
        "description": "Emergency drain unclogging, sewer main line clearing, and video camera pipe inspections in Moncton, NB",
        "url": "https://easyflowplumbingofmoncton.online/drain-cleaning-sewer-moncton",
        "telephone": "+1-506-497-1959",
        "email": "support@easyflowplumbingofmoncton.online",
        "address": { "@type": "PostalAddress", "streetAddress": "15 Roy Brown St", "addressLocality": "Moncton", "addressRegion": "NB", "postalCode": "E1C 0M4", "addressCountry": "CA" },
        "image": "https://easyflowplumbingofmoncton.online/images/drain-service.jpg",
        "serviceArea": [
          { "@type": "City", "name": "Moncton" },
          { "@type": "City", "name": "Dieppe" },
          { "@type": "Town", "name": "Riverview" },
          { "@type": "Town", "name": "Shediac" }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Drain & Sewer Services",
          "itemListElement": [
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Drain Unclogging" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewer Main Line Clearing" } },
            { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Video Camera Pipe Inspections" } }
          ]
        },
        "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" }
      })}
      </script>

      {/* Service Schema */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Drain Cleaning & Sewer Services",
        "description": "Professional emergency drain unclogging and sewer line services in Moncton, NB, available 24/7",
        "areaServed": [{ "@type": "City", "name": "Moncton" }, { "@type": "City", "name": "Dieppe" }, { "@type": "Town", "name": "Riverview" }],
        "provider": { "@type": "Plumber", "name": "EasyFlow Plumbing of Moncton.", "telephone": "+1-506-497-1959", "url": "https://easyflowplumbingofmoncton.online" },
        "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "CAD" },
        "image": "https://easyflowplumbingofmoncton.online/images/drain-service.jpg"
      })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
      })}
      </script>

      {/* Breadcrumb Schema */}
      <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://easyflowplumbingofmoncton.online/" },
          { "@type": "ListItem", "position": 2, "name": "Drain Cleaning & Sewer Services", "item": "https://easyflowplumbingofmoncton.online/drain-cleaning-sewer-moncton" }
        ]
      })}
      </script>
    </Helmet>

    {/* Hero */}
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

    {/* Introduction */}
    <section className="py-16">
      <div className="container max-w-4xl">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">Why Drain Cleaning &amp; Sewer Service Matters</h2>
        <p className="mb-4 text-foreground/90">
          A slow or clogged drain is more than just an inconvenience—it's a sign of serious problems developing in your plumbing system. What starts as a minor backup can quickly escalate into a full sewer blockage, leading to expensive repairs, potential sewage backups into your home, and structural damage to your property. In Moncton's climate, where winter freezes and spring thaws stress plumbing systems, professional drain maintenance is essential.
        </p>
        <p className="text-foreground/90">
          {BUSINESS.name} specializes in fast, effective drain solutions that prevent small issues from becoming major emergencies. Whether you're dealing with a single slow drain or a complete sewer blockage, our licensed NB technicians have the expertise and equipment to get your system flowing properly again.
        </p>
      </div>
    </section>

    {/* Service Cards */}
    <section className="bg-secondary py-16">
      <div className="container">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Our Drain &amp; Sewer Services in Moncton</h2>
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
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">Common Drain Problems We Solve in Moncton</h2>
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
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Why Choose {BUSINESS.name} for Drain Services?</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Licensed & insured NB plumbers",
            "24/7 emergency drain response",
            "HD video camera inspections",
            "Hydro-jetting & mechanical clearing",
            "Transparent, upfront pricing",
            "Satisfaction guaranteed on every job",
          ].map((item) => (
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
        <h2 className="mb-8 text-2xl font-bold md:text-3xl">What to Expect From Our Drain Cleaning Service</h2>
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
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Drain Cleaning FAQ — Moncton, NB</h2>
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
          <Link to="/water-heater-repair-installation-moncton" className="flex items-center gap-4 rounded-lg border bg-card p-5 transition-shadow hover:shadow-md">
            <Flame className="h-8 w-8 shrink-0 text-accent" />
            <div>
              <h3 className="font-bold">Water Heater Services</h3>
              <p className="text-sm text-muted-foreground">Repair, installation &amp; tankless upgrades</p>
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

export default DrainServices;
