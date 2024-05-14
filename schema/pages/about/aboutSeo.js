import seoFields from "@schema/seoFields"

export default
{
    name: 'aboutSeo',
    title: 'SEO Titles',
    type: 'document',
    fields: 
    [   
        ...seoFields(),
    ],
    preview: 
    {
        select: 
        {
            title: 'title',
        }
    }
}
