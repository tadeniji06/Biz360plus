'use client';

import { useActionState, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Report } from '@/lib/reports';
import { requestReport, ReportRequestState } from '@/app/actions/reportRequest';

interface Props {
  report: Report;
}

const initialState: ReportRequestState = { status: 'idle', message: '' };

function DownloadModal({ report, onClose }: { report: Report; onClose: () => void }) {
  const boundAction = requestReport.bind(null, report.title, report.slug);
  const [state, formAction, pending] = useActionState(boundAction, initialState);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="modal-backdrop"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.93, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          className="modal-box"
        >
          {/* Header */}
          <div className="modal-header">
            <button onClick={onClose} className="modal-close" aria-label="Close">
              <Icon icon="mdi:close" width={18} />
            </button>
            <div className="modal-badge">
              <Icon icon="mdi:shield-check" width={12} />
              Free Access
            </div>
            <h2 className="modal-title">Access Your Free Report</h2>
            <p className="modal-subtitle">
              Just a few quick details and your report is ready to download instantly.
            </p>
          </div>

          {/* Body */}
          <div className="modal-body">
            {state.status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="modal-success"
              >
                <div className="modal-success-icon">
                  <Icon icon="mdi:check-circle" width={32} color="#16a34a" />
                </div>
                <h3 className="modal-success-title">You&apos;re All Set! 🎉</h3>
                <p className="modal-success-msg">Your report is ready. Click below to download it now.</p>
                <a href={report.pdfFile} download className="btn-download-primary">
                  <Icon icon="mdi:download" width={16} />
                  Download Now
                </a>
                <button onClick={onClose} className="btn-close-text">Close</button>
              </motion.div>
            ) : (
              <form action={formAction} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="form-field">
                  <label htmlFor="modal-name" className="form-label">
                    Full Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    id="modal-name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Amara Okafor"
                    className="form-input"
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="modal-email" className="form-label">
                    Email Address <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input
                    id="modal-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="form-input"
                  />
                </div>

                <div className="form-row-2">
                  <div className="form-field">
                    <label htmlFor="modal-phone" className="form-label">Phone Number</label>
                    <input
                      id="modal-phone"
                      name="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      className="form-input"
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="modal-country" className="form-label">
                      Country <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input
                      id="modal-country"
                      name="country"
                      type="text"
                      required
                      placeholder="Nigeria"
                      className="form-input"
                    />
                  </div>
                </div>

                {state.status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="form-error"
                  >
                    <Icon icon="mdi:alert-circle" width={16} />
                    {state.message}
                  </motion.div>
                )}

                <button type="submit" disabled={pending} className="btn-submit">
                  {pending ? (
                    <>
                      <Icon icon="mdi:loading" width={16} className="spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <Icon icon="mdi:download" width={16} />
                      Access Report Now
                    </>
                  )}
                </button>
                <p className="form-privacy">
                  <Icon icon="mdi:lock" width={11} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                  Your details are private and will never be shared.
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function ReportDetailClient({ report }: Props) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <DownloadModal report={report} onClose={() => setShowModal(false)} />}

      {/* ── Hero ── */}
      <div className="report-hero">
        <div className="report-hero-bg-grid" aria-hidden />
        <div className="container">
          {/* Breadcrumb */}
          <nav className="report-breadcrumb">
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)' }}>Home</Link>
            <span>›</span>
            <Link href="/reports" style={{ color: 'rgba(255,255,255,0.55)' }}>Reports</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.85)' }}>{report.category}</span>
          </nav>

          <div className="report-hero-grid">
            {/* Left — info */}
            <motion.div
              className="report-hero-info"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="report-meta-row">
                <span className="report-category-badge" style={{ background: report.accentColor }}>
                  {report.category}
                </span>
                <span className="report-meta-text">{report.publishedDate}</span>
                <span className="report-meta-text">
                  <Icon icon="mdi:file-document" width={13} />
                  {report.pages} pages
                </span>
              </div>

              <h1 className="report-hero-title">{report.title}</h1>
              <p className="report-hero-subtitle">{report.subtitle}</p>

              <div className="report-tags">
                {report.tags.map((tag) => (
                  <span key={tag} className="report-tag">{tag}</span>
                ))}
              </div>

              <motion.button
                onClick={() => setShowModal(true)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="btn-hero-download"
              >
                <Icon icon="mdi:download" width={18} />
                Download Free Report
              </motion.button>
              <p className="report-free-note">
                <Icon icon="mdi:lock" width={12} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                Free — quick form required
              </p>
            </motion.div>

            {/* Right — cover image */}
            <motion.div
              className="report-hero-cover-wrap"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <img
                src={report.coverImage.src}
                alt={report.title}
                className="report-hero-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="container">
        <div className="report-content-grid">

          {/* Main */}
          <main>
            {/* About */}
            <section className="report-section">
              <h2 className="report-section-title" style={{ '--accent': report.accentColor } as React.CSSProperties}>
                About This Report
              </h2>
              <p className="report-body-text">{report.description}</p>
            </section>

            {/* Key Insights */}
            <section className="report-section">
              <h2 className="report-section-title" style={{ '--accent': report.accentColor } as React.CSSProperties}>
                Key Insights
              </h2>
              <div className="insights-list">
                {report.keyInsights.map((insight, i) => (
                  <motion.div
                    key={i}
                    className="insight-card"
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <div className="insight-icon" style={{ background: report.accentColor + '18' }}>
                      <Icon icon="mdi:chart-line" width={14} color={report.accentColor} />
                    </div>
                    <p className="insight-text">{insight}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Bottom CTA */}
            <div className="report-cta-block">
              <Icon icon="mdi:file-chart" width={40} color="#3b82f6" />
              <h3 className="report-cta-title">Ready to read the full report?</h3>
              <p className="report-cta-subtitle">It&apos;s free. Just tell us a little about yourself.</p>
              <motion.button
                onClick={() => setShowModal(true)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="btn-cta-download"
              >
                <Icon icon="mdi:download" width={16} />
                Get Free Report
              </motion.button>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="report-sidebar">
            <div className="report-details-card">
              <div className="report-details-header">Report Details</div>
              {[
                { icon: 'mdi:calendar', label: 'Published', value: report.publishedDate },
                { icon: 'mdi:file-document', label: 'Pages', value: `${report.pages} pages` },
                { icon: 'mdi:tag', label: 'Category', value: report.category },
                { icon: 'mdi:office-building', label: 'Publisher', value: 'B360Intel' },
                { icon: 'mdi:currency-usd-off', label: 'Price', value: 'Free' },
              ].map((item, i, arr) => (
                <div key={item.label} className="report-detail-row" style={{ borderBottom: i < arr.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                  <Icon icon={item.icon} width={16} color="#6b7280" />
                  <div>
                    <div className="report-detail-label">{item.label}</div>
                    <div className="report-detail-value">{item.value}</div>
                  </div>
                </div>
              ))}
              <div style={{ padding: '16px 20px' }}>
                <motion.button
                  onClick={() => setShowModal(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-sidebar-download"
                >
                  <Icon icon="mdi:download" width={16} />
                  Download Free
                </motion.button>
              </div>
            </div>

            <Link href="/reports" className="report-back-link">
              <Icon icon="mdi:arrow-left" width={16} />
              All Intelligence Reports
            </Link>
          </aside>
        </div>
      </div>

      <style>{`
        /* ── Modal ── */
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.72);
          backdrop-filter: blur(6px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          overflow-y: auto;
        }
        .modal-box {
          background: white;
          border-radius: 12px;
          width: 100%;
          max-width: 520px;
          overflow: hidden;
          box-shadow: 0 32px 80px rgba(0,0,0,0.35);
          margin: auto;
        }
        .modal-header {
          background: linear-gradient(135deg, #0f172a 0%, #1a56db 100%);
          padding: 24px 24px 20px;
          position: relative;
        }
        .modal-close {
          position: absolute;
          top: 14px;
          right: 14px;
          background: rgba(255,255,255,0.15);
          border: none;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }
        .modal-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.12);
          border-radius: 100px;
          padding: 4px 12px;
          margin-bottom: 12px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.8);
          text-transform: uppercase;
        }
        .modal-title {
          color: white;
          font-size: 20px;
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.25;
          margin: 0;
          padding-right: 40px;
        }
        .modal-subtitle {
          color: rgba(255,255,255,0.65);
          font-size: 13px;
          margin: 6px 0 0;
          line-height: 1.5;
        }
        .modal-body {
          padding: 24px;
        }
        .modal-success {
          text-align: center;
          padding: 8px 0;
        }
        .modal-success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #dcfce7;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
        }
        .modal-success-title {
          font-size: 20px;
          font-weight: 800;
          color: #0a0a0a;
          margin-bottom: 8px;
        }
        .modal-success-msg {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
          margin-bottom: 24px;
        }
        .btn-download-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #0f172a;
          color: white;
          padding: 12px 28px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          margin-bottom: 12px;
        }
        .btn-close-text {
          display: block;
          background: none;
          border: none;
          font-size: 13px;
          color: #6b7280;
          cursor: pointer;
          text-decoration: underline;
          margin: 4px auto 0;
          font-family: inherit;
        }

        /* ── Form ── */
        .form-field { display: flex; flex-direction: column; }
        .form-label {
          font-size: 12px;
          font-weight: 700;
          color: #374151;
          margin-bottom: 6px;
          letter-spacing: 0.03em;
        }
        .form-input {
          padding: 11px 14px;
          border-radius: 6px;
          border: 1.5px solid #d1d5db;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s;
          width: 100%;
          box-sizing: border-box;
        }
        .form-input:focus { border-color: #1a56db; }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        .form-error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 6px;
          padding: 10px 14px;
          font-size: 13px;
          color: #dc2626;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .btn-submit {
          background: linear-gradient(135deg, #1a56db, #1344b5);
          color: white;
          border: none;
          border-radius: 6px;
          padding: 14px 24px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: inherit;
          letter-spacing: 0.01em;
          transition: opacity 0.2s;
        }
        .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }
        .form-privacy {
          font-size: 11px;
          color: #9ca3af;
          text-align: center;
          margin: 0;
        }

        /* ── Hero ── */
        .report-hero {
          background: linear-gradient(135deg, #0a0a0a 0%, #0f172a 100%);
          padding: 48px 0 0;
          position: relative;
          overflow: hidden;
        }
        .report-hero-bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(26,86,219,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,86,219,0.05) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
        .report-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: rgba(255,255,255,0.45);
          margin-bottom: 32px;
          flex-wrap: wrap;
        }
        .report-hero-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 48px;
          align-items: end;
        }
        .report-hero-info { padding-bottom: 48px; }
        .report-meta-row {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .report-category-badge {
          color: white;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 3px;
        }
        .report-meta-text {
          color: rgba(255,255,255,0.45);
          font-size: 12px;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .report-hero-title {
          font-size: clamp(24px, 4vw, 44px);
          font-weight: 900;
          color: white;
          letter-spacing: -0.03em;
          line-height: 1.1;
          margin-bottom: 14px;
        }
        .report-hero-subtitle {
          font-size: 15px;
          color: rgba(255,255,255,0.5);
          line-height: 1.6;
          margin-bottom: 28px;
          font-style: italic;
        }
        .report-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }
        .report-tag {
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.55);
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 4px 12px;
          border-radius: 100px;
        }
        .btn-hero-download {
          background: linear-gradient(135deg, #1a56db, #1344b5);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 15px 28px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: inherit;
          box-shadow: 0 8px 32px rgba(26,86,219,0.4);
          margin-bottom: 14px;
          width: 100%;
          max-width: 320px;
          justify-content: center;
        }
        .report-free-note {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          margin: 0;
        }
        .report-hero-cover-wrap {
          align-self: flex-end;
          border-radius: 8px 8px 0 0;
          overflow: hidden;
          box-shadow: 0 -24px 80px rgba(0,0,0,0.5);
        }
        .report-hero-cover {
          width: 100%;
          display: block;
        }

        /* ── Content ── */
        .report-content-grid {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 56px;
          padding: 56px 0 80px;
        }
        .report-section { margin-bottom: 48px; }
        .report-section-title {
          font-size: 20px;
          font-weight: 800;
          color: #0a0a0a;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
          padding-bottom: 14px;
          border-bottom: 2px solid #f3f4f6;
          position: relative;
        }
        .report-section-title::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 40px;
          height: 2px;
          background: var(--accent, #1a56db);
        }
        .report-body-text {
          font-size: 16px;
          color: #374151;
          line-height: 1.8;
        }
        .insights-list { display: flex; flex-direction: column; gap: 12px; }
        .insight-card {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 14px 18px;
        }
        .insight-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .insight-text { margin: 0; font-size: 14px; color: #1f2937; line-height: 1.6; }
        .report-cta-block {
          background: linear-gradient(135deg, #0f172a 0%, #1a56db22 100%);
          border: 1px solid #1a56db33;
          border-radius: 12px;
          padding: 40px 32px;
          text-align: center;
        }
        .report-cta-title {
          color: white;
          font-size: 20px;
          font-weight: 800;
          margin: 16px 0 8px;
        }
        .report-cta-subtitle {
          color: rgba(255,255,255,0.55);
          font-size: 14px;
          margin-bottom: 24px;
        }
        .btn-cta-download {
          background: linear-gradient(135deg, #1a56db, #1344b5);
          color: white;
          border: none;
          border-radius: 8px;
          padding: 13px 28px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: inherit;
          box-shadow: 0 8px 32px rgba(26,86,219,0.4);
        }

        /* ── Sidebar ── */
        .report-sidebar { position: relative; }
        .report-details-card {
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 20px;
          position: sticky;
          top: 88px;
        }
        .report-details-header {
          background: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
          padding: 14px 20px;
          font-size: 11px;
          font-weight: 800;
          color: #374151;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .report-detail-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 20px;
        }
        .report-detail-label { font-size: 11px; color: #9ca3af; font-weight: 600; }
        .report-detail-value { font-size: 13px; color: #111827; font-weight: 600; }
        .btn-sidebar-download {
          width: 100%;
          background: linear-gradient(135deg, #1a56db, #1344b5);
          color: white;
          border: none;
          border-radius: 6px;
          padding: 12px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: inherit;
        }
        .report-back-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #1a56db;
          font-weight: 600;
          text-decoration: none;
        }

        /* ── Animations ── */
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spin { animation: spin 1s linear infinite; }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .report-hero { padding: 32px 0 0; }
          .report-breadcrumb { margin-bottom: 20px; font-size: 11px; }

          /* Stack hero: cover image on top, info below */
          .report-hero-grid {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .report-hero-info {
            order: 2;
            padding: 24px 0 40px;
          }
          .report-hero-cover-wrap {
            order: 1;
            border-radius: 8px;
            max-height: 280px;
            overflow: hidden;
            box-shadow: none;
            margin: 0 -24px;
          }
          .report-hero-cover {
            width: 100%;
            height: 280px;
            object-fit: cover;
            object-position: top;
          }
          .report-hero-title { font-size: 26px; margin-bottom: 10px; }
          .report-hero-subtitle { font-size: 14px; margin-bottom: 20px; }
          .report-tags { margin-bottom: 24px; }
          .btn-hero-download { max-width: 100%; width: 100%; padding: 14px 20px; font-size: 14px; }

          /* Content */
          .report-content-grid {
            grid-template-columns: 1fr;
            gap: 0;
            padding: 40px 0 60px;
          }
          /* Sidebar moves between insights and the CTA block on mobile */
          .report-sidebar {
            order: -1;
            margin-bottom: 40px;
          }
          .report-details-card { position: static; }
          .report-body-text { font-size: 15px; }
          .insight-card { padding: 12px 14px; gap: 12px; }
          .insight-text { font-size: 13px; }
          .report-cta-block { padding: 28px 20px; }
          .report-cta-title { font-size: 18px; }

          /* Modal */
          .modal-backdrop { align-items: flex-end; padding: 0; }
          .modal-box {
            border-radius: 16px 16px 0 0;
            max-width: 100%;
            max-height: 92vh;
            overflow-y: auto;
          }
          .modal-title { font-size: 17px; }
          .modal-body { padding: 20px 16px; }
          .form-row-2 { grid-template-columns: 1fr; }
        }

        @media (max-width: 480px) {
          .report-hero-title { font-size: 22px; }
          .report-meta-row { gap: 8px; }
          .report-section-title { font-size: 18px; }
          .report-cta-block { padding: 24px 16px; border-radius: 8px; }
        }
      `}</style>
    </>
  );
}
