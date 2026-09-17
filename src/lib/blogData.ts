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
    id: "transform-church-digital-presence-2026",
    slug: "transform-church-digital-presence-2026",
    title: "Transform Your Church's Digital Presence: The Complete Guide to Church Websites in Kenya 2026",
    metaTitle: "Church Website Design Kenya 2026 | Complete Guide",
    metaDescription: "A practical guide to church websites in Kenya covering mobile-first design, M-Pesa giving, live streaming, sermon archives, SEO and visitor information.",
    excerpt: "A practical guide to planning a modern church website in Kenya, from essential pages and mobile design to online giving, streaming and search visibility.",
    category: "Church Websites",
    tags: ["church website Kenya", "church web design Nairobi", "online church platform Kenya", "church live streaming", "M-Pesa church donations"],
    readTime: "25 min",
    publishedAt: "2026-02-01",
    updatedAt: "2026-02-09",
    featured: true,
  },
  {
    id: "mpesa-church-donations-setup-guide",
    slug: "mpesa-church-donations-setup-guide",
    title: "How to Set Up M-Pesa Church Donations in Kenya: Complete 2026 Guide",
    metaTitle: "M-Pesa Church Donations Kenya | Setup Guide 2026",
    metaDescription: "Learn the main options for adding M-Pesa giving to a Kenyan church website, including payment flows, Paybill considerations and donor confirmations.",
    excerpt: "A practical overview of M-Pesa giving options for Kenyan churches and the website flows that can make online contributions easier to understand and complete.",
    category: "M-Pesa Integration",
    tags: ["M-Pesa church donations", "online giving Kenya", "church Paybill", "STK Push donations", "recurring church giving"],
    readTime: "12 min",
    publishedAt: "2026-01-20",
    updatedAt: "2026-02-05",
    featured: false,
  },
  {
    id: "church-live-streaming-kenya",
    slug: "church-live-streaming-kenya",
    title: "Church Live Streaming in Kenya: YouTube, Facebook & Website Integration",
    metaTitle: "Church Live Streaming Kenya | YouTube & Facebook",
    metaDescription: "Learn how Kenyan churches can plan live streaming with YouTube, Facebook or an embedded website player, including equipment, bandwidth and content structure.",
    excerpt: "A practical guide to planning church live streaming in Kenya, from platform choice and equipment to embedding broadcasts on your own website.",
    category: "Live Streaming",
    tags: ["church live streaming Kenya", "YouTube Live church", "Facebook Live church", "online church Kenya", "church streaming setup"],
    readTime: "15 min",
    publishedAt: "2026-01-15",
    updatedAt: "2026-02-01",
    featured: false,
  },
  {
    id: "best-church-website-examples-kenya",
    slug: "best-church-website-examples-kenya",
    title: "10 Church Website Examples in Kenya: Design Inspiration",
    metaTitle: "Church Website Examples Kenya | Design Ideas",
    metaDescription: "Explore church website design ideas relevant to Kenyan ministries, including navigation, service information, sermons, events, giving and mobile usability.",
    excerpt: "Looking for church website inspiration? Explore practical design patterns that make ministry websites easier to navigate and maintain.",
    category: "Design Inspiration",
    tags: ["church websites Kenya", "church website examples", "church web design inspiration", "Nairobi church websites", "Kenya ministry websites"],
    readTime: "10 min",
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-28",
    featured: false,
  },
  {
    id: "church-seo-kenya-guide",
    slug: "church-seo-kenya-guide",
    title: "Church SEO Kenya: A Practical Guide to Local Google Search",
    metaTitle: "Church SEO Kenya | Local Google Search Guide",
    metaDescription: "Learn practical church SEO in Kenya: useful local content, Google Business Profile, page titles, internal links, structured data and location signals.",
    excerpt: "A practical guide to improving a church website's visibility for local searches such as church services, ministries and churches in a specific Kenyan area.",
    category: "SEO",
    tags: ["church SEO Kenya", "local SEO churches", "Google Business Profile church", "church marketing Kenya", "church Google ranking"],
    readTime: "18 min",
    publishedAt: "2026-01-05",
    updatedAt: "2026-01-25",
    featured: true,
  },
  {
    id: "church-website-vs-church-app",
    slug: "church-website-vs-church-app",
    title: "Church Website vs Church App: Which Does Your Kenya Ministry Need?",
    metaTitle: "Church Website vs App Kenya | Digital Strategy Guide",
    metaDescription: "Compare church websites and mobile apps for Kenyan ministries. Review common features, content needs, maintenance considerations and when each approach makes sense.",
    excerpt: "Website or app? Compare the strengths of each approach and decide what your ministry actually needs before investing in software.",
    category: "Strategy",
    tags: ["church app Kenya", "church website Kenya", "church mobile app", "ministry technology", "church digital strategy"],
    readTime: "8 min",
    publishedAt: "2025-12-28",
    updatedAt: "2026-01-20",
    featured: false,
  },
  {
    id: "church-social-media-strategy-kenya",
    slug: "church-social-media-strategy-kenya",
    title: "Church Social Media Strategy for Kenya: Facebook, Instagram & WhatsApp",
    metaTitle: "Church Social Media Kenya | Practical Content Strategy",
    metaDescription: "Plan a useful church social media presence in Kenya with content ideas, publishing workflows and ways to connect social audiences to your website.",
    excerpt: "A practical content strategy for connecting church websites with Facebook, Instagram and WhatsApp without treating social media as the whole digital presence.",
    category: "Social Media",
    tags: ["church social media Kenya", "church Facebook page", "church Instagram", "WhatsApp church groups", "church marketing"],
    readTime: "14 min",
    publishedAt: "2025-12-20",
    updatedAt: "2026-01-15",
    featured: false,
  },
  {
    id: "sermon-archive-podcast-setup",
    slug: "sermon-archive-podcast-setup",
    title: "How to Create a Sermon Archive & Podcast for Your Kenyan Church",
    metaTitle: "Church Sermon Archive Kenya | Podcast Setup Guide",
    metaDescription: "Learn how to organise sermons on a Kenyan church website and connect recordings with podcast platforms, searchable archives and shareable episode pages.",
    excerpt: "Learn how to turn weekly sermons into an organised archive that visitors can search, share and listen to throughout the week.",
    category: "Content Strategy",
    tags: ["church sermon archive", "church podcast Kenya", "Apple Podcasts church", "Spotify church podcast", "sermon recordings"],
    readTime: "11 min",
    publishedAt: "2025-12-15",
    updatedAt: "2026-01-10",
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
