import { loadEnv } from "vite";
import { defineConfig, squooshImageService } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

const { PUBLIC_SANITY_PROJECT_ID } = loadEnv(process.env.NODE_ENV, process.cwd(), "");
const { PUBLIC_SANITY_DATASET } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig(
{
    prefetch: 
    {
        prefetchAll: true
    },
    image: 
    {
        service: squooshImageService(),
        domains: ["cdn.sanity.io"]
    },
    output: "server",
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