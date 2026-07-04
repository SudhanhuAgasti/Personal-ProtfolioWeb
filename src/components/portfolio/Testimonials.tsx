import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const items = [
  {
    quote:
      "Shradha's frontend implementation for the Swadeshi Transport & Logistics dashboard was outstanding. She coordinated the presentation and vehicle tracking views flawlessly under hackathon pressure.",
    name: "SIH Hackathon Panelist",
    role: "Smart India Hackathon Evaluator",
  },
  {
    quote:
      "The mobile-first design and map tracking dashboard she built for the Disaster Relief platform were highly intuitive. Her attention to functional testing and UI responsiveness was excellent.",
    name: "Project Advisor",
    role: "Web Systems Laboratory Coordinator",
  },
  {
    quote:
      "A highly analytical and dedicated developer. Her Google Operating Systems certification and HTML/CSS projects show a solid grasp of power-user system administration and clean architecture.",
    name: "Academic Mentor",
    role: "IMIT Cuttack Faculty",
  },
  {
    quote:
      "Shradha brings a unique combination of clean UI layouts and a QA mindset. She doesn't just write HTML/CSS code; she ensures that every form, dashboard, and interaction is fully tested and bug-free.",
    name: "QA Collaborator",
    role: "Senior Software Engineer",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % items.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
          08 — Testimonials
        </p>
        <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Kind words from <span className="text-gradient">collaborators</span> !
        </h2>

        <div className="relative mt-16 min-h-[260px] flex items-center justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
              transition={{ duration: 0.4 }}
              className="glass-strong relative w-full flex flex-col items-center justify-center rounded-3xl p-6 sm:p-10 text-center"
            >
              <Quote className="text-[var(--neon-violet)]" size={32} />
              <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed sm:text-xl md:text-2xl">
                "{items[i].quote}"
              </p>
              <div className="mt-8">
                <p className="font-semibold">{items[i].name}</p>
                <p className="text-sm text-muted-foreground">{items[i].role}</p>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>
        <div className="mt-8 flex justify-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Testimonial ${idx + 1}`}
              onClick={() => setI(idx)}
              suppressHydrationWarning
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-white" : "w-1.5 bg-white/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
