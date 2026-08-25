"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function LandingFooterCTA() {
  return (
    <section
      style={{
        background: "white",
        borderTop: "1px solid #e2e8f0",
        padding: "80px 0",
      }}
    >
      <div style={{ margin: "0 auto", maxWidth: "1280px", padding: "0 24px" }}>
        <motion.div
          style={{
            background: "#0f172a",
            borderRadius: "28px",
            padding: "80px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Glow */}
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background: "radial-gradient(circle 500px at 50% 50%, rgba(37,99,235,0.15), transparent)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <motion.p
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#60a5fa",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "16px",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Get Started Today
            </motion.p>

            <motion.h2
              style={{
                fontSize: "clamp(1.8rem, 4vw, 3rem)",
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                marginBottom: "20px",
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to unlock Nigeria&apos;s business intelligence?
            </motion.h2>

            <motion.p
              style={{
                fontSize: "1.05rem",
                color: "#94a3b8",
                maxWidth: "560px",
                margin: "0 auto 40px",
                lineHeight: 1.7,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Join forward-thinking teams using Business360 Data to close deals faster, enter new
              markets confidently, and make decisions backed by verified intelligence.
            </motion.p>

            <motion.div
              style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Link
                href="/database"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "#2563eb",
                  color: "white",
                  padding: "16px 32px",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  boxShadow: "0 4px 20px rgba(37,99,235,0.4)",
                  transition: "background 150ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
              >
                Request Database Access
                <ArrowRight style={{ width: "18px", height: "18px" }} />
              </Link>
              <Link
                href="/insights"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.08)",
                  color: "white",
                  padding: "16px 32px",
                  borderRadius: "10px",
                  fontSize: "15px",
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid rgba(255,255,255,0.12)",
                  transition: "background 150ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
              >
                <Mail style={{ width: "18px", height: "18px" }} />
                Read our Insights
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
