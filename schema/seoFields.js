export default function seoFields(imgDescr = 'Image', descrDescr = 'Descripion', titleDescr = 'Title')
{
    return [        
        {
            title: titleDescr,
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required().min(3).max(50),
        },
        {
            title: descrDescr,
            name: 'descr',
            type: 'text',
            rows: 3,
            validation: Rule => Rule.required().min(3).max(150),
        },
        {
            title: imgDescr,
            name: 'image',
            type: 'image',
            options: 
            {
                hotspot: true
            }
        }
    ]
}