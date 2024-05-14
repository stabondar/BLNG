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
            title: 'Image',
            name: 'image',
            type: 'image',
            options: 
            {
                hotspot: true
            }
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