export interface NavLink {
  title: string;
  href: string;
  badge?: string;
}

export interface NavSection {
  title: string;
  links: NavLink[];
}

export const navigation: NavSection[] = [
  {
    title: 'Platform',
    links: [
      { title: 'Overview',          href: '/platform',                  badge: 'PLT-0001' },
      { title: 'Core Architecture', href: '/platform/core-architecture', badge: 'PLT-0002' },
      { title: 'Execution Model',   href: '/platform/execution-model',   badge: 'PLT-0003' },
    ],
  },
  {
    title: 'Governance',
    links: [
      { title: 'Governance Engine',    href: '/governance',                         badge: 'GOV-0001' },
      { title: 'Policy Framework',     href: '/governance/policy-framework',        badge: 'GOV-0002' },
      { title: 'Governance Decisions', href: '/governance/governance-decisions',    badge: 'GOV-0003' },
    ],
  },
  {
    title: 'Technology',
    links: [
      { title: 'Overview',            href: '/technology',                          badge: 'TECH-0001' },
      { title: 'Service Contracts',   href: '/technology/service-contracts',        badge: 'TECH-0002' },
      { title: 'Data Definitions',    href: '/technology/data-definitions',         badge: 'TECH-0003' },
      { title: 'Messaging',           href: '/technology/messaging-definitions',    badge: 'TECH-0004' },
      { title: 'API Catalog',         href: '/technology/api-catalog',             badge: 'TECH-0005' },
      { title: 'API Specification',   href: '/technology/api-specification',        badge: 'TECH-0006' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { title: 'Developer Guide',     href: '/developers',                          badge: 'DEV-0001' },
      { title: 'Implementation',      href: '/developers/implementation-pattern',   badge: 'DEV-0002' },
      { title: 'Client SDKs',         href: '/developers/client-sdks',              badge: 'DEV-0003' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Documentation Index', href: '/resources',                  badge: 'RES-0001' },
      { title: 'White Papers',        href: '/resources/white-papers',     badge: 'RES-0002' },
      { title: 'Downloads',           href: '/resources/downloads',        badge: 'RES-0003' },
    ],
  },
];
