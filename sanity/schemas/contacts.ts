import { defineField, defineType } from "sanity";

export default defineType({
    name: 'contacts',
    title: 'Contacts',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        }),

        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        }),

        defineField({
            name: 'message',
            title: 'Message',
            type: 'text',
            validation: (Rule: any) => Rule.required()
        }),

        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        }),
        
    ]
})