import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import typescript from '@rollup/plugin-typescript';

import dotenv from 'dotenv';

dotenv.config({ path: resolve(__dirname, './../', '.env') });

const env = process.env;

const HELP_URL = env.HELP_URL || '';
const FEEDBACK_URL = env.FEEDBACK_URL || '';

module.exports = {
  title: 'Broxus Documentations',
  base: '/',
  description: '',
  rewrites: {
    'src/index.md': 'index.md',
  },
  // head: [
  //   [
  //     'script',
  //     {
  //       async: true,
  //       src: 'https://www.googletagmanager.com/gtag/js?id=G-,
  //     },
  //   ],
  //   [
  //     'script',
  //     {},
  //     "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-');",
  //   ],
  // ],
  plugins: [vue(), typescript()],

  themeConfig: {
    nav: [
      { text: 'Feedback', link: `${FEEDBACK_URL}` },
      { text: 'Community', link: `${HELP_URL}` },
    ],
    sidebar: [
      {
        text: 'Everscale Inpage Provider',

        link: 'https://everscale-inpage-provider.netlify.app',
      },
      {
        text: 'OctusBridge Integration',

        link: 'https://octus-bridge-integration-demo.vercel.app/',
      },
      { text: 'Locklift', link: 'https://locklift-docs.netlify.app/' },
      { text: 'TIP-3 API Reference', link: 'https://tip3-api-reference.netlify.app/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/broxus/broxus-docs' }],
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        external: ['fs', 'path', 'assert', 'util'],
      },
    },
  },

  esbuild: {
    target: ['chrome89', 'edge89', 'firefox79', 'safari14.1'],
  },
  optimizeDeps: {
    exclude: ['fs', 'path', 'assert', 'util'],
  },
};
