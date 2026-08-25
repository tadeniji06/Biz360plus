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
    category: "FMCG",
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

const categories = ["All", "Financial Services", "Manufacturing", "Hospitality", "Technology", "FMCG", "Economy"];

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
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-slate-900 pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-indigo-900/60 border border-indigo-500/30 rounded-full px-4 py-1.5 text-sm font-semibold text-indigo-300 mb-6"
          >
            <FileText className="h-3.5 w-3.5" />
            Third-Party Intelligence Reports
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl font-bold text-white tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            The <span className="text-indigo-400">Repository</span>
          </motion.h1>

          <motion.p
            className="text-slate-300 text-lg max-w-2xl mx-auto"
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
      <div className="sticky top-[60px] z-50 bg-white border-b border-slate-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search reports…"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1">
            <Filter className="h-4 w-4 text-slate-400 flex-shrink-0" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Reports Grid */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-slate-400">
            <FileText className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">No reports found.</p>
            <p className="text-sm mt-1">Try a different search or category.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((report, i) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all group flex flex-col"
              >
                <div className="p-6 flex-1">
                  {/* Category + Tag */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      {report.category}
                    </span>
                    <span className={`ml-auto rounded-full px-2.5 py-0.5 text-xs font-bold ${report.tagColor}`}>
                      {report.tag}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base leading-snug mb-2 group-hover:text-blue-600 transition-colors">
                    {report.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {report.description}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span>{report.publisher}</span>
                    <span>·</span>
                    <span>{report.year}</span>
                    <span>·</span>
                    <span>{report.pages} pages</span>
                    <span>·</span>
                    <span>{report.fileSize}</span>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button
                    onClick={() => openModal(report)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white text-sm font-semibold py-3 hover:bg-blue-600 transition-colors group/btn"
                  >
                    <Download className="h-4 w-4 group-hover/btn:translate-y-0.5 transition-transform" />
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
              <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden">
                {/* Modal Header */}
                <div className="bg-slate-900 p-6 relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <div className="flex items-center gap-3 mb-1">
                    <FileText className="h-5 w-5 text-indigo-400" />
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                      {modal.report.category}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg leading-snug pr-8">
                    {modal.report.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-1">
                    {modal.report.publisher} · {modal.report.year} · {modal.report.fileSize}
                  </p>
                </div>

                {/* Modal Body */}
                <div className="p-6">
                  <AnimatePresence mode="wait">
                    {downloadState === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-6"
                      >
                        <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle2 className="h-7 w-7" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 mb-2">
                          Download Ready!
                        </h4>
                        <p className="text-slate-500 text-sm mb-6">
                          Your download link has been sent to your email.
                        </p>
                        <button
                          onClick={closeModal}
                          className="text-sm font-semibold text-blue-600 hover:underline"
                        >
                          Back to Repository
                        </button>
                      </motion.div>
                    ) : (
                      <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <div className="flex items-center gap-2 text-slate-600 text-sm mb-5">
                          <Lock className="h-4 w-4 text-slate-400 flex-shrink-0" />
                          <p>
                            Please provide your details to download this report. Your information is
                            kept confidential.
                          </p>
                        </div>

                        <form onSubmit={handleDownloadRequest} className="space-y-4">
                          <div>
                            <label
                              className="block text-sm font-semibold text-slate-700 mb-1.5"
                              htmlFor="repo-name"
                            >
                              Full Name <span className="text-red-500">*</span>
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
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            />
                          </div>

                          <div>
                            <label
                              className="block text-sm font-semibold text-slate-700 mb-1.5"
                              htmlFor="repo-email"
                            >
                              Email Address <span className="text-red-500">*</span>
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
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            />
                          </div>

                          <div>
                            <label
                              className="block text-sm font-semibold text-slate-700 mb-1.5"
                              htmlFor="repo-phone"
                            >
                              Phone Number <span className="text-red-500">*</span>
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
                              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                            />
                          </div>

                          <button
                            type="submit"
                            disabled={downloadState === "submitting"}
                            className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-semibold rounded-xl py-3.5 text-sm hover:bg-blue-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed mt-2"
                          >
                            <Download className="h-4 w-4" />
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
