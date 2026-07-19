/**
 * sync-notion.ts
 * ---------------
 * Pulls documentation pages from Notion and writes them as MDX files
 * into the content/ directory for Next.js static generation.
 *
 * Usage:
 *   NOTION_TOKEN=xxx NOTION_WORKSPACE_ID=xxx npm run sync-notion
 *
 * Environment variables (set as GitHub Actions secrets):
 *   NOTION_TOKEN          — Notion integration token
 *   NOTION_WORKSPACE_ID   — Notion workspace / root page ID
 *
 * Database IDs — map each section to a Notion database ID below.
 * These are read from optional env vars so they can be configured
 * per-environment without code changes.
 */

import * as fs from 'fs';
import * as path from 'path';
import { notion, n2m } from '../lib/notion';

const CONTENT_DIR = path.resolve(__dirname, '../content');

/** Map slug → Notion database ID (set these as repo vars or env vars) */
const DATABASES: Record<string, string | undefined> = {
  platform:   process.env.NOTION_DB_PLATFORM,
  governance: process.env.NOTION_DB_GOVERNANCE,
  technology: process.env.NOTION_DB_TECHNOLOGY,
  developers: process.env.NOTION_DB_DEVELOPERS,
  resources:  process.env.NOTION_DB_RESOURCES,
};

async function syncSection(slug: string, databaseId: string) {
  console.log(`\nSyncing: ${slug} (db: ${databaseId})`);
  const dir = path.join(CONTENT_DIR, slug);
  fs.mkdirSync(dir, { recursive: true });

  const response = await notion.databases.query({
    database_id: databaseId,
    filter: { property: 'Status', select: { equals: 'Published' } },
    sorts: [{ property: 'Order', direction: 'ascending' }],
  });

  for (const page of response.results) {
    if (page.object !== 'page') continue;
    const p = page as any;
    const title: string = p.properties?.Name?.title?.[0]?.plain_text ?? p.id;
    const slug2 = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const mdBlocks = await n2m.pageToMarkdown(p.id);
    const md = n2m.toMarkdownString(mdBlocks).parent;
    const frontmatter = [
      '---',
      `title: "${title}"`,
      `notionId: "${p.id}"`,
      `lastEdited: "${p.last_edited_time}"`,
      `version: "${p.properties?.Version?.rich_text?.[0]?.plain_text ?? ''}"`,
      `status: "${p.properties?.Status?.select?.name ?? ''}"`,
      '---',
    ].join('\n');

    const filepath = path.join(dir, `${slug2}.mdx`);
    fs.writeFileSync(filepath, `${frontmatter}\n\n${md}`);
    console.log(`  ✓ ${slug2}.mdx`);
  }
}

async function main() {
  console.log('TenantSage Docs — Notion Sync');
  for (const [slug, dbId] of Object.entries(DATABASES)) {
    if (!dbId) {
      console.log(`  Skipping ${slug} (no NOTION_DB_${slug.toUpperCase()} set)`);
      continue;
    }
    await syncSection(slug, dbId);
  }
  console.log('\n✓ Sync complete.');
}

main().catch((err) => { console.error(err); process.exit(1); });
