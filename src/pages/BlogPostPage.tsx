import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  TrendingUp,
  Smartphone,
  CreditCard,
  Video,
  CalendarDays,
  Users,
  BookOpen,
  MapPin,
  Heart,
  Church,
  Mic,
  Shield,
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

const mustHaveFeatures = [
  { icon: Smartphone, title: "Mobile-First Design", stat: "82% of Kenyan church website visitors use smartphones", detail: "Buttons big enough to tap with thumb, text readable without zooming, forms that work on small screens, fast loading on mobile data." },
  { icon: CreditCard, title: "M-Pesa Integration", stat: "Churches with M-Pesa see 40-60% increase in total giving", detail: "STK Push for instant payments, recurring giving for automatic monthly tithes, project-specific donations, giving history, and tax receipts." },
  { icon: Video, title: "Live Streaming Setup", stat: "Reach 5× more people than physical capacity", detail: "YouTube Live (free, unlimited viewers), Facebook Live, or premium direct website streaming. Basic setup from KES 15,000." },
  { icon: Mic, title: "Sermon Archive & Podcast", stat: "Average sermon gets 47 listens during the week", detail: "Automatic podcast feed for iTunes, Spotify, Google Podcasts. Sermon notes PDF, scripture references, and search by topic." },
  { icon: CalendarDays, title: "Event Registration System", stat: "Stop using WhatsApp groups for event registration", detail: "Online registration form, automatic confirmation email, M-Pesa payment, attendance tracking, email reminders, QR code tickets." },
  { icon: Users, title: "First-Time Visitor Info", stat: "3× more visitors with detailed 'New Here?' pages", detail: "What to expect, service times, parking info, what to wear, children's ministry, directions, and a 30-60 second welcome video." },
  { icon: Heart, title: "Online Prayer Requests", stat: "Build deeper connection beyond Sunday", detail: "Name optional (anonymous allowed), request goes to prayer team immediately, auto-confirmation email, follow-up after one week." },
  { icon: Shield, title: "Membership Portal", stat: "Give members a private login area", detail: "View giving history, download tax receipts, update info, access members-only content, small group information." },
  { icon: Church, title: "Small Groups & Ministries", stat: "Help people find where they belong", detail: "Ministry name, meeting times, leader photos, WhatsApp group links, how to join, searchable by age/interest/location." },
  { icon: BookOpen, title: "Blog for Spiritual Content", stat: "Every blog post = new Google ranking opportunity", detail: "Weekly devotionals, biblical teachings, marriage advice, testimonies. Minimum 2 posts/month, ideal 1 post/week." },
  { icon: MapPin, title: "Contact & Location", stat: "Make it impossibly easy to reach you", detail: "Google Maps embed, click-to-call phone, WhatsApp click-to-chat, directions from major landmarks, photos of building." },
  { icon: TrendingUp, title: "Social Media Integration", stat: "Connect all your platforms", detail: "Display latest Instagram posts, Facebook feed, YouTube videos. Social sharing for sermons and events on WhatsApp." },
];

const pricingPackages = [
  { name: "Starter Church", price: "KES 5,000", audience: "Small churches (50-200 members)", time: "1-2 weeks", features: ["5 pages", "Mobile-responsive design", "Basic M-Pesa integration", "Contact form", "Google Maps", "1 year hosting + domain", "SSL certificate", "Basic SEO", "3 revisions"] },
  { name: "Growing Church", price: "KES 55,000", audience: "Medium churches (200-500 members)", time: "2-3 weeks", features: ["Everything in Starter, PLUS:", "10+ pages", "Advanced M-Pesa (recurring)", "Sermon upload system", "Event registration & payments", "Email newsletter", "Blog section", "Social media integration", "Prayer request form", "Advanced SEO", "Training (Zoom)"], popular: true },
  { name: "Established Church", price: "KES 95,000", audience: "Large churches (500+ members)", time: "3-4 weeks", features: ["Everything in Growing, PLUS:", "Member portal (login area)", "Giving history for members", "Small groups management", "Ministry directory", "Live chat support", "Monthly content updates", "Advanced analytics", "Priority support", "2-hour training"] },
  { name: "Mega Church", price: "KES 150,000+", audience: "Very large, multi-site churches", time: "4-6 weeks", features: ["Custom features:", "Multi-site support", "Mobile app (Android/iOS)", "Advanced member management", "Attendance tracking", "Custom integrations", "Dedicated account manager", "Monthly maintenance", "Content creation service"] },
];

