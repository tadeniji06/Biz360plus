"use client";

import { Icon } from "@iconify/react";

export default function ContactPage() {
  return (
    <div className="company-page">
      <div className="container" style={{ maxWidth: "800px" }}>
        
        <div className="page-header">
          <div className="badge">
            <Icon icon="mdi:email-outline" width={16} /> Get In Touch
          </div>
          <h1 className="title">Contact Us</h1>
          <p className="subtitle">
            Whether you have a news tip, sponsorship inquiry, or need technical assistance, our team is always ready to connect.
          </p>
        </div>

        <div className="contact-grid">
          {/* General Inquiries */}
          <div className="contact-card">
            <div className="card-icon">
              <Icon icon="mdi:information-variant" width={24} color="#1a56db" />
            </div>
            <h3>General Inquiries</h3>
            <p>For generalized questions regarding Business360, our platform, or accessing reports.</p>
            <a href="mailto:hello@thisisbusiness360.com">hello@thisisbusiness360.com</a>
          </div>

          {/* Editorial Team */}
          <div className="contact-card">
            <div className="card-icon">
              <Icon icon="mdi:newspaper-variant-outline" width={24} color="#1a56db" />
            </div>
            <h3>Editorial Desk</h3>
            <p>Pitch an op-ed, report a news tip, or flag an error to our journalists and editors.</p>
            <a href="mailto:editor@thisisbusiness360.com">editor@thisisbusiness360.com</a>
          </div>

          {/* Partnerships */}
          <div className="contact-card">
            <div className="card-icon">
              <Icon icon="mdi:handshake-outline" width={24} color="#1a56db" />
            </div>
            <h3>Partnerships & Ads</h3>
            <p>Contact our commercial team to learn about sponsored insights and display advertising.</p>
            <a href="mailto:partnerships@thisisbusiness360.com">partnerships@thisisbusiness360.com</a>
          </div>

          {/* HQ */}
          <div className="contact-card">
            <div className="card-icon">
              <Icon icon="mdi:map-marker-outline" width={24} color="#1a56db" />
            </div>
            <h3>Headquarters</h3>
            <p>Business360 Intelligence<br/>Lagos, Nigeria</p>
            <span className="info-text">Meetings by appointment only.</span>
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
        
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .contact-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 32px;
          border-radius: 12px;
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .contact-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.05);
        }

        .card-icon {
          width: 48px;
          height: 48px;
          background: #eff6ff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .contact-card h3 {
          font-size: 20px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 12px;
        }

        .contact-card p {
          font-size: 15px;
          color: #475569;
          line-height: 1.6;
          margin: 0 0 16px;
        }

        .contact-card a {
          display: inline-block;
          font-weight: 600;
          color: #1a56db;
          text-decoration: none;
          font-size: 15px;
        }
        
        .contact-card a:hover {
          text-decoration: underline;
        }

        .info-text {
          font-size: 13px;
          color: #94a3b8;
          font-weight: 500;
        }

        @media(max-width: 640px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}
