export default
{
    name: 'blog',
    title: 'Blog Page',
    type: 'document',
    fields: 
    [   
        {
            name: 'title',
            type: 'text',
            title: 'Heading',
            rows: 2,
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
