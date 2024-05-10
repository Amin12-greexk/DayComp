import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Daycomp Percetakan',

  projectId: 'kg9dmyo1',
  dataset: 'production',

  schema: {
    types: schemaTypes,
  },
})
