import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ts: {
          bg: 'var(--ts-bg)',
          surface: 'var(--ts-surface)',
          border: 'var(--ts-border)',
          text: 'var(--ts-text)',
          muted: 'var(--ts-text-muted)',
          faint: 'var(--ts-text-faint)',
          primary: 'var(--ts-primary)',
          accent: 'var(--ts-accent)',
          success: 'var(--ts-success)',
          warning: 'var(--ts-warning)',
          danger: 'var(--ts-danger)',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      typography: (theme: (arg: string) => string) => ({
        ts: {
          css: {
            '--tw-prose-body': theme('colors.ts.text / 1'),
            '--tw-prose-headings': theme('colors.ts.text / 1'),
            '--tw-prose-code': theme('colors.ts.accent / 1'),
            '--tw-prose-pre-bg': 'var(--ts-surface)',
            maxWidth: '72ch',
          },
        },
      }),
    },
  },
  plugins: [typography],
};

export default config;
