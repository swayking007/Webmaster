import { motion } from "framer-motion";
import courses from "../data/courses";
import CourseCard from "./CourseCard";

export default function Courses() {
  return (
    <section id="courses" className="section-padding relative">
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
            Our Programs
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Explore Our <span className="gradient-text">Courses</span>
          </h2>
          {/* Divider line */}
          <div className="section-divider" />
        </motion.div>

        {/* Course grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {courses.map((course, i) => (
            <CourseCard key={course.id} course={course} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
