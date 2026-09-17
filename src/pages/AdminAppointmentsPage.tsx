import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Check, Clock3, LogIn, LogOut, Mail, MessageCircle, RefreshCw, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { WHATSAPP_NUMBER } from "@/lib/constants";

const statuses = ["all", "pending", "confirmed", "completed", "declined", "cancelled"];
const statusStyles: Record<string, "default" | "secondary" | "destructive" | "outline"> = { pending: "secondary", confirmed: "default", completed: "outline", declined: "destructive", cancelled: "destructive" };

type Appointment = {
  id: string; name: string; email: string; phone: string; business: string | null; project_type: string;
  preferred_date: string; preferred_time: string; message: string | null; status: string; created_at: string;
};

export default function AdminAppointmentsPage() {
  const [session, setSession] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [filter, setFilter] = useState("pending");
  const [search, setSearch] = useState("");

  const checkAccess = async () => {
    setChecking(true);
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
    if (data.session) {
      const { data: admin } = await (supabase as any).from("admin_users").select("user_id").eq("user_id", data.session.user.id).maybeSingle();
      setIsAdmin(Boolean(admin));
      if (admin) await loadAppointments();
    } else setIsAdmin(false);
    setChecking(false);
  };

  const loadAppointments = async () => {
    setLoading(true);
    const { data, error } = await (supabase as any).from("appointment_requests").select("*").order("preferred_date", { ascending: true }).order("preferred_time", { ascending: true });
    if (!error) setAppointments((data || []) as Appointment[]);
    setLoading(false);
  };

  useEffect(() => {
    checkAccess();
    const { data } = supabase.auth.onAuthStateChange(() => checkAccess());
    return () => data.subscription.unsubscribe();
  }, []);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault(); setLoading(true); setLoginError("");
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) setLoginError(error.message);
    else { setPassword(""); await checkAccess(); }
    setLoading(false);
  };

  const signOut = async () => { await supabase.auth.signOut(); setAppointments([]); setIsAdmin(false); setSession(null); };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await (supabase as any).from("appointment_requests").update({ status }).eq("id", id);
    if (!error) setAppointments(items => items.map(item => item.id === id ? { ...item, status } : item));
  };

  const visible = useMemo(() => appointments.filter(item => {
    const matchesStatus = filter === "all" || item.status === filter;
    const needle = search.toLowerCase().trim();
    const matchesSearch = !needle || [item.name, item.email, item.phone, item.business, item.project_type].filter(Boolean).join(" ").toLowerCase().includes(needle);
    return matchesStatus && matchesSearch;
  }), [appointments, filter, search]);

  const counts = useMemo(() => statuses.reduce<Record<string, number>>((acc, status) => { acc[status] = status === "all" ? appointments.length : appointments.filter(item => item.status === status).length; return acc; }, {}), [appointments]);

  if (checking) return <div className="min-h-screen flex items-center justify-center"><RefreshCw className="h-6 w-6 animate-spin text-primary" /></div>;

  if (!session) return <section className="min-h-screen pt-32 pb-24 bg-muted/20"><div className="container mx-auto px-4 max-w-md"><div className="rounded-3xl border border-border bg-card p-7 shadow-xl"><div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center"><LogIn className="h-6 w-6 text-primary" /></div><h1 className="mt-6 text-3xl font-display font-extrabold">Admin appointments</h1><p className="mt-2 text-sm text-muted-foreground">Sign in with the Supabase admin account configured for this site.</p><form onSubmit={signIn} className="mt-7 space-y-4"><div><label className="text-sm font-medium mb-2 block">Email</label><Input type="email" required value={email} onChange={e => setEmail(e.target.value)} /></div><div><label className="text-sm font-medium mb-2 block">Password</label><Input type="password" required value={password} onChange={e => setPassword(e.target.value)} /></div>{loginError && <p className="text-sm text-destructive">{loginError}</p>}<Button disabled={loading} type="submit" className="w-full h-11">{loading ? "Signing in..." : "Sign in"}</Button></form></div></div></section>;

  if (!isAdmin) return <section className="min-h-screen pt-32 pb-24 bg-muted/20"><div className="container mx-auto px-4 max-w-xl"><div className="rounded-3xl border border-destructive/20 bg-card p-8 text-center"><X className="mx-auto h-12 w-12 text-destructive" /><h1 className="mt-5 text-2xl font-display font-bold">Admin access not configured</h1><p className="mt-3 text-muted-foreground">Your Supabase account is signed in, but it has not been added to the site's admin_users table.</p><Button variant="outline" onClick={signOut} className="mt-6">Sign out</Button></div></div></section>;

  return <section className="min-h-screen pt-28 pb-20 bg-muted/20"><div className="container mx-auto px-4 lg:px-8 max-w-7xl">
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-5"><div><span className="text-sm font-semibold text-primary uppercase tracking-widest">Private admin</span><h1 className="mt-2 text-3xl md:text-5xl font-display font-extrabold">Appointment dashboard</h1><p className="mt-2 text-muted-foreground">Review requests, contact prospects and manage confirmation status.</p></div><div className="flex gap-2"><Button variant="outline" onClick={loadAppointments} disabled={loading}><RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />Refresh</Button><Button variant="ghost" onClick={signOut}><LogOut className="h-4 w-4" />Sign out</Button></div></div>
    <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-3">{statuses.map(status => <button key={status} type="button" onClick={() => setFilter(status)} className={`rounded-2xl border p-4 text-left transition-all ${filter === status ? "border-primary bg-primary/10" : "border-border bg-card hover:border-primary/30"}`}><div className="text-2xl font-display font-extrabold">{counts[status]}</div><div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{status}</div></button>)}</div>
    <div className="mt-6 flex flex-col sm:flex-row gap-3"><div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search name, email, phone or project..." className="pl-9" /></div></div>
    <div className="mt-6 space-y-4">{visible.length === 0 ? <div className="rounded-2xl border border-border bg-card p-12 text-center text-muted-foreground">No appointments match this view.</div> : visible.map(item => <article key={item.id} className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-sm"><div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h2 className="text-xl font-display font-bold">{item.name}</h2><Badge variant={statusStyles[item.status] || "outline"}>{item.status}</Badge></div><p className="mt-1 text-sm text-muted-foreground">{item.business || "Independent project"} · {item.project_type}</p><div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm"><span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" />{item.preferred_date}</span><span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" />{item.preferred_time} EAT</span><a className="flex items-center gap-2 hover:text-primary" href={`mailto:${item.email}`}><Mail className="h-4 w-4 text-primary" />{item.email}</a><a className="flex items-center gap-2 hover:text-primary" target="_blank" rel="noopener noreferrer" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${item.name}, this is KenyaAdverts regarding your website consultation request for ${item.preferred_date} at ${item.preferred_time} EAT.`)}`}><MessageCircle className="h-4 w-4 text-primary" />{item.phone}</a></div>{item.message && <p className="mt-4 p-4 rounded-xl bg-muted/50 text-sm text-muted-foreground whitespace-pre-wrap">{item.message}</p>}</div><div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">{item.status !== "confirmed" && item.status !== "completed" && <Button size="sm" onClick={() => updateStatus(item.id, "confirmed")}><Check className="h-4 w-4" />Confirm</Button>}{item.status === "confirmed" && <Button size="sm" variant="secondary" onClick={() => updateStatus(item.id, "completed")}>Complete</Button>}{item.status === "pending" && <Button size="sm" variant="destructive" onClick={() => updateStatus(item.id, "declined")}><X className="h-4 w-4" />Decline</Button>}{item.status === "confirmed" && <Button size="sm" variant="outline" onClick={() => updateStatus(item.id, "cancelled")}>Cancel</Button>}</div></div></article>)}</div>
  </div></section>;
}
