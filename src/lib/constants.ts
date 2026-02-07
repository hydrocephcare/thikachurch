import portfolioBrightpath from "@/assets/portfolio-brightpath.jpg";
import portfolioTukule from "@/assets/portfolio-tukule.jpg";
import portfolioHarvestfaith from "@/assets/portfolio-harvestfaith.jpg";

export const WHATSAPP_NUMBER = "254115475543";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'm interested in your web development services.")}`;
export const WHATSAPP_ORDER_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to order a website. Here are my details:")}`;
export const PHONE_DISPLAY = "+254 115 475 543";

export const portfolioProjects = [
  {
    id: "brightpath",
    title: "BrightPath Academy",
    category: "Education",
    description: "A modern school management platform with student portals, event calendars, and online enrollment — designed for engagement and seamless administration.",
    url: "#",
    tags: ["React", "Responsive", "SEO"],
    image: portfolioBrightpath,
  },
  {
    id: "tukule",
    title: "Tukule Express",
    category: "E-Commerce",
    description: "A fast-loading food delivery platform with M-Pesa integration, real-time order tracking, and a mobile-first design for the Kenyan market.",
    url: "#",
    tags: ["E-Commerce", "M-Pesa", "Mobile"],
    image: portfolioTukule,
  },
  {
    id: "harvestfaith",
    title: "Harvest Faith Church",
    category: "Church",
    description: "A beautiful church website with sermon archives, event management, online giving, and a member portal — built to strengthen community connection.",
    url: "#",
    tags: ["Church", "Donations", "Events"],
    image: portfolioHarvestfaith,
  },
];

export const services = [
  {
    id: "church",
    title: "Church & Community Websites",
    description: "Beautiful, purpose-built websites for churches and faith communities. Features include sermon archives, event calendars, donation integration, and member portals.",
    features: ["Sermon & event pages", "Online donation integration", "Member directory", "Mobile-responsive design"],
    popular: true,
  },
  {
    id: "business",
    title: "Business & Corporate Sites",
    description: "Professional websites that establish credibility and drive customer acquisition. From startups to enterprises, we create digital experiences that convert.",
    features: ["Lead generation forms", "Service/product showcases", "Analytics integration", "SEO optimization"],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platforms",
    description: "Full-featured online stores with secure payment processing, inventory management, and seamless checkout experiences for the global market.",
    features: ["M-Pesa & card payments", "Inventory management", "Order tracking", "Customer accounts"],
  },
  {
    id: "custom",
    title: "Custom Web Applications",
    description: "Bespoke web applications tailored to your exact specifications. From SaaS platforms to booking systems, we build solutions that scale.",
    features: ["Custom functionality", "API integrations", "Admin dashboards", "Scalable architecture"],
  },
  {
    id: "portfolio",
    title: "Portfolio & Personal Sites",
    description: "Stunning personal brand websites that showcase your work, tell your story, and make lasting impressions on clients and employers.",
    features: ["Project galleries", "Blog integration", "Contact forms", "Social media links"],
  },
  {
    id: "maintenance",
    title: "Maintenance & Growth",
    description: "Ongoing support, performance optimization, security updates, and growth strategies to keep your site running at peak performance.",
    features: ["24/7 monitoring", "Security patches", "Performance optimization", "Content updates"],
  },
];
