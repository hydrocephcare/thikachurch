import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

import showcaseGrace from "@/assets/showcase-grace.jpg";
import showcaseVictory from "@/assets/showcase-victory.jpg";
import showcaseHarvest from "@/assets/showcase-harvest.jpg";
import showcaseFaith from "@/assets/showcase-faith.jpg";
import showcaseCampus from "@/assets/showcase-campus.jpg";

const showcaseSites = [
  {
    title: "Grace Community Church",
    style: "Modern & Engaging",
    description: "Modern design for youth-focused ministry",
    image: showcaseGrace,
    color: "hsl(200 80% 60%)",
  },
  {
    title: "Victory Chapel",
    style: "Bold & Dynamic",
    description: "Dynamic platform for growing congregation",
    image: showcaseVictory,
    color: "hsl(280 70% 60%)",
  },
  {
    title: "Harvest Community",
    style: "Warm & Traditional",
    description: "Timeless design with modern functionality",
    image: showcaseHarvest,
    color: "hsl(120 50% 40%)",
  },
  {
    title: "Faith Fellowship",
    style: "Elegant & Professional",
    description: "Professional platform for established church",
    image: showcaseFaith,
    color: "hsl(220 60% 40%)",
  },
  {
    title: "Campus Ministry",
    style: "Fresh & Youthful",
    description: "Engaging design for student ministry",
    image: showcaseCampus,
    color: "hsl(330 70% 55%)",
  },
];

function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(160, 65%, 60%, ${p.alpha})`;
        ctx.fill();
      }
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

function CursorTrail() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { damping: 25, stiffness: 200 });
  const springY = useSpring(cursorY, { damping: 25, stiffness: 200 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const hoverIn = () => setHovered(true);
    const hoverOut = () => setHovered(false);

    window.addEventListener("mousemove", handler);
    const cards = document.querySelectorAll("[data-showcase-card]");
    cards.forEach((c) => {
      c.addEventListener("mouseenter", hoverIn);
      c.addEventListener("mouseleave", hoverOut);
    });

    return () => {
      window.removeEventListener("mousemove", handler);
      cards.forEach((c) => {
        c.removeEventListener("mouseenter", hoverIn);
        c.removeEventListener("mouseleave", hoverOut);
      });
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-50 hidden lg:block"
      style={{
        left: springX,
        top: springY,
        x: "-50%",
        y: "-50%",
        width: hovered ? 70 : 50,
        height: hovered ? 70 : 50,
      }}
      animate={{
        width: hovered ? 70 : 50,
        height: hovered ? 70 : 50,
      }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="w-full h-full rounded-full transition-all duration-300"
        style={{
          background: hovered
            ? "radial-gradient(circle, hsla(38, 90%, 55%, 0.5), transparent)"
            : "radial-gradient(circle, hsla(160, 65%, 38%, 0.4), transparent)",
          filter: "blur(18px)",
        }}
      />
    </motion.div>
  );
}

function BrowserMockup({ site, isActive }: { site: typeof showcaseSites[0]; isActive: boolean }) {
  return (
    <motion.div
      data-showcase-card
      className="group relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: "hsla(220, 20%, 12%, 0.4)",
        backdropFilter: "blur(10px)",
        border: "1px solid hsla(0, 0%, 100%, 0.1)",
        boxShadow: isActive
          ? "0 16px 48px hsla(160, 65%, 38%, 0.2)"
          : "0 8px 32px hsla(0, 0%, 0%, 0.1)",
      }}
      whileHover={{
        scale: 1.03,
        y: -8,
        boxShadow: "0 20px 60px hsla(160, 65%, 38%, 0.3)",
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10 bg-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-white/10 rounded-md px-3 py-1 text-xs text-white/40 font-mono truncate">
            {site.title.toLowerCase().replace(/\s/g, "") + ".co.ke"}
          </div>
        </div>
      </div>
      {/* Screenshot */}
      <div className="aspect-video overflow-hidden">
        <img
          src={site.image}
          alt={`${site.title} website preview`}
          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
          loading="lazy"
        />
      </div>
      {/* Info */}
      <div className="p-4">
        <h3 className="text-white font-display font-bold text-sm">{site.title}</h3>
        <p className="text-white/50 text-xs mt-0.5">{site.style}</p>
        <p className="text-white/40 text-xs mt-1">{site.description}</p>
      </div>
    </motion.div>
  );
}

export default function ChurchShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const isMobile = useIsMobile();
  const intervalRef = useRef<ReturnType<typeof setInterval>>();

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (!paused) {
        setActiveIndex((prev) => (prev + 1) % showcaseSites.length);
      }
    }, 5000);
  }, [paused]);

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startInterval]);

  // Reduce motion check
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(220 25% 8%), hsl(220 20% 14%))",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {!reducedMotion && !isMobile && <CursorTrail />}
      {!reducedMotion && <Particles />}

      <div className="relative z-10 container mx-auto px-4 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium uppercase tracking-widest" style={{ color: "hsl(160 65% 50%)" }}>
            Portfolio Showcase
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-extrabold text-white">
            See Our Church Website Designs
          </h2>
          <p className="mt-3 text-white/50 max-w-xl mx-auto">
            Pixel-Perfect. Mobile-First. Made in Kenya.
          </p>
        </motion.div>

        {/* Mobile: single card carousel */}
        {isMobile ? (
          <div className="space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.4 }}
              >
                <BrowserMockup site={showcaseSites[activeIndex]} isActive />
              </motion.div>
            </AnimatePresence>
            {/* Dots */}
            <div className="flex justify-center gap-2">
              {showcaseSites.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActiveIndex(i); startInterval(); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === activeIndex ? "bg-primary w-6" : "bg-white/30"
                  }`}
                  aria-label={`View ${showcaseSites[i].title}`}
                />
              ))}
            </div>
          </div>
        ) : (
          /* Desktop: grid with highlight */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {showcaseSites.slice(0, 3).map((site, i) => (
              <motion.div
                key={site.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <BrowserMockup site={site} isActive={activeIndex === i} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Second row on desktop */}
        {!isMobile && (
          <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
            {showcaseSites.slice(3).map((site, i) => (
              <motion.div
                key={site.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.1, duration: 0.5 }}
              >
                <BrowserMockup site={site} isActive={activeIndex === i + 3} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-white/40 text-sm">
            Each design is custom-built for the church's unique identity and ministry goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
