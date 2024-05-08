export default
{
    name: 'homeDesign',
    title: 'Design Section',
    type: 'document',
    fields: 
    [   
        {
            name: 'title',
            type: 'text',
            title: 'Heading',
            rows: 2,
        },
        {
            name: 'subtitle',
            type: 'text',
            title: 'Subtitle',
            rows: 2,
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
            title: 'title',
            media: 'image'
        }
    }
}
