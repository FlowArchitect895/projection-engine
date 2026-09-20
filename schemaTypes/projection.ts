import {defineType, defineField} from 'sanity'

export const projection = defineType({
  name: 'projection',
  title: 'Projection',
  type: 'document',
  fields: [
    defineField({
      name: 'domain',
      title: 'Domain',
      type: 'string',
      description: 'The input domain, e.g. "forex", "learning French"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'fields',
      title: 'Fields',
      type: 'array',
      description: 'The structured output, one entry per stage',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'stage', title: 'Stage', type: 'string'},
            {name: 'output', title: 'Output', type: 'text'},
          ],
        },
      ],
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {list: ['draft', 'reviewed', 'archived']},
      initialValue: 'draft',
      description: 'draft until a human reviews and approves it',
    }),
  ],
})
