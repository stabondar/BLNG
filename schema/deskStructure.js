import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { CiCircleList } from "react-icons/ci";

const createSection = (title, id, S) => 
{
    return S.listItem()
        .title(title)
        .child(S.editor().schemaType(id).documentId(id))
}

const createOrderableSection = (title, id, S, context) =>
{
    return orderableDocumentListDeskItem(
    {
        title: title,
        type: id,
        icon: CiCircleList,
        S, 
        context
    })
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
                        createSection('SEO', 'homeSeo', S),
                        createSection('Hero', 'homeHero', S),
                        createSection('Design Section', 'homeDesign', S),
                        createSection('Phrase Section First', 'homePhraseFirst', S),
                        createSection('Features Section', 'homeFeatures', S),
                        createSection('Mockup Section', 'homeMockup', S),
                        createSection('Phone Section', 'homePhone', S),
                        createSection('CAD Models', 'homeModels', S),
                        createSection('Phrase Section Second', 'homePhraseSecond', S),
                        createSection('Gallery Section', 'galeryHome', S),
                        createSection('Colors Section', 'homeColors', S),
                        createSection('Services Section', 'services', S),
                        createSection('Footer', 'footer', S),
                    ])
            ),
        S.divider(),

        S.listItem()
            .title('About Page')
            .child( 
                S.list()
                    .title('About Page')
                    .items(
                    [
                        createSection('SEO', 'aboutSeo', S),
                        createSection('Hero', 'aboutHero', S),
                        createSection('Team', 'aboutTeam', S),
                        // createOrderableSection('Client Logos', 'aboutLogos', S, context),
                    ])
            ),
            
        S.divider(),
            
        S.listItem()
            .title('Blog Page')
            .child( 
                S.list()
                    .title('Blog Page')
                    .items(
                    [
                        createSection('SEO', 'blogSeo', S),
                        createSection('Title', 'blog', S),
                        createOrderableSection('Blog Posts', 'blogList', S, context),
                    ])
            ),

        // remove default document types
        ...S.documentTypeListItems().filter(listItem => 
            ![
                'homeHero', 'beforeAfter', 'homeDesign', 'homePhraseFirst', 'homePhraseSecond', 'features', 'homeFeatures',
                'aboutHero', 'aboutLogos', 'team', 'aboutTeam', 'blogList', 'blog', 'homeMockup', 'homePhone', 'homeModels',
                'galeryItem', 'galeryHome', 'homeColors', 'colorItem', 'services', 'footer', 'homeSeo', 'aboutSeo', 'blogSeo'
            ]
            .includes(listItem.getId())),
    ])