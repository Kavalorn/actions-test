export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name of a product',
            type: 'string',
        },
        {
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [{ type: 'image' }],
        },
        {
            name: 'descripiton',
            title: 'Description of a product',
            type: 'text',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Product slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
        },
        {
            name: 'price',
            title: 'Price of a product',
            type: 'number',
        },
        {
            name: 'category',
            title: 'Category of a product',
            type: 'reference',
            to: { type: 'category' },
        }
    ]
}