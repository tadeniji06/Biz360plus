"use client";

import { motion } from "framer-motion";
import { ArrowRight, Search, BarChart3, Users, Building2 } from "lucide-react";
import Link from "next/link";

export default function LandingHero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#ffffff",
        paddingTop: "96px",
        paddingBottom: "120px",
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          backgroundImage:
            "linear-gradient(to right, #f0f0f0 1px, transparent 1px), linear-gradient(to bottom, #f0f0f0 1px, transparent 1px)",
          backgroundSize: "6rem 4rem",
        }}
      />
      {/* Radial gradient overlay */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background:
            "radial-gradient(circle 500px at 50% 200px, #eff6ff, transparent)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          margin: "0 auto",
          maxWidth: "1280px",
          padding: "0 24px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "64px",
          flexWrap: "wrap",
        }}
      >
        {/* Left column */}
        <div style={{ flex: "1 1 400px", maxWidth: "600px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                borderRadius: "9999px",
                background: "#eff6ff",
                padding: "4px 14px",
                fontSize: "13px",
                fontWeight: 600,
                color: "#2563eb",
                border: "1px solid rgba(37,99,235,0.2)",
                marginBottom: "24px",
              }}
            >
              Sector-Focused B2B Intelligence
            </span>
          </motion.div>

          <motion.h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.75rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              color: "#0f172a",
              marginBottom: "24px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Find, Understand and Reach Nigerian Companies and Key Decision-makers.
          </motion.h1>

          <motion.p
            style={{
              fontSize: "1.1rem",
              lineHeight: 1.7,
              color: "#475569",
              marginBottom: "32px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            The sector-focused B2B business intelligence database built for
            Nigeria&apos;s highest-value industries. Access verified company
            profiles, key decision-maker contacts, and deep sector
            intelligence—updated regularly by our research team.
          </motion.p>

          <motion.div
            style={{ display: "flex", alignItems: "center", gap: "24px", flexWrap: "wrap" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link
              href="/database"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "#2563eb",
                color: "white",
                padding: "14px 24px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
                transition: "background 150ms ease",
                boxShadow: "0 4px 14px rgba(37,99,235,0.35)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
            >
              Request Access
              <ArrowRight style={{ width: "16px", height: "16px" }} />
            </Link>
            <Link
              href="/insights"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "#0f172a",
                textDecoration: "none",
              }}
            >
              Read our Insights →
            </Link>
          </motion.div>

          <motion.div
            style={{
              marginTop: "40px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div style={{ display: "flex", marginLeft: "-8px" }}>
              {["F", "S", "B", "D"].map((l) => (
                <div
                  key={l}
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#dbeafe",
                    border: "2px solid white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "-8px",
                    fontSize: "11px",
                    fontWeight: 700,
                    color: "#1d4ed8",
                  }}
                >
                  {l}
                </div>
              ))}
            </div>
            <p style={{ fontSize: "13px", color: "#64748b", fontWeight: 500 }}>
              Built for sales, strategy, and investment teams.
            </p>
          </motion.div>
        </div>

        {/* Right column — Interactive Graphic */}
        <motion.div
          style={{
            flex: "1 1 340px",
            maxWidth: "520px",
            position: "relative",
            perspective: "1000px",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.3 }}
        >
          <motion.div
            style={{
              borderRadius: "16px",
              background: "white",
              boxShadow: "0 20px 50px rgba(8,112,184,0.1)",
              border: "1px solid rgba(15,23,42,0.05)",
              padding: "8px",
              overflow: "hidden",
            }}
            whileHover={{ rotateY: -3, rotateX: 2, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div
              style={{
                borderRadius: "12px",
                border: "1px solid #f1f5f9",
                background: "#f8fafc",
                padding: "16px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Scanning line */}
              <motion.div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: "rgba(59,130,246,0.3)",
                  filter: "blur(1px)",
                  zIndex: 10,
                  pointerEvents: "none",
                }}
                animate={{ y: [0, 400, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              />

              {/* Fake Search Bar */}
              <div
                style={{
                  background: "white",
                  borderRadius: "8px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                  border: "1px solid #e2e8f0",
                  padding: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "20px",
                  position: "relative",
                  zIndex: 20,
                }}
              >
                <Search style={{ width: "18px", height: "18px", color: "#94a3b8" }} />
                <motion.div
                  style={{
                    height: "14px",
                    background: "#f1f5f9",
                    borderRadius: "4px",
                    width: "33%",
                    transformOrigin: "left",
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                <div style={{ marginLeft: "auto", display: "flex", gap: "8px" }}>
                  <div
                    style={{
                      height: "26px",
                      width: "60px",
                      background: "#eff6ff",
                      borderRadius: "4px",
                      fontSize: "11px",
                      color: "#2563eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 500,
                    }}
                  >
                    Filter
                  </div>
                  <div
                    style={{
                      height: "26px",
                      width: "60px",
                      background: "#2563eb",
                      borderRadius: "4px",
                      fontSize: "11px",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: 500,
                      boxShadow: "0 2px 6px rgba(37,99,235,0.3)",
                    }}
                  >
                    Search
                  </div>
                </div>
              </div>

              {/* Data rows */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", position: "relative", zIndex: 20 }}>
                {[
                  { Icon: Building2, color: "#3b82f6", bg: "#eff6ff", w: "75%" },
                  { Icon: Users, color: "#f97316", bg: "#fff7ed", w: "50%" },
                  { Icon: BarChart3, color: "#65a30d", bg: "#f7fee7", w: "83%" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    style={{
                      background: "white",
                      padding: "14px",
                      borderRadius: "8px",
                      border: "1px solid #f1f5f9",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                      cursor: "pointer",
                    }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 100 }}
                  >
                    <div
                      style={{
                        padding: "8px",
                        borderRadius: "8px",
                        background: item.bg,
                        flexShrink: 0,
                      }}
                    >
                      <item.Icon style={{ width: "18px", height: "18px", color: item.color }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          height: "10px",
                          background: "#e2e8f0",
                          borderRadius: "4px",
                          width: "30%",
                          marginBottom: "10px",
                        }}
                      />
                      <div
                        style={{
                          height: "6px",
                          background: "#f1f5f9",
                          borderRadius: "4px",
                          overflow: "hidden",
                        }}
                      >
                        <motion.div
                          style={{ height: "100%", background: "#cbd5e1", width: item.w }}
                          initial={{ x: "-100%" }}
                          animate={{ x: 0 }}
                          transition={{ duration: 1, delay: 0.8 + i * 0.2 }}
                        />
                      </div>
                    </div>
                    <div
                      style={{
                        height: "24px",
                        width: "44px",
                        background: "#f8fafc",
                        border: "1px solid #e2e8f0",
                        borderRadius: "4px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "10px",
                        fontWeight: 500,
                        color: "#94a3b8",
                      }}
                    >
                      View
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Floating — Live */}
          <motion.div
            style={{
              position: "absolute",
              right: "-24px",
              top: "25%",
              background: "white",
              padding: "10px 14px",
              borderRadius: "10px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              border: "1px solid #f1f5f9",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              zIndex: 30,
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            <motion.div
              style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }}
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <span style={{ fontSize: "11px", fontWeight: 600, color: "#334155", whiteSpace: "nowrap" }}>
              Live Availability
            </span>
          </motion.div>

          {/* Floating — Verified */}
          <motion.div
            style={{
              position: "absolute",
              left: "-24px",
              bottom: "25%",
              background: "white",
              padding: "10px 14px",
              borderRadius: "10px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              border: "1px solid #f1f5f9",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              zIndex: 30,
            }}
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span style={{ color: "#2563eb", fontWeight: 700, fontSize: "13px" }}>99%</span>
            </div>
            <div>
              <p style={{ fontSize: "11px", fontWeight: 600, color: "#334155", margin: 0 }}>Verified Data</p>
              <p style={{ fontSize: "10px", color: "#94a3b8", margin: 0 }}>Updated today</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
