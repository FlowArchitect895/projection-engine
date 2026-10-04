import {defineType, defineField} from 'sanity'

export const projection = defineType({
  name: 'projection',
  title: 'Projection',
  type: 'document',
  fields: [
    defineField({name: 'domain', title: 'Domain', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'fields',
      title: 'Fields',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'stage', title: 'Stage', type: 'string'},
          {name: 'output', title: 'Output', type: 'text'},
        ],
      }],
    }),
    defineField({name: 'tension', title: 'Tension', type: 'text', description: 'Where the egos disagree. Left for the human to resolve'}),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {list: ['draft', 'reviewed', 'archived']},
      initialValue: 'draft',
    }),
  ],
})
