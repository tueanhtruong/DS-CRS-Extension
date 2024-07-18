import deepmerge from 'deepmerge';
import { Config } from 'tailwindcss';
import config from '../tailwind.config';

export function withUI(tailwindConfig: Config) {
  return deepmerge(
    tailwindConfig,
    deepmerge(config, {
      content: ['./node_modules/@chrome-extension-boilerplate/ui/lib/**/*.{tsx,ts,js,jsx}'],
    }),
  );
}
