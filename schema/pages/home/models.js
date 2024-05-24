import customHeading from "@schema/customHeading"

export default
{
    name: 'homeModels',
    title: 'CAD Models',
    type: 'document',
    fields: 
    [   
        {
            ...customHeading('Heading', 'heading'),
        },
        {
            ...customHeading('Subtitle', 'subtitle'),
        },
        {
            name: 'item1title',
            type: 'string',
            title: 'Item 1 Title',
        },
        {
            name: 'video1',
            title: 'Video URL #1',
            type: 'url',
        },
        {
            name: 'item2title',
            type: 'string',
            title: 'Item 2 Title',
        },
        {
            name: 'video2',
            title: 'Video URL #2',
            type: 'url',
        },
        {
            name: 'item3title',
            type: 'string',
            title: 'Item 3 Title',
        },
        {
            name: 'video3',
            title: 'Video URL #3',
            type: 'url',
        },
    ],
    preview: 
    {
        select: 
        {
            title: 'heading',
            media: 'image'
        }
    }
}
