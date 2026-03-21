// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://yagopajarino.github.io',
	base: '/',
	integrations: [mdx(), sitemap()],
	markdown: {
		remarkPlugins: [
			[(await import('remark-callout')).default, { className: 'callout' }],
			(await import('remark-math')).default,
		],
		rehypePlugins: [(await import('rehype-katex')).default],
	},
});
