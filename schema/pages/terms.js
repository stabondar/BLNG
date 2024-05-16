import privacyFields from "@schema/privacyFields"

export default
{
    name: 'terms',
    title: 'Terms & Conditions',
    type: 'document',
    fields: 
    [   
        ...privacyFields(),
    ],
    preview: 
    {
        select: 
        {
            title: 'title',
        }
    }
}
