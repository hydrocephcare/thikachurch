import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getBlogPostBySlug } from "@/lib/blogData";

const SITE = "https://kenyaadverts.co.ke";

const routeSeo: Record<string, { title: string; description: string }> = {
  "/": {
    title: "Website Design & Development Worldwide | KenyaAdverts",
    description: "KenyaAdverts designs and develops modern websites, e-commerce stores, marketplaces, education platforms and custom web applications for businesses and organisations worldwide.",
  },
  "/portfolio": {
    title: "Web Design Portfolio | Websites & Web Applications | KenyaAdverts",
    description: "Explore real websites and web applications built across business, e-commerce, education, marketplaces, publishing and organisations.",
  },
  "/services": {
    title: "Web Design & Development Services Worldwide | KenyaAdverts",
    description: "Website design, e-commerce development, custom web applications, education platforms, marketplaces, SEO, maintenance and digital solutions for clients worldwide.",
  },
  "/knowledge-bank": {
    title: "Web Design & SEO Knowledge Bank | KenyaAdverts",
    description: "Practical guides about website design, SEO, performance, security, e-commerce, web applications and growing a business online.",
  },
  "/blog": {
    title: "Web Design, Development & SEO Blog | KenyaAdverts",
    description: "Read practical articles about web design, development, SEO, e-commerce, website performance, security and digital strategy for businesses worldwide.",
  },
  "/about": {
    title: "About KenyaAdverts | Global Web Design & Development",
    description: "Learn about KenyaAdverts and our approach to designing and developing modern websites and web applications for businesses, organisations and individuals worldwide.",
  },
  "/contact": {
    title: "Contact Us | Website Design & Development Worldwide",
    description: "Contact KenyaAdverts to discuss a website, online store, marketplace, education platform or custom web application for your business or organisation.",
  },
  "/order": {
    title: "Start Your Website Project | KenyaAdverts",
    description: "Tell KenyaAdverts about your website, e-commerce, marketplace or custom web application project and start the development conversation.",
  },
  "/book-appointment": {
    title: "Book a Web Design Consultation | KenyaAdverts",
    description: "Book a consultation with KenyaAdverts to discuss your website, online store, web application, SEO or digital project requirements.",
  },
};

export default function RouteSeo() {
  const { pathname } = useLocation();
  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  const blogPost = blogMatch ? getBlogPostBySlug(blogMatch[1]) : undefined;
  const seo = blogPost
    ? { title: blogPost.metaTitle, description: blogPost.metaDescription, type: "article" as const }
    : { ...(routeSeo[pathname] ?? routeSeo["/"]), type: "website" as const };

  const canonical = `${SITE}${pathname === "/" ? "/" : pathname}`;

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="x-default" href={canonical} />
      <meta property="og:type" content={seo.type} />
      <meta property="og:site_name" content="KenyaAdverts" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${SITE}/og-image.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={`${SITE}/og-image.jpg`} />
    </Helmet>
  );
}
