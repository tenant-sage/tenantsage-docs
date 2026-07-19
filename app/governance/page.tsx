import type { Metadata } from 'next';
import { DocPage } from '@/components/DocPage';

export const metadata: Metadata = { title: 'Governance Engine' };

export default function GovernancePage() {
  return (
    <DocPage
      title="Governance Engine"
      docId="GOV-0001"
      version="v0.8"
      status="draft"
      description="The TenantSage Governance Engine enforces policy rules, authority hierarchies, and audit trails across all AI operations."
    >
      <h2>Overview</h2>
      <p>
        The Governance Engine is the central authority enforcement layer in TenantSage.
        Every AI retrieval request, prompt execution, and data access operation passes
        through governance validation before execution.
      </p>

      <h2>Subsections</h2>
      <ul>
        <li><a href="/governance/policy-framework">Policy Framework</a> — rule definitions and cascading policies</li>
        <li><a href="/governance/governance-decisions">Governance Decisions</a> — ADR log and decision audit trail</li>
      </ul>
    </DocPage>
  );
}
