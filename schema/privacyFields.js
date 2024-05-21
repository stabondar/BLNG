export default function privacyFields()
{
    return [        
        {
            title: 'Title',
            name: 'title',
            type: 'string',
        },
        {
            title: 'Description',
            name: 'descr',
            type: 'text',
            rows: 1,
        },
        {
            title: 'Body Text',
            name: 'body',
            type: 'array',
            of: 
            [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [
                        {
                        title: 'Normal',
                        value: 'normal',
                        },
                        {
                        title: 'Blockquote',
                        value: 'blockquote',
                        },
                        {
                        title: 'Heading 1',
                        value: 'h1',
                        },
                        {
                        title: 'Heading 2',
                        value: 'h2',
                        },
                        {
                        title: 'Heading 3',
                        value: 'h3',
                        },
                        {
                        title: 'Heading 4',
                        value: 'h4',
                        },
                        {
                        title: 'Heading 5',
                        value: 'h5',
                        },
                    ],

                    marks: {
                        decorators: [
                        {
                            title: 'Bold',
                            value: 'strong',
                        },
                        {
                            title: 'Italic',
                            value: 'em',
                        },
                        ],
                    },
                },
            ],
        },
    ]
}