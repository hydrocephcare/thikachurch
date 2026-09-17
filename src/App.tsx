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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

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
