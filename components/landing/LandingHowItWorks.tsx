"use client";

import { motion } from "framer-motion";
import { Search, Scale, ShieldCheck, PenTool, CalendarCheck, BarChart } from "lucide-react";

const steps = [
  { title: "Discover companies", desc: "Search businesses by sector, location, size, or specific license status.", icon: Search },
  { title: "Filter and analyse", desc: "Compare company profiles, growth signals, and sector-specific attributes.", icon: Scale },
  { title: "Verify data", desc: "Access contact information timestamped and verified by our research team.", icon: ShieldCheck },
  { title: "Export target lists", desc: "Create highly targeted account lists for sales and due diligence in minutes.", icon: PenTool },
  { title: "Track competitors", desc: "Monitor market shifts, new entrants, and funding history across sectors.", icon: CalendarCheck },
  { title: "Map relationships", desc: "Understand organisational structures and identify key decision-makers.", icon: BarChart },
];

export default function LandingHowItWorks() {
  return (
    <section
      style={{
        padding: "96px 0",
        background: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(15,23,42,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, margin: "0 auto", maxWidth: "1280px", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ maxWidth: "640px", margin: "0 auto 80px", textAlign: "center" }}>
          <motion.h2
            style={{ fontSize: "13px", fontWeight: 700, color: "#2563eb", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Workflow
          </motion.h2>
          <motion.p
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0f172a", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "20px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            From scattered sheets to a unified system
          </motion.p>
          <motion.p
            style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Teams waste hours chasing contacts and comparing quotes. We turn scattered information
            into one actionable workflow.
          </motion.p>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              style={{
                position: "relative",
                padding: "32px",
                background: "white",
                borderRadius: "20px",
                border: "1px solid #f1f5f9",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                transition: "box-shadow 250ms ease, transform 250ms ease",
                cursor: "default",
                overflow: "hidden",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}
            >
              {/* Large number watermark */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "20px",
                  fontSize: "72px",
                  fontWeight: 900,
                  color: "#f8fafc",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {index + 1}
              </div>

              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "#eff6ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: 1,
                  transition: "background 200ms ease",
                }}
              >
                <step.icon style={{ width: "22px", height: "22px", color: "#2563eb" }} />
              </div>
              <h3
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#0f172a",
                  marginBottom: "10px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#64748b",
                  lineHeight: 1.65,
                  position: "relative",
                  zIndex: 1,
                  margin: 0,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
