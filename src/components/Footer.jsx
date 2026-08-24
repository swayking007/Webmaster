import { Link } from "react-router-dom";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Internships", href: "#internships" },
  { label: "Verify", to: "/verify" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  const handleScrollLink = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/" + href;
    }
  };

  return (
    <footer className="relative border-t border-glass-border">
      {/* Amber gradient top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, var(--color-primary), transparent)",
        }}
      />

      <div className="section-container px-4 md:px-6 py-12 md:py-16">
        <div className="flex flex-col items-center text-center gap-6">
          {/* Logo */}
          <Link to="/" className="no-underline">
            <span className="gradient-text text-2xl font-extrabold tracking-tight block mb-3">
              WEBMASTER
            </span>
            <p className="text-text-secondary text-sm leading-relaxed max-w-sm">
              Empowering students through project-based virtual internships,
              hands-on learning, and verifiable certificates.
            </p>
          </Link>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {footerLinks.map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  className="text-text-secondary text-sm hover:text-primary transition-colors no-underline"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScrollLink(e, link.href)}
                  className="text-text-secondary text-sm hover:text-primary transition-colors no-underline"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Divider */}
          <div className="w-16 h-px bg-glass-border" />

          {/* Copyright */}
          <p className="text-text-muted text-xs">
            © {new Date().getFullYear()} Webmaster. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
