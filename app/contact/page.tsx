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
          {/* General Email */}
          <div className="contact-card">
            <div className="card-icon">
              <Icon icon="mdi:email-outline" width={24} color="#1a56db" />
            </div>
            <h3>Email Us</h3>
            <p>For all general inquiries, editorial questions, and partnership opportunities.</p>
            <a href="mailto:business@theb360group.com">business@theb360group.com</a>
          </div>

          {/* WhatsApp Inquiries */}
          <div className="contact-card">
            <div className="card-icon">
              <Icon icon="mdi:whatsapp" width={24} color="#25D366" />
            </div>
            <h3>WhatsApp Support</h3>
            <p>Interested in collaborating, sponsoring, or have further enquiries? Message us directly.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="https://wa.me/27656946477" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:whatsapp" width={16} /> SA: +27 65 694 6477
              </a>
              <a href="https://wa.me/2348064968725" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:whatsapp" width={16} /> NG: +234 806 496 8725
              </a>
            </div>
          </div>

          {/* HQ */}
          <div className="contact-card" style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            <div className="card-icon" style={{ margin: "0 auto 20px" }}>
              <Icon icon="mdi:map-marker-outline" width={24} color="#1a56db" />
            </div>
            <h3>Headquarters</h3>
            <p>The B360 Group<br/>Lagos, Nigeria</p>
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
          display: inline-flex;
          align-items: center;
          gap: 6px;
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
