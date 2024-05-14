export default
{
    name: 'galeryHome',
    title: 'Galery Section',
    type: 'document',
    fields: 
    [
        {
            title: 'Tab #1 Title',
            name: 'title1',
            type: 'string',
        },
        {
            title: 'Tab #1 Description',
            name: 'descr1',
            type: 'text',
            rows: 3,
        },
        {
            title: 'Tab #2 Title',
            name: 'title2',
            type: 'string',
        },
        {
            title: 'Tab #2 Description',
            name: 'descr2',
            type: 'text',
            rows: 3,
        },
        {
            title: 'Tab #3 Title',
            name: 'title3',
            type: 'string',
        },
        {
            title: 'Tab #3 Description',
            name: 'descr3',
            type: 'text',
            rows: 3,
        },
        {
            name: 'galery',
            type: 'array',
            title: 'Galery Items',
            of: 
            [
                {
                    type: 'reference', 
                    to: {type: 'galeryItem'},
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
