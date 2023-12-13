import { defineType } from "sanity";

export const mainPage = defineType({
    name: 'mainPage',
    title: 'Main Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'blocks',
        title: 'Blocks',
        type: 'array',
        of: [
          { type: 'heroImages' }, // Reference to the first form schema
          { type: 'blockTwo' }, // Reference to the second form schema
        ],
      },
    ],
  });