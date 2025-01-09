import baseConfig from '@extension/tailwindcss-config';
import type { Config } from 'tailwindcss/types/config';

export default {
  ...baseConfig,
  important: '#app-container',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    // Remove the Tailwind CSS preflight styles so it can use Material UI's preflight instead (CssBaseline).
    preflight: false,
  },
} as Config;
