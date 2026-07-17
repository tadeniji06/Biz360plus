"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import { REPORTS } from "@/lib/reports";

export default function LatestReportPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const latestReport = REPORTS[0];

  useEffect(() => {
    setHasMounted(true);
    
    if (!latestReport) return;

    const checkAndShowPopup = (delay = 0) => {
      const cookies = document.cookie;
      const hasDismissed = cookies.includes("report_popup_dismissed=true");
      
      // If the popup is already open, don't trigger another one
      if (!hasDismissed) {
        setTimeout(() => {
          setIsOpen((prev) => {
            if (!prev) return true;
            return prev;
          });
        }, delay);
      }
    };

    // Initial check (3s delay)
    checkAndShowPopup(3000);

    // Continuous check every 30 seconds for active users
    const interval = setInterval(() => {
      checkAndShowPopup(0);
    }, 30000);

    return () => clearInterval(interval);
  }, [latestReport]);

  const handleClose = () => {
    setIsOpen(false);
    // Dismiss for 2 minutes (120 seconds)
    document.cookie = "report_popup_dismissed=true; path=/; max-age=120";
  };

  if (!hasMounted || !latestReport) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="report-popup-overlay" style={{ zIndex: 9990 }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="report-popup-backdrop"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="report-popup-card"
          >
            <button
              onClick={handleClose}
              className="report-popup-close"
              aria-label="Close popup"
            >
              <Icon icon="mdi:close" width={20} />
            </button>

            <div className="report-popup-content">
              {/* Text Side */}
              <div className="report-popup-text">
                <div className="report-popup-badge">New Release</div>
                <h3 className="report-popup-title">{latestReport.title}</h3>
                <p className="report-popup-desc">
                  {latestReport.description.substring(0, 110)}...
                </p>
                <div className="report-popup-actions">
                  <Link 
                    href={`/reports/${latestReport.slug}`}
                    className="report-popup-btn"
                    onClick={() => setIsOpen(false)}
                  >
                    Read Report <Icon icon="mdi:arrow-right" />
                  </Link>
                  <button onClick={handleClose} className="report-popup-dismiss">
                    Not now
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <style>{`
            .report-popup-overlay {
              position: fixed;
              inset: 0;
              display: flex;
              align-items: flex-end;
              justify-content: flex-end;
              padding: 24px;
              pointer-events: none; /* Let clicks pass through empty space */
            }
            .report-popup-backdrop {
              position: absolute;
              inset: 0;
              background: rgba(0,0,0,0.2);
              backdrop-filter: blur(2px);
              pointer-events: auto;
            }
            .report-popup-card {
              position: relative;
              background: var(--color-white);
              border-radius: 12px;
              box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05);
              width: 100%;
              max-width: 360px;
              pointer-events: auto;
              overflow: hidden;
            }
            .report-popup-close {
              position: absolute;
              top: 10px;
              right: 10px;
              width: 28px;
              height: 28px;
              border-radius: 50%;
              background: rgba(0,0,0,0.05);
              border: none;
              color: var(--color-gray-500);
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              transition: all 0.2s;
              z-index: 10;
            }
            .report-popup-close:hover {
              background: rgba(0,0,0,0.1);
              color: var(--color-black);
            }
            .report-popup-content {
              display: flex;
            }
            .report-popup-text {
              padding: 24px 20px;
              flex: 1;
            }
            .report-popup-badge {
              display: inline-block;
              font-size: 10px;
              font-weight: 700;
              text-transform: uppercase;
              letter-spacing: 0.1em;
              color: var(--color-primary);
              background: rgba(26, 86, 219, 0.1);
              padding: 4px 8px;
              border-radius: 4px;
              margin-bottom: 8px;
            }
            .report-popup-title {
              font-family: var(--font-serif);
              font-size: 16px;
              font-weight: 700;
              color: var(--color-heading);
              line-height: 1.3;
              margin-bottom: 8px;
            }
            .report-popup-desc {
              font-size: 13px;
              color: var(--color-text-muted);
              line-height: 1.5;
              margin-bottom: 16px;
            }
            .report-popup-actions {
              display: flex;
              align-items: center;
              gap: 12px;
            }
            .report-popup-btn {
              display: inline-flex;
              align-items: center;
              gap: 6px;
              background: var(--color-primary);
              color: white;
              font-size: 13px;
              font-weight: 600;
              padding: 8px 16px;
              border-radius: 6px;
              text-decoration: none;
              transition: background 0.2s;
            }
            .report-popup-btn:hover {
              background: var(--color-primary-dark);
            }
            .report-popup-dismiss {
              background: none;
              border: none;
              color: var(--color-gray-500);
              font-size: 13px;
              font-weight: 500;
              cursor: pointer;
              transition: color 0.2s;
            }
            .report-popup-dismiss:hover {
              color: var(--color-gray-700);
            }
            
            @media (max-width: 600px) {
              .report-popup-overlay {
                padding: 16px;
              }
            }
          `}</style>
        </div>
      )}
    </AnimatePresence>
  );
}
