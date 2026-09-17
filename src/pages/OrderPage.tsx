import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, CheckCircle2, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_NUMBER, WHATSAPP_ORDER_URL } from "@/lib/constants";
import { supabase } from "@/integrations/supabase/client";

const initialForm = { name: "", email: "", phone: "", country: "", websiteType: "", budget: "", timeline: "", requirements: "" };

export default function OrderPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(initialForm);
  const set = (key: keyof typeof initialForm, value: string) => setForm(prev => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.websiteType) {
      toast({ title: "A few details are missing", description: "Please add your name, WhatsApp/phone and project type.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("order_requests").insert({
        name: form.name.trim().slice(0, 100), email: form.email.trim().slice(0, 100) || null, phone: form.phone.trim().slice(0, 20), country: form.country.trim().slice(0, 50) || null,
        website_type: form.websiteType, budget: form.budget || null, timeline: form.timeline || null, requirements: form.requirements.trim().slice(0, 1000) || null,
      });
      if (error) throw error;
      toast({ title: "Request received", description: "Thanks! We'll review your project and get back to you." });
      setForm(initialForm);
    } catch {
      const lines = ["Hi! I'd like to discuss a website project.", "", `Name: ${form.name.trim().slice(0, 100)}`, `Phone: ${form.phone.trim().slice(0, 20)}`, form.email && `Email: ${form.email.trim().slice(0, 100)}`, form.country && `Country: ${form.country.trim().slice(0, 50)}`, `Project: ${form.websiteType}`, form.budget && `Budget: ${form.budget}`, form.timeline && `Timeline: ${form.timeline}`, form.requirements && `Requirements: ${form.requirements.trim().slice(0, 1000)}`].filter(Boolean).join("\n");
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`, "_blank");
      toast({ title: "Opening WhatsApp", description: "You can complete the enquiry directly in WhatsApp." });
    } finally { setLoading(false); }
  };

  return (
    <>
      <section className="pt-32 pb-14 bg-muted/20">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <Link to="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> Back home</Link>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mt-8 max-w-3xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Start a project</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-display font-extrabold">Tell us what you want to <span className="text-gradient-primary">build.</span></h1>
            <p className="mt-5 text-lg text-muted-foreground">Business website, online shop, church, school, portfolio or custom web application — give us the basics and we'll help shape the project.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border border-border space-y-6 shadow-sm">
            <div><h2 className="text-xl font-display font-bold">Project enquiry</h2><p className="mt-1 text-sm text-muted-foreground">Fields marked * help us respond with a useful quote.</p></div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className="text-sm font-medium mb-2 block">Name *</label><Input required placeholder="Your name" value={form.name} onChange={e => set("name", e.target.value)} maxLength={100} /></div>
              <div><label className="text-sm font-medium mb-2 block">WhatsApp / Phone *</label><Input required placeholder="+254 7XX XXX XXX" value={form.phone} onChange={e => set("phone", e.target.value)} maxLength={20} /></div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className="text-sm font-medium mb-2 block">Email</label><Input type="email" placeholder="you@example.com" value={form.email} onChange={e => set("email", e.target.value)} maxLength={100} /></div>
              <div><label className="text-sm font-medium mb-2 block">Country</label><Input placeholder="Kenya" value={form.country} onChange={e => set("country", e.target.value)} maxLength={50} /></div>
            </div>
            <div><label className="text-sm font-medium mb-2 block">What are you building? *</label><Select value={form.websiteType} onValueChange={v => set("websiteType", v)}><SelectTrigger><SelectValue placeholder="Choose a project type" /></SelectTrigger><SelectContent><SelectItem value="Business Website">Business Website</SelectItem><SelectItem value="E-Commerce">E-Commerce / Online Shop</SelectItem><SelectItem value="Church or Organisation">Church / Organisation</SelectItem><SelectItem value="School or Education">School / Education</SelectItem><SelectItem value="Portfolio or Personal Brand">Portfolio / Personal Brand</SelectItem><SelectItem value="Custom Web Application">Custom Web Application / System</SelectItem><SelectItem value="Marketplace">Marketplace / Classifieds Platform</SelectItem><SelectItem value="Landing Page">Landing Page</SelectItem><SelectItem value="Website Improvement">Improve an Existing Website</SelectItem><SelectItem value="Other">Other</SelectItem></SelectContent></Select></div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div><label className="text-sm font-medium mb-2 block">Budget</label><Select value={form.budget} onValueChange={v => set("budget", v)}><SelectTrigger><SelectValue placeholder="Choose a range" /></SelectTrigger><SelectContent><SelectItem value="Under KES 10,000">Under KES 10,000</SelectItem><SelectItem value="KES 10,000 - 25,000">KES 10,000 – 25,000</SelectItem><SelectItem value="KES 25,000 - 50,000">KES 25,000 – 50,000</SelectItem><SelectItem value="KES 50,000 - 100,000">KES 50,000 – 100,000</SelectItem><SelectItem value="KES 100,000+">KES 100,000+</SelectItem><SelectItem value="Not sure">Not sure — advise me</SelectItem></SelectContent></Select></div>
              <div><label className="text-sm font-medium mb-2 block">When do you need it?</label><Select value={form.timeline} onValueChange={v => set("timeline", v)}><SelectTrigger><SelectValue placeholder="Choose timeline" /></SelectTrigger><SelectContent><SelectItem value="ASAP">ASAP</SelectItem><SelectItem value="1-2 weeks">1–2 weeks</SelectItem><SelectItem value="2-4 weeks">2–4 weeks</SelectItem><SelectItem value="1-2 months">1–2 months</SelectItem><SelectItem value="Flexible">Flexible</SelectItem></SelectContent></Select></div>
            </div>
            <div><label className="text-sm font-medium mb-2 block">Tell us about the project</label><Textarea placeholder="What does the website need to do? Do you already have a domain, logo, content, products or a reference website?" value={form.requirements} onChange={e => set("requirements", e.target.value)} rows={6} maxLength={1000} /></div>
            <Button type="submit" size="lg" disabled={loading} className="w-full bg-gradient-primary text-primary-foreground h-12"><Send className="mr-2 h-4 w-4" />{loading ? "Sending..." : "Send Project Enquiry"}</Button>
            <p className="text-xs text-center text-muted-foreground">We use your details only to respond to your project enquiry.</p>
          </form>

          <aside className="space-y-4 lg:sticky lg:top-24">
            <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5"><h3 className="font-display font-bold text-lg">Prefer WhatsApp?</h3><p className="mt-2 text-sm text-muted-foreground">Send the same project details directly and start a conversation.</p><Button asChild className="mt-5 w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"><a href={WHATSAPP_ORDER_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />Chat on WhatsApp</a></Button></div>
            <div className="p-6 rounded-2xl border border-border bg-card"><h3 className="font-display font-bold">What happens next?</h3><div className="mt-4 space-y-4">{["We review your requirements", "We clarify the scope and features", "You receive a clear quote", "We agree on the next step"].map((item, i) => <div key={item} className="flex gap-3 text-sm"><span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span><span className="text-muted-foreground">{item}</span></div>)}</div></div>
            <div className="p-6 rounded-2xl border border-border bg-card"><h3 className="font-display font-bold">Typical starting points</h3><div className="mt-4 space-y-3 text-sm"><div className="flex justify-between"><span className="text-muted-foreground">Starter site</span><span className="font-semibold">From KES 5K</span></div><div className="flex justify-between"><span className="text-muted-foreground">Business site</span><span className="font-semibold">From KES 15K</span></div><div className="flex justify-between"><span className="text-muted-foreground">E-commerce / apps</span><span className="font-semibold">Custom quote</span></div></div></div>
            <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">{["Mobile-first", "SEO-ready", "M-Pesa options", "Direct support"].map(x => <span key={x} className="flex items-center gap-1"><CheckCircle2 className="h-3.5 w-3.5 text-primary" />{x}</span>)}</div>
          </aside>
        </div>
      </section>
    </>
  );
}
