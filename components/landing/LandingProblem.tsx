"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Frown, PhoneOff } from "lucide-react";
import Link from "next/link";

const cards = [
  {
    Icon: Clock,
    bg: "#fef2f2",
    color: "#dc2626",
    title: "Hours Wasted",
    desc: "Teams waste countless hours piecing together information from government registries, LinkedIn, news sites, and word of mouth.",
    delay: 0.1,
  },
  {
    Icon: AlertTriangle,
    bg: "#fff7ed",
    color: "#ea580c",
    title: "Outdated Information",
    desc: "Nigerian business contact data changes often. General-purpose providers offer broad lists but data goes stale within months without constant re-verification.",
    delay: 0.2,
  },
  {
    Icon: PhoneOff,
    bg: "#fffbeb",
    color: "#d97706",
    title: "Missing Decision-Makers",
    desc: "Sales and BD teams struggle to find accurate, current contact information for the actual decision-makers with buying power.",
    delay: 0.3,
  },
  {
    Icon: Frown,
    bg: "#f8fafc",
    color: "#475569",
    title: "Shallow Coverage",
    desc: "Existing global tools lack sector-specific depth. You get a contact name, but no visibility into license status, capacity, or actual market footprint.",
    delay: 0.4,
  },
];

export default function LandingProblem() {
  return (
    <section
      style={{
        padding: "96px 0",
        background: "#f8fafc",
        borderTop: "1px solid #e2e8f0",
        borderBottom: "1px solid #e2e8f0",
      }}
    >
      <div style={{ margin: "0 auto", maxWidth: "1280px", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ maxWidth: "640px", margin: "0 auto 64px", textAlign: "center" }}>
          <motion.h2
            style={{ fontSize: "13px", fontWeight: 700, color: "#ea580c", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.06em" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            The Problem
          </motion.h2>
          <motion.p
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 800, color: "#0f172a", lineHeight: 1.15, letterSpacing: "-0.02em", marginBottom: "20px" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Fragmented data costs you deals and time
          </motion.p>
          <motion.p
            style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.7 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Finding reliable business data on Nigerian companies is slow, inconsistent, and
            produces data that goes stale quickly.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "24px",
          }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              style={{
                background: "white",
                padding: "28px",
                borderRadius: "20px",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                border: "1px solid #f1f5f9",
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: card.delay }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  background: card.bg,
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                <card.Icon style={{ width: "22px", height: "22px", color: card.color }} />
              </div>
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                {card.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.65 }}>{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution banner */}
        <motion.div
          style={{
            marginTop: "60px",
            background: "#0f172a",
            borderRadius: "20px",
            padding: "48px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "32px",
            flexWrap: "wrap",
            boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div style={{ maxWidth: "600px" }}>
            <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "white", marginBottom: "12px" }}>
              The Solution: Deep Sector Intelligence
            </h3>
            <p style={{ color: "#94a3b8", lineHeight: 1.6, fontSize: "15px" }}>
              We turn scattered business intelligence into one searchable, verified, and actionable
              system. Replace fragmented lists with one trusted platform built for scale.
            </p>
          </div>
          <Link
            href="/database"
            style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "14px 28px",
              background: "white",
              color: "#0f172a",
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "14px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
              transition: "background 150ms ease",
            }}
          >
            Request Access
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
