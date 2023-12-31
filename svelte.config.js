import preprocess from "svelte-preprocess";
// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    })
  },
  // preprocess: vitePreprocess()
  preprocess: [
    preprocess({
      postcss: true
    })
  ]
};
export default config;