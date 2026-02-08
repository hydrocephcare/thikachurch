import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Smartphone,
  CreditCard,
  Mic,
  CalendarDays,
  Users,
  Church,
  Video,
  BookOpen,
  MapPin,
  Heart,
  CheckCircle2,
  XCircle,
  ArrowRight,
  MessageCircle,
  TrendingUp,
  Lightbulb,
  AlertTriangle,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WHATSAPP_URL, WHATSAPP_ORDER_URL, PHONE_DISPLAY } from "@/lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const essentialFeatures = [
  {
    icon: Smartphone,
    title: "Mobile-Responsive Design",
    why: "76% of Kenyan church website visitors use smartphones.",
    detail:
      "Your website must look perfect on Samsung Galaxy phones, iPhones, tablets, and desktops. When Sister Jane searches for 'churches in Karen' on her phone during lunch break, your site should load fast and look beautiful.",
  },
  {
    icon: CreditCard,
    title: "M-Pesa Integration for Tithes & Offerings",
    why: "M-Pesa is Kenya's preferred payment method.",
    detail:
      "Members can give tithes, pay offerings, donate to special projects, and set up recurring giving — all via M-Pesa STK push. Churches with M-Pesa integration see a 40% increase in midweek giving.",
  },
  {
    icon: Mic,
    title: "Sermon Archive & Podcast",
    why: "Members want to revisit sermons they missed.",
    detail:
      "Upload audio/video sermons, organize by date or series, share on WhatsApp/Facebook, and auto-publish to Apple Podcasts & Spotify. Extend your Sunday sermon to 1,000+ people throughout the week.",
  },
  {
    icon: CalendarDays,
    title: "Event Calendar & Registration",
    why: "Keep your congregation informed and organized.",
    detail:
      "Show Sunday service times, midweek meetings, youth events, special conferences, and community outreach. Let members register for events directly on the site.",
  },
  {
    icon: Users,
    title: "About Us & Leadership Page",
    why: "First-time visitors want to know who leads the church.",
    detail:
      "Include the pastor's biography, vision & mission statement, church history, core beliefs, and the leadership team with photos. Churches with leadership pages get 3× more contact form submissions.",
  },
  {
    icon: Church,
    title: "Ministries & Small Groups",
    why: "Help people find where they fit.",
    detail:
      "Showcase youth ministry, children's ministry, men's/women's fellowship, worship team, prayer ministry, and outreach programs — each with meeting times, contact info, and a Join button.",
  },
  {
    icon: Video,
    title: "Live Streaming Integration",
    why: "Reach members who can't attend physically.",
    detail:
      "Integrate YouTube Live, Facebook Live, and Zoom for midweek services. During COVID-19, churches with streaming reached 5× more people than their physical capacity.",
  },
  {
    icon: BookOpen,
    title: "Blog & Resources",
    why: "Provide ongoing spiritual nourishment.",
    detail:
      "Post devotionals, biblical teachings, marriage advice, parenting tips, and testimonies. Blog posts help your church rank on Google for questions like 'how to pray effectively' or 'Christian parenting tips Kenya.'",
  },
  {
    icon: MapPin,
    title: "Contact & Location (Google Maps)",
    why: "Make it easy for visitors to find you.",
    detail:
      "Include your physical address, embedded Google Maps, click-to-call phone numbers, WhatsApp number, email, social media links, and service times — all on one page.",
  },
  {
    icon: Heart,
    title: "Prayer Request Form",
    why: "Show you care beyond Sunday service.",
    detail:
      "A simple form with name, email, and request — with options for public or private submissions. Auto-email to the prayer team and WhatsApp integration for urgent requests.",
  },
];

