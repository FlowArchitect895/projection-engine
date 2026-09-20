import {defineType, defineField} from 'sanity'

export const mechanic = defineType({
  name: 'mechanic',
  title: 'Mechanic',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The named rule, e.g. "The Leak", "Tempo vs Rhythm"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'text',
      description: 'The authored text of the mechanic',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'sourceRef',
      title: 'Source Reference',
      type: 'string',
      description: 'Where in the corpus this came from (provenance)',
    }),
  ],
})
