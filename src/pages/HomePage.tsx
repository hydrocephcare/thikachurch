import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, MessageCircle, Globe, Zap, Shield, Code2, Users,
  TrendingUp, CheckCircle2, ChevronRight, ExternalLink, ShoppingCart,
  Building2, GraduationCap, Church, BriefcaseBusiness, Search, Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WHATSAPP_URL, WHATSAPP_ORDER_URL, portfolioProjects } from "@/lib/constants";
import heroBg from "@/assets/hero-dark.jpg";
import { blogPosts } from "@/lib/blogData";

const serviceCards = [
  { icon: BriefcaseBusiness, title: "Business Websites", description: "Professional websites that make your business credible and turn visitors into enquiries." },
  { icon: ShoppingCart, title: "E-Commerce", description: "Online shops with products, orders, mobile-first checkout and M-Pesa options." },
  { icon: Church, title: "Church & Organisations", description: "Modern websites for churches, ministries, NGOs, clubs and community organisations." },
  { icon: GraduationCap, title: "Schools & Education", description: "Education websites, resource hubs, learning platforms and student-focused portals." },
  { icon: Code2, title: "Custom Web Apps", description: "Dashboards, portals, management systems and other software built around your workflow." },
  { icon: Users, title: "Personal Websites", description: "Portfolio and personal brand websites for professionals, creatives and freelancers." },
];

const reasons = [
  { icon: Smartphone, title: "Mobile-first", description: "Designed to work beautifully on phones, tablets and computers." },
  { icon: Zap, title: "Fast & modern", description: "Clean interfaces and performance-focused development." },
  { icon: Search, title: "SEO-ready", description: "A strong technical foundation for Google visibility." },
  { icon: Shield, title: "Secure & maintainable", description: "Reliable code, sensible structure and ongoing support when you need it." },
];

const processSteps = [
  ["01", "Tell us what you need", "Share your business, idea, pages and features on WhatsApp or through the order form."],
  ["02", "Plan & design", "We turn your requirements into a clear structure and modern visual direction."],
  ["03", "Build & review", "We develop the website and give you opportunities to review the work."],
  ["04", "Launch", "We help with deployment, domain setup and the final handover."],
];

