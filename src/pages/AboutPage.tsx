import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Globe, Code2, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import aboutBg from "@/assets/about-bg.jpg";
import { WHATSAPP_URL } from "@/lib/constants";

const values = [
  { icon: Target, title: "Goal-focused", description: "We start with what the website needs to achieve — enquiries, sales, information, bookings or a digital workflow." },
  { icon: Globe, title: "Built for Kenya", description: "We understand mobile-first browsing, WhatsApp communication and Kenyan payment options such as M-Pesa." },
  { icon: Code2, title: "Practical technology", description: "We choose tools that fit the project and build websites that are maintainable and ready to grow." },
  { icon: Users, title: "Direct communication", description: "You can work directly with us through WhatsApp, email and project reviews instead of getting lost in a large agency." },
];

const faqs = [
  { q: "What types of websites do you build?", a: "Business websites, e-commerce stores, church and organisation websites, school and education platforms, personal portfolios, marketplaces and custom web applications." },
  { q: "How much does a website cost?", a: "Our current starting points are KES 5,000 for a starter website, KES 15,000 for a business website, and custom quotes for e-commerce and web applications. The final price depends on the pages, design and functionality required." },
  { q: "How long does a website take?", a: "A simple website can be completed quickly once the content and requirements are ready. Larger business sites, stores and custom applications take longer. We'll agree on a realistic timeline before work begins." },
  { q: "Can you add M-Pesa payments?", a: "Yes, where the project requires it. Payment integration is scoped separately according to the payment provider, checkout flow and backend requirements." },
  { q: "Do you work with clients outside Kenya?", a: "Yes. Projects can be handled remotely through WhatsApp, email and online meetings." },
  { q: "Can you improve my existing website?", a: "Yes. We can redesign pages, improve mobile experience, fix bugs, improve performance, add features and restructure content." },
  { q: "What do I need to start?", a: "Tell us what your business or project does, what you want the website to achieve, your approximate budget and any examples you like. We'll help define the next step." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20"><img src={aboutBg} alt="" className="w-full h-full object-cover" /></div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">About KenyaAdverts</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-display font-extrabold">We build digital experiences for <span className="text-gradient-primary">real-world needs.</span></h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">KenyaAdverts.co.ke is a web design and development studio focused on helping businesses, organisations and individuals build a stronger online presence.</p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-3xl">Our portfolio includes education platforms, marketplaces, organisation websites, business websites and project-based digital products. We build both straightforward websites and more involved web applications.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3"><Button asChild size="lg" className="bg-gradient-primary"><Link to="/order">Start a project <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp us</a></Button></div>
          </motion.div>
        </div>
      </section>

      <section className="py-24"><div className="container mx-auto px-4 lg:px-8"><div className="text-center mb-12"><span className="text-sm font-semibold text-primary uppercase tracking-widest">How we work</span><h2 className="mt-3 text-3xl md:text-5xl font-display font-extrabold">Simple, clear and practical.</h2></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{values.map(v => <div key={v.title} className="p-6 rounded-2xl bg-card border border-border"><div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"><v.icon className="h-6 w-6 text-primary" /></div><h3 className="mt-5 font-display font-bold text-lg">{v.title}</h3><p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.description}</p></div>)}</div></div></section>

      <section className="py-24 bg-muted/20"><div className="container mx-auto px-4 lg:px-8 max-w-5xl"><div className="grid md:grid-cols-3 gap-6"><div className="md:col-span-2 p-8 rounded-2xl bg-card border border-border"><span className="text-sm font-semibold text-primary">WHAT MATTERS TO US</span><h2 className="mt-3 text-3xl font-display font-extrabold">Your website should have a job.</h2><p className="mt-4 text-muted-foreground leading-relaxed">A business website should help people understand what you offer and contact you. A store should make it easy to discover and buy. An organisation site should make information easy to find. A custom application should solve a workflow problem. We design around that purpose.</p><div className="mt-6 grid sm:grid-cols-2 gap-3">{["Clear messaging", "Mobile usability", "Fast-loading pages", "Strong calls to action", "Search-friendly structure", "Scalable functionality"].map(x => <div key={x} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" />{x}</div>)}</div></div><div className="p-8 rounded-2xl bg-primary text-primary-foreground"><h3 className="text-2xl font-display font-extrabold">Have a project?</h3><p className="mt-3 text-sm opacity-85">Tell us what you're trying to build and we'll help you work out the right approach.</p><Button asChild variant="secondary" className="mt-7 w-full"><Link to="/order">Start here <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></div></div></section>

      <section id="faq" className="py-24"><div className="container mx-auto px-4 lg:px-8"><div className="text-center mb-12"><span className="text-sm font-semibold text-primary uppercase tracking-widest">FAQ</span><h2 className="mt-3 text-3xl md:text-5xl font-display font-extrabold">Questions clients ask</h2></div><div className="max-w-3xl mx-auto"><Accordion type="single" collapsible className="space-y-3">{faqs.map((faq, i) => <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl bg-card border border-border px-6"><AccordionTrigger className="text-left font-semibold hover:text-primary py-5">{faq.q}</AccordionTrigger><AccordionContent className="text-muted-foreground leading-relaxed pb-5">{faq.a}</AccordionContent></AccordionItem>)}</Accordion></div></div></section>

      <section className="py-24 bg-muted/20"><div className="container mx-auto px-4 lg:px-8 text-center"><h2 className="text-3xl md:text-5xl font-display font-extrabold">Let's build something useful.</h2><p className="mt-4 text-muted-foreground max-w-xl mx-auto">Whether you're starting a business, selling online or improving an existing website, let's discuss what you need.</p><Button asChild size="lg" className="mt-8 bg-gradient-primary"><Link to="/order">Request a quote <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></section>
    </>
  );
}
