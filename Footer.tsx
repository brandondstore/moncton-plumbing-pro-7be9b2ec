import { Phone, Search, PipetteIcon, ShieldAlert, Wrench } from "lucide-react";
import { Helmet } from "react-helmet-async";
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

const GeneralRepairs = () => (
  <>
    <Helmet>
      <title>Plumbing Repairs & Fixture Installations in Moncton, NB | EasyFlow Plumbing of Moncton.</title>
      <meta name="description" content="Expert plumbing repairs & fixture installations in Moncton, NB. EasyFlow Plumbing of Moncton. provides leak detection, pipe repair, sump pump service, toilet, sink & faucet installation. Call (506) 497-1959!" />
      <link rel="canonical" href="https://easyflowplumbingofmoncton.online/plumbing-repairs-fixtures-moncton" />
      <meta property="og:title" content="Plumbing Repairs & Fixture Installations in Moncton, NB | EasyFlow Plumbing of Moncton." />
      <meta property="og:description" content="Leak detection, pipe repair, sump pumps & fixture installations across Greater Moncton. Licensed NB plumbers from EasyFlow Plumbing of Moncton." />
      <meta property="og:url" content="https://easyflowplumbingofmoncton.online/plumbing-repairs-fixtures-moncton" />
    </Helmet>

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

export default GeneralRepairs;
