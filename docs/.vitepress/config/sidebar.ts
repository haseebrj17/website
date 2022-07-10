import { capitalCase, paramCase } from 'change-case';
import * as collection from '@dicebear/collection';
import { DefaultTheme } from 'vitepress';

const sidebar: DefaultTheme.SidebarGroup[] = [
  {
    text: 'Introduction',
    collapsible: true,
    items: [{ text: 'What is DiceBear?', link: '/introduction' }],
  },
  {
    text: 'How to use',
    collapsible: true,
    items: [
      { text: 'JS-Library', link: '/how-to-use/js-library' },
      { text: 'HTTP-API', link: '/how-to-use/http-api' },
      { text: 'CLI', link: '/how-to-use/cli' },
    ],
  },
  {
    text: 'Styles',
    collapsible: true,
    items: Object.keys(collection).map((styleName) => ({
      text: capitalCase(styleName),
      link: `/styles/${paramCase(styleName)}`,
    })),
  },
  {
    text: 'Guides',
    collapsible: true,
    items: [
      {
        text: 'Host the HTTP API yourself',
        link: '/guides/host-the-http-api-yourself',
      },
      {
        text: 'Contribute to the documentation',
        link: '/guides/contribute-to-the-documentation',
      },
      {
        text: 'Contribute to the library',
        link: '/guides/contribute-to-the-library',
      },
      {
        text: 'Create an avatar style from Scratch',
        link: '/guides/create-an-avatar-style-from-scratch',
      },
      {
        text: 'Create an avatar style with Figma',
        link: '/guides/create-an-avatar-style-with-figma',
      },
      {
        text: 'Use the library without tree shaking',
        link: '/guides/use-the-library-without-tree-shaking',
      },
      {
        text: 'Use the library without ESM',
        link: '/guides/use-the-library-without-esm',
      },
      {
        text: 'Use the library with React',
        link: '/guides/use-the-library-with-react',
      },
      {
        text: 'Use the library with Svelte',
        link: '/guides/use-the-library-with-svelte',
      },
      {
        text: 'Use the library with Vue',
        link: '/guides/use-the-library-with-vue',
      },
    ],
  },
];

export default sidebar;
