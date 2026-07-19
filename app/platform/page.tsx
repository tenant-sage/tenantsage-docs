import type { Metadata } from 'next';
import { DocPage } from '@/components/DocPage';

export const metadata: Metadata = { title: 'Platform Overview' };

export default function PlatformPage() {
  return (
    <DocPage
      title="Platform Overview"
      docId="PLT-0001"
      version="v0.9"
      status="stable"
      description="High-level overview of the TenantSage platform architecture, design principles, and system capabilities."
    >
      <h2>What is TenantSage?</h2>
      <p>
        TenantSage is a Governance-First AI Infrastructure platform designed for enterprise
        multi-tenant property management systems. It enforces authority hierarchies, data
        isolation, and policy-governed AI retrieval at every layer of the stack.
      </p>

      <h2>Core Principles</h2>
      <ul>
        <li><strong>Governance by Default</strong> — every AI operation is governed before execution</li>
        <li><strong>Authority Hierarchy</strong> — System → Agency → Tenant → User cascading permissions</li>
        <li><strong>Data Isolation</strong> — PostgreSQL Row-Level Security enforced at the database layer</li>
        <li><strong>Auditability</strong> — every governance decision is logged and traceable</li>
        <li><strong>Composable</strong> — modular service contracts with well-defined boundaries</li>
      </ul>

      <h2>Platform Sections</h2>
      <ul>
        <li><a href="/platform/core-architecture">Core Architecture</a> — system design and component relationships</li>
        <li><a href="/platform/execution-model">Execution Model</a> — how AI requests are processed and governed</li>
      </ul>
    </DocPage>
  );
}
