import * as path from 'path';
import { defineConfigWithTheme } from 'vitepress';
import { ThemeOptions } from '@shared/types';
import sidebar from './config/sidebar';
import avatarStyles from './config/avatarStyles';
import vuetify from 'vite-plugin-vuetify';

export default defineConfigWithTheme<ThemeOptions>({
  title: 'DiceBear',
  description:
    'With DiceBear you can create awesome avatars for your project in no time.',
  cleanUrls: 'with-subfolders',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
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
      {
        text: 'Documentation',
        link: '/introduction',
        activeMatch: '^/(introduction|how-to-use|guides)',
      },
      { text: 'Styles', link: '/styles', activeMatch: '^/styles' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dicebear/dicebear' },
    ],
    editLink: {
      pattern: 'https://github.com/dicebear/website/edit/main/docs/:path',
    },
    sidebar: {
      '/introduction': sidebar,
      '/styles': sidebar,
      '/how-to-use': sidebar,
      '/guides': sidebar,
      '/playground': [
        {
          text: 'Playground',
          items: [{ text: 'Playground', link: '/playground' }],
        },
      ],
    },
  },
  markdown: {},
});
