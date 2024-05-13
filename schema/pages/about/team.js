import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default
{
    name: 'team',
    title: 'Team',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: 
    [
        orderRankField({type: 'team'}),
        {
            title: 'Name',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Position',
            name: 'position',
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
