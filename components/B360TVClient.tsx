'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { b360tv } from '@/assets';
import { Icon } from '@iconify/react';

export default function B360TVClient() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show subscribe popup after 3 seconds
    const timer = setTimeout(() => setShowPopup(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const videos = [
    'bkadYFmWHW0',
    'WXtjBNY8beE',
    'ho2sL9ph5VI',
    'KGboOBZ0qzQ',
    'PTKlhnywpPQ',
    'z52OXH7_A6I',
  ];

  return (
    <div className="b360tv-page">
      {/* Hero Section */}
      <section className="tv-hero">
        <div className="container tv-hero-content">
          <motion.div
            className="tv-hero-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="tv-badge">
              <Icon icon="mdi:youtube" width={16} /> Official Channel
            </div>
            <h1 className="tv-title">
              Business 360 <span>TV</span>
            </h1>
            <p className="tv-subtitle">
              Your premier destination for high-value content and podcasts covering business, startups, investments, tech, and beyond.
            </p>
            <motion.a
              href="https://youtube.com/@b360tv?si=2a4o0j-WGQgSTDQh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-subscribe-youtube"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon icon="mdi:youtube-subscription" width={20} />
              Subscribe on YouTube
            </motion.a>
          </motion.div>
          <motion.div
            className="tv-hero-image"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <Image
              src={b360tv}
              alt="B360TV Logo"
              width={350}
              height={350}
              priority
              className="logo-img"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Videos Pipeline */}
      <section className="tv-videos">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Icon icon="mdi:play-circle" width={32} color="#dc2626" />
            <h2>Latest Episodes</h2>
          </motion.div>
          <div className="video-grid">
            {videos.map((videoId, index) => (
              <motion.div
                key={videoId}
                className="video-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: '0 16px 40px rgba(0,0,0,0.15)' }}
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="youtube-iframe"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            className="subscribe-popup"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <button className="popup-close" onClick={() => setShowPopup(false)}>
              <Icon icon="mdi:close" width={16} />
            </button>
            <div className="popup-icon">
              <Icon icon="mdi:youtube" width={28} color="#dc2626" />
            </div>
            <div className="popup-content">
              <h4>Love our content?</h4>
              <p>Don&apos;t miss an episode. Subscribe to our YouTube channel now!</p>
              <a
                href="https://youtube.com/@b360tv?si=2a4o0j-WGQgSTDQh"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setShowPopup(false)}
              >
                Subscribe
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .b360tv-page {
          background-color: #f8fafc;
          min-height: 100vh;
          font-family: var(--font-sans);
          padding-bottom: 60px;
        }

        /* Hero */
        .tv-hero {
          /* Lighter, softer dark background */
          background: linear-gradient(135deg, #1f2937, #111827);
          color: #ffffff;
          padding: 70px 0;
          border-bottom: 4px solid #dc2626;
          overflow: hidden;
        }

        .tv-hero-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        .tv-hero-text {
          max-width: 600px;
        }

        .tv-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(220, 38, 38, 0.15);
          color: #fca5a5;
          font-weight: 700;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          padding: 6px 12px;
          border-radius: 4px;
          margin-bottom: 24px;
        }

        .tv-title {
          font-size: clamp(38px, 6vw, 64px);
          font-weight: 900;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
          line-height: 1.1;
          color: #ffffff;
        }

        .tv-title span {
          color: #ef4444; /* Brighter red on dark background */
        }

        .tv-subtitle {
          font-size: 17px;
          color: #f3f4f6; /* Brighter white for readability */
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .btn-subscribe-youtube {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #dc2626;
          color: white;
          text-decoration: none;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 6px;
          box-shadow: 0 4px 14px rgba(220, 38, 38, 0.4);
        }

        .tv-hero-image {
          flex-shrink: 0;
          filter: drop-shadow(0 20px 30px rgba(0,0,0,0.3));
        }

        .logo-img {
          object-fit: contain;
          max-width: 100%;
          height: auto;
        }

        /* Videos */
        .tv-videos {
          padding: 80px 0 60px;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 40px;
        }

        .section-header h2 {
          font-size: 28px;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
        }

        .video-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 32px;
        }

        .video-card {
          aspect-ratio: 16 / 9;
          border-radius: 12px;
          overflow: hidden;
          background: #000;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
          position: relative;
          z-index: 10;
        }

        .youtube-iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        /* Slide-up Subscribe Popup */
        .subscribe-popup {
          position: fixed;
          bottom: 30px;
          right: 30px;
          background: white;
          border-radius: 12px;
          padding: 24px;
          width: 320px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05);
          display: flex;
          gap: 16px;
          z-index: 1000;
        }

        .popup-close {
          position: absolute;
          top: 12px;
          right: 12px;
          background: none;
          border: none;
          color: #9ca3af;
          cursor: pointer;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }

        .popup-close:hover {
          background: #f3f4f6;
          color: #4b5563;
        }

        .popup-icon {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .popup-content h4 {
          margin: 0 0 4px;
          font-size: 16px;
          font-weight: 800;
          color: #111827;
        }

        .popup-content p {
          margin: 0 0 16px;
          font-size: 13px;
          color: #6b7280;
          line-height: 1.4;
        }

        .popup-content a {
          display: inline-block;
          background: #dc2626;
          color: white;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          padding: 8px 16px;
          border-radius: 6px;
          transition: background 0.2s;
        }

        .popup-content a:hover {
          background: #b91c1c;
        }

        @media (max-width: 768px) {
          .tv-hero-content {
            flex-direction: column;
            text-align: center;
          }
          .tv-hero-text {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .video-grid {
            grid-template-columns: 1fr;
          }
          .tv-hero-image {
            width: 220px;
          }
          .subscribe-popup {
            bottom: 16px;
            right: 16px;
            left: 16px;
            width: auto;
          }
        }
      `}</style>
    </div>
  );
}
