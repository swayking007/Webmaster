import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Internships", href: "#internships" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleNavClick = (e, href) => {
    if (location.pathname !== "/") {
      // Navigate to home page first, then scroll
      e.preventDefault();
      window.location.href = "/" + href;
      return;
    }
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "glass-strong py-3 shadow-lg shadow-black/30"
          : "bg-transparent py-5"
        }`}
      id="navbar"
    >
      <div className="section-container flex items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="gradient-text text-xl md:text-2xl font-extrabold tracking-tight">
            SWAYNEX
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary-muted no-underline"
            >
              {link.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            id="theme-toggle"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>

          {/* Verify — distinct link */}
          <Link
            to="/verify"
            className="ml-1 btn-outline !py-2 !px-4 !text-sm !rounded-lg no-underline"
          >
            Verify Certificate
          </Link>
        </div>

        {/* Mobile: theme toggle + menu toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-text-primary p-2 rounded-lg hover:bg-glass-strong transition-colors"
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden glass-strong mt-2 mx-4 overflow-hidden"
            id="mobile-menu"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 text-sm font-medium text-text-secondary hover:text-primary hover:bg-primary-muted rounded-lg transition-colors no-underline"
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/verify"
                className="mt-2 btn-primary text-center !text-sm no-underline justify-center"
              >
                Verify Certificate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
