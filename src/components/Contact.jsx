import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const links = [
  {
    icon: HiMail,
    label: "Email Us",
    href: "mailto:contact@swaynex.com",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-primary font-semibold text-sm tracking-[0.25em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-text-secondary mb-10 text-sm md:text-base">
            Have a question, feedback, or want to collaborate with us? We'd love
            to hear from you.
          </p>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass px-6 sm:px-8 py-4 sm:py-5 flex items-center gap-3 w-full sm:w-auto hover:glow-amber-sm transition-all duration-300 no-underline group"
              >
                <link.icon className="text-primary text-lg group-hover:scale-110 transition-transform duration-200" />
                <span className="text-text-primary font-medium text-sm">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
