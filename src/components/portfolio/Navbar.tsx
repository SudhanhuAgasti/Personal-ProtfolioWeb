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
            className="flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-semibold tracking-tight sm:gap-2 sm:px-4 sm:py-1.5 sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--neon-violet)] sm:h-2 sm:w-2" />
            SD<span className="text-muted-foreground font-normal hidden xs:inline">/dev</span>
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
            Let's Talk !!
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
