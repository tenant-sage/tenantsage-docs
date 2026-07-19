import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TenantSage Documentation Portal',
};

const sections = [
  {
    href: '/platform',
    icon: '⬡',
    title: 'Platform',
    description: 'Core architecture, execution model, and system design of the TenantSage platform.',
    badge: 'v0.9',
    color: '#2563EB',
  },
  {
    href: '/governance',
    icon: '⚖',
    title: 'Governance',
    description: 'Governance engine, policy framework, and decision audit trails.',
    badge: 'v0.8',
    color: '#16A34A',
  },
  {
    href: '/technology',
    icon: '⚙',
    title: 'Technology',
    description: 'Service contracts, data definitions, API catalog, and specifications.',
    badge: 'v0.7',
    color: '#0F172A',
  },
  {
    href: '/developers',
    icon: '</> ',
    title: 'Developers',
    description: 'Developer guides, implementation patterns, and client SDKs.',
    badge: 'v0.5',
    color: '#7C3AED',
  },
  {
    href: '/resources',
    icon: '⬇',
    title: 'Resources',
    description: 'White papers, architecture downloads, and printable specifications.',
    badge: 'Latest',
    color: '#F59E0B',
  },
];

export default function Home() {
  return (
    <div style={{ maxWidth: 'var(--content-default)', margin: '0 auto' }}>
      {/* Hero */}
      <div style={{ marginBottom: 'var(--space-12)', paddingTop: 'var(--space-8)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
          <span style={{
            fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)',
            color: 'var(--ts-accent)', background: 'var(--ts-accent-light)',
            padding: '2px 10px', borderRadius: 'var(--radius-full)',
            letterSpacing: '0.05em', textTransform: 'uppercase',
          }}>Documentation Portal</span>
          <span style={{
            fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)',
            color: 'var(--ts-text-muted)',
          }}>v1.0 · ARB-0005</span>
        </div>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-2xl)',
          fontWeight: 800,
          color: 'var(--ts-text)',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          marginBottom: 'var(--space-4)',
        }}>
          TenantSage
          <span style={{ color: 'var(--ts-accent)' }}> Documentation</span>
        </h1>
        <p style={{
          fontSize: 'var(--text-lg)',
          color: 'var(--ts-text-muted)',
          maxWidth: '60ch',
          lineHeight: 1.7,
        }}>
          Governance-First AI Infrastructure for enterprise multi-tenant platforms.
          Explore architecture specifications, governance policies, API references,
          and developer guides.
        </p>
      </div>

      {/* Section Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(280px, 100%), 1fr))',
        gap: 'var(--space-4)',
        marginBottom: 'var(--space-12)',
      }}>
        {sections.map((s) => (
          <Link key={s.href} href={s.href} style={{ textDecoration: 'none' }}>
            <div style={{
              background: 'var(--ts-surface)',
              border: '1px solid var(--ts-border)',
              borderRadius: 'var(--radius-xl)',
              padding: 'var(--space-6)',
              transition: 'box-shadow var(--transition), border-color var(--transition)',
              cursor: 'pointer',
              height: '100%',
            }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--ts-accent)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
                (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--ts-border)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-3)' }}>
                <span style={{ fontSize: '1.5rem' }}>{s.icon}</span>
                <span style={{
                  fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)',
                  color: 'var(--ts-text-faint)',
                  border: '1px solid var(--ts-border)',
                  borderRadius: 'var(--radius-full)',
                  padding: '1px 8px',
                }}>{s.badge}</span>
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-lg)',
                fontWeight: 700,
                color: 'var(--ts-text)',
                marginBottom: 'var(--space-2)',
              }}>{s.title}</h2>
              <p style={{
                fontSize: 'var(--text-sm)',
                color: 'var(--ts-text-muted)',
                lineHeight: 1.6,
                maxWidth: '100%',
              }}>{s.description}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* What&apos;s New Strip */}
      <div style={{
        background: 'var(--ts-surface)',
        border: '1px solid var(--ts-border)',
        borderRadius: 'var(--radius-xl)',
        padding: 'var(--space-5) var(--space-6)',
        display: 'flex', alignItems: 'center', gap: 'var(--space-4)',
      }}>
        <span style={{
          fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)',
          color: 'var(--ts-accent)', background: 'var(--ts-accent-light)',
          padding: '2px 8px', borderRadius: 'var(--radius-full)',
          whiteSpace: 'nowrap',
        }}>What&apos;s New</span>
        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--ts-text-muted)' }}>
          Documentation Portal v1.0 launched · Governance Engine v0.8 specifications added ·
          ARB-0005 Architecture Decision Record published
        </span>
      </div>
    </div>
  );
}
