import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/constants";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Church Websites", href: "/services" },
    { label: "Business Sites", href: "/services" },
    { label: "E-Commerce", href: "/services" },
    { label: "Custom Development", href: "/services" },
    { label: "Maintenance", href: "/services" },
  ],
  Resources: [
    { label: "Knowledge Bank", href: "/knowledge-bank" },
    { label: "Order Online", href: "/order" },
    { label: "FAQ", href: "/knowledge-bank#faq" },
    { label: "Case Studies", href: "/portfolio" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-2xl font-bold text-foreground">
              Omne<span className="text-primary">xus</span>
            </Link>
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-sm">
              International web development agency delivering premium, high-performance websites for businesses, churches, and organizations worldwide. Headquartered in Kenya, serving clients globally.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-4 w-4" />
                WhatsApp: {PHONE_DISPLAY}
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                hello@omnexus.co.ke
              </span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Nairobi, Kenya · Serving Worldwide
              </span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-bold text-foreground mb-4">{title}</h4>
              <div className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Omnexus. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
