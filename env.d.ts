/// <reference types="vitepress/client" />
/// <reference types="vue/macros-global" />

import { UserConfig } from 'vitepress';

declare module '@vue/theme/config' {
  const config: () => Promise<UserConfig>;
  export default config;
}

declare module '@vue/theme/highlight' {
  const createHighlighter: () => Promise<(input: string) => string>;
  export default createHighlighter;
}
