export default function customHeading(title, name)
{
    return {        
        title: title,
        name: name,
        type: 'array',
        of: 
        [
            {
                title: 'Block',
                type: 'block',
                styles: 
                [
                    {
                        title: 'Normal',
                        value: 'normal',
                    },
                ],
    
                marks: 
                {
                    decorators: 
                    [
                        {
                            title: 'Bold',
                            value: 'strong',
                        },
                    ],
                },
            },
        ],
    }
}