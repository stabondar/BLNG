import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default
{
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    orderings: [orderRankOrdering],
    orderRank: 'string',
    fields: 
    [   
        orderRankField({type: 'hero'}),
        {
            name: 'title',
            type: 'text',
            title: 'Heading',
            rows: 2,
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
