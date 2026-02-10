import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Globe, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import aboutBg from "@/assets/about-bg.jpg";
import { fadeUp } from "@/lib/animations";

const values = [
  { icon: Target, title: "Results-Driven", description: "Every pixel serves a purpose. We design for outcomes, not just aesthetics." },
  { icon: Globe, title: "Kenya-First", description: "We understand Kenyan churches — M-Pesa, mobile-first, and affordable solutions." },
  { icon: Users, title: "Client-First", description: "Your success is our success. We're available 24/7 and committed to your vision." },
  { icon: Award, title: "Quality Obsessed", description: "We never cut corners. Clean code, fast performance, and pixel-perfect design — every time." },
];

const faqs = [
  { q: "How long does it take to build a website?", a: "Ready-made websites can be delivered within 2–3 days. Custom projects typically take 1–4 weeks depending on complexity. Enterprise applications may take 1–3 months." },
  { q: "What's included in every website?", a: "Every site includes responsive design, SEO optimization, mobile-friendly layout, SSL security, analytics setup, and post-launch support. Custom projects include additional features based on your requirements." },
  { q: "Do you work with international clients?", a: "Absolutely! We work with clients across Africa, Europe, North America, and Asia. We communicate via WhatsApp, email, and video calls." },
  { q: "What are the payment terms?", a: "We require a 50% deposit to begin work, with the remaining 50% due upon delivery. We accept M-Pesa, bank transfer, PayPal, and Wise." },
  { q: "Can I update the site myself after it's built?", a: "Yes! We can integrate a CMS so you can easily manage your content. We also provide training and documentation." },
  { q: "Do you offer hosting and maintenance?", a: "Yes. We can set up hosting on platforms like Vercel, Netlify, or traditional hosting. We also offer monthly maintenance plans." },
  { q: "What if I'm not satisfied with the design?", a: "We offer unlimited design revisions during the project. If you're not happy with the final product, we offer a money-back guarantee." },
  { q: "Do you build mobile apps?", a: "We specialize in web applications, which work perfectly on mobile browsers. For native apps, we can build progressive web apps (PWAs) that work like native apps." },
];

const team = [
  { name: "Lead Developer", role: "Full-Stack Engineering", skills: "React, Node.js, TypeScript, Supabase" },
  { name: "UI/UX Designer", role: "Design & User Experience", skills: "Figma, Tailwind CSS, Motion Design" },
  { name: "Project Manager", role: "Client Relations", skills: "Agile, Communication, Planning" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src={aboutBg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">About Us</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-display font-extrabold">
              We're Building the <span className="text-gradient-primary">Digital Future</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              OmnexusKE is a web development agency headquartered in Nairobi, Kenya. We're a team of passionate developers, designers, and strategists who specialize in building professional church websites and digital platforms for businesses across Kenya.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              Since our founding, we've delivered 50+ projects for clients across Kenya and beyond — from small churches in rural areas to growing businesses in Nairobi. Our mission: build websites that perform, convert, and grow with your ministry or business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold">Our Values</h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-display font-bold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-extrabold">Our Team</h2>
            <p className="mt-4 text-muted-foreground">Small team. Big results.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={member.name}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display font-bold">{member.name}</h3>
                <p className="text-sm text-primary mt-1">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-2">{member.skills}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">FAQ</span>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-extrabold">
              Frequently Asked Questions
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="rounded-xl bg-card border border-border px-6 data-[state=open]:border-primary/20 transition-colors"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-extrabold">Let's Work Together</h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">Ready to bring your vision to life? We'd love to hear from you.</p>
          <Button asChild size="lg" className="mt-8 bg-gradient-primary text-primary-foreground hover:opacity-90 h-14 px-8">
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
