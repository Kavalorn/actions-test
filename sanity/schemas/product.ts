const product = {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name of a product',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [{ type: 'image' }],
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'descripiton',
            title: 'Description of a product',
            type: 'text',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'price',
            title: 'Price of a product',
            type: 'number',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'category',
            title: 'Category of a product',
            type: 'reference',
            to: { type: 'category' },
            validation: (Rule: any) => Rule.required(),
        }
    ]
}

export default product;