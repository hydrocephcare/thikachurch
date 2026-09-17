export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  tags: string[];
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: "global-web-design-guide-2026",
    slug: "global-web-design-guide-2026",
    title: "Global Website Design & Development: A Practical Guide for Businesses",
    metaTitle: "Global Website Design & Development | KenyaAdverts",
    metaDescription: "Learn how to plan a professional website for customers worldwide, including responsive design, SEO, localization, performance, security and conversions.",
    excerpt: "A practical guide to building modern websites for businesses and organisations serving customers locally or internationally.",
    category: "Web Development",
    tags: ["global web design", "website development", "responsive web design", "international websites", "business websites"],
    readTime: "9 min",
    publishedAt: "2026-09-18",
    updatedAt: "2026-09-18",
    featured: true,
  },
  {
    id: "how-to-choose-website-developer",
    slug: "how-to-choose-website-developer",
    title: "How to Choose a Website Developer for Your Business",
    metaTitle: "How to Choose a Website Developer | KenyaAdverts",
    metaDescription: "Compare website developers by portfolio, communication, technology, SEO, security, support and project scope before starting your next website.",
    excerpt: "What to look for when choosing a web designer or developer, from real projects and communication to SEO, performance and support.",
    category: "Web Development",
    tags: ["web developer", "website design", "business website", "web development services"],
    readTime: "7 min",
    publishedAt: "2026-09-17",
    updatedAt: "2026-09-17",
    featured: true,
  },
  {
    id: "professional-business-website",
    slug: "professional-business-website",
    title: "Why a Professional Website Matters for Modern Businesses",
    metaTitle: "Professional Business Website: Why It Matters",
    metaDescription: "Discover how a professional business website can explain your services, build trust, generate enquiries and support customers around the world.",
    excerpt: "A website can become your business's 24/7 digital storefront, helping visitors understand what you offer and take the next step.",
    category: "Business Websites",
    tags: ["business website", "company website", "online presence", "lead generation"],
    readTime: "6 min",
    publishedAt: "2026-09-16",
    updatedAt: "2026-09-16",
    featured: false,
  },
  {
    id: "website-seo-basics",
    slug: "website-seo-basics",
    title: "SEO Basics Every Business Website Should Have",
    metaTitle: "SEO Basics for Business Websites | Technical SEO Guide",
    metaDescription: "Learn essential SEO foundations including page titles, meta descriptions, headings, internal links, image optimization, sitemap and structured content.",
    excerpt: "The technical and content foundations that help search engines understand your website and help customers discover relevant pages.",
    category: "SEO",
    tags: ["SEO", "technical SEO", "meta titles", "meta descriptions", "Google search"],
    readTime: "9 min",
    publishedAt: "2026-09-15",
    updatedAt: "2026-09-15",
    featured: true,
  },
  {
    id: "ecommerce-website-features",
    slug: "ecommerce-website-features",
    title: "Essential Features for a Modern E-Commerce Website",
    metaTitle: "E-Commerce Website Features That Matter | Guide",
    metaDescription: "Explore essential e-commerce website features including product search, mobile checkout, payments, order management, security and customer support.",
    excerpt: "From product discovery to checkout and order management, these features help online stores create clearer customer journeys.",
    category: "E-Commerce",
    tags: ["e-commerce", "online shop", "online store", "checkout", "payments"],
    readTime: "8 min",
    publishedAt: "2026-09-14",
    updatedAt: "2026-09-14",
    featured: false,
  },
  {
    id: "website-speed-core-web-vitals",
    slug: "website-speed-core-web-vitals",
    title: "Website Speed: Why Performance Matters for SEO and Customers",
    metaTitle: "Website Speed & Performance | Core Web Vitals Guide",
    metaDescription: "Learn practical ways to improve website performance, including image optimization, caching, JavaScript reduction and Core Web Vitals.",
    excerpt: "Fast websites reduce friction for visitors. Learn the practical development and optimization steps that improve real-world performance.",
    category: "Performance",
    tags: ["website speed", "Core Web Vitals", "performance", "page speed", "SEO"],
    readTime: "7 min",
    publishedAt: "2026-09-13",
    updatedAt: "2026-09-13",
    featured: false,
  },
  {
    id: "website-security-basics",
    slug: "website-security-basics",
    title: "Website Security Basics for Business Owners",
    metaTitle: "Website Security Basics | Protect Your Business Website",
    metaDescription: "Understand essential website security practices including HTTPS, authentication, secret management, updates, permissions and backups.",
    excerpt: "Practical security fundamentals for websites, administrative accounts, customer information and web applications.",
    category: "Security",
    tags: ["website security", "HTTPS", "authentication", "web security", "business security"],
    readTime: "7 min",
    publishedAt: "2026-09-12",
    updatedAt: "2026-09-12",
    featured: false,
  },
  {
    id: "website-redesign-checklist",
    slug: "website-redesign-checklist",
    title: "Website Redesign Checklist: What to Fix Before Relaunch",
    metaTitle: "Website Redesign Checklist | SEO, UX & Performance",
    metaDescription: "Use this website redesign checklist to review UX, mobile design, content, SEO, redirects, accessibility, forms, links and performance before launch.",
    excerpt: "A redesign is a chance to improve messaging, navigation, mobile usability, SEO, accessibility, speed and conversions together.",
    category: "Website Redesign",
    tags: ["website redesign", "UX", "SEO", "website audit", "mobile design"],
    readTime: "8 min",
    publishedAt: "2026-09-11",
    updatedAt: "2026-09-11",
    featured: false,
  },
  {
    id: "school-education-websites",
    slug: "school-education-websites",
    title: "Building Better Websites for Schools and Education Platforms",
    metaTitle: "School & Education Website Design | Best Practices",
    metaDescription: "Learn how education websites can improve navigation, resources, accessibility, mobile usability and communication for students, parents and staff.",
    excerpt: "Education websites need clear navigation, resource organization, mobile usability and simple ways for different audiences to find information.",
    category: "Education",
    tags: ["school website", "education website", "learning platform", "student portal"],
    readTime: "7 min",
    publishedAt: "2026-09-10",
    updatedAt: "2026-09-10",
    featured: false,
  },
  {
    id: "organisation-websites",
    slug: "organisation-websites",
    title: "What Makes an Organisation Website Useful?",
    metaTitle: "Organisation Website Design | Modern Web Best Practices",
    metaDescription: "Learn how churches, NGOs, clubs, associations and community organisations can build useful websites for programmes, events, resources and contact.",
    excerpt: "A useful organisation website makes programmes, events, resources, contact details and updates easy for communities to find.",
    category: "Organisations",
    tags: ["organisation website", "NGO website", "church website", "community website"],
    readTime: "6 min",
    publishedAt: "2026-09-09",
    updatedAt: "2026-09-09",
    featured: false,
  },
  {
    id: "global-audience-websites",
    slug: "global-audience-websites",
    title: "How to Build a Website for a Global Audience",
    metaTitle: "How to Build a Website for a Global Audience",
    metaDescription: "Plan a website for international customers with responsive design, localization, currencies, payments, accessibility, international SEO and performance.",
    excerpt: "Serving customers worldwide requires more than changing a country name. Plan language, currencies, payments, content and international SEO carefully.",
    category: "Global Web Development",
    tags: ["global website", "international SEO", "localization", "multilingual website", "global business"],
    readTime: "9 min",
    publishedAt: "2026-09-08",
    updatedAt: "2026-09-08",
    featured: true,
  },
  {
    id: "website-content-strategy",
    slug: "website-content-strategy",
    title: "Website Content Strategy: What Should Your Website Say?",
    metaTitle: "Website Content Strategy | Pages Every Business Needs",
    metaDescription: "Plan useful website content with clear service pages, about information, FAQs, case studies, contact paths and search-friendly copy.",
    excerpt: "Good design needs good content. Learn how to structure website messaging so visitors quickly understand your offer and next step.",
    category: "Content Strategy",
    tags: ["website content", "content strategy", "copywriting", "service pages", "case studies"],
    readTime: "7 min",
    publishedAt: "2026-09-07",
    updatedAt: "2026-09-07",
    featured: false,
  },
  {
    id: "custom-web-applications",
    slug: "custom-web-applications",
    title: "When Your Business Needs a Custom Web Application",
    metaTitle: "Custom Web Applications for Businesses | Guide",
    metaDescription: "Learn when a custom web application makes sense for dashboards, portals, booking systems, management workflows, databases and integrations.",
    excerpt: "Not every project needs a standard website. Custom applications can connect workflows, data, users and business processes in one platform.",
    category: "Web Applications",
    tags: ["web application", "custom software", "business system", "dashboard", "database"],
    readTime: "8 min",
    publishedAt: "2026-09-06",
    updatedAt: "2026-09-06",
    featured: false,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map((post) => post.category))];
}
