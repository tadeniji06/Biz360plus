'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import { Report } from '@/lib/reports';

interface Props {
  reports: Report[];
}

export default function ReportsListClient({ reports }: Props) {
  return (
    <div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '32px',
        }}
      >
        {reports.map((report, i) => (
          <motion.div
            key={report.slug}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={`/reports/${report.slug}`}
              style={{ display: 'block', textDecoration: 'none' }}
            >
              <div
                className="report-card"
                style={{
                  background: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  overflow: 'hidden',
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '0 20px 48px rgba(0,0,0,0.12)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = '';
                  (e.currentTarget as HTMLDivElement).style.boxShadow = '';
                }}
              >
                {/* Cover image */}
                <div style={{ position: 'relative', aspectRatio: '3/4', overflow: 'hidden', maxHeight: '340px' }}>
                  <img
                    src={report.coverImage.src}
                    alt={report.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  />
                  {/* Overlay gradient */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)',
                    }}
                  />
                  {/* Category badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      left: '16px',
                      background: report.accentColor,
                      color: 'white',
                      fontSize: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      borderRadius: '3px',
                    }}
                  >
                    {report.category}
                  </div>
                  {/* Free badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '16px',
                      right: '16px',
                      background: 'rgba(0,0,0,0.6)',
                      backdropFilter: 'blur(6px)',
                      color: 'white',
                      fontSize: '10px',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '3px',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}
                  >
                    FREE
                  </div>
                  {/* Pages count */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '16px',
                      right: '16px',
                      color: 'rgba(255,255,255,0.8)',
                      fontSize: '11px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    <Icon icon="mdi:file-document" width={14} />
                    {report.pages} pages
                  </div>
                </div>

                {/* Card body */}
                <div style={{ padding: '20px 24px 24px' }}>
                  <div style={{ fontSize: '11px', color: '#6b7280', marginBottom: '8px', fontWeight: 600 }}>
                    {report.publishedDate}
                  </div>
                  <h2
                    style={{
                      fontSize: '18px',
                      fontWeight: 800,
                      color: '#0a0a0a',
                      lineHeight: 1.25,
                      marginBottom: '10px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {report.title}
                  </h2>
                  <p
                    style={{
                      fontSize: '13px',
                      color: '#6b7280',
                      lineHeight: 1.6,
                      marginBottom: '20px',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {report.description}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {report.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: '10px',
                            fontWeight: 600,
                            color: '#374151',
                            background: '#f3f4f6',
                            padding: '3px 8px',
                            borderRadius: '3px',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: 700,
                        color: report.accentColor,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                      }}
                    >
                      Read Report
                      <Icon icon="mdi:arrow-right" width={14} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