const pricingPackages = [
  {
    name: "Basic Package",
    price: "KES 5,000",
    audience: "Perfect for small churches (50–200 members)",
    delivery: "1 week",
    features: [
      "5 pages (Home, About, Sermons, Events, Contact)",
      "Mobile-responsive design",
      "Basic M-Pesa integration",
      "1-year hosting & domain",
      "SSL certificate (secure site)",
      "SEO setup",
      "WhatsApp support",
    ],
  },
  {
    name: "Standard Package",
    price: "KES 35,000",
    audience: "Ideal for growing churches (200–500 members)",
    delivery: "2 weeks",
    features: [
      "Everything in Basic, plus:",
      "10 pages",
      "Sermon upload system (audio/video)",
      "Event registration forms",
      "Photo gallery & blog section",
      "Advanced M-Pesa (recurring giving)",
      "Social media integration",
      "Live streaming setup",
    ],
    popular: true,
  },
  {
    name: "Premium Package",
    price: "KES 75,000+",
    audience: "Best for large churches (500+ members)",
    delivery: "3–4 weeks",
    features: [
      "Everything in Standard, plus:",
      "Unlimited pages",
      "Member portal (login area)",
      "Small groups management",
      "Ministry directories",
      "Prayer wall & mobile app (Android/iOS)",
      "Advanced analytics",
      "Monthly content updates & priority support",
    ],
  },
];

const kenyanEdge = [
  "M-Pesa is essential (not Stripe or PayPal)",
  "Mobile-first design (most Kenyans use phones)",
  "Affordable hosting in Kenya",
  "Swahili/English bilingual options",
  "Kenya timezone support",
];

const servingAreas = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  "Eldoret",
  "Thika",
  "Ruiru",
  "And all regions across Kenya!",
];

const faqItems = [
  {
    q: "How much does a church website cost in Kenya?",
    a: "Church websites in Kenya range from KES 5,000 (basic) to KES 75,000+ (premium). The price depends on features like M-Pesa integration, sermon management, event registration, and mobile apps. Our basic package starts at KES 5,000 and includes hosting, domain, mobile design, and M-Pesa integration.",
  },
  {
    q: "How long does it take to build a church website?",
    a: "Most church websites take 1–2 weeks for basic sites and 3–4 weeks for advanced platforms with custom features. We provide regular updates via WhatsApp throughout the development process.",
  },
  {
    q: "Do you serve churches outside Nairobi?",
    a: "Yes! We serve churches across all of Kenya — Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Thika, Ruiru, and beyond! All services are available remotely with WhatsApp support.",
  },
  {
    q: "Can I update the website myself?",
    a: "Absolutely! We build user-friendly websites where you can upload new sermons, add events, post blog articles, update service times, and change photos. We provide free training via Zoom or in-person (if in Nairobi).",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept M-Pesa, bank transfer, and cash (for Nairobi clients). Payment plan: 50% deposit, 50% before launch.",
  },
  {
    q: "Will my website work on mobile phones?",
    a: "Yes! All our websites are mobile-responsive and optimized for smartphones, tablets, and desktops. Since most Kenyan church members access websites on mobile, we prioritize mobile experience.",
  },
  {
    q: "Do you provide M-Pesa integration?",
    a: "Yes! M-Pesa integration is included in all our packages. Members can give tithes, offerings, and donations directly from your website using M-Pesa STK push.",
  },
  {
    q: "What if I don't have a domain name yet?",
    a: "No problem! We'll help you choose a domain (e.g. yourchurch.co.ke), register it, and set up professional email. Domain cost is usually KES 1,500–3,000/year (included in our packages).",
  },
  {
    q: "Can you help with content writing?",
    a: "Yes! If you don't have written content ready, we can write it for you (based on a phone interview), edit your existing content, or provide content templates.",
  },
  {
    q: "Do you provide website hosting?",
    a: "Yes! All packages include 1-year free hosting in Kenya. After the first year, hosting costs: Basic KES 3,000/year, Standard KES 5,000/year, Premium KES 8,000/year.",
  },
  {
    q: "Can you help with social media?",
    a: "Yes! We can create your Facebook page, set up Instagram, link all social media to your website, and provide content templates. Social media management is available starting at KES 10,000/month.",
  },
];

