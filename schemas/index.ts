// document schemas
import author from './documents/author'
import category from './documents/category'
import film from './documents/film'
import page from './documents/page'
import post from './documents/post'
import siteSettings from './documents/siteSettings'
import tag from './documents/tag'

// Object types
import authorReference from './objects/authorReference'
import bodyPortableText from './objects/bodyPortableText'
import cta from './objects/cta'
import excerptPortableText from './objects/excerptPortableText'
import featuredMedia from './objects/featuredMedia'
import videoUrl from './objects/videoUrl'
import wordCloud from './objects/wordCloud'

// Then we give our schema to the builder and provide the result to Sanity
export const schemaTypes = [
  // documents
  author,
  category,
  film,
  page,
  post,
  siteSettings,
  tag,

  // objects
  authorReference,
  bodyPortableText,
  cta,
  excerptPortableText,
  featuredMedia,
  videoUrl,
  wordCloud,
]
