import {
  FaBrain,
  FaCode,
  FaLaptopCode,
  FaChartBar,
  FaShieldAlt,
  FaPaintBrush,
} from "react-icons/fa";

const courses = [
  {
    id: 1,
    title: "AI & Machine Learning",
    description:
      "Dive into neural networks, NLP, computer vision, and build real ML pipelines from data to deployment.",
    icon: FaBrain,
    accent: "#f59e0b",
  },
  {
    id: 2,
    title: "Full Stack Development",
    description:
      "Master frontend and backend technologies — React, Node.js, databases, APIs — and ship complete web applications.",
    icon: FaCode,
    accent: "#fb923c",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Build modern, responsive websites with HTML, CSS, JavaScript, and popular frameworks from scratch.",
    icon: FaLaptopCode,
    accent: "#fbbf24",
  },
  {
    id: 4,
    title: "Data Science",
    description:
      "Analyse real-world datasets, create visualisations, and extract actionable insights with Python and SQL.",
    icon: FaChartBar,
    accent: "#f97316",
  },
  {
    id: 5,
    title: "Cybersecurity",
    description:
      "Learn ethical hacking, network security, vulnerability assessment, and defend systems against real threats.",
    icon: FaShieldAlt,
    accent: "#ef4444",
  },
  {
    id: 6,
    title: "UI/UX Design",
    description:
      "Design intuitive, accessible interfaces using Figma, prototyping tools, and user research methodologies.",
    icon: FaPaintBrush,
    accent: "#a855f7",
  },
];

export default courses;
