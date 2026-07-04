import { type ComponentType } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experience = [
  {
    role: "Frontend Developer & Coordinator",
    org: "Internal Smart India Hackathon (SIH)",
    period: "2024",
    desc: "Developed a responsive transport & logistics interface for Atmanirbhar Bharat. Built modular vehicle tracking components, shipment status tracking, and coordinated team presentations.",
  },
  {
    role: "Frontend Developer",
    org: "Disaster Relief Platform Project",
    period: "2024",
    desc: "Designed and developed a responsive, mobile-first coordination platform with map visualization for emergency shelters and priority tracking dashboards.",
  },
];

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    org: "Institute of Management and Information Technology, Cuttack (IMIT)",
    period: "Sept 2024 — April 2026",
    desc: "Studying advanced web systems, database management, algorithms, and software engineering methodologies.",
  },
  {
    degree: "Bachelor of Science in Chemistry Hons.",
    org: "Netaji Subash Memorial City College, Cuttack",
    period: "Aug 2020 — July 2023",
    desc: "Graduated with Honors, developing strong analytical thinking, documentation skills, and logical reasoning.",
  },
  {
    degree: "Higher Secondary School (CHSE Odisha)",
    org: "Sidha Baranga H S School of Education & Technology, Jagatsinghpur",
    period: "2018 — 2020",
    desc: "Focused on core science subjects and basic technical foundation.",
  },
];

function TimelineList({
  items,
  icon: Icon,
}: {
  items: Array<{ role?: string; degree?: string; org: string; period: string; desc: string }>;
  icon: ComponentType<{ size?: number; className?: string }>;
}) {
  return (
    <div className="relative">
      <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
      <div className="space-y-6">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="relative pl-16"
          >
            <div className="absolute left-0 top-1 grid h-12 w-12 place-items-center rounded-2xl glass glow-violet">
              <Icon size={18} className="text-[var(--neon-cyan)]" />
            </div>
            <div className="glass rounded-2xl p-5 hover:border-white/20 transition-colors">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-lg font-semibold">{it.role || it.degree}</h4>
                <span className="font-mono text-xs text-muted-foreground">{it.period}</span>
              </div>
              <p className="text-sm text-[var(--neon-violet)]">{it.org}</p>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function ExperienceEducation() {
  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl grid gap-16 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
            04 — Experience
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            Where I've<span className="text-gradient">shipped</span> !
          </h2>
          <div className="mt-10">
            <TimelineList items={experience} icon={Briefcase} />
          </div>
        </div>
        <div id="education">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
            05 — Education
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
            What I've <span className="text-gradient">learned</span> !
          </h2>
          <div className="mt-10">
            <TimelineList items={education} icon={GraduationCap} />
          </div>
        </div>
      </div>
    </section>
  );
}
