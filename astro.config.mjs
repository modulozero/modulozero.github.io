import { defineConfig } from 'astro/config';
import rehypeAttrs from 'rehype-attr';

// https://astro.build/config
export default defineConfig({
    markdown: {
        rehypePlugins: [
            [rehypeAttrs, { properties: 'attr' }],
        ],
    },
});
