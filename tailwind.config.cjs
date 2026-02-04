const { nextui } = require('@nextui-org/react');
const starlightPlugin = require('@astrojs/starlight-tailwind');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui(), starlightPlugin()],
}
