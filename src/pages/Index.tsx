import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Phone, ShieldCheck, Clock, MapPin, Star, Droplets, Flame, Wrench, CheckCircle2, Timer, DollarSign, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import CallToAction from "@/components/CallToAction";
import heroImg from "@/assets/hero-plumber.jpg";
import drainImg from "@/assets/drain-service.jpg";
import waterHeaterImg from "@/assets/water-heater.jpg";
import repairImg from "@/assets/general-repair.jpg";
import accreditationBadge from "@/assets/canadian-contractor-badge.png";
import iconGoogle from "@/assets/icon-google.png";
import iconYelp from "@/assets/icon-yelp.png";
import iconFacebook from "@/assets/icon-facebook.png";
import iconHomestars from "@/assets/icon-homestars.png";

const heroTrustBullets = [
  "60+ 5-star reviews from Moncton homeowners",
  "Same Day & 24/7 Emergency Service",
  "Upfront, On-Site Pricing — No Surprises",
  "Licensed, Insured & Background-Checked NB Techs",
];

const reviewBadges = [
  { platform: "Google", icon: iconGoogle, rating: "5.0", count: "60+ Reviews" },
  { platform: "Yelp", icon: iconYelp, rating: "4.8", count: "32 Reviews" },
  { platform: "Facebook", icon: iconFacebook, rating: "100%", count: "24 Recommended" },
  { platform: "HomeStars", icon: iconHomestars, rating: "4.9", count: "41 Reviews" },
];

const whyChoose = [
  {
    icon: Timer,
    title: "Same-Day Service.",
    desc: "When your plumbing breaks, you need guarantees. Tight scheduling, expert NB technicians, and fully-stocked trucks ready to install on the spot.",
  },
  {
    icon: ShieldCheck,
    title: "21st Century Tools.",
    desc: "Modern equipment eliminates guesswork with pinpoint diagnosis. No exploratory digging, no unnecessary costs. Just results across the city of Moncton.",
  },
  {
    icon: Users,
    title: "A Concierge Team.",
    desc: "We work around your schedule, not ours. Available 24/7 — your dedicated coordinator updates you every step of the way.",
  },
  {
    icon: CheckCircle2,
    title: "Masters of Plumbing.",
    desc: "TrueFit hires world-class plumbers. We back up their work with the best warranties in NB, so your job gets done right the first time.",
  },
];

