import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getRelatedPages } from "@/lib/pageDirectory";

export default function RelatedPages({ exclude }: { exclude: string }) {
  const related = getRelatedPages(exclude, 4);
  if (related.length === 0) return null;

  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <h2 className="text-xl font-display font-bold text-muted-foreground mb-6">You might also be looking for</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {related.map((page) => (
            <Link
              key={page.path}
              to={page.path}
              className="group flex items-center justify-between gap-2 p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors text-sm font-medium"
            >
              <span>{page.label}</span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
