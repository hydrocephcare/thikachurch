// Generates one new, long-form, SEO-oriented blog post using the Groq API
// and appends it to src/lib/blogData.ts + src/lib/blogContent.tsx.
//
// Run by .github/workflows/daily-blog.yml on a daily schedule. Requires
// GROQ_API_KEY in the environment. Exits non-zero (without writing anything)
// if the generated content fails validation, so a bad generation never gets
// committed automatically.

import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const BLOG_DATA_PATH = resolve(root, "src/lib/blogData.ts");
const BLOG_CONTENT_PATH = resolve(root, "src/lib/blogContent.tsx");
const GROQ_API_KEY = process.env.GROQ_API_KEY;
const WHATSAPP_URL = "https://wa.me/254115475543";

if (!GROQ_API_KEY) {
  console.error("Missing GROQ_API_KEY environment variable.");
  process.exit(1);
}

// A broad topic pool covering Kenya-specific and general/global web topics,
// so the automated blog doesn't become one-note. The script skips any topic
// whose slug already exists in blogData.ts, cycling through this list before
// ever repeating.
const TOPIC_POOL = [
  { topic: "How much should a small business website really cost", category: "Pricing & Planning" },
  { topic: "M-Pesa integration options for Kenyan e-commerce sites", category: "E-Commerce" },
  { topic: "Mobile-first design: why it matters more in Kenya than almost anywhere else", category: "Web Design" },
  { topic: "WordPress vs a custom-built website: an honest comparison", category: "Web Development" },
  { topic: "What makes a website actually load fast on a budget phone", category: "Performance" },
  { topic: "Website accessibility basics every business site should get right", category: "Accessibility" },
  { topic: "How to write website copy that actually converts visitors into enquiries", category: "Content Strategy" },
  { topic: "Choosing between a Paybill and a Till Number for your online store", category: "E-Commerce" },
  { topic: "The Kenya Data Protection Act and what it means for your website", category: "Security & Compliance" },
  { topic: "Booking and appointment systems: what small service businesses actually need", category: "Web Applications" },
  { topic: "Headless commerce explained simply, and when it's overkill", category: "E-Commerce" },
  { topic: "How schools in Kenya can use their website for more than admissions", category: "Education Websites" },
  { topic: "A practical guide to website backups that actually get tested", category: "Security & Compliance" },
  { topic: "Progressive Web Apps: a lighter alternative to a native mobile app", category: "Web Development" },
  { topic: "What a marketplace website needs before its first real seller signs up", category: "Marketplaces" },
  { topic: "Donation and giving pages for churches and NGOs: what works", category: "Organisation Websites" },
  { topic: "Core Web Vitals explained without the jargon", category: "Performance" },
  { topic: "Why your website needs Google Search Console, not just Analytics", category: "SEO" },
  { topic: "Designing a restaurant website that actually drives orders", category: "Web Design" },
  { topic: "What changes when you move from Instagram-only sales to a real online store", category: "E-Commerce" },
  { topic: "Real estate websites: the features buyers actually use", category: "Web Design" },
  { topic: "A field guide to choosing a domain name that won't age badly", category: "Planning" },
  { topic: "What a custom dashboard actually replaces in a growing business", category: "Web Applications" },
  { topic: "Website security basics for a small business owner, not a developer", category: "Security & Compliance" },
  { topic: "Internal linking: the free SEO upgrade most small sites skip", category: "SEO" },
  { topic: "Logistics and delivery company websites: tracking, quotes and trust", category: "Web Design" },
  { topic: "When a landing page beats a full website for a new product launch", category: "Marketing" },
  { topic: "Video and streaming on a website without building your own Netflix", category: "Web Applications" },
  { topic: "What makes a portfolio website actually get a freelancer hired", category: "Portfolio Websites" },
  { topic: "Multi-vendor marketplaces: moderation, trust and the hard parts", category: "Marketplaces" },
  { topic: "A realistic look at AI chatbots on small business websites", category: "Web Development" },
  { topic: "Why redesigns go wrong, and the audit that prevents it", category: "Web Design" },
  { topic: "Choosing hosting for a Kenyan business: what actually matters", category: "Infrastructure" },
  { topic: "Writing FAQ content that reduces support messages, not just fills space", category: "Content Strategy" },
  { topic: "What a membership or subscription website needs technically", category: "Web Applications" },
  { topic: "Analytics every small business owner should actually check monthly", category: "SEO" },
  { topic: "Building trust online when you have no physical shopfront", category: "Marketing" },
  { topic: "Email vs WhatsApp as a primary contact channel for a Kenyan business site", category: "Marketing" },
  { topic: "What a school management portal adds beyond a public website", category: "Education Websites" },
  { topic: "Planning a website redesign without losing your Google rankings", category: "SEO" },
];

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

