import type { Metadata } from 'next';
import { DocPage } from '@/components/DocPage';

export const metadata: Metadata = { title: 'Resources' };

export default function ResourcesPage() {
  return (
    <DocPage
      title="Resources"
      docId="RES-0001"
      version="v1.0"
      status="stable"
      description="Architecture white papers, downloadable specifications, and printable documentation."
    >
      <h2>Available Resources</h2>
      <ul>
        <li><a href="/resources/documentation">Documentation</a> — full doc index</li>
        <li><a href="/resources/white-papers">White Papers</a> — architecture and governance research</li>
        <li><a href="/resources/downloads">Downloads</a> — PDFs, diagrams, and spec bundles</li>
      </ul>
    </DocPage>
  );
}
