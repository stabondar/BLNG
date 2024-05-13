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
            name: 'item2title',
            type: 'string',
            title: 'Item 2 Title',
        },
        {
            name: 'item3title',
            type: 'string',
            title: 'Item 3 Title',
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
