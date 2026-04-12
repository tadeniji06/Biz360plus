"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function AboutPage() {
  return (
    <div className="company-page">
      <div className="container" style={{ maxWidth: "800px" }}>
        {/* Header */}
        <div className="page-header">
          <div className="badge">
            <Icon icon="mdi:information" width={16} /> Our Story
          </div>
          <h1 className="title">About Business360</h1>
          <p className="subtitle">
            Africa’s premier intelligence platform mapping the intersection of technology, finance, hospitality, and commerce.
          </p>
        </div>

        {/* Content */}
        <div className="prose">
          <h3>Who We Are</h3>
          <p>
            Founded with a singular mission—to demystify the rapidly changing economic landscape across the African continent—<strong>Business360</strong> is the trusted daily brief for over 50,000 executives, investors, and policymakers.
          </p>
          <p>
            Our dedicated team of analysts and journalists operate beyond traditional headlines, diving deep into data models, cross-border trade policies, and early-stage startup metrics to deliver unparalleled clarity in a noisy world.
          </p>

          <h3>Our Verticals</h3>
          <p>
            We structure our insights through dedicated verticals focused on the engines of tomorrow's economy:
          </p>
          <ul>
            <li><strong>Fintech & Finance:</strong> Exploring the digital infrastructure powering cross-border trade.</li>
            <li><strong>Commerce & Retail:</strong> Analyzing B2B and B2C dynamics in emerging markets.</li>
            <li><strong>Hospitality:</strong> Documenting the digital transformation of African tourism.</li>
            <li><strong>Enterprise Tech:</strong> Tracking AI, cloud, and digital transformation initiatives.</li>
          </ul>

          <h3>Our Mission</h3>
          <p>
            We exist to provide actionable, uncompromising, and forward-looking business intelligence that empowers leaders to make confident, strategic decisions. When you read Business360, you're not just reading the news; you're seeing the matrix.
          </p>

          <div style={{ marginTop: "40px", padding: "24px", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0" }}>
            <h4 style={{ fontSize: "16px", marginBottom: "8px" }}>Get in Touch</h4>
            <p style={{ margin: 0, fontSize: "14px", color: "#64748b" }}>
              Interested in partnering or learning more? <Link href="/contact" style={{ color: "#1a56db", fontWeight: 600 }}>Contact our team</Link>.
            </p>
          </div>
        </div>
      </div>
      
      {/* Styles */}
      <style jsx>{`
        .company-page {
          padding: 80px 0 120px;
          background-color: #ffffff;
          min-height: calc(100vh - 200px);
        }
        .page-header {
          text-align: center;
          margin-bottom: 60px;
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #eff6ff;
          color: #1d4ed8;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 24px;
        }
        .title {
          font-size: clamp(36px, 5vw, 52px);
          font-weight: 900;
          color: #0f172a;
          letter-spacing: -0.03em;
          margin-bottom: 20px;
        }
        .subtitle {
          font-size: 18px;
          color: #475569;
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }
        .prose {
          font-size: 16px;
          line-height: 1.8;
          color: #334155;
        }
        .prose h3 {
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          margin: 40px 0 16px;
        }
        .prose p {
          margin-bottom: 20px;
        }
        .prose ul {
          padding-left: 24px;
          margin-bottom: 24px;
        }
        .prose li {
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  );
}
