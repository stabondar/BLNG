import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

const createSection = (title, id, S) => 
{
    return S.listItem()
        .title(title)
        .child(S.editor().schemaType(id).documentId(id))
}

export const deskStructure = (S, context) => S.list()
    .title('BLNG')
    .items(
    [
        S.listItem()
            .title('Home Page')
            .child( 
                S.list()
                    .title('Home Page')
                    .items(
                    [
                        createSection('Hero', 'hero', S),
                        createSection('Design Section', 'homeDesign', S),
                        createSection('Phrase Section First', 'homePhraseFirst', S),
                        createSection('Features Section', 'homeFeatures', S),
                        createSection('Phrase Section Second', 'homePhraseSecond', S),
                    ])
            ),
            S.divider(),
        
        // remove default document types
        ...S.documentTypeListItems().filter(listItem => 
            !['hero', 'beforeAfter', 'homeDesign', 'homePhraseFirst', 'homePhraseSecond', 'features', 'homeFeatures']
            .includes(listItem.getId())),
    ])