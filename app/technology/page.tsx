import type { Metadata } from 'next';
import { DocPage } from '@/components/DocPage';

export const metadata: Metadata = { title: 'Technology Overview' };

export default function TechnologyPage() {
  return (
    <DocPage
      title="Technology Overview"
      docId="TECH-0001"
      version="v0.7"
      status="draft"
      description="Service contracts, data definitions, messaging schemas, API catalog, and OpenAPI specifications."
    >
      <h2>Technology Stack</h2>
      <ul>
        <li><strong>Runtime</strong> — Node.js 22 / TypeScript 5</li>
        <li><strong>Database</strong> — PostgreSQL 16 with pgvector and RLS</li>
        <li><strong>Edge</strong> — Cloudflare Workers / Pages</li>
        <li><strong>AI</strong> — LLM middleware with governed RAG pipelines</li>
        <li><strong>Infra</strong> — Google Cloud Run, Docker, GitHub Actions CI/CD</li>
      </ul>

      <h2>Subsections</h2>
      <ul>
        <li><a href="/technology/service-contracts">Service Contracts</a></li>
        <li><a href="/technology/data-definitions">Data Definitions</a></li>
        <li><a href="/technology/messaging-definitions">Messaging Definitions</a></li>
        <li><a href="/technology/api-catalog">API Catalog</a></li>
        <li><a href="/technology/api-specification">API Specification</a></li>
      </ul>
    </DocPage>
  );
}
