import {PiArticleMedium} from 'react-icons/pi'
import {defineType} from 'sanity'

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-PH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default defineType({
  name: 'article',
  type: 'document',
  title: 'Article',
  icon: PiArticleMedium,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of article',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of article',
      options: {
        source: 'title',
      },
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date of article',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heroImage',
      type: 'image',
      title: 'Hero Image',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'thesis',
      type: 'string',
      title: 'Brief Description'
    },
    {
      name: 'modules',
      type: 'array',
      title: 'Modules',
      of: [
        {type: 'richtext-module'},
        {type: 'image-module'},
        {type: 'video-module'},
        {type: 'hero.split'},
        {type: 'articles-list'},
        {type: 'events-list'},
        {type: 'slideshow'},
      ],
    },
  ],
  orderings: [
    {
      title: 'Date, Newest',
      name: 'DateDesc',
      by: [
        {field: 'date', direction: 'desc'}
      ]
    },
    {
      title: 'Date, Oldest',
      name: 'DateAsc',
      by: [
        {field: 'date', direction: 'asc'}
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      media: 'heroImage',
    },
    prepare: ({title, date, media}) => ({
      title,
      subtitle: formatDate(date),
      media: media,
    }),
  },
})
