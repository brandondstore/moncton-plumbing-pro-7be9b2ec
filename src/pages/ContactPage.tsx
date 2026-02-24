import { Helmet } from "react-helmet-async";
import { useState, type FormEvent } from "react";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message Sent!", description: "We'll get back to you as soon as possible." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <>
      <Helmet>
        <title>Contact a Plumber in Moncton, NB | EasyFlow Plumbing of Moncton.</title>
        <meta name="description" content="Contact EasyFlow Plumbing of Moncton. for 24/7 plumbing service in Moncton, NB. Call (506) 497-1959 or fill out our quick form. 15 Roy Brown St, Moncton." />
        <link rel="canonical" href="https://easyflowplumbingofmoncton.online/contact-plumber-moncton" />

        <meta property="og:title" content="Contact a Plumber in Moncton, NB | EasyFlow Plumbing of Moncton." />
        <meta property="og:description" content="Contact EasyFlow Plumbing of Moncton. for 24/7 plumbing service. Call (506) 497-1959." />
        <meta property="og:url" content="https://easyflowplumbingofmoncton.online/contact-plumber-moncton" />
        <meta property="og:image" content="https://easyflowplumbingofmoncton.online/images/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* ContactPoint Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          "contactType": "Customer Service",
          "telephone": "+1-506-497-1959",
          "email": "support@easyflowplumbingofmoncton.online",
          "areaServed": ["CA-NB", "Moncton", "Dieppe", "Riverview"],
          "availableLanguage": "en",
          "hoursAvailable": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" }
        })}
        </script>

        {/* Breadcrumb Schema */}
        <script type="application/ld+json">
        {JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://easyflowplumbingofmoncton.online/" },
          { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://easyflowplumbingofmoncton.online/contact-plumber-moncton" }
        ] })}
        </script>
      </Helmet>

      <section className="py-16">
        <div className="container">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Contact a Plumber in Moncton, NB</h1>
          <p className="mb-10 text-muted-foreground">Need a plumber in the city of Moncton? Fill out the form below or call us directly for immediate service.</p>

          <div className="grid gap-10 md:grid-cols-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">Name</label>
                <input type="text" id="name" name="name" required className="w-full rounded-md border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-1 block text-sm font-medium">Phone</label>
                <input type="tel" id="phone" name="phone" required className="w-full rounded-md border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent" placeholder="(506) 555-1234" />
              </div>
              <div>
                <label htmlFor="address" className="mb-1 block text-sm font-medium">Address</label>
                <input type="text" id="address" name="address" className="w-full rounded-md border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent" placeholder="Your address in Moncton" />
              </div>
              <div>
                <label htmlFor="issue" className="mb-1 block text-sm font-medium">Describe Your Issue</label>
                <textarea id="issue" name="issue" rows={4} required className="w-full rounded-md border bg-card px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent" placeholder="Tell us about your plumbing issue..." />
              </div>
              <Button type="submit" variant="cta" size="lg" disabled={loading} className="w-full">
                {loading ? "Sending..." : "Submit Request"}
              </Button>
            </form>

            <div>
              <div className="mb-8 space-y-4">
                <h2 className="text-xl font-bold">{BUSINESS.name}</h2>
                <div className="flex items-start gap-3 text-sm"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><span>{BUSINESS.address}</span></div>
                <div className="flex items-center gap-3 text-sm"><Phone className="h-5 w-5 shrink-0 text-accent" /><a href={BUSINESS.phoneTel} className="font-medium hover:underline">{BUSINESS.phone}</a></div>
                <div className="flex items-center gap-3 text-sm"><Mail className="h-5 w-5 shrink-0 text-accent" /><a href={`mailto:${BUSINESS.email}`} className="font-medium hover:underline">{BUSINESS.email}</a></div>
                <div className="flex items-center gap-3 text-sm"><Clock className="h-5 w-5 shrink-0 text-accent" /><span>{BUSINESS.hours}</span></div>
              </div>

              <div className="overflow-hidden rounded-lg border">
                <iframe
                  title="EasyFlow Plumbing of Moncton. Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2793.1!2d-64.7782!3d46.0878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s15+Roy+Brown+St%2C+Moncton%2C+NB+E1C+0M4!5e0!3m2!1sen!2sca!4v1700000000000"
                  width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
