import {defineType, defineField} from 'sanity'

export const source = defineType({
  name: 'source',
  title: 'Source',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'kind', title: 'Kind', type: 'string', options: {list: ['ego', 'evidence']}, initialValue: 'evidence'}),
    defineField({name: 'excerpt', title: 'Excerpt', type: 'text'}),
    defineField({name: 'originDoc', title: 'Origin Document', type: 'string'}),
    defineField({name: 'url', title: 'URL', type: 'url'}),
    defineField({name: 'nativeQuestion', title: 'Native Question', type: 'string'}),
    defineField({name: 'voice', title: 'Voice', type: 'text', description: 'How this ego sounds: rhythm, imagery, humor, in corpus language'}),
    defineField({name: 'lore', title: 'Lore', type: 'text', description: 'The living backstory this ego comes from'}),
    defineField({name: 'strength', title: 'Strength', type: 'text'}),
    defineField({name: 'shadow', title: 'Shadow', type: 'text', description: 'How this ego goes wrong. The cue for another ego to step in'}),
    defineField({name: 'never', title: 'Never', type: 'text', description: 'What this ego refuses to do or become'}),
    defineField({
      name: 'speaksAt',
      title: 'Speaks At',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'stage'}]}],
    }),
    defineField({
      name: 'correctedBy',
      title: 'Corrected By',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'source'}]}],
    }),
  ],
})
