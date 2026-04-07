import { Helmet } from "react-helmet-async";
import { ShieldCheck, Heart, MapPin } from "lucide-react";
import CallToAction from "@/components/CallToAction";
import { BUSINESS } from "@/lib/constants";
import teamImg from "@/assets/team-photo.jpg";

const AboutUs = () => (
  <>
    <Helmet>
      <title>About Us | TrueFit Plumber of Moncton — Your Local Moncton Plumber</title>
      <meta name="description" content="TrueFit Plumber of Moncton — A dedicated Moncton, NB plumbing business committed to doing the job right the first time. Licensed, insured, and community-focused." />
      <link rel="canonical" href="https://easyflowplumbingofmoncton.online/about-us" />

      <meta property="og:title" content="About Us | TrueFit Plumber of Moncton" />
      <meta property="og:description" content="A dedicated Moncton, NB plumbing business committed to doing the job right the first time." />
      <meta property="og:url" content="https://easyflowplumbingofmoncton.online/about-us" />
      <meta property="og:image" content="https://easyflowplumbingofmoncton.online/images/easyflow-plumbing-moncton-storefront.jpg" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />

      <script type="application/ld+json">
      {JSON.stringify({ "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://easyflowplumbingofmoncton.online/" },
        { "@type": "ListItem", "position": 2, "name": "About Us", "item": "https://easyflowplumbingofmoncton.online/about-us" }
      ] })}
      </script>
    </Helmet>

    <section className="py-16">
      <div className="container">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">
          About {BUSINESS.name} — Your Local Moncton Plumber
        </h1>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-4 text-foreground/90">
              {BUSINESS.name} was built on a simple promise: do the job right the first time. As a dedicated Moncton, New Brunswick business, we understand the unique plumbing challenges that NB homeowners face — from harsh winter pipe freezes to aging city infrastructure.
            </p>
            <p className="mb-4 text-foreground/90">
              We're not just another plumbing company. We're your neighbours. We live and work in the Greater Moncton community, and our reputation is everything. Every job we take on — whether it's a simple faucet install or an emergency sewer line repair — gets our full attention and the highest quality supplies and workmanship.
            </p>
            <p className="text-foreground/90">
              Our team of licensed NB plumbers carries the training, tools, and store of knowledge to handle any plumbing challenge. We supply transparent pricing, honest assessments, and stand behind every job. When you call {BUSINESS.name}, you get a company that treats your home like our own.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-2 rounded-lg bg-secondary p-3">
                <ShieldCheck className="h-5 w-5 text-trust" />
                <span className="text-sm font-medium">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-secondary p-3">
                <Heart className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium">Community Focused</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-secondary p-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">100% Local</span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg">
            <img
              src={teamImg}
              alt="TrueFit Plumber of Moncton team in New Brunswick"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <CallToAction />
  </>
);

export default AboutUs;
