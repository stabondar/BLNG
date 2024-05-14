import { getFileAsset } from '@sanity/asset-utils'

export function getVideoUrl(source)
{
    const id = import.meta.env.PUBLIC_SANITY_PROJECT_ID
    const dataset = import.meta.env.PUBLIC_SANITY_DATASET

    return getFileAsset(source, 
    {
        projectId: id,
        dataset: dataset
    })
}