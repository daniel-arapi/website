// @ts-check

import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

import starlightImageZoom from 'starlight-image-zoom';
import starlightLinksValidator from 'starlight-links-validator';
import starlightTagsPlugin from 'starlight-tags';
import starlightTelescope from 'starlight-telescope';
import starlightPageActions from 'starlight-page-actions';
import starlightSiteGraph from 'starlight-site-graph';
import starlightLlmsTxt from 'starlight-llms-txt';
import { starlightIconsPlugin } from 'starlight-plugin-icons';

// Installed but not enabled below — both need a project-specific decision
// before they can be turned on safely:
//   - starlight-obsidian requires a `vault` path pointing at an actual
//     Obsidian vault to publish from (not this site's own content).
//   - starlight-sidebar-topics replaces the sidebar config entirely with a
//     topics-based structure, which would need the four existing sections
//     redefined as topics.
// import starlightObsidian from 'starlight-obsidian';
// import starlightSidebarTopics from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
  site: 'https://daniel-arapi.github.io',
  base: '/website',
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

      components: {
        PageTitle: './src/components/PageTitle.astro',
      },

      plugins: [
        starlightImageZoom(),
        starlightLinksValidator(),
        starlightTagsPlugin(),
        starlightTelescope(),
        // 'table-of-contents' avoids overriding PageTitle, which is already
        // overridden above for breadcrumbs.
        starlightPageActions({ position: 'table-of-contents' }),
        starlightSiteGraph(),
        starlightLlmsTxt(),
        starlightIconsPlugin(),
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
