import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, CheckCircle2, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { portfolioProjects } from "@/lib/constants";
import { useMemo, useState } from "react";
import Seo from "@/components/Seo";

const filters = ["All", "Business", "Marketplace", "Education", "Organisation", "E-Commerce"];
const fadeIn = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } };

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects = useMemo(
    () => activeFilter === "All"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category.includes(activeFilter) || project.tags.some((tag) => tag.includes(activeFilter))),
    [activeFilter]
  );

  return (
    <>
      <Seo title="Website Design Portfolio Kenya | KenyaAdverts Projects" description="Explore KenyaAdverts website and web application projects across business, education, marketplaces, organisations, e-commerce and custom digital products." path="/portfolio" />

      <section className="pt-32 pb-14">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Selected work</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-display font-extrabold leading-tight">
              Real websites for <span className="text-gradient-primary">real projects.</span>
            </h1>
            <p className="mt-5 max-w-3xl text-lg text-muted-foreground leading-relaxed">
              A growing collection of websites, marketplaces, education platforms and digital products we have designed and developed for different needs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10 items-center">
            <Filter className="h-4 w-4 text-muted-foreground mr-1" />
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${activeFilter === filter ? "bg-primary text-primary-foreground border-primary shadow-sm" : "bg-card border-border text-muted-foreground hover:text-foreground hover:border-primary/30"}`}
              >
                {filter}
              </button>
            ))}
          </div>

          {visibleProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {visibleProjects.map((project, index) => (
                <motion.article
                  key={project.id}
                  variants={fadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  className="group rounded-3xl overflow-hidden bg-card border border-border hover:border-primary/40 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-xl"
                >
                  <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live website`} className="block relative aspect-[16/9] overflow-hidden bg-muted">
                    {project.image && (
                      <img
                        src={project.image}
                        alt={`${project.title} website project`}
                        loading={index < 2 ? "eager" : "lazy"}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-70" />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1.5 rounded-full bg-background/90 backdrop-blur-sm text-xs font-semibold text-foreground shadow-sm">{project.category}</span>
                    </div>
                    <div className="absolute top-4 right-4 h-10 w-10 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center text-foreground shadow-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <ExternalLink className="h-4 w-4" />
                    </div>
                    <div className="absolute bottom-4 left-5 text-white text-xs font-medium tracking-widest uppercase opacity-90">
                      Project {String(index + 1).padStart(2, "0")}
                    </div>
                  </a>

                  <div className="p-6 md:p-7">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Live project
                      </span>
                      <span>•</span>
                      <span>{project.category}</span>
                    </div>
                    <h2 className="mt-2 text-2xl md:text-3xl font-display font-bold tracking-tight">{project.title}</h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full text-xs bg-muted text-muted-foreground">{tag}</span>
                      ))}
                    </div>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center text-sm font-semibold text-primary group/link">
                      View live project
                      <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover/link:translate-x-0.5" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className="py-20 text-center text-muted-foreground">
              No projects in this category yet. <button onClick={() => setActiveFilter("All")} className="text-primary font-semibold">View all projects</button>
            </div>
          )}
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">Your next project</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-display font-extrabold">We can build something for your industry too.</h2>
            <p className="mt-4 text-muted-foreground text-lg">Business, school, shop, organisation, personal brand or a completely custom system — tell us what you need.</p>
            <Button asChild size="lg" className="mt-8 bg-gradient-primary">
              <Link to="/order">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
