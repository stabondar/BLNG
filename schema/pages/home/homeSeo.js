import seoFields from "@schema/seoFields"

export default
{
    name: 'homeSeo',
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
