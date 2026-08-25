"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Mail, ArrowRight, Loader2 } from "lucide-react";

const perks = [
  "Early access to the database before public launch",
  "Founding member pricing — locked in for life",
  "Direct input into which sectors we prioritise first",
  "Exclusive briefings from our research team",
];

export default function LandingWaitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setStatus("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
  };

  return (
    <section
      style={{
        padding: "96px 0",
        background: "#0f172a",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative glows */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "700px",
            background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, margin: "0 auto", maxWidth: "1280px", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "64px", flexWrap: "wrap" }}>

          {/* Left — copy */}
          <div style={{ flex: "1 1 360px" }}>
            <motion.p
              style={{ fontSize: "12px", fontWeight: 700, color: "#60a5fa", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Coming Soon
            </motion.p>

            <motion.h2
              style={{
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                marginBottom: "20px",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Be first in line.<br />
              <span style={{ color: "#60a5fa" }}>Join the waitlist.</span>
            </motion.h2>

            <motion.p
              style={{ fontSize: "1.05rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: "36px" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Business360 Data is onboarding its first cohort of subscribers. Drop your email to
              secure your spot and get notified the moment we go live.
            </motion.p>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
              {perks.map((perk, i) => (
                <motion.li
                  key={i}
                  style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <CheckCircle2 style={{ width: "18px", height: "18px", color: "#60a5fa", flexShrink: 0, marginTop: "2px" }} />
                  <span style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.5 }}>{perk}</span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right — form card */}
          <motion.div
            style={{ flex: "1 1 380px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "24px",
                padding: "36px",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Card header */}
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "28px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "rgba(37,99,235,0.2)",
                    border: "1px solid rgba(96,165,250,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Mail style={{ width: "20px", height: "20px", color: "#60a5fa" }} />
                </div>
                <div>
                  <p style={{ fontSize: "17px", fontWeight: 700, color: "white", margin: 0 }}>
                    Reserve Your Spot
                  </p>
                  <p style={{ fontSize: "13px", color: "#64748b", margin: "2px 0 0" }}>
                    No credit card required
                  </p>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: "center", padding: "32px 0" }}
                  >
                    <div
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "50%",
                        background: "rgba(16,185,129,0.1)",
                        border: "1px solid rgba(16,185,129,0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 20px",
                      }}
                    >
                      <CheckCircle2 style={{ width: "32px", height: "32px", color: "#10b981" }} />
                    </div>
                    <h3 style={{ fontSize: "20px", fontWeight: 700, color: "white", marginBottom: "8px" }}>
                      You&apos;re on the list!
                    </h3>
                    <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6, maxWidth: "260px", margin: "0 auto" }}>
                      We&apos;ll be in touch as soon as we&apos;re ready to onboard the first cohort. Stay sharp.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    style={{ display: "flex", flexDirection: "column", gap: "16px" }}
                  >
                    <div>
                      <label
                        htmlFor="waitlist-email"
                        style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#94a3b8", marginBottom: "8px" }}
                      >
                        Your email address
                      </label>
                      <div style={{ position: "relative" }}>
                        <input
                          id="waitlist-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => { setEmail(e.target.value); setError(""); }}
                          placeholder="you@company.com"
                          style={{
                            width: "100%",
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.12)",
                            borderRadius: "12px",
                            padding: "14px 48px 14px 16px",
                            fontSize: "14px",
                            color: "white",
                            outline: "none",
                            boxSizing: "border-box",
                            transition: "border-color 150ms ease",
                          }}
                          onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(96,165,250,0.5)")}
                          onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                        />
                        <Mail
                          style={{
                            position: "absolute",
                            right: "14px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            width: "16px",
                            height: "16px",
                            color: "#475569",
                            pointerEvents: "none",
                          }}
                        />
                      </div>
                      {error && (
                        <p style={{ fontSize: "12px", color: "#f87171", marginTop: "6px" }}>{error}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                        background: status === "submitting" ? "#1d4ed8" : "#2563eb",
                        color: "white",
                        border: "none",
                        borderRadius: "12px",
                        padding: "15px 24px",
                        fontSize: "14px",
                        fontWeight: 600,
                        cursor: status === "submitting" ? "not-allowed" : "pointer",
                        opacity: status === "submitting" ? 0.7 : 1,
                        transition: "background 150ms ease",
                        fontFamily: "inherit",
                      }}
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 style={{ width: "16px", height: "16px", animation: "spin 1s linear infinite" }} />
                          Joining…
                        </>
                      ) : (
                        <>
                          Join the Waitlist
                          <ArrowRight style={{ width: "16px", height: "16px" }} />
                        </>
                      )}
                    </button>

                    <p style={{ textAlign: "center", fontSize: "12px", color: "#475569", margin: 0 }}>
                      We respect your privacy — no spam, ever.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>

              {/* Social proof */}
              {status !== "success" && (
                <div
                  style={{
                    marginTop: "24px",
                    paddingTop: "24px",
                    borderTop: "1px solid rgba(255,255,255,0.06)",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div style={{ display: "flex", marginLeft: "-8px" }}>
                    {["F", "S", "B", "D"].map((l) => (
                      <div
                        key={l}
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          background: "#1e3a8a",
                          border: "2px solid #0f172a",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "10px",
                          fontWeight: 700,
                          color: "#93c5fd",
                          marginLeft: "-8px",
                        }}
                      >
                        {l}
                      </div>
                    ))}
                  </div>
                  <p style={{ fontSize: "12px", color: "#475569", margin: 0 }}>
                    <span style={{ color: "white", fontWeight: 600 }}>200+ professionals</span> already on the list
                  </p>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        #waitlist-email::placeholder { color: #475569; }
      `}</style>
    </section>
  );
}
