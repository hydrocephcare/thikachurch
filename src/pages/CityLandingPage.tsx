import { useLocation, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MapPin, MessageCircle, Smartphone, Wifi, Banknote, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { WHATSAPP_URL } from "@/lib/constants";
import RelatedPages from "@/components/RelatedPages";

interface City {
  name: string;
  region: string;
  title: string;
  description: string;
  heading: string;
  intro: string;
  context: string;
  localPoints: { icon: typeof MapPin; title: string; text: string }[];
}

const cities: Record<string, City> = {
  "web-design-nairobi": {
    name: "Nairobi",
    region: "Nairobi County",
    title: "Website Design Nairobi | Business Websites From KES 5,000",
    description: "Website design and development for Nairobi businesses - starter sites from KES 5,000, mobile-first design, M-Pesa integration and WhatsApp-based support.",
    heading: "Website Design for Nairobi Businesses",
    intro: "Nairobi has the country's most competitive business environment, which means a weak online presence gets noticed quickly when a customer compares you to competitors who show up properly in search and look credible on a phone screen.",
    context: "As the commercial hub, Nairobi businesses are more likely to be compared directly against competitors who already have a professional website - a WhatsApp number alone often isn't enough once a customer is deciding between several options in the same estate or industrial area.",
    localPoints: [
      { icon: Smartphone, title: "Mobile-first by default", text: "Most Nairobi customers browse on a phone over mobile data, so pages are built light and fast rather than assuming desktop broadband." },
      { icon: Banknote, title: "M-Pesa-ready checkout", text: "For shops and service businesses, M-Pesa payment options can be built directly into the site instead of routing every sale through chat." },
      { icon: Clock, title: "Realistic turnaround", text: "A starter site for a Nairobi SME typically takes about 1-2 weeks once scope is agreed, not months." },
    ],
  },
  "web-design-mombasa": {
    name: "Mombasa",
    region: "Coast",
    title: "Website Design Mombasa | Websites for Coast Businesses",
    description: "Website design for Mombasa and Coast region businesses - tourism, retail, logistics and service companies. Starter sites from KES 5,000.",
    heading: "Website Design for Mombasa & the Coast",
    intro: "Mombasa's economy spans tourism, shipping and logistics, and retail - businesses here often need a website that works for both local customers and visitors searching from outside the country before they travel.",
    context: "A Mombasa-based tourism, logistics or retail business is frequently found by people who are not yet in the city - a website needs to load reasonably well on an unfamiliar visitor's connection and communicate clearly to someone unfamiliar with the business beforehand.",
    localPoints: [
      { icon: Wifi, title: "Works for visitors too", text: "Pages are built to load reasonably for visitors on international roaming or hotel Wi-Fi, not only for local connections." },
      { icon: Banknote, title: "M-Pesa and card options", text: "For tourism or logistics bookings, we can combine M-Pesa with card payment options so both local and international customers can pay comfortably." },
      { icon: MapPin, title: "Maps and location clarity", text: "Clear location/contact information matters more for a Coast business serving visitors who don't already know the area." },
    ],
  },
  "web-design-kisumu": {
    name: "Kisumu",
    region: "Nyanza",
    title: "Website Design Kisumu | Websites for Nyanza Businesses",
    description: "Website design for Kisumu and Nyanza region businesses, schools and organisations. Mobile-first, M-Pesa-ready, starter sites from KES 5,000.",
    heading: "Website Design for Kisumu Businesses",
    intro: "Kisumu's growing business and education sector means a growing number of SMEs, schools and organisations are moving online for the first time - the goal is a site that's genuinely useful from day one, not an oversized build nobody updates.",
    context: "For a first website, the most common mistake is over-building - a bigger site than the business can maintain. We usually recommend starting with a focused, well-structured small site and expanding it only as the business actually needs more.",
    localPoints: [
      { icon: Smartphone, title: "Built to be maintained", text: "A simple, well-structured site that you can actually keep updated beats an oversized one that goes stale within months." },
      { icon: Banknote, title: "M-Pesa for local payments", text: "M-Pesa integration is available for shops, schools (fee enquiries) or service businesses that want to collect payments directly." },
      { icon: Clock, title: "Starter pricing", text: "Starter projects begin from KES 5,000 for a clearly defined small site, with larger builds quoted on scope." },
    ],
  },
  "web-design-eldoret": {
    name: "Eldoret",
    region: "Rift Valley",
    title: "Website Design Eldoret | Websites for Rift Valley Businesses",
    description: "Website design for Eldoret and Rift Valley businesses, agribusinesses and organisations. Mobile-first, M-Pesa-ready, starter sites from KES 5,000.",
    heading: "Website Design for Eldoret Businesses",
    intro: "Eldoret's business base spans agribusiness, trade and growing retail - a website here often needs to communicate clearly to buyers and partners who are evaluating the business from outside the region.",
    context: "For an agribusiness or trading company, a website frequently does the work of a credibility check for a partner or buyer who hasn't met you in person yet - clear information about what you do and how to reach you matters more than decoration.",
    localPoints: [
      { icon: Smartphone, title: "Clear, credible presentation", text: "Straightforward business information (what you do, who you serve, how to contact you) built to read well on any device." },
      { icon: Banknote, title: "M-Pesa for local transactions", text: "M-Pesa integration is available where the business needs to take payments or deposits directly through the site." },
      { icon: Clock, title: "Starter pricing from KES 5,000", text: "A clearly scoped starter site is the fastest way to get online professionally without overcommitting budget upfront." },
    ],
  },
  "web-design-nakuru": {
    name: "Nakuru",
    region: "Rift Valley",
    title: "Website Design Nakuru | Websites for Nakuru Businesses",
    description: "Website design for Nakuru businesses, schools and organisations. Mobile-first, M-Pesa-ready, starter sites from KES 5,000.",
    heading: "Website Design for Nakuru Businesses",
    intro: "Nakuru's expanding retail, hospitality and education sectors are increasingly competing online, not just locally - a real website helps a Nakuru business show up when someone searches rather than relying on word of mouth alone.",
    context: "As Nakuru grows as a commercial centre, more customers start their search for a business on Google rather than asking around - without a website, that search simply doesn't find you, however good the business is in person.",
    localPoints: [
      { icon: Smartphone, title: "Found on Google, not just locally", text: "Basic technical SEO is built in from the start so the site has a real chance of being found by local search, not only by people who already know you." },
      { icon: Banknote, title: "M-Pesa-ready", text: "M-Pesa payment options can be built into the site for shops, bookings or service businesses that want to collect payments online." },
      { icon: Clock, title: "Starter sites from KES 5,000", text: "A defined, affordable starting point that can grow as the business grows, rather than a large upfront commitment." },
    ],
  },
};

export default function CityLandingPage() {
  // Static per-slug routes (see App.tsx), not a dynamic ":slug" segment -
  // useParams() would return nothing here. Derive from the pathname instead.
  const slug = useLocation().pathname.replace(/^\//, "");
  const city = slug ? cities[slug] : undefined;
  if (!city) return null;

  const path = `/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `KenyaAdverts - Website Design for ${city.name}`,
    description: city.description,
    url: `https://www.kenyaadverts.co.ke${path}`,
    areaServed: { "@type": "City", name: city.name },
    priceRange: "KES 5,000+",
  };

  return (
    <>
      <Seo title={city.title} description={city.description} path={path} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>

      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-widest"><MapPin className="h-4 w-4" />{city.region}</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-display font-extrabold leading-tight">{city.heading}</h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">{city.intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-gradient-primary"><Link to={`/book-appointment?project=${encodeURIComponent(city.heading)}`}>Book a Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp: 0115 475 543</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold">What this means for a {city.name} business</h2>
          <p className="mt-5 text-muted-foreground leading-relaxed text-lg">{city.context}</p>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center mb-10">What we build in for {city.name} businesses</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {city.localPoints.map((point) => (
              <div key={point.title} className="p-6 rounded-2xl border border-border bg-card">
                <point.icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display font-bold text-lg">{point.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{point.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-center mb-8">What we build for businesses in {city.name}</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Business websites with enquiry forms", "E-commerce stores with M-Pesa checkout", "School and organisation websites", "Custom web applications and dashboards"].map((item) => (
              <div key={item} className="flex gap-3 items-center p-4 rounded-xl border border-border bg-card">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedPages exclude={path} />

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold">Let's talk about your {city.name} project</h2>
          <p className="mt-4 text-muted-foreground">Tell us what you need - we work remotely with clients across Kenya, so location is never a barrier to getting started.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-primary"><Link to="/order">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="outline"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp Us</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
