import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";
import serviceChurch from "@/assets/service-church.jpg";
import serviceCustom from "@/assets/service-custom.jpg";
import serviceEcommerce from "@/assets/service-ecommerce.jpg";

const images: Record<string, string> = {
  church: serviceChurch,
  custom: serviceCustom,
  ecommerce: serviceEcommerce,
};

const technologies = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js",
  "PostgreSQL", "Supabase", "Vercel", "Figma", "WordPress",
  "Shopify", "Stripe", "M-Pesa API", "Google Analytics",
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Services</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-display font-extrabold">
              What We <span className="text-gradient-primary">Build</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              From simple landing pages to complex web applications — we offer a full range of web development services designed for businesses of all sizes, worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8 p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-display font-bold">{service.title}</h3>
                    {service.popular && (
                      <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold border border-secondary/20">
                        <Star className="h-3 w-3 fill-secondary" /> Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3">What's Included</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <span key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button asChild size="sm" variant="outline" className="mt-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <Link to="/order">Get Started <ArrowRight className="ml-1 h-3 w-3" /></Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold">Technologies We Use</h2>
            <p className="mt-4 text-muted-foreground">We work with the best modern tools and frameworks.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="mt-10 flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span key={tech} className="px-5 py-2.5 rounded-full text-sm font-medium bg-card border border-border text-foreground hover:border-primary/30 transition-colors">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold">Not Sure What You Need?</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            No worries — reach out and we'll help you figure out the best solution for your goals and budget.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 h-14 px-8">
              <Link to="/contact">Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-muted h-14 px-8">
              <Link to="/pricing">View Pricing <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
