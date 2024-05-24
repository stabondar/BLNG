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
            title: 'Active to Tab',
            name: 'tab',
            type: 'string',
            options: 
            {
                list: 
                [
                    {title: 'Tab #1', value: '1'},
                    {title: 'Tab #2', value: '2'},
                    {title: 'Tab #3', value: '3'},
                ],
            },
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
            name: 'video',
            title: 'Video URL',
            type: 'url',
        },
        {
            title: 'Use Video',
            name: 'boolean',
            type: 'boolean'
        },
        {
            title: 'Mobile Image',
            name: 'mobileImg',
            type: 'image',
            options: 
            {
                hotspot: true
            }
        },
        {
            name: 'mobileVideo',
            title: 'Mobile Video',
            type: 'url',
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
