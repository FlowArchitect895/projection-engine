import {defineType, defineField} from 'sanity'

export const mechanic = defineType({
  name: 'mechanic',
  title: 'Mechanic',
  type: 'document',
  fields: [
    defineField({name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'body', title: 'Body', type: 'text', validation: (Rule) => Rule.required()}),
    defineField({name: 'sourceRef', title: 'Source Reference', type: 'string'}),
    defineField({
      name: 'voicedBy',
      title: 'Voiced By',
      type: 'reference',
      description: 'The ego Source this mechanic speaks through',
      to: [{type: 'source'}],
    }),
  ],
})
