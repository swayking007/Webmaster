import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function CourseCard({ course, index }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Tilt: max ±5 degrees
    const rotateY = (mouseX / (rect.width / 2)) * 5;
    const rotateX = -(mouseY / (rect.height / 2)) * 5;

    // Glow position (percentage)
    const glowX = ((e.clientX - rect.left) / rect.width) * 100;
    const glowY = ((e.clientY - rect.top) / rect.height) * 100;

    setTilt({ rotateX, rotateY });
    setGlowPos({ x: glowX, y: glowY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  };

  const Icon = course.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.4s ease-out",
      }}
      className="glass relative overflow-hidden !p-7 sm:!p-9 !rounded-3xl flex flex-col gap-6 cursor-pointer group min-h-[340px] md:min-h-[360px] justify-between"
      id={`course-card-${course.id}`}
    >
      {/* Top right decorative corner accent (as shown in design) */}
      <div
        className="absolute -top-10 -right-10 w-36 h-36 rounded-full opacity-15 pointer-events-none transition-opacity duration-300 group-hover:opacity-30"
        style={{ backgroundColor: course.accent }}
      />
      {/* Cursor-following glow */}
      {isHovered && (
        <div
          className="absolute pointer-events-none w-56 h-56 rounded-full opacity-20 blur-2xl transition-opacity duration-300"
          style={{
            background: course.accent,
            left: `${glowPos.x}%`,
            top: `${glowPos.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      )}

      {/* Top content */}
      <div className="flex flex-col gap-5">
        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl md:text-3xl shadow-sm"
          style={{ backgroundColor: course.accent + "1a", color: course.accent }}
        >
          <Icon />
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-bold text-text-primary tracking-tight">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-text-secondary text-base md:text-lg leading-relaxed">
          {course.description}
        </p>
      </div>

      {/* Explore link */}
      <div
        className="flex items-center gap-2 text-base md:text-lg font-bold mt-4 transition-colors duration-200"
        style={{ color: course.accent }}
      >
        <span>Explore</span>
        <HiArrowNarrowRight className="group-hover:translate-x-2 transition-transform duration-200" />
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(90deg, transparent, ${course.accent}, transparent)`,
        }}
      />
    </motion.div>
  );
}