const deadlyMistakes = [
  { title: "\"We'll Launch When It's Perfect\"", problem: "6 months later, still no website.", solution: "Launch with 5 essential pages. Add features monthly. Launch in 1 week. Improve forever." },
  { title: "Outdated Content", problem: "Last sermon from 2023. Events from 6 months ago.", solution: "Assign someone to update weekly. Time needed: 15 minutes/week." },
  { title: "No Clear Call-to-Action", problem: "Visitor lands on homepage. Now what?", solution: "Big button: 'Plan Your Visit This Sunday'. Second: 'Watch Last Week's Sermon'. Third: 'Join a Small Group'." },
  { title: "Ignoring Mobile Users", problem: "82% browse on phones but your site is desktop-first.", solution: "Mobile-first, thumb-friendly navigation. Perfect on Samsung, Tecno, iPhone." },
  { title: "No M-Pesa = No Online Giving", problem: "Members can only give in person.", solution: "Add M-Pesa integration. Churches see 40-60% increase in total giving." },
  { title: "Treating Website as 'Set and Forget'", problem: "No updates = hacked site (recovery: KES 50,000+).", solution: "Monthly maintenance: KES 5,000/month for security, backups, and updates." },
  { title: "No Analytics = Flying Blind", problem: "You don't know how many visitors or which pages work.", solution: "Free tool: Google Analytics. Monthly review: 30 minutes." },
];

const caseStudies = [
  { church: "Faith Community Church, Karen", before: { members: "180", tithes: "KES 450,000/month", visitors: "2-3/month" }, after: { members: "340 (+89%)", tithes: "KES 820,000/month (+82%)", visitors: "15-20/month", online: "KES 180,000 raised online" }, quote: "The website became our #1 evangelism tool. People watch sermons, then visit. They already feel connected before they arrive.", pastor: "Pastor John" },
  { church: "Victory Chapel, Mombasa", before: { members: "Local only", tithes: "Limited", visitors: "Word-of-mouth" }, after: { members: "450 online viewers/Sunday", tithes: "KES 650,000 diaspora giving", visitors: "Members in 12 countries", online: "89 salvation testimonies" }, quote: "Our website turned our church from local to global. We're pastoring people in USA, UK, Australia — all from Mombasa.", pastor: "Pastor Mary" },
  { church: "Harvest Community, Nakuru", before: { members: "New church (2 years)", tithes: "Limited budget", visitors: "Few" }, after: { members: "145 new members via Google", tithes: "KES 240,000 online giving", visitors: "3× more event registrations", online: "Phase approach: KES 95,000 over 8 months" }, quote: "We couldn't afford KES 95,000 upfront. Breaking it into phases made it possible. Best investment we made.", pastor: "Pastor David" },
];

