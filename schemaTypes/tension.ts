import {defineType, defineField} from 'sanity'

export const tension = defineType({
  name: 'tension',
  title: 'Tension',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'sideA',
      title: 'Side A',
      type: 'reference',
      to: [{type: 'mechanic'}, {type: 'stage'}],
      description: 'One side of the contradiction',
    }),
    defineField({
      name: 'sideB',
      title: 'Side B',
      type: 'reference',
      to: [{type: 'mechanic'}, {type: 'stage'}],
      description: 'The other side',
    }),
    defineField({name: 'description', title: 'Description', type: 'text', validation: (Rule) => Rule.required()}),
    defineField({name: 'resolution', title: 'Resolution', type: 'text', description: 'Filled by the human when they rule on it'}),
    defineField({name: 'resolvedBy', title: 'Resolved By', type: 'string'}),
  ],
})
