import { Link } from "react-router-dom";
import { Phone, MapPin, Mail } from "lucide-react";
import { BUSINESS } from "@/lib/constants";

const Footer = () => (
  <footer className="border-t bg-primary text-primary-foreground">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        {/* NAP */}
        <div>
          <h3 className="mb-3 text-lg font-bold">{BUSINESS.name}</h3>
          <p className="flex items-start gap-2 text-sm text-primary-foreground/80">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            {BUSINESS.address}
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-primary-foreground/80">
            <Phone className="h-4 w-4 shrink-0" />
            <a href={BUSINESS.phoneTel} className="hover:underline">
              {BUSINESS.phone}
            </a>
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm text-primary-foreground/80">
            <Mail className="h-4 w-4 shrink-0" />
            <a href={`mailto:${BUSINESS.email}`} className="hover:underline">
              {BUSINESS.email}
            </a>
          </p>
          <p className="mt-2 text-sm text-primary-foreground/80">{BUSINESS.hours}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-3 text-lg font-bold">Services</h3>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/80">
            <Link to="/drain-cleaning-sewer-moncton" className="hover:underline">Drain &amp; Sewer Services</Link>
            <Link to="/water-heater-repair-installation-moncton" className="hover:underline">Water Heater Services</Link>
            <Link to="/plumbing-repairs-fixtures-moncton" className="hover:underline">Repairs &amp; Installations</Link>
            <Link to="/contact-plumber-moncton" className="hover:underline">Contact Us</Link>
          </nav>
        </div>

        {/* Service area */}
        <div>
          <h3 className="mb-3 text-lg font-bold">Service Area</h3>
          <p className="text-sm text-primary-foreground/80">
            Proudly serving the {BUSINESS.serviceArea} area and surrounding communities including Riverview, Dieppe, Shediac, Salisbury, and Petitcodiac. Your local plumbing service company in Moncton, NB.
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="mb-3 text-lg font-bold">Follow Us</h3>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/80">
            <a href={BUSINESS.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
            <a href={BUSINESS.socials.youtube} target="_blank" rel="noopener noreferrer" className="hover:underline">YouTube</a>
            <a href={BUSINESS.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            <a href={BUSINESS.socials.yelp} target="_blank" rel="noopener noreferrer" className="hover:underline">Yelp</a>
            <a href={BUSINESS.socials.homestars} target="_blank" rel="noopener noreferrer" className="hover:underline">HomeStars</a>
          </nav>
        </div>
      </div>

      <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} {BUSINESS.name} All rights reserved. Licensed &amp; Insured in New Brunswick.
      </div>
    </div>
  </footer>
);

export default Footer;
