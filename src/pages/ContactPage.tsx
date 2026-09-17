import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WHATSAPP_URL, WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactMethods = [
  { icon: MessageCircle, title: "WhatsApp", value: PHONE_DISPLAY, description: "Quickest way to discuss a project", link: WHATSAPP_URL },
  { icon: Phone, title: "Phone", value: PHONE_DISPLAY, description: "Call to discuss your requirements" },
  { icon: Mail, title: "Email", value: "hello@kenyaadverts.co.ke", description: "For project and general enquiries" },
  { icon: MapPin, title: "Based in Kenya", value: "Serving clients nationwide", description: "Remote projects welcome" },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) { toast({ title: "Please add your name and message", variant: "destructive" }); return; }
    setLoading(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({ name: form.name.trim().slice(0, 100), email: form.email.trim().slice(0, 100) || null, subject: form.subject.trim().slice(0, 100) || null, message: form.message.trim().slice(0, 1000) });
      if (error) throw error;
      toast({ title: "Message received", description: "We'll get back to you soon." }); setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      const text = [`Hello, I'd like to make an enquiry.`, `Name: ${form.name.trim().slice(0, 100)}`, form.email && `Email: ${form.email.trim().slice(0, 100)}`, form.subject && `Subject: ${form.subject.trim().slice(0, 100)}`, `Message: ${form.message.trim().slice(0, 1000)}`].filter(Boolean).join("\n");
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
      toast({ title: "Opening WhatsApp", description: "You can send the enquiry there." });
    } finally { setLoading(false); }
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-muted/20"><div className="container mx-auto px-4 lg:px-8"><div className="max-w-3xl"><span className="text-sm font-semibold text-primary uppercase tracking-widest">Contact KenyaAdverts</span><h1 className="mt-3 text-4xl md:text-6xl font-display font-extrabold">Let's talk about your <span className="text-gradient-primary">website.</span></h1><p className="mt-5 text-lg text-muted-foreground">Have a new idea, an existing website that needs improvement, or a business ready to move online? Tell us what you need.</p><div className="mt-7"><Button asChild className="bg-gradient-primary"><Link to="/order">Start a project <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></div></div></section>

      <section className="py-16"><div className="container mx-auto px-4 lg:px-8"><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{contactMethods.map(method => <div key={method.title} className="p-6 rounded-2xl bg-card border border-border"><div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center"><method.icon className="h-5 w-5 text-primary" /></div><h3 className="mt-4 font-display font-bold">{method.title}</h3>{method.link ? <a href={method.link} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-primary hover:underline">{method.value}</a> : <p className="mt-1 text-sm">{method.value}</p>}<p className="mt-1 text-xs text-muted-foreground">{method.description}</p></div>)}</div></div></section>

      <section className="pb-24"><div className="container mx-auto px-4 lg:px-8 max-w-5xl grid lg:grid-cols-2 gap-12"><div><span className="text-sm font-semibold text-primary uppercase tracking-widest">Send a message</span><h2 className="mt-3 text-3xl md:text-4xl font-display font-extrabold">Tell us what's on your mind.</h2><p className="mt-3 text-muted-foreground">For a detailed project quote, use our project form. For a quick question, use this contact form or WhatsApp.</p><form onSubmit={handleSubmit} className="mt-8 space-y-5"><div className="grid sm:grid-cols-2 gap-4"><div><label className="text-sm font-medium mb-2 block">Name *</label><Input required placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} maxLength={100} /></div><div><label className="text-sm font-medium mb-2 block">Email</label><Input type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} maxLength={100} /></div></div><div><label className="text-sm font-medium mb-2 block">Subject</label><Input placeholder="Website enquiry" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} maxLength={100} /></div><div><label className="text-sm font-medium mb-2 block">Message *</label><Textarea required placeholder="Tell us what you need..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} rows={6} maxLength={1000} /></div><Button type="submit" size="lg" disabled={loading} className="w-full bg-gradient-primary"> <Send className="mr-2 h-4 w-4" />{loading ? "Sending..." : "Send Message"}</Button></form></div>

      <div className="space-y-5"><div className="p-7 rounded-2xl bg-primary/5 border border-primary/20"><h3 className="text-xl font-display font-bold">Want a quote?</h3><p className="mt-2 text-sm text-muted-foreground">Give us your project type, budget, timeline and requirements. It helps us give you a more useful response.</p><Button asChild className="mt-5 w-full bg-gradient-primary"><Link to="/order">Request a quote <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div><div className="p-7 rounded-2xl border border-border bg-card"><h3 className="font-display font-bold">Or start on WhatsApp</h3><p className="mt-2 text-sm text-muted-foreground">If you prefer a conversation, message us directly.</p><Button asChild className="mt-5 w-full bg-[#25D366] hover:bg-[#25D366]/90 text-white"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />Chat on WhatsApp</a></Button></div><div className="p-7 rounded-2xl border border-border bg-card"><h3 className="font-display font-bold">What you can expect</h3><div className="mt-4 space-y-3">{["Clear project discussion", "Scope before development", "Mobile-first design", "Direct communication"].map(item => <div key={item} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" />{item}</div>)}</div></div></div></div></section>
    </>
  );
}
