"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Map,
  Users,
  Briefcase,
  ShoppingCart,
  TrendingUp,
  CheckCircle2,
  Database,
  ShieldCheck,
  Factory,
} from "lucide-react";
import { useState } from "react";

const sectors = [
  {
    id: "financial",
    name: "Financial Services",
    icon: Building2,
    iconColor: "#2563eb",
    iconBg: "#eff6ff",
    description: "Deep dive into Nigeria's financial ecosystem with verified institutional data.",
    attributes: [
      "License type & regulator (CBN, SEC, NAICOM)",
      "Funding history for Fintechs",
      "Financial health indicators",
      "Compliance signals & regulatory actions",
    ],
    useCase: "Ideal for investors mapping the landscape and BD teams targeting regulated entities.",
  },
  {
    id: "tech",
    name: "Technology",
    icon: Users,
    iconColor: "#4f46e5",
    iconBg: "#eef2ff",
    description: "Track the fastest growing sector with real-time growth signals.",
    attributes: [
      "Startup registration status (NITDA)",
      "Funding stage & history",
      "Tech stack signals",
      "Hiring velocity & growth",
    ],
    useCase: "Perfect for VC due diligence and software vendors seeking high-growth accounts.",
  },
  {
    id: "fmcg",
    name: "FMCG",
    icon: ShoppingCart,
    iconColor: "#ea580c",
    iconBg: "#fff7ed",
    description: "Understand fast-moving consumer goods distribution at scale.",
    attributes: [
      "Product categories & manufacturing",
      "Production capacity utilization",
      "Distribution network reach",
      "Retail channel presence (Modern vs Traditional)",
    ],
    useCase: "Built for supply chain partnerships and competitive market analysis.",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    iconColor: "#059669",
    iconBg: "#ecfdf5",
    description: "Profile Nigeria's manufacturing landscape from FMCG to industrial production.",
    attributes: [
      "Production capacity & facility data",
      "SON/NAFDAC certification status",
      "Distribution network reach",
      "Raw material sourcing signals",
    ],
    useCase: "Essential for supply chain partnerships, B2B procurement teams, and market entry planning.",
  },
  {
    id: "hospitality",
    name: "Hospitality",
    icon: Map,
    iconColor: "#e11d48",
    iconBg: "#fff1f2",
    description: "Actionable data on hotels, restaurants, and event spaces.",
    attributes: [
      "Star rating & room count",
      "Occupancy & ADR signals",
      "Power reliability (Solar/Grid)",
      "Aggregate guest sentiment",
    ],
    useCase: "Crucial for experiential marketing activations and procurement teams.",
  },
  {
    id: "economy",
    name: "Economy",
    icon: TrendingUp,
    iconColor: "#475569",
    iconBg: "#f1f5f9",
    description: "The macro context layer that powers strategic decisions.",
    attributes: [
      "Sector-level GDP contribution",
      "Inflation trends",
      "Trade balance indicators",
      "Regulatory & policy changes",
    ],
    useCase: "Provides the overarching strategic context for all other sector data.",
  },
];

