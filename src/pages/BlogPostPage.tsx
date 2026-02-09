import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  MessageCircle,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Smartphone,
  CreditCard,
  Video,
  Users,
  TrendingUp,
  Lightbulb,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getBlogPostBySlug, blogPosts } from "@/lib/blogData";
import { WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Full content for the main featured article
function TransformChurchDigitalPresenceContent() {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      {/* Opening Story */}
      <div className="bg-muted/50 rounded-xl p-6 mb-8 not-prose">
        <p className="text-lg italic text-muted-foreground">
          Sunday morning, 10:45 AM. Mary is searching on her phone: "youth-friendly churches near Westlands."
        </p>
        <p className="text-lg italic text-muted-foreground mt-2">
          Your church has an amazing youth ministry. But Mary can't find you online.
        </p>
        <p className="text-lg italic text-muted-foreground mt-2">
          She visits three other churches' websites, checks their Instagram, watches their welcome videos, and picks one.
        </p>
        <p className="text-lg font-bold text-foreground mt-4">
          Your church never appeared in her search.
        </p>
      </div>

      <p>
        This happens <strong>hundreds of times every month</strong> across Nairobi, Mombasa, Kisumu, and every major Kenyan city.
      </p>
      <p>
        <strong>The reality:</strong> In 2026, if your church isn't online, it's invisible to 73% of potential visitors.
      </p>

      <h2>The #1 Mistake Kenyan Churches Make Online</h2>
      <p>Most churches think: <em>"We just need a Facebook page."</em></p>
      <p><strong>Wrong.</strong></p>

      <div className="grid md:grid-cols-2 gap-6 not-prose my-8">
        <div className="p-6 rounded-xl bg-destructive/10 border border-destructive/20">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <XCircle className="h-5 w-5 text-destructive" />
            Facebook-Only Church
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• New visitor sees your event on Facebook</li>
            <li>• Wants to know: service times, location, what to expect</li>
            <li>• Clicks your Facebook page</li>
            <li>• Finds: random posts, no organized info, last update 3 months ago</li>
            <li className="text-destructive font-medium">• Result: They visit another church</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl bg-primary/10 border border-primary/20">
          <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            Church With Professional Website
          </h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• New visitor finds you on Google</li>
            <li>• Visits your website</li>
            <li>• Sees: clear service times, welcome video, parking info</li>
            <li>• Watches last Sunday's sermon, fills out "Planning to Visit" form</li>
            <li className="text-primary font-medium">• Result: They show up Sunday morning</li>
          </ul>
        </div>
      </div>

      <p><strong>The difference?</strong> A professional church website converts <strong>4X more</strong> visitors than Facebook alone.</p>

      <h2>What Makes a Kenyan Church Website Different?</h2>
      <p>International church website templates don't work in Kenya. Here's why:</p>

      <div className="not-prose my-8 space-y-4">
        <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
          <XCircle className="h-5 w-5 text-destructive mt-1 shrink-0" />
          <div>
            <p className="font-medium">Generic Templates Say: "Donate via PayPal"</p>
            <p className="text-sm text-muted-foreground">→ Kenyans don't use PayPal</p>
          </div>
        </div>
        <div className="flex items-start gap-4 p-4 rounded-lg bg-primary/10">
          <CheckCircle2 className="h-5 w-5 text-primary mt-1 shrink-0" />
          <div>
            <p className="font-medium">Kenyan Church Websites Need: "Give via M-Pesa"</p>
            <p className="text-sm text-muted-foreground">→ 92% of Kenyans use M-Pesa</p>
          </div>
        </div>
      </div>

      <h2>The 12 Must-Have Features for Your Church Website</h2>

      <h3>1. Mobile-First Design (NON-NEGOTIABLE)</h3>
      <p><strong>Why it matters:</strong> 82% of Kenyan church website visitors use smartphones.</p>
      <p>What this means:</p>
      <ul>
        <li>Buttons big enough to tap with thumb</li>
        <li>Text readable without zooming</li>
        <li>Forms that work on small screens</li>
        <li>Fast loading on mobile data</li>
      </ul>

      <h3>2. M-Pesa Integration (GAME-CHANGER)</h3>
      <p><strong>The problem:</strong> Members want to give tithes but only have their phone.</p>
      <p><strong>The solution:</strong> M-Pesa STK Push on your website.</p>
      
      <div className="not-prose my-6 p-6 rounded-xl bg-primary/5 border border-primary/20">
        <h4 className="font-bold mb-4">Real Results:</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            Grace Chapel Nairobi: <strong>45% increase</strong> in weekly giving
          </li>
          <li className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            Victory Church Mombasa: <strong>KES 380,000</strong> raised online in 3 months
          </li>
          <li className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-primary" />
            Harvest Community Nakuru: <strong>120 new recurring givers</strong> via website
          </li>
        </ul>
      </div>

      <h3>3. Live Streaming Setup</h3>
      <p><strong>Platform options:</strong></p>
      <ul>
        <li><strong>YouTube Live</strong> (Free, unlimited viewers) - No cost, auto-saves recordings</li>
        <li><strong>Facebook Live</strong> (Free, great reach) - Reaches your followers, easy to share</li>
        <li><strong>Website Direct Streaming</strong> (Premium) - Professional look, no branding</li>
      </ul>

      <h3>4. Sermon Archive & Podcast</h3>
      <p>Stop losing sermons after Sunday. Average sermon gets <strong>47 listens</strong> during the week when archived properly.</p>

      <h3>5. Event Registration System</h3>
      <p>Stop using WhatsApp groups for event registration. Website registration provides: clear event details, automatic confirmation, M-Pesa payment, QR code tickets.</p>

      <h3>6. First-Time Visitor Information</h3>
      <p>Churches with detailed "New Here?" pages see <strong>3X more</strong> first-time visitors.</p>

      <h2>Church Website Pricing in Kenya (2026 Reality Check)</h2>

      <div className="not-prose my-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-xl bg-card border border-border">
          <h4 className="font-bold text-lg">Starter</h4>
          <p className="text-2xl font-bold text-primary mt-2">KES 5,000</p>
          <p className="text-sm text-muted-foreground mt-1">Small churches (50-200 members)</p>
          <p className="text-xs text-muted-foreground mt-2">5 pages, mobile-responsive, basic M-Pesa</p>
        </div>
        <div className="p-6 rounded-xl bg-card border border-border">
          <h4 className="font-bold text-lg">Growing</h4>
          <p className="text-2xl font-bold text-primary mt-2">KES 35,000</p>
          <p className="text-sm text-muted-foreground mt-1">Medium churches (200-500 members)</p>
          <p className="text-xs text-muted-foreground mt-2">10+ pages, sermon system, event registration</p>
        </div>
        <div className="p-6 rounded-xl bg-card border border-border">
          <h4 className="font-bold text-lg">Established</h4>
          <p className="text-2xl font-bold text-primary mt-2">KES 75,000</p>
          <p className="text-sm text-muted-foreground mt-1">Large churches (500+ members)</p>
          <p className="text-xs text-muted-foreground mt-2">Member portal, small groups, analytics</p>
        </div>
        <div className="p-6 rounded-xl bg-card border border-border">
          <h4 className="font-bold text-lg">Mega</h4>
          <p className="text-2xl font-bold text-primary mt-2">KES 150,000+</p>
          <p className="text-sm text-muted-foreground mt-1">Multi-site churches</p>
          <p className="text-xs text-muted-foreground mt-2">Mobile app, custom integrations</p>
        </div>
      </div>

      <h2>7 Deadly Mistakes Kenyan Churches Make Online</h2>

      <div className="not-prose my-8 space-y-4">
        {[
          { title: "\"We'll Launch When It's Perfect\"", problem: "6 months later, still no website.", solution: "Launch with 5 essential pages. Add features monthly." },
          { title: "Outdated Content", problem: "Last sermon from 2023. Events from 6 months ago.", solution: "Assign someone to update weekly." },
          { title: "No Clear Call-to-Action", problem: "Visitor lands on homepage. Now what?", solution: "Every page should answer: 'What do you want me to do next?'" },
          { title: "Ignoring Mobile Users", problem: "82% browse on phones.", solution: "Test your site on a phone right now." },
          { title: "No M-Pesa = No Online Giving", problem: "Midweek giving doesn't happen.", solution: "Churches with M-Pesa see 40-60% increase in giving." },
        ].map((mistake, i) => (
          <div key={i} className="p-4 rounded-lg bg-muted/50 border border-border">
            <h4 className="font-bold flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-warning" />
              Mistake #{i + 1}: {mistake.title}
            </h4>
            <p className="text-sm text-muted-foreground mt-1"><strong>Problem:</strong> {mistake.problem}</p>
            <p className="text-sm text-muted-foreground"><strong>Solution:</strong> {mistake.solution}</p>
          </div>
        ))}
      </div>

      <h2>Getting Started: 5 Simple Steps</h2>
      <ol>
        <li><strong>Define Your Goals</strong> - Purpose, target audience, budget, timeline</li>
        <li><strong>Gather Your Content</strong> - Logo, photos, about text, service times</li>
        <li><strong>Free Consultation</strong> - WhatsApp {PHONE_DISPLAY} for a custom quote</li>
        <li><strong>Design & Development</strong> - 1-3 weeks depending on package</li>
        <li><strong>Launch & Grow</strong> - Go live, add analytics, start SEO</li>
      </ol>

      <h2>Frequently Asked Questions</h2>
    </div>
  );
}

