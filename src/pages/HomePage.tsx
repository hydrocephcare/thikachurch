import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  MessageCircle,
  Globe,
  Zap,
  Shield,
  Code2,
  Users,
  TrendingUp,
  CheckCircle2,
  Star,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, WHATSAPP_ORDER_URL, portfolioProjects } from "@/lib/constants";
import heroBg from "@/assets/hero-dark.jpg";
import serviceChurch from "@/assets/service-church.jpg";
import serviceCustom from "@/assets/service-custom.jpg";
import serviceEcommerce from "@/assets/service-ecommerce.jpg";

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "15+", label: "Countries Served" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const process_steps = [
  { step: "01", title: "Discovery", description: "We learn about your goals, audience, and vision through a detailed consultation." },
  { step: "02", title: "Design", description: "We create stunning mockups and prototypes that align with your brand identity." },
  { step: "03", title: "Development", description: "Our engineers build your site with clean code, fast performance, and best practices." },
  { step: "04", title: "Launch & Grow", description: "We deploy, optimize for SEO, and provide ongoing support to fuel growth." },
];

const whyUs = [
  { icon: Globe, title: "International Standards", description: "We build to global benchmarks — from performance to accessibility." },
  { icon: Zap, title: "Lightning Fast", description: "Every site achieves 90+ Lighthouse scores with optimized assets and CDN delivery." },
  { icon: Shield, title: "Secure & Reliable", description: "SSL certificates, security headers, and robust hosting keep your data safe." },
  { icon: Code2, title: "Clean Code", description: "Maintainable, scalable codebases built with React, Next.js, and TypeScript." },
  { icon: TrendingUp, title: "SEO Optimized", description: "Built-in search engine optimization to help you rank higher." },
  { icon: Users, title: "Dedicated Support", description: "Responsive team available via WhatsApp, email, and video calls." },
];

const testimonials = [
  { name: "Pastor James K.", role: "Jubilee Chapel, Nairobi", text: "WebcraftKE transformed our church's online presence. Online giving has increased by 200%.", rating: 5 },
  { name: "Sarah M.", role: "CEO, Savannah Digital", text: "Professional, fast, and the quality exceeded our expectations. Conversion rate improved by 150%.", rating: 5 },
  { name: "Dr. Peter O.", role: "Greenleaf Health Clinic", text: "The patient booking system streamlined our operations completely. What took 3 calls now takes 30 seconds.", rating: 5 },
  { name: "Rev. Mary W.", role: "Horizon Church, London", text: "Working remotely was seamless. They delivered a world-class church website.", rating: 5 },
];

const serviceCards = [
  { image: serviceChurch, title: "Church & Community", description: "Purpose-built websites for faith communities with sermon archives, events, and donation features.", link: "/services" },
  { image: serviceCustom, title: "Custom Development", description: "Bespoke web applications tailored to your exact specifications — built to scale.", link: "/services" },
  { image: serviceEcommerce, title: "E-Commerce Platforms", description: "Full-featured online stores with secure payments, inventory, and seamless checkout.", link: "/services" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

export default function HomePage() {
  return (
    <>
      {/* Hero with background image */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Digital landscape" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-28 pb-20">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium"
            >
              Web Development Agency — Based in Kenya 🇰🇪
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-8 text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.05] tracking-tight text-foreground"
            >
              We Build Websites
              <br />
              That <span className="text-gradient-primary">Perform</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              From church websites to enterprise platforms — we deliver 
              high-performance, SEO-optimized web solutions for clients across the globe.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 h-12 px-7">
                <Link to="/order">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-muted h-12 px-7">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-extrabold text-primary">{stat.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">What We Do</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-extrabold text-foreground">
              Websites That Work as Hard as You Do
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              We build web solutions that don't just look stunning — they drive real business results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {serviceCards.map((card) => (
              <motion.div
                key={card.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Link
                  to={card.link}
                  className="group block rounded-xl overflow-hidden bg-card border border-border hover:border-primary/30 transition-colors duration-200 hover:shadow-md"
                >
                  <div className="h-48 overflow-hidden">
                    <img src={card.image} alt={card.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-display font-bold text-foreground group-hover:text-primary transition-colors">{card.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{card.description}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Learn more <ChevronRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Why WebcraftKE</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-extrabold text-foreground">
              Built Different. Built Better.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item) => (
              <motion.div
                key={item.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-background border border-border hover:border-primary/20 transition-colors duration-200"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-display font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Work</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-extrabold text-foreground">Selected Projects</h2>
            </div>
            <Button asChild variant="outline" className="border-border text-foreground hover:bg-muted">
              <Link to="/portfolio">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/20 transition-colors duration-200"
              >
                <div className="h-40 overflow-hidden bg-muted">
                  {project.image ? (
                    <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-display text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors">{project.title}</span>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{project.category}</span>
                  </div>
                  <h3 className="text-base font-display font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                  >
                    Visit Site <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Our Process</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-extrabold text-foreground">
              From Vision to Launch in 4 Steps
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {process_steps.map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <span className="text-5xl font-display font-extrabold text-primary/15">{item.step}</span>
                <h3 className="mt-1 text-lg font-display font-bold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-6 right-0 translate-x-1/2">
                    <ChevronRight className="h-5 w-5 text-primary/20" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Testimonials</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-display font-extrabold text-foreground">
              Trusted by Clients Worldwide
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-card border border-border"
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-3.5 w-3.5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">"{t.text}"</p>
                <div className="mt-3 pt-3 border-t border-border">
                  <p className="font-medium text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-foreground">
              Ready to Build Something <span className="text-gradient-primary">Amazing</span>?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Whether you need a church website, business platform, or custom web application — 
              we're here to bring your vision to life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 h-12 px-7">
                <Link to="/order">
                  Order Your Website <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border text-foreground hover:bg-muted h-12 px-7">
                <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Get a Free Quote
                </a>
              </Button>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              <CheckCircle2 className="inline h-4 w-4 text-primary mr-1" />
              Free consultation • No commitment required
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
