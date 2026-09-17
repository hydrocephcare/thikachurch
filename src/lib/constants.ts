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
    category: "Marketplace",
    description: "A classifieds marketplace for buying and selling products and services online, with listings, search and mobile-first browsing.",
    url: "https://www.kenyaadverts.com",
    tags: ["Marketplace", "Classifieds", "M-Pesa", "E-Commerce"],
    image: portfolioKenyaAdvertsCom,
    status: "completed",
  },
  {
    id: "ompath-study",
    title: "Ompath Study",
    category: "Education",
    description: "A medical education platform for MBChB students with study notes, MCQs, flashcards, past papers and clinical learning resources.",
    url: "https://ompathstudy.com",
    tags: ["Education", "Medical", "MCQ Bank", "Learning Platform"],
    image: portfolioOmpath,
    status: "completed",
  },
  {
    id: "kenyaadverts-coke",
    title: "KenyaAdverts.co.ke",
    category: "Web Development",
    description: "The KenyaAdverts web studio website, showcasing website design and development services for businesses, organisations and individuals.",
    url: "https://www.kenyaadverts.co.ke",
    tags: ["Agency", "Business", "Web Design", "SEO"],
    image: portfolioKenyaAdvertsCoke,
    status: "completed",
  },
  {
    id: "mku-cu",
    title: "MKU Christian Union",
    category: "Organisation",
    description: "A community website with events, ministry information, sermon resources, live-stream links and WhatsApp engagement.",
    url: "https://mku-cu-connect.vercel.app/",
    tags: ["Organisation", "Community", "Events", "Live Streaming"],
    image: portfolioMkucu,
    status: "completed",
  },
  {
    id: "medlife-echos",
    title: "Medlife Echo's",
    category: "Education & Blog",
    description: "A medical education publication with a large library of articles covering medical school subjects and exam preparation.",
    url: "https://medlifeechos.vercel.app/",
    tags: ["Blog", "Medical", "Education", "SEO"],
    image: portfolioMedlife,
    status: "completed",
  },
  {
    id: "azani-isp",
    title: "Azani ISP Project",
    category: "Education & E-Commerce",
    description: "A project platform combining educational content, product information, ordering and WhatsApp-based customer support.",
    url: "https://www.azaniispproject.co.ke/",
    tags: ["Education", "Landing Page", "E-Commerce", "WhatsApp"],
    image: portfolioAzaniisp,
    status: "completed",
  },
  {
    id: "kcse-azani",
    title: "KCSE Resource Hub",
    category: "Education",
    description: "A dedicated educational resource platform providing KCSE study materials, guides and project support resources.",
    url: "https://kcse.azaniispproject.co.ke/",
    tags: ["Education", "KCSE", "Resources"],
    image: portfolioKcse,
    status: "completed",
  },
];

export const upcomingProjects: PortfolioProject[] = [];

export const services = [
  {
    id: "business",
    title: "Business Websites",
    description: "Professional websites for SMEs, companies, consultants, professionals and growing brands that need to look credible and generate enquiries.",
    features: ["Custom pages", "WhatsApp & enquiry forms", "Google Maps & social links", "Basic SEO setup"],
    popular: true,
  },
  {
    id: "ecommerce",
    title: "E-Commerce & Online Shops",
    description: "Sell products or services online with product catalogues, checkout flows, order management and Kenyan payment options.",
    features: ["Product catalogue", "M-Pesa integration", "Orders & inventory", "Customer notifications"],
  },
  {
    id: "church",
    title: "Church & Organisation Websites",
    description: "Modern websites for churches, ministries, NGOs, clubs and community organisations with content that is easy for visitors to find.",
    features: ["Events & announcements", "Sermon/media pages", "Giving & donation options", "Mobile-first design"],
  },
  {
    id: "education",
    title: "School & Education Platforms",
    description: "Websites and learning platforms for schools, tutors, education brands and student communities.",
    features: ["Courses & resources", "Articles & downloads", "Student-focused UX", "Search-friendly structure"],
  },
  {
    id: "custom",
    title: "Custom Web Applications",
    description: "Purpose-built systems for workflows that need more than a normal website, including dashboards, portals and management systems.",
    features: ["Custom functionality", "Admin dashboards", "Database integration", "API integrations"],
  },
  {
    id: "portfolio",
    title: "Personal & Portfolio Websites",
    description: "Clean personal websites for professionals, creatives, freelancers, job seekers and public-facing personal brands.",
    features: ["Portfolio galleries", "About & services", "Contact & WhatsApp", "Social media integration"],
  },
  {
    id: "maintenance",
    title: "Maintenance & Improvements",
    description: "Already have a website? We can improve its design, fix issues, add features, optimise performance and keep it updated.",
    features: ["Bug fixes", "Design improvements", "Performance optimisation", "Content & feature updates"],
  },
];
