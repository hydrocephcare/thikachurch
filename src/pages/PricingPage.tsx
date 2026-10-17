import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle, DollarSign, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { WHATSAPP_URL } from "@/lib/constants";
import RelatedPages from "@/components/RelatedPages";

const tiers = [
  {
    name: "Starter",
    price: "From KES 5,000",
    description: "A clearly-scoped small site - a few pages, mobile-first, basic SEO.",
    features: ["Up to ~5 pages", "Mobile-first responsive design", "Contact/WhatsApp integration", "Basic technical SEO", "1-2 week typical turnaround"],
  },
  {
    name: "Business",
    price: "Quoted on scope",
    description: "A fuller business site with more pages, content and integrations.",
    features: ["More pages & custom sections", "M-Pesa or payment integration options", "Blog/resources section", "Analytics setup", "Scope-dependent timeline"],
    highlight: true,
  },
  {
    name: "Custom / E-commerce / Web App",
    price: "Quoted on scope",
    description: "Online stores, marketplaces, dashboards and custom applications.",
    features: ["Product catalogue or custom workflows", "Database-backed functionality", "Admin dashboards", "API integrations", "Scoped project timeline"],
  },
];

export default function PricingPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Website Design & Development - KenyaAdverts",
    description: "Website design and development services, with starter projects from KES 5,000.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "KES",
      lowPrice: "5000",
      offerCount: "3",
    },
  };

  return (
    <>
      <Seo
        title="Website Pricing Kenya | Starter Sites From KES 5,000 | KenyaAdverts"
        description="See how KenyaAdverts prices websites in Kenya: starter sites from KES 5,000, with business, e-commerce and custom application projects quoted on scope. Compare against typical market rates."
        path="/pricing"
      />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      <section className="pt-32 pb-14">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-widest"><DollarSign className="h-4 w-4" />Pricing</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-display font-extrabold leading-tight">Website pricing in Kenya, explained honestly.</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Website pricing in Kenya varies a lot, and most quotes online come from agencies selling their own services - including ours. Here's what we charge, and how it compares to typical market ranges we found researching this page, so you can judge for yourself.
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div key={tier.name} className={`p-8 rounded-3xl border ${tier.highlight ? "border-primary shadow-xl bg-primary/5" : "border-border bg-card"}`}>
                <h2 className="text-xl font-display font-bold">{tier.name}</h2>
                <p className="mt-3 text-3xl font-display font-extrabold text-primary">{tier.price}</p>
                <p className="mt-3 text-sm text-muted-foreground">{tier.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {tier.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold">How this compares to the wider Kenyan market</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Based on publicly available pricing from several Kenyan web design providers, small business websites in Kenya commonly range from roughly KES 10,000 to KES 80,000, with larger custom projects (e-commerce, marketplaces) running from around KES 90,000 well into six figures depending on scope. Our KES 5,000 starter tier sits below that typical range specifically because it has a tightly defined scope - a handful of pages rather than a larger custom build.
          </p>
          <div className="mt-6 flex gap-3 p-5 rounded-2xl border border-border bg-card">
            <Info className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Be cautious of any quote - ours included - that doesn't clearly state what's in scope. A very low price that excludes SEO basics, mobile responsiveness or post-launch support often costs more later than a clearly-scoped quote upfront. Always ask what's included before comparing numbers.
            </p>
          </div>
        </div>
      </section>

      <RelatedPages exclude="/pricing" />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold">Get a quote for your actual project</h2>
          <p className="mt-4 text-muted-foreground">Tell us what you need and we'll quote based on real scope, not a generic package.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-primary"><Link to="/order">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="outline"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp Us</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
