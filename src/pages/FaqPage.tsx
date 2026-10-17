import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { WHATSAPP_URL } from "@/lib/constants";

const faqs = [
  {
    category: "Pricing & Process",
    items: [
      {
        q: "How much does a website cost?",
        a: "Starter websites begin from KES 5,000 for a clearly defined small site (a handful of pages, standard functionality). E-commerce, marketplaces, custom web applications and larger projects are quoted individually based on the pages, integrations and features involved. We discuss scope before quoting, so you know what you're paying for.",
      },
      {
        q: "How long does a project take?",
        a: "A simple starter website typically takes about 1-2 weeks from an agreed scope to launch. E-commerce stores, marketplaces and custom web applications take longer depending on the features involved - we give a realistic timeline once we understand the project.",
      },
      {
        q: "What do you need from me to start?",
        a: "At minimum: what the website is for, who it's for, and any existing content (logo, text, images) you already have. If you don't have content ready, we can still start the design and structure while you prepare it.",
      },
      {
        q: "Do I need to pay everything upfront?",
        a: "We discuss payment structure per project during scoping - this is usually a deposit to begin work, with the balance due around completion. Exact terms are agreed before work starts, not after.",
      },
    ],
  },
  {
    category: "Technical",
    items: [
      {
        q: "Can you integrate M-Pesa payments into my website?",
        a: "Yes. We build M-Pesa-ready payment architecture for e-commerce stores, booking systems and other sites that need to collect payments from Kenyan customers.",
      },
      {
        q: "Will my website work well on mobile phones?",
        a: "Yes - every site we build is mobile-first, since most Kenyan visitors browse on a phone. Desktop layouts are a secondary consideration, not the primary one.",
      },
      {
        q: "Do you build with WordPress or custom code?",
        a: "We primarily build custom websites with modern frameworks (React, and backend options like Python/Django where a project needs real application logic) rather than WordPress. This gives more control over performance, security and exactly how the site behaves, without plugin bloat.",
      },
      {
        q: "Can you work on a website that already exists?",
        a: "Yes - we take on maintenance, redesigns, bug fixes, performance improvements and new features for existing websites, not only new builds from scratch.",
      },
    ],
  },
  {
    category: "After Launch",
    items: [
      {
        q: "Who owns the website once it's built?",
        a: "You do. Once a project is complete and paid for, the code, domain and content are yours.",
      },
      {
        q: "Do you offer ongoing maintenance?",
        a: "Yes - we offer maintenance for content updates, bug fixes, performance checks and security/dependency updates after launch, as a separate ongoing arrangement if you want one.",
      },
      {
        q: "What if I need changes after the site is live?",
        a: "Small changes and fixes can usually be handled quickly. Larger feature additions are scoped and quoted like a new mini-project, the same way the original build was.",
      },
      {
        q: "Do you help with hosting and domains?",
        a: "Yes - we can guide you through domain registration and deployment, and advise on hosting that fits the project (for example, we use Vercel for several of our own and client projects).",
      },
    ],
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.flatMap((group) =>
      group.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      }))
    ),
  };

  return (
    <>
      <Seo
        title="Frequently Asked Questions | KenyaAdverts"
        description="Common questions about pricing, timelines, M-Pesa integration, hosting and maintenance for websites and web applications built by KenyaAdverts."
        path="/faq"
      />
      <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>

      <section className="pt-32 pb-14">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">Frequently Asked Questions</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-display font-extrabold leading-tight">
            Questions we get <span className="text-gradient-primary">asked a lot.</span>
          </h1>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Honest answers about pricing, process and what happens after your website launches. Don't see your question? Ask us directly on WhatsApp.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-14">
          {faqs.map((group) => (
            <div key={group.category}>
              <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-5">{group.category}</h2>
              <div className="space-y-3">
                {group.items.map((item) => {
                  const id = `${group.category}-${item.q}`;
                  const isOpen = openIndex === id;
                  return (
                    <div key={id} className="rounded-2xl border border-border bg-card overflow-hidden">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : id)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between gap-4 p-5 text-left"
                      >
                        <span className="font-semibold">{item.q}</span>
                        <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isOpen && (
                        <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold">Still have a question?</h2>
          <p className="mt-4 text-muted-foreground">Tell us about your project and we'll answer directly - no generic sales pitch.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-primary"><Link to="/order">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            <Button asChild size="lg" variant="outline"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />Ask on WhatsApp</a></Button>
          </div>
        </div>
      </section>
    </>
  );
}
