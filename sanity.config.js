import { buildLegacyTheme, defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './schemas'
import Logo from './components/Logo'

export default defineConfig({
  name: 'ArtKillingApathy',
  title: 'Art Killing Apathy',
  projectId: 'ppo5s5uj',
  dataset: 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
    },
  },
  // theme: buildLegacyTheme({
  //   '--brand-primary': '#a7272d',
  // }),
})
