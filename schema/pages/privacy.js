import privacyFields from "@schema/privacyFields"

export default
{
    name: 'privacy',
    title: 'Privacy policy',
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
