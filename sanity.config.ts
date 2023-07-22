import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import Logo from './components/Logo'
import { media } from 'sanity-plugin-media'
import { schemaTypes } from './schemas'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'ArtKillingApathy',
  title: 'Art Killing Apathy',
  projectId: 'ppo5s5uj',
  dataset: 'production',
  plugins: [deskTool(), media(), visionTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
})
