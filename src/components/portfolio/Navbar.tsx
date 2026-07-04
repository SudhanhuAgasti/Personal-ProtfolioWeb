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
            className="flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold tracking-tight sm:px-3 sm:py-1.5 sm:text-sm"
          >
            <div className="relative flex items-center justify-center">
              <svg
                className="h-6 w-8 sm:h-7 sm:w-10"
                viewBox="0 0 38 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="logo-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--neon-violet)" />
                    <stop offset="100%" stopColor="var(--neon-cyan)" />
                  </linearGradient>
                  <linearGradient id="logo-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--neon-cyan)" />
                    <stop offset="100%" stopColor="var(--neon-pink)" />
                  </linearGradient>
                </defs>
                {/* First S */}
                <path
                  d="M16 8C16 8 13.5 5.5 10 7.5C6.5 9.5 9 13.5 13 14.5C17 15.5 19.5 19 16 21C12.5 23 10 21 10 21"
                  stroke="url(#logo-grad-1)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Second S */}
                <path
                  d="M26 9.5C26 9.5 23.5 7 20 9C16.5 11 19 15 23 16C27 17 29.5 20.5 26 22.5C22.5 24.5 20 22.5 20 22.5"
                  stroke="url(#logo-grad-2)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                {/* Green checkmark integrated at the tail */}
                <path
                  d="M17 19L20 22L26 16"
                  stroke="oklch(0.72 0.19 140)"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ filter: "drop-shadow(0 0 4px oklch(0.72 0.19 140))" }}
                />
              </svg>
              <span className="font-display text-sm font-extrabold tracking-tight text-white sm:text-base ml-0.5">
                Das
              </span>
            </div>
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
