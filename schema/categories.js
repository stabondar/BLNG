import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'

export default {

    name: 'categories',
    type: 'document',
    title: 'Categories',
    orderings: [orderRankOrdering],
    fields: [
      orderRankField({type: 'categories'}),
      {
        name: 'name',
        type: 'string',
        title: 'Categories Name'
      },
      {
        name: 'order',
        type: 'number',
        title: 'Order Number'
      },
    ]
  }