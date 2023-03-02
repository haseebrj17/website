import * as fs from 'node:fs';
import * as path from 'node:path';
import { defineConfigWithTheme, HeadConfig } from 'vitepress';
import { ThemeOptions } from '@shared/types';
import sidebarDocs from './config/sidebarDocs';
import sidebarPlayground from './config/sidebarPlayground';
import sidebarLegal from './config/sidebarLegal';
import avatarStyles from './config/avatarStyles';
import vuetify from 'vite-plugin-vuetify';

const sitemapLinks: string[] = [];

export default defineConfigWithTheme<ThemeOptions>({
  title: 'DiceBear',
  description:
    'With DiceBear you can create awesome avatars for your project in no time.',
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  transformHead: (ctx) => {
    const result: HeadConfig[] = [];

    if (ctx.pageData.relativePath) {
      const canonicalPath =
        ctx.pageData.relativePath === 'index.md'
          ? ''
          : ctx.pageData.relativePath.replace(/\.md$/, '');

      result.push([
        'link',
        { rel: 'canonical', href: `https://www.dicebear.com/${canonicalPath}` },
      ]);
    }

    return result;
  },
  transformHtml: (_, id, { pageData }) => {
    if (id.endsWith('404.html')) {
      return;
    }

    sitemapLinks.push(
      pageData.relativePath.replace(/((^|\/)index)?\.md$/, '$2')
    );
  },
  buildEnd: ({ outDir }) => {
    const sitemap = `<urlset xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapLinks
  .map((link) => `  <url><loc>https://www.dicebear.com/${link}</loc></url>`)
  .join('\n')}
</urlset>`;

    fs.writeFileSync(path.resolve(outDir, 'sitemap.xml'), sitemap);
  },
  vite: {
    plugins: [
      vuetify({
        styles: { configFile: __dirname + '/theme/styles/vuetify.scss' },
      }),
    ],
    ssr: {
      noExternal: ['vuetify'],
    },
    resolve: {
      alias: {
        '@playground': path.resolve(__dirname, 'playground'),
        '@shared': path.resolve(__dirname, 'shared'),
        // Temporary fix for Safari / Select scrolling on mobile
        'body-scroll-lock': path.resolve(
          __dirname,
          'shared/utils/body-scroll-lock.ts'
        ),
        './components/VPLocalNav.vue': path.resolve(
          __dirname,
          'theme/components/VPLocalNav.vue'
        ),
      },
    },
  },
  themeConfig: {
    avatarStyles,
    siteTitle: '',
    logo: {
      dark: '/logo-dark.svg',
      light: '/logo.svg',
    },
    nav: [
      { text: 'Playground', link: '/playground' },
      { text: 'Editor', link: 'https://editor.dicebear.com' },
      {
        text: 'Documentation',
        link: '/introduction',
        activeMatch: '^/(introduction|how-to-use|guides|styles)',
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dicebear/dicebear' },
    ],
    editLink: {
      pattern: 'https://github.com/dicebear/website/edit/main/docs/:path',
    },
    sidebar: {
      '/introduction': sidebarDocs,
      '/styles': sidebarDocs,
      '/how-to-use': sidebarDocs,
      '/guides': sidebarDocs,
      '/playground': sidebarPlayground,
      '/legal': sidebarLegal,
    },
  },
  markdown: {},
});
