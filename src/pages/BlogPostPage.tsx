import { Link, Navigate, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, Clock, ExternalLink, MessageCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getBlogPostBySlug, blogPosts } from "@/lib/blogData";
import { blogContentMap } from "@/lib/blogContent";
import { WHATSAPP_URL } from "@/lib/constants";

const SITE = "https://kenyaadverts.co.ke";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const ContentComponent = blogContentMap[post.slug];
  const relatedPosts = blogPosts.filter((item) => item.id !== post.id && (item.category === post.category || item.featured)).slice(0, 3);
  const canonical = `${SITE}/blog/${post.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: { "@type": "Organization", name: "KenyaAdverts", url: SITE },
    publisher: { "@type": "Organization", name: "KenyaAdverts", url: SITE },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    url: canonical,
    keywords: post.tags.join(", "),
    articleSection: post.category,
    inLanguage: "en",
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.tags.join(", ")} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="KenyaAdverts" />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={`${SITE}/og-image.jpg`} />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:modified_time" content={post.updatedAt} />
        <meta property="article:section" content={post.category} />
        {post.tags.map((tag) => <meta key={tag} property="article:tag" content={tag} />)}
        <script type="application/ld+json">{JSON.stringify(articleJsonLd)}</script>
      </Helmet>

      <section className="pt-32 pb-10 bg-gradient-to-b from-primary/10 via-background to-background">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"><ArrowLeft className="h-4 w-4" />Back to Blog</Link>
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="mt-7">
            <div className="flex flex-wrap gap-2"><Badge variant="outline">{post.category}</Badge>{post.featured && <Badge>Featured</Badge>}</div>
            <h1 className="mt-5 text-4xl md:text-6xl font-display font-extrabold leading-tight max-w-4xl">{post.title}</h1>
            <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground"><span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</span><span className="inline-flex items-center gap-1.5"><Clock className="h-4 w-4" />{post.readTime} read</span><span>Updated {new Date(post.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</span></div>
            <div className="mt-4 flex flex-wrap gap-2">{post.tags.slice(0, 6).map((tag) => <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">#{tag.replace(/\s+/g, "")}</span>)}</div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          {ContentComponent ? <ContentComponent /> : <div className="prose prose-lg max-w-none dark:prose-invert"><p>{post.excerpt}</p><p>This article is part of the KenyaAdverts knowledge library. Explore the related guides below for more practical information.</p></div>}
        </div>
      </section>

      <section className="py-14 border-y border-border bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5"><div><h2 className="text-2xl md:text-3xl font-display font-extrabold">Need a website for your business?</h2><p className="mt-2 text-muted-foreground">We build business websites, online stores and custom web applications for clients worldwide.</p></div><div className="flex flex-col sm:flex-row gap-3"><Button asChild><Link to="/book-appointment">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild variant="outline"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" />WhatsApp</a></Button></div></div>
        </div>
      </section>

      {relatedPosts.length > 0 && <section className="py-16"><div className="container mx-auto px-4 lg:px-8 max-w-5xl"><div className="flex items-center justify-between gap-4 mb-7"><div><span className="text-xs font-semibold text-primary uppercase tracking-widest">Keep reading</span><h2 className="mt-2 text-2xl md:text-3xl font-display font-extrabold">Related guides</h2></div><Link to="/blog" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-primary">All articles <ExternalLink className="h-3.5 w-3.5" /></Link></div><div className="grid md:grid-cols-3 gap-5">{relatedPosts.map((item) => <Link key={item.id} to={`/blog/${item.slug}`} className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/40 hover:-translate-y-1 transition-all"><span className="text-xs font-semibold text-primary uppercase">{item.category}</span><h3 className="mt-2 font-display font-bold leading-snug group-hover:text-primary transition-colors">{item.title}</h3><p className="mt-2 text-sm text-muted-foreground line-clamp-3">{item.excerpt}</p><span className="mt-4 inline-flex items-center text-sm font-semibold text-primary">Read guide <ArrowRight className="ml-1 h-3.5 w-3.5" /></span></Link>)}</div></div></section>}
    </>
  );
}
