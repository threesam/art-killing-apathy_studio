import { defineType } from 'sanity'

export default defineType({
  name: 'videoUrl',
  type: 'object',
  title: 'Video Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: `Video Url`,
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
  },
})
