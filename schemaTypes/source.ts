import {defineType, defineField} from 'sanity'

export const source = defineType({
  name: 'source',
  title: 'Source',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Name of the source document or passage',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      description: 'The actual passage this claim traces back to',
    }),
    defineField({
      name: 'originDoc',
      title: 'Origin Document',
      type: 'string',
      description: 'Which corpus doc it came from, e.g. "ROOTFLOW Foundation"',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      description: 'Optional link to the source',
    }),
  ],
})
