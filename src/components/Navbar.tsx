import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, CalendarDays, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { WHATSAPP_URL } from "@/lib/constants";
import Brand from "@/components/Brand";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return document.documentElement.classList.contains("dark");
  });
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setOpen(false), [location]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  const toggleDarkMode = () => setDark(current => !current);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? "glass-strong shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <Brand compact />
        <div className="hidden lg:flex items-center gap-0.5">
          {navLinks.map(link => <Link key={link.href} to={link.href} className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${location.pathname === link.href ? "text-primary bg-primary/8" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>{link.label}</Link>)}
        </div>
        <div className="hidden lg:flex items-center gap-2">
          <button onClick={toggleDarkMode} className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border text-foreground hover:bg-muted transition-colors" aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} title={dark ? "Light mode" : "Dark mode"}>
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground h-9 text-xs"><Link to="/book-appointment"><CalendarDays className="mr-1.5 h-3.5 w-3.5" />Book a Consultation</Link></Button>
          <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90 h-9 text-xs"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-1.5 h-3.5 w-3.5" />WhatsApp</a></Button>
        </div>
        <div className="lg:hidden flex items-center gap-1">
          <button onClick={toggleDarkMode} className="text-foreground p-2 rounded-md hover:bg-muted transition-colors" aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} title={dark ? "Light mode" : "Dark mode"}>
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="text-foreground p-2" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.15 }} className="lg:hidden overflow-hidden glass-strong">
          <div className="flex flex-col gap-0.5 p-3">
            {navLinks.map(link => <Link key={link.href} to={link.href} className={`px-3 py-2.5 text-sm font-medium rounded-md ${location.pathname === link.href ? "text-primary bg-primary/8" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>{link.label}</Link>)}
            <div className="flex gap-2 mt-2">
              <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground flex-1 h-9"><Link to="/book-appointment"><CalendarDays className="mr-1.5 h-3.5 w-3.5" />Book Consultation</Link></Button>
              <Button asChild size="sm" variant="outline" className="border-primary text-primary flex-1 h-9"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-1.5 h-3.5 w-3.5" />WhatsApp</a></Button>
            </div>
          </div>
        </motion.div>}
      </AnimatePresence>
    </nav>
  );
}
