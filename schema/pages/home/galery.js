import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default
{
    name: 'galery',
    title: 'Galery Section',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: 
    [
        orderRankField({type: 'galery'}),
        {
            title: 'Tab Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Description',
            name: 'descr',
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
