'use client';
import Link from 'next/link';
import { useTheme } from './ThemeProvider';

export function TopBar() {
  const { theme, toggle } = useTheme();

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'var(--ts-surface)',
      borderBottom: '1px solid var(--ts-border)',
      height: '56px',
      display: 'flex', alignItems: 'center',
      padding: '0 var(--space-6)',
      gap: 'var(--space-4)',
    }}>
      {/* Logo */}
      <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-label="TenantSage" role="img">
          <rect width="28" height="28" rx="6" fill="#2563EB" />
          <path d="M7 14 L14 7 L21 14 L14 21 Z" fill="white" opacity="0.9" />
          <circle cx="14" cy="14" r="3" fill="#2563EB" />
        </svg>
        <span style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: 'var(--text-sm)',
          color: 'var(--ts-text)',
          letterSpacing: '-0.01em',
        }}>TenantSage <span style={{ color: 'var(--ts-text-muted)', fontWeight: 400 }}>Docs</span></span>
      </Link>

      <div style={{ flex: 1 }} />

      {/* Version badge */}
      <span style={{
        fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)',
        color: 'var(--ts-text-faint)',
        border: '1px solid var(--ts-border)',
        borderRadius: 'var(--radius-full)',
        padding: '2px 10px',
      }}>v1.0</span>

      {/* GitHub */}
      <a
        href="https://github.com/tenant-sage/tenantsage-docs"
        target="_blank" rel="noopener noreferrer"
        aria-label="GitHub repository"
        style={{ color: 'var(--ts-text-muted)', display: 'flex', alignItems: 'center' }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
      </a>

      {/* Theme toggle */}
      <button
        onClick={toggle}
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        style={{
          color: 'var(--ts-text-muted)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: '32px', height: '32px',
          borderRadius: 'var(--radius-md)',
        }}
      >
        {theme === 'dark' ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
          </svg>
        )}
      </button>
    </header>
  );
}
