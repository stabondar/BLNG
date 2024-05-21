import customHeading from "@schema/customHeading"

export default
{
    name: 'services',
    title: 'Services Section',
    type: 'document',
    fields: 
    [   
        {
            ...customHeading('Heading', 'heading'),
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text',
            rows: 3,
        },
        {
            name: 'item1title',
            type: 'string',
            title: 'Item 1 Title',
        },
        {
            name: 'item1text',
            type: 'string',
            title: 'Item 1 Subtitle',
        },
        {
            name: 'item1link',
            type: 'string',
            title: 'Item 1 Button Link',
        },
        {
            name: 'item1linktarget',
            type: 'boolean',
            title: 'Item 1 Button open in new tab?',
        },
        {
            title: 'Item 1 Image',
            name: 'item1image',
            type: 'image',
            options: 
            {
                hotspot: true
            }
        },
        {
            name: 'item2title',
            type: 'string',
            title: 'Item 2 Title',
        },
        {
            name: 'item2text',
            type: 'string',
            title: 'Item 2 Subtitle',
        },
        {
            name: 'item2link',
            type: 'string',
            title: 'Item 2 Button Link',
        },
        {
            name: 'item2linktarget',
            type: 'boolean',
            title: 'Item 2 Button open in new tab?',
        },
        {
            title: 'Item 2 Image',
            name: 'item2image',
            type: 'image',
            options: 
            {
                hotspot: true
            }
        },
        {
            name: 'item3title',
            type: 'string',
            title: 'Item 3 Title',
        },
        {
            name: 'item3text',
            type: 'string',
            title: 'Item 3 Subtitle',
        },
        {
            name: 'item3link',
            type: 'string',
            title: 'Item 3 Button Link',
        },
        {
            name: 'item3linktarget',
            type: 'boolean',
            title: 'Item 3 Button open in new tab?',
        },
        {
            title: 'Item 3 Image',
            name: 'item3image',
            type: 'image',
            options: 
            {
                hotspot: true
            }
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
