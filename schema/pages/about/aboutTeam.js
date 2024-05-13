export default
{
    name: 'aboutTeam',
    title: 'Team Section',
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
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 2,
        },
        {
            name: 'team',
            type: 'array',
            title: 'Team',
            of: 
            [
                {
                    type: 'reference', 
                    to: {type: 'team'},
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
