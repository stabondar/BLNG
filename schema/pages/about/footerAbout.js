import customHeading from "@schema/customHeading"

export default
{
    name: 'footerAbout',
    title: 'Footer',
    type: 'document',
    fields: 
    [   
        {
            title: 'Title',
            name: 'title',
            type: 'text',
            rows: 1,
        },
        {
            title: 'Subtitle',
            name: 'subtitle',
            type: 'text',
            rows: 1,
        },
        {
            ...customHeading('Description', 'description'),
        },
        {
            title: 'Button Link',
            name: 'btnLink',
            type: 'string',
        },
        {
            title: 'Linkedin Link',
            name: 'linkedin',
            type: 'string',
        },
        {
            title: 'Facebook Link',
            name: 'facebook',
            type: 'string',
        },
        {
            title: 'Instagram Link',
            name: 'instagram',
            type: 'string',
        },
        {
            title: 'YouTube Link',
            name: 'youtube',
            type: 'string',
        },
    ],
    preview: 
    {
        select: 
        {
            title: 'title',
            media: 'image'
        }
    }
}
