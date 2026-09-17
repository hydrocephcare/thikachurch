import { Link } from "react-router-dom";

interface BrandProps {
  compact?: boolean;
  className?: string;
}

export default function Brand({ compact = false, className = "" }: BrandProps) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="NexaWeb Studio home">
      <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-primary via-blue-500 to-cyan-400 shadow-sm">
        <span className="absolute left-[9px] top-[8px] h-5 w-1.5 -skew-x-[24deg] rounded-full bg-white" />
        <span className="absolute right-[9px] top-[8px] h-5 w-1.5 -skew-x-[24deg] rounded-full bg-white/90" />
        <span className="absolute left-[15px] top-[9px] h-5 w-1.5 rotate-[-34deg] rounded-full bg-white" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg font-extrabold tracking-tight text-foreground">
          Nexa<span className="text-primary">Web</span> Studio
        </span>
        {!compact && <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">Design · Develop · Scale</span>}
      </span>
    </Link>
  );
}
