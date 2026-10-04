import {defineType, defineField} from 'sanity'

export const nextMove = defineType({
  name: 'nextMove',
  title: 'Next Move',
  type: 'document',
  description: 'A real, buildable next step proposed from a projection. Proposes, waits for the human to own it.',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'kind', title: 'Kind', type: 'string', options: {list: ['learn', 'build', 'ship', 'test']}, validation: (Rule) => Rule.required()}),
    defineField({name: 'move', title: 'The Move', type: 'text', validation: (Rule) => Rule.required()}),
    defineField({name: 'firstStep', title: 'First Step', type: 'text'}),
    defineField({name: 'wildcard', title: 'Wildcard', type: 'text'}),
    defineField({
      name: 'fromProjection',
      weak: true,
      title: 'From Projection',
      type: 'reference',
      to: [{type: 'projection'}],
      description: 'The projection this move came out of',
    }),
    defineField({
      name: 'groundedIn',
      title: 'Grounded In',
      type: 'array',
      description: 'The stages or tensions this move traces back to (keeps it honest)',
      of: [{type: 'reference', to: [{type: 'stage'}, {type: 'tension'}]}],
    }),
    defineField({name: 'status', title: 'Status', type: 'string', options: {list: ['proposed', 'owned', 'dismissed']}, initialValue: 'proposed'}),
  ],
})
