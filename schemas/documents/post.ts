import { defineType } from 'sanity'
import { format, parseISO } from 'date-fns'

export default defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Titles should be catchy, descriptive, and not too long',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published at',
      description: 'This can be used to schedule post for publishing',
      options: {
        dateFormat: 'MM-DD-YYYY',
        timeFormat: 'HH:mm',
      },
    },
    {
      name: 'featuredMedia',
      type: 'featuredMedia',
    },
    {
      name: 'excerpt',
      type: 'excerptPortableText',
      title: 'Excerpt',
      description:
        'This ends up on summary pages, on Google, when people share your post in social media.',
    },
    {
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [
        {
          name: 'author',
          type: 'reference',
          to: [
            {
              type: 'author',
            },
          ],
        },
      ],
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Categories',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category',
          },
        },
      ],
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [
        {
          type: 'reference',
          to: {
            type: 'tag',
          },
        },
      ],
    },
    {
      name: 'cta',
      type: 'cta',
      title: 'Call To Action',
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      title: 'Body',
    },
    {
      name: 'fromWordpress',
      type: 'boolean',
      hidden: true,
    },
  ],
  orderings: [
    {
      title: 'Publish Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      publishedAt: 'publishedAt',
      slug: 'slug',
      media: 'featuredMedia',
    },
    prepare({ title = 'No title', publishedAt, media }) {
      const date = format(parseISO(publishedAt), 'yyyy/MM/dd')
      return {
        title,
        media,
        subtitle: publishedAt ? date : 'no publishing date',
      }
    },
  },
})
