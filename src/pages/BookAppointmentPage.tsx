import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock3, Mail, Phone, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { supabase } from "@/integrations/supabase/client";

const initialForm = { name: "", email: "", phone: "", business: "", projectType: "", date: "", time: "", message: "" };

export default function BookAppointmentPage() {
  const { toast } = useToast();
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const set = (key: keyof typeof initialForm, value: string) => setForm(prev => ({ ...prev, [key]: value }));
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.projectType || !form.date || !form.time) {
      toast({ title: "Please complete the required fields", description: "Name, email, phone, project type, date and time are required.", variant: "destructive" });
      return;
    }
    setLoading(true);
    try {
      const { error } = await supabase.from("appointment_requests").insert({
        name: form.name.trim().slice(0, 100), email: form.email.trim().slice(0, 120), phone: form.phone.trim().slice(0, 30),
        business: form.business.trim().slice(0, 120) || null, project_type: form.projectType, preferred_date: form.date,
        preferred_time: form.time, message: form.message.trim().slice(0, 1000) || null,
      });
      if (error) throw error;
      setSubmitted(true);
      setForm(initialForm);
      toast({ title: "Appointment request received", description: "We'll confirm the selected slot with you by email or phone." });
    } catch {
      const text = [
        "Hi! I'd like to book a website consultation.", "", `Name: ${form.name}`, `Email: ${form.email}`, `Phone: ${form.phone}`,
        form.business && `Business/Organisation: ${form.business}`, `Project: ${form.projectType}`, `Preferred date: ${form.date}`, `Preferred time: ${form.time}`, form.message && `Message: ${form.message}`,
      ].filter(Boolean).join("\n");
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
      toast({ title: "Opening WhatsApp", description: "The appointment details have been prepared for you." });
    } finally { setLoading(false); }
  };

  if (submitted) {
    return <section className="pt-32 pb-24"><div className="container mx-auto px-4 max-w-2xl"><div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-12 text-center"><CheckCircle2 className="mx-auto h-14 w-14 text-primary" /><h1 className="mt-6 text-3xl md:text-4xl font-display font-extrabold">Request received.</h1><p className="mt-4 text-muted-foreground leading-relaxed">Thanks for choosing a consultation time. We'll contact you using the email or phone number you provided to confirm the appointment.</p><Button onClick={() => setSubmitted(false)} className="mt-7 bg-gradient-primary">Book another time</Button></div></div></section>;
  }

  return <>
    <section className="pt-32 pb-14 bg-muted/20">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">Book a consultation</span>
        <motion.h1 initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-4xl md:text-6xl font-display font-extrabold">Let's discuss your <span className="text-gradient-primary">website.</span></motion.h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">Choose a date and time that works for you. Tell us what you want to build, and we'll use the consultation to understand your goals, features and next steps.</p>
      </div>
    </section>

    <section className="py-16 pb-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl grid lg:grid-cols-[1fr_320px] gap-8 items-start">
        <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm space-y-6">
          <div><h2 className="text-xl font-display font-bold">Your details</h2><p className="mt-1 text-sm text-muted-foreground">We'll use these details to confirm your appointment.</p></div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="text-sm font-medium mb-2 block">Full name *</label><Input required value={form.name} onChange={e => set("name", e.target.value)} placeholder="Your name" maxLength={100} /></div>
            <div><label className="text-sm font-medium mb-2 block">Email *</label><Input required type="email" value={form.email} onChange={e => set("email", e.target.value)} placeholder="you@example.com" maxLength={120} /></div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="text-sm font-medium mb-2 block">Phone / WhatsApp *</label><Input required value={form.phone} onChange={e => set("phone", e.target.value)} placeholder="+254 7XX XXX XXX" maxLength={30} /></div>
            <div><label className="text-sm font-medium mb-2 block">Business / Organisation</label><Input value={form.business} onChange={e => set("business", e.target.value)} placeholder="Business name (optional)" maxLength={120} /></div>
          </div>
          <div><label className="text-sm font-medium mb-2 block">What are you looking to build? *</label><Select value={form.projectType} onValueChange={v => set("projectType", v)}><SelectTrigger><SelectValue placeholder="Choose a project type" /></SelectTrigger><SelectContent><SelectItem value="Business website">Business website</SelectItem><SelectItem value="E-commerce / online shop">E-commerce / online shop</SelectItem><SelectItem value="School / education platform">School / education platform</SelectItem><SelectItem value="Church / organisation website">Church / organisation website</SelectItem><SelectItem value="Portfolio / personal brand">Portfolio / personal brand</SelectItem><SelectItem value="Custom web application">Custom web application</SelectItem><SelectItem value="Marketplace / classifieds">Marketplace / classifieds</SelectItem><SelectItem value="Website redesign">Website redesign / improvement</SelectItem><SelectItem value="Other">Other</SelectItem></SelectContent></Select></div>
          <div><h2 className="text-xl font-display font-bold">Choose a time</h2><p className="mt-1 text-sm text-muted-foreground">Appointments are in East Africa Time (EAT, UTC+3). Your request is confirmed after we review the slot.</p></div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div><label className="text-sm font-medium mb-2 block"><CalendarDays className="inline h-4 w-4 mr-1" />Preferred date *</label><Input required type="date" min={today} value={form.date} onChange={e => set("date", e.target.value)} /></div>
            <div><label className="text-sm font-medium mb-2 block"><Clock3 className="inline h-4 w-4 mr-1" />Preferred time *</label><Select value={form.time} onValueChange={v => set("time", v)}><SelectTrigger><SelectValue placeholder="Select a time" /></SelectTrigger><SelectContent>{["09:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00"].map(time => <SelectItem key={time} value={time}>{time} EAT</SelectItem>)}</SelectContent></Select></div>
          </div>
          <div><label className="text-sm font-medium mb-2 block">What would you like to discuss?</label><Textarea value={form.message} onChange={e => set("message", e.target.value)} placeholder="Tell us briefly about your website, current site, desired features, or any questions." rows={5} maxLength={1000} /></div>
          <Button type="submit" size="lg" disabled={loading} className="w-full h-12 bg-gradient-primary text-primary-foreground"><Send className="mr-2 h-4 w-4" />{loading ? "Submitting..." : "Request Appointment"}</Button>
          <p className="text-xs text-center text-muted-foreground">Your email and phone number are used to contact you about this appointment request.</p>
        </form>

        <aside className="space-y-4 lg:sticky lg:top-24">
          <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5"><h3 className="font-display font-bold text-lg">What happens next?</h3><div className="mt-4 space-y-4">{["Choose your preferred date and time", "Tell us what you want to build", "We review and confirm the slot", "We discuss your project and next steps"].map((item, i) => <div key={item} className="flex gap-3 text-sm"><span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold shrink-0">{i + 1}</span><span className="text-muted-foreground">{item}</span></div>)}</div></div>
          <div className="p-6 rounded-2xl border border-border bg-card space-y-3"><div className="flex items-center gap-2 text-sm"><Mail className="h-4 w-4 text-primary" />Email confirmation</div><div className="flex items-center gap-2 text-sm"><Phone className="h-4 w-4 text-primary" />Phone / WhatsApp follow-up</div><div className="flex items-center gap-2 text-sm"><CalendarDays className="h-4 w-4 text-primary" />Calendar-based booking request</div></div>
          <Button asChild variant="outline" className="w-full"><a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to discuss a website project and book a consultation.")}`} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />Prefer WhatsApp?</a></Button>
        </aside>
      </div>
    </section>
  </>;
}
