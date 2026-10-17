import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, CheckCircle2, Globe, MessageCircle, Search, Smartphone, Zap, Shield, Code2, DollarSign, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { WHATSAPP_URL } from "@/lib/constants";
import RelatedPages from "@/components/RelatedPages";

const pages = {
  "website-design-worldwide": {
    title: "Website Design Worldwide | Affordable Professional Websites",
    description: "Affordable professional website design for businesses, organisations and individuals worldwide. Responsive, SEO-ready websites starting from KES 5,000.",
    heading: "Professional Website Design for Clients Worldwide",
    intro: "A modern website should be clear, fast, mobile-friendly and built around your customers. KenyaAdverts designs websites for businesses and organisations in Kenya and beyond, with starter projects from KES 5,000 and larger builds priced around scope.",
    keywords: "website design worldwide, affordable website design, professional web design, website developer, cheap website design",
    features: ["Responsive mobile-first design", "Custom pages and business content", "SEO-ready metadata and structure", "WhatsApp, forms and contact tools", "Performance-focused frontend", "Deployment and domain guidance"],
    audience: ["Small businesses and startups", "Freelancers and professionals", "Organisations and community groups", "International businesses launching online"],
    faqs: [
      { q: "Do you work with clients outside Kenya?", a: "Yes - project discussions, design reviews and delivery happen remotely over WhatsApp, email or video call, so location isn't a barrier. Kenyan M-Pesa integration is an option, not a requirement, for non-Kenyan clients." },
      { q: "What time zone do you work in, and how do we communicate during the project?", a: "We operate on East Africa Time (UTC+3). Most project communication happens asynchronously over WhatsApp or email, with calls scheduled when needed rather than assumed as the default." },
    ],
  },
  "affordable-website-design": {
    title: "Affordable Website Design Starting From KES 5,000 | KenyaAdverts",
    description: "Get a professional starter website from KES 5,000. Compare affordable website options for small businesses, portfolios, organisations and startups.",
    heading: "Affordable Website Design Starting From KES 5,000",
    intro: "You do not need a huge budget to establish a professional online presence. Starter website projects begin from KES 5,000 for clearly defined small websites. Larger projects are quoted according to pages, design, integrations and functionality.",
    keywords: "affordable website design, cheap website design, website from 5000 KES, low cost website, budget web design",
    features: ["Professional responsive layout", "Core business pages", "Contact and WhatsApp CTA", "Basic technical SEO", "Mobile optimization", "Clear project scope before work starts"],
    audience: ["Startups with limited launch budgets", "Small businesses going online", "Personal brands and portfolios", "Community organisations and clubs"],
    faqs: [
      { q: "What exactly do I get for the KES 5,000 starter price?", a: "A clearly-scoped small site - typically a handful of pages (home, about, services/products, contact) with mobile-first design and basic SEO setup. It's intentionally limited in scope so the price stays low; anything beyond that defined scope is quoted separately rather than silently included." },
      { q: "Will a cheap website look cheap?", a: "Not if it's built properly - the starter price limits scope (fewer pages, simpler features), not design quality. The visual design and code quality are the same baseline we use on larger projects." },
    ],
  },
  "business-website-design-worldwide": {
    title: "Business Website Design Worldwide | KenyaAdverts",
    description: "Business website design and development for companies worldwide. Build trust, explain your services and generate enquiries with a professional website.",
    heading: "Business Website Design for Companies Worldwide",
    intro: "Your website is often the first serious interaction a potential customer has with your company. We create business websites that make your offer clear, build credibility and provide obvious paths to enquire, call or book.",
    keywords: "business website design, company website development, corporate website, business web designer worldwide",
    features: ["Service and solution pages", "Lead and enquiry forms", "About, team and case study sections", "SEO-friendly page structure", "Analytics-ready setup", "Responsive design for every screen"],
    audience: ["Professional services", "Consultants and agencies", "Local businesses expanding online", "Companies serving international customers"],
    faqs: [
      { q: "Can you build in analytics so I can see how the site performs?", a: "Yes - analytics setup (such as Google Analytics) is part of a standard business website build, so you can see traffic and enquiry sources from day one rather than adding it as an afterthought." },
      { q: "Do you write the page content, or do I need to provide it?", a: "Either works. If you have existing copy, we structure and refine it for the web; if you don't, we can draft initial copy based on what you tell us about your business, for you to review and adjust." },
    ],
  },
  "ecommerce-website-development-worldwide": {
    title: "E-Commerce Website Development Worldwide | Online Stores",
    description: "Build an e-commerce website for customers worldwide with products, categories, checkout, payments, orders, SEO and mobile-first shopping experiences.",
    heading: "E-Commerce Website Development for Global Customers",
    intro: "An online store needs more than attractive product cards. We design shopping journeys around your products, customers, payment methods, delivery model and operational workflow.",
    keywords: "ecommerce website development, online store development, ecommerce developer worldwide, online shop design",
    features: ["Product catalogue and categories", "Search and filters", "Cart and checkout", "Payment integration planning", "Order management", "Product SEO and structured content"],
    audience: ["Retailers and product brands", "Digital product sellers", "Fashion and beauty stores", "Businesses moving from social selling to owned commerce"],
    faqs: [
      { q: "What payment methods can an international store support?", a: "This depends on your market - card payments (via providers like Stripe or Paystack), M-Pesa for Kenyan customers, or a mix, depending on where your buyers actually are. We scope the right combination rather than assuming one payment method fits every market." },
      { q: "Do you handle shipping and delivery logistics?", a: "We build the website's side of it - delivery options, shipping cost display, order status - but the actual courier/logistics relationship is yours to arrange; we integrate with whatever delivery process you already use or plan to use." },
    ],
  },
  "custom-web-application-development": {
    title: "Custom Web Application Development Worldwide | KenyaAdverts",
    description: "Custom web application development for dashboards, portals, booking systems, databases, management software and business workflows worldwide.",
    heading: "Custom Web Application Development Worldwide",
    intro: "When your business needs software rather than a brochure website, we can build a custom web application around users, roles, data, workflows and integrations. Projects are scoped individually rather than sold as a one-size-fits-all package.",
    keywords: "custom web application development, web app developer, business software, dashboard development, SaaS development",
    features: ["Authentication and user roles", "Database-backed workflows", "Dashboards and reports", "Forms and approvals", "API integrations", "Modern React and backend architectures"],
    audience: ["Businesses replacing spreadsheets", "Customer and member portals", "Booking and management systems", "Startups building web products"],
    faqs: [
      { q: "We're currently running this process in a spreadsheet. Is that a sign we need a web app?", a: "Often, yes - once a spreadsheet is being edited by multiple people, needs permission controls, or has become the de facto system of record for a process, a proper database-backed application usually removes the errors and version-conflict problems that come with shared spreadsheets." },
      { q: "Can you integrate with tools we already use?", a: "Generally yes, where those tools expose an API - we've built integrations spanning Supabase, Firebase and various third-party services. Tell us what you're already using and we'll confirm feasibility before quoting." },
    ],
  },
  "python-web-development": {
    title: "Python Web Development | Django & Python Web Apps | KenyaAdverts",
    description: "Python web development for custom business systems, APIs, dashboards and web applications. Starter website projects from KES 5,000; Python applications are scoped to requirements.",
    heading: "Python Web Development for Business & Web Applications",
    intro: "Python is a strong choice for data-heavy systems, APIs, automation and custom web applications. We can use Python frameworks such as Django or FastAPI when they fit the project, while keeping the frontend focused on a fast user experience.",
    keywords: "Python web development, Django developer, Python website development, FastAPI developer, Python web application",
    features: ["Django and Python application architecture", "REST APIs and integrations", "Database-backed business systems", "Authentication and permissions", "Admin dashboards and reporting", "Deployment and maintenance planning"],
    audience: ["Businesses needing custom software", "Startups and SaaS products", "Data-driven web applications", "Teams automating manual workflows"],
    faqs: [
      { q: "When would you recommend Python/Django over a JavaScript-only stack?", a: "When the project is genuinely data- or logic-heavy - complex business rules, data processing, scientific/numeric work, or needing Python's library ecosystem. For a typical business website or straightforward web app, a JavaScript/React stack is usually faster to build and deploy; we recommend the stack that fits the actual requirement, not the one that's trendiest." },
      { q: "Do you provide the Django admin panel, or a custom-built one?", a: "Either, depending on need - Django's built-in admin is excellent for internal/operational use, while a public-facing dashboard usually gets a custom-built interface matching your site's design instead." },
    ],
  },
  "react-web-development": {
    title: "React Web Development | Modern Frontend Development",
    description: "Modern React web development for fast, responsive business websites, dashboards, portals and interactive web applications.",
    heading: "Modern React Web Development",
    intro: "React is useful when a project needs reusable interface components, interactive workflows and a maintainable frontend. We use it where it provides a practical benefit rather than adding complexity for a simple brochure site.",
    keywords: "React web development, React developer, frontend developer, React website, modern web application",
    features: ["Reusable component systems", "Responsive layouts", "Interactive dashboards", "API-driven interfaces", "Accessible UI patterns", "Performance-conscious frontend architecture"],
    audience: ["Business applications", "Dashboards and portals", "Interactive product websites", "Startups and SaaS teams"],
    faqs: [
      { q: "Is React overkill for a simple business website?", a: "Often, a little - but it's also what this site and most of our other projects are built in, because it keeps the component library consistent across our work and scales cleanly if a simple site later grows features. For a genuinely one-page static site, something lighter can make sense; we'll tell you honestly if React isn't the right fit." },
      { q: "Do you use TypeScript?", a: "Yes, on most projects - it catches a real class of bugs before they reach production and makes a codebase easier to maintain, which matters once a project is more than a few pages." },
    ],
  },
  "wordpress-alternative-custom-websites": {
    title: "Custom Website Development vs WordPress | KenyaAdverts",
    description: "Compare custom website development with WordPress and understand when a lightweight custom website or web application may be a better fit.",
    heading: "Custom Websites: When You Need More Than a Template",
    intro: "WordPress is useful for many sites, but it is not the only way to build a website. A custom stack can make sense when you need a specific workflow, application logic, performance target or design system.",
    keywords: "custom website vs WordPress, custom web development, WordPress alternative, modern website development",
    features: ["Custom user experience", "Purpose-built functionality", "Modern component architecture", "Flexible integrations", "Reduced dependency on unnecessary plugins", "Development around your exact requirements"],
    audience: ["Businesses with unique workflows", "Web applications", "High-interaction websites", "Teams wanting a tailored technical foundation"],
    faqs: [
      { q: "Is WordPress actually bad, or is this just a sales pitch against it?", a: "WordPress is genuinely fine for many sites - content-heavy blogs with a non-technical editor, for instance. Where it tends to struggle is heavy plugin stacking, security maintenance overhead, and performance once a site needs custom logic beyond what plugins provide. We'll say directly if WordPress suits your project better than a custom build." },
      { q: "Is a custom-built site harder to update later without a developer?", a: "For content changes, no - we build in an admin/CMS layer so non-technical updates (text, images, blog posts) don't need a developer. For structural changes (new page types, new features), yes, that typically needs developer involvement, same as a heavily customized WordPress site would." },
    ],
  },
  "seo-website-development": {
    title: "SEO Website Development | Technical SEO Built Into Your Website",
    description: "SEO-focused website development with clean structure, metadata, canonical URLs, internal links, sitemap generation, performance and structured data.",
    heading: "SEO-Ready Website Development",
    intro: "SEO works best when it is considered during development rather than added as an afterthought. We build pages with crawlable structures, useful metadata, clear content hierarchy, internal links and performance in mind.",
    keywords: "SEO website development, technical SEO, SEO web design, search engine friendly website",
    features: ["Unique page titles and descriptions", "Canonical URLs", "XML sitemap", "Structured data where appropriate", "Internal linking", "Mobile and performance foundations"],
    audience: ["Businesses competing in search", "Publishers and blogs", "E-commerce stores", "Service companies targeting multiple markets"],
    faqs: [
      { q: "Can you guarantee a #1 Google ranking?", a: "No, and be wary of anyone who does - no one controls Google's algorithm. What we can guarantee is a technically sound foundation (clean URLs, correct canonical tags, structured data, fast loading, proper sitemap) so nothing on the build side holds your rankings back; actual ranking position also depends on content quality, competition and ongoing work." },
      { q: "Do you handle SEO content writing too, or just the technical setup?", a: "Our core work is the technical foundation. We can advise on content structure and keyword targeting, but ongoing content production (blog articles, landing pages) is typically a separate, continuing arrangement rather than part of a one-off build." },
    ],
  },
  "website-maintenance-support-worldwide": {
    title: "Website Maintenance & Support Worldwide | KenyaAdverts",
    description: "Website maintenance, improvements, content updates, performance checks, security updates and technical support for websites worldwide.",
    heading: "Website Maintenance & Technical Support Worldwide",
    intro: "Launching a website is the beginning, not the end. We can help keep sites updated, improve performance, fix issues and add new features as the business grows.",
    keywords: "website maintenance, website support, web developer support, website updates, website security maintenance",
    features: ["Content and layout updates", "Bug fixes and improvements", "Performance reviews", "Security and dependency checks", "SEO and metadata improvements", "New pages and features"],
    audience: ["Businesses without an in-house developer", "Growing websites", "E-commerce stores", "Organisations with ongoing content needs"],
    faqs: [
      { q: "Do you only maintain sites you built, or can you take over an existing one?", a: "We can take over maintenance of a site we didn't originally build - we'd first review the existing codebase to understand its structure before taking on ongoing work, since maintenance quality depends on actually understanding what's there." },
      { q: "What does maintenance actually involve month to month?", a: "Typically: dependency and security updates, monitoring for broken links or errors, small content changes, and performance checks. The specific scope is agreed per arrangement - some clients want hands-off monitoring, others want regular proactive improvements." },
    ],
  },
  "website-redesign-worldwide": {
    title: "Website Redesign Services Worldwide | Modernize Your Website",
    description: "Website redesign services for businesses worldwide. Improve design, mobile usability, SEO, performance, messaging and conversion paths without losing valuable content.",
    heading: "Website Redesign for a Modern Digital Experience",
    intro: "A redesign should solve real problems, not simply change colours. We review your content, user journeys, mobile experience, SEO structure and performance before rebuilding the pages that matter.",
    keywords: "website redesign, website makeover, redesign services, modern website design, website UX redesign",
    features: ["Modern responsive UI", "Content and navigation restructuring", "SEO-preserving redirects", "Performance improvements", "Conversion-focused CTAs", "Accessibility and mobile improvements"],
    audience: ["Outdated business websites", "Slow websites", "Businesses changing their brand", "Sites that have grown beyond their original structure"],
    faqs: [
      { q: "Will a redesign hurt my existing Google rankings?", a: "It can, if done carelessly - changing URLs without redirects is the most common cause of a redesign tanking rankings. We set up proper redirects from old URLs to new ones as a standard part of any redesign, specifically to prevent that." },
      { q: "How do you decide what to keep vs. change in a redesign?", a: "We start by reviewing what's actually working - traffic sources, which pages get visits, what content is outdated - rather than redesigning everything on instinct. Content and structure that's genuinely performing gets kept or improved, not discarded for the sake of change." },
    ],
  },
  "landing-page-design-worldwide": {
    title: "Landing Page Design Worldwide | High-Converting Business Pages",
    description: "Professional landing page design for products, services, campaigns and lead generation. Fast, responsive and SEO-ready landing pages for worldwide audiences.",
    heading: "Landing Pages Built Around One Clear Goal",
    intro: "A good landing page removes distractions and guides visitors toward one action. We design campaign pages for enquiries, bookings, product launches, lead generation and focused offers.",
    keywords: "landing page design, landing page developer, lead generation landing page, product landing page",
    features: ["Focused messaging", "Responsive design", "Strong calls to action", "Lead forms and tracking", "Fast loading media", "SEO and social sharing metadata"],
    audience: ["Startups launching products", "Service businesses", "Marketing campaigns", "Freelancers and personal brands"],
    faqs: [
      { q: "How is a landing page different from a normal website page?", a: "A landing page is built around a single goal (sign up, book, buy, enquire) with distractions deliberately removed - no full navigation menu pulling visitors away, no competing calls to action. A normal website page is part of a broader site structure with multiple paths; a landing page intentionally has one." },
      { q: "Can you connect the landing page to ad campaigns (Facebook/Google Ads)?", a: "Yes - we can set up tracking pixels and conversion events so you can measure actual campaign performance, not just page visits." },
    ],
  },
  "portfolio-website-design-worldwide": {
    title: "Portfolio Website Design Worldwide | Personal Brand Websites",
    description: "Portfolio website design for developers, designers, photographers, consultants, creators and professionals who want a strong online presence.",
    heading: "Portfolio Websites That Present Your Work Properly",
    intro: "Your portfolio should make your best work easy to understand. We create personal websites with case studies, services, project galleries, contact paths and a visual system that fits your brand.",
    keywords: "portfolio website design, personal website developer, professional portfolio website, personal brand website",
    features: ["Project and case study pages", "Responsive galleries", "About and services sections", "Contact and booking CTAs", "SEO-ready project URLs", "Social and professional profile links"],
    audience: ["Developers and designers", "Photographers and creatives", "Consultants and freelancers", "Professionals building a personal brand"],
    faqs: [
      { q: "How many projects should I include in a portfolio?", a: "Fewer, well-presented projects beat a long list of thin entries - we usually recommend 4-8 strong pieces with real context (the problem, your role, the outcome) over a large gallery with no explanation." },
      { q: "Can the portfolio double as a resume/CV?", a: "Yes - we can include a downloadable CV, skills summary and work history alongside the project showcase, so the site works for both casual visitors and recruiters doing a deeper review." },
    ],
  },
  "school-website-development-worldwide": {
    title: "School Website Development Worldwide | Education Platforms",
    description: "School website design and education platform development for institutions worldwide, with admissions, programmes, resources, events and student-focused experiences.",
    heading: "School & Education Website Development Worldwide",
    intro: "Education websites need to serve different audiences clearly. We build structured experiences for students, parents, staff and visitors, with room to grow into portals or resource platforms when needed.",
    keywords: "school website development, education website design, school portal developer, education platform development",
    features: ["Admissions and programme pages", "Announcements and events", "Resources and downloads", "Enquiry forms", "Student and parent portal options", "Search-friendly content structure"],
    audience: ["Schools and colleges", "Training centres", "Tutors and education brands", "Online learning platforms"],
    faqs: [
      { q: "Can the site later grow into a student/parent portal with logins?", a: "Yes - we can start with a public-facing informational site and add authenticated areas (grades, announcements, resources) later as a phase two, rather than needing to build everything at once." },
      { q: "Do you have real examples of education sites you've built?", a: "Yes - Ompath Study (a medical education platform with study notes, MCQs and flashcards) and KCSE Resource Hub (study materials and guides) are both live projects in our portfolio." },
    ],
  },
  "marketplace-development-worldwide": {
    title: "Marketplace Website Development Worldwide | Multi-Vendor Platforms",
    description: "Build a marketplace or classifieds platform with listings, seller profiles, search, categories, enquiries, moderation and optional payments.",
    heading: "Marketplace & Multi-Vendor Platform Development",
    intro: "Marketplaces have two sides: people offering something and people searching for it. We design the listing, discovery, seller, enquiry and administration workflows around your niche.",
    keywords: "marketplace development, multi vendor marketplace, classifieds website, marketplace platform developer",
    features: ["Seller accounts and profiles", "Listings and categories", "Search and filters", "Enquiries and messaging", "Moderation and admin tools", "Optional paid listings and checkout"],
    audience: ["Classifieds businesses", "Property marketplaces", "Service marketplaces", "Niche buying and selling platforms"],
    faqs: [
      { q: "What's the hardest part of building a marketplace, realistically?", a: "Usually not the listing/search UI itself - it's getting both sides of the marketplace (buyers and sellers) active at the same time, which is a business/marketing challenge more than a technical one. We can build a solid platform, but a marketplace with no sellers or no buyers is a chicken-and-egg problem no code solves on its own." },
      { q: "Can sellers pay for featured or premium listings?", a: "Yes - optional paid listings and featured placement is a common monetization model we can build in, with payment handled per your target market (card, M-Pesa, or both)." },
    ],
  },
  "blog-website-development-worldwide": {
    title: "Blog Website Development Worldwide | SEO Publishing Platforms",
    description: "Build a fast, SEO-ready blog or publishing website with categories, article pages, metadata, internal linking, authors and scalable content architecture.",
    heading: "Blog & Publishing Website Development Worldwide",
    intro: "A growing content site needs an information architecture that stays useful as the article library grows. We build readable article pages, category structures and technical SEO foundations around your publishing goals.",
    keywords: "blog website development, publishing website, SEO blog developer, content website design",
    features: ["Fast article templates", "Categories and topic hubs", "Author and publication data", "Related-content sections", "Metadata and canonical URLs", "Sitemap and crawl-friendly structure"],
    audience: ["Publishers and bloggers", "Business content teams", "News and niche media", "Education resource sites"],
    faqs: [
      { q: "Do you have an example of a content-heavy site you've built?", a: "Yes - Medlife Echo's, a medical education publication with a large article library covering medical school subjects, is a live project in our portfolio built around exactly this kind of content architecture." },
      { q: "How do you keep a large article library organized as it grows?", a: "Category and topic-hub structures set up from the start, rather than a flat list of posts that becomes unmanageable at scale - this also helps internal linking and SEO as the library grows." },
    ],
  },
  "web-design-for-startups": {
    title: "Web Design for Startups | Affordable Startup Websites",
    description: "Startup website design with clear messaging, fast launch cycles, responsive UI and room to grow from a simple landing page into a full web product.",
    heading: "Website Design for Startups",
    intro: "Startups need to communicate the product quickly while leaving room for the business model to evolve. We can begin with a focused marketing site and expand into accounts, dashboards and product features later.",
    keywords: "startup website design, startup web developer, MVP website, affordable startup website",
    features: ["Clear value proposition", "Product and feature pages", "Lead capture", "Analytics-ready setup", "Fast responsive frontend", "Scalable path to a web application"],
    audience: ["Early-stage startups", "MVP teams", "New online businesses", "Founders validating an idea"],
    faqs: [
      { q: "We're pre-revenue and need to move fast. Can you work with a tight timeline?", a: "Yes - a focused marketing/landing site for validation can usually be scoped and built quickly once requirements are clear; a full product (accounts, dashboards, payments) naturally takes longer, and we'll be upfront about realistic timing for each." },
      { q: "Can the site grow into a full product later without a rebuild?", a: "If we architect it with that in mind from the start, yes - starting with a simple marketing site built on a scalable foundation (rather than a throwaway template) means later adding accounts or a dashboard extends the existing codebase instead of replacing it." },
    ],
  },
} as const;

