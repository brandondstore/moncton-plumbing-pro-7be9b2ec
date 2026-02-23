import { Link } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/drain-cleaning-sewer-moncton", label: "Drain & Sewer" },
  { to: "/water-heater-repair-installation-moncton", label: "Water Heaters" },
  { to: "/plumbing-repairs-fixtures-moncton", label: "Repairs & Installs" },
  { to: "/about-us", label: "About Us" },
  { to: "/contact-plumber-moncton", label: "Contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-card shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="text-lg font-bold text-primary">
          EasyFlow Plumbing of Moncton.
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="cta" size="lg" asChild className="hidden sm:inline-flex">
            <a href={BUSINESS.phoneTel}>
              <Phone className="h-4 w-4" />
              Call for Service
            </a>
          </Button>
          <Button variant="cta" size="icon" asChild className="sm:hidden">
            <a href={BUSINESS.phoneTel} aria-label="Call for service">
              <Phone className="h-5 w-5" />
            </a>
          </Button>
          <button
            className="text-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t bg-card px-4 pb-4 md:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