export default function LandingFeatures() {
  const [activeSectorId, setActiveSectorId] = useState(sectors[0].id);
  const activeSector = sectors.find((s) => s.id === activeSectorId)!;

  return (
    <section
      style={{
        padding: "96px 0",
        background: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle right glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle at top right, #eff6ff 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1, margin: "0 auto", maxWidth: "1280px", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ maxWidth: "640px", margin: "0 auto 64px", textAlign: "center" }}>
          <motion.h2
            style={{ fontSize: "13px", fontWeight: 700, color: "#2563eb", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Sector Depth
          </motion.h2>
          <motion.p
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0f172a", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "20px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Six sectors. Infinite opportunities.
          </motion.p>
          <motion.p
            style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            We go deep rather than wide. Get verified company data, sector-specific attributes, and
            strategic insights for Nigeria&apos;s highest-value industries.
          </motion.p>
        </div>

        {/* Two column layout */}
        <div style={{ display: "flex", gap: "32px", alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* Sector selector */}
          <div style={{ flex: "0 0 280px", display: "flex", flexDirection: "column", gap: "8px" }}>
            {sectors.map((sector, index) => {
              const isActive = sector.id === activeSectorId;
              return (
                <motion.button
                  key={sector.id}
                  onClick={() => setActiveSectorId(sector.id)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    border: isActive ? `1px solid rgba(37,99,235,0.2)` : "1px solid transparent",
                    background: isActive ? "white" : "#f8fafc",
                    boxShadow: isActive ? "0 4px 16px rgba(0,0,0,0.06)" : "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transform: isActive ? "scale(1.02)" : "scale(1)",
                    transition: "all 200ms ease",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 * index }}
                >
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      borderRadius: "8px",
                      background: isActive ? sector.iconBg : "#e2e8f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      transition: "background 200ms ease",
                    }}
                  >
                    <sector.icon
                      style={{
                        width: "18px",
                        height: "18px",
                        color: isActive ? sector.iconColor : "#94a3b8",
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: isActive ? 700 : 500,
                      color: isActive ? "#0f172a" : "#64748b",
                      transition: "color 200ms ease",
                    }}
                  >
                    {sector.name}
                  </span>
                </motion.button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div style={{ flex: "1 1 400px", minHeight: "480px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSector.id}
                style={{
                  background: "white",
                  borderRadius: "24px",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                  border: "1px solid #f1f5f9",
                  padding: "40px 44px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.98 }}
                transition={{ duration: 0.25 }}
              >
                {/* Panel header */}
                <div style={{ display: "flex", alignItems: "center", gap: "18px", marginBottom: "28px" }}>
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      borderRadius: "16px",
                      background: activeSector.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <activeSector.icon style={{ width: "28px", height: "28px", color: activeSector.iconColor }} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", margin: 0 }}>
                      {activeSector.name}
                    </h3>
                    <p style={{ fontSize: "14px", color: "#64748b", margin: "4px 0 0" }}>
                      {activeSector.description}
                    </p>
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px", flex: 1 }}>
                  {/* Attributes */}
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "18px",
                        paddingBottom: "12px",
                        borderBottom: "1px solid #f1f5f9",
                      }}
                    >
                      <Database style={{ width: "16px", height: "16px", color: "#2563eb" }} />
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>
                        Sector-Specific Attributes
                      </span>
                    </div>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
                      {activeSector.attributes.map((attr, i) => (
                        <li key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                          <CheckCircle2 style={{ width: "16px", height: "16px", color: "#2563eb", flexShrink: 0, marginTop: "2px" }} />
                          <span style={{ fontSize: "14px", color: "#334155", lineHeight: 1.5 }}>{attr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Value prop */}
                  <div
                    style={{
                      background: "#f8fafc",
                      borderRadius: "16px",
                      padding: "24px",
                      border: "1px solid #f1f5f9",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "14px" }}>
                      <ShieldCheck style={{ width: "16px", height: "16px", color: "#10b981" }} />
                      <span style={{ fontSize: "13px", fontWeight: 700, color: "#0f172a" }}>
                        The Value Proposition
                      </span>
                    </div>
                    <p style={{ fontSize: "14px", color: "#475569", lineHeight: 1.65, fontStyle: "italic", margin: 0 }}>
                      &ldquo;{activeSector.useCase}&rdquo;
                    </p>
                    <div style={{ marginTop: "24px" }}>
                      <p style={{ fontSize: "10px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "10px" }}>
                        Baseline Data Included
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                        {["CAC Registration", "Decision-Makers", "Size & Year Founded", "Verified Timestamps"].map((badge) => (
                          <span
                            key={badge}
                            style={{
                              background: "white",
                              border: "1px solid #e2e8f0",
                              borderRadius: "6px",
                              padding: "4px 8px",
                              fontSize: "11px",
                              color: "#475569",
                              fontWeight: 500,
                              boxShadow: "0 1px 2px rgba(0,0,0,0.04)",
                            }}
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
