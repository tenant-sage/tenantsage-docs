import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';

if (!process.env.NOTION_TOKEN) {
  throw new Error('Missing NOTION_TOKEN environment variable');
}

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const n2m = new NotionToMarkdown({ notionClient: notion });

export const NOTION_WORKSPACE_ID = process.env.NOTION_WORKSPACE_ID ?? '';

/**
 * Fetch page content from Notion and convert to Markdown string.
 */
export async function getNotionPageMarkdown(pageId: string): Promise<string> {
  const mdBlocks = await n2m.pageToMarkdown(pageId);
  return n2m.toMarkdownString(mdBlocks).parent;
}

/**
 * Fetch all pages from a Notion database, sorted by last_edited_time.
 */
export async function queryNotionDatabase(databaseId: string) {
  const response = await notion.databases.query({
    database_id: databaseId,
    sorts: [{ timestamp: 'last_edited_time', direction: 'descending' }],
  });
  return response.results;
}
