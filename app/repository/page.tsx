"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  X,
  FileText,
  Lock,
  CheckCircle2,
  ExternalLink,
  Search,
  Filter,
} from "lucide-react";

interface Report {
  id: string;
  title: string;
  publisher: string;
  category: string;
  year: string;
  pages: string;
  description: string;
  fileSize: string;
  tag: string;
  tagColor: string;
}

const reports: Report[] = [
  {
    id: "r1",
    title: "Nigeria Fintech Ecosystem Report 2024",
    publisher: "EFInA",
    category: "Financial Services",
    year: "2024",
    pages: "84",
    description:
      "Comprehensive landscape analysis of Nigeria's fintech sector including investment flows, regulatory developments, and adoption rates.",
    fileSize: "4.2 MB",
    tag: "Featured",
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "r2",
    title: "Nigeria Manufacturing Sector Report 2024",
    publisher: "Stanbic IBTC",
    category: "Manufacturing",
    year: "2024",
    pages: "56",
    description:
      "Analysis of Nigeria's manufacturing sector including production capacity, SON/NAFDAC compliance, industrial output, and distribution network depth.",
    fileSize: "3.1 MB",
    tag: "New",
    tagColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "r3",
    title: "Hospitality & Tourism Recovery Index — Nigeria",
    publisher: "FAAN / NBS",
    category: "Hospitality",
    year: "2023",
    pages: "42",
    description:
      "Post-pandemic recovery metrics for Nigeria's hospitality sector including hotel occupancy, ADR trends, and inbound tourism data.",
    fileSize: "2.8 MB",
    tag: "Popular",
    tagColor: "bg-amber-100 text-amber-700",
  },
  {
    id: "r4",
    title: "Nigeria Technology Sector Report",
    publisher: "NITDA",
    category: "Technology",
    year: "2024",
    pages: "98",
    description:
      "Official data on Nigeria's digital economy, ICT sector contribution to GDP, and NITDA-registered startups by state.",
    fileSize: "5.6 MB",
    tag: "Official",
    tagColor: "bg-purple-100 text-purple-700",
  },
  {
    id: "r5",
    title: "FMCG Distribution & Retail Audit — Lagos",
    publisher: "Nielsen Nigeria",
    category: "Manufacturing",
    year: "2023",
    pages: "64",
    description:
      "Deep-dive into FMCG distribution networks, channel breakdown, and shelf penetration data across Lagos markets.",
    fileSize: "3.9 MB",
    tag: "Research",
    tagColor: "bg-rose-100 text-rose-700",
  },
  {
    id: "r6",
    title: "Nigeria Economic Outlook 2025",
    publisher: "World Bank / IMF",
    category: "Economy",
    year: "2025",
    pages: "112",
    description:
      "Macroeconomic projections, FX outlook, inflation forecasts, and sector-level growth estimates for Nigeria 2025.",
    fileSize: "6.1 MB",
    tag: "Featured",
    tagColor: "bg-blue-100 text-blue-700",
  },
];

const categories = ["All", "Economy", "Financial Services", "Technology", "Manufacturing", "Retail", "Hospitality"];

type ModalState = { open: false } | { open: true; report: Report };
type DownloadState = "idle" | "submitting" | "success";

