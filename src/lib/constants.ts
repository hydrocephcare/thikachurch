import portfolioMkucu from "@/assets/portfolio-mkucu.png";
import portfolioMedlife from "@/assets/portfolio-medlife.png";
import portfolioAzaniisp from "@/assets/portfolio-azaniisp.png";
import portfolioKcse from "@/assets/portfolio-kcse.jpg";
import portfolioKenyaAdvertsCom from "@/assets/portfolio-kenyaadverts-com.png";
import portfolioKenyaAdvertsCoke from "@/assets/portfolio-kenyaadverts-coke.png";
import portfolioOmpath from "@/assets/portfolio-ompathstudy.png";

export const WHATSAPP_NUMBER = "254115475543";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'm interested in your web development services.")}`;
export const WHATSAPP_ORDER_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to order a website. Here are my details:")}`;
export const PHONE_DISPLAY = "+254 115 475 543";

export type ProjectStatus = "completed" | "coming-soon";

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
  tags: string[];
  image: string | null;
  status: ProjectStatus;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "kenyaadverts-com",
    title: "Kenya Adverts Marketplace",
    category: "E-Commerce",
    description:
      "Kenya's own classifieds marketplace covering all 47 counties — cars, phones, property, jobs and more. M-Pesa secure transactions, free posting, and a mobile-first listing experience built for 50K+ buyers.",
    url: "https://www.kenyaadverts.com",
    tags: ["Marketplace", "Classifieds", "M-Pesa", "E-Commerce"],
    image: portfolioKenyaAdvertsCom,
    status: "completed",
  },
  {
    id: "ompath-study",
    title: "Ompath Study",
    category: "Education",
    description:
      "A comprehensive medical education platform for East African MBChB students — high-yield notes, MCQ banks, flashcards, past papers and clinical stories organised by year and unit.",
    url: "https://ompathstudy.com",
    tags: ["Education", "Medical", "MCQ Bank", "Flashcards"],
    image: portfolioOmpath,
    status: "completed",
  },
  {
    id: "kenyaadverts-coke",
    title: "KenyaAdverts.co.ke",
    category: "Business",
    description:
      "A Kenyan web development showcase — professional websites with M-Pesa donations, live streaming and mobile-first design, serving churches, ministries and businesses across Kenya.",
    url: "https://www.kenyaadverts.co.ke",
    tags: ["Business", "Agency", "M-Pesa", "SEO"],
    image: portfolioKenyaAdvertsCoke,
    status: "completed",
  },
  {
    id: "mku-cu",
    title: "MKU Christian Union",
    category: "Church",
    description:
      "A feature-rich church community website for Mt. Kenya University Christian Union — with sermon archives, YouTube live streaming, events calendar, ministry pages, and WhatsApp integration for member engagement.",
    url: "https://mku-cu-connect.vercel.app/",
    tags: ["Church", "React", "Community", "Live Streaming"],
    image: portfolioMkucu,
    status: "completed",
  },
  {
    id: "medlife-echos",
    title: "Medlife Echo's",
    category: "Education",
    description:
      "A comprehensive medical education blog with 281+ articles across 23 categories — covering parasitology, biochemistry, pathology, and exam prep for MKU medical students.",
    url: "https://medlifeechos.vercel.app/",
    tags: ["Blog", "Medical", "Education", "SEO"],
    image: portfolioMedlife,
    status: "completed",
  },
  {
    id: "azani-isp",
    title: "Azani ISP Project",
    category: "Education",
    description:
      "A professional landing page for the 2026 KCSE Computer Studies Paper 3 project — featuring project documentation, pricing, WhatsApp ordering, and community forums for 500+ students.",
    url: "https://www.azaniispproject.co.ke/",
    tags: ["Landing Page", "KCSE", "E-Commerce"],
    image: portfolioAzaniisp,
    status: "completed",
  },
  {
    id: "kcse-azani",
    title: "KCSE Resource Hub",
    category: "Education",
    description:
      "A dedicated KCSE exam resource platform under the Azani ISP brand — providing study guides, past papers, and project support materials for Kenyan high school students.",
    url: "https://kcse.azaniispproject.co.ke/",
    tags: ["Education", "KCSE", "Resources"],
    image: portfolioKcse,
    status: "completed",
  },
];

export const upcomingProjects: PortfolioProject[] = [
  {
    id: "grace-chapel",
    title: "Grace Chapel International",
    category: "Church",
    description: "A modern church website with live streaming, sermon archives, and online giving for a growing congregation.",
    url: "#",
    tags: ["Church", "Donations", "Live Stream"],
    image: null,
    status: "coming-soon",
  },
  {
    id: "nairobi-worship",
    title: "Nairobi Worship Centre",
    category: "Church",
    description: "Full-featured church platform with member portal, small groups management, and event registration.",
    url: "#",
    tags: ["Church", "Member Portal", "Events"],
    image: null,
    status: "coming-soon",
  },
  {
    id: "youth-connect",
    title: "YouthConnect Ministry",
    category: "Church",
    description: "A vibrant youth ministry website with devotionals, prayer requests, and community forums.",
    url: "#",
    tags: ["Youth", "Ministry", "Community"],
    image: null,
    status: "coming-soon",
  },
  {
    id: "thika-business",
    title: "Thika SME Directory",
    category: "Business",
    description: "A local business directory and listing platform for small businesses in Thika town.",
    url: "#",
    tags: ["Directory", "Business", "Local"],
    image: null,
    status: "coming-soon",
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
