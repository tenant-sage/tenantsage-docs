import type { Metadata } from 'next';
import { DocPage } from '@/components/DocPage';

export const metadata: Metadata = { title: 'Developer Guide' };

export default function DevelopersPage() {
  return (
    <DocPage
      title="Developer Guide"
      docId="DEV-0001"
      version="v0.5"
      status="draft"
      description="Getting started with TenantSage integration, recommended patterns, and client SDK documentation."
    >
      <h2>Getting Started</h2>
      <p>
        This guide covers how to integrate with the TenantSage platform APIs,
        implement the recommended authority hierarchy pattern, and use the client SDKs.
      </p>

      <h2>Subsections</h2>
      <ul>
        <li><a href="/developers/developer-guide">Developer Guide</a> — step-by-step integration</li>
        <li><a href="/developers/implementation-pattern">Recommended Implementation Pattern</a></li>
        <li><a href="/developers/client-sdks">Client SDKs</a> — TypeScript and Python SDKs</li>
      </ul>
    </DocPage>
  );
}
