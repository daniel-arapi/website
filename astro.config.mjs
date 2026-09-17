// @ts-check

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
  integrations: [
	mermaid(),
    starlight({
      title: 'Daniel Arapi',

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/daniel-arapi/',
        },
      ],

sidebar: [
  {
    label: 'Networking',
    items: [{ autogenerate: { directory: 'networking' } }],
  },
  {
    label: 'Network Automation',
    items: [{ autogenerate: { directory: 'network-automation' } }],
  },
  {
    label: 'Infrastructure',
    items: [{ autogenerate: { directory: 'infrastructure' } }],
  },
  {
    label: 'Development',
    items: [{ autogenerate: { directory: 'development' } }],
  },
],
    }),
  ],
});