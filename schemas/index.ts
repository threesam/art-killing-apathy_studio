// document schemas
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import page from './documents/page'
import tag from './documents/tag'
import press from './documents/press'
import siteSettings from './documents/siteSettings'

// Object types
import bodyPortableText from './objects/bodyPortableText'
import excerptPortableText from './objects/excerptPortableText'
import featuredMedia from './objects/featuredMedia'
import authorReference from './objects/authorReference'
import videoUrl from './objects/videoUrl'
import wordCloud from './objects/wordCloud'
import cta from './objects/cta'

// Then we give our schema to the builder and provide the result to Sanity
export const schemaTypes = [
  // documents
  author,
  category,
  post,
  page,
  tag,
  press,
  siteSettings,

  // objects
  bodyPortableText,
  excerptPortableText,
  featuredMedia,
  authorReference,
  videoUrl,
  wordCloud,
  cta,
]
