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
const blogSlugs = [...blogSource.matchAll(/\bslug:\s*"([^"]+)"/g)].map((match) => `/blog/${match[1]}`);

const urls = [...new Set([...staticRoutes, ...seoSlugs, ...blogSlugs])];
const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
  .map((path) => `  <url><loc>${SITE}${path === "/" ? "/" : path}</loc></url>`)
  .join("\n")}\n</urlset>\n`;

await writeFile(resolve(root, "public/sitemap.xml"), xml, "utf8");
console.log(`Generated sitemap.xml with ${urls.length} URLs.`);
