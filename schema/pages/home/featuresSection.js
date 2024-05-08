export default
{
    name: 'homeFeatures',
    title: 'Features Section',
    type: 'document',
    fields: 
    [   
        {
            name: 'title',
            type: 'text',
            title: 'Heading',
            rows: 1,
        },
        {
            name: 'slides',
            type: 'array',
            title: 'Slides',
            of: 
            [
                {
                    type: 'reference', 
                    to: {type: 'features'},
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
