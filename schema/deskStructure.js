import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { CiCircleList } from "react-icons/ci";

export const deskStructure = (S, context) => S.list()
    .title('Citix')
    .items(
    [
        S.listItem()
            .title('News Page')
            .child( 
                S.list()
                    .title('News Page')
                    .items(
                    [
                        // S.listItem()
                        //     .title('Posts')
                        //     .child(
                        //         S.documentTypeList('blog')
                        //             .title('Posts')
                        //     ),
                        orderableDocumentListDeskItem(
                        {
                            title: 'Posts',
                            type: 'blog',
                            icon: CiCircleList,
                            S, 
                            context
                        }),
                        S.divider(),
                        // S.listItem()
                        //     .title('Categories')
                        //     .child(
                            //         S.documentTypeList('categories')
                            //             .title('Categories')
                            //     ),
                        orderableDocumentListDeskItem(
                            {
                                title: 'Categories',
                                type: 'categories',
                                icon: CiCircleList,
                                S, 
                                context
                            }),
                    ])
            ),
            S.divider(),
        
        // remove default document types
        ...S.documentTypeListItems().filter(listItem => 
            !['blog', 'categories']
            .includes(listItem.getId())),
    ])