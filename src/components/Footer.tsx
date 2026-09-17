import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail, MapPin, ArrowUpRight, CalendarDays } from "lucide-react";
import { WHATSAPP_URL, PHONE_DISPLAY } from "@/lib/constants";
import Brand from "@/components/Brand";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Services", href: "/services" },
    { label: "Book a Consultation", href: "/book-appointment" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Business Websites", href: "/services" },
    { label: "E-Commerce", href: "/services" },
    { label: "Church & Organisations", href: "/services" },
    { label: "Schools & Education", href: "/services" },
    { label: "Custom Web Apps", href: "/services" },
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "Knowledge Bank", href: "/knowledge-bank" },
    { label: "Start a Project", href: "/order" },
    { label: "FAQ", href: "/about#faq" },
    { label: "Case Studies", href: "/portfolio" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Brand />
            <p className="mt-4 text-muted-foreground text-sm leading-relaxed max-w-sm">NexaWeb Studio designs and develops websites and digital products for businesses, organisations and individuals in Kenya — from business websites and online stores to custom web applications.</p>
            <p className="mt-2 text-xs text-muted-foreground">Online at KenyaAdverts.co.ke</p>
            <div className="mt-6 flex flex-col gap-3">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"><MessageCircle className="h-4 w-4" />WhatsApp: {PHONE_DISPLAY}</a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground"><Phone className="h-4 w-4" />{PHONE_DISPLAY}</span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground"><Mail className="h-4 w-4" />hello@kenyaadverts.co.ke</span>
              <span className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4" />Kenya · Serving clients nationwide</span>
            </div>
            <ButtonLikeBooking />
          </div>
          {Object.entries(footerLinks).map(([title, links]) => <div key={title}><h3 className="font-display font-bold text-foreground mb-4 text-base">{title}</h3><div className="flex flex-col gap-2.5">{links.map(link => <Link key={link.label} to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 group">{link.label}<ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" /></Link>)}</div></div>)}
        </div>
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4"><p className="text-xs text-muted-foreground">© {new Date().getFullYear()} NexaWeb Studio · KenyaAdverts.co.ke. All rights reserved.</p><div className="flex gap-6 text-xs text-muted-foreground"><span>Privacy Policy</span><span>Terms of Service</span></div></div>
      </div>
    </footer>
  );
}

function ButtonLikeBooking() {
  return <Link to="/book-appointment" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"><CalendarDays className="h-4 w-4" />Book a consultation</Link>;
}
