"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";

export default function AdvertisePage() {
  return (
    <div className="company-page">
      <div className="container" style={{ maxWidth: "800px" }}>
        
        <div className="page-header">
          <div className="badge">
            <Icon icon="mdi:bullhorn" width={16} /> Partnerships
          </div>
          <h1 className="title">Advertise With Us</h1>
          <p className="subtitle">
            Position your brand in front of Africa’s most influential decision-makers, executives, and high-net-worth investors.
          </p>
        </div>

        <div className="prose">
          <h3>Why Business360?</h3>
          <p>
            When you advertise on Business360, you bypass the noise of the open web to reach an intensely targeted, highly engaged audience of professionals who shape the regional economy. 
          </p>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">1k+</div>
              <div className="stat-label">Daily Active Readers</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">68%</div>
              <div className="stat-label">C-Suite & Directors</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">5k</div>
              <div className="stat-label">Monthly Impressions</div>
            </div>
          </div>

          <h3>Partnership Opportunities</h3>
          <ul>
            <li><strong>Sponsored Content & Thought Leadership:</strong> Publish bespoke, high-quality editorial pieces authored in collaboration with our in-house strategists.</li>
            <li><strong>Report Sponsorships:</strong> Co-brand our authoritative intelligence reports downloaded by thousands of industry leaders.</li>
            <li><strong>Display Advertising:</strong> Premium ad units seamlessly integrated into our B360TV pipeline, homepage hub, and dedicated verticals.</li>
            <li><strong>Newsletter Inclusions:</strong> Reach our hyper-engaged email subscriber list instantly.</li>
          </ul>

          <div style={{ marginTop: "40px", padding: "32px", background: "#f8fafc", borderRadius: "8px", border: "1px solid #e2e8f0", textAlign: "center" }}>
            <Icon icon="mdi:email-fast" width={40} color="#1a56db" style={{ marginBottom: "16px" }} />
            <h4 style={{ fontSize: "20px", fontWeight: "800", margin: "0 0 12px", color: "#0f172a" }}>Request a Media Kit</h4>
            <p style={{ margin: "0 0 24px", color: "#475569", fontSize: "15px" }}>
              Reach out to our commercial team to access our complete media kit, audience demographics, and pricing sheets.
            </p>
            <a href="mailto:partnerships@thisisbusiness360.com" className="btn-contact">
              Email Our Partnerships Team
            </a>
          </div>
        </div>
      </div>
      
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

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin: 32px 0;
        }
        .stat-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 24px;
          border-radius: 8px;
          text-align: center;
        }
        .stat-value {
          font-size: 36px;
          font-weight: 900;
          color: #1a56db;
          line-height: 1;
          margin-bottom: 8px;
        }
        .stat-label {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .btn-contact {
          display: inline-flex;
          background: #1a56db;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s;
        }
        .btn-contact:hover {
          background: #1e40af;
        }

        @media(max-width: 640px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
