import { App } from 'vue';
import { createVuetify } from 'vuetify';
import DefaultTheme from 'vitepress/theme';
import Layout from './Layout.vue';
import { createPinia } from 'pinia';
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }: { app: App }) {
    const isSsr = typeof window === 'undefined';

    const pinia = createPinia();

    const vuetify = createVuetify({
      ssr: isSsr,
      icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
      },
      theme: {
        themes: {
          light: {
            dark: false,
            colors: {
              primary: '#1689cc',
              secondary: '#E4E7E9',
              surface: '#f9f9f9',
            },
            variables: {
              'activated-opacity': 0.08,
            },
          },
          dark: {
            dark: true,
            colors: {
              primary: '#1689cc',
              secondary: '#3A3A3A',
              surface: '#2F2F2F',
            },
            variables: {
              'activated-opacity': 0.08,
            },
          },
        },
      },
    });

    app.use(pinia);
    app.use(vuetify);
  },
};
