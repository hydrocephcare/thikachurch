import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Check, Clock3, LogIn, LogOut, Mail, MessageCircle, RefreshCw, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { WHATSAPP_NUMBER } from "@/lib/constants";

type Tab = "appointments" | "orders" | "contacts";
type Row = Record<string, any>;

const tabLabels: Record<Tab, string> = {
  appointments: "Appointments",
  orders: "Project enquiries",
  contacts: "Contact messages",
};

const statusVariant = (status: string): "default" | "secondary" | "destructive" | "outline" => {
  if (status === "confirmed" || status === "replied" || status === "completed" || status === "in_progress") return "default";
  if (status === "declined" || status === "cancelled" || status === "closed") return "destructive";
  if (status === "pending" || status === "new") return "secondary";
  return "outline";
};

const orderStatuses = ["pending", "contacted", "in_progress", "completed", "cancelled"];
const contactStatuses = ["new", "read", "replied", "closed"];
const appointmentStatuses = ["pending", "confirmed", "completed", "declined", "cancelled"];

export default function AdminPage() {
  const [session, setSession] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [checking, setChecking] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState<Tab>("appointments");
  const [search, setSearch] = useState("");
  const [appointments, setAppointments] = useState<Row[]>([]);
  const [orders, setOrders] = useState<Row[]>([]);
  const [contacts, setContacts] = useState<Row[]>([]);

  const checkAccess = async () => {
    setChecking(true);
    const { data } = await supabase.auth.getSession();
    setSession(data.session);
    if (data.session) {
      const { data: admin } = await (supabase as any)
        .from("admin_users")
        .select("user_id")
        .eq("user_id", data.session.user.id)
        .maybeSingle();
      setIsAdmin(Boolean(admin));
      if (admin) await loadAll();
    } else {
      setIsAdmin(false);
    }
    setChecking(false);
  };

  const loadAll = async () => {
    setLoading(true);
    const [appointmentsResult, ordersResult, contactsResult] = await Promise.all([
      (supabase as any).from("appointment_requests").select("*").order("preferred_date", { ascending: true }).order("preferred_time", { ascending: true }),
      (supabase as any).from("order_requests").select("*").order("created_at", { ascending: false }),
      (supabase as any).from("contact_submissions").select("*").order("created_at", { ascending: false }),
    ]);
    setAppointments(appointmentsResult.data || []);
    setOrders(ordersResult.data || []);
    setContacts(contactsResult.data || []);
    setLoading(false);
  };

  useEffect(() => {
    checkAccess();
    const { data } = supabase.auth.onAuthStateChange(() => checkAccess());
    return () => data.subscription.unsubscribe();
  }, []);

  const signIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoginError("");
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) setLoginError(error.message);
    else {
      setPassword("");
      await checkAccess();
    }
    setLoading(false);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setAppointments([]);
    setOrders([]);
    setContacts([]);
    setIsAdmin(false);
    setSession(null);
  };

  const updateStatus = async (table: string, id: string, status: string) => {
    const { error } = await (supabase as any).from(table).update({ status }).eq("id", id);
    if (error) return;
    if (table === "appointment_requests") setAppointments(rows => rows.map(row => row.id === id ? { ...row, status } : row));
    if (table === "order_requests") setOrders(rows => rows.map(row => row.id === id ? { ...row, status } : row));
    if (table === "contact_submissions") setContacts(rows => rows.map(row => row.id === id ? { ...row, status } : row));
  };

  const visible = useMemo(() => {
    const needle = search.toLowerCase().trim();
    const matches = (row: Row) => !needle || Object.values(row).filter(value => value !== null && value !== undefined).join(" ").toLowerCase().includes(needle);
    if (tab === "appointments") return appointments.filter(matches);
    if (tab === "orders") return orders.filter(matches);
    return contacts.filter(matches);
  }, [tab, search, appointments, orders, contacts]);

  const counts = {
    appointments: appointments.filter(row => row.status === "pending").length,
    orders: orders.filter(row => row.status === "pending").length,
    contacts: contacts.filter(row => row.status === "new").length,
  };

  if (checking) return <div className="min-h-screen flex items-center justify-center"><RefreshCw className="h-6 w-6 animate-spin text-primary" /></div>;

  if (!session) return <section className="min-h-screen pt-32 pb-24 bg-muted/20"><div className="container mx-auto px-4 max-w-md"><div className="rounded-3xl border border-border bg-card p-7 shadow-xl"><div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center"><LogIn className="h-6 w-6 text-primary" /></div><h1 className="mt-6 text-3xl font-display font-extrabold">Admin dashboard</h1><p className="mt-2 text-sm text-muted-foreground">Sign in with a Supabase account that has been added to the site's admin_users table.</p><form onSubmit={signIn} className="mt-7 space-y-4"><div><label className="text-sm font-medium mb-2 block">Email</label><Input type="email" required value={email} onChange={e => setEmail(e.target.value)} /></div><div><label className="text-sm font-medium mb-2 block">Password</label><Input type="password" required value={password} onChange={e => setPassword(e.target.value)} /></div>{loginError && <p className="text-sm text-destructive">{loginError}</p>}<Button disabled={loading} type="submit" className="w-full h-11">{loading ? "Signing in..." : "Sign in"}</Button></form></div></div></section>;

  if (!isAdmin) return <section className="min-h-screen pt-32 pb-24 bg-muted/20"><div className="container mx-auto px-4 max-w-xl"><div className="rounded-3xl border border-destructive/20 bg-card p-8 text-center"><X className="mx-auto h-12 w-12 text-destructive" /><h1 className="mt-5 text-2xl font-display font-bold">Admin access not configured</h1><p className="mt-3 text-muted-foreground">This account is signed in but is not listed as an administrator.</p><Button variant="outline" onClick={signOut} className="mt-6">Sign out</Button></div></div></section>;

  const renderAppointment = (row: Row) => <article key={row.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm"><div className="flex flex-col lg:flex-row lg:justify-between gap-5"><div className="min-w-0"><div className="flex flex-wrap items-center gap-2"><h2 className="text-xl font-display font-bold">{row.name}</h2><Badge variant={statusVariant(row.status)}>{row.status}</Badge></div><p className="mt-1 text-sm text-muted-foreground">{row.business || "Independent project"} · {row.project_type}</p><div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm"><span className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-primary" />{row.preferred_date}</span><span className="flex items-center gap-2"><Clock3 className="h-4 w-4 text-primary" />{row.preferred_time} EAT</span><a className="flex items-center gap-2 hover:text-primary" href={`mailto:${row.email}`}><Mail className="h-4 w-4 text-primary" />{row.email}</a><a className="flex items-center gap-2 hover:text-primary" target="_blank" rel="noopener noreferrer" href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi ${row.name}, this is KenyaAdverts regarding your website consultation request for ${row.preferred_date} at ${row.preferred_time} EAT.`)}`}><MessageCircle className="h-4 w-4 text-primary" />{row.phone}</a></div>{row.message && <p className="mt-4 p-4 rounded-xl bg-muted/50 text-sm text-muted-foreground whitespace-pre-wrap">{row.message}</p>}</div><div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">{row.status === "pending" && <><Button size="sm" onClick={() => updateStatus("appointment_requests", row.id, "confirmed")}><Check className="h-4 w-4" />Confirm</Button><Button size="sm" variant="destructive" onClick={() => updateStatus("appointment_requests", row.id, "declined")}><X className="h-4 w-4" />Decline</Button></>}{row.status === "confirmed" && <><Button size="sm" variant="secondary" onClick={() => updateStatus("appointment_requests", row.id, "completed")}>Complete</Button><Button size="sm" variant="outline" onClick={() => updateStatus("appointment_requests", row.id, "cancelled")}>Cancel</Button></>}</div></div></article>;

  const renderOrder = (row: Row) => <article key={row.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm"><div className="flex flex-col lg:flex-row lg:justify-between gap-5"><div><div className="flex flex-wrap items-center gap-2"><h2 className="text-xl font-display font-bold">{row.name}</h2><Badge variant={statusVariant(row.status)}>{row.status}</Badge></div><p className="mt-1 text-sm text-muted-foreground">{row.website_type} · {row.country || "Country not provided"}</p><div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm"><span>{row.phone}</span><a className="hover:text-primary" href={`mailto:${row.email}`}>{row.email || "No email"}</a><span>Timeline: {row.timeline || "Not specified"}</span><span>Budget: {row.budget || "Not specified"}</span></div>{row.requirements && <p className="mt-4 p-4 rounded-xl bg-muted/50 text-sm text-muted-foreground whitespace-pre-wrap">{row.requirements}</p>}</div><div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">{orderStatuses.filter(status => status !== row.status).map(status => <Button key={status} size="sm" variant={status === "cancelled" ? "destructive" : "outline"} onClick={() => updateStatus("order_requests", row.id, status)}>{status.replace("_", " ")}</Button>)}</div></div></article>;

  const renderContact = (row: Row) => <article key={row.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm"><div className="flex flex-col lg:flex-row lg:justify-between gap-5"><div><div className="flex flex-wrap items-center gap-2"><h2 className="text-xl font-display font-bold">{row.name}</h2><Badge variant={statusVariant(row.status)}>{row.status}</Badge></div><p className="mt-1 text-sm text-muted-foreground">{row.subject || "Website enquiry"}</p><div className="mt-4 flex flex-wrap gap-4 text-sm"><a className="hover:text-primary" href={`mailto:${row.email}`}>{row.email || "No email"}</a><span>{new Date(row.created_at).toLocaleString()}</span></div>{row.message && <p className="mt-4 p-4 rounded-xl bg-muted/50 text-sm text-muted-foreground whitespace-pre-wrap">{row.message}</p>}</div><div className="flex flex-wrap gap-2 lg:max-w-xs lg:justify-end">{contactStatuses.filter(status => status !== row.status).map(status => <Button key={status} size="sm" variant={status === "closed" ? "destructive" : "outline"} onClick={() => updateStatus("contact_submissions", row.id, status)}>{status}</Button>)}</div></div></article>;

  return <section className="min-h-screen pt-28 pb-20 bg-muted/20"><div className="container mx-auto px-4 lg:px-8 max-w-7xl"><div className="flex flex-col md:flex-row md:items-end justify-between gap-5"><div><span className="text-sm font-semibold text-primary uppercase tracking-widest">Private admin</span><h1 className="mt-2 text-3xl md:text-5xl font-display font-extrabold">KenyaAdverts dashboard</h1><p className="mt-2 text-muted-foreground">Manage consultation requests, project enquiries and contact messages.</p></div><div className="flex gap-2"><Button variant="outline" onClick={loadAll} disabled={loading}><RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />Refresh</Button><Button variant="ghost" onClick={signOut}><LogOut className="h-4 w-4" />Sign out</Button></div></div><div className="mt-8 grid md:grid-cols-3 gap-3">{(Object.keys(tabLabels) as Tab[]).map(key => <button key={key} type="button" onClick={() => { setTab(key); setSearch(""); }} className={`rounded-2xl border p-5 text-left transition-all ${tab === key ? "border-primary bg-primary/10" : "border-border bg-card hover:border-primary/30"}`}><div className="flex items-center justify-between gap-3"><div className="font-display font-bold">{tabLabels[key]}</div><span className="text-2xl font-display font-extrabold">{key === "appointments" ? appointments.length : key === "orders" ? orders.length : contacts.length}</span></div><div className="mt-2 text-xs text-muted-foreground">{counts[key]} awaiting attention</div></button>)}</div><div className="mt-6 relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /><Input value={search} onChange={e => setSearch(e.target.value)} placeholder={`Search ${tabLabels[tab].toLowerCase()}...`} className="pl-9" /></div><div className="mt-6 space-y-4">{visible.length === 0 ? <div className="rounded-2xl border border-border bg-card p-12 text-center text-muted-foreground">No records match this view.</div> : visible.map(row => tab === "appointments" ? renderAppointment(row) : tab === "orders" ? renderOrder(row) : renderContact(row))}</div></div></section>;
}
