import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-cloudflare-workers';
import sri from '@small-tech/vite-plugin-sri'
/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        vite: {
            plugins: [sri()]
        },
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        adapter: adapter()
	},
    

    preprocess: [preprocess({
        postcss: true
    })],

};

export default config;
