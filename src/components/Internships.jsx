import { motion } from "framer-motion";
import {
  FaBrain,
  FaCode,
  FaLaptopCode,
  FaChartBar,
  FaShieldAlt,
  FaPaintBrush,
} from "react-icons/fa";

const internships = [
  {
    title: "AI & Machine Learning",
    description:
      "Build intelligent systems — from data preprocessing and model training to deploying ML solutions.",
    icon: FaBrain,
    accent: "#f59e0b",
  },
  {
    title: "Full Stack Development",
    description:
      "Develop end-to-end web applications with modern frontend frameworks and robust backend APIs.",
    icon: FaCode,
    accent: "#fb923c",
  },
  {
    title: "Web Development",
    description:
      "Create responsive, accessible, and performant websites using the latest web technologies.",
    icon: FaLaptopCode,
    accent: "#fbbf24",
  },
  {
    title: "Data Science",
    description:
      "Extract insights from complex datasets using statistical analysis, visualisation, and machine learning.",
    icon: FaChartBar,
    accent: "#f97316",
  },
  {
    title: "Cybersecurity",
    description:
      "Learn ethical hacking, penetration testing, and security best practices through guided labs.",
    icon: FaShieldAlt,
    accent: "#ef4444",
  },
  {
    title: "UI/UX Design",
    description:
      "Design beautiful, user-centred interfaces and improve usability through research and prototyping.",
    icon: FaPaintBrush,
    accent: "#a855f7",
  },
];

export default function Internships() {
  return (
    <section id="internships" className="section-padding relative">
      {/* Subtle background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background:
            "radial-gradient(ellipse at 70% 50%, rgba(251,146,60,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="section-container relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.25em] uppercase mb-3">
            Opportunities
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Internship <span className="gradient-text">Programs</span>
          </h2>
          {/* Divider line */}
          <div className="section-divider" />
        </motion.div>

        {/* Internship cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {internships.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass overflow-hidden !p-7 sm:!p-9 !rounded-3xl flex items-start gap-6 group hover:border-primary/30 transition-all duration-300 relative min-h-[260px]"
            >
              {/* Top right pastel background accent circle */}
              <div
                className="absolute -top-10 -right-10 w-36 h-36 rounded-full opacity-15 pointer-events-none transition-opacity duration-300 group-hover:opacity-30"
                style={{ backgroundColor: item.accent }}
              />
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm"
                style={{
                  backgroundColor: item.accent + "1a",
                  color: item.accent,
                }}
              >
                <item.icon className="text-2xl md:text-3xl" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-bold text-text-primary text-xl md:text-2xl tracking-tight">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-text-muted text-sm mb-4">
            Application flows coming soon — stay tuned!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
