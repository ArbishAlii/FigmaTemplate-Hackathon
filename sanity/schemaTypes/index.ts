import { type SchemaTypeDefinition } from 'sanity'
import { productSchema } from './product'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema],
}
console.log({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
});