// Generic placeholder content for other articles
function GenericArticleContent({ post }: { post: { title: string; excerpt: string; category: string } }) {
  return (
    <div className="prose prose-lg max-w-none dark:prose-invert">
      <div className="bg-muted/50 rounded-xl p-6 mb-8 not-prose">
        <p className="text-lg italic text-muted-foreground">{post.excerpt}</p>
      </div>

      <p>
        This comprehensive guide covers everything you need to know about {post.category.toLowerCase()} for Kenyan churches.
      </p>

      <h2>Why This Matters for Kenyan Churches</h2>
      <p>
        In the digital age, churches that embrace technology are seeing significant growth. 
        Whether you're in Nairobi, Mombasa, Kisumu, or any other Kenyan city, these principles apply.
      </p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Mobile-first is essential - 82% of Kenyan web users are on phones</li>
        <li>M-Pesa integration is a must for any online giving</li>
        <li>Regular content updates keep your audience engaged</li>
        <li>SEO helps new members find your church</li>
      </ul>

      <div className="not-prose my-8 p-6 rounded-xl bg-primary/5 border border-primary/20">
        <h3 className="font-bold text-lg mb-2">Ready to Get Started?</h3>
        <p className="text-muted-foreground mb-4">
          Contact us for a free consultation and custom quote for your church website.
        </p>
        <Button asChild>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            WhatsApp Us: {PHONE_DISPLAY}
          </a>
        </Button>
      </div>

      <p className="text-muted-foreground italic">
        Full article coming soon. In the meantime, check out our main guide on{" "}
        <Link to="/blog/transform-church-digital-presence-2026" className="text-primary hover:underline">
          transforming your church's digital presence
        </Link>.
      </p>
    </div>
  );
}

