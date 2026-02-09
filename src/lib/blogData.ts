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
    metaTitle: "Church Website Design Kenya 2026 | M-Pesa, Live Streaming & Mobile-First",
    metaDescription: "Build a powerful church website in Kenya with M-Pesa donations, live streaming, sermon archives & mobile optimization. Trusted by 150+ Kenyan churches. Free consultation: 0115475543",
    excerpt: "Sunday morning, 10:45 AM. Mary is searching on her phone: 'youth-friendly churches near Westlands.' Your church has an amazing youth ministry. But Mary can't find you online...",
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
    metaTitle: "M-Pesa Church Donations Kenya | Online Giving Setup Guide 2026",
    metaDescription: "Learn how to set up M-Pesa donations for your church website. STK Push, recurring giving, and Paybill integration. Step-by-step guide for Kenyan churches.",
    excerpt: "M-Pesa is how Kenya gives. If your church isn't accepting tithes and offerings via M-Pesa online, you're leaving money on the table. Here's exactly how to set it up...",
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
    metaTitle: "Church Live Streaming Kenya | YouTube & Facebook Live Setup 2026",
    metaDescription: "Set up professional live streaming for your Kenyan church. YouTube Live, Facebook Live, and website embedding. Equipment recommendations and bandwidth requirements.",
    excerpt: "During COVID-19, churches with live streaming reached 5X more people than their physical capacity. Here's how to set up professional streaming for your church...",
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
    title: "10 Best Church Website Examples in Kenya 2026: Design Inspiration",
    metaTitle: "Best Church Websites Kenya 2026 | Top 10 Examples & Design Ideas",
    metaDescription: "Discover the best church website designs in Kenya. See what makes these sites successful with M-Pesa, sermon archives, and mobile-first design.",
    excerpt: "Looking for inspiration for your church website? We've analyzed the top 10 best church websites in Kenya to show you what works...",
    category: "Design Inspiration",
    tags: ["best church websites Kenya", "church website examples", "church web design inspiration", "Nairobi church websites", "Kenya ministry websites"],
    readTime: "10 min",
    publishedAt: "2026-01-10",
    updatedAt: "2026-01-28",
    featured: false,
  },
  {
    id: "church-seo-kenya-guide",
    slug: "church-seo-kenya-guide",
    title: "Church SEO Kenya: How to Rank #1 on Google for 'Churches Near Me'",
    metaTitle: "Church SEO Kenya | Rank Higher on Google for Local Searches 2026",
    metaDescription: "Learn how to optimize your church website for Google search in Kenya. Local SEO, Google Business Profile, and content strategies for churches.",
    excerpt: "When someone searches 'churches near me in Nairobi,' does your church appear? Here's the complete guide to church SEO in Kenya...",
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
    metaTitle: "Church Website vs App Kenya | What Your Ministry Actually Needs 2026",
    metaDescription: "Should your Kenyan church invest in a website, mobile app, or both? Cost comparison, features, and recommendations for different church sizes.",
    excerpt: "Website or app? It's the question every growing church asks. Here's the honest answer based on your church size and budget...",
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
    metaTitle: "Church Social Media Kenya | Facebook, Instagram & WhatsApp Strategy 2026",
    metaDescription: "Build your church's social media presence in Kenya. Content calendars, WhatsApp groups, Facebook pages, and Instagram strategies that work.",
    excerpt: "Your church's social media isn't just about posting announcements. It's about building community. Here's how to do it right in Kenya...",
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
    metaTitle: "Church Sermon Archive Kenya | Podcast Setup Guide for Churches 2026",
    metaDescription: "Set up a sermon archive and podcast for your church. Upload to Apple Podcasts, Spotify, and your website. Reach 1000+ listeners weekly.",
    excerpt: "Stop losing sermons after Sunday. A sermon archive and podcast extends your reach to thousands of listeners throughout the week...",
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