const commonMistakes = [
  {
    icon: AlertTriangle,
    title: "No Clear Call-to-Action",
    problem: "Visitors don't know what to do next.",
    solution: "Every page should have a clear next step: 'Plan Your Visit,' 'Listen Now,' 'Register Here.'",
  },
  {
    icon: AlertTriangle,
    title: "Outdated Information",
    problem: "Last sermon from 2023, events from last year still showing.",
    solution: "Assign someone to update weekly. Set calendar reminders.",
  },
  {
    icon: AlertTriangle,
    title: "Too Much Text on Homepage",
    problem: "10 paragraphs — visitors leave before scrolling.",
    solution: "Use short paragraphs, bullet points, headings, and images. If it takes more than 10 seconds to read, it's too long.",
  },
  {
    icon: AlertTriangle,
    title: "Hidden Contact Info",
    problem: "Phone number only appears in the Contact page footer.",
    solution: "Put contact info in the header of EVERY page — phone, WhatsApp, email, and location.",
  },
  {
    icon: AlertTriangle,
    title: "Slow Loading Speed",
    problem: "Website takes 10+ seconds to load — visitors leave.",
    solution: "Compress images, use fast hosting (Kenya-based servers), remove unnecessary plugins. Target: under 3 seconds on mobile.",
  },
];

const bestPractices = [
  {
    title: "Keep It Simple",
    tips: [
      "Welcome message from pastor",
      "Service times",
      "Upcoming events (next 3)",
      "Latest sermon",
      "'New here?' button",
      "Contact information",
    ],
  },
  {
    title: "Use High-Quality Photos",
    tips: [
      "Pastor / leadership team",
      "Worship service",
      "Youth activities",
      "Children's ministry",
      "Church building exterior",
      "Community events",
    ],
  },
  {
    title: "Make Giving Easy",
    tips: [
      "Visible 'Give' button on every page",
      "Use bright colour (green, gold, blue)",
      "Place in top navigation",
      "Show M-Pesa instructions clearly",
    ],
  },
  {
    title: "Optimize for Google Search",
    tips: [
      "Include city name in page titles",
      "Write blog posts answering common questions",
      "Add Google Maps to contact page",
      "Get listed on Google Business Profile",
      "Encourage member reviews on Google",
    ],
  },
  {
    title: "Update Regularly",
    tips: [
      "Latest sermon — weekly",
      "Upcoming events — weekly",
      "New blog post — weekly",
      "Recent photos — monthly",
      "Assign a tech-savvy member to update",
    ],
  },
];

const futureTrends = [
  {
    title: "Mobile Apps",
    description:
      "Custom Android/iOS apps for push notifications, in-app giving, member directories, and daily devotionals.",
    cost: "KES 50,000–150,000",
  },
  {
    title: "AI Chatbots",
    description:
      "Answer common questions 24/7: 'What time is Sunday service?' 'How do I join a small group?'",
    cost: "KES 5,000/month",
  },
  {
    title: "Virtual Reality Tours",
    description:
      "360° virtual tours so first-time visitors can 'walk through' the church before visiting.",
    cost: "Coming soon",
  },
];

