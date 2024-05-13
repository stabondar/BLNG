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
        {
            title: 'Image',
            name: 'image',
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
