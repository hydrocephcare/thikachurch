// Central directory of every landing-style page on the site, used to build
// internal "related pages" links. Keeping this in one place means every new
// page type (service, city, global) is automatically linkable from the others,
// which helps both users and crawlers discover pages that aren't in the main nav.

export interface DirectoryEntry {
  path: string;
  label: string;
  group: "service" | "global" | "city";
}

export const pageDirectory: DirectoryEntry[] = [
  // Kenya-specific service pages
  { path: "/business-website-design-kenya", label: "Business Website Design Kenya", group: "service" },
  { path: "/ecommerce-website-design-kenya", label: "E-Commerce Website Design Kenya", group: "service" },
  { path: "/online-store-development-kenya", label: "Online Store Development Kenya", group: "service" },
  { path: "/blog-website-design-kenya", label: "Blog Website Design Kenya", group: "service" },
  { path: "/news-website-development-kenya", label: "News Website Development Kenya", group: "service" },
  { path: "/video-streaming-website-kenya", label: "Video Streaming Website Kenya", group: "service" },
  { path: "/youtube-like-website-development", label: "YouTube-Like Website Development", group: "service" },
  { path: "/netflix-like-streaming-platform", label: "Netflix-Like Streaming Platform", group: "service" },
  { path: "/marketplace-website-development-kenya", label: "Marketplace Website Development Kenya", group: "service" },
  { path: "/school-website-design-kenya", label: "School Website Design Kenya", group: "service" },
  { path: "/custom-web-application-development-kenya", label: "Custom Web Application Development Kenya", group: "service" },
  // Worldwide service pages
  { path: "/website-design-worldwide", label: "Website Design Worldwide", group: "global" },
  { path: "/affordable-website-design", label: "Affordable Website Design", group: "global" },
  { path: "/business-website-design-worldwide", label: "Business Website Design Worldwide", group: "global" },
  { path: "/ecommerce-website-development-worldwide", label: "E-Commerce Website Development Worldwide", group: "global" },
  { path: "/custom-web-application-development", label: "Custom Web Application Development", group: "global" },
  { path: "/python-web-development", label: "Python Web Development", group: "global" },
  { path: "/react-web-development", label: "React Web Development", group: "global" },
  { path: "/wordpress-alternative-custom-websites", label: "Custom Websites vs WordPress", group: "global" },
  { path: "/seo-website-development", label: "SEO Website Development", group: "global" },
  { path: "/website-maintenance-support-worldwide", label: "Website Maintenance & Support", group: "global" },
  { path: "/website-redesign-worldwide", label: "Website Redesign Services", group: "global" },
  { path: "/landing-page-design-worldwide", label: "Landing Page Design", group: "global" },
  { path: "/portfolio-website-design-worldwide", label: "Portfolio Website Design", group: "global" },
  { path: "/school-website-development-worldwide", label: "School Website Development", group: "global" },
  { path: "/marketplace-development-worldwide", label: "Marketplace Development", group: "global" },
  { path: "/blog-website-development-worldwide", label: "Blog Website Development", group: "global" },
  { path: "/web-design-for-startups", label: "Web Design for Startups", group: "global" },
  // City pages
  { path: "/web-design-nairobi", label: "Website Design Nairobi", group: "city" },
  { path: "/web-design-mombasa", label: "Website Design Mombasa", group: "city" },
  { path: "/web-design-kisumu", label: "Website Design Kisumu", group: "city" },
  { path: "/web-design-eldoret", label: "Website Design Eldoret", group: "city" },
  { path: "/web-design-nakuru", label: "Website Design Nakuru", group: "city" },
];

/**
 * Deterministic pick of related pages for a given path, so the same page
 * always shows the same related set (stable for SEO / crawl consistency)
 * rather than a different random set on every render.
 */
export function getRelatedPages(currentPath: string, count = 4): DirectoryEntry[] {
  const others = pageDirectory.filter((entry) => entry.path !== currentPath);
  // Simple deterministic shuffle seeded by the current path's char codes.
  const seed = currentPath.split("").reduce((acc, ch) => acc + ch.charCodeAt(0), 0);
  const sorted = [...others].sort((a, b) => {
    const ai = (seed + a.path.length * 7) % 997;
    const bi = (seed + b.path.length * 7) % 997;
    return ai - bi;
  });
  return sorted.slice(0, count);
}
