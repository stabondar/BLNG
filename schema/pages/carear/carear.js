import privacyFields from "@schema/privacyFields"

export default
{
    name: 'carear',
    title: 'Carear Title',
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
