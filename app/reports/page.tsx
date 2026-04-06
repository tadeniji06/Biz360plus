import { Metadata } from 'next';
import Link from 'next/link';
import { REPORTS } from '@/lib/reports';
import ReportsListClient from '@/components/reports/ReportsListClient';

export const metadata: Metadata = {
  title: 'Intelligence Reports | Business360',
  description:
    'Download exclusive Business360 intelligence reports covering African business, risk, hospitality, finance, and the digital economy.',
};

export default function ReportsPage() {
  return (
    <>
      {/* Hero */}
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #0f172a 60%, #1a56db22 100%)',
          padding: '80px 0 64px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background grid pattern */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(rgba(26,86,219,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(26,86,219,0.06) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
        <div className="container" style={{ position: 'relative' }}>
          {/* Breadcrumb */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '12px',
              color: 'rgba(255,255,255,0.45)',
              marginBottom: '32px',
            }}
          >
            <Link href="/" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Home
            </Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Intelligence Reports</span>
          </nav>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(26,86,219,0.2)',
              border: '1px solid rgba(26,86,219,0.4)',
              borderRadius: '100px',
              padding: '5px 14px',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#3b82f6',
                display: 'inline-block',
                animation: 'pulse 2s infinite',
              }}
            />
            <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#93c5fd', textTransform: 'uppercase' }}>
              B360Intel · Research & Intelligence
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              marginBottom: '20px',
              maxWidth: '700px',
            }}
          >
            Intelligence{' '}
            <span style={{ color: '#3b82f6' }}>Reports</span>
          </h1>
          <p
            style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
              maxWidth: '560px',
              marginBottom: '40px',
            }}
          >
            Exclusive, data-driven intelligence reports crafted by the
            Business360 research team — covering risk, digital transformation,
            and the African business landscape.
          </p>

          {/* Stats row */}
          <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
            {[
              { value: `${REPORTS.length}`, label: 'Reports Available' },
              { value: '100%', label: 'Free to Access' },
              { value: '2026', label: 'Latest Edition' },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  style={{ fontSize: '28px', fontWeight: 800, color: 'white', letterSpacing: '-0.02em' }}
                >
                  {stat.value}
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', marginTop: '2px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reports grid */}
      <div className="container" style={{ padding: '64px 24px 96px' }}>
        <ReportsListClient reports={REPORTS} />
      </div>
    </>
  );
}
