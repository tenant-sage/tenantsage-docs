'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { NavSection } from '@/lib/navigation';

interface Props { navigation: NavSection[]; }

export function Sidebar({ navigation }: Props) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const nav = (
    <nav aria-label="Documentation navigation" style={{ padding: 'var(--space-6) var(--space-4)' }}>
      {navigation.map((section) => (
        <div key={section.title} style={{ marginBottom: 'var(--space-6)' }}>
          <div style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ts-text-faint)',
            padding: '0 var(--space-3)',
            marginBottom: 'var(--space-2)',
            fontFamily: 'var(--font-mono)',
          }}>{section.title}</div>
          <ul role="list">
            {section.links.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + '/');
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: 'var(--space-1-5, 6px) var(--space-3)',
                      borderRadius: 'var(--radius-md)',
                      fontSize: 'var(--text-sm)',
                      textDecoration: 'none',
                      color: active ? 'var(--ts-accent)' : 'var(--ts-text-muted)',
                      background: active ? 'var(--ts-accent-light)' : 'transparent',
                      fontWeight: active ? 500 : 400,
                      transition: 'color var(--transition), background var(--transition)',
                    }}
                  >
                    <span>{link.title}</span>
                    {link.badge && (
                      <span style={{
                        fontSize: 'var(--text-xs)', fontFamily: 'var(--font-mono)',
                        color: 'var(--ts-text-faint)',
                        border: '1px solid var(--ts-border)',
                        borderRadius: 'var(--radius-full)',
                        padding: '0 6px',
                        lineHeight: '1.6',
                      }}>{link.badge}</span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside style={{
        width: 'var(--sidebar-width)',
        flexShrink: 0,
        borderRight: '1px solid var(--ts-border)',
        background: 'var(--ts-surface)',
        position: 'sticky',
        top: '56px',
        height: 'calc(100dvh - 56px)',
        overflowY: 'auto',
        display: 'block',
      }} className="sidebar-desktop">
        {nav}
      </aside>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="sidebar-mobile-toggle"
        aria-label="Toggle navigation"
        style={{
          position: 'fixed', bottom: 'var(--space-6)', right: 'var(--space-6)',
          zIndex: 100, display: 'none',
          background: 'var(--ts-accent)', color: '#fff',
          width: '48px', height: '48px',
          borderRadius: 'var(--radius-full)',
          boxShadow: 'var(--shadow-lg)',
          alignItems: 'center', justifyContent: 'center',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
      </button>

      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 99,
          background: 'oklch(0 0 0 / 0.5)',
        }} onClick={() => setMobileOpen(false)} />
      )}

      {mobileOpen && (
        <aside style={{
          position: 'fixed', top: '56px', left: 0,
          width: 'min(var(--sidebar-width), 85vw)',
          height: 'calc(100dvh - 56px)',
          background: 'var(--ts-surface)',
          borderRight: '1px solid var(--ts-border)',
          overflowY: 'auto',
          zIndex: 99,
        }}>
          {nav}
        </aside>
      )}

      <style>{`
        @media (max-width: 768px) {
          .sidebar-desktop { display: none !important; }
          .sidebar-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  );
}
