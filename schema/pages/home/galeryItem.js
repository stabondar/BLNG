import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default
{
    name: 'galeryItem',
    title: 'Galery Item',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: 
    [
        orderRankField({type: 'galeryItem'}),
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Color',
            name: 'color',
            type: 'string',
        },
        {
            title: 'Large Image',
            name: 'large',
            type: 'image',
            options: 
            {
                hotspot: true
            }
        },
        {
            title: 'Next Image Preview',
            name: 'next',
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
            media: 'large'
        }
    }
}
