import customHeading from "@schema/customHeading"

export default
{
    name: 'homeDesign',
    title: 'Design Section',
    type: 'document',
    fields: 
    [   
        {
            ...customHeading('Heading', 'heading'),
        },
        {
            ...customHeading('Subtitle', 'subtitle'),
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
