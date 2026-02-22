import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";

const CallToAction = ({ className = "" }: { className?: string }) => (
  <section className={`bg-accent py-12 text-center ${className}`}>
    <div className="container">
      <h2 className="mb-3 text-2xl font-bold text-accent-foreground md:text-3xl">
        Need a Plumber in Moncton Right Now?
      </h2>
      <p className="mb-6 text-accent-foreground/90">
        Our licensed NB plumbers are ready 24/7. Call for fast, reliable service.
      </p>
      <Button variant="default" size="xl" asChild>
        <a href={BUSINESS.phoneTel}>
          <Phone className="h-5 w-5" />
          {BUSINESS.phone}
        </a>
      </Button>
    </div>
  </section>
);

export default CallToAction;
