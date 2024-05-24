import customHeading from "@schema/customHeading"

export default
{
    name: 'homeMockup',
    title: 'Mockup Section',
    type: 'document',
    fields: 
    [   
        {
            ...customHeading('Heading', 'text'),
        },
        {
            name: 'item1title',
            type: 'string',
            title: 'Item 1 Title',
        },
        {
            name: 'item1text',
            type: 'text',
            title: 'Item 1 Description',
        },
        {
            name: 'item2title',
            type: 'string',
            title: 'Item 2 Title',
        },
        {
            name: 'item2text',
            type: 'text',
            title: 'Item 2 Description',
        },
        {
            name: 'video',
            title: 'Video URL',
            type: 'url',
        }
    ],
    preview: 
    {
        select: 
        {
            title: 'title',
        }
    }
}
