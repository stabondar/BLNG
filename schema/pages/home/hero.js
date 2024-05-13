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
    ],
    preview: 
    {
        select: 
        {
            title: 'title',
        }
    }
}
