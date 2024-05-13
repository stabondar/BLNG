import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default
{
    name: 'colorItem',
    title: 'Galery Item',
    type: 'document',
    orderings: [orderRankOrdering],
    fields: 
    [
        orderRankField({type: 'colorItem'}),
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
            title: 'Video URL',
            name: 'video',
            type: 'string',
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
