import {defineType, defineField} from 'sanity'

export const stage = defineType({
  name: 'stage',
  title: 'Stage',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'order', title: 'Order', type: 'number', validation: (Rule) => Rule.required()}),
    defineField({name: 'prompt', title: 'Prompt', type: 'text', validation: (Rule) => Rule.required()}),
    defineField({name: 'outputField', title: 'Output Field', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({
      name: 'mechanics',
      title: 'Mechanics',
      type: 'array',
      description: 'The mechanics that govern this stage',
      of: [{type: 'reference', to: [{type: 'mechanic'}]}],
    }),
  ],
})
