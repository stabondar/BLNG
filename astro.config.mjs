import { defineConfig, squooshImageService } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    image: 
    {
        service: squooshImageService()
    },
    output: "server",
    adapter: vercel(),
    // vite: {
    //     plugins: [glsl()]
    // },
    integrations: 
    [
        tailwind(),
        // sanity(
        // {
        //     projectId: PUBLIC_SANITY_ID,
        //     dataset: PUBLIC_SANITY_DATASET,
        //     useCdn: false,
        //     apiVersion: "2024-04-26",
        //     studioBasePath: "/admin"
        // }), 
        // react()
    ]
});