export default function RepositoryPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [modal, setModal] = useState<ModalState>({ open: false });
  const [downloadState, setDownloadState] = useState<DownloadState>("idle");
  const [reqForm, setReqForm] = useState({ name: "", email: "", phone: "" });

  const filtered = reports.filter((r) => {
    const matchCat = activeCategory === "All" || r.category === activeCategory;
    const matchSearch =
      !search ||
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.publisher.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const openModal = (report: Report) => {
    setModal({ open: true, report });
    setDownloadState("idle");
    setReqForm({ name: "", email: "", phone: "" });
  };

  const closeModal = () => setModal({ open: false });

  const handleDownloadRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    setDownloadState("submitting");
    await new Promise((r) => setTimeout(r, 1200));
    setDownloadState("success");
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc" }}>
      {/* Header */}
      <div
        style={{
          background: "#0f172a",
          paddingTop: "80px",
          paddingBottom: "96px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }}>
          <div
            style={{
              position: "absolute",
              top: 0,
              right: "33%",
              width: "600px",
              height: "600px",
              background: "radial-gradient(circle, rgba(79,70,229,0.1) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />
        </div>
        <div style={{ margin: "0 auto", maxWidth: "1280px", padding: "0 24px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(49,46,129,0.6)",
              border: "1px solid rgba(99,102,241,0.3)",
              borderRadius: "9999px",
              padding: "6px 16px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#a5b4fc",
              marginBottom: "24px",
            }}
          >
            <FileText style={{ width: "14px", height: "14px" }} />
            Third-Party Intelligence Reports
          </motion.div>

          <motion.h1
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 700,
              color: "white",
              letterSpacing: "-0.02em",
              marginBottom: "16px",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            The <span style={{ color: "#818cf8" }}>Repository</span>
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
            transition={{ delay: 0.2 }}
          >
            Curated third-party research reports from leading institutions and publishers. Browse freely
            — download after a quick details submission.
          </motion.p>
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{ position: "sticky", top: "60px", zIndex: 50, background: "white", borderBottom: "1px solid #e2e8f0", boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)" }}>
        <div style={{ margin: "0 auto", maxWidth: "1280px", padding: "16px 24px", display: "flex", flexWrap: "wrap", gap: "16px", alignItems: "center", justifyContent: "space-between" }}>
          {/* Search */}
          <div style={{ position: "relative", width: "100%", maxWidth: "300px" }}>
            <Search style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", width: "16px", height: "16px", color: "#94a3b8" }} />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search reports…"
              style={{ width: "100%", padding: "10px 16px 10px 36px", borderRadius: "12px", border: "1px solid #e2e8f0", fontSize: "14px", outline: "none", boxSizing: "border-box" }}
            />
          </div>

          {/* Category Pills */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", overflowX: "auto", paddingBottom: "4px" }}>
            <Filter style={{ width: "16px", height: "16px", color: "#94a3b8", flexShrink: 0 }} />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  flexShrink: 0,
                  borderRadius: "9999px",
                  padding: "6px 14px",
                  fontSize: "12px",
                  fontWeight: 600,
                  border: "none",
                  cursor: "pointer",
                  background: activeCategory === cat ? "#0f172a" : "#f1f5f9",
                  color: activeCategory === cat ? "white" : "#475569",
                  transition: "all 150ms ease"
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reports Grid */}
      <div style={{ margin: "0 auto", maxWidth: "1280px", padding: "48px 24px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "96px 0", color: "#94a3b8" }}>
            <FileText style={{ width: "48px", height: "48px", margin: "0 auto 16px", opacity: 0.3 }} />
            <p style={{ fontSize: "1.125rem", fontWeight: 500 }}>No reports found.</p>
            <p style={{ fontSize: "14px", marginTop: "4px" }}>Try a different search or category.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "24px" }}>
            {filtered.map((report, i) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                style={{ background: "white", borderRadius: "16px", border: "1px solid #e2e8f0", boxShadow: "0 1px 3px rgba(0,0,0,0.05)", display: "flex", flexDirection: "column", overflow: "hidden" }}
              >
                <div style={{ padding: "24px", flex: 1 }}>
                  {/* Category + Tag */}
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {report.category}
                    </span>
                    <span className={report.tagColor} style={{ marginLeft: "auto", borderRadius: "9999px", padding: "2px 10px", fontSize: "12px", fontWeight: 700 }}>
                      {report.tag}
                    </span>
                  </div>

                  <h3 style={{ fontWeight: 700, color: "#0f172a", fontSize: "1rem", lineHeight: 1.4, marginBottom: "8px", transition: "color 150ms ease" }}>
                    {report.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "#64748b", lineHeight: 1.6, marginBottom: "16px" }}>
                    {report.description}
                  </p>

                  {/* Meta */}
                  <div style={{ display: "flex", alignItems: "center", gap: "16px", fontSize: "12px", color: "#94a3b8" }}>
                    <span>{report.publisher}</span>
                    <span>·</span>
                    <span>{report.year}</span>
                    <span>·</span>
                    <span>{report.pages} pages</span>
                    <span>·</span>
                    <span>{report.fileSize}</span>
                  </div>
                </div>

                <div style={{ padding: "0 24px 24px" }}>
                  <button
                    onClick={() => openModal(report)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "8px",
                      borderRadius: "12px",
                      background: "#0f172a",
                      color: "white",
                      fontSize: "14px",
                      fontWeight: 600,
                      padding: "12px",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 150ms ease"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "#2563eb")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "#0f172a")}
                  >
                    <Download style={{ width: "16px", height: "16px" }} />
                    Download Report
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Download Modal */}
      <AnimatePresence>
        {modal.open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[998] bg-black/60 backdrop-blur-sm"
              onClick={closeModal}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              className="fixed inset-0 z-[999] flex items-center justify-center p-4"
            >
              <div style={{ background: "white", borderRadius: "24px", boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)", width: "100%", maxWidth: "448px", overflow: "hidden" }}>
                {/* Modal Header */}
                <div style={{ background: "#0f172a", padding: "24px", position: "relative" }}>
                  <button
                    onClick={closeModal}
                    style={{ position: "absolute", top: "16px", right: "16px", width: "32px", height: "32px", borderRadius: "50%", background: "rgba(255,255,255,0.1)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", border: "none", cursor: "pointer", transition: "background 150ms ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
                    aria-label="Close"
                  >
                    <X style={{ width: "16px", height: "16px" }} />
                  </button>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                    <FileText style={{ width: "20px", height: "20px", color: "#818cf8" }} />
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#818cf8", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {modal.report.category}
                    </span>
                  </div>
                  <h3 style={{ color: "white", fontWeight: 700, fontSize: "18px", lineHeight: 1.4, paddingRight: "32px", marginBottom: "4px" }}>
                    {modal.report.title}
                  </h3>
                  <p style={{ color: "#94a3b8", fontSize: "12px" }}>
                    {modal.report.publisher} · {modal.report.year} · {modal.report.fileSize}
                  </p>
                </div>

                {/* Modal Body */}
                <div style={{ padding: "32px" }}>
                  <AnimatePresence mode="wait">
                    {downloadState === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ textAlign: "center", padding: "24px 0" }}
                      >
                        <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "#ecfdf5", color: "#10b981", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                          <CheckCircle2 style={{ width: "28px", height: "28px" }} />
                        </div>
                        <h4 style={{ fontSize: "20px", fontWeight: 700, color: "#0f172a", marginBottom: "8px" }}>
                          Download Ready!
                        </h4>
                        <p style={{ color: "#64748b", fontSize: "14px", marginBottom: "24px" }}>
                          Your download link has been sent to your email.
                        </p>
                        <button
                          onClick={closeModal}
                          style={{ fontSize: "14px", fontWeight: 600, color: "#2563eb", background: "none", border: "none", cursor: "pointer" }}
                          onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                          onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                        >
                          Back to Repository
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "14px", color: "#1e3a8a", background: "#eff6ff", padding: "16px", borderRadius: "12px", marginBottom: "24px", lineHeight: 1.5 }}>
                          <Lock style={{ width: "20px", height: "20px", color: "#3b82f6", flexShrink: 0, marginTop: "2px" }} />
                          <p>
                            Please provide your details to download this report. Your information is
                            kept strictly confidential.
                          </p>
                        </div>

                        <form onSubmit={handleDownloadRequest} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                          <div>
                            <label
                              style={{ display: "block", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#64748b", marginBottom: "8px" }}
                              htmlFor="repo-name"
                            >
                              Full Name <span style={{ color: "#ef4444" }}>*</span>
                            </label>
                            <input
                              id="repo-name"
                              type="text"
                              required
                              value={reqForm.name}
                              onChange={(e) =>
                                setReqForm((p) => ({ ...p, name: e.target.value }))
                              }
                              placeholder="John Doe"
                              style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", background: "#f8fafc", fontSize: "15px", color: "#0f172a", outline: "none", boxSizing: "border-box", transition: "all 0.2s ease" }}
                              onFocus={(e) => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(59, 130, 246, 0.1)"; }}
                              onBlur={(e) => { e.currentTarget.style.borderColor = "#cbd5e1"; e.currentTarget.style.background = "#f8fafc"; e.currentTarget.style.boxShadow = "none"; }}
                            />
                          </div>

                          <div>
                            <label
                              style={{ display: "block", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#64748b", marginBottom: "8px" }}
                              htmlFor="repo-email"
                            >
                              Email Address <span style={{ color: "#ef4444" }}>*</span>
                            </label>
                            <input
                              id="repo-email"
                              type="email"
                              required
                              value={reqForm.email}
                              onChange={(e) =>
                                setReqForm((p) => ({ ...p, email: e.target.value }))
                              }
                              placeholder="john@company.com"
                              style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", background: "#f8fafc", fontSize: "15px", color: "#0f172a", outline: "none", boxSizing: "border-box", transition: "all 0.2s ease" }}
                              onFocus={(e) => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(59, 130, 246, 0.1)"; }}
                              onBlur={(e) => { e.currentTarget.style.borderColor = "#cbd5e1"; e.currentTarget.style.background = "#f8fafc"; e.currentTarget.style.boxShadow = "none"; }}
                            />
                          </div>

                          <div>
                            <label
                              style={{ display: "block", fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#64748b", marginBottom: "8px" }}
                              htmlFor="repo-phone"
                            >
                              Phone Number <span style={{ color: "#ef4444" }}>*</span>
                            </label>
                            <input
                              id="repo-phone"
                              type="tel"
                              required
                              value={reqForm.phone}
                              onChange={(e) =>
                                setReqForm((p) => ({ ...p, phone: e.target.value }))
                              }
                              placeholder="+234 800 000 0000"
                              style={{ width: "100%", padding: "14px 16px", borderRadius: "12px", border: "1px solid #cbd5e1", background: "#f8fafc", fontSize: "15px", color: "#0f172a", outline: "none", boxSizing: "border-box", transition: "all 0.2s ease" }}
                              onFocus={(e) => { e.currentTarget.style.borderColor = "#3b82f6"; e.currentTarget.style.background = "#ffffff"; e.currentTarget.style.boxShadow = "0 0 0 4px rgba(59, 130, 246, 0.1)"; }}
                              onBlur={(e) => { e.currentTarget.style.borderColor = "#cbd5e1"; e.currentTarget.style.background = "#f8fafc"; e.currentTarget.style.boxShadow = "none"; }}
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={downloadState === "submitting"}
                            style={{
                              width: "100%",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              gap: "8px",
                              background: "#0f172a",
                              color: "white",
                              fontWeight: 600,
                              borderRadius: "12px",
                              padding: "14px",
                              fontSize: "14px",
                              marginTop: "8px",
                              border: "none",
                              cursor: downloadState === "submitting" ? "not-allowed" : "pointer",
                              opacity: downloadState === "submitting" ? 0.6 : 1,
                              transition: "background 150ms ease"
                            }}
                            onMouseEnter={(e) => !downloadState && (e.currentTarget.style.background = "#2563eb")}
                            onMouseLeave={(e) => !downloadState && (e.currentTarget.style.background = "#0f172a")}
                          >
                            <Download style={{ width: "16px", height: "16px" }} />
                            {downloadState === "submitting"
                              ? "Processing…"
                              : "Get Download Link"}
                          </button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
