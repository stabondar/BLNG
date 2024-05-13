import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default
{
    name: 'aboutLogos',
    title: 'Client Logos',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: 
    [
        orderRankField({type: 'aboutLogos'}),
        {
            title: 'Title',
            name: 'title',
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
