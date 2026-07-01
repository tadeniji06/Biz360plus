"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "@iconify/react";
import type { StaticImageData } from "next/image";
import { buma, crm, hrm, leadgen } from "@/assets";

interface AdConfig {
  image: StaticImageData;
  url: string;
  name: string;
  tagline: string;
  ctaText: string;
  accent: string;
}

const ADS: AdConfig[] = [
  {
    image: buma,
    url: "https://mybuma.com",
    name: "MyBuma",
    tagline: "Your all-in-one business platform. Manage everything, from one place.",
    ctaText: "Try MyBuma Free",
    accent: "#1a56db",
  },
  {
    image: crm,
    url: "https://crm360online.com",
    name: "CRM360",
    tagline: "Smarter customer relationships. Grow faster with CRM360.",
    ctaText: "Get CRM360",
    accent: "#0ea5e9",
  },
  {
    image: hrm,
    url: "https://thehrm360.com",
    name: "HRM360",
    tagline: "Next-gen human resource management for modern businesses.",
    ctaText: "Explore HRM360",
    accent: "#7c3aed",
  },
  {
    image: leadgen,
    url: "https://theleadgen360.com",
    name: "LeadGen360",
    tagline: "Turn prospects into loyal customers with LeadGen360.",
    ctaText: "Start Generating Leads",
    accent: "#059669",
  },
];

const RESHOW_INTERVAL_MS = 2 * 60 * 1000; // 2 minutes

// ─── Component ────────────────────────────────────────────────────────────────
export default function ArticleAdPopup() {
  // Start with null so the server renders NOTHING → no hydration mismatch
  const [ad, setAd] = useState<AdConfig | null>(null);
  const [visible, setVisible] = useState(false);
  const reshowTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = useCallback(() => {
    setVisible(false);
    // Re-show after 2 minutes with a fresh random ad
    if (reshowTimer.current) clearTimeout(reshowTimer.current);
    reshowTimer.current = setTimeout(() => {
      setAd(ADS[Math.floor(Math.random() * ADS.length)]);
      setVisible(true);
    }, RESHOW_INTERVAL_MS);
  }, []);

  // Show immediately after mount — client-only so no SSR mismatch
  useEffect(() => {
    setAd(ADS[Math.floor(Math.random() * ADS.length)]);
    setVisible(true);
    return () => {
      if (reshowTimer.current) clearTimeout(reshowTimer.current);
    };
  }, []);

  // Nothing rendered on server
  if (!ad) return null;

  return (
    <AnimatePresence>
      {visible && (
        // Overlay — inline styles so Framer Motion + CSS class order never break it
        <motion.div
          key="ad-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={dismiss}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.72)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
            padding: "16px",
            cursor: "pointer",
          }}
        >
          {/* Card — stopPropagation so clicking the ad doesn't dismiss */}
          <motion.div
            key="ad-card"
            role="dialog"
            aria-modal="true"
            aria-label={`Sponsored: ${ad.name}`}
            initial={{ opacity: 0, scale: 0.80 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(680px, 100%)",
              background: "#ffffff",
              borderRadius: "18px",
              boxShadow: "0 40px 100px rgba(0,0,0,0.45), 0 12px 32px rgba(0,0,0,0.25)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              cursor: "default",
            }}
          >
            {/* Header */}
            <div className="ad-popup-header">
              <span className="ad-popup-sponsored-label">
                <Icon icon="mdi:shield-check" width={12} />
                Sponsored
              </span>
              <button
                onClick={dismiss}
                className="ad-popup-close"
                aria-label="Close advertisement"
              >
                <Icon icon="mdi:close" width={18} />
              </button>
            </div>

            {/* Image — 3:1 ratio */}
            <a
              href={ad.url}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="ad-popup-img-link"
              onClick={dismiss}
            >
              <div className="ad-popup-img-wrap">
                <img
                  src={ad.image.src}
                  alt={`${ad.name} advertisement`}
                  className="ad-popup-img"
                />
                <div
                  className="ad-popup-img-overlay"
                  style={{
                    background: `linear-gradient(to top, ${ad.accent}44 0%, transparent 55%)`,
                  }}
                />
              </div>
            </a>

            {/* Body */}
            <div className="ad-popup-body">
              <div
                className="ad-popup-accent-bar"
                style={{ background: ad.accent }}
              />
              <div>
                <p className="ad-popup-name">{ad.name}</p>
                <p className="ad-popup-tagline">{ad.tagline}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="ad-popup-actions">
              <a
                href={ad.url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="ad-popup-cta"
                style={{ background: ad.accent }}
                onClick={dismiss}
              >
                {ad.ctaText}
                <Icon icon="mdi:arrow-right" width={16} />
              </a>
              <button onClick={dismiss} className="ad-popup-dismiss">
                <Icon icon="mdi:close-circle-outline" width={13} />
                Not interested
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
