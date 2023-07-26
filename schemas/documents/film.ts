import { defineType } from 'sanity'

export default defineType({
  name: 'film',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      type: 'image',
    },
    {
      name: 'synopsis',
      type: 'bodyPortableText',
      title: 'Synopsis',
    },
    {
      name: 'cast',
      type: 'array',
      of: [
        {
          name: 'contributor',
          type: 'object',
          fields: [
            {
              name: 'role',
              type: 'string',
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url',
            },
          ],

          preview: {
            select: {
              name: 'name',
              role: 'role',
            },
            prepare(selection) {
              const { name, role } = selection

              return Object.assign({}, selection, {
                title: role,
                subtitle: name,
              })
            },
          },
        },
      ],
    },
    {
      name: 'crew',
      type: 'array',
      of: [
        {
          name: 'contributor',
          type: 'object',
          fields: [
            {
              name: 'role',
              type: 'string',
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'link',
              title: 'Link',
              type: 'url',
            },
          ],

          preview: {
            select: {
              name: 'name',
              role: 'role',
            },
            prepare(selection) {
              const { name, role } = selection

              return Object.assign({}, selection, {
                title: role,
                subtitle: name,
              })
            },
          },
        },
      ],
    },
    {
      name: 'showPress',
      type: 'boolean',
    },
    {
      hidden: ({ parent }) => !parent?.showPress,
      name: 'press',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'publication',
              type: 'string',
            },
            {
              name: 'url',
              type: 'url',
            },
            {
              name: 'image',
              type: 'image',
            },
          ],
        },
      ],
      type: 'array',
    },
    {
      name: 'showLaurels',
      type: 'boolean',
    },
    {
      hidden: ({ parent }) => !parent?.showLaurels,
      name: 'laurels',
      of: [
        {
          type: 'object',
          name: 'laurel',
          fields: [
            {
              name: 'title',
              type: 'string',
            },
            {
              name: 'url',
              type: 'url',
            },
            {
              name: 'image',
              type: 'image',
            },
          ],
        },
      ],
      type: 'array',
    },
    {
      name: 'releaseDate',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM-DD',
        timeFormat: 'HH:mm',
      },
    },
    {
      name: 'gumroadLink',
      type: 'url',
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          type: 'string',
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'image',
          type: 'image',
        },
      ],
    },
  ],
})
