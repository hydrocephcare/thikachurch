import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_NUMBER, WHATSAPP_ORDER_URL } from "@/lib/constants";

export default function OrderPage() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    websiteType: "",
    budget: "",
    timeline: "",
    requirements: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim() || !form.websiteType) {
      toast({ title: "Please fill required fields", description: "Name, phone, and website type are required.", variant: "destructive" });
      return;
    }

    const lines = [
      "Hello! I'd like to order a website.",
      "",
      `Name: ${form.name.trim().slice(0, 100)}`,
      `Phone: ${form.phone.trim().slice(0, 20)}`,
      form.email ? `Email: ${form.email.trim().slice(0, 100)}` : "",
      form.country ? `Country: ${form.country.trim().slice(0, 50)}` : "",
      `Type: ${form.websiteType}`,
      form.budget ? `Budget: ${form.budget}` : "",
      form.timeline ? `Timeline: ${form.timeline}` : "",
      form.requirements ? `Details: ${form.requirements.trim().slice(0, 500)}` : "",
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`, "_blank");
    toast({ title: "Opening WhatsApp!", description: "Complete your order in WhatsApp chat." });
  };

  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Order Online</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-display font-extrabold">
              Start Your <span className="text-gradient-primary">Project</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within 24 hours with a custom proposal. Or skip the form and chat directly on WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 border border-border space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Full Name *</label>
                  <Input placeholder="Your full name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="bg-muted border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Phone / WhatsApp *</label>
                  <Input placeholder="+254 7XX XXX XXX" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={20} className="bg-muted border-border" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input type="email" placeholder="you@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={100} className="bg-muted border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Country</label>
                  <Input placeholder="e.g. Kenya, Nigeria, UK" value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} maxLength={50} className="bg-muted border-border" />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Website Type *</label>
                <Select onValueChange={(val) => setForm({ ...form, websiteType: val })}>
                  <SelectTrigger className="bg-muted border-border">
                    <SelectValue placeholder="Select website type..." />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="Church Website">Church / Community Website</SelectItem>
                    <SelectItem value="Business Website">Business / Corporate Website</SelectItem>
                    <SelectItem value="E-Commerce">E-Commerce / Online Store</SelectItem>
                    <SelectItem value="Portfolio / Personal">Portfolio / Personal Brand</SelectItem>
                    <SelectItem value="Web Application">Custom Web Application</SelectItem>
                    <SelectItem value="Landing Page">Landing Page</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Budget Range</label>
                  <Select onValueChange={(val) => setForm({ ...form, budget: val })}>
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="Select budget..." />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="Under KES 15,000">Under KES 15,000 (~$115)</SelectItem>
                      <SelectItem value="KES 15,000 - 35,000">KES 15,000 - 35,000 ($115-$270)</SelectItem>
                      <SelectItem value="KES 35,000 - 75,000">KES 35,000 - 75,000 ($270-$580)</SelectItem>
                      <SelectItem value="KES 75,000+">KES 75,000+ ($580+)</SelectItem>
                      <SelectItem value="Flexible">Flexible / Need Guidance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Timeline</label>
                  <Select onValueChange={(val) => setForm({ ...form, timeline: val })}>
                    <SelectTrigger className="bg-muted border-border">
                      <SelectValue placeholder="When do you need it?" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="ASAP (1-3 days)">ASAP (1-3 days)</SelectItem>
                      <SelectItem value="1-2 weeks">1-2 weeks</SelectItem>
                      <SelectItem value="1 month">About 1 month</SelectItem>
                      <SelectItem value="No rush">No rush</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Project Details & Requirements</label>
                <Textarea
                  placeholder="Tell us about your project — what features do you need, any reference sites you like, specific design preferences, etc."
                  value={form.requirements}
                  onChange={(e) => setForm({ ...form, requirements: e.target.value })}
                  rows={5}
                  maxLength={500}
                  className="bg-muted border-border"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 flex-1 h-12">
                  <Send className="mr-2 h-4 w-4" />
                  Submit via WhatsApp
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground flex-1 h-12">
                  <a href={WHATSAPP_ORDER_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat Directly
                  </a>
                </Button>
              </div>
            </form>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              {["Free consultation", "No commitment", "Reply within 24hrs", "Flexible payments"].map(t => (
                <span key={t} className="flex items-center gap-1"><CheckCircle2 className="h-4 w-4 text-primary" />{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
