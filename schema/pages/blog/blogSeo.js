import seoFields from "@schema/seoFields"

export default
{
    name: 'blogSeo',
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
