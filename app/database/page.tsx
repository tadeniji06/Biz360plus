"use client";

import { useState, useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Building2,
  Users,
  ShoppingCart,
  Briefcase,
  Map,
  TrendingUp,
  ShieldCheck,
  Lock,
  CheckCircle2,
} from "lucide-react";

const sectors = [
  { icon: Building2, name: "Financial Services", color: "bg-blue-50 text-blue-600" },
  { icon: Users, name: "Technology", color: "bg-indigo-50 text-indigo-600" },
  { icon: ShoppingCart, name: "Retail", color: "bg-orange-50 text-orange-600" },
  { icon: Briefcase, name: "Manufacturing", color: "bg-emerald-50 text-emerald-600" },
  { icon: Map, name: "Hospitality", color: "bg-rose-50 text-rose-600" },
  { icon: TrendingUp, name: "Economy", color: "bg-slate-100 text-slate-700" },
];

type FormState = { status: "idle" | "submitting" | "success" | "error"; message: string };

export default function DatabasePage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    role: "",
  });
  const [formState, setFormState] = useState<FormState>({ status: "idle", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: "submitting", message: "" });
    // Simulate API
    await new Promise((r) => setTimeout(r, 1200));
    setFormState({
      status: "success",
      message: "Thank you! Our team will review your request and reach out within 24 hours.",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner */}
      <div
        style={{
          background: "#0f172a",
          paddingTop: "80px",
          paddingBottom: "128px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "25%",
              width: "500px",
              height: "500px",
              background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: "25%",
              width: "400px",
              height: "400px",
              background: "radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
        </div>

        <div style={{ margin: "0 auto", maxWidth: "1280px", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              borderRadius: "9999px",
              background: "rgba(30,58,138,0.6)",
              padding: "6px 16px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#93c5fd",
              border: "1px solid rgba(59,130,246,0.3)",
              marginBottom: "24px",
            }}
          >
            <Lock style={{ width: "14px", height: "14px" }} />
            Members-Only Access
          </motion.div>

          <motion.h1
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              marginBottom: "24px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Nigeria&apos;s B2B Business<br />
            <span style={{ color: "#60a5fa" }}>Intelligence Database</span>
          </motion.h1>

          <motion.p
            style={{
              fontSize: "1.125rem",
              color: "#cbd5e1",
              maxWidth: "672px",
              margin: "0 auto",
              lineHeight: 1.6,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Access verified company profiles across 6 high-value sectors. Designed for sales teams,
            investors, and strategy professionals operating in Nigeria.
          </motion.p>

          {/* Sector Pills */}
          <motion.div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
              marginTop: "40px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {sectors.map((s) => (
              <div
                key={s.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "9999px",
                  padding: "8px 16px",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <s.icon style={{ width: "16px", height: "16px", color: "#60a5fa" }} />
                {s.name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{ margin: "0 auto", maxWidth: "1280px", padding: "0 24px", marginTop: "-64px", paddingBottom: "96px", position: "relative", zIndex: 10 }}>
        <div style={{ display: "flex", gap: "48px", alignItems: "flex-start", flexWrap: "wrap" }}>

          {/* Left — What you get */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            style={{ flex: "1 1 400px" }}
          >
            <div style={{ background: "white", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", border: "1px solid #f1f5f9", padding: "32px" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>What you&apos;ll access</h2>
              <p style={{ color: "#64748b", marginBottom: "32px" }}>
                Every company profile includes baseline data plus sector-specific intelligence attributes.
              </p>

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "20px" }}>
                {[
                  { icon: ShieldCheck, title: "Verified Company Profiles", desc: "CAC registration, founding year, company size, and key decision-makers — all timestamped." },
                  { icon: Building2, title: "Sector-Specific Attributes", desc: "License data, capacity signals, funding history, and regulatory status per sector." },
                  { icon: Users, title: "Decision-Maker Contacts", desc: "Accurate contact information for C-suite and buying-power holders." },
                  { icon: TrendingUp, title: "Economy Context Layer", desc: "Macro-level data to give your intelligence the broader strategic picture." },
                ].map((item) => (
                  <li key={item.title} style={{ display: "flex", gap: "16px" }}>
                    <div style={{ flexShrink: 0, width: "40px", height: "40px", borderRadius: "12px", background: "#eff6ff", color: "#2563eb", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <item.icon style={{ width: "20px", height: "20px" }} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, color: "#0f172a", marginBottom: "4px" }}>{item.title}</p>
                      <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: "32px", paddingTop: "32px", borderTop: "1px solid #f1f5f9" }}>
                <p style={{ fontSize: "12px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>Access plans from</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ fontSize: "2.25rem", fontWeight: 700, color: "#0f172a" }}>₦75,000</span>
                  <span style={{ fontSize: "14px", color: "#64748b" }}>/month</span>
                </div>
                <p style={{ fontSize: "14px", color: "#64748b", marginTop: "8px" }}>Enterprise plans available for large teams.</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Sign-up Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            style={{ flex: "1 1 400px" }}
          >
            <div style={{ background: "white", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.08)", border: "1px solid #f1f5f9", padding: "32px" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>Request Access</h2>
              <p style={{ color: "#64748b", marginBottom: "32px" }}>
                Fill in your details and our team will reach out within 24 hours.
              </p>

              <AnimatePresence mode="wait">
                {formState.status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: "center", padding: "40px 0" }}
                  >
                    <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "#ecfdf5", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
                      <CheckCircle2 style={{ width: "32px", height: "32px" }} />
                    </div>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#0f172a", marginBottom: "12px" }}>Request Received!</h3>
                    <p style={{ color: "#64748b" }}>{formState.message}</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    style={{ display: "flex", flexDirection: "column", gap: "20px" }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                      <div style={{ flex: "1 1 150px" }}>
                        <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#334155", marginBottom: "6px" }} htmlFor="db-firstName">
                          First Name <span style={{ color: "#ef4444" }}>*</span>
                        </label>
                        <input
                          id="db-firstName"
                          name="firstName"
                          type="text"
                          required
                          value={form.firstName}
                          onChange={handleChange}
                          placeholder="John"
                          style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                        />
                      </div>
                      <div style={{ flex: "1 1 150px" }}>
                        <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#334155", marginBottom: "6px" }} htmlFor="db-lastName">
                          Last Name <span style={{ color: "#ef4444" }}>*</span>
                        </label>
                        <input
                          id="db-lastName"
                          name="lastName"
                          type="text"
                          required
                          value={form.lastName}
                          onChange={handleChange}
                          placeholder="Doe"
                          style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#334155", marginBottom: "6px" }} htmlFor="db-email">
                        Work Email <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <input
                        id="db-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#334155", marginBottom: "6px" }} htmlFor="db-company">
                        Company <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <input
                        id="db-company"
                        name="company"
                        type="text"
                        required
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#334155", marginBottom: "6px" }} htmlFor="db-phone">
                        Phone Number <span style={{ color: "#ef4444" }}>*</span>
                      </label>
                      <input
                        id="db-phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+234 800 000 0000"
                        style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "14px", fontWeight: 600, color: "#334155", marginBottom: "6px" }} htmlFor="db-role">
                        Your Role
                      </label>
                      <select
                        id="db-role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "14px", outline: "none", boxSizing: "border-box", background: "white", color: "#334155" }}
                      >
                        <option value="">Select your role…</option>
                        <option value="sales">Sales / BD</option>
                        <option value="strategy">Strategy / Research</option>
                        <option value="investor">Investor / VC</option>
                        <option value="marketing">Marketing</option>
                        <option value="executive">Executive / C-Suite</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={formState.status === "submitting"}
                      style={{
                        width: "100%",
                        background: "#2563eb",
                        color: "white",
                        fontWeight: 600,
                        borderRadius: "12px",
                        padding: "16px",
                        fontSize: "14px",
                        border: "none",
                        cursor: formState.status === "submitting" ? "not-allowed" : "pointer",
                        opacity: formState.status === "submitting" ? 0.6 : 1,
                        marginTop: "8px",
                      }}
                    >
                      {formState.status === "submitting" ? "Submitting…" : "Request Database Access"}
                    </button>

                    <p style={{ textAlign: "center", fontSize: "12px", color: "#94a3b8", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", margin: 0 }}>
                      <Lock style={{ width: "12px", height: "12px" }} />
                      Your information is secure and never shared.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
