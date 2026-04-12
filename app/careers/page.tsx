"use client";

import { Icon } from "@iconify/react";

export default function CareersPage() {
  return (
    <div className="company-page">
      <div className="container" style={{ maxWidth: "800px" }}>
        
        <div className="page-header">
          <div className="badge">
            <Icon icon="mdi:briefcase-outline" width={16} /> Join The Team
          </div>
          <h1 className="title">Careers at Business360</h1>
          <p className="subtitle">
            Help us map the future of modern business, technology, and finance across Africa. 
          </p>
        </div>

        <div className="prose">
          <h3>Work With Us</h3>
          <p>
            At Business360, we are building a media and intelligence platform without compromise. We empower our team of editors, analysts, engineers, and creatives to produce the kind of deep dive reporting and data visualization that moves markets and shapes policy.
          </p>
          <p>
            We offer competitive compensation, fully remote flexibility, and a high-performance culture that values rigorous truth-seeking over rapid clickbait.
          </p>
        </div>

        <div className="empty-state">
          <Icon icon="mdi:magnify" width={48} color="#cbd5e1" />
          <h4>No open roles at the moment</h4>
          <p>We're currently fully staffed! However, we are always on the lookout for exceptional talent, from investigative journalists to senior UI/UX engineers.</p>
          
          <div className="pitch-box">
            <span>Think you belong here anyway?</span>
            <a href="mailto:careers@thisisbusiness360.com">Pitch yourself to careers@thisisbusiness360.com</a>
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
          margin-bottom: 48px;
        }
        .prose h3 {
          font-size: 24px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 16px;
        }
        .prose p {
          margin-bottom: 20px;
        }

        .empty-state {
          background: #f8fafc;
          border: 1px dashed #cbd5e1;
          border-radius: 12px;
          padding: 48px 32px;
          text-align: center;
        }

        .empty-state h4 {
          font-size: 20px;
          font-weight: 800;
          color: #0f172a;
          margin: 16px 0 8px;
        }

        .empty-state p {
          color: #64748b;
          font-size: 15px;
          margin: 0 0 24px;
          line-height: 1.6;
        }

        .pitch-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 16px;
          border-radius: 8px;
          display: inline-flex;
          flex-direction: column;
          gap: 8px;
        }

        .pitch-box span {
          font-weight: 700;
          color: #334155;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .pitch-box a {
          color: #1a56db;
          font-weight: 600;
          text-decoration: none;
        }

        .pitch-box a:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}
