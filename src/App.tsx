import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/Layout";
import NotFound from "./pages/NotFound";

// Route-level code splitting: each page becomes its own chunk, fetched only
// when that route is actually visited, instead of all ~40 pages shipping in
// one ~1.2MB initial bundle. Cuts the JS a first-time visitor has to
// download before the page they actually asked for can render.
const HomePage = lazy(() => import("@/pages/HomePage"));
const PortfolioPage = lazy(() => import("@/pages/PortfolioPage"));
const ServicesPage = lazy(() => import("@/pages/ServicesPage"));
const KnowledgeBankPage = lazy(() => import("@/pages/KnowledgeBankPage"));
const BlogPage = lazy(() => import("@/pages/BlogPage"));
const BlogPostPage = lazy(() => import("@/pages/BlogPostPage"));
const OrderPage = lazy(() => import("@/pages/OrderPage"));
const BookAppointmentPage = lazy(() => import("@/pages/BookAppointmentPage"));
const AdminPage = lazy(() => import("@/pages/AdminPage"));
const AdminAppointmentsPage = lazy(() => import("@/pages/AdminAppointmentsPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const ContactPage = lazy(() => import("@/pages/ContactPage"));
const FaqPage = lazy(() => import("@/pages/FaqPage"));
const PricingPage = lazy(() => import("@/pages/PricingPage"));
const SeoLandingPage = lazy(() => import("@/pages/SeoLandingPage"));
const GlobalSeoLandingPage = lazy(() => import("@/pages/GlobalSeoLandingPage"));
const CityLandingPage = lazy(() => import("@/pages/CityLandingPage"));

function RouteFallback() {
  // Deliberately minimal and matched to the page background so a fast
  // chunk load never shows a visible flash - this is a safety net for
  // slow connections, not a branded loading screen.
  return <div className="min-h-[60vh] bg-background" aria-hidden="true" />;
}

const queryClient = new QueryClient();
const routerBasename = import.meta.env.BASE_URL === "/"
  ? undefined
  : import.meta.env.BASE_URL.replace(/\/$/, "");

const seoSlugs = [
  "business-website-design-kenya", "ecommerce-website-design-kenya", "online-store-development-kenya", "blog-website-design-kenya", "news-website-development-kenya", "video-streaming-website-kenya", "youtube-like-website-development", "netflix-like-streaming-platform", "marketplace-website-development-kenya", "school-website-design-kenya", "custom-web-application-development-kenya",
];

const globalSeoSlugs = [
  "website-design-worldwide", "affordable-website-design", "business-website-design-worldwide", "ecommerce-website-development-worldwide", "custom-web-application-development", "python-web-development", "react-web-development", "wordpress-alternative-custom-websites", "seo-website-development", "website-maintenance-support-worldwide", "website-redesign-worldwide", "landing-page-design-worldwide", "portfolio-website-design-worldwide", "school-website-development-worldwide", "marketplace-development-worldwide", "blog-website-development-worldwide", "web-design-for-startups",
];

const citySlugs = [
  "web-design-nairobi", "web-design-mombasa", "web-design-kisumu", "web-design-eldoret", "web-design-nakuru",
];

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter basename={routerBasename}>
          <Suspense fallback={<RouteFallback />}>
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
                <Route path="/faq" element={<FaqPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                {seoSlugs.map((slug) => <Route key={slug} path={`/${slug}`} element={<SeoLandingPage />} />)}
                {globalSeoSlugs.map((slug) => <Route key={slug} path={`/${slug}`} element={<GlobalSeoLandingPage />} />)}
                {citySlugs.map((slug) => <Route key={slug} path={`/${slug}`} element={<CityLandingPage />} />)}
              </Route>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/appointments" element={<AdminAppointmentsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
