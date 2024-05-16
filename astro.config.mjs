import { defineConfig, squooshImageService } from 'astro/config';
import vercel from "@astrojs/vercel/static";
import tailwind from "@astrojs/tailwind";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig(
{
    prefetch: 
    {
        prefetchAll: true
    },
    image: 
    {
        service: squooshImageService()
    },
    output: "static",
    adapter: vercel(),
    vite: 
    {
        // plugins: [glsl()]
    },
    integrations: 
    [
        tailwind(),
        sanity(
        {
            projectId: '4x3qe5zn',
            dataset: 'production',
            useCdn: false,
            apiVersion: "2024-04-26",
            studioBasePath: "/admin",
        }), 
    // react()
    react()
    ]
});