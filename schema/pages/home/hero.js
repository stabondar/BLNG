import customHeading from "@schema/customHeading"

export default
{
    name: 'homeHero',
    title: 'Hero Section',
    type: 'document',
    fields: 
    [   
        {
            ...customHeading('Heading', 'text'),
        },
        {
            name: 'galery',
            type: 'array',
            title: 'Before After Images',
            of: 
            [
                {
                    type: 'reference', 
                    to: {type: 'beforeAfter'},
                }
            ],
        },
        {
            name: 'video',
            title: 'Loader Video',
            type: 'url',
        },
        {
            name: 'button',
            title: 'Button Link',
            type: 'url',
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string',
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