const faqItems = [
  {
    q: "How much does a church website cost in Kenya?",
    a: "Church websites in Kenya range from KES 5,000 (basic) to KES 150,000+ (advanced). Our basic package starts at KES 5,000 and includes hosting, domain, mobile design, and M-Pesa integration.",
  },
  {
    q: "How long does it take to build a church website?",
    a: "Basic sites: 1-2 weeks. Medium sites: 2-3 weeks. Advanced sites: 3-4 weeks. We provide weekly updates via WhatsApp.",
  },
  {
    q: "Do you serve churches outside Nairobi?",
    a: "Yes! We serve churches across all of Kenya — Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and beyond. All services available remotely with WhatsApp support.",
  },
  {
    q: "Can I update the website myself?",
    a: "Absolutely! We build user-friendly websites where you can upload sermons, add events, post blog articles, and update content. Free training included.",
  },
  {
    q: "Do you integrate M-Pesa?",
    a: "Yes! M-Pesa integration is included in all packages. Members can give tithes and offerings directly via STK push.",
  },
];

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const isMainArticle = post.slug === "transform-church-digital-presence-2026";

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-2 mb-4">
              <Badge variant="outline">{post.category}</Badge>
              {post.featured && <Badge variant="default">Featured</Badge>}
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-extrabold leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.publishedAt).toLocaleDateString("en-KE", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime} read
              </span>
              <span className="text-xs">
                Updated: {new Date(post.updatedAt).toLocaleDateString("en-KE", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  #{tag.replace(/\s+/g, "")}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
            >
              {isMainArticle ? (
                <TransformChurchDigitalPresenceContent />
              ) : (
                <GenericArticleContent post={post} />
              )}
            </motion.div>

            {/* FAQ Accordion for main article */}
            {isMainArticle && (
              <div className="mt-12">
                <h2 className="text-2xl font-display font-bold mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <MessageCircle className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-4">
              Ready to Build Your Church Website?
            </h2>
            <p className="text-muted-foreground mb-6">
              Get a free consultation and custom quote. WhatsApp us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  WhatsApp: {PHONE_DISPLAY}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-display font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all"
                >
                  <Badge variant="outline" className="text-xs mb-3">
                    {relatedPost.category}
                  </Badge>
                  <h3 className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                    {relatedPost.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
