import { defineConfig } from 'astro/config';
import rehypeAttrs from 'rehype-attr';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.modzero.xyz',
    markdown: {
        rehypePlugins: [
            [rehypeAttrs, { properties: 'attr' }],
        ],
    },
});
