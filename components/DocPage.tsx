import type { ReactNode } from 'react';

type Status = 'stable' | 'draft' | 'deprecated' | 'review';

const statusColors: Record<Status, { bg: string; text: string; label: string }> = {
  stable:     { bg: '#dcfce7', text: '#16a34a', label: 'Stable' },
  draft:      { bg: '#fef9c3', text: '#ca8a04', label: 'Draft' },
  deprecated: { bg: '#fee2e2', text: '#dc2626', label: 'Deprecated' },
  review:     { bg: '#eff6ff', text: '#2563eb', label: 'Under Review' },
};

const statusColorsDark: Record<Status, { bg: string; text: string }> = {
  stable:     { bg: '#14532d', text: '#86efac' },
  draft:      { bg: '#713f12', text: '#fde047' },
  deprecated: { bg: '#7f1d1d', text: '#fca5a5' },
  review:     { bg: '#1e3a5f', text: '#93c5fd' },
};

interface DocPageProps {
  title: string;
  docId: string;
  version: string;
  status: Status;
  description?: string;
  children: ReactNode;
}

export function DocPage({ title, docId, version, status, description, children }: DocPageProps) {
  const sc = statusColors[status];

  return (
    <article style={{ maxWidth: 'var(--content-default)', margin: '0 auto' }}>
      {/* Doc Header */}
      <header style={{ marginBottom: 'var(--space-8)', paddingBottom: 'var(--space-6)', borderBottom: '1px solid var(--ts-border)' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)', marginBottom: 'var(--space-4)', alignItems: 'center' }}>
          {/* Doc ID */}
          <span style={{
            fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)',
            color: 'var(--ts-accent)',
            background: 'var(--ts-accent-light)',
            padding: '2px 10px', borderRadius: 'var(--radius-full)',
            letterSpacing: '0.04em',
          }}>{docId}</span>

          {/* Version */}
          <span style={{
            fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)',
            color: 'var(--ts-text-faint)',
            border: '1px solid var(--ts-border)',
            borderRadius: 'var(--radius-full)',
            padding: '2px 10px',
          }}>{version}</span>

          {/* Status */}
          <span style={{
            fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)',
            color: sc.text, background: sc.bg,
            padding: '2px 10px', borderRadius: 'var(--radius-full)',
          }}>{sc.label}</span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-xl)',
          fontWeight: 800,
          letterSpacing: '-0.02em',
          color: 'var(--ts-text)',
          marginBottom: description ? 'var(--space-3)' : 0,
        }}>{title}</h1>

        {description && (
          <p style={
            { fontSize: 'var(--text-base)', color: 'var(--ts-text-muted)', maxWidth: '65ch', lineHeight: 1.6 }
          }>{description}</p>
        )}
      </header>

      {/* Content */}
      <div style={{
        fontSize: 'var(--text-base)',
        lineHeight: 1.8,
        color: 'var(--ts-text)',
      }} className="doc-content">
        {children}
      </div>

      <style>{`
        .doc-content h2 {
          font-family: var(--font-display);
          font-size: var(--text-lg);
          font-weight: 700;
          color: var(--ts-text);
          margin-top: var(--space-8);
          margin-bottom: var(--space-3);
          padding-bottom: var(--space-2);
          border-bottom: 1px solid var(--ts-border);
        }
        .doc-content h3 {
          font-family: var(--font-display);
          font-size: var(--text-base);
          font-weight: 600;
          color: var(--ts-text);
          margin-top: var(--space-6);
          margin-bottom: var(--space-2);
        }
        .doc-content p { margin-bottom: var(--space-4); color: var(--ts-text-muted); max-width: 72ch; }
        .doc-content ul, .doc-content ol {
          margin-bottom: var(--space-4);
          padding-left: var(--space-6);
          color: var(--ts-text-muted);
        }
        .doc-content li { margin-bottom: var(--space-2); }
        .doc-content a { color: var(--ts-accent); text-decoration: none; }
        .doc-content a:hover { text-decoration: underline; }
        .doc-content code {
          font-family: var(--font-mono);
          font-size: 0.875em;
          background: var(--ts-surface-2);
          padding: 2px 6px;
          border-radius: var(--radius-sm);
          color: var(--ts-accent);
        }
        .doc-content pre {
          background: var(--ts-surface-2);
          border: 1px solid var(--ts-border);
          border-radius: var(--radius-lg);
          padding: var(--space-5);
          overflow-x: auto;
          margin-bottom: var(--space-6);
          font-family: var(--font-mono);
          font-size: var(--text-sm);
          line-height: 1.7;
        }
        .doc-content pre code { background: none; padding: 0; color: inherit; }
        .doc-content strong { color: var(--ts-text); font-weight: 600; }
        .doc-content table {
          width: 100%; border-collapse: collapse;
          margin-bottom: var(--space-6);
          font-size: var(--text-sm);
        }
        .doc-content th {
          text-align: left;
          padding: var(--space-2) var(--space-3);
          border-bottom: 2px solid var(--ts-border);
          font-weight: 600; color: var(--ts-text);
          font-family: var(--font-display);
        }
        .doc-content td {
          padding: var(--space-2) var(--space-3);
          border-bottom: 1px solid var(--ts-border);
          color: var(--ts-text-muted);
        }
      `}</style>
    </article>
  );
}
