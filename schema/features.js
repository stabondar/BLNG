import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default
{
    name: 'features',
    title: 'Features',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: 
    [
        orderRankField({type: 'beforeAfter'}),
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Subtitle',
            name: 'subtitle',
            type: 'string',
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
