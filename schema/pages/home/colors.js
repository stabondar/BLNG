import customHeading from "@schema/customHeading"

export default
{
    name: 'homeColors',
    title: 'Colors Section',
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
            title: 'Description',
            name: 'description',
            type: 'text',
            rows: 3,
        },
        {
            name: 'colors',
            type: 'array',
            title: 'Colors',
            of: 
            [
                {
                    type: 'reference', 
                    to: {type: 'colorItem'},
                }
            ],
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
