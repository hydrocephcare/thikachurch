import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { portfolioProjects, upcomingProjects } from "@/lib/constants";
import type { PortfolioProject } from "@/lib/constants";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
};

function StatusBadge({ status }: { status: PortfolioProject["status"] }) {
  if (status === "completed") {
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
        <CheckCircle2 className="h-3 w-3" /> Completed
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20">
      <Clock className="h-3 w-3" /> Coming Soon
    </span>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-sm font-medium text-primary uppercase tracking-widest">Portfolio</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-display font-extrabold text-foreground">
              Our <span className="text-gradient-primary">Work</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              Every project is a partnership. Here are real websites and platforms we've delivered for clients — specializing in church and community websites.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Completed Projects */}
      <section className="pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-12">
            {portfolioProjects.map((project, i) => (
              <motion.div
                key={project.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-6 items-center"
              >
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="aspect-video rounded-xl overflow-hidden bg-muted border border-border">
                    {project.image ? (
                      <img src={project.image} alt={project.title} loading="lazy" className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-display text-2xl font-bold text-muted-foreground">{project.title}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{project.category}</span>
                    <StatusBadge status={project.status} />
                  </div>
                  <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold text-foreground">{project.title}</h2>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="mt-5 bg-gradient-primary text-primary-foreground hover:opacity-90">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      Visit Live Site <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Projects */}
      <section className="py-20 bg-muted/40">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-foreground">More Projects Coming Soon</h2>
            <p className="mt-3 text-muted-foreground">We're always working on new and exciting projects for our clients.</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {upcomingProjects.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="p-5 rounded-xl bg-background border border-dashed border-border text-center"
              >
                <StatusBadge status={p.status} />
                <h3 className="mt-3 font-display font-bold text-foreground">{p.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{p.category}</p>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl md:text-4xl font-display font-extrabold text-foreground">Want Your Project Here?</h2>
          <p className="mt-3 text-muted-foreground max-w-md mx-auto">Let's build something amazing together.</p>
          <Button asChild size="lg" className="mt-6 bg-gradient-primary text-primary-foreground hover:opacity-90 h-12 px-7">
            <Link to="/order">Start Your Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </>
  );
}
