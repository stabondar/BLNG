import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default
{
    name: 'beforeAfter',
    title: 'Before After Images',
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
            title: 'Left Image',
            name: 'leftImage',
            type: 'image',
            options: 
            {
                hotspot: true
            }
        },
        {
            title: 'Right Image',
            name: 'rightImage',
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
            media: 'leftImage'
        }
    }
}
