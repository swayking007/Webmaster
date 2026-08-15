import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiShieldCheck, HiArrowRight } from "react-icons/hi";

export default function CertificatePreview() {
  const [certId, setCertId] = useState("");

  return (
    <section className="section-padding relative">
      {/* Background gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 30% 50%, rgba(245,158,11,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass p-6 sm:p-8 md:p-10 lg:p-12 text-left glow-amber !rounded-3xl flex flex-col items-start gap-4"
          >
            <HiShieldCheck className="text-primary text-4xl mb-1" />

            <h2 className="text-2xl md:text-3xl font-bold mb-1">
              Verify Your <span className="gradient-text">Certificate</span>
            </h2>

            <p className="text-text-secondary text-sm md:text-base max-w-lg mb-2">
              Already completed an internship? Verify your certificate instantly
              by entering your unique Certificate ID.
            </p>

            {/* Mini verify form */}
            <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-md">
              <input
                type="text"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                placeholder="e.g., CA/01/387"
                className="flex-1 px-4 py-3 rounded-xl bg-surface border border-glass-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-primary transition-colors"
                id="cert-preview-input"
              />
              <Link
                to={`/verify${certId ? `?id=${encodeURIComponent(certId)}` : ""}`}
                className="btn-primary no-underline justify-center whitespace-nowrap"
              >
                Verify
                <HiArrowRight />
              </Link>
            </div>

            <p className="text-text-muted text-xs mt-1">
              Enter the certificate ID found on your certificate document
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
