import { Link, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle, Search, Smartphone, Zap, Shield, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { WHATSAPP_URL } from "@/lib/constants";

const pages = {
  "business-website-design-kenya": {
    title: "Business Website Design Kenya | KenyaAdverts",
    description: "Professional business website design and development in Kenya. Mobile-first websites, enquiry forms, SEO foundations, WhatsApp and M-Pesa-ready integrations.",
    heading: "Business Website Design & Development in Kenya",
    intro: "A business website should do more than display your logo. It should explain what you offer, build trust, answer common questions and make it easy for a potential customer to contact you.",
    audience: ["SMEs and growing companies", "Consultants and professionals", "Service businesses", "Kenyan brands expanding online"],
    features: ["Mobile-first responsive design", "Services, team and company pages", "WhatsApp and enquiry forms", "Google-friendly technical SEO", "Maps, social links and contact tools", "Analytics and performance setup"],
    keywords: "business website Kenya, company website design Kenya, web design Nairobi, professional website Kenya",
  },
  "ecommerce-website-design-kenya": {
    title: "E-Commerce Website Design Kenya | Online Shops",
    description: "Build an e-commerce website in Kenya with product catalogues, checkout, M-Pesa options, orders, customer accounts and mobile-first shopping experiences.",
    heading: "E-Commerce Website Design & Online Shops in Kenya",
    intro: "Sell products or services online with a storefront designed around the way Kenyan customers actually shop. We can build simple catalogues or larger stores with orders, payments and administration.",
    audience: ["Retailers and product brands", "Fashion and beauty businesses", "Electronics and specialty shops", "Businesses moving from WhatsApp-only sales"],
    features: ["Product catalogue and categories", "Cart and checkout flows", "M-Pesa/payment integration options", "Order management and notifications", "Mobile-first product pages", "Product SEO and structured data"],
    keywords: "ecommerce website Kenya, online shop Kenya, e-commerce web design Nairobi, M-Pesa online store",
  },
  "online-store-development-kenya": {
    title: "Online Store Development Kenya | M-Pesa Shops",
    description: "Online store development in Kenya for businesses that want product pages, shopping carts, checkout, M-Pesa payments, orders and search-friendly product content.",
    heading: "Online Store Development for Kenyan Businesses",
    intro: "An online store needs a clear product structure, fast mobile browsing and a checkout journey that customers understand. We build stores around your catalogue, operations and payment requirements.",
    audience: ["Existing shops going online", "Instagram and WhatsApp sellers", "Manufacturers and distributors", "Service businesses selling packages or bookings"],
    features: ["Search-friendly product URLs", "Categories and filters", "Stock and order workflows", "M-Pesa-ready payment architecture", "Customer notifications", "Admin tools for daily management"],
    keywords: "online store development Kenya, M-Pesa shop website, online shopping website Kenya, ecommerce developer Nairobi",
  },
  "blog-website-design-kenya": {
    title: "Blog Website Design Kenya | SEO Blogging Sites",
    description: "SEO-friendly blog website design in Kenya for publishers, professionals, news creators and brands. Categories, article pages, search, authors and social sharing.",
    heading: "Blog & Publishing Website Design in Kenya",
    intro: "A serious blog needs more than a list of posts. We build publishing sites with clear categories, fast article pages, readable layouts, metadata, internal linking and structures that can grow with your content library.",
    audience: ["Personal and professional bloggers", "Business content teams", "Education publishers", "Media and niche publications"],
    features: ["Fast article and category pages", "SEO titles and descriptions", "Author and publication information", "Search and related-content sections", "Social sharing and newsletter-ready layouts", "XML sitemap and crawl-friendly structure"],
    keywords: "blog website Kenya, blogging website design Nairobi, SEO blog development Kenya, publishing website developer",
  },
  "news-website-development-kenya": {
    title: "News Website Development Kenya | Media Websites",
    description: "News and media website development in Kenya with categories, article pages, search, author information, responsive layouts and scalable publishing structures.",
    heading: "News & Media Website Development in Kenya",
    intro: "News websites need strong information architecture because readers may arrive from Google, social media, direct links or a breaking-news search. We design publishing systems that keep stories easy to find and read.",
    audience: ["Digital news publications", "County and community media", "Industry publications", "Independent journalists and media teams"],
    features: ["News categories and topic pages", "Article and author pages", "Search and related stories", "Mobile-first reading experience", "SEO metadata and canonical URLs", "Video and image publishing support"],
    keywords: "news website Kenya, media website development Kenya, online newspaper website, news portal developer Nairobi",
  },
  "video-streaming-website-kenya": {
    title: "Video Streaming Website Kenya | Video Platforms",
    description: "Custom video website development in Kenya for creators, schools, organisations and media brands. Build searchable video libraries, channels, memberships and streaming experiences.",
    heading: "Video Streaming Website Development in Kenya",
    intro: "Create a branded video platform instead of sending every visitor to a social network. A custom video site can organise channels, programmes, courses, episodes and premium content around your audience.",
    audience: ["Video creators and publishers", "Education and training platforms", "Churches and organisations", "Media and entertainment brands"],
    features: ["Video library and categories", "Creator/channel pages", "Searchable video content", "Embedded or hosted video architecture", "Membership and access-control options", "Video SEO and structured data"],
    keywords: "video streaming website Kenya, video platform development Nairobi, custom video website, streaming platform developer Kenya",
  },
  "youtube-like-website-development": {
    title: "YouTube-Like Website Development Kenya | Video Platform",
    description: "Build a YouTube-like video platform in Kenya with channels, uploads, search, categories, user profiles, comments, playlists and scalable video architecture.",
    heading: "YouTube-Like Video Platform Development",
    intro: "If your idea needs channels, creators, uploads, search and video discovery, we can design the web application around those workflows. The exact architecture depends on video volume, storage, transcoding and access requirements.",
    audience: ["Creator communities", "Niche video platforms", "Education video networks", "Corporate or organisation media libraries"],
    features: ["User and creator profiles", "Channels and playlists", "Video upload workflows", "Search, categories and discovery", "Comments and engagement options", "Cloud storage/CDN integration planning"],
    keywords: "YouTube clone Kenya, YouTube-like website development, video sharing platform Kenya, video app developer Nairobi",
  },
  "netflix-like-streaming-platform": {
    title: "Netflix-Like Streaming Platform Kenya | OTT Development",
    description: "Netflix-like OTT and streaming platform development in Kenya with content libraries, subscriptions, profiles, access control and responsive video experiences.",
    heading: "Netflix-Like OTT & Streaming Platform Development",
    intro: "A Netflix-style platform is a product, not a simple website. We can help scope the catalogue, user accounts, subscriptions, content protection, video delivery and administration needed for your streaming service.",
    audience: ["Film and entertainment brands", "Education and training providers", "Faith-based media libraries", "Niche subscription video services"],
    features: ["Content catalogue and collections", "Profiles and user accounts", "Subscription/access models", "Watch pages and responsive playback", "Admin content management", "Video delivery and CDN architecture"],
    keywords: "Netflix clone Kenya, OTT platform Kenya, streaming app development Nairobi, subscription video platform developer",
  },
  "marketplace-website-development-kenya": {
    title: "Marketplace Website Development Kenya | Classifieds",
    description: "Marketplace and classifieds website development in Kenya with listings, search, categories, seller profiles, enquiries and scalable database-backed features.",
    heading: "Marketplace & Classifieds Website Development",
    intro: "Build a marketplace where buyers can discover listings and sellers can manage their products or services. We can design the search, listing, seller and enquiry workflows around your niche.",
    audience: ["General classifieds", "Property and rental marketplaces", "Jobs and services platforms", "Niche buying and selling communities"],
    features: ["Seller profiles and listings", "Search and category filters", "Listing images and details", "Enquiry and contact workflows", "Admin moderation tools", "Optional payments and featured listings"],
    keywords: "marketplace website Kenya, classifieds website development, online marketplace Nairobi, marketplace developer Kenya",
  },
  "school-website-design-kenya": {
    title: "School Website Design Kenya | Education Websites",
    description: "School and education website design in Kenya with admissions information, programmes, news, resources, events, contact tools and mobile-first layouts.",
    heading: "School & Education Website Design in Kenya",
    intro: "Parents, students and staff should be able to find the information they need quickly. We build education websites around programmes, admissions, school news, resources, contacts and clear navigation.",
    audience: ["Primary and secondary schools", "Colleges and training centres", "Tutors and education brands", "Student communities and resource hubs"],
    features: ["Admissions and programme pages", "School news and announcements", "Events and calendar sections", "Resources and downloads", "Enquiry and contact forms", "SEO-friendly education content"],
    keywords: "school website Kenya, school web design Nairobi, education website development Kenya, college website developer",
  },
  "custom-web-application-development-kenya": {
    title: "Custom Web Application Development Kenya | Web Apps",
    description: "Custom web application development in Kenya for dashboards, portals, management systems, workflows, databases and API integrations.",
    heading: "Custom Web Application Development in Kenya",
    intro: "When a normal website is not enough, a web application can put your workflow into software. We build database-backed systems around the users, permissions, forms, reports and integrations your project requires.",
    audience: ["Internal business systems", "Customer portals", "Management and booking systems", "Education and membership platforms"],
    features: ["Custom dashboards and roles", "Database-backed workflows", "Forms, approvals and reports", "Authentication and permissions", "API and third-party integrations", "Supabase and modern web-stack options"],
    keywords: "web application development Kenya, custom software Nairobi, web app developer Kenya, business management system developer",
  },
};

type PageKey = keyof typeof pages;

export default function SeoLandingPage() {
  const { slug } = useParams();
  const page = slug ? pages[slug as PageKey] : undefined;
  if (!page) return null;

  const path = `/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: page.heading,
    description: page.description,
    url: `https://kenyaadverts.co.ke${path}`,
    about: page.keywords,
    isPartOf: { "@type": "WebSite", name: "KenyaAdverts.co.ke", url: "https://kenyaadverts.co.ke" },
  };

  return (
    <>
      <Seo title={page.title} description={page.description} path={path} />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
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
