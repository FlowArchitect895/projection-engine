import {defineType, defineField} from 'sanity'

export const method = defineType({
  name: 'method',
  title: 'Method',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: (Rule) => Rule.required()}),
    defineField({name: 'summary', title: 'Summary', type: 'text'}),
    defineField({
      name: 'stages',
      title: 'Stages',
      type: 'array',
      description: 'The stages of the loop, in order',
      of: [{type: 'reference', to: [{type: 'stage'}]}],
    }),
    defineField({name: 'author', title: 'Author', type: 'string'}),
    defineField({name: 'version', title: 'Version', type: 'string'}),
  ],
})
