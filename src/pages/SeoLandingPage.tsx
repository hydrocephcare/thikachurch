import { Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle, Search, Smartphone, Zap, Shield, Code2, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { WHATSAPP_URL } from "@/lib/constants";
import RelatedPages from "@/components/RelatedPages";

const pages = {
  "business-website-design-kenya": {
    title: "Business Website Design Kenya | KenyaAdverts",
    description: "Professional business website design and development in Kenya. Mobile-first websites, enquiry forms, SEO foundations, WhatsApp and M-Pesa-ready integrations.",
    heading: "Business Website Design & Development in Kenya",
    intro: "A business website should do more than display your logo. It should explain what you offer, build trust, answer common questions and make it easy for a potential customer to contact you.",
    audience: ["SMEs and growing companies", "Consultants and professionals", "Service businesses", "Kenyan brands expanding online"],
    features: ["Mobile-first responsive design", "Services, team and company pages", "WhatsApp and enquiry forms", "Google-friendly technical SEO", "Maps, social links and contact tools", "Analytics and performance setup"],
    keywords: "business website Kenya, company website design Kenya, web design Nairobi, professional website Kenya",
    faqs: [
      { q: "Do I need a business website if I already use WhatsApp Business?", a: "WhatsApp is great for conversations, but it can't be found on Google, doesn't show up when someone searches your company name, and doesn't build the same credibility as a proper website. Most of our business website clients keep WhatsApp as their contact channel - the website just gives customers a reason to trust you before they message." },
      { q: "What makes a Kenyan business website different from a generic template?", a: "Mobile-first layout matters more here since most visitors browse on a phone over mobile data, not desktop broadband. We also build in WhatsApp contact buttons by default and keep pages light so they load reasonably on slower connections, rather than assuming fast fibre everywhere." },
    ],
  },
  "ecommerce-website-design-kenya": {
    title: "E-Commerce Website Design Kenya | Online Shops",
    description: "Build an e-commerce website in Kenya with product catalogues, checkout, M-Pesa options, orders, customer accounts and mobile-first shopping experiences.",
    heading: "E-Commerce Website Design & Online Shops in Kenya",
    intro: "Sell products or services online with a storefront designed around the way Kenyan customers actually shop. We can build simple catalogues or larger stores with orders, payments and administration.",
    audience: ["Retailers and product brands", "Fashion and beauty businesses", "Electronics and specialty shops", "Businesses moving from WhatsApp-only sales"],
    features: ["Product catalogue and categories", "Cart and checkout flows", "M-Pesa/payment integration options", "Order management and notifications", "Mobile-first product pages", "Product SEO and structured data"],
    keywords: "ecommerce website Kenya, online shop Kenya, e-commerce web design Nairobi, M-Pesa online store",
    faqs: [
      { q: "Can customers pay with M-Pesa directly on the site?", a: "Yes - we build M-Pesa STK Push or Paybill-based checkout so customers pay from their phone without leaving the site, instead of sending money separately and screenshotting proof of payment." },
      { q: "I currently sell through Instagram/WhatsApp. Is it worth moving to a store?", a: "It depends on order volume. If you're manually tracking orders in chat threads, a store with real order management, stock tracking and automatic notifications usually pays for itself once you're past a handful of orders a week - below that, WhatsApp alone may still be fine." },
    ],
  },
  "online-store-development-kenya": {
    title: "Online Store Development Kenya | M-Pesa Shops",
    description: "Online store development in Kenya for businesses that want product pages, shopping carts, checkout, M-Pesa payments, orders and search-friendly product content.",
    heading: "Online Store Development for Kenyan Businesses",
    intro: "An online store needs a clear product structure, fast mobile browsing and a checkout journey that customers understand. We build stores around your catalogue, operations and payment requirements.",
    audience: ["Existing shops going online", "Instagram and WhatsApp sellers", "Manufacturers and distributors", "Service businesses selling packages or bookings"],
    features: ["Search-friendly product URLs", "Categories and filters", "Stock and order workflows", "M-Pesa-ready payment architecture", "Customer notifications", "Admin tools for daily management"],
    keywords: "online store development Kenya, M-Pesa shop website, online shopping website Kenya, ecommerce developer Nairobi",
    faqs: [
      { q: "How is this different from the e-commerce website design page?", a: "Same underlying capability, different starting point: this page is for businesses that already know their catalogue and operations and want a store built around existing stock and processes, rather than starting from a blank design brief." },
      { q: "Can I manage stock and orders myself after launch?", a: "Yes - every store we build includes an admin area for updating products, tracking stock and viewing orders, so you're not dependent on us for day-to-day changes." },
    ],
  },
  "blog-website-design-kenya": {
    title: "Blog Website Design Kenya | SEO Blogging Sites",
    description: "SEO-friendly blog website design in Kenya for publishers, professionals, news creators and brands. Categories, article pages, search, authors and social sharing.",
    heading: "Blog & Publishing Website Design in Kenya",
    intro: "A serious blog needs more than a list of posts. We build publishing sites with clear categories, fast article pages, readable layouts, metadata, internal linking and structures that can grow with your content library.",
    audience: ["Personal and professional bloggers", "Business content teams", "Education publishers", "Media and niche publications"],
    features: ["Fast article and category pages", "SEO titles and descriptions", "Author and publication information", "Search and related-content sections", "Social sharing and newsletter-ready layouts", "XML sitemap and crawl-friendly structure"],
    keywords: "blog website Kenya, blogging website design Nairobi, SEO blog development Kenya, publishing website developer",
    faqs: [
      { q: "Will my blog actually rank on Google, or is that up to content?", a: "Both matter. We handle the technical side - clean URLs, metadata, sitemap, internal linking, page speed - so nothing on the build holds you back. Ranking for specific keywords still depends on writing genuinely useful content, which is on the content side, not something a template alone solves." },
      { q: "Can you migrate an existing blog (WordPress or otherwise)?", a: "Yes, we can rebuild a blog with its existing content and set up proper redirects from old URLs so you don't lose existing search rankings in the move." },
    ],
  },
  "news-website-development-kenya": {
    title: "News Website Development Kenya | Media Websites",
    description: "News and media website development in Kenya with categories, article pages, search, author information, responsive layouts and scalable publishing structures.",
    heading: "News & Media Website Development in Kenya",
    intro: "News websites need strong information architecture because readers may arrive from Google, social media, direct links or a breaking-news search. We design publishing systems that keep stories easy to find and read.",
    audience: ["Digital news publications", "County and community media", "Industry publications", "Independent journalists and media teams"],
    features: ["News categories and topic pages", "Article and author pages", "Search and related stories", "Mobile-first reading experience", "SEO metadata and canonical URLs", "Video and image publishing support"],
    keywords: "news website Kenya, media website development Kenya, online newspaper website, news portal developer Nairobi",
    faqs: [
      { q: "Can the site handle breaking news traffic spikes?", a: "That depends on hosting choice as much as the codebase - we build on modern hosting (such as Vercel) designed to handle sudden traffic increases, rather than a single shared server that falls over under load." },
      { q: "Do you build a content management system so non-technical staff can publish?", a: "Yes - a news site needs editors publishing daily without a developer involved, so we build around a proper CMS/admin workflow rather than hand-coding every article." },
    ],
  },
  "video-streaming-website-kenya": {
    title: "Video Streaming Website Kenya | Video Platforms",
    description: "Custom video website development in Kenya for creators, schools, organisations and media brands. Build searchable video libraries, channels, memberships and streaming experiences.",
    heading: "Video Streaming Website Development in Kenya",
    intro: "Create a branded video platform instead of sending every visitor to a social network. A custom video site can organise channels, programmes, courses, episodes and premium content around your audience.",
    audience: ["Video creators and publishers", "Education and training platforms", "Churches and organisations", "Media and entertainment brands"],
    features: ["Video library and categories", "Creator/channel pages", "Searchable video content", "Embedded or hosted video architecture", "Membership and access-control options", "Video SEO and structured data"],
    keywords: "video streaming website Kenya, video platform development Nairobi, custom video website, streaming platform developer Kenya",
    faqs: [
      { q: "Do you host the video files yourselves?", a: "Usually not directly - serving video at scale needs dedicated infrastructure (CDN, transcoding), so we typically architect the site around a video hosting service (e.g. Mux, Cloudflare Stream, YouTube/Vimeo embeds) behind your own branded interface, rather than self-hosting raw video files." },
      { q: "Can this restrict content to paying members only?", a: "Yes - membership and access-control is one of the features we scope in, so free and paid content can be separated with real authentication, not just a hidden page URL." },
    ],
  },
  "youtube-like-website-development": {
    title: "YouTube-Like Website Development Kenya | Video Platform",
    description: "Build a YouTube-like video platform in Kenya with channels, uploads, search, categories, user profiles, comments, playlists and scalable video architecture.",
    heading: "YouTube-Like Video Platform Development",
    intro: "If your idea needs channels, creators, uploads, search and video discovery, we can design the web application around those workflows. The exact architecture depends on video volume, storage, transcoding and access requirements.",
    audience: ["Creator communities", "Niche video platforms", "Education video networks", "Corporate or organisation media libraries"],
    features: ["User and creator profiles", "Channels and playlists", "Video upload workflows", "Search, categories and discovery", "Comments and engagement options", "Cloud storage/CDN integration planning"],
    keywords: "YouTube clone Kenya, YouTube-like website development, video sharing platform Kenya, video app developer Nairobi",
    faqs: [
      { q: "Is building a full YouTube clone realistic for a small budget?", a: "A literal YouTube-scale platform (unlimited uploads, global CDN, recommendation algorithms) is a multi-year engineering effort, not a website project. What's realistic at a project scale is a focused version for a specific community or niche, with curated uploads rather than open public upload at unlimited scale - we'd scope the real requirement with you before quoting." },
      { q: "Who uploads videos - us, admins, or any user?", a: "This depends entirely on your use case, and it's the first thing we'd clarify: an open-upload platform needs moderation tooling that a curated, admin-only-upload platform doesn't." },
    ],
  },
  "netflix-like-streaming-platform": {
    title: "Netflix-Like Streaming Platform Kenya | OTT Development",
    description: "Netflix-like OTT and streaming platform development in Kenya with content libraries, subscriptions, profiles, access control and responsive video experiences.",
    heading: "Netflix-Like OTT & Streaming Platform Development",
    intro: "A Netflix-style platform is a product, not a simple website. We can help scope the catalogue, user accounts, subscriptions, content protection, video delivery and administration needed for your streaming service.",
    audience: ["Film and entertainment brands", "Education and training providers", "Faith-based media libraries", "Niche subscription video services"],
    features: ["Content catalogue and collections", "Profiles and user accounts", "Subscription/access models", "Watch pages and responsive playback", "Admin content management", "Video delivery and CDN architecture"],
    keywords: "Netflix clone Kenya, OTT platform Kenya, streaming app development Nairobi, subscription video platform developer",
    faqs: [
      { q: "How does subscription billing work for a Kenyan audience?", a: "We'd design around M-Pesa for recurring or one-time payments where that fits your audience, alongside or instead of card-based billing, since relying on card-only subscriptions excludes a large share of Kenyan users." },
      { q: "Where is video content actually stored and delivered from?", a: "We'd architect this around a dedicated video delivery service rather than storing raw video on a standard web server - that's the only way to get reliable playback and reasonable cost at any real scale." },
    ],
  },
  "marketplace-website-development-kenya": {
    title: "Marketplace Website Development Kenya | Classifieds",
    description: "Marketplace and classifieds website development in Kenya with listings, search, categories, seller profiles, enquiries and scalable database-backed features.",
    heading: "Marketplace & Classifieds Website Development",
    intro: "Build a marketplace where buyers can discover listings and sellers can manage their products or services. We can design the search, listing, seller and enquiry workflows around your niche.",
    audience: ["General classifieds", "Property and rental marketplaces", "Jobs and services platforms", "Niche buying and selling communities"],
    features: ["Seller profiles and listings", "Search and category filters", "Listing images and details", "Enquiry and contact workflows", "Admin moderation tools", "Optional payments and featured listings"],
    keywords: "marketplace website Kenya, classifieds website development, online marketplace Nairobi, marketplace developer Kenya",
    faqs: [
      { q: "Have you actually built a marketplace before, or is this theoretical?", a: "Yes - Kenya Adverts Marketplace, one of our own live projects, is a classifieds marketplace with listings, search and mobile-first browsing. You can see it in our portfolio rather than taking our word for it." },
      { q: "How do you handle fake or spam listings?", a: "Admin moderation tools are a standard part of a marketplace build - new or flagged listings can require approval before going live, and sellers/listings can be suspended, rather than everything publishing instantly with no review." },
    ],
  },
  "school-website-design-kenya": {
    title: "School Website Design Kenya | Education Websites",
    description: "School and education website design in Kenya with admissions information, programmes, news, resources, events, contact tools and mobile-first layouts.",
    heading: "School & Education Website Design in Kenya",
    intro: "Parents, students and staff should be able to find the information they need quickly. We build education websites around programmes, admissions, school news, resources, contacts and clear navigation.",
    audience: ["Primary and secondary schools", "Colleges and training centres", "Tutors and education brands", "Student communities and resource hubs"],
    features: ["Admissions and programme pages", "School news and announcements", "Events and calendar sections", "Resources and downloads", "Enquiry and contact forms", "SEO-friendly education content"],
    keywords: "school website Kenya, school web design Nairobi, education website development Kenya, college website developer",
    faqs: [
      { q: "Can parents download forms or documents from the site?", a: "Yes - a resources/downloads section for admission forms, fee structures and circulars is a standard part of a school site build, so parents don't need to call the office for basic paperwork." },
      { q: "Do you have experience with education platforms specifically?", a: "Yes - Ompath Study, our medical education platform, and KCSE Resource Hub, a study resource site, are both live projects in our portfolio built for education audiences specifically." },
    ],
  },
  "custom-web-application-development-kenya": {
    title: "Custom Web Application Development Kenya | Web Apps",
    description: "Custom web application development in Kenya for dashboards, portals, management systems, workflows, databases and API integrations.",
    heading: "Custom Web Application Development in Kenya",
    intro: "When a normal website is not enough, a web application can put your workflow into software. We build database-backed systems around the users, permissions, forms, reports and integrations your project requires.",
    audience: ["Internal business systems", "Customer portals", "Management and booking systems", "Education and membership platforms"],
    features: ["Custom dashboards and roles", "Database-backed workflows", "Forms, approvals and reports", "Authentication and permissions", "API and third-party integrations", "Supabase and modern web-stack options"],
    keywords: "web application development Kenya, custom software Nairobi, web app developer Kenya, business management system developer",
    faqs: [
      { q: "How is a web application different from a website, in practice?", a: "A website mainly presents information; a web application has logins, roles, and data that changes based on who's using it - think a booking system, an admin dashboard, or a members' portal, rather than a page of static content." },
      { q: "What does a typical custom web app project need from me upfront?", a: "A clear description of the workflow it needs to replace or support - who uses it, what they need to do, and what decisions or data drive it. We turn that into a scoped plan; you don't need technical specs, just a clear picture of the problem." },
    ],
  },
};

type PageKey = keyof typeof pages;

export default function SeoLandingPage() {
  // These routes are registered as static paths (one per slug, see App.tsx),
  // not a dynamic ":slug" segment, so useParams() would return nothing here.
  // Derive the slug from the actual pathname instead.
  const slug = useLocation().pathname.replace(/^\//, "");
  const page = slug ? pages[slug as PageKey] : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  if (!page) return null;

  const path = `/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.heading,
    description: page.description,
    url: `https://www.kenyaadverts.co.ke${path}`,
    about: page.keywords,
    isPartOf: { "@type": "WebSite", name: "KenyaAdverts.co.ke", url: "https://www.kenyaadverts.co.ke" },
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };

  return (
    <>
      <Seo title={page.title} description={page.description} path={path} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
          <div className="max-w-4xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Kenya web design & development</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-display font-extrabold leading-tight">{page.heading}</h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">{page.intro}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-gradient-primary"><Link to={`/book-appointment?project=${encodeURIComponent(page.heading)}`}>Book a Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />Discuss on WhatsApp</a></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-6xl grid lg:grid-cols-[1.3fr_0.7fr] gap-10">
          <article>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold">What this type of website should accomplish</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">The right structure depends on the business model, audience and content. We start with the important user journeys, then design pages and functionality around them rather than adding features simply because they are available.</p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">{page.features.map((feature) => <div key={feature} className="p-5 rounded-2xl border border-border bg-card"><CheckCircle2 className="h-5 w-5 text-primary" /><h3 className="mt-3 font-semibold">{feature}</h3></div>)}</div>
            <h2 className="mt-14 text-3xl font-display font-extrabold">Who we can build it for</h2>
            <ul className="mt-6 space-y-3">{page.audience.map((item) => <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />{item}</li>)}</ul>
          </article>
          <aside className="space-y-4">
            {[{ icon: Smartphone, title: "Mobile-first", text: "Designed for the phones many Kenyan customers use first." }, { icon: Search, title: "SEO foundation", text: "Clean URLs, page metadata, internal links and crawl-friendly structure." }, { icon: Zap, title: "Performance", text: "A practical approach to loading speed, images and modern frontend delivery." }, { icon: Shield, title: "Maintainable", text: "A clear codebase and database structure that can grow with the project." }].map(({ icon: Icon, title, text }) => <div key={title} className="p-5 rounded-2xl border border-border bg-card"><Icon className="h-5 w-5 text-primary" /><h3 className="mt-3 font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{text}</p></div>)}
          </aside>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center">How we approach the project</h2>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {["Understand the goal", "Design and build", "Test and launch"].map((step, i) => <div key={step} className="p-6 rounded-2xl bg-card border border-border"><div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">{i + 1}</div><h3 className="mt-4 text-xl font-display font-bold">{step}</h3><p className="mt-2 text-sm text-muted-foreground">{["We define the audience, pages, content, workflows and integrations before development.", "We build the interface and functionality in reviewable stages so important decisions are clear.", "We test the responsive experience, forms and integrations, then prepare the site for deployment and ongoing improvement."][i]}</p></div>)}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-center">Questions about {page.heading.toLowerCase()}</h2>
          <div className="mt-10 space-y-3">
            {page.faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={item.q} className="rounded-2xl border border-border bg-card overflow-hidden">
                  <button type="button" onClick={() => setOpenFaq(isOpen ? null : i)} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                    <span className="font-semibold">{item.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <RelatedPages exclude={path} />

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <Code2 className="mx-auto h-8 w-8 text-primary" />
          <h2 className="mt-4 text-3xl md:text-4xl font-display font-extrabold">Let's define your project</h2>
          <p className="mt-4 text-muted-foreground">Tell us what you want the website to do, who it is for and what you already have. We can then discuss the scope and prepare a project proposal.</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3"><Button asChild size="lg"><Link to="/order">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/portfolio">View Portfolio</Link></Button></div>
        </div>
      </section>
    </>
  );
}
