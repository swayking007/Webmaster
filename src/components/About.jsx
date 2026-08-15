import { motion } from "framer-motion";
import { HiLightBulb, HiUserGroup, HiAcademicCap, HiGlobe } from "react-icons/hi";

const highlights = [
  { icon: HiLightBulb, label: "Practical Skills" },
  { icon: HiUserGroup, label: "Mentorship" },
  { icon: HiAcademicCap, label: "Certificates" },
  { icon: HiGlobe, label: "Remote Access" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ─── Text Column ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-semibold text-sm tracking-[0.25em] uppercase mb-3">
              Who We Are
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Learning Should Go{" "}
              <span className="gradient-text">Beyond Classrooms</span>
            </h2>
            <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-4">
              Swaynex connects students with structured, project-based
              internship experiences that help them transform theoretical
              knowledge into practical skills.
            </p>
            <p className="text-text-muted text-base leading-relaxed">
              We believe every student deserves the opportunity to build real
              projects, work under guidance, and earn credentials that
              demonstrate their capabilities — not just their grades.
            </p>
          </motion.div>

          {/* ─── Icon Grid Column ────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
                className="glass relative overflow-hidden !p-7 sm:!p-8 flex flex-col items-start text-left gap-3 hover:glow-amber-sm transition-shadow duration-300"
              >
                <div
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full opacity-10 pointer-events-none bg-primary"
                />
                <item.icon className="text-primary text-3xl" />
                <span className="text-text-primary font-medium text-sm">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
