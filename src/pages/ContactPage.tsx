import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { WHATSAPP_URL, WHATSAPP_NUMBER, PHONE_DISPLAY } from "@/lib/constants";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { fadeUp } from "@/lib/animations";

const contactMethods = [
  { icon: MessageCircle, title: "WhatsApp", value: PHONE_DISPLAY, description: "Fastest way to reach us", link: WHATSAPP_URL },
  { icon: Phone, title: "Phone", value: PHONE_DISPLAY, description: "Available during business hours" },
  { icon: Mail, title: "Email", value: "hello@omnexus.co.ke", description: "We reply within 24 hours" },
  { icon: MapPin, title: "Location", value: "Nairobi, Kenya", description: "Serving clients worldwide" },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      toast({ title: "Please fill required fields", variant: "destructive" });
      return;
    }

    const lines = [
      `Contact from: ${form.name.trim().slice(0, 100)}`,
      form.email ? `Email: ${form.email.trim().slice(0, 100)}` : "",
      form.subject ? `Subject: ${form.subject.trim().slice(0, 100)}` : "",
      "",
      form.message.trim().slice(0, 500),
    ].filter(Boolean).join("\n");

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`, "_blank");
    toast({ title: "Opening WhatsApp!", description: "Send us your message there." });
  };

  return (
    <>
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Contact</span>
            <h1 className="mt-4 text-5xl md:text-7xl font-display font-extrabold">
              Let's <span className="text-gradient-primary">Talk</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question, a project idea, or just want to say hello? We're always happy to hear from you. Reach out through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, i) => (
              <motion.div
                key={method.title}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-card border border-border text-center hover:border-primary/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-display font-bold">{method.title}</h3>
                {method.link ? (
                  <a href={method.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline block mt-1">
                    {method.value}
                  </a>
                ) : (
                  <p className="text-sm text-foreground mt-1">{method.value}</p>
                )}
                <p className="text-xs text-muted-foreground mt-1">{method.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact form */}
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-display font-extrabold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">Fill out the form and we'll get back to you within 24 hours.</p>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name *</label>
                    <Input placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="bg-muted border-border" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="you@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={100} className="bg-muted border-border" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="What's this about?" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} maxLength={100} className="bg-muted border-border" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Message *</label>
                  <Textarea placeholder="Tell us about your project or question..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} maxLength={500} className="bg-muted border-border" />
                </div>
                <Button type="submit" size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 w-full h-12">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h2 className="text-3xl font-display font-extrabold mb-4">Business Hours</h2>
              <div className="bg-card rounded-2xl border border-border p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Monday - Friday</p>
                    <p className="text-sm text-muted-foreground">8:00 AM - 8:00 PM (EAT)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Saturday</p>
                    <p className="text-sm text-muted-foreground">9:00 AM - 5:00 PM (EAT)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium text-muted-foreground">Sunday</p>
                    <p className="text-sm text-muted-foreground">WhatsApp only for emergencies</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 rounded-2xl bg-primary/5 border border-primary/20">
                <h3 className="font-display font-bold text-lg mb-2">Prefer WhatsApp?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Most of our clients prefer chatting on WhatsApp for quick responses. Tap below to start a conversation instantly.
                </p>
                <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90 w-full">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