const fadeIn = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function HomePage() {
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <>
      <section className="relative min-h-[88vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Modern website design and development" className="w-full h-full object-cover" loading="eager" fetchPriority="high" />
          <div className="absolute inset-0 bg-background/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/65 to-background" />
        </div>
        <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-28 pb-20">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-semibold">
              <Globe className="h-4 w-4" /> Website Design & Development in Kenya
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="mt-7 text-4xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.02] tracking-tight">
              We build websites that help <span className="text-gradient-primary">your business grow.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              From affordable business websites and online shops to church, school and custom web applications — we design and build for real people and real businesses in Kenya.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 h-13 px-7">
                <Link to="/order">Start Your Website <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-13 px-7 bg-background/60">
                <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />Chat on WhatsApp</a>
              </Button>
            </motion.div>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span><CheckCircle2 className="inline h-4 w-4 text-primary mr-1" />Mobile-first</span>
              <span><CheckCircle2 className="inline h-4 w-4 text-primary mr-1" />M-Pesa ready</span>
              <span><CheckCircle2 className="inline h-4 w-4 text-primary mr-1" />SEO-ready</span>
              <span><CheckCircle2 className="inline h-4 w-4 text-primary mr-1" />From KES 5,000</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 border-y border-border bg-card/40">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[["7+", "Projects & platforms shown"], ["6+", "Website categories"], ["KES 5K", "Starting point"], ["WhatsApp", "Direct support"]].map(([value, label]) => (
              <div key={label}><div className="text-2xl md:text-3xl font-display font-extrabold text-primary">{value}</div><div className="mt-1 text-sm text-muted-foreground">{label}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="max-w-2xl mb-12">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">What we build</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-extrabold">One team. Many kinds of websites.</h2>
            <p className="mt-4 text-muted-foreground text-lg">Whether you are launching a business, selling online, building a community or creating a custom system, we can build around your goals.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {serviceCards.map((service) => (
              <motion.div key={service.title} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center"><service.icon className="h-5 w-5 text-primary" /></div>
                <h3 className="mt-5 text-xl font-display font-bold">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                <Link to="/services" className="mt-4 inline-flex items-center text-sm font-semibold text-primary">Explore service <ChevronRight className="ml-1 h-4 w-4" /></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between gap-5 items-start md:items-end mb-12">
            <div><span className="text-sm font-semibold text-primary uppercase tracking-widest">Selected work</span><h2 className="mt-3 text-3xl md:text-5xl font-display font-extrabold">Different industries. Real projects.</h2><p className="mt-3 text-muted-foreground max-w-xl">Our work spans education, marketplaces, organisations, business websites and custom digital platforms.</p></div>
            <Button asChild variant="outline"><Link to="/portfolio">See full portfolio <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioProjects.slice(0, 6).map((project) => (
              <motion.article key={project.id} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="overflow-hidden rounded-2xl bg-card border border-border group">
                <div className="h-48 bg-muted overflow-hidden">{project.image && <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}</div>
                <div className="p-5"><span className="text-xs font-semibold uppercase tracking-wider text-primary">{project.category}</span><h3 className="mt-2 text-lg font-display font-bold">{project.title}</h3><p className="mt-2 text-sm text-muted-foreground line-clamp-2">{project.description}</p><a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">View project <ExternalLink className="h-3 w-3" /></a></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12"><span className="text-sm font-semibold text-primary uppercase tracking-widest">Why work with us</span><h2 className="mt-3 text-3xl md:text-5xl font-display font-extrabold">A website should do more than look good.</h2><p className="mt-4 text-muted-foreground">We focus on clear messaging, mobile usability, speed and simple ways for customers to contact you.</p></div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{reasons.map((item) => <div key={item.title} className="p-6 rounded-2xl border border-border bg-card"><div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center"><item.icon className="h-5 w-5 text-primary" /></div><h3 className="mt-4 font-display font-bold">{item.title}</h3><p className="mt-2 text-sm text-muted-foreground">{item.description}</p></div>)}</div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8"><div className="text-center mb-12"><span className="text-sm font-semibold text-primary uppercase tracking-widest">How it works</span><h2 className="mt-3 text-3xl md:text-5xl font-display font-extrabold">From idea to launch</h2></div><div className="grid md:grid-cols-4 gap-6">{processSteps.map(([num, title, desc]) => <div key={num} className="relative"><div className="text-4xl font-display font-extrabold text-primary/20">{num}</div><h3 className="mt-2 text-lg font-display font-bold">{title}</h3><p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p></div>)}</div></div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8"><div className="max-w-3xl mx-auto rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-14 text-center"><span className="inline-flex items-center gap-2 text-sm font-semibold text-primary"><Building2 className="h-4 w-4" /> For businesses, organisations & individuals</span><h2 className="mt-4 text-3xl md:text-5xl font-display font-extrabold">Have an idea? Let's build it.</h2><p className="mt-4 text-muted-foreground text-lg">Tell us what you want to achieve, your budget and your timeline. We'll help you choose the right website or web application.</p><div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"><Button asChild size="lg" className="bg-gradient-primary text-primary-foreground"><Link to="/order">Request a Website <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp Us</a></Button></div><p className="mt-4 text-sm text-muted-foreground">Starting from KES 5,000 · Free initial consultation</p></div></div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4 lg:px-8"><div className="flex items-end justify-between gap-4 mb-8"><div><span className="text-sm font-semibold text-primary uppercase tracking-widest">Knowledge bank</span><h2 className="mt-2 text-2xl md:text-3xl font-display font-extrabold">Useful website & digital guides</h2></div><Link to="/blog" className="hidden sm:flex items-center text-sm font-semibold text-primary">View all <ArrowRight className="ml-1 h-4 w-4" /></Link></div><div className="grid md:grid-cols-3 gap-5">{recentPosts.map((post) => <Link key={post.id} to={`/blog/${post.slug}`} className="p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors"><span className="text-xs font-semibold text-primary uppercase">{post.category}</span><h3 className="mt-2 font-display font-bold text-lg">{post.title}</h3><p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p></Link>)}</div></div>
      </section>
    </>
  );
}