const blogFaq = [
  { q: "How much does a church website cost in Kenya?", a: "Church websites range from KES 5,000 (basic) to KES 150,000+ (advanced). Basic: 5 pages, mobile-responsive, basic M-Pesa. Growing: 10+ pages, sermon system, event registration. Established: member portal, small groups, advanced features." },
  { q: "How long does it take to build?", a: "Basic site: 1-2 weeks. Medium site: 2-3 weeks. Advanced site: 3-4 weeks. Custom/complex: 4-6 weeks. We provide weekly updates via WhatsApp." },
  { q: "Can I update the website myself?", a: "YES! We build user-friendly sites where you can upload sermons, add events, post blog articles, update service times, and change photos. We provide free training (Zoom or in-person)." },
  { q: "Do you serve churches outside Nairobi?", a: "YES! We serve churches across all of Kenya: Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, Thika, and beyond. All services available remotely with WhatsApp support." },
  { q: "Do you integrate M-Pesa?", a: "YES! M-Pesa integration included in all packages. STK Push, recurring giving, project-specific donations, giving history, and tax receipts." },
  { q: "What if I don't have content ready?", a: "No problem! We can write your About Us page, create basic content, use stock photos temporarily, and design a simple logo. You provide basic info via phone interview, we create complete website content." },
  { q: "Do you provide hosting?", a: "YES! All packages include 1 year free hosting (Kenya servers). After first year: Basic KES 4,000/year, Standard KES 6,000/year, Premium KES 10,000/year." },
  { q: "What about SEO?", a: "Every website includes basic SEO: optimized page titles, meta descriptions, image optimization, Google My Business setup, and sitemap submission. Advanced SEO available from KES 10,000/month." },
  { q: "What if something breaks?", a: "Free support first 30 days (unlimited fixes). After that: per-incident support or monthly maintenance (KES 5,000/month) for security updates, backups, speed optimization, and priority support." },
];

