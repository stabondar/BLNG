import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { structureTool } from 'sanity/structure'
import { schemaTypes } from "@schema/index";
import { deskStructure } from "@schema/deskStructure";

const id = import.meta.env.PUBLIC_SANITY_PROJECT_ID
const dataset = import.meta.env.PUBLIC_SANITY_DATASET

export default defineConfig(
{
    name: "BLNG", // Can be whatever
    title: "BLNG", // Can be whatever
    projectId: id,
    dataset: dataset,
    plugins: 
    [
        // deskTool(),
        vercelDeployTool(),
        structureTool({structure: deskStructure}),
    ],
    schema: 
    {
        types: schemaTypes,
    },
})