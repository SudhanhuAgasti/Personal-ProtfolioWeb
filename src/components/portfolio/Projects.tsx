import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import swadeshiLogistics from "@/assets/swadeshi_logistics.png";
import disasterRelief from "@/assets/disaster_relief.png";

const projects = [
  {
    name: "Swadeshi for Atmanirbhar Bharat — Transport & Logistics",
    tag: "Hackathon Project · UI Development",
    desc: "Responsive transport & logistics platform interface built for vehicle tracking, shipment status, and logistics operator dashboards under Internal Smart India Hackathon (SIH).",
    tech: ["HTML5", "CSS3", "JavaScript", "UI Layout", "Responsive Design"],
    grad: "from-[#7C3AED] via-[#3B82F6] to-[#06B6D4]",
    img: swadeshiLogistics,
    live: "#",
    code: "#",
  },
  {
    name: "Disaster & Emergency Help Coordination Platform",
    tag: "Web App · Mobile-First",
    desc: "Emergency coordination platform with map-based visualization for tracking requests, volunteer/admin dashboards, and locating shelters in real time.",
    tech: ["HTML5", "CSS3", "JavaScript", "Dashboard Design", "Mobile-First"],
    grad: "from-[#EC4899] via-[#8B5CF6] to-[#6366F1]",
    img: disasterRelief,
    live: "#",
    code: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-wrap items-end justify-between gap-6"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
              03 — Selected Work
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Featured <span className="text-gradient">projects</span> !
            </h2>
          </div>
          <a
            href="#"
            className="glass rounded-full px-5 py-2.5 text-sm text-muted-foreground hover:text-foreground"
          >
            View all →
          </a>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group glass-strong relative overflow-hidden rounded-3xl"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.grad}`}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 grid-bg opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <motion.div
                  className="absolute inset-6 grid place-items-center"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="font-display text-5xl font-bold tracking-tighter text-white/90 mix-blend-overlay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.div>
                <div className="absolute right-4 top-4 flex gap-2 opacity-0 translate-y-2 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <a
                    href={p.code}
                    className="glass grid h-10 w-10 place-items-center rounded-full hover:bg-white/20"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={p.live}
                    className="grid h-10 w-10 place-items-center rounded-full bg-white text-black hover:scale-110 transition-transform"
                  >
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {p.tag}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ boxShadow: "0 40px 120px -30px rgba(140,120,255,0.5)" }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