const services = [
  {
    to: "/drain-cleaning-sewer-moncton",
    img: drainImg,
    icon: Droplets,
    title: "Drain Cleaning",
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
  { name: "Sarah M.", role: "Moncton Homeowner", text: "Our basement drain backed up at midnight. TrueFit had someone here within the hour. Incredible service for the city of Moncton!", rating: 5 },
  { name: "David K.", role: "Dieppe Resident", text: "Professional install of our new tankless water heater. They supplied everything and the heat efficiency has been amazing. Best plumbing companies in NB.", rating: 5 },
  { name: "Julie T.", role: "Riverview Homeowner", text: "Fixed a stubborn leak that two other companies couldn't find. Fair price, honest work. Highly recommend this Moncton store of plumbing expertise.", rating: 5 },
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
        <title>Plumber in Moncton, NB | 24/7 Emergency | TrueFit Plumber of Moncton</title>
        <meta name="description" content="TrueFit Plumber of Moncton — Fast, reliable 24/7 plumbing in Moncton, NB. Two-Hour Appointment Guarantee. Drain cleaning, water heater repair & installation. Call (506) 713-6739." />
        <link rel="canonical" href="https://easyflowplumbingofmoncton.online/" />
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
          <div className="absolute inset-0 bg-primary/85" />
        </div>
        <div className="container relative py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="mb-4 text-3xl font-bold leading-tight text-primary-foreground md:text-5xl">
              Moncton Plumbing, Drain Cleaning & Water Leak Repair
            </h1>
            <p className="mb-3 text-xl font-semibold text-primary-foreground/95 md:text-2xl">
              Hire Smart NB Plumbers For Clogged Drains, Water Leaks & Water Heater Installs
            </p>
            <p className="mb-8 text-base text-primary-foreground/85 md:text-lg">
              {BUSINESS.name} delivers fast, accurate, same-day plumbing service across Greater Moncton with our team of licensed NB plumbers. Call 24/7 for modern, tech-driven service.
            </p>
            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="cta" size="xl" asChild>
                <a href={BUSINESS.phoneTel}><Phone className="h-5 w-5" />Call Now – {BUSINESS.phone}</a>
              </Button>
              <Button variant="ctaOutline" size="xl" asChild className="bg-primary-foreground/5 text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact-moncton-plumber">Schedule Service</Link>
              </Button>
            </div>

            {/* Trust bullets */}
            <ul className="grid gap-2 sm:grid-cols-2">
              {heroTrustBullets.map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm text-primary-foreground/95">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Review Badges Bar */}
      <section className="border-b bg-card py-6">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {reviewBadges.map((r) => (
              <div key={r.platform} className="flex items-center gap-3 rounded-lg border bg-background px-4 py-3 shadow-sm">
                <img src={r.icon} alt={`${r.platform} reviews`} width={40} height={40} className="h-10 w-10 object-contain" loading="lazy" />
                <div className="flex flex-col">
                  <div className="flex items-center gap-1">
                    <span className="text-lg font-bold text-foreground">{r.rating}</span>
                    <Star className="h-4 w-4 fill-accent text-accent" />
                  </div>
                  <span className="text-xs text-muted-foreground">{r.count}</span>
                </div>
              </div>
            ))}
            <div className="flex items-center gap-3 rounded-lg border bg-background px-4 py-2 shadow-sm">
              <img src={accreditationBadge} alt="Certified Canadian Contractor — Moncton, NB" width={64} height={64} className="h-16 w-16" loading="lazy" />
              <div className="flex flex-col">
                <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Accredited</span>
                <span className="text-sm font-bold text-foreground">Canadian Contractor</span>
                <span className="text-xs text-muted-foreground">Moncton, NB</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No-Brainer Offer: Two-Hour Appointment Guarantee */}
      <section className="bg-secondary py-16">
        <div className="container max-w-4xl text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-accent">It's About Time — Your Time</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Built on Tradition. Fueled by Family. Driven by Joy.
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Tired of waiting around all day for a plumber in Moncton? At TrueFit, we respect your schedule with our <span className="font-bold text-foreground">Two-Hour Appointment Guarantee</span>.
          </p>

          <div className="mb-8 grid gap-5 text-left md:grid-cols-3">
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <Clock className="mb-3 h-8 w-8 text-accent" />
              <h3 className="mb-2 font-bold">You Pick the Window</h3>
              <p className="text-sm text-muted-foreground">Choose the two-hour appointment window that works for your day.</p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <DollarSign className="mb-3 h-8 w-8 text-accent" />
              <h3 className="mb-2 font-bold">On Time — Or We Pay You</h3>
              <p className="text-sm text-muted-foreground">$1 back for every minute we're late, up to $60 off your bill.</p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-sm">
              <CheckCircle2 className="mb-3 h-8 w-8 text-accent" />
              <h3 className="mb-2 font-bold">No Wasted Time</h3>
              <p className="text-sm text-muted-foreground">No waiting. No guessing. No all-day windows. Just fast NB service.</p>
            </div>
          </div>

          <p className="mb-8 text-base text-muted-foreground">
            Backed by upfront on-site pricing, no commissioned salespeople, and technicians ready to install and fit it on the spot. We're making plumbing service better — for you.
          </p>

          <Button variant="cta" size="xl" asChild>
            <a href={BUSINESS.phoneTel}><Phone className="h-5 w-5" />Call {BUSINESS.phone}</a>
          </Button>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16">
        <div className="container">
          <p className="mb-2 text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">Why Moncton homeowners love TrueFit</p>
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">Why Choose TrueFit For Your Plumbing Repair in Moncton, NB</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((w) => (
              <div key={w.title} className="rounded-lg border bg-card p-6 shadow-sm">
                <w.icon className="mb-3 h-8 w-8 text-accent" />
                <h3 className="mb-2 font-bold">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="bg-secondary py-16">
        <div className="container">
          <h2 className="mb-2 text-center text-2xl font-bold md:text-3xl">Plumbing Services in Moncton, New Brunswick</h2>
          <p className="mb-10 text-center text-muted-foreground">Precision plumbing. Not an oxymoron. Top-quality NB supplies and service.</p>
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
      <section className="py-16">
        <div className="container">
          <h2 className="mb-10 text-center text-2xl font-bold md:text-3xl">What Moncton Homeowners Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-4 text-sm text-foreground/90">"{t.text}"</p>
                <p className="text-sm font-semibold">— {t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-16">
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