type PageKey = keyof typeof pages;

export default function GlobalSeoLandingPage() {
  // Static per-slug routes (see App.tsx), not a dynamic ":slug" segment -
  // useParams() would return nothing here. Derive from the pathname instead.
  const slug = useLocation().pathname.replace(/^\//, "");
  const page = slug ? pages[slug as PageKey] : undefined;
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  if (!page) return null;
  const path = `/${slug}`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })),
  };
  return (
    <>
      <Seo title={page.title} description={page.description} path={path} />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: page.heading, description: page.description, url: `https://www.kenyaadverts.co.ke${path}`, keywords: page.keywords })}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 via-background to-background"><div className="container mx-auto px-4 lg:px-8 max-w-6xl"><div className="max-w-4xl"><div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-semibold text-primary"><Globe className="h-4 w-4" /> Worldwide web design & development</div><h1 className="mt-6 text-4xl md:text-6xl font-display font-extrabold leading-tight">{page.heading}</h1><p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl">{page.intro}</p><div className="mt-8 flex flex-col sm:flex-row gap-3"><Button asChild size="lg" className="bg-gradient-primary"><Link to={`/book-appointment?project=${encodeURIComponent(page.heading)}`}>Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp Us</a></Button></div></div></div></section>
      <section className="py-10"><div className="container mx-auto px-4 lg:px-8 max-w-6xl"><div className="grid md:grid-cols-3 gap-5"><div className="p-6 rounded-2xl border border-primary/20 bg-primary/5"><DollarSign className="h-6 w-6 text-primary" /><p className="mt-3 text-3xl font-display font-extrabold">KES 5,000+</p><p className="mt-1 text-sm text-muted-foreground">Starter website projects from this price for defined small scopes.</p></div><div className="p-6 rounded-2xl border border-border bg-card"><Globe className="h-6 w-6 text-primary" /><p className="mt-3 text-xl font-display font-bold">Worldwide</p><p className="mt-1 text-sm text-muted-foreground">Remote project discussions and delivery for clients beyond Kenya.</p></div><div className="p-6 rounded-2xl border border-border bg-card"><Code2 className="h-6 w-6 text-primary" /><p className="mt-3 text-xl font-display font-bold">Custom scope</p><p className="mt-1 text-sm text-muted-foreground">E-commerce, Python, React and custom applications are priced according to requirements.</p></div></div></div></section>
      <section className="py-16"><div className="container mx-auto px-4 lg:px-8 max-w-6xl grid lg:grid-cols-[1.25fr_0.75fr] gap-10"><article><h2 className="text-3xl md:text-4xl font-display font-extrabold">What is included in a modern build?</h2><p className="mt-5 text-muted-foreground leading-relaxed">We start with the audience and business goal, then design the pages, content structure and functionality around that goal. SEO is treated as part of the website architecture, not as a collection of keywords pasted into a page.</p><div className="mt-8 grid sm:grid-cols-2 gap-4">{page.features.map((feature) => <div key={feature} className="p-5 rounded-2xl border border-border bg-card"><CheckCircle2 className="h-5 w-5 text-primary" /><h3 className="mt-3 font-semibold">{feature}</h3></div>)}</div><h2 className="mt-14 text-3xl font-display font-extrabold">Who is this for?</h2><ul className="mt-6 space-y-3">{page.audience.map((item) => <li key={item} className="flex gap-3 text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />{item}</li>)}</ul></article><aside className="space-y-4">{[{icon: Smartphone,title:"Mobile-first",text:"Responsive layouts for phones, tablets and desktops."},{icon:Search,title:"SEO-ready",text:"Metadata, canonical URLs, internal links and sitemap-friendly architecture."},{icon:Zap,title:"Performance",text:"Optimized layouts and media with a focus on useful real-world speed."},{icon:Shield,title:"Maintainable",text:"A clear technical structure that can grow with your project."}].map(({icon:Icon,title,text})=><div key={title} className="p-5 rounded-2xl border border-border bg-card"><Icon className="h-5 w-5 text-primary"/><h3 className="mt-3 font-semibold">{title}</h3><p className="mt-1 text-sm text-muted-foreground">{text}</p></div>)}</aside></div></section>
      <section className="py-16 bg-muted/30"><div className="container mx-auto px-4 lg:px-8 max-w-5xl"><h2 className="text-3xl md:text-4xl font-display font-extrabold text-center">A practical process from idea to launch</h2><div className="mt-10 grid md:grid-cols-3 gap-5">{["Plan","Build","Launch & improve"].map((step,i)=><div key={step} className="p-6 rounded-2xl bg-card border border-border"><div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">{i+1}</div><h3 className="mt-4 text-xl font-display font-bold">{step}</h3><p className="mt-2 text-sm text-muted-foreground">{["Define the audience, pages, features, content and technical requirements before development.","Design and develop the experience in clear stages, with responsive layouts and the required functionality.","Test forms and important journeys, deploy the site, monitor it and continue improving as your business grows."][i]}</p></div>)}</div></div></section>
      <section className="py-16"><div className="container mx-auto px-4 lg:px-8 max-w-4xl"><h2 className="text-3xl md:text-4xl font-display font-extrabold text-center">Questions about {page.heading.toLowerCase()}</h2><div className="mt-10 space-y-3">{page.faqs.map((item, i) => { const isOpen = openFaq === i; return <div key={item.q} className="rounded-2xl border border-border bg-card overflow-hidden"><button type="button" onClick={() => setOpenFaq(isOpen ? null : i)} aria-expanded={isOpen} className="w-full flex items-center justify-between gap-4 p-5 text-left"><span className="font-semibold">{item.q}</span><ChevronDown className={`h-5 w-5 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} /></button>{isOpen && <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{item.a}</p>}</div>; })}</div></div></section>
      <RelatedPages exclude={path} />

      <section className="py-20"><div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center"><h2 className="text-3xl md:text-5xl font-display font-extrabold">Ready to discuss your project?</h2><p className="mt-4 text-muted-foreground text-lg">Tell us what you want to build, where your customers are and what your budget looks like. We will help define a realistic scope.</p><div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"><Button asChild size="lg" className="bg-gradient-primary"><Link to={`/book-appointment?project=${encodeURIComponent(page.heading)}`}>Book a Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />Discuss on WhatsApp</a></Button></div><p className="mt-4 text-sm text-muted-foreground">Starter websites from KES 5,000. Custom applications and advanced integrations are quoted from scope.</p></div></section>
    </>
  );
}
