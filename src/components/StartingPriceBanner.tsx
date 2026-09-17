import { Link } from "react-router-dom";
import { ArrowRight, Globe2 } from "lucide-react";

export default function StartingPriceBanner() {
  return (
    <div className="relative z-40 border-b border-primary/15 bg-primary/5">
      <div className="container mx-auto px-4 lg:px-8 min-h-9 flex items-center justify-center gap-2 text-xs sm:text-sm text-center">
        <Globe2 className="h-3.5 w-3.5 text-primary shrink-0" />
        <span><strong className="text-foreground">Professional websites from KES 5,000</strong><span className="hidden sm:inline text-muted-foreground"> · Worldwide service · Custom apps quoted by scope</span></span>
        <Link to="/affordable-website-design" className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">See options <ArrowRight className="h-3 w-3" /></Link>
      </div>
    </div>
  );
}