async function pickModel() {
  const res = await fetch("https://api.groq.com/openai/v1/models", {
    headers: { Authorization: `Bearer ${GROQ_API_KEY}` },
  });
  if (!res.ok) throw new Error(`Failed to list Groq models: ${res.status}`);
  const { data } = await res.json();
  const ids = data.map((m) => m.id);

  // Prefer a known strong general-purpose chat model if it's currently
  // active; otherwise fall back to any model that isn't obviously
  // audio/moderation/guard-only, so this doesn't break if the preferred
  // model is deprecated.
  const preferred = ["llama-3.3-70b-versatile", "llama-3.1-70b-versatile", "openai/gpt-oss-120b", "mixtral-8x7b-32768"];
  for (const id of preferred) {
    if (ids.includes(id)) return id;
  }
  const fallback = ids.find((id) => !/whisper|guard|moderation|tts/i.test(id));
  if (!fallback) throw new Error("No suitable Groq chat model found.");
  console.log(`Preferred models unavailable, falling back to: ${fallback}`);
  return fallback;
}

async function generateArticle(model, topic, category) {
  const systemPrompt = `You are a professional web development and SEO content writer for KenyaAdverts, a Kenyan web design and development agency (website: www.kenyaadverts.co.ke, WhatsApp: 0115 475 543, starter websites from KES 5,000). Write genuinely useful, specific, non-generic long-form articles.

CRITICAL - do not fabricate specific numbers you cannot know are true: no invented KES price ranges for things you have not been given real data on (hosting costs, maintenance fees, SEO retainer costs, etc.), no invented percentage statistics ("X% of traffic is mobile"), no invented client names, testimonials, case studies, or survey results presented as real. Where a cost or stat would strengthen the article, either omit it, or clearly hedge it as a general industry pattern without a specific invented number (e.g. "hosting costs vary widely by provider and traffic" rather than "hosting costs KES 1,000-5,000/month"). The ONLY pricing fact you may state as fact is: KenyaAdverts starter websites begin from KES 5,000. Output ONLY valid JSON matching the exact schema given, no markdown fences, no commentary.`;

  const userPrompt = `Write a long-form blog article on this topic: "${topic}" (category: "${category}").

Return ONLY a JSON object with this exact shape:
{
  "title": "string, compelling, specific, under 70 chars",
  "metaTitle": "string, under 60 chars, include KenyaAdverts",
  "metaDescription": "string, under 160 chars, compelling",
  "excerpt": "string, 1-2 sentences summarizing the article",
  "tags": ["4-6 relevant lowercase tags"],
  "readTime": "string like '8 min'",
  "intro": "string, 2-3 sentences setting up the article",
  "sections": [
    { "heading": "string", "paragraphs": ["string", "string"], "bullets": ["optional array of strings, omit if not needed"] }
  ],
  "conclusion": "string, 2-3 sentences wrapping up with a practical takeaway"
}

Requirements:
- At least 5 sections, each with at least 2 substantive paragraphs (not one-liners).
- Total article length should be genuinely long-form: aim for 1100-1600 words across intro+sections+conclusion combined.
- Be specific and practical, not generic filler. No invented statistics, client names or case studies presented as real unless clearly hypothetical.
- Where naturally relevant, mention that KenyaAdverts builds this kind of thing and can be reached on WhatsApp, but don't force it into every section - at most 1-2 natural mentions.
- Do not wrap the JSON in markdown code fences. Output raw JSON only.`;

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
      ],
      temperature: 0.7,
      max_tokens: 4000,
      response_format: { type: "json_object" },
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Groq API error ${res.status}: ${text}`);
  }

  const json = await res.json();
  const content = json.choices?.[0]?.message?.content;
  if (!content) throw new Error("Groq response had no content.");

  let parsed;
  try {
    parsed = JSON.parse(content);
  } catch (err) {
    throw new Error(`Groq response was not valid JSON: ${err.message}\n${content.slice(0, 500)}`);
  }
  return parsed;
}

function validateArticle(article) {
  const errors = [];
  if (!article.title || article.title.length < 10) errors.push("title missing or too short");
  if (!article.metaTitle) errors.push("metaTitle missing");
  if (!article.metaDescription) errors.push("metaDescription missing");
  if (!article.excerpt) errors.push("excerpt missing");
  if (!Array.isArray(article.tags) || article.tags.length < 3) errors.push("tags missing or too few");
  if (!article.intro || article.intro.length < 50) errors.push("intro missing or too short");
  if (!Array.isArray(article.sections) || article.sections.length < 4) errors.push("fewer than 4 sections");
  if (!article.conclusion || article.conclusion.length < 50) errors.push("conclusion missing or too short");

  const wordCount = [
    article.intro ?? "",
    ...(article.sections ?? []).flatMap((s) => [s.heading ?? "", ...(s.paragraphs ?? [])]),
    article.conclusion ?? "",
  ].join(" ").split(/\s+/).filter(Boolean).length;

  if (wordCount < 700) errors.push(`article too short (${wordCount} words, need 700+)`);

  for (const [i, section] of (article.sections ?? []).entries()) {
    if (!section.heading) errors.push(`section ${i} missing heading`);
    if (!Array.isArray(section.paragraphs) || section.paragraphs.length < 1) errors.push(`section ${i} missing paragraphs`);
  }

  return { valid: errors.length === 0, errors, wordCount };
}

async function main() {
  const [blogDataSrc, blogContentSrc] = await Promise.all([
    readFile(BLOG_DATA_PATH, "utf8"),
    readFile(BLOG_CONTENT_PATH, "utf8"),
  ]);

  const existingSlugs = new Set([...blogDataSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]));

  const nextTopic = TOPIC_POOL.find(({ topic }) => !existingSlugs.has(slugify(topic)));
  if (!nextTopic) {
    console.log("All topics in the pool have been used. Nothing to generate today - add more topics to TOPIC_POOL.");
    process.exit(0);
  }

  console.log(`Generating article for topic: "${nextTopic.topic}"`);
  const model = await pickModel();
  console.log(`Using model: ${model}`);

  const article = await generateArticle(model, nextTopic.topic, nextTopic.category);
  const validation = validateArticle(article);

  if (!validation.valid) {
    console.error("Generated article failed validation:", validation.errors);
    console.error("Not writing anything. Exiting with failure so this doesn't get committed.");
    process.exit(1);
  }

  console.log(`Article validated: ${validation.wordCount} words, ${article.sections.length} sections.`);

  const slug = slugify(article.title);
  const today = new Date().toISOString().slice(0, 10);

  // --- Append to blogData.ts ---
  const newPostEntry = `  {
    id: "${slug}",
    slug: "${slug}",
    title: ${JSON.stringify(article.title)},
    metaTitle: ${JSON.stringify(article.metaTitle)},
    metaDescription: ${JSON.stringify(article.metaDescription)},
    excerpt: ${JSON.stringify(article.excerpt)},
    category: ${JSON.stringify(nextTopic.category)},
    tags: ${JSON.stringify(article.tags)},
    readTime: ${JSON.stringify(article.readTime || "7 min")},
    publishedAt: "${today}",
    updatedAt: "${today}",
    featured: false,
  },\n`;

  const updatedBlogData = blogDataSrc.replace(
    /export const blogPosts: BlogPost\[\] = \[\n/,
    `export const blogPosts: BlogPost[] = [\n${newPostEntry}`
  );

  // --- Append to blogContent.tsx ---
  const sectionsLiteral = article.sections
    .map((s) => {
      const bulletsLiteral = Array.isArray(s.bullets) && s.bullets.length > 0 ? `, bullets: ${JSON.stringify(s.bullets)}` : "";
      return `{ heading: ${JSON.stringify(s.heading)}, paragraphs: ${JSON.stringify(s.paragraphs)}${bulletsLiteral} }`;
    })
    .join(", ");

  const ctaNote = `If this is a project you're working through right now, KenyaAdverts builds exactly this kind of website - message us on WhatsApp (0115 475 543) and we'll talk through what you actually need.`;
  const conclusionWithCta = `${article.conclusion} ${ctaNote}`;

  const newArticleEntry = `  "${slug}": { intro: ${JSON.stringify(article.intro)}, sections: [${sectionsLiteral}], conclusion: ${JSON.stringify(conclusionWithCta)} },\n`;

  const updatedBlogContent = blogContentSrc.replace(
    /const articles: Record<string, \{ intro: string; sections: Array<\{ heading: string; paragraphs: string\[\]; bullets\?: string\[\] \}>; conclusion: string \}> = \{\n/,
    (match) => `${match}${newArticleEntry}`
  );

  await writeFile(BLOG_DATA_PATH, updatedBlogData, "utf8");
  await writeFile(BLOG_CONTENT_PATH, updatedBlogContent, "utf8");

  console.log(`Wrote new post: /blog/${slug}`);
  console.log(`WhatsApp CTA included: ${WHATSAPP_URL}`);
}

main().catch((err) => {
  console.error("Blog generation failed:", err.message);
  process.exit(1);
});
