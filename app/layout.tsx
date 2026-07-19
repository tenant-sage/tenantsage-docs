import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import { TopBar } from '@/components/TopBar';
import { Sidebar } from '@/components/Sidebar';
import { navigation } from '@/lib/navigation';

export const metadata: Metadata = {
  title: {
    default: 'TenantSage Documentation',
    template: '%s — TenantSage Docs',
  },
  description: 'Official documentation for TenantSage — Governance-First AI Infrastructure for multi-tenant property management platforms.',
  metadataBase: new URL('https://docs.tenantsage.ai'),
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://docs.tenantsage.ai',
    siteName: 'TenantSage Docs',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body>
        <ThemeProvider>
          <div className="docs-layout">
            <TopBar />
            <div className="docs-body">
              <Sidebar navigation={navigation} />
              <main className="docs-main" id="main-content">
                {children}
              </main>
            </div>
          </div>
        </ThemeProvider>
        <style>{`
          .docs-layout {
            display: flex;
            flex-direction: column;
            min-height: 100dvh;
          }
          .docs-body {
            display: flex;
            flex: 1;
            max-width: 100vw;
          }
          .docs-main {
            flex: 1;
            min-width: 0;
            padding: var(--space-8) var(--space-6);
            max-width: calc(var(--content-wide) - var(--sidebar-width));
          }
          @media (max-width: 768px) {
            .docs-main { padding: var(--space-6) var(--space-4); }
          }
        `}</style>
      </body>
    </html>
  );
}
