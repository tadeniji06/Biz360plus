"use client";

import Link from "next/link";
import { Icon } from "@iconify/react";
import { VERTICALS } from "@/lib/verticals";

export default function Footer() {
  const year = new Date().getFullYear();
  const activeVerticals = VERTICALS.filter((v) => v.status === "active");
  const comingSoonVerticals = VERTICALS.filter(
    (v) => v.status === "coming-soon"
  );

  return (
    <footer className="footer">
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

            <div style={{ marginTop: "32px" }}>
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
                onSubmit={(e) => e.preventDefault()}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    padding: "10px 14px",
                    borderRadius: "4px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    background: "rgba(255,255,255,0.07)",
                    color: "white",
                    fontSize: "13px",
                    outline: "none",
                    fontFamily: "var(--font-sans)",
                  }}
                />
                <button
                  type="submit"
                  className="btn-subscribe"
                  style={{ justifyContent: "center", borderRadius: "4px" }}
                >
                  Subscribe Free
                </button>
              </form>
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
