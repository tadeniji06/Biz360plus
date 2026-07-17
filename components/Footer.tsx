"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { VERTICALS } from "@/lib/verticals";

export default function Footer() {
  const year = new Date().getFullYear();
  const activeVerticals = VERTICALS.filter((v) => v.status === "active");
  const comingSoonVerticals = VERTICALS.filter(
    (v) => v.status === "coming-soon"
  );

  const [email, setEmail] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("submitting");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 4000);
    }, 1000);
  };

  return (
    <footer className="footer" style={{ position: "relative" }}>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-logo-text">
              Business<span>360</span>
            </div>
            <p className="footer-tagline">
              Your all-in-one business intelligence platform covering
              hospitality, tech, retail, finance, marketing, companies, news,
              and more across Africa and beyond.
            </p>
            <div className="footer-socials">
              <a
                href="https://twitter.com/business360ng"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Twitter"
              >
                <Icon icon="mdi:twitter" />
              </a>
              <a
                href="https://linkedin.com/company/business360ng"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" />
              </a>
              <a
                href="https://facebook.com/business360ng"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Facebook"
              >
                <Icon icon="mdi:facebook" />
              </a>
              <a
                href="https://instagram.com/business360ng"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label="Instagram"
              >
                <Icon icon="mdi:instagram" />
              </a>
            </div>
          </div>

          {/* Active Verticals */}
          <div>
            <div className="footer-col-title">Active Verticals</div>
            <ul className="footer-links">
              <li>
                <Link href="/reports" style={{ color: "var(--color-primary-light)", fontWeight: 600 }}>
                  Intelligence Reports
                </Link>
              </li>
              {activeVerticals.map((v) => (
                <li key={v.slug}>
                  <Link href={`/${v.slug}`}>{v.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coming Soon Verticals */}
          <div>
            <div className="footer-col-title">Coming Soon</div>
            <ul className="footer-links">
              {comingSoonVerticals.map((v) => (
                <li key={v.slug}>
                  <span
                    style={{
                      color: "rgba(255,255,255,0.35)",
                      fontSize: "14px",
                    }}
                  >
                    {v.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Newsletter */}
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/advertise">Advertise</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
            </ul>

            <div style={{ marginTop: "32px", position: "relative" }}>
              <div className="footer-col-title">Newsletter</div>
              <p
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: "12px",
                }}
              >
                Get top business insights delivered to your inbox.
              </p>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div style={{ position: "relative" }}>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{
                      width: "100%",
                      padding: "12px 14px",
                      borderRadius: "6px",
                      border: `1px solid ${isFocused ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.15)"}`,
                      background: isFocused ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.07)",
                      color: "white",
                      fontSize: "13px",
                      outline: "none",
                      fontFamily: "var(--font-sans)",
                      transition: "all 0.3s ease",
                      boxShadow: isFocused ? "0 0 0 3px rgba(255,255,255,0.05)" : "none",
                    }}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn-subscribe bg-amber-50 text-black"
                  disabled={status === "submitting"}
                  style={{ 
                    justifyContent: "center", 
                    borderRadius: "6px",
                    padding: "12px",
                    transition: "all 0.3s ease",
                    opacity: status === "submitting" ? 0.7 : 1,
                    transform: isFocused ? "translateY(-1px)" : "none",
                    cursor: status === "submitting" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "submitting" ? "Subscribing..." : "Subscribe"}
                </button>
              </form>

              {/* Success Feedback Popup */}
              {status === "success" && (
                <div style={{
                  position: "absolute",
                  bottom: "100%",
                  left: 0,
                  right: 0,
                  marginBottom: "12px",
                  padding: "12px 16px",
                  background: "#10b981", // Emerald 500
                  color: "white",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  animation: "slideUpFade 0.4s ease forwards",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  zIndex: 10,
                }}>
                  <Icon icon="mdi:check-circle" style={{ fontSize: "18px" }} />
                  <span>Success! You're on the list.</span>
                  
                  <style jsx>{`
                    @keyframes slideUpFade {
                      from { opacity: 0; transform: translateY(10px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                  `}</style>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {year} Business360. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Use</Link>
            <Link href="/cookie-policy">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