export default function BlogPostPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Blog · Knowledge Bank</span>
            <h1 className="mt-4 text-3xl md:text-5xl font-display font-extrabold leading-tight">
              Transform Your Church's Digital Presence: The Complete Guide <span className="text-gradient-primary">2026</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Build a powerful church website in Kenya with M-Pesa donations, live streaming, sermon archives & mobile optimization.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Last updated: February 2026 · 25 min read
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why 2026 is the Year */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-extrabold mb-6">Why 2026 is the Year Your Church Must Go Digital</h2>
            <div className="p-6 rounded-2xl bg-card border border-border mb-6">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sunday morning, 10:45 AM. Mary is searching on her phone: <em>"youth-friendly churches near Westlands."</em> Your church has an amazing youth ministry. But Mary can't find you online. She visits three other churches' websites, checks their Instagram, watches their welcome videos, and picks one.
              </p>
              <p className="text-foreground font-bold">Your church never appeared in her search.</p>
              <p className="mt-3 text-muted-foreground">This happens <strong className="text-foreground">hundreds of times every month</strong> across Nairobi, Mombasa, Kisumu, and every major Kenyan city.</p>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">The reality:</strong> In 2026, if your church isn't online, it's invisible to 73% of potential visitors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facebook vs Website */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-extrabold mb-6">The #1 Mistake Kenyan Churches Make Online</h2>
            <p className="text-muted-foreground mb-6">Most churches think: <em>"We just need a Facebook page."</em> <strong className="text-foreground">Wrong.</strong></p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-destructive/5 border border-destructive/20">
                <h3 className="font-display font-bold text-foreground mb-3">❌ Facebook-Only Church</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>→ New visitor sees your event on Facebook</p>
                  <p>→ Wants to know: service times, location, what to expect</p>
                  <p>→ Finds: random posts, no organized info</p>
                  <p className="font-bold text-destructive">Result: They visit another church</p>
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <h3 className="font-display font-bold text-foreground mb-3">✅ Church With Professional Website</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>→ New visitor finds you on Google</p>
                  <p>→ Sees: clear service times, welcome video, parking info</p>
                  <p>→ Fills out "Planning to Visit" form</p>
                  <p className="font-bold text-primary">Result: They show up Sunday morning</p>
                </div>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground">A professional church website converts <strong className="text-foreground">4× more</strong> visitors than Facebook alone.</p>
          </motion.div>
        </div>
      </section>

      {/* Kenya-specific difference */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-extrabold mb-6">What Makes a Kenyan Church Website Different?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { bad: "\"Donate via PayPal\" → Kenyans don't use PayPal", good: "\"Give via M-Pesa\" with Paybill → 92% of Kenyans use M-Pesa" },
                { bad: "No consideration for data costs → Heavy websites eat expensive data", good: "Optimized images, fast loading → Loads in 3 seconds even on slow 3G" },
                { bad: "Desktop-first design → Most Kenyans browse on phones", good: "Mobile-first, thumb-friendly → Perfect on Samsung, Tecno, iPhone" },
              ].map((item, i) => (
                <div key={i} className="col-span-2 grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/10">
                    <p className="text-sm"><span className="text-destructive font-bold">🚫 Generic:</span> <span className="text-muted-foreground">{item.bad}</span></p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <p className="text-sm"><span className="text-primary font-bold">✅ Kenyan:</span> <span className="text-muted-foreground">{item.good}</span></p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 12 Must-Have Features */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold">The 12 Must-Have Features</h2>
            <p className="mt-3 text-muted-foreground">Everything your church website needs to grow in 2026.</p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {mustHaveFeatures.map((f) => (
              <motion.div key={f.title} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <f.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-bold text-foreground">{f.title}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{f.stat}</p>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.detail}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-extrabold">Church Website Pricing (2026 Reality Check)</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPackages.map((pkg) => (
              <motion.div key={pkg.name} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className={`relative rounded-2xl p-6 ${pkg.popular ? "bg-card border-2 border-primary glow-primary" : "bg-card border border-border"}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground text-xs font-bold"><Star className="h-3 w-3 fill-current" /> Popular</span>
                  </div>
                )}
                <h3 className="text-lg font-display font-bold">{pkg.name}</h3>
                <div className="mt-3"><span className="text-2xl font-display font-extrabold">{pkg.price}</span></div>
                <p className="mt-1 text-xs text-muted-foreground">{pkg.audience}</p>
                <p className="text-xs text-primary font-medium mt-1">Setup: {pkg.time}</p>
                <div className="mt-4 space-y-1.5">
                  {pkg.features.map((f) => (
                    <div key={f} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                      <span className="text-foreground">{f}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full mt-6 bg-gradient-primary text-primary-foreground hover:opacity-90" size="sm">
                  <Link to="/order">Get Started <ArrowRight className="ml-2 h-3.5 w-3.5" /></Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Deadly Mistakes */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-extrabold mb-8">7 Deadly Mistakes Kenyan Churches Make Online</h2>
            <div className="space-y-4">
              {deadlyMistakes.map((m, i) => (
                <div key={i} className="p-5 rounded-2xl bg-card border border-border">
                  <h3 className="text-base font-display font-bold text-foreground flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-destructive shrink-0" />
                    Mistake #{i + 1}: {m.title}
                  </h3>
                  <p className="mt-1 text-sm text-destructive">Problem: {m.problem}</p>
                  <p className="mt-1 text-sm text-muted-foreground"><strong className="text-foreground">Solution:</strong> {m.solution}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl font-display font-extrabold mb-8">Real Success Stories: Kenyan Churches</h2>
            <div className="space-y-8">
              {caseStudies.map((cs) => (
                <div key={cs.church} className="p-6 rounded-2xl bg-card border border-border">
                  <h3 className="text-lg font-display font-bold text-foreground mb-4">{cs.church}</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-4">
                    <div>
                      <h4 className="text-sm font-bold text-destructive mb-2">Before Website:</h4>
                      {Object.entries(cs.before).map(([k, v]) => (
                        <div key={k} className="flex items-center gap-2 text-sm"><XCircle className="h-3.5 w-3.5 text-destructive shrink-0" /><span className="text-muted-foreground">{v}</span></div>
                      ))}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary mb-2">After Website:</h4>
                      {Object.entries(cs.after).map(([k, v]) => (
                        <div key={k} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /><span className="text-muted-foreground">{v}</span></div>
                      ))}
                    </div>
                  </div>
                  <blockquote className="border-l-2 border-primary pl-4 italic text-sm text-muted-foreground">"{cs.quote}"</blockquote>
                  <p className="mt-2 text-xs font-medium text-foreground">— {cs.pastor}</p>
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
            <h2 className="text-3xl font-display font-extrabold mb-8">DIY vs Professional: The Truth</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-card border border-border">
                <h3 className="text-lg font-display font-bold mb-4">DIY Church Website</h3>
                <p className="text-sm text-muted-foreground mb-3">Time investment: <strong className="text-foreground">75+ hours</strong></p>
                <p className="text-sm text-muted-foreground mb-3">Hidden costs: <strong className="text-foreground">KES 32,500</strong></p>
                <div className="space-y-1.5">
                  {["Not mobile-optimized", "Poor SEO", "Security issues", "No M-Pesa expertise", "Looks 'homemade'", "No support when things break"].map((c) => (
                    <div key={c} className="flex items-center gap-2 text-sm"><XCircle className="h-3.5 w-3.5 text-destructive shrink-0" /><span className="text-muted-foreground">{c}</span></div>
                  ))}
                </div>
              </div>
              <div className="p-6 rounded-2xl bg-card border-2 border-primary glow-primary">
                <h3 className="text-lg font-display font-bold mb-4">Professional Service ✨</h3>
                <p className="text-sm text-muted-foreground mb-3">Investment: <strong className="text-foreground">KES 5,000 – 95,000</strong></p>
                <p className="text-sm text-muted-foreground mb-3">ROI: <strong className="text-foreground">Pays for itself in 2-3 months</strong></p>
                <div className="space-y-1.5">
                  {["Done in 1-3 weeks", "Mobile-optimized", "SEO-ready", "M-Pesa working perfectly", "Professional design", "Training included", "Ongoing support"].map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" /><span className="text-muted-foreground">{p}</span></div>
                  ))}
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
            <h2 className="text-3xl font-display font-extrabold text-center mb-12">Getting Started: 5 Simple Steps</h2>
            <div className="space-y-6">
              {[
                { step: "1", title: "Define Your Goals", desc: "Answer: Primary goal? Target audience? Budget range (KES 5k-150k)? Timeline? Time needed: 30 minutes." },
                { step: "2", title: "Gather Your Content", desc: "Church logo, photos, About Us text, service times, pastor bio. Don't have them? We'll help create everything." },
                { step: "3", title: "Free Consultation", desc: "WhatsApp: 0115475543. We'll discuss goals, features, timeline and give a free quote within 24 hours." },
                { step: "4", title: "Design & Development", desc: "Week 1: We design homepage. Week 2: We build the site. Week 3: You review, we make revisions. Your involvement: 2-3 hours total." },
                { step: "5", title: "Launch & Grow", desc: "Site goes live, we monitor for issues, submit to Google, add analytics, start SEO work, train your team." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shrink-0">
                    <span className="text-primary-foreground font-display font-bold">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                  </div>
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
            <h2 className="text-3xl font-display font-extrabold text-center mb-10">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-3">
              {blogFaq.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-5 bg-card">
                  <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold">
              Your Church's <span className="text-gradient-primary">Digital Mission Field</span>
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Your website isn't just a website. It's your church's 24/7 digital campus. It's your online pastor. It's your digital missions field.
            </p>
            <p className="mt-4 text-lg font-display font-bold text-foreground">Don't wait another Sunday.</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 h-12 px-7">
                <Link to="/order">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
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

      {/* Related */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h3 className="text-xl font-display font-bold mb-6">Related Resources</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "10 Best Church Website Examples in Kenya 2026",
              "How to Set Up Church Live Streaming in Kenya",
              "Complete Guide to M-Pesa Church Donations",
              "Church Social Media Strategy for Kenya",
              "How to Grow Your Church Using Digital Tools",
            ].map((article) => (
              <div key={article} className="p-4 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary shrink-0" />
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
