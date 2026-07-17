import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { REPORTS } from "@/lib/reports";

export default function LatestReportSection() {
  const latestReport = REPORTS[0];

  if (!latestReport) return null;

  return (
    <section style={{ padding: "64px 0", background: "var(--color-gray-50)" }}>
      <div className="container">
        <div className="latest-report-wrapper">
          
          {/* Header */}
          <div style={{ marginBottom: "32px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px" }}>
                <span style={{ 
                  display: "inline-block", 
                  width: "8px", 
                  height: "8px", 
                  borderRadius: "50%", 
                  background: "var(--color-primary)",
                  boxShadow: "0 0 0 4px rgba(26,86,219,0.15)"
                }} />
                <span style={{ fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--color-primary)" }}>
                  Featured Intelligence
                </span>
              </div>
              <h2 className="section-title" style={{ marginBottom: 0 }}>Latest Research Report</h2>
            </div>
            
            <Link 
              href="/reports" 
              style={{ 
                fontSize: "13px", 
                fontWeight: 600, 
                color: "var(--color-primary)", 
                display: "flex", 
                alignItems: "center", 
                gap: "4px",
                textDecoration: "none"
              }}
            >
              View all reports <Icon icon="mdi:arrow-right" />
            </Link>
          </div>

          {/* Main Card */}
          <div className="latest-report-card">
            
            {/* Image Side */}
            <div className="latest-report-image">
              <Image
                src={latestReport.coverImage}
                alt={latestReport.title}
                fill
                className="cover"
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 30vw"
              />
              <div 
                className="latest-report-accent" 
                style={{ backgroundColor: latestReport.accentColor }} 
              />
            </div>

            {/* Content Side */}
            <div className="latest-report-content">
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
                <span className="latest-report-tag">{latestReport.category}</span>
                <span className="latest-report-tag">{latestReport.publishedDate}</span>
                <span className="latest-report-tag">{latestReport.pages} Pages</span>
              </div>

              <h3 className="latest-report-title">{latestReport.title}</h3>
              <p className="latest-report-subtitle">{latestReport.subtitle}</p>
              
              <p className="latest-report-desc">
                {latestReport.description}
              </p>

              <div className="latest-report-insights">
                <h4 style={{ fontSize: "13px", fontWeight: 700, color: "var(--color-heading)", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  Key Insights
                </h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {latestReport.keyInsights.slice(0, 3).map((insight, idx) => (
                    <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: "var(--color-text-muted)", lineHeight: 1.5 }}>
                      <Icon icon="mdi:check-circle" width={18} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: "2px" }} />
                      <span>{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ marginTop: "32px" }}>
                <Link 
                  href={`/reports/${latestReport.slug}`} 
                  className="latest-report-btn"
                >
                  <Icon icon="mdi:file-download-outline" width={20} />
                  Access Full Report
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>

      <style>{`
        .latest-report-card {
          display: flex;
          background: var(--color-white);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0,0,0,0.03);
        }
        .latest-report-image {
          position: relative;
          width: 30%;
          min-height: 350px;
          flex-shrink: 0;
          background: var(--color-gray-200);
        }
        .latest-report-accent {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 6px;
          z-index: 2;
        }
        .latest-report-content {
          padding: 48px;
          flex: 1;
        }
        .latest-report-tag {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--color-gray-600);
          background: var(--color-gray-100);
          padding: 4px 10px;
          border-radius: 4px;
        }
        .latest-report-title {
          font-family: var(--font-serif);
          font-size: 28px;
          font-weight: 700;
          color: var(--color-heading);
          line-height: 1.2;
          margin-bottom: 8px;
        }
        .latest-report-subtitle {
          font-size: 15px;
          font-weight: 500;
          color: var(--color-primary);
          margin-bottom: 24px;
        }
        .latest-report-desc {
          font-size: 15px;
          color: var(--color-text);
          line-height: 1.7;
          margin-bottom: 32px;
        }
        .latest-report-insights {
          background: var(--color-gray-50);
          border: 1px solid var(--color-border);
          border-radius: 12px;
          padding: 24px;
        }
        .latest-report-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: var(--color-primary);
          color: white;
          font-family: var(--font-sans);
          font-size: 15px;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.2s;
        }
        .latest-report-btn:hover {
          background: var(--color-primary-dark);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(26,86,219,0.25);
        }

        @media (max-width: 900px) {
          .latest-report-card {
            flex-direction: column;
          }
          .latest-report-image {
            width: 100%;
            height: 300px;
            min-height: auto;
          }
          .latest-report-accent {
            top: auto;
            bottom: 0;
            left: 0;
            right: 0;
            height: 6px;
            width: 100%;
          }
          .latest-report-content {
            padding: 32px 24px;
          }
          .latest-report-title {
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}
