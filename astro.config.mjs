import { loadEnv } from "vite";
import { defineConfig, squooshImageService } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

const { PUBLIC_SANITY_PROJECT_ID } = loadEnv(process.env.NODE_ENV, process.cwd(), "");
const { PUBLIC_SANITY_DATASET } = loadEnv(process.env.NODE_ENV, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  image: {
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
    sanity(
    {
        projectId: PUBLIC_SANITY_PROJECT_ID,
        dataset: PUBLIC_SANITY_DATASET,
        useCdn: false,
        apiVersion: "2024-04-26",
        studioBasePath: "/admin"
    }), 
  // react()
   react()]
});