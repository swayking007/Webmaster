import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiShieldCheck,
  HiXCircle,
  HiSearch,
  HiArrowLeft,
} from "react-icons/hi";
import { verifyCertificate } from "../data/certificates";

const STATES = {
  IDLE: "idle",
  LOADING: "loading",
  VALID: "valid",
  INVALID: "invalid",
};

export default function VerifyCertificate() {
  const [searchParams] = useSearchParams();
  const [certId, setCertId] = useState("");
  const [state, setState] = useState(STATES.IDLE);
  const [result, setResult] = useState(null);

  // Pre-fill from query parameter (from CertificatePreview)
  useEffect(() => {
    const id = searchParams.get("id");
    if (id) {
      setCertId(id);
    }
  }, [searchParams]);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!certId.trim()) return;

    setState(STATES.LOADING);
    setResult(null);

    const res = await verifyCertificate(certId);

    if (res.found) {
      setResult(res.certificate);
      setState(STATES.VALID);
    } else {
      setState(STATES.INVALID);
    }
  };

  const handleReset = () => {
    setState(STATES.IDLE);
    setResult(null);
    setCertId("");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-24 relative">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(245,158,11,0.06) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 w-full max-w-xl">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-text-secondary text-sm hover:text-primary transition-colors no-underline"
          >
            <HiArrowLeft />
            Back to Home
          </Link>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-6 sm:p-8 md:p-10 lg:p-12 !rounded-3xl"
        >
          <div className="text-center mb-8">
            <HiShieldCheck className="text-primary text-4xl mx-auto mb-3" />
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              Certificate <span className="gradient-text">Verification</span>
            </h1>
            <p className="text-text-secondary text-sm">
              Enter the Certificate ID to verify its authenticity
            </p>
          </div>

          {/* Input form */}
          <form onSubmit={handleVerify} className="mb-6">
            <div className="flex flex-col gap-3">
              <div className="relative">
                <HiSearch className="absolute right-1 top-1/2 -translate-y-1/2 text-text-muted" />

                <input
                  type="text"
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  placeholder="  e.g., CA/01/387"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-surface border border-glass-border text-text-primary placeholder-text-muted text-sm focus:outline-none focus:border-primary transition-colors"
                  id="verify-input"
                  disabled={state === STATES.LOADING}
                />
              </div>
              <button
                type="submit"
                disabled={state === STATES.LOADING || !certId.trim()}
                className="btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:transform-none disabled:hover:shadow-none"
                id="verify-button"
              >
                {state === STATES.LOADING ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Verifying...
                  </span>
                ) : (
                  "Verify Certificate"
                )}
              </button>
            </div>
          </form>

          {/* Results */}
          <AnimatePresence mode="wait">
            {state === STATES.VALID && result && (
              <motion.div
                key="valid"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-xl border border-success/30 bg-success/5 p-6"
                id="verify-result-valid"
              >
                {/* Success header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-success/20 flex items-center justify-center">
                    <HiShieldCheck className="text-success text-xl" />
                  </div>
                  <div>
                    <p className="text-success font-bold text-base">
                      ✓ Certificate Verified
                    </p>
                    <p className="text-text-muted text-xs">
                      This certificate is authentic
                    </p>
                  </div>
                </div>

                {/* Certificate details */}
                <div className="space-y-3">
                  {[
                    { label: "Student", value: result.studentName },
                    { label: "Program", value: result.courseName },
                    { label: "Certificate ID", value: result.code },
                    { label: "Status", value: result.status },
                    { label: "Issued", value: result.issueDate },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-2 border-b border-glass-border last:border-0"
                    >
                      <span className="text-text-muted text-sm">
                        {item.label}
                      </span>
                      <span className="text-text-primary text-sm font-medium">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleReset}
                  className="mt-5 w-full btn-outline !text-sm justify-center"
                >
                  Verify Another
                </button>
              </motion.div>
            )}

            {state === STATES.INVALID && (
              <motion.div
                key="invalid"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-xl border border-error/30 bg-error/5 p-6 text-center"
                id="verify-result-invalid"
              >
                <div className="w-12 h-12 rounded-full bg-error/20 flex items-center justify-center mx-auto mb-4">
                  <HiXCircle className="text-error text-2xl" />
                </div>
                <p className="text-error font-bold text-base mb-2">
                  ✕ Certificate Not Found
                </p>
                <p className="text-text-secondary text-sm mb-1">
                  The certificate ID you entered could not be verified.
                </p>
                <p className="text-text-muted text-sm mb-5">
                  Please check the ID and try again. If you believe this is an
                  error, contact support.
                </p>
                <button
                  onClick={handleReset}
                  className="btn-outline !text-sm justify-center"
                >
                  Try Again
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Sample IDs hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center text-text-muted text-xs mt-6"
        >
          Demo IDs: CA/01/387 · CA/02/142 · CA/03/519 · CA/04/203 · CA/05/871
        </motion.p>
      </div>
    </section>
  );
}
