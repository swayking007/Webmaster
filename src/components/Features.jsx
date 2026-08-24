import { motion } from "framer-motion";
import {
  HiCode,
  HiUserGroup,
  HiShieldCheck,
  HiBriefcase,
} from "react-icons/hi";

const features = [
  {
    icon: HiCode,
    title: "Project-Based Learning",
    description:
      "Work on real-world projects that mirror industry requirements. Every internship is designed around deliverables, not just lectures.",
  },
  {
    icon: HiUserGroup,
    title: "Mentor Evaluation",
    description:
      "Get your work reviewed by experienced mentors who provide feedback, guidance, and performance evaluation throughout your journey.",
    upcoming: true,
  },
  {
    icon: HiShieldCheck,
    title: "Verified Certificates",
    description:
      "Earn certificates with unique IDs that can be verified instantly by anyone — recruiters, universities, or employers.",
  },
  {
    icon: HiBriefcase,
    title: "Real Portfolio Building",
    description:
      "Build a portfolio of completed projects that you can showcase to future employers, demonstrating actual hands-on experience.",
  },
];

const featureAccents = ["#f59e0b", "#3b82f6", "#10b981", "#a855f7"];

export default function Features() {
  return (
    <section id="features" className="section-padding relative">
      <div className="section-container">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.25em] uppercase mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Why <span className="gradient-text">Webmaster</span>?
          </h2>
          {/* Divider line */}
          <div className="section-divider" />
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass overflow-hidden !p-7 sm:!p-9 !rounded-3xl group hover:glow-amber-sm transition-all duration-300 relative flex flex-col gap-4"
            >
              {/* Top right pastel background accent circle */}
              <div
                className="absolute -top-10 -right-10 w-36 h-36 rounded-full opacity-15 pointer-events-none transition-opacity duration-300 group-hover:opacity-30"
                style={{ backgroundColor: featureAccents[i % featureAccents.length] }}
              />
              {feature.upcoming && (
                <span className="absolute top-6 right-6 text-xs font-semibold text-primary bg-primary-muted px-3 py-1 rounded-full z-10">
                  Coming Soon
                </span>
              )}
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300 shadow-sm"
                style={{
                  backgroundColor: featureAccents[i % featureAccents.length] + "1a",
                  color: featureAccents[i % featureAccents.length],
                }}
              >
                <feature.icon className="text-2xl md:text-3xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-base md:text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
