import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/Layout";
import HomePage from "@/pages/HomePage";
import PortfolioPage from "@/pages/PortfolioPage";
import ServicesPage from "@/pages/ServicesPage";
import KnowledgeBankPage from "@/pages/KnowledgeBankPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import OrderPage from "@/pages/OrderPage";
import BookAppointmentPage from "@/pages/BookAppointmentPage";
import AdminPage from "@/pages/AdminPage";
import AdminAppointmentsPage from "@/pages/AdminAppointmentsPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import SeoLandingPage from "@/pages/SeoLandingPage";
import GlobalSeoLandingPage from "@/pages/GlobalSeoLandingPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const seoSlugs = [
  "business-website-design-kenya", "ecommerce-website-design-kenya", "online-store-development-kenya", "blog-website-design-kenya", "news-website-development-kenya", "video-streaming-website-kenya", "youtube-like-website-development", "netflix-like-streaming-platform", "marketplace-website-development-kenya", "school-website-design-kenya", "custom-web-application-development-kenya",
];

const globalSeoSlugs = [
  "website-design-worldwide", "affordable-website-design", "business-website-design-worldwide", "ecommerce-website-development-worldwide", "custom-web-application-development", "python-web-development", "react-web-development", "wordpress-alternative-custom-websites", "seo-website-development", "website-maintenance-support-worldwide", "website-redesign-worldwide", "landing-page-design-worldwide", "portfolio-website-design-worldwide", "school-website-development-worldwide", "marketplace-development-worldwide", "blog-website-development-worldwide", "web-design-for-startups",
];

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/knowledge-bank" element={<KnowledgeBankPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/order" element={<OrderPage />} />
              <Route path="/book-appointment" element={<BookAppointmentPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {seoSlugs.map((slug) => <Route key={slug} path={`/${slug}`} element={<SeoLandingPage />} />)}
              {globalSeoSlugs.map((slug) => <Route key={slug} path={`/${slug}`} element={<GlobalSeoLandingPage />} />)}
            </Route>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/appointments" element={<AdminAppointmentsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
