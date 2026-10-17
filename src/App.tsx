import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "@/components/Layout";
import NotFound from "./pages/NotFound";
import HomePage from "@/pages/HomePage";
import PortfolioPage from "@/pages/PortfolioPage";
import ServicesPage from "@/pages/ServicesPage";
import KnowledgeBankPage from "@/pages/KnowledgeBankPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import OrderPage from "@/pages/OrderPage";
import AboutPage from "@/pages/AboutPage";
import ContactPage from "@/pages/ContactPage";
import FaqPage from "@/pages/FaqPage";
import PricingPage from "@/pages/PricingPage";
import SeoLandingPage from "@/pages/SeoLandingPage";
import GlobalSeoLandingPage from "@/pages/GlobalSeoLandingPage";
import CityLandingPage from "@/pages/CityLandingPage";

// Lazy-load ONLY pages that are not publicly indexed: /admin* is blocked by
// robots.txt, and /book-appointment is gated behind a Google sign-in wall -
// none of these need to render instantly for a crawler. Every other route
// above is public, content-bearing and meant to be indexed, so it stays in
// the main bundle: an earlier attempt to lazy-load everything was reverted
// after discovering it creates a real timing race (confirmed via headless
// testing - a plain page snapshot caught the Suspense fallback, i.e. blank
// content, before the chunk finished loading). Given how much effort went
// into fixing this site's crawlability, no new crawl-timing risk is worth
// it for SEO-facing pages. BookAppointmentPage alone also pulls in the
// ~330KB Firebase client SDK, so keeping it lazy is the one clearly
// worthwhile tradeoff here.
const BookAppointmentPage = lazy(() => import("@/pages/BookAppointmentPage"));
const AdminPage = lazy(() => import("@/pages/AdminPage"));
const AdminAppointmentsPage = lazy(() => import("@/pages/AdminAppointmentsPage"));

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
