import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts, getFeaturedPosts, getAllCategories } from "@/lib/blogData";
import { WHATSAPP_URL } from "@/lib/constants";
import Seo from "@/components/Seo";

export default function BlogPage() {
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();

  return (
    <>
      <Seo
        title="Web Design & Development Blog Kenya | KenyaAdverts"
        description="Practical guides on web design, e-commerce, SEO, online stores, church websites, education platforms, video websites and custom web applications in Kenya."
        path="/blog"
      />
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">KenyaAdverts Knowledge Bank</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-display font-extrabold leading-tight">Web Design, SEO & Digital <span className="text-gradient-primary">Guides</span></h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">Useful articles for Kenyan businesses, organisations, publishers and creators planning websites, online shops, content platforms and custom web applications.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 flex flex-wrap justify-center gap-3">
          <Badge variant="secondary" className="px-4 py-2">All Articles</Badge>
          {categories.map((category) => <Badge key={category} variant="outline" className="px-4 py-2">{category}</Badge>)}
        </div>
      </section>

      {featuredPosts.length > 0 && <section className="py-16"><div className="container mx-auto px-4 lg:px-8"><div className="flex items-center gap-2 mb-8"><TrendingUp className="h-5 w-5 text-primary" /><h2 className="text-2xl font-display font-bold">Featured Guides</h2></div><div className="grid md:grid-cols-2 gap-8">{featuredPosts.map((post) => <article key={post.id} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all"><div className="flex items-center gap-2 mb-4"><Badge>Featured</Badge><Badge variant="outline">{post.category}</Badge></div><h3 className="text-xl font-display font-bold hover:text-primary"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3><p className="mt-3 text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p><div className="mt-5 flex items-center justify-between text-xs text-muted-foreground"><span className="flex items-center gap-1"><Calendar className="h-3 w-3" />{new Date(post.publishedAt).toLocaleDateString("en-KE", { month: "short", day: "numeric", year: "numeric" })}</span><span className="flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span></div></article>)}</div></div></section>}

      <section className="py-16 bg-muted/30"><div className="container mx-auto px-4 lg:px-8"><h2 className="text-2xl font-display font-bold">All Articles</h2><p className="mt-1 text-muted-foreground">Guides covering websites, SEO, content, payments and digital products.</p><div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">{blogPosts.map((post) => <article key={post.id} className="bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all p-6"><div className="flex items-center gap-2 mb-3"><Badge variant="outline" className="text-xs">{post.category}</Badge><span className="text-xs text-muted-foreground flex items-center gap-1"><Clock className="h-3 w-3" />{post.readTime}</span></div><h3 className="text-lg font-display font-bold hover:text-primary"><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3><p className="mt-2 text-muted-foreground text-sm leading-relaxed">{post.excerpt}</p><div className="mt-5 pt-4 border-t border-border"><Link to={`/blog/${post.slug}`} className="text-primary text-sm font-medium inline-flex items-center gap-1">Read article <ArrowRight className="h-4 w-4" /></Link></div></article>)}</div></div></section>

      <section className="py-20"><div className="container mx-auto px-4 lg:px-8 max-w-3xl text-center"><h2 className="text-3xl md:text-4xl font-display font-extrabold">Have a website idea?</h2><p className="mt-4 text-muted-foreground">Turn what you have learned into a real project. Tell us what you want to build and we can discuss the right structure and scope.</p><div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"><Button asChild size="lg"><Link to="/book-appointment">Book a Consultation</Link></Button><Button asChild size="lg" variant="outline"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button></div></div></section>
    </>
  );
}
