import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
      >
        <nav
          className={`glass flex items-center justify-between gap-1 rounded-full px-2 py-1.5 transition-all duration-500 sm:px-4 ${scrolled ? "glow-violet" : ""}`}
        >
          <a
            href="#top"
            className="flex items-center gap-2 rounded-full px-2 py-1 text-xs font-semibold tracking-tight sm:px-4 sm:py-1.5 sm:text-sm"
          >
            <div className="relative flex items-center justify-center">
              <svg
                className="h-6 w-6 sm:h-7 sm:w-7"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--neon-violet)" />
                    <stop offset="100%" stopColor="var(--neon-cyan)" />
                  </linearGradient>
                </defs>
                <path
                  d="M20 8C20 8 16.5 5.5 12 8C7.5 10.5 11 15 16 16C21 17 24.5 21.5 20 24C15.5 26.5 12 24 12 24"
                  stroke="url(#logo-grad)"
                  strokeWidth="4.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 18L15 21L22 14"
                  stroke="oklch(0.72 0.19 140)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ filter: "drop-shadow(0 0 5px oklch(0.72 0.19 140))" }}
                />
              </svg>
            </div>
            <span className="font-display text-sm font-extrabold tracking-tight text-white sm:text-base">
              Ss <span className="text-[var(--neon-cyan)]">Das</span>
            </span>
          </a>
          <div className="flex items-center gap-0.5 sm:gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative rounded-full px-2 py-1 text-[11px] text-muted-foreground transition-colors hover:text-foreground sm:px-4 sm:py-1.5 sm:text-sm"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="ml-1 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-medium text-black transition-transform hover:scale-105 sm:px-4 sm:py-1.5 sm:text-sm"
          >
            Let's Talk
          </a>
        </nav>
      </motion.div>
      <motion.div
        style={{ scaleX }}
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-[var(--neon-violet)] via-[var(--neon-cyan)] to-[var(--neon-pink)]"
      />
    </>
  );
}
