import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const SITE = "https://kenyaadverts.co.ke";
const root = process.cwd();

const staticRoutes = [
  "/",
  "/services",
  "/portfolio",
  "/about",
  "/contact",
  "/order",
  "/book-appointment",
  "/blog",
  "/knowledge-bank",
];

const [appSource, blogSource] = await Promise.all([
  readFile(resolve(root, "src/App.tsx"), "utf8"),
  readFile(resolve(root, "src/lib/blogData.ts"), "utf8"),
]);

const seoBlock = appSource.match(/const seoSlugs = \[([\s\S]*?)\];/m)?.[1] ?? "";
const seoSlugs = [...seoBlock.matchAll(/"([^"]+)"/g)].map((match) => `/${match[1]}`);
const blogEntries = [...blogSource.matchAll(/\{[\s\S]*?slug:\s*"([^"]+)"[\s\S]*?publishedAt:\s*"([^"]+)"[\s\S]*?updatedAt:\s*"([^"]+)"[\s\S]*?\}/g)]
  .map((match) => ({ path: `/blog/${match[1]}`, lastmod: match[3] || match[2] }));

const urls = [
  ...new Set([...staticRoutes, ...seoSlugs].map((path) => ({ path, lastmod: new Date().toISOString().slice(0, 10) }))),
  ...blogEntries,
];

const uniqueUrls = [...new Map(urls.map((item) => [item.path, item])).values()];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${uniqueUrls
  .map(({ path, lastmod }) => `  <url><loc>${SITE}${path === "/" ? "/" : path}</loc><lastmod>${lastmod}</lastmod></url>`)
  .join("\n")}\n</urlset>\n`;

await writeFile(resolve(root, "public/sitemap.xml"), xml, "utf8");
console.log(`Generated sitemap.xml with ${uniqueUrls.length} URLs.`);
