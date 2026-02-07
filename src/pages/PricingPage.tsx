import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, MessageCircle, Star, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_ORDER_URL } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";

const plans = [
  {
    name: "Starter",
    subtitle: "Ready-Made Websites",
    price: "KES 5,000",
    priceUsd: "~$38 USD",
    description: "Perfect for churches, small businesses, and personal brands who need a professional online presence fast.",
    features: [
      { text: "Pre-built responsive template", included: true },
      { text: "Up to 5 pages", included: true },
      { text: "Mobile-optimized design", included: true },
      { text: "Basic SEO setup", included: true },
      { text: "Contact form integration", included: true },
      { text: "1 month free support", included: true },
      { text: "Custom design", included: false },
      { text: "E-commerce features", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    subtitle: "Custom Design & Development",
    price: "KES 35,000",
    priceUsd: "~$270 USD",
    description: "For businesses that need a unique, custom-designed website with advanced features and functionality.",
    features: [
      { text: "Fully custom design", included: true },
      { text: "Up to 10 pages", included: true },
      { text: "Advanced SEO optimization", included: true },
      { text: "CMS integration", included: true },
      { text: "Social media integration", included: true },
      { text: "Analytics setup", included: true },
      { text: "3 months free support", included: true },
      { text: "E-commerce (basic)", included: true },
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Enterprise",
    subtitle: "Full Custom Web Application",
    price: "Custom",
    priceUsd: "Tailored pricing",
    description: "For organizations needing complex web applications, e-commerce platforms, or multi-feature systems.",
    features: [
      { text: "Bespoke web application", included: true },
      { text: "Unlimited pages & features", included: true },
      { text: "Full e-commerce platform", included: true },
      { text: "API integrations", included: true },
      { text: "Admin dashboard", included: true },
      { text: "Payment gateway setup", included: true },
      { text: "6 months free support", included: true },
      { text: "Priority development", included: true },
    ],
    cta: "Contact Us",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Pricing</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-display font-extrabold">
              Transparent <span className="text-gradient-primary">Pricing</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. No surprises. Choose the plan that fits your needs and budget. All prices are negotiable for long-term partnerships.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 ${
                  plan.popular
                    ? "bg-card border-2 border-primary glow-primary"
                    : "bg-card border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold">
                      <Star className="h-3 w-3 fill-current" /> Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-display font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.subtitle}</p>
                <div className="mt-6">
                  <span className="text-4xl font-display font-extrabold">{plan.price}</span>
                  <span className="block text-sm text-muted-foreground mt-1">{plan.priceUsd}</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                <div className="mt-6 space-y-3">
                  {plan.features.map((feature) => (
                    <div key={feature.text} className="flex items-start gap-2 text-sm">
                      {feature.included ? (
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      ) : (
                        <Minus className="h-4 w-4 text-muted-foreground/40 mt-0.5 shrink-0" />
                      )}
                      <span className={feature.included ? "text-foreground" : "text-muted-foreground/40"}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  className={`w-full mt-8 ${
                    plan.popular
                      ? "bg-gradient-primary text-primary-foreground hover:opacity-90"
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                >
                  <Link to="/order">{plan.cta} <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <p className="text-muted-foreground">
              Need something specific? 
              <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                Get a custom quote on WhatsApp <MessageCircle className="inline h-4 w-4" />
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Payment info */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-display font-extrabold text-center mb-8">Payment Information</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Payment Methods", items: ["M-Pesa", "Bank Transfer", "PayPal", "Wise", "Cryptocurrency"] },
              { title: "Payment Terms", items: ["50% deposit to start", "50% on delivery", "Flexible installments available", "Money-back guarantee"] },
            ].map((section) => (
              <div key={section.title} className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="font-display font-bold mb-3">{section.title}</h3>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
