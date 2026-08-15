import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiArrowRight, HiShieldCheck } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ─── Animated Background Orbs ─────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Large amber orb — top right */}
        <motion.div
          animate={{ y: [-20, 20, -20], scale: [1, 1.08, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.4) 0%, transparent 70%)",
          }}
        />
        {/* Medium orange orb — bottom left */}
        <motion.div
          animate={{ y: [20, -20, 20], scale: [1, 1.05, 1] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle, rgba(251,146,60,0.4) 0%, transparent 70%)",
          }}
        />
        {/* Small accent orb — center */}
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(245,158,11,0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* ─── Hero Content ─────────────────────────────────────── */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary font-semibold text-sm md:text-base tracking-[0.35em] uppercase mb-6"
        >
          Build &nbsp;•&nbsp; Learn &nbsp;•&nbsp; Prove
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6"
        >
          Turn Your Skills Into{" "}
          <span className="gradient-text">Real Experience</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-text-secondary text-base md:text-lg lg:text-xl max-w-4xl mx-auto mb-10 leading-relaxed text-center"
        >
          Project-based virtual internships designed to help students learn,
          build, and demonstrate industry-relevant skills — with verified
          certificates.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#internships"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#internships")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary no-underline"
          >
            Explore Internships
            <HiArrowRight />
          </a>
          <Link to="/verify" className="btn-outline no-underline">
            <HiShieldCheck size={18} />
            Verify Certificate
          </Link>
        </motion.div>
      </div>

      {/* ─── Scroll Indicator ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-text-muted text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <FiChevronDown className="text-primary text-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
