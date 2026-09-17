import type { VercelRequest, VercelResponse } from "@vercel/node";
import { blogPosts } from "../src/lib/blogData";

const SITE = "https://kenyaadverts.co.ke";

const staticRoutes = [
  "/",
  "/portfolio",
  "/services",
  "/knowledge-bank",
  "/blog",
  "/order",
  "/book-appointment",
  "/about",
  "/contact",
  "/business-website-design-kenya",
  "/ecommerce-website-design-kenya",
  "/online-store-development-kenya",
  "/blog-website-design-kenya",
  "/news-website-development-kenya",
  "/video-streaming-website-kenya",
  "/youtube-like-website-development",
  "/netflix-like-streaming-platform",
  "/marketplace-website-development-kenya",
  "/school-website-design-kenya",
  "/custom-web-application-development-kenya",
];

export default function handler(_req: VercelRequest, res: VercelResponse) {
  const urls = [
    ...staticRoutes.map((path) => ({ path, lastmod: new Date().toISOString().slice(0, 10) })),
    ...blogPosts.map((post) => ({ path: `/blog/${post.slug}`, lastmod: post.updatedAt || post.publishedAt })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map(({ path, lastmod }) => `  <url><loc>${SITE}${path}</loc><lastmod>${lastmod}</lastmod></url>`)
    .join("\n")}\n</urlset>`;

  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate=86400");
  return res.status(200).send(xml);
}
