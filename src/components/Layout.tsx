import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RouteSeo from "@/components/RouteSeo";
import StartingPriceBanner from "@/components/StartingPriceBanner";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <ScrollToTop />
      <RouteSeo />
      <Navbar />
      <StartingPriceBanner />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
