export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'project_link',
            title: 'Project_Link',
            type: 'string',
        },
        {
            name: 'code_link',
            title: 'Code_Link',
            type: 'string',
        },
        {
            name: 'imageUrl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array', 
            of: [
                {
                    name: 'tags',
                    title: 'Tags',
                    type: 'string',
                }
            ]                             
        },
    ],
};