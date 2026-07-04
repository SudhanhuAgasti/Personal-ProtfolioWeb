import { motion } from "framer-motion";
import { Code2, Rocket, School, BookOpen, Users, GraduationCap } from "lucide-react";

const timeline = [
  {
    year: "2018 — 2020",
    title: "Higher Secondary Education",
    desc: "CHSE Odisha at Sidha Baranga H S School of Education & Technology, Jagatsinghpur.",
    icon: School,
  },
  {
    year: "2020 — 2023",
    title: "Bachelor of Science",
    desc: "B.Sc. in Chemistry Hons. at Netaji Subash Memorial City College, Cuttack.",
    icon: BookOpen,
  },
  {
    year: "2024",
    title: "Smart India Hackathon (SIH)",
    desc: "Contributed as a Frontend Developer, coordinator, and presenter during the Internal Smart India Hackathon.",
    icon: Users,
  },
  {
    year: "2024 — Present",
    title: "Master of Computer Applications",
    desc: "Pursuing MCA at Institute of Management and Information Technology (IMIT), Cuttack.",
    icon: GraduationCap,
  },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)]">
            01 — About
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            A developer focused on usability &{" "}
            <span className="text-gradient">clean architecture</span>!
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            I am an MCA student and aspiring Frontend Web Developer with a strong foundation in
            building clean, responsive, and user-focused web interfaces. I combine my layout design
            skills with a passion for software testing and usability to create high-quality,
            bug-free web experiences !!
          </p>
        </motion.div>

        <div className="mt-20 relative">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-white/30 via-white/10 to-transparent" />
          <div className="space-y-8">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: i * 0.05 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 top-2 grid h-12 w-12 place-items-center rounded-2xl glass glow-violet">
                    <Icon size={18} className="text-[var(--neon-cyan)]" />
                  </div>
                  <div className="glass hover-scale rounded-2xl p-6 transition-all hover:border-white/20 hover:shadow-[0_20px_80px_-30px_rgba(140,120,255,0.6)]">
                    <p className="font-mono text-xs uppercase tracking-widest text-[var(--neon-violet)]">
                      {item.year}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