export default function KnowledgeBankPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Knowledge Bank</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-display font-extrabold leading-tight">
              Church Website Design <span className="text-gradient-primary">Kenya</span>: Complete Guide 2026
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about building a professional church website in Kenya — features, pricing, best practices, and how to get started.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: February 2026 · 18 min read
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Your Church Needs a Website */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-extrabold mb-6">
              Why Your Church Needs a Professional Website in 2026
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              In today's digital age, <strong className="text-foreground">88% of Kenyans</strong> search online before visiting a new church. If your ministry doesn't have a professional website, you're missing out on connecting with hundreds of potential members every month.
            </p>
            <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20 mb-6">
              <h3 className="text-lg font-display font-bold text-foreground mb-3">
                The Problem: Churches Without Websites Are Invisible Online
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                When someone searches "churches near me in Nairobi" or "youth-friendly church Mombasa," churches without websites simply don't appear. You're losing:
              </p>
              <div className="space-y-2">
                {[
                  "New members who found other churches online",
                  "Online donations during the week",
                  "Sermon reach beyond Sunday service",
                  "Event registrations and engagement",
                  "Credibility with younger, tech-savvy members",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <XCircle className="h-4 w-4 text-destructive shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">The solution?</strong> A professional church website designed specifically for Kenyan ministries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Essential Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold">
              What Makes a Great Church Website in Kenya?
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Based on our experience building church websites across Kenya, here are the 10 essential features every church website must have.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {essentialFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-display font-bold text-foreground">{feature.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{feature.why}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{feature.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold">
              Church Website Pricing in Kenya 2026
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPackages.map((pkg) => (
              <motion.div
                key={pkg.name}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative rounded-2xl p-8 ${
                  pkg.popular
                    ? "bg-card border-2 border-primary glow-primary"
                    : "bg-card border border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 px-4 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold">
                      <Star className="h-3 w-3 fill-current" /> Most Popular
                    </span>
                  </div>
                )}
                <h3 className="text-xl font-display font-bold">{pkg.name}</h3>
                <div className="mt-4">
                  <span className="text-3xl font-display font-extrabold">{pkg.price}</span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{pkg.audience}</p>
                <p className="text-sm text-primary font-medium mt-1">Delivery: {pkg.delivery}</p>
                <div className="mt-6 space-y-2">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{f}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full mt-8 bg-gradient-primary text-primary-foreground hover:opacity-90">
                  <Link to="/order">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-extrabold mb-8">
              Why Choose Omnexus for Your Church Website?
            </h2>

            {/* Kenya-Specific */}
            <div className="p-6 rounded-2xl bg-card border border-border mb-6">
              <h3 className="text-lg font-display font-bold text-foreground mb-3">🇰🇪 Kenya-Specific Expertise</h3>
              <div className="space-y-2">
                {kenyanEdge.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Areas Served */}
            <div className="p-6 rounded-2xl bg-card border border-border mb-6">
              <h3 className="text-lg font-display font-bold text-foreground mb-3">📍 Areas We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {servingAreas.map((area) => (
                  <span key={area} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Fast Delivery */}
            <div className="grid sm:grid-cols-2 gap-6 mb-6">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-display font-bold text-foreground mb-3">⚡ Fast Delivery</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Basic sites: <strong className="text-foreground">1 week</strong></p>
                  <p>Standard sites: <strong className="text-foreground">2 weeks</strong></p>
                  <p>Premium sites: <strong className="text-foreground">3–4 weeks</strong></p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-display font-bold text-foreground mb-3">🛡️ Ongoing Support</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Free training (upload sermons, add events)</p>
                  <p>WhatsApp support (response in 24hrs)</p>
                  <p>Monthly updates & security monitoring</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-extrabold text-center mb-12">
              How to Get Started: 3 Simple Steps
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Free Consultation (WhatsApp)",
                  description:
                    "Message us on WhatsApp: 0115475543. Tell us your church name, location, features needed, and budget. We'll give you a free quote within 24 hours.",
                },
                {
                  step: "2",
                  title: "Content Gathering",
                  description:
                    "We'll need your church logo, photos, service times, About Us text, and contact details. Don't have them? We'll help you create them!",
                },
                {
                  step: "3",
                  title: "Design, Review & Launch",
                  description:
                    "Week 1: We design. Week 2: You review. Week 3: We edit & launch. Week 4: We train you. Payment: 50% upfront, 50% before launch.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                    <span className="text-primary-foreground font-display font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-extrabold mb-8">
              Common Church Website Mistakes to Avoid
            </h2>
            <div className="space-y-4">
              {commonMistakes.map((m) => (
                <div key={m.title} className="p-5 rounded-2xl bg-card border border-border">
                  <h3 className="text-base font-display font-bold text-foreground flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-secondary shrink-0" />
                    {m.title}
                  </h3>
                  <p className="mt-1 text-sm text-destructive">Problem: {m.problem}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <strong className="text-foreground">Solution:</strong> {m.solution}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-extrabold mb-8">
              Church Website Best Practices for Kenya
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {bestPractices.map((bp) => (
                <div key={bp.title} className="p-5 rounded-2xl bg-card border border-border">
                  <h3 className="text-base font-display font-bold text-foreground mb-3">{bp.title}</h3>
                  <div className="space-y-1.5">
                    {bp.tips.map((tip) => (
                      <div key={tip} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                        {tip}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIY vs Professional */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-extrabold mb-8">
              DIY vs Professional Church Website: What's Best?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-display font-bold text-foreground mb-4">DIY Church Website</h3>
                <div className="space-y-2 mb-4">
                  {["Cheaper upfront (KES 5,000–10,000/year)", "Full control", "Learn new skills"].map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{p}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {[
                    "Time-consuming (40–60 hours)",
                    "Learning curve (WordPress, hosting, SEO)",
                    "No M-Pesa integration expertise",
                    "Limited support",
                    "Poor SEO (won't rank on Google)",
                  ].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm">
                      <XCircle className="h-4 w-4 text-destructive shrink-0" />
                      <span className="text-muted-foreground">{c}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground italic">Best for: tech-savvy pastors with lots of free time.</p>
              </div>

              <div className="p-6 rounded-2xl bg-card border-2 border-primary glow-primary">
                <h3 className="text-lg font-display font-bold text-foreground mb-4">Professional Church Website ✨</h3>
                <div className="space-y-2 mb-4">
                  {[
                    "Done in 1–2 weeks (vs. your 2 months)",
                    "Mobile-optimized",
                    "M-Pesa integrated correctly",
                    "SEO-ready (rank on Google)",
                    "Professional design",
                    "Ongoing support",
                    "Training included",
                  ].map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      <span className="text-muted-foreground">{p}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {["Upfront cost (KES 5,000–75,000)"].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm">
                      <XCircle className="h-4 w-4 text-destructive shrink-0" />
                      <span className="text-muted-foreground">{c}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-muted-foreground italic">Best for: churches serious about growth and online presence.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Future Trends */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-extrabold mb-8">
              The Future of Church Websites in Kenya
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {futureTrends.map((trend) => (
                <div key={trend.title} className="p-6 rounded-2xl bg-card border border-border">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <h3 className="text-lg font-display font-bold text-foreground">{trend.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{trend.description}</p>
                  <p className="mt-2 text-sm font-medium text-primary">{trend.cost}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-extrabold text-center mb-10">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-5 bg-card">
                  <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold">
              Your Church Deserves a <span className="text-gradient-primary">Professional Website</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              In 2026, a church without a website is like a church without a sign — people simply can't find you. Whether you're a small church plant or a growing megachurch, a professional website will help new visitors find you, keep members engaged, and increase tithes.
            </p>
            <p className="mt-4 text-lg font-display font-bold text-foreground">
              Don't wait another Sunday.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 h-12 px-7">
                <Link to="/order">
                  Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-12 px-7">
                <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp: {PHONE_DISPLAY}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related articles placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h3 className="text-xl font-display font-bold mb-6">Related Articles</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/blog/church-website-guide-2026" className="p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
              <div className="flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-primary shrink-0" />
                <span className="text-sm font-medium text-foreground">Transform Your Church's Digital Presence: Complete Guide 2026</span>
              </div>
              <span className="text-xs text-primary mt-1 block">Read now →</span>
            </Link>
            {[
              "How to Set Up M-Pesa Church Donations in Kenya",
              "10 Best Church Website Examples in Kenya 2026",
              "Church Website vs Church App: Which Do You Need?",
              "How to Live Stream Your Church Service on YouTube",
              "Complete Guide to Church SEO in Kenya",
            ].map((article) => (
              <div key={article} className="p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors cursor-pointer">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{article}</span>
                </div>
                <span className="text-xs text-muted-foreground mt-1 block">Coming soon</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
