import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { HiUsers, HiCollection, HiCube, HiCheckCircle } from "react-icons/hi";

const stats = [
  { icon: HiUsers, value: 0, suffix: "+", label: "Students Enrolled", countTo: 1235 },
  { icon: HiCollection, value: 3, suffix: "", label: "Learning Domains", countTo: 3 },
  { icon: HiCube, value: 0, suffix: "+", label: "Projects Completed", countTo: 876 },
  { icon: HiCheckCircle, value: 100, suffix: "%", label: "Project Based", countTo: 100 },
];

function AnimatedCounter({ target, suffix, inView }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current || target === 0) return;
    hasAnimated.current = true;

    const duration = 1500; // ms
    const startTime = performance.now();

    const tick = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span className="gradient-text text-4xl md:text-5xl font-extrabold">
      {target === 0 ? "0" : count}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section className="section-padding relative" ref={sectionRef}>
      {/* Subtle background gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(245,158,11,0.06) 0%, transparent 70%)",
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
            Our Impact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Numbers That <span className="gradient-text">Matter</span>
          </h2>
          {/* Divider line */}
          <div className="section-divider" />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-7 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass p-6 sm:p-8 md:p-10 flex flex-col items-start text-left gap-3"
            >
              <stat.icon className="text-primary text-2xl mb-1" />
              <AnimatedCounter
                target={stat.countTo}
                suffix={stat.suffix}
                inView={isInView}
              />
              <span className="text-text-secondary text-sm font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
