# TenantSage Documentation Portal

[![Deploy Status](https://github.com/tenant-sage/tenantsage-docs/actions/workflows/deploy.yml/badge.svg)](https://github.com/tenant-sage/tenantsage-docs/actions/workflows/deploy.yml)

Official documentation portal for **TenantSage** — Governance-First AI Infrastructure for enterprise multi-tenant property management platforms.

## Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router, Static Export) |
| Styling | Tailwind CSS v3 + Custom Design Tokens |
| Content | MDX + Notion Sync |
| Search | Pagefind |
| Deployment | Cloudflare Pages |
| CI/CD | GitHub Actions |

## Local Development

```bash
npm install
npm run dev
```

## Notion Sync

Content is synced from Notion using the GitHub Actions secret `NOTION_TOKEN` and `NOTION_WORKSPACE_ID` you have already configured.

To connect a Notion database to a section, add a **Repository Variable** (not secret) for each database ID:

| Variable | Section |
|---|---|
| `NOTION_DB_PLATFORM` | Platform |
| `NOTION_DB_GOVERNANCE` | Governance |
| `NOTION_DB_TECHNOLOGY` | Technology |
| `NOTION_DB_DEVELOPERS` | Developers |
| `NOTION_DB_RESOURCES` | Resources |

Set these at: `Settings > Secrets and variables > Actions > Variables`

## Cloudflare Pages Deployment

Add these two secrets to complete the deployment pipeline:

```
CLOUDFLARE_API_TOKEN   — Cloudflare API token with Pages:Edit permission
CLOUDFLARE_ACCOUNT_ID  — Your Cloudflare account ID
```

## Architecture

```
tenantsage-docs/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (TopBar + Sidebar + ThemeProvider)
│   ├── page.tsx            # Home page
│   ├── platform/           # Platform section
│   ├── governance/         # Governance section
│   ├── technology/         # Technology section
│   ├── developers/         # Developers section
│   └── resources/          # Resources section
├── components/             # Reusable UI components
│   ├── ThemeProvider.tsx   # Dark/light mode context
│   ├── TopBar.tsx          # Sticky navigation header
│   ├── Sidebar.tsx         # Left nav with active state
│   └── DocPage.tsx         # Document page template (badges, TOC, metadata)
├── lib/
│   ├── navigation.ts       # Site navigation structure
│   └── notion.ts           # Notion API client
├── scripts/
│   └── sync-notion.ts      # Notion → MDX content sync
├── content/                # MDX content (git-tracked + Notion-synced)
├── public/                 # Static assets (favicon, OG image)
└── .github/workflows/
    ├── deploy.yml          # Build, validate, deploy pipeline
    └── sync-notion.yml     # Scheduled daily Notion sync
```

## License

Proprietary — TenantSage Pty Ltd. All rights reserved.
